import {AfterViewInit, Component, ElementRef, OnInit, ViewChild,Input,SimpleChanges,Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HttpServiceService } from '../Service/http-service.service';
import { ProjectInfo } from '../model/project-info';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonServiceService } from '../Service/common-service.service';
import { MatSort } from '@angular/material/sort'
import { __asyncDelegator } from 'tslib';
import {AbstractControl, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Project } from '../model/project';
const ELEMENT_DATA: ProjectInfo[] = [];


@Component({
  selector: 'app-grids',
  templateUrl: './grids.component.html',
  styleUrls: ['./grids.component.css']
})
export class GridsComponent implements AfterViewInit,OnInit {
   @Input() item:string;

  ProjectType:string;
  SearchString:string;
  
  ProjectInforesult: ProjectInfo[]=[];
  displayedColumns: string[] = [ 'projectName', 'department', 'projectstartDt','projectEnddt'];
  dataSource = new MatTableDataSource<ProjectInfo>(ELEMENT_DATA);
  constructor(private httpService:HttpServiceService,public dialog: MatDialog,private commonService:CommonServiceService){
    this.commonService.currentSearchData.subscribe(sata=>{

      
    });
  }
   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {

    this.commonService.currentSearchData.subscribe(sata=>{

      this.dataSource.filter=sata;
    });
   
   
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }

  ngOnChanges(changes: SimpleChanges) {
   let s:string=String(changes["item"].currentValue);
   this.bind(s);
  
 }
 
applyFilter(event: Event){
const filtervalue=(event.target as HTMLInputElement).value;
this.dataSource.filter=filtervalue.trim().toLowerCase();

}
  bind(s:string)
  {   this.httpService.getProjectInfo(s).subscribe(
      value=>{
               this.ProjectInforesult=value;
               this.dataSource =new MatTableDataSource<ProjectInfo>(this.ProjectInforesult); 
               this.dataSource.paginator=this.paginator;
               this.dataSource.sort=this.sort;
              }
              
          )

  }
ngOnInit(): void {
 this.bind(this.item);
 this.dataSource.paginator=this.paginator;




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

export interface Status {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  styleUrls: ['./grids.component.css']
})


export class DialogContentExampleDialog implements OnInit {
  ProjectInfo :ProjectInfo;
  Project:Project;
  projectForm :FormGroup= new FormGroup({
    ProjectName: new FormControl('',),
    Department: new FormControl(''),
    ProjectstartDt: new FormControl(''),
    ProjectEndDt: new FormControl(''),
    ProjectStaus: new FormControl(''),
    ProjectCost: new FormControl(''),
    ProjectHrs: new FormControl('')
  })

submitted = false;
error:string="";
constructor(private fb: FormBuilder,@Inject(MAT_DIALOG_DATA) public data: ProjectInfo){
  

}

ngOnInit(): void {
  this.projectForm=this.fb.group({
    ProjectName:['',[Validators.required,Validators.minLength(6), Validators.maxLength(20)]],
    Department:['',Validators.required],
    ProjectstartDt: ['',Validators.required],
    ProjectEndDt: ['',Validators.required],
    ProjectHrs: ['',Validators.required],
    ProjectStaus:['',Validators.required],
    ProjectCost:['',[Validators.required]]
  }); }

  statusdropdowm: Status[] = [
    { value: 'Inprogress', viewValue: 'Inprogress' },
    { value: 'Complete', viewValue: 'Completed' },

  ];
  deptdropdown: Status[] = [
    { value: 'Construction', viewValue: 'Construction' },
    { value: 'Mining', viewValue: 'Mining' },
    { value: 'water-Energy', viewValue: 'Water energy' },
];


  get f(): { [key: string]: AbstractControl }{
    return this.projectForm.controls;
  }
  onSubmit() {
    this.Project=this.projectForm.value;
    this.submitted = true;
    console.log(this.projectForm.value);
    if (this.projectForm.invalid) {
      return;
    }
    else{


    }

    console.log(JSON.stringify(this.projectForm.value, null, 2));
  
}
}