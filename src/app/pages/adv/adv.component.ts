import { Component, OnInit } from '@angular/core';
import {Advertisement} from "../../../spec/advertisement";
import {ActivatedRoute, Router} from "@angular/router";
import {AdvService} from "../../../service/adv.service";

@Component({
  selector: 'app-adv',
  templateUrl: './adv.component.html',
  styleUrls: ['./adv.component.css']
})
export class AdvComponent {

  adv: Advertisement;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private advService: AdvService) {
    this.adv = new Advertisement();
  }

  onSubmit() {
    this.advService.save(this.adv).subscribe();
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }


}
