import { Type } from '@angular/core';
import { Confirmation, ConfirmationService } from "primeng/api";
import { AppModule } from "../app.module";


export function Confirmable(propName:string) {
    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;        
        descriptor.value = function (...args: any[]) {
            console.log(args);
            const service = AppModule?.injector.get<ConfirmationService>(ConfirmationService as Type<ConfirmationService>);            
            service.confirm({
                message: `Are you sure to delete ${args[0][propName]}?`,
                accept: () => {

                    originalMethod.apply(this, args);
                },
                reject: () => {
                    return false;
                }
            });
        };
        return descriptor;
    }
}