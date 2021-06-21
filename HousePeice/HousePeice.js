import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HousePeice extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./HousePeice/costumes/costume1.svg", {
        x: 29.5,
        y: 39
      })
    ];

    this.sounds = [new Sound("pop", "./HousePeice/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.vars.level == 7) {
        this.effects.ghost = 0;
        this.visible = true;
      } else {
        this.visible = false;
      }
      this.moveAhead();
      yield;
    }
  }
}
