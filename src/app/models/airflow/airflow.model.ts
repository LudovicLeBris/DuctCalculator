import { Flowrate } from "./flowrate.model";
import { Flowspeed } from "./flowspeed.model";

export class Airflow {
  public flowrate: Flowrate;
  public flowspeed: Flowspeed;

  constructor () {
    this.flowrate = new Flowrate;
    this.flowspeed = new Flowspeed;
  }
}
