import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Common } from '../Common/common';
import { BaseResponse } from 'src/app/Common/Response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  /**
   * METODO PARA LOGUEARSE
   * @param _Email
   * @param _Password
   * @returns
   */
  public signIn(_Email: string, _Password: string): Observable<BaseResponse<string>> {
    return this.http.post<BaseResponse<string>>(`${Common.Url}api/Login/SignIn`, { Email: _Email, Password: _Password });
  }
}
