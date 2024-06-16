import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// services
import { LoaderService } from './shared/services/components/loader.service';
// shared
import { LoaderComponent } from './components/shared/loader/loader.component';
import { VhsEffectComponent } from './components/shared/vhs-effect/vhs-effect.component';
import { TvProgramComponent } from './components/shared/tv-program/tv-program.component';
// layout
import { MainComponent } from './components/layout/main/main.component';
import { ContentComponent } from './components/layout/content/content.component';
import { SectionComponent } from './components/layout/section/section.component'; 
import { HeaderComponent } from './components/layout/header/header.component';
import { NavComponent } from './components/layout/nav/nav.component';
import { FooterComponent } from './components/layout/footer/footer.component';
// text
import { H1Component } from './components/text/h1/h1.component';
import { H2Component } from './components/text/h2/h2.component';
// views
import { EmployeeCardComponent } from './components/views/employee-card/employee-card.component';
import { SkillsComponent } from './components/views/skills/skills.component';
import { AchievementsComponent } from './components/views/achievements/achievements.component';
import { ToolsOverviewComponent } from './components/views/tools-overview/tools-overview.component';
import { MarqueeInterestsComponent } from './components/views/marquee-interests/marquee-interests.component';
import { LocationComponent } from './components/views/location/location.component';
import { ArcadeRoomComponent } from './components/views/arcade-room/arcade-room.component';
import { ReferencesInspirationsComponent } from './components/views/references-inspirations/references-inspirations.component';
import { IntroductionComponent } from './components/views/introduction/introduction.component';
import { ListNavComponent } from './components/views/list-nav/list-nav.component';
import { ListFooterComponent } from './components/views/list-footer/list-footer.component';
import { FormContactComponent } from './components/views/form-contact/form-contact.component';
import { AdsPosterComponent } from './components/views/ads-poster/ads-poster.component';
// components
import { TerminalComponent } from './components/terminal/terminal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // shared
    LoaderComponent,
    VhsEffectComponent,
    TvProgramComponent,
    // layout
    MainComponent,
    ContentComponent,
    SectionComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    // text
    H1Component,
    H2Component,
    // views
    EmployeeCardComponent,
    SkillsComponent,
    AchievementsComponent,
    ToolsOverviewComponent,
    MarqueeInterestsComponent,
    LocationComponent,
    ArcadeRoomComponent,
    ReferencesInspirationsComponent,
    IntroductionComponent,
    ListNavComponent,
    ListFooterComponent,
    AdsPosterComponent,
    FormContactComponent,
    // components
    TerminalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {

  constructor(private loaderService: LoaderService) {}

  ngOnInit(): void {
    this.loaderService.toggle();
  }

}