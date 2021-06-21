import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.png", {
        x: 480,
        y: 360
      }),
      new Costume("crossing", "./Stage/costumes/crossing.png", {
        x: 480,
        y: 360
      }),
      new Costume("Bridge", "./Stage/costumes/Bridge.png", { x: 480, y: 360 })
    ];

    this.sounds = [new Sound("Fun Time", "./Stage/sounds/Fun Time.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.zoom = 2;
    this.vars.level = 7;
    this.vars.alert = 0;
  }

  *whenGreenFlagClicked() {
    while (true) {
      yield* this.playSoundUntilDone("Fun Time");
      yield* this.wait(1);
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.vars.level == 3) {
        this.costume = "crossing";
      } else {
        if (this.vars.level == 6) {
          this.costume = "Bridge";
        } else {
          this.costume = "backdrop1";
        }
      }
      yield;
    }
  }
}
