import {AfterViewInit, Component, ElementRef, OnInit, ViewChild,Input,SimpleChanges,Inject } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HttpServiceService } from '../Service/http-service.service';
import { ProjectInfo } from '../model/project-info';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonServiceService } from '../Service/common-service.service';
import { __asyncDelegator } from 'tslib';




const ELEMENT_DATA: ProjectInfo[] = [


];


@Component({
  selector: 'app-grids',
  templateUrl: './grids.component.html',
  styleUrls: ['./grids.component.css']
})
export class GridsComponent implements AfterViewInit,OnInit {
   @Input() item:string;

  ProjectType:string;
  
  ProjectInforesult: ProjectInfo[]=[];
  displayedColumns: string[] = [ 'projectName', 'department', 'projectstartDt','projectEnddt'];
  dataSource = new MatTableDataSource<ProjectInfo>(ELEMENT_DATA);
  constructor(private httpService:HttpServiceService,public dialog: MatDialog,private commonService:CommonServiceService){
    
  }
   @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {
   
    
  }

  ngOnChanges(changes: SimpleChanges) {

   
    
    let s:string=String(changes["item"].currentValue);
   this.bind(s);




    
  }
 

  bind(s:string)
  {
   
    this.httpService.getProjectInfo(s).subscribe(
      value=>{
               this.ProjectInforesult=value;
               this.dataSource =new MatTableDataSource<ProjectInfo>(this.ProjectInforesult);
      
      }
      
          )

  }
ngOnInit(): void {
 
  
  this.bind(this.item);
  

}

openDialog(row:ProjectInfo) {
  const dialogRef = this.dialog.open(DialogContentExampleDialog,{ 
    data:
    { 
      projectName: row.projectName, 
      department:row.department,
      projectmanager:row.projectEnddt,
      projectstartDt:row.projectstartDt,
      projectEnddt:row.projectEnddt
    
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
  
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  styleUrls: ['./grids.component.css']
})
export class DialogContentExampleDialog {
  ProjectInfo :ProjectInfo;
constructor(@Inject(MAT_DIALOG_DATA) public data: ProjectInfo){
  
 
}

}