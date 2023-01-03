import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { fibonacci } from '../shared/fibonacci.worker';


@Component({
  selector: 'app-web-worker',
  templateUrl: './web-worker.component.html',
  styles: [
  ]
})
export class WebWorkerComponent implements OnInit {
  
  constructor(private message:MessageService) {
    
  }
  ngOnInit(): void {
    if (typeof Worker !== 'undefined') {
      this.webWorker = new Worker('../shared/fibonacci.worker', { type: 'module' });
      this.webWorker.onmessage = (data) => {
        this.output = data.data;
      }
    }
  }
  num!: number;
  output!: number;
  CalcFib() {
    this.output =0;
    this.output = fibonacci(this.num);
  }

  numWorker!: number;
  webWorker!: Worker;
  outputWorker!: number;
  CalcFibWorker() {
    this.outputWorker = 0;
    this.webWorker.postMessage(this.numWorker);
  }

  test() {
    alert("Button Clicked");
  }
}
