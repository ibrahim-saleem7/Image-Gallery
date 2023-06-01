import { Component, OnInit } from '@angular/core';
import { faCamera, faDownload, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private service : ServiceService){}

  ngOnInit(): void {

  }


}
