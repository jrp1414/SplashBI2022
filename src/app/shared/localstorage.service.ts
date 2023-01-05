import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
    constructor() { }

    Set(token: any) {
        localStorage.clear();
        localStorage.setItem('token', token.access_token);
        localStorage.setItem('token_type', token.token_type);
    }

    Get() {
        return { token: localStorage.getItem('token'), token_type: localStorage.getItem('token_type') };
    }
}