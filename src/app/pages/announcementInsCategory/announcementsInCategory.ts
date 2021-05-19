import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Advertisement} from "../../../spec/advertisement";
import {UserService} from "../../../service/user.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {AdvService} from "../../../service/adv.service";
import {filter, map, switchMap, toArray} from "rxjs/operators";

@Component({
  selector: 'app-category',
  templateUrl: './announcementsInCategory.html',
  styleUrls: ['./announcementsInCategory.css']
})
export class AnnouncementsInCategory implements OnInit {
  advs: Observable<Advertisement[]>;
  adv: Advertisement[];

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private advService: AdvService) { }

  ngOnInit(): void {
    this.advs = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.advService.getByAgeCategory(params.get('ageCategory')))
    )
    // this.getAdvByBrand("fisher price")

    // this.adv = this.advs.pipe(
    //   map(n => n),
    //   filter(this.advs => this.advs.)
    // )
  }

  getAdvByBrand(brand: any){
    this.advs = this.advs.pipe(map((advertisements: Advertisement[]) => advertisements.filter(ad => ad.brand === brand.target.value
      // && ad.title === "zmiana"
      ))
    )
    //  this.advs.subscribe(data=> {
    //  data.filter(ad => ad.title == brand),
    //    toArray()
    // })
  }

}
