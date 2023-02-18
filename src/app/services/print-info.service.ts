import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PrintInfoService {
  constructor() {}

  print(info: string) {
    console.log('--- SERVICES ---');
    console.log('Print Info Service');
    console.log('Printing info: ', info);
  }
}
