import { HttpParams } from "@angular/common/http";

export class CustomHttpParams extends HttpParams {
    constructor(public isCaching: boolean) {
        super();
    }
}