import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }

  private data = new BehaviorSubject("")
  currentData = this.data.asObservable();

  setData(data: any) {
    this.data.next(data);
  }

  private lightbox = new BehaviorSubject("")
  currentlightbox= this.lightbox.asObservable();

  setlightbox(lightbox: any) {
    this.lightbox.next(lightbox);
  }

  getAllImgs(currentPage :number , perPage :number){
    const httpHeaders = new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': environment.API_KEY
    })
    return this.http.get(`${environment.baseApi}curated?page=${currentPage}&per_page=${perPage}` , {headers: httpHeaders})
  }

  searchImgs(search : string ,currentPage : number ,perPage : number){
    const httpHeaders = new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': environment.API_KEY
  })
    return this.http.get(`${environment.baseApi}search?query=${search}&page=${currentPage}&per_page=${perPage}` , {headers: httpHeaders})
  }

}
