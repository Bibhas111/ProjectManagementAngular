
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';;
import { LegendType } from '@swimlane/ngx-charts';
import { HttpServiceService } from '../Service/http-service.service';
import { Project } from '../model/project';
import { ConditionalExpr } from '@angular/compiler';
export interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {

Project:Project;
  constructor(private fb: FormBuilder, public dialog: MatDialog, private http: HttpServiceService) {
 }


  error:string="";

  ngOnInit(): void {
    
  }
  statusdropdowm: Status[] = [
    { value: 'Inprogress', viewValue: 'Inprogress' },
    { value: 'Complete', viewValue: 'Completed' },

  ];
  deptdropdown: Status[] = [
    { value: 'Construction', viewValue: 'Construction' },
    { value: 'Mining', viewValue: 'Mining' },
    { value: 'water-Energy', viewValue: 'Water energy' },

  ];



  projectForm = this.fb.group({

    ProjectName: new FormControl('',),
    Department: new FormControl(''),
    ProjectstartDt: new FormControl(),
    ProjectEndDt: new FormControl(),
    ProjectStaus: new FormControl(''),
    ProjectCost: new FormControl(),
    ProjectHr: new FormControl()
  })


  get f() {
    return this.projectForm.controls;
  }

  onSubmit() {

    this.Project=this.projectForm.value;
    console.log("Model"+this.Project.ProjectCost);
    console.log(this.projectForm.value);
    console.log('test');
      
    if(
      this.projectForm.value.ProjectName!="" &&
      this.projectForm.value.Department!=""&&
      this.projectForm.value.ProjectstartDt!=""&&
      this.projectForm.value.ProjectEndDt!=""&&
      this.projectForm.value.ProjectCost!=""&&
      this.projectForm.value.ProjectHr!=""
     ){

      this.http.addProject(this.projectForm.value).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      )
      this.dialog.open(DialogDataExampleDialog);


    }else
    {

        this.error="Invalid";

    }
   
   

  }
}
@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'succes-modal.html',
})
export class DialogDataExampleDialog {
  constructor() { }
}

