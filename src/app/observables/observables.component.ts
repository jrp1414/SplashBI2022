import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, Observer, Subscription } from 'rxjs';


@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styles: [
  ]
})
export class ObservablesComponent implements OnInit, OnDestroy {
  message:string="";
  msgs:any[]=[];
  obsSubscription:Subscription = new Subscription();
  constructor(private messageService: MessageService) { }
  
  ngOnInit(): void {

    let obs = new Observable((o:Observer<number>)=>{
      let num = 1;
      setInterval(()=>{
        o.next(num);
        num++;
      },2000)
    });

    this.obsSubscription = obs.subscribe((data)=>{
      //this.msgs.push({severity:'success', summary:'Data Received', detail:data});      
      this.messageService.add({severity:'success', summary:data.toString()});
    },(error)=>{
      this.messageService.add({severity:'error', summary:'Error Occurred', detail:error});
    },()=>{
      this.messageService.add({severity:'info', summary:'Completed', detail:"Observer Completed Publishing"});
    });

  }

  ngOnDestroy(): void {
    this.obsSubscription.unsubscribe();
  }

}
