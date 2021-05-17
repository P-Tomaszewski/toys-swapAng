import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Advertisement} from "../../../../spec/advertisement";
import {AdvService} from "../../../../service/adv.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../../../service/user.service";
import {TokenStorageService} from "../../../../service/token-storage.service";
import {User} from "../../../../spec/user";
import {Register} from "ts-node";

@Component({
  selector: 'app-ad-details',
  templateUrl: './adv-details.component.html',
  styleUrls: ['./adv-details.component.css']
})
export class AdvDetailsComponent implements OnInit {
  advDetails: Observable<Advertisement>;
  advertisement: Advertisement;
  isLoggedIn = false;
  advOwner = false;
  content: string;

  constructor(private adv: AdvService, private  route: ActivatedRoute, private tokenStorage: TokenStorageService, private  user: UserService) {
    this.advertisement = new Advertisement();
  }

  ngOnInit(): void {
    this.advDetails = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.adv.getAdvertisement(params.get('id')))
    )
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
    this.user.getUserByName(this.tokenStorage.getUser())

    this.advDetails.subscribe(data => {
      console.log(data.id)
      this.user.getUserByName(this.tokenStorage.getUser().username).subscribe(data2 => {
        for (var val of data2.advertisements) {
          if (data.id == val.id) {
            this.advOwner = true;
            break;  //Wyświetla przycisk usun tylko dla ogłoszen zalogowanego właściciela
          }
        }
      })
    })

  }

  onSubmit() {
    this.advDetails.subscribe(data => this.adv.deleteAdv(data.id).subscribe())
    console.log("dell")
  }

  edit() {
    this.advDetails.subscribe(data => this.adv.deleteAdv(data.id).subscribe())
    console.log("dell")
  }

  refresh(): void {
    window.location.reload();
  }

}
