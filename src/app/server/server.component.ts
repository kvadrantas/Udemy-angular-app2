import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverStatus = ''

  @Input()
  serverTitle: string | undefined;

  constructor() { 
    this.serverStatus = Math.random() > 0.5? 'Online' : 'Offline';
  }

  getColor() {
    switch (this.serverStatus) {
      case 'Online':
        return 'green'
        break;
      case 'Offline':
        return 'red'
        break;
    
      default:
        return 'red'
        break;
    }
  }

  ngOnInit(): void {
  }

}
