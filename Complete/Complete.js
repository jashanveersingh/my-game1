import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Complete extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Complete/costumes/costume1.svg", {
        x: 13.090910000000008,
        y: 5.681819999999988
      })
    ];

    this.sounds = [new Sound("pop", "./Complete/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Win" }, this.whenIReceiveWin)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveWin() {
    this.visible = true;
    for (let i = 0; i < 50; i++) {
      this.y += (165 - this.y) / 5;
      yield;
    }
    yield* this.wait(1);
    for (let i = 0; i < 50; i++) {
      this.y += (200 - this.y) / 5;
      yield;
    }
    this.visible = false;
  }
}
