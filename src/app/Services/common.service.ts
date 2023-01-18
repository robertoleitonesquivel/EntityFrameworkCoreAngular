import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  public saveSession(_key: string, _data: string): void {
    sessionStorage.setItem(_key, _data);
  }

  public getSession(_key: string): string | null {
    return sessionStorage.getItem(_key);
  }
}
