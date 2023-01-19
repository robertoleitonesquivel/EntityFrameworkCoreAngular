import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, tap } from 'rxjs';
import { BaseResponse } from 'src/app/Common/Response';
import { CommonService } from 'src/app/Services/common.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  type: boolean = true;

  frmLogin!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginSVC: LoginService,
    private commonSVC: CommonService,
    private route:Router
  ) {

  }


  ngOnInit(): void {
    this.onLoad();
  }

  private onLoad(): void {
    this.frmLogin = this.fb.group({
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    });
  }

  public Iniciar(): void {
    this.loginSVC.signIn(this.frmLogin.controls['Email'].value, this.frmLogin.controls['Password'].value).pipe(
      filter((res: BaseResponse<string>) => {
        if (res.Result) {
          return true;
        } else {
          return false;
        }
      }),
      tap((res) => this.commonSVC.saveSession('token', res.Data)),
      tap((res) => this.route.navigate(['/Home'])),
    ).subscribe({
      next: (res) => {

      },
      error: (err: string) => {
        alert(err);
      },
    })

  }


}
