import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RegisterService} from "../../../service/register.service";
import {Register} from "../../../spec/register";
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  register: Register

  constructor(private route: ActivatedRoute,
              private router: Router,
              private registerService: RegisterService,
              private authService: AuthService) {
    this.register = new Register();
  }

  // onSubmit() {
  //   this.registerService.save(this.register).subscribe();
  //   this.refresh();
  // }
  onSubmit() {

    this.registerService.save(this.register).subscribe();
    this.refresh();
    //   this.refresh();
    // this.authService.register(this.form).subscribe(
    //   data => {
    //     console.log(data);
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //   },
    //   err => {
    //     this.errorMessage = err.error.message;
    //     this.isSignUpFailed = true;
    //   }
    // );
  }

  refresh(): void {
    window.location.reload();
  }

  ngOnInit(): void {
  }
}
