import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Alert extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Alert/costumes/costume1.svg", {
        x: 13.090909090909093,
        y: 5.681818181818187
      })
    ];

    this.sounds = [new Sound("pop", "./Alert/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.vars.alert == 1) {
        this.y += (165 - this.y) / 5;
      } else {
        this.y += (200 - this.y) / 5;
      }
      yield;
    }
  }
}
