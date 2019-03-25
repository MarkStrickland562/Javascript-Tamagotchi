export class Tamagotchi{
  constructor(name){
    this.name = name;
    this.foodLevel = 100;
    this.funLevel = 100;
    this.sleepLevel = 100;
    this.eatGrass = this.feed(5);
    this.eatBerries = this.feed(10);
    this.eatMeat = this.feed(15);
    this.pet = this.play(5);
    this.walk = this.play(10);
    this.skyDive = this.play(15);
    this.nap = this.sleep(5);
    this.longNap = this.sleep(10);
    this.coma = this.sleep(15);
    this.foodInterval;
  }

  setFood(amountLost) {
    this.foodLevel -= amountLost;
  }

  setFun(amountLost){
    this.funLevel -= amountLost;
  }

  setSleep(amountLost){
    this.sleepLevel -= amountLost;
  }

  feed(amount){
    return () => {
      this.foodLevel += amount;
    };
  }

  play(amount){
    return () => {
      this.funLevel += amount;
    };
  }

  sleep(amount){
    return () => {
      this.sleepLevel += amount;
    };
  }

  isDead(){
    return this.foodLevel <= 0 || this.funLevel <= 0 || this.sleepLevel <= 0;
  }

}
