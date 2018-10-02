import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';
import { Task } from '../../models/task';

@Injectable()
export class MainService {
    constructor(private http: HttpClient) { }

    public moveToStage(stage: string, ids: any) {
        return this.http.post(`tasks/${stage}/`, ids)
    }
    
    public createTask(task: Task) {
        return this.http.post(`tasks/`, task)
    }
    
    public getAccountDetail(userId: number, platform: string): Observable<any> {
        return this.http.get(`entities/${platform}/accounts/${userId}/`);
    }
}
