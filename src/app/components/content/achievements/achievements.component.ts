import { Component, inject } from '@angular/core';
import { Achievements } from './achievements.interface';
import { PopinComponent } from '../../base/popin/popin.component';
import { PopinService } from '../../../shared/services/components/popin.service';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [PopinComponent],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss'
})

export class AchievementsComponent {
  activeIndex: number = 0;
  indexMin: number = 0;
  achievements: Achievements[] = 
  [
    {
      tab: {
        button: {
          text: "BNP Paribas"
        },
        img: {
          path: "assets/images/logo-bnp.png",
          alt: "BNP Paribas"
        }
      },
      img: {
        path: "assets/gif/achievements-1.gif",
        alt: ""
      },
      properties: [
        {
          title: "Missions :",
          list: [
            "Création de page / landing page",
            "Intégrations de mailing",
            "Gestion de contenu",
          ]
        },
        {
          title: "Environnement :",
          list: [
            "Lorem ipsum dolor, sit amet.",
            "Lorem ipsum dolor, sit amet.",
            "Lorem ipsum dolor, sit amet.",
            "Lorem ipsum dolor, sit amet."
          ]
        },
        {
          title: "Logiciels & Outils :",
          list: [
            "VS Code",
            "Git",
            "Zeplin",
            "Jenkins"
          ]
        }
      ]
    },
    {
      tab: {
        button: {
          text: "Hello bank!"
        },
        img: {
          path: "assets/images/logo-hb.png",
          alt: "Hello bank!"
        }
      },
      img: {
        path: "assets/gif/achievements-4.gif",
        alt: ""
      },
      properties: [
        {
          title: "Missions :",
          list: [
            "Création de page / landing page",
            "Gestion de contenu",
          ]
        },
        {
          title: "Lorem ipsum dolor 2 :",
          list: [
            "Lorem ipsum dolor, sit amet.",
            "Lorem ipsum dolor, sit amet.",
            "Lorem ipsum dolor, sit amet.",
            "Lorem ipsum dolor, sit amet."
          ]
        },
        {
          title: "Logiciels & Outils :",
          list: [
            "VS Code",
            "Git",
            "Zeplin",
            "Jenkins"
          ]
        }
      ]
    },
    {
      tab: {
        button: {
          text: "Hello bank! pro"
        },
        img: {
          path: "assets/images/logo-hb-pro.png",
          alt: "Hello bank! pro"
        }
      },
      img: {
        path: "assets/gif/achievements-3.gif",
        alt: ""
      },
      properties: [
        {
          title: "Missions :",
          list: [
            "Création de page / landing page",
            "Gestion de contenu",
          ]
        },
        {
          title: "Lorem ipsum dolor 3 :",
          list: [
            "Lorem ipsum dolor, sit amet.",
            "Lorem ipsum dolor, sit amet.",
            "Lorem ipsum dolor, sit amet.",
            "Lorem ipsum dolor, sit amet."
          ]
        },
        {
          title: "Lorem ipsum dolor 3 :",
          list: [
            "Lorem ipsum dolor, sit amet.",
            "Lorem ipsum dolor, sit amet.",
            "Lorem ipsum dolor, sit amet.",
            "Lorem ipsum dolor, sit amet."
          ]
        }
      ]
    },
    {
      tab: {
        button: {
          text: "Projets perso"
        },
        img: {
          path: "assets/images/logo-plus.png",
          alt: "Projets perso"
        }
      },
      img: {
        path: "assets/gif/achievements-5.gif",
        alt: ""
      },
      properties: [
        {
          title: "Création de sites :",
          list: [
            "Lorem ipsum dolor, sit amet.",
            "Lorem ipsum dolor, sit amet.",
            "Lorem ipsum dolor, sit amet.",
            "Lorem ipsum dolor, sit amet."
          ]
        },
        {
          title: "Création de jeux vidéos :",
          list: [
            "Lorem ipsum dolor, sit amet.",
            "Lorem ipsum dolor, sit amet.",
            "Lorem ipsum dolor, sit amet.",
            "Lorem ipsum dolor, sit amet."
          ]
        },
        {
          title: "Création de logiciel :",
          list: [
            "Lorem ipsum dolor, sit amet.",
            "Lorem ipsum dolor, sit amet.",
            "Lorem ipsum dolor, sit amet.",
            "Lorem ipsum dolor, sit amet."
          ]
        }
      ]
    }
  ];
  indexMax: number = this.achievements.length - 1;
  popinService = inject(PopinService);

  constructor() {}

  setActive(index: number): void {
    this.activeIndex = index;
  }

  onClickPrev(): void {
    if(this.activeIndex > this.indexMin) {
      this.activeIndex--
    } else {
      this.activeIndex = this.indexMax
    }
  }

  onClickNext(): void {
    if(this.activeIndex < this.indexMax) {
      this.activeIndex++
    } else {
      this.activeIndex = this.indexMin
    }
  }

  showPopin(id: string): void {
    this.popinService.show(id);
  }

}