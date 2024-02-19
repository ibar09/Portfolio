import { Component, TemplateRef } from '@angular/core';
import { project } from 'src/app/model/project';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: project[];
  constructor(private modalService: NgbModal) {
    this.projects = [
      new project(
        'god of war',
        'game dev',
        'unity',
        '2022',
        '',
        'description god of war ',
        ['thumbnail.jpg'],
        []
      ),
      new project(
        'spider',
        'game dev',
        'unity',
        '2022',
        '',
        'description god of war ',
        ['thumbnail.jpg'],
        []
      ),
      new project(
        'the last of us',
        'game dev',
        'unity',
        '2022',
        '',
        'description god of war ',
        ['thumbnail.jpg'],
        []
      ),
      new project(
        'valorent',
        'game dev',
        'unity',
        '2022',
        '',
        'description god of war ',
        ['thumbnail.jpg'],
        []
      ),
      new project(
        'god of war',
        'game dev',
        'unity',
        '2022',
        '',
        'description god of war ',
        ['thumbnail.jpg'],
        []
      ),
      new project(
        'the last of us',
        'game dev',
        'unity',
        '2022',
        '',
        'description god of war ',
        ['thumbnail.jpg'],
        []
      ),
      new project(
        'god of war',
        'game dev',
        'unity',
        '2022',
        '',
        'description god of war ',
        ['thumbnail.jpg'],
        []
      ),
      new project(
        'spider',
        'game dev',
        'unity',
        '2022',
        '',
        'description god of war ',
        ['thumbnail.jpg'],
        []
      ),
      new project(
        'the last of us',
        'game dev',
        'unity',
        '2022',
        '',
        'description god of war ',
        ['thumbnail.jpg'],
        []
      ),
    ];
  }
  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, {
      centered: true,
      modalDialogClass: 'dark-modal',
      windowClass: 'dark-modal',
      size: 'xl',
    });
  }
}
