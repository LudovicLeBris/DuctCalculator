import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconRegisterService {

  iconlist: string[] = [
    "30_elbow",
    "30_sharp_elbow",
    "45_elbow",
    "45_junc_tee",
    "45_sep_tee",
    "45_sharp_elbow",
    "60_elbow",
    "60_sharp_elbow",
    "90_elbow",
    "90_junc_tee",
    "90_sep_tee",
    "90_sharp_elbow",
    "additional_apd",
    "altitude",
    "apd-bg-transparent",
    "apd",
    "circular",
    "diameter",
    "flowrate",
    "flowspeed",
    "height",
    "length",
    "linear_apd",
    "long_reduc",
    "material",
    "pressed_reduc",
    "rectangular",
    "section",
    "singular_apd",
    "temperature",
    "total_apd",
    "width",
  ];

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {
    this.importIconsCollection(this.iconlist);
  }

  public importIcon(name: string): MatIconRegistry {
    return this.iconRegistry.addSvgIcon(
      `${name}`,
      this.sanitizer.bypassSecurityTrustResourceUrl(`images/icons/${name}.svg`)
    );
  }

  public importIconsCollection(nameCollection: string[]): void {
    nameCollection.forEach(name => {
      this.importIcon(name);
    });
  }
}
