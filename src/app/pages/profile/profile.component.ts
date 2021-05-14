import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../../service/token-storage.service";
import {UserService} from "../../../service/user.service";
import {Observable} from "rxjs";
import {Register} from "../../../spec/register";
import {switchMap} from "rxjs/operators";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetails: Observable<Register>

  constructor(private user: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userDetails = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.user.getUserByName(params.get('username')))
    )
  }

}
