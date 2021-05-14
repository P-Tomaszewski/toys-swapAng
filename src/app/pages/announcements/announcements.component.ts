import { Component, OnInit } from '@angular/core';
import {Advertisement} from "../../../spec/advertisement";
import {ActivatedRoute, Router} from "@angular/router";
import {AdvService} from "../../../service/adv.service";
import {Observable} from "rxjs";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  adv: Advertisement;
  advs: Observable<Advertisement[]>;

  constructor( private userService: UserService,
    private route: ActivatedRoute,
              private router: Router,
              private advService: AdvService
             ) {

    // this.adv = new Advertisement();
  }

  content: string;

  ngOnInit() {
    this.advs = this.advService.findAll();
    // this.advService.findAll().subscribe(data => {
    //   this.advs = data;
    // });
    // this.userService.getAdminBoard().subscribe(
    //   data => {
    //     this.content = data;
    //     // this.advs = this.advService.findAll();
    //   },
    //   err => {
    //     this.content = JSON.parse(err.error).message;
    //   }
    // );
  }


  onSubmit() {

  }
}
