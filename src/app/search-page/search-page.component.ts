import { Component, OnInit } from '@angular/core';
import { BrewServiceService } from '../brew-service.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(public brewery: BrewServiceService) { } //injects the service


  // objects
  public searchObj: any;
  public breweryInfo: any = "";

  // Arrays
  public nameArr: string[] = [];
  public locationArr: string[] = [];
  public webArr: string[] = [];

  // ngIf Vars
  public visibleNames: boolean = false;
  public visibleAddress: boolean = false;
  public visibleWeb: boolean = false;


  ngOnInit(): void {
  }
  click() { //using the service funtions
    this.brewery.myObservable().subscribe( response => {
      this.searchObj = response;
      this.nameArr = [];
      this.locationArr = [];
      this.webArr = [];
      this.getBreweries();
      console.log(this.searchObj);
    });
  }

    getBreweries(){
      for(let i = 0; i < this.searchObj.length; i++){
        if(this.searchObj[i].name.toLowerCase().includes(this.breweryInfo.toLowerCase()) ||
           this.searchObj[i].street.toLowerCase().includes(this.breweryInfo.toLowerCase()) ||
           this.searchObj[i].state.toLowerCase().includes(this.breweryInfo.toLowerCase()) ||
           this.searchObj[i].city.toLowerCase().includes(this.breweryInfo.toLowerCase()) ||
           this.searchObj[i].website_url.toLowerCase().includes(this.breweryInfo.toLowerCase())){
          this.nameArr.push(this.searchObj[i].name);
          this.locationArr.push(this.searchObj[i].state + ", " + this.searchObj[i].city + ", " 
                              + this.searchObj[i].street);
          if(this.searchObj[i].website_url == ""){
            this.webArr.push("No Site");
          }
          else{
            this.webArr.push(this.searchObj[i].website_url);
          }              
          
        }
      }
  }
}

