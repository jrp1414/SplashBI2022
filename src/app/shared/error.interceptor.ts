import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { Observable, tap } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private toast: MessageService, private router: Router) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(() => { }, (error: any) => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status == 500) {
                        this.toast.add({
                            severity: 'error',
                            summary: 'Error',
                            detail: 'Internal Server Error'
                        });
                        this.router.navigate(['/error']);
                    }
                }
            })
        )
    }

}