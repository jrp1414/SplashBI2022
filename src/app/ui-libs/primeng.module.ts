import { NgModule } from '@angular/core';
import {RatingModule} from 'primeng/rating';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';
import {ChipsModule} from 'primeng/chips';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  exports:[
    RatingModule,
    ToastModule,
    RippleModule,
    ChipsModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule
  ]
})
export class PrimengModule { }