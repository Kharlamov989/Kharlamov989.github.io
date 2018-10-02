import { Injectable } from "@angular/core";


@Injectable()
export class ErrorService {
    message(response): string {
        let errorMessage = '';
        if (response.error instanceof Array) {
            errorMessage = response.error.join(", ");
        }
        else {
            for (let k1 in response.error) {
                if (response.error[k1] instanceof Array) {
                    errorMessage += response.error[k1].join(", ");
                }
                else {
                    for (let k2 in response.error[k1]) {
                        if (response.error[k1][k2] instanceof Array) {
                            errorMessage += response.error[k1][k2].join(', ')
                        }
                    }
                }
            }
        }
        
        // if (response.status >= 500) {
        //     this.notifier.notify("warn", 'Произошла ошибка');
        //     return;
        // }
        // this.notifier.notify("error", errorMessage || response.message);
        return errorMessage || response.message;
    }

    constructor(){}
}