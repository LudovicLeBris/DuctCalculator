import { AdditionalApd } from "./additional-apd.model";

export class AdditionalApdList {
  additionalApdList: AdditionalApd[];

  constructor () {
    this.additionalApdList = [];
  }

  public getAdditionalApdList(): AdditionalApd[] {
    return this.additionalApdList;
  }

  public addAdditionalApd(additionalApd: AdditionalApd): void {
    this.additionalApdList.push(additionalApd);
  }

  public updateAdditionalApd(index: number, additionalApd: AdditionalApd): void {
    this.additionalApdList[index] = additionalApd;
  }

  public removeAdditionalApd(additionalApd: AdditionalApd): void {
    if (!this.additionalApdList) {
      return;
    }
    this.additionalApdList.splice(this.getAdditionalApdIndex(additionalApd));
  }

  public getTotalAdditionalApdValue(): number {
    let totalAdditionalApdValue: number = 0;
    this.additionalApdList.forEach(additionalApd => {
      totalAdditionalApdValue += additionalApd.getValue();
    });
    return totalAdditionalApdValue;
  }

  private getAdditionalApdIndex(additionalApd: AdditionalApd): number {
    const additionalApdIndex: number = this.additionalApdList.findIndex(element => element.getName() == additionalApd.getName());
    return additionalApdIndex;
  }
}
