import { Component, OnInit } from '@angular/core';
import {Advertisement} from "../../../spec/advertisement";
import {ActivatedRoute, Router} from "@angular/router";
import {AdvService} from "../../../service/adv.service";
import {HttpClient, HttpEventType, HttpResponse} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {Logger} from "codelyzer/util/logger";
import {UserService} from "../../../service/user.service";
import {TokenStorageService} from "../../../service/token-storage.service";

@Component({
  selector: 'app-adv',
  templateUrl: './adv.component.html',
  styleUrls: ['./adv.component.css']
})
export class AdvComponent {

  adv: Advertisement;
  private selectedFile: any;
  asd: Advertisement;

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  userName: string;
  fileInfos: Observable<any>;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private advService: AdvService,
              private tokenStorageService: TokenStorageService) {
    this.adv = new Advertisement();
   this.userName = tokenStorageService.getUser().username;
  }

  onSubmit() {
    this.adv.login = this.userName
    this.advService.save(this.adv)
      .subscribe(data => {
        console.log(data.id)
        // this.asd = data;
        // this.upload(data.id);
        this.progress = 0;
        this.currentFile = this.selectedFiles.item(0);
        this.advService.upload(this.currentFile, data.id).subscribe(
          event => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              // this.fileInfos = this.advService.getFiles();
            }
          },
          err => {
            this.progress = 0;
            this.message = 'Could not upload the file!';
            this.currentFile = undefined;
          });
        this.selectedFiles = undefined;
    }, error => {
        console.log("err")
      })
    // this.upload(this.asd.id);
    // this.advService.upload()
    // this.refresh();

    //Problem z dużymi plikami
  }

  refresh(): void {
    window.location.reload();
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(id: string): void { // niby niepotrzebne
    this.progress = 0;
    this.currentFile = this.selectedFiles.item(0);
    this.advService.upload(this.currentFile, id).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          // this.fileInfos = this.advService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
    this.selectedFiles = undefined;
  }



}
