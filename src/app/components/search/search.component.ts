import { Component } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  faMagnifyingd = faMagnifyingGlass
  wordSearch:string = ''
  isSearch : boolean = false

  constructor(private service : ServiceService ){}

  sendDataToServcie(){
    this.service.setData(this.wordSearch)
  }

  getData(){
    this.wordSearch = ""
    this.service.setData("reset")
  }

}
