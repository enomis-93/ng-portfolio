import { Component, OnInit } from '@angular/core';
import { Project } from '../interfaces/project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  projects: Project[] = [];

  constructor() {}

  ngOnInit(): void {
    this.projects = [
      {
        title: 'Bootstrap Responsive Page',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptas dolores sequi, quam ab suscipit error veniam, fuga aperiam officiis cum adipisci necessitatibus autem, ad quo accusantium sapiente minus! Asperiores.',
        image: 'assets/images/project-pics/Bootstrap_responsive_page.jpg',
        link: '',
      },
      {
        title: 'Bing Map',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam labore dolorum nam necessitatibus, iure qui voluptatibus animi reiciendis ab, debitis eius itaque rerum. Adipisci, rerum vitae delectus libero nobis consequuntur.',
        image: 'assets/images/project-pics/Bing_map_pic.jpg',
        link: '',
      },
      {
        title: '3D Cube',
        description:
          ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus voluptate dolores doloribus nobis illo, dicta mollitia aliquam vitae magni, tenetur, quia inventore? Atque quas aliquam in nisi libero ut sed!',
        image: 'assets/images/project-pics/3D_Cube.png',
        link: '',
      },
      {
        title: 'Movie_App',
        description:
          ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus voluptate dolores doloribus nobis illo, dicta mollitia aliquam vitae magni, tenetur, quia inventore? Atque quas aliquam in nisi libero ut sed!',
        image: 'assets/images/project-pics/Movie_App.jpg',
        link: '',
      },
      {
        title: 'Mi Player',
        description:
          ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus voluptate dolores doloribus nobis illo, dicta mollitia aliquam vitae magni, tenetur, quia inventore? Atque quas aliquam in nisi libero ut sed!',
        image: 'assets/images/project-pics/Mi_Player.jpg',
        link: '',
      },
    ];
  }
}
