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
        'Solitude',
        '3D PC Game',
        'Unity, Blender, Audacity',
        '2023',
        'https://ibar.itch.io/solitude',
        "Solitude is a story-driven Escape room game where the player's ability to analyze and critically think is the key to solving the puzzles and escaping the different rooms. Solitude have more than 600 downloads on itch.io ",
        'Game Programmer, Game Designer, Level Designer, Game Artist.',
        [
          'solitude_1.png',
          'solitude_2.png',
          'solitude_3.png',
          'solitude_4.png',
        ],
        []
      ),
      new project(
        'BlockPuzzle',
        'Casual Mobile Game',
        'Unity',
        '2023',
        '',
        'Block Puzzle is a casual Mobile Game that requires the player to think and plan ahead to solve the puzzles. The game is an Upwork project that was made for a client. The game will be available on the Google Play Store soon.',
        'Game Programmer,Level Designer',
        [
          'block_0.jpg',
          'block_1.png',
          'block_2.png',
          'block_3.png',
          'block_4.png',
        ],
        []
      ),
      new project(
        'Colorful',
        '2D PC Game',
        'Unity, photoshop',
        '2022',
        'https://ibar.itch.io/colorful',
        'Colorful is 2D platformer puzzle game that requires thinking and speed to solve the puzzles to proceed in the game, in order to bring back the colors that the world lack.',
        'Game Programmer, Game Designer, Level Designer, Game Artist.',
        ['colorful_1.png', 'colorful_2.png', 'colorful_3.png'],
        []
      ),
      new project(
        'Rootin IN',
        '2D PC/Mobile Game',
        'Unity',
        '2023',
        'https://ibar.itch.io/rooting-in',
        'Rooting IN is a strategy turn-based board game where 2,3 or 4 players race to the water while avoiding being touched by others. But unlike traditional board games that use dice. In Rooting IN, the player chooses the number of steps he will perform, but the direction is RANDOM. This game was made in 48 hours for the Global Game Jam, the theme was ROOTS.',
        'Game Programmer, Game Designer, Game Artist.',
        ['root_1.png', 'root_2.png', 'root_3.png'],
        []
      ),
      new project(
        'Stage Craft',
        '2D PC Game',
        'Unity, Aseprite',
        '2024',
        'https://globalgamejam.org/games/2024/jesters-stagecraft-5',
        "Jester's stagecraft's is a 2D story driven game where you play as a jester who's trying to make a life by making people laugh through his performences. The game was part of the Global Game Jam 2K24 and was made in 2 days. The theme was 'Make me Laugh'.",
        'Game Programmer, Game Designer, Level Designer, Game Artist.',
        ['jester_3.png', 'jester_1.png', 'jester_2.png'],
        []
      ),
      new project(
        'Thief Escape',
        'game dev',
        'unity',
        '2022',
        '',
        'Thief Escape is a 3D game where the player plays as a thief who is trying to escape from a Dungeon. The game was made for a client on Upwork.',
        'Game Programmer, Game Designer, Level Designer',

        ['upwork_1.png', 'upwork_2.png', 'upwork_3.png'],
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
