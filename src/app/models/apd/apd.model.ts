import { AdditionalApd } from "./additional-apd.model";
import { LinearApd } from "./linear-apd.model";
import { SingularApd } from "./singular-apd.model";
import { TotalApd } from "./total-apd.models";

export class Apd {
  linearApd: LinearApd;
  singularApd: SingularApd;
  additionalApd: AdditionalApd;
  totalApd: TotalApd;

  constructor () {
    this.linearApd = new LinearApd;
    this.singularApd = new SingularApd;
    this.additionalApd = new AdditionalApd;
    this.totalApd = new TotalApd;
  }
}
