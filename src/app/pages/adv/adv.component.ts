import { Component, OnInit } from '@angular/core';
import {Advertisement} from "../../../spec/advertisement";
import {ActivatedRoute, Router} from "@angular/router";
import {AdvService} from "../../../service/adv.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-adv',
  templateUrl: './adv.component.html',
  styleUrls: ['./adv.component.css']
})
export class AdvComponent {

  adv: Advertisement;
  private selectedFile: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private advService: AdvService,
              private http: HttpClient) {
    this.adv = new Advertisement();
  }

  onSubmit() {
    this.advService.save(this.adv).subscribe();
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }

  handleImages(Event){
    this.selectedFile = Event.target.files[0];
    let formData = new FormData();
    formData.append("file", this.selectedFile);
    console.log(this.selectedFile);
    this.http.post('http://localhost:8080/upload',formData)
  }

}
