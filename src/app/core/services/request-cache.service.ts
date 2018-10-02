import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

const maxAge: number = 10000;
const useLifetime: boolean = false;

@Injectable()
export class RequestCache {
    cache = new Map();

    public get(req: HttpRequest<any>): HttpResponse<any> | undefined {
        const url = req.urlWithParams;
        const cached = this.cache.get(url);

        if (!cached) {
            return undefined;
        }

        if (useLifetime) {
            const isExpired = cached.lastRead < (Date.now() - maxAge);

            if (isExpired) {
                this.cache.delete(url);

                return undefined;
            }
        }

        return cached.response;
    }

    public put(req: HttpRequest<any>, response: HttpResponse<any>): void {
        const url = req.url;
        const entry = { url, response, lastRead: Date.now() };
        this.cache.set(url, entry);

        if (useLifetime) {
            const expired = Date.now() - maxAge;
            this.cache.forEach(expiredEntry => {
                if (expiredEntry.lastRead < expired) {
                    this.cache.delete(expiredEntry.url);
                }
            });
        }
    }
}