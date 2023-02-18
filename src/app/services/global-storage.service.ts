import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalStorageService {
  constructor() {}

  people = [
    { name: 'Jonas', surname: 'Jonaitis' },
    { name: 'Petras', surname: 'Petraitis' },
    { name: 'Albinas', surname: 'Albinaitis' },
  ];
}
