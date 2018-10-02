import { Injectable } from "@angular/core";

@Injectable()
export class SerializeService {
    toString(obj: any): string {
        let params: URLSearchParams = new URLSearchParams();
        for (let key in obj) {
            if (obj[key] instanceof Array) {
                obj[key].map(e => params.append(key, e))
            }
            else {
                params.set(key, obj[key]);
            }
        }

        let str = params.toString();
        return str;
    }
}
