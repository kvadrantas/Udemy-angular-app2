import { Component, OnInit } from '@angular/core';
import { PrintInfoService } from 'src/app/services/print-info.service';

@Component({
  selector: 'app-for-print-info-service',
  templateUrl: './for-print-info-service.component.html',
  styleUrls: ['./for-print-info-service.component.css'],
  // Specify the provider of Print Info service
  providers: [PrintInfoService],
})
export class ForPrintInfoServiceComponent implements OnInit {
  // We inform Angular, that we need instance of Print Info service
  constructor(private printInfoService: PrintInfoService) {}

  ngOnInit(): void {
    // Use Print Info service
    this.printInfoService.print('aaaaa');
  }
}
