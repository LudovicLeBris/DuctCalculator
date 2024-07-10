import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'
import { IconRegisterService } from './services/icon-register.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { AirSetupComponent } from './components/air-setup/air-setup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBottomSheetModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  isLightMode: boolean = true;

  constructor (
    private iconRegister: IconRegisterService,
    private router: Router,
    private _airSetupBottomSheet: MatBottomSheet,
  ) {}

  ngOnInit(): void {
    document.documentElement.classList.add("light-theme");
  }

  goToHome() {
    this.router.navigate(['']);
  }

  openAirSetupBottomSheet(): void {
    this._airSetupBottomSheet.open(AirSetupComponent);
  }

  toggleTheme() {
    this.isLightMode = !this.isLightMode;
    if (this.isLightMode) {
      document.documentElement.classList.remove("dark-theme");
      document.documentElement.classList.add("light-theme");
    } else {
      document.documentElement.classList.remove("light-theme");
      document.documentElement.classList.add("dark-theme");
    }
  }

  goToAbout() {
    this.router.navigate(['about']);
  }
}
