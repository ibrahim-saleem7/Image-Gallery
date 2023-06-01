import { ViewportScroller } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faCamera, faDownload, faXmark } from '@fortawesome/free-solid-svg-icons';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

    faCamera = faCamera
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

    constructor(private service : ServiceService , private scrollTop : ViewportScroller){}

    ngOnInit(): void {
      this.getData()
      this.service.currentData.subscribe((data:any) => {
        if(data != "reset" && data != ""){
          this.wordSearch = data
          this.current = 1
          this.getBySearch()
        }else{
          this.current = 1
          this.getData()
        }
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
        this.isSearch= true
        this.page = res.page
        this.photos = res.photos
        })
    }

    open(photographer:string , img:string){
      this.show =true
      this.photographer = photographer
      this.imgUrl = img

      fetch(img).then(res => res.blob()).then(blob => {
        this.href = window.URL.createObjectURL(blob)
        let time = new Date().getTime()
        this.downloadTime = time
        this.service.setlightbox({show :true ,  photographer:this.photographer,  imgUrl:this.imgUrl ,  downloadTime :this.downloadTime ,  href: this.href})
      })
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

  }
