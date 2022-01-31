import { Injectable } from '@angular/core';
import { ProjectInfo } from '../model/project-info';
import { ProjectDetail } from '../model/project-detail';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProjectReport } from '../model/project-report';
import { Project } from '../model/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private url: string = environment.API_URL;
  constructor(private http: HttpClient) { }

  getProjectInfo(projecttype: string) {
    let params = new HttpParams();
    params = params.append('projecttype', projecttype);
    return this.http.get<ProjectInfo[]>(this.url + 'Project/GetAll', { params });

  }

  getProjectReport(department: string) {
    let params = new HttpParams();
    params = params.append('Department', department);
    return this.http.get<ProjectReport>(this.url + 'Project/Getreport', { params });

  }
  addProject(project:Project): Observable<Project> {
    console.log("Final"+project);
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(project);
    console.log(body)
    return this.http.post<Project>(this.url + 'Project/PostProject', body,{'headers':headers})
  }


}
