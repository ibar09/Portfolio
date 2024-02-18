import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  display: string;
  constructor(private modalService: NgbModal) {
    this.display = 'none';
  }

  openModal() {
    this.display = 'block';
  }
  onCloseHandled() {
    this.display = 'none';
  }
  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, {
      centered: true,
      modalDialogClass: 'dark-modal',
    });
  }
}
