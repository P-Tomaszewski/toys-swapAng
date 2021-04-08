import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Advertisement} from "../../../../spec/advertisement";
import {AdvService} from "../../../../service/adv.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-ad-details',
  templateUrl: './adv-details.component.html',
  styleUrls: ['./adv-details.component.css']
})
export class AdvDetailsComponent implements OnInit {
  advDetails: Observable<Advertisement>;

  constructor(private adv: AdvService, private  route: ActivatedRoute) { }

  ngOnInit(): void{
    this.advDetails = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.adv.getAdvertisement(params.get('id')))
    )
  }



}
