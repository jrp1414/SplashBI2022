import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, Observer, Subject, Subscription } from 'rxjs';


@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styles: [
  ]
})
export class ObservablesComponent implements OnInit, OnDestroy {
  message: string = "";
  msgs: any[] = [];
  obsSubscription: Subscription = new Subscription();
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {

    // let obs = new Observable((o:Observer<number>)=>{
    //   let num = 1;
    //   setInterval(()=>{
    //     o.next(num);
    //     num++;
    //   },2000)
    // });

    // this.obsSubscription = obs.subscribe((data)=>{
    //   //this.msgs.push({severity:'success', summary:'Data Received', detail:data});      
    //   this.messageService.add({severity:'success', summary:data.toString()});
    // },(error)=>{
    //   this.messageService.add({severity:'error', summary:'Error Occurred', detail:error});
    // },()=>{
    //   this.messageService.add({severity:'info', summary:'Completed', detail:"Observer Completed Publishing"});
    // });


    // let subsEx = new Subject();

    // setTimeout(() => {
    //   subsEx.next("First data from Subject");
    // }, 1000);

    // setTimeout(() => {
    //   subsEx.next("Second data from Subject");
    // }, 3000);

    // setTimeout(() => {
    //   subsEx.error("Error Occurred");
    // }, 4000);

    // setTimeout(() => {
    //   subsEx.next("Third data from Subject");
    // }, 5000);

    // subsEx.subscribe((val)=>{
    //   this.messageService.add({severity:'success', summary:val as string});
    // },(error)=>{
    //   this.messageService.add({severity:'error', summary:'Error Occurred', detail:error});
    // });

    let eventEx = new EventEmitter<string>();

    setTimeout(() => {
      eventEx.emit("First data from EventEmitter");
    }, 1000);

    setTimeout(() => {
      eventEx.emit("Second data from EventEmitter");
    }, 3000);

    setTimeout(() => {
      eventEx.error("Error Occurred");
    }, 4000);

    setTimeout(() => {
      eventEx.emit("Third data from EventEmitter");
    }, 5000);

    eventEx.subscribe((val) => {
      this.messageService.add({ severity: 'success', summary: val as string });
    }, (error) => {
      this.messageService.add({ severity: 'error', summary: 'Error Occurred', detail: error });
    });


  }

  ngOnDestroy(): void {
    this.obsSubscription.unsubscribe();
  }

}
