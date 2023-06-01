import { Component, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ServiceService } from './services/service.service';
import { faXmark , faDownload, faMagnifyingGlass, faCamera } from '@fortawesome/free-solid-svg-icons';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {


  faXmark = faXmark
  faDownload = faDownload
  faMagnifyingd = faMagnifyingGlass
  faCamera = faCamera

  constructor(private service : ServiceService , private scrollTop : ViewportScroller){}



  current : number = 1
  perPage : number = 20
  photos : any
  href :any
  show :boolean = false
  downloadTime :any
  photographer : string = ""
  imgUrl : string = ""
  page : number = 1
  wordSearch :string = ""
  isSearch : boolean = false

  ngOnInit(): void {
    this.getData()
    this.service.currentData.subscribe(data => {
      this.photos = data
      console.log(data);
    });
  }


getData(){
  this.wordSearch = ""
  this.service.getAllImgs(this.current, this.perPage).subscribe((res:any)=>{
    this.page = res.page
    this.photos = res.photos
  })
}

getBySearch(){
  this.service.searchImgs(this.wordSearch , this.current ,this.perPage).subscribe((res:any)=>{
    this.page = res.page
    this.photos = res.photos
    })
}

search(){
  this.current = 1
  this.isSearch=true
  this.getBySearch()
  }

open(photographer:string , img:string){
  this.show =true
  this.photographer = photographer
  this.imgUrl = img

  fetch(img).then(res => res.blob()).then(blob => {
    this.href = window.URL.createObjectURL(blob)
    let time = new Date().getTime()
    this.downloadTime = time
  })
}

close(){
  this.show =false
}

topPage(ele :string) :void{
  this.scrollTop.scrollToAnchor(ele)
}

next(top:string){
  this.topPage(top)
  if(!this.isSearch){
    setTimeout(() =>{
      this.current++
      this.getData()
    },1000)
  }else{
    setTimeout(() =>{
      this.current++
      this.getBySearch()

    },1000)
  }
}

previous(top:string){
  this.topPage(top)
  if(!this.isSearch){
    setTimeout(() =>{
      this.current--
      this.getData()

    },1000)
  }else{
    this.current--
    this.isSearch=true
    this.getBySearch()
  }
}

update(event :any){
  this.photos = event
}

get(){
  this.service.currentData.subscribe(data => {
    this.photos = data
    console.log(data);
  });
}


  title = 'Image-Gallery';

}
