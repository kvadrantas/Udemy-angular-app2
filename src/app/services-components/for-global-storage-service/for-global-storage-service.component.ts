import { Component, OnInit } from '@angular/core';
import { GlobalStorageService } from 'src/app/services/global-storage.service';

@Component({
  selector: 'app-for-global-storage-service',
  templateUrl: './for-global-storage-service.component.html',
  styleUrls: ['./for-global-storage-service.component.css'],
  // Use providers only if you want to import separate instance of the storage
  // Sometimes you would want same instance of the storage accross the components, sometimes- same
  // Imported storagte in the compoement is also available for it's child compoments
  // providers: [GlobalStorageService],
})
export class ForGlobalStorageServiceComponent implements OnInit {
  constructor(private globalStorageService: GlobalStorageService) {}

  ngOnInit(): void {
    const people: any = this.globalStorageService.people;
    console.log('Global Storage Service');
    console.log(people[1]);
  }
}
