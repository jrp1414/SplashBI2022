

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private httpClient: HttpClient) { }

    login(user: User) {
        let body = new URLSearchParams();
        body.set('username', user.username);
        body.set('password', user.password);
        body.set('grant_type', user.grant_type);

        let options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        return this.httpClient.post(`${environment.baseUrl}/login`, body.toString(), options);
    }
}

export class User {
    username!: string;
    password!: string;
    grant_type!: string;
}