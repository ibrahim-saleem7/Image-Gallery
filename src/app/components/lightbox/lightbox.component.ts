import { Component, Input, OnInit } from '@angular/core';
import { faCamera, faDownload, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {


  faXmark = faXmark
  faDownload = faDownload
  faCamera = faCamera
  href :any
  show :boolean = false
  downloadTime :any
  photographer : string = ""
  imgUrl : string = ""

  constructor(private service : ServiceService){}

  ngOnInit(): void {
    this.service.currentlightbox.subscribe((data:any) => {
        if(data != ""){
          this.show =data.show
          this.href =data.href
          this.downloadTime =data.downloadTime
          this.photographer =data.photographer
          this.imgUrl =data.imgUrl
        }
      });
  }

  close(){
    this.show = false;
  }

}
