import {Component, Input, OnInit} from '@angular/core';
import {Advertisement} from "../../../../spec/advertisement";
import {UserService} from "../../../../service/user.service";

@Component({
  selector: 'app-adv-cover',
  templateUrl: './adv-cover.component.html',
  styleUrls: ['./adv-cover.component.css']
})
export class AdvCoverComponent {


  @Input() adv: Advertisement;

}
