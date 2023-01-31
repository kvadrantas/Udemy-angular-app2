import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverStatus = ''

  @Input() serverTitle: string | undefined;
  @Input() ind: number | undefined;

  @Output() serverDelete = new EventEmitter<number>();

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

  onDelete() {
    this.serverDelete.emit(this.ind);
  }

  ngOnInit(): void {
  }

}
