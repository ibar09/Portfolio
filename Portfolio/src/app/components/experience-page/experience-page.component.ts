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
        'exp1',
        '2022-2023',
        'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit'
      ),
      new Expinfo(
        'exp2',
        '2022-2023',
        'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit'
      ),
      new Expinfo(
        'exp3',
        '2022-2023',
        'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit'
      ),
      new Expinfo(
        'exp4',
        '2022-2023',
        'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit'
      ),
      new Expinfo(
        'exp5',
        '2022-2023',
        'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit'
      ),
      new Expinfo(
        'exp6',
        '2022-2023',
        'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit'
      ),
    ];
  }
}
