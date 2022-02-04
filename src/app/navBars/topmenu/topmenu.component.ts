import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommonServiceService} from '../../Service/common-service.service';
@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {

  constructor(private router: Router,private navsearchService:CommonServiceService) { }

  ngOnInit(): void {
  }

  Search(event: string) {
    const filterValue = event;
  
    this.navsearchService.setDataSearch(filterValue.trim().toLowerCase());
    
  }

}
