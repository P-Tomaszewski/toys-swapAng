import { Component, OnInit } from '@angular/core';
import {Advertisement} from "../../../spec/advertisement";
import {ActivatedRoute, Router} from "@angular/router";
import {AdvService} from "../../../service/adv.service";

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  adv: Advertisement;
  advs: Advertisement[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private advService: AdvService) {
    this.adv = new Advertisement();
  }

  ngOnInit(): void {
    this.advService.findAll().subscribe(data => {
      this.advs = data;
    });
  }


  onSubmit() {

  }
}
