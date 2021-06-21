import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Tn extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Tn/costumes/costume1.svg", {
        x: 242.01786499999992,
        y: 255.2480528125
      })
    ];

    this.sounds = [new Sound("pop", "./Tn/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.effects.ghost = 100;
      this.moveAhead();
      yield;
    }
  }
}
