import { Component, OnInit } from '@angular/core';
import {Advertisement} from "../../../spec/advertisement";
import {ActivatedRoute, Router} from "@angular/router";
import {AdvService} from "../../../service/adv.service";
import {HttpClient, HttpEventType, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-adv',
  templateUrl: './adv.component.html',
  styleUrls: ['./adv.component.css']
})
export class AdvComponent {

  adv: Advertisement;
  private selectedFile: any;

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  fileInfos: Observable<any>;
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

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;
    this.currentFile = this.selectedFiles.item(0);
    this.advService.upload(this.currentFile).subscribe(
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
