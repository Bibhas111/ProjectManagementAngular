import { Component, OnInit } from '@angular/core';
import { TopmenuComponent } from '../navBars/topmenu/topmenu.component';
import { CommonServiceService } from '../Service/common-service.service';
import {ActivatedRoute,Router} from "@angular/router"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedProject:string="Construction";
  red:string='lightyellow';
  reds:string='lightyellow';
  redss:string='lightyellow';
  constructor(private route: ActivatedRoute,private commonService:CommonServiceService,private router: Router) { }

  ngOnInit(): void {
    this.selectedProject="Construction";
    this.red='lightyellow';
    this.reds='white';
    this.redss='white';
  }
  private list: any = [
    'red',' green', 'blue'
];
  public color: 'black';


  test(input:string){
      
    this.selectedProject=input;

  }

  changecolor()
  {

    this.red='lightyellow';
    this.redss='white';
    this.reds='white';
    this.selectedProject="Construction";

 
    

  }

  changecolors()
  {


    this.red='white';
    this.redss='white'
    this.reds='lightyellow';
    this.selectedProject="Mining"

  
    
    

    

   
  }

  changecolorss()
  {

    this.redss='lightyellow';
    this.reds='white';
    this.red='white';
    this.selectedProject="water-Energy"
    
   

    

  }
}
