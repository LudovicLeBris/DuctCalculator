import { LinearApd } from "./linear-apd.model";
import { SingularApd } from "./singular-apd.model";
import { TotalAdditionalApd } from "./total-additional-apd.model";
import { TotalApd } from "./total-apd.models";

export class Apd {
  linearApd: LinearApd;
  singularApd: SingularApd;
  additionalApd: TotalAdditionalApd;
  totalApd: TotalApd;

  constructor () {
    this.linearApd = new LinearApd;
    this.singularApd = new SingularApd;
    this.additionalApd = new TotalAdditionalApd;
    this.totalApd = new TotalApd;
  }
}
