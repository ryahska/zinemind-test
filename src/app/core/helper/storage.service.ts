import { LocalStorageKey } from './../config/const';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() { }
    async setLocalStorage(key: string | any, data: string | any) {
        data = JSON.stringify(data);
        await localStorage.setItem(key, data);
    }
    getLocalStorage(key: any): any {
        return JSON.parse(localStorage.getItem(key) || '{}');
    }
    async clearLocalStorage(): Promise<any> {
        await localStorage.clear();
    }

}
