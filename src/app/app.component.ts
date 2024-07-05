import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBottomSheetModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor (
    private iconRegister: IconRegisterService,
    private router: Router,
    private _airSetupBottomSheet: MatBottomSheet,
  ) {}

  goToHome() {
    this.router.navigate(['']);
  }

  openAirSetupBottomSheet(): void {
    this._airSetupBottomSheet.open(AirSetupComponent);
  }
}
