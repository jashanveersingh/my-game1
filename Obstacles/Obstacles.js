import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Obstacles extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Obstacles/costumes/1.png", { x: 120, y: 90 }),
      new Costume("2", "./Obstacles/costumes/2.png", { x: 120, y: 90 }),
      new Costume("3", "./Obstacles/costumes/3.png", { x: 120, y: 90 }),
      new Costume("4", "./Obstacles/costumes/4.png", { x: 120, y: 90 }),
      new Costume("5", "./Obstacles/costumes/5.png", { x: 120, y: 90 }),
      new Costume("6", "./Obstacles/costumes/6.png", { x: 120, y: 90 }),
      new Costume("7", "./Obstacles/costumes/7.png", { x: 120, y: 90 })
    ];

    this.sounds = [new Sound("pop", "./Obstacles/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game on" },
        this.whenIReceiveGameOn
      )
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.size = 200 * this.stage.vars.zoom;
      yield;
    }
  }

  *whenIReceiveGameOn() {
    this.costume = this.stage.vars.level;
    this.goto(0, 0);
  }
}
