
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpServiceService } from '../../Service/http-service.service';
import { ProjectReport } from '../../model/project-report';

@Component({
  selector: 'app-mining',
  templateUrl: './mining.component.html',
  styleUrls: ['./mining.component.css']
})
export class MiningComponent implements OnInit {
  saleData = [
    { name: "InProgress", value: 0 },
    { name: "Completed", value: 0 },
 
  ];

customColors: any;
inProgress:number;
Completed:number;
  ProjectReport:ProjectReport;
  pieChartLabel(series: any[], name: string): string {
      const item = series.filter(data => data.name === name);
      if (item.length > 0) {
          return item[0].label;
      }
      return name;
  }

  constructor(private httpService:HttpServiceService  ) { }

  ngOnInit(): void {

    this.customColors = [
      {
        name: "InProgress",
        value: 'pink'
      },
      {
        name: "Completed",
        value: 'purple'
      }
    ];
    this.httpService.getProjectReport('Mining').subscribe(
      value=>{
               this.Completed=value.completed
               this.inProgress=value.inprogress
                 
                  console.log(this.Completed);
                  console.log(this.inProgress);
               
                  this.saleData = [
                    { name: "InProgress", value: this.inProgress  },
                    { name: "Completed",  value: this.Completed},
                 
                  ];
             
      
      }
      
      
          )
      

         
  }

}