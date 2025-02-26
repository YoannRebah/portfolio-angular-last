import { Component } from '@angular/core';
import { H1Component } from '../../components/base/h1/h1.component';
import { HeaderComponent } from '../../components/layout/header/header.component';
import { RegisterContentComponent } from '../../components/content/register-content/register-content.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    H1Component, 
    HeaderComponent,
    RegisterContentComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {
  constructor() {}
}
