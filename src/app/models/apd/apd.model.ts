import { AdditionalApd } from "./additional-apd.model";
import { LinearApd } from "./linear-apd.model";
import { SingularApd } from "./singular-apd.model";

export class Apd {
  linearApd: LinearApd;
  singularApd: SingularApd;
  additionalApd: AdditionalApd;

  constructor () {
    this.linearApd = new LinearApd;
    this.singularApd = new SingularApd;
    this.additionalApd = new AdditionalApd;
  }
}
