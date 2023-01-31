import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers = [
    'Server 1',
    'Server 2'
  ]

  allowNewServer = true;
  newServerAdded = false;
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000);
  }

  onAddNewServer() {
    this.servers.push(this.serverName);
    this.newServerAdded = true;

    setTimeout(() => {
      this.newServerAdded = false
    }, 2000);
  }

  onServerDelete(index:any) {
    console.log('istrinta ', index);
    this.servers.splice(index, 1)
  }

  ngOnInit(): void {
  }

}
