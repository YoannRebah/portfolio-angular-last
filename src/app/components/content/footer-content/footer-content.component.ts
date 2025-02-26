import { Component } from '@angular/core';
import { Anchor } from '../../../shared/models/anchor.interface';

@Component({
  selector: 'app-footer-content',
  standalone: true,
  imports: [],
  templateUrl: './footer-content.component.html',
  styleUrl: './footer-content.component.scss'
})

export class FooterContentComponent {
  footerLinks: Anchor[][] = [
    [
      {
        href: '#',
        text: "Accueil",
        ariaLabel: 'Accueil',
      },
      {
        href: '#intro',
        text: "Introduction",
        ariaLabel: 'Introduction',
      },
      {
        href: '#skills',
        text: "Compétences",
        ariaLabel: 'Compétences',
      },
      {
        href: '#notable-achievements',
        text: "Réalisations Notables",
        ariaLabel: 'Réalisations Notables',
      }
    ],
    [
      {
        href: '#tools-overview',
        text: "Logiciels",
        ariaLabel: 'Logiciels',
      },
      {
        href: '#current-job',
        text: "Poste Actuel",
        ariaLabel: 'Poste Actuel',
      },
      {
        href: '#location',
        text: 'Localisation',
        ariaLabel: 'Localisation',
      },
      {
        href: '#interests',
        text: "Centres d'intérêt",
        ariaLabel: 'Centres d\'intérêt',
      }
    ],
    [
      {
        href: '#arcade-room',
        text: "Salle d'Arcade",
        ariaLabel: 'Salle d\'Arcade',
      },
      {
        href: '#contact',
        text: "Contact",
        ariaLabel: 'Contact',
      },
      {
        href: 'https://github.com/YoannRebah/portfolio-angular',
        text: 'Code Source (Git)',
        ariaLabel: 'Code Source (Git)',
        target: "_blank"
      },
    ]
  ];
}