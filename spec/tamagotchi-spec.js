import { Tamagotchi } from "./../src/tamagotchi.js"

describe('Tamagotchi', function() {

  let reusableTamagotchi;

  beforeEach(function(){
    jasmine.clock().install();
    reusableTamagotchi = new Tamagotchi("Pikachu");
    reusableTamagotchi.setFood(5);
    reusableTamagotchi.setFun(5);
    reusableTamagotchi.setSleep(5);
  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });

  it('should have a name and a level of 100 for hunger, fun, and sleep', function() {
    expect(reusableTamagotchi.name).toEqual("Pikachu");
    expect(reusableTamagotchi.foodLevel).toEqual(100);
    expect(reusableTamagotchi.funLevel).toEqual(100);
    expect(reusableTamagotchi.sleepLevel).toEqual(100);
  });

  it("should drop each level by 5 after a second.", function(){
    jasmine.clock().tick(1001);
    expect(reusableTamagotchi.foodLevel).toEqual(95);
    expect(reusableTamagotchi.funLevel).toEqual(95);
    expect(reusableTamagotchi.sleepLevel).toEqual(95);
  });

  it("should increase the food level after eating, with different amounts for each type of food.", function(){
    reusableTamagotchi.eatGrass();
    expect(reusableTamagotchi.foodLevel).toEqual(105);
    reusableTamagotchi.eatBerries();
    expect(reusableTamagotchi.foodLevel).toEqual(115);
    reusableTamagotchi.eatMeat();
    expect(reusableTamagotchi.foodLevel).toEqual(130);
  });

  it("should increase the fun level after playing, with different amounts for each activity.", function(){
    reusableTamagotchi.pet();
    expect(reusableTamagotchi.funLevel).toEqual(105);
    reusableTamagotchi.walk();
    expect(reusableTamagotchi.funLevel).toEqual(115);
    reusableTamagotchi.skyDive();
    expect(reusableTamagotchi.funLevel).toEqual(130);
  });

  it("should increase the sleep level after sleeping, with different amounts for each length of sleep.", function(){
    reusableTamagotchi.nap();
    expect(reusableTamagotchi.sleepLevel).toEqual(105);
    reusableTamagotchi.longNap();
    expect(reusableTamagotchi.sleepLevel).toEqual(115);
    reusableTamagotchi.coma();
    expect(reusableTamagotchi.sleepLevel).toEqual(130);
  });

  it("should be able to tell when the Tamagotchi is dead.", function(){
    jasmine.clock().tick(20001);
    expect(reusableTamagotchi.isDead()).toEqual(true);
  });

});
