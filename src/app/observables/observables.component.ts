import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, Observer } from 'rxjs';


@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styles: [
  ]
})
export class ObservablesComponent implements OnInit {
  message:string="";
  msgs:any[]=[];
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {

    let obs = new Observable((o:Observer<string>)=>{
      setTimeout(() => {
        o.next("First Data");
      }, 1000);

      setTimeout(() => {
        o.next("Second Data");
      }, 3000);

      // setTimeout(() => {
      //   o.error("Error Occurred in publisher");
      // }, 4000);

      setTimeout(() => {
        o.complete();
      }, 4000);

      setTimeout(() => {
        o.next("Third Data");
      }, 5000);
    });

    obs.subscribe((data)=>{
      //this.msgs.push({severity:'success', summary:'Data Received', detail:data});      
      this.messageService.add({severity:'success', summary:'Data Received', detail:data});
    },(error)=>{
      this.messageService.add({severity:'error', summary:'Error Occurred', detail:error});
    },()=>{
      this.messageService.add({severity:'info', summary:'Completed', detail:"Observer Completed Publishing"});
    });

  }

}
