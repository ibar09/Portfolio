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
            new project("god of war 1","game dev","unity","2022","","description god of war ",[],[]),
            new project("god of war 2","game dev","unity","2022","","description god of war ",[],[]),
            new project("god of war 3","game dev","unity","2022","","description god of war ",[],[]),
            new project("god of war 4","game dev","unity","2022","","description god of war ",[],[]),
            new project("god of war 5","game dev","unity","2022","","description god of war ",[],[]),
            new project("god of war 6","game dev","unity","2022","","description god of war ",[],[]),
            new project("god of war 7","game dev","unity","2022","","description god of war ",[],[]),
            new project("god of war 8","game dev","unity","2022","","description god of war ",[],[]),
            new project("god of war 9","game dev","unity","2022","","description god of war ",[],[]),




    ]
  }

}
