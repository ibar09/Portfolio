import { Component } from '@angular/core';
import { Expinfo } from 'src/app/model/exp_info';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.css'],
})
export class ExperiencePageComponent {
  exps: Expinfo[];
  constructor() {
    this.exps = [
      new Expinfo(
        'Full Stack Developer Internship - Avidea',
        '2023',
        'Spring Boot, Anguler, PostgreSQL, Java, TypeScript'
      ),
      new Expinfo(
        'Engineering Degree - INSAT',
        '2020-2025',
        'Engineering Degree in Computer networks and telecommunications'
      ),
      new Expinfo(
        'Game Programmer - Upwork',
        '2023-present',
        'Unity game Engine, Google Admob, C#, Firebase, Android Studio'
      ),
      new Expinfo(
        'Baccalaureate Degree',
        'August-2020',
        'Baccalaureate Degree in Mathematics'
      ),
    ];
  }
}
