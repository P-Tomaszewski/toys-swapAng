import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Advertisement} from "../../../spec/advertisement";
import {UserService} from "../../../service/user.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {AdvService} from "../../../service/adv.service";
import {filter, map, switchMap, toArray} from "rxjs/operators";
import {Filtr} from "../../../spec/filtr";

@Component({
  selector: 'app-category',
  templateUrl: './announcementsInCategory.html',
  styleUrls: ['./announcementsInCategory.css']
})
export class AnnouncementsInCategory implements OnInit {
  advs: Observable<Advertisement[]>;
  adv: Advertisement[];
  filtr: Filtr;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private advService: AdvService,) {
    this.filtr = new Filtr();
  }

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
  getAll(){
    this.advs = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.advService.getByAgeCategory(params.get('ageCategory'))))
    this.refresh()
  }
  refresh(): void {
    window.location.reload();
  }

  getByCat(){
    this.advs = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.advService.getByCategory(params.get('ageCategory'), this.filtr.brand ,this.filtr.city ,this.filtr.category))

    )
    console.log("category")
  }

  onSubmit() {
    // this.advs = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.advService.getByCategory(params.get('ageCategory'),this.filtr.brand +  + this.filtr.city +  + this.filtr.category))
    //
    // )
    // console.log("category")

   //  if(this.filtr.brand != "" && this.filtr.category != "" && this.filtr.city != "") {
   //    this.advs = this.advs.pipe(map((advertisements: Advertisement[]) => advertisements.filter(
   //      ad => ad.brand === this.filtr.brand && ad.category === this.filtr.category && ad.city === this.filtr.city
   //    )))
   //  }
   //    else if(this.filtr.city != "") {
   //    this.advs = this.advs.pipe(map((advertisements: Advertisement[]) => advertisements.filter(
   //      ad => ad.city === this.filtr.city
   //    )))
   //  }
   //  else if(this.filtr.brand != "") {
   //    this.advs = this.advs.pipe(map((advertisements: Advertisement[]) => advertisements.filter(
   //      ad => ad.brand === this.filtr.brand
   //    )))
   //  }
   // // else if(this.filtr.category != "") {
   // //    this.advs = this.advs.pipe(map((advertisements: Advertisement[]) => advertisements.filter(
   // //      ad => ad.brand === this.filtr.category
   // //    )))
   // //  }
   // else {
   //    this.advs = this.route.paramMap.pipe(
   //      switchMap((params: ParamMap) =>
   //        this.advService.getByAgeCategory(params.get('ageCategory'))))
   //  }
  }

}
