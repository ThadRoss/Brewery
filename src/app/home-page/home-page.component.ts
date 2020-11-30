import { Component, OnInit } from '@angular/core';
import { BrewServiceService } from '../brew-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  constructor(public brewery: BrewServiceService) { }

  ngOnInit(): void {
  }

  public ageVerification1:boolean = true;
  public ageVerification2:boolean = false;

  over21(){
    this.ageVerification1 = false;
    this.ageVerification2 = true;
  }

  under21(){
    location.replace("#");
  }

}
