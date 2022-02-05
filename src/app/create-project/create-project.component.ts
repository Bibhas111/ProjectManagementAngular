
import { Component, OnInit, Inject } from '@angular/core';
import {AbstractControl, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
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
    else{ this.http.addProject(this.projectForm.value).subscribe(
              (response) => console.log(response),
              (error) => console.log(error)
            )
      this.dialog.open(DialogDataExampleDialog);

    }

    console.log(JSON.stringify(this.projectForm.value, null, 2));
  
}}
@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'succes-modal.html',
})
export class DialogDataExampleDialog {
  constructor() { }
}

