import { Component } from '@angular/core';
import {  project } from 'src/app/model/project';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: project[];
  constructor() {
    this.projects=[
            new project("god of war","game dev","unity","2022","","description god of war ",["thumbnail.jpg"],[]),
            new project("spider","game dev","unity","2022","","description god of war ",["thumbnail.jpg"],[]),
            new project("the last of us","game dev","unity","2022","","description god of war ",["thumbnail.jpg"],[]),
            new project("valorent","game dev","unity","2022","","description god of war ",["thumbnail.jpg"],[]),
            new project("god of war","game dev","unity","2022","","description god of war ",["thumbnail.jpg"],[]),
            new project("the last of us","game dev","unity","2022","","description god of war ",["thumbnail.jpg"],[]),
            new project("god of war","game dev","unity","2022","","description god of war ",["thumbnail.jpg"],[]),
            new project("spider","game dev","unity","2022","","description god of war ",["thumbnail.jpg"],[]),
            new project("the last of us","game dev","unity","2022","","description god of war ",["thumbnail.jpg"],[]),








    ]
  }

}
