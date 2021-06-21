import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Parking extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Outline", "./Parking/costumes/Outline.png", {
        x: -1,
        y: 16
      }),
      new Costume("inside", "./Parking/costumes/inside.png", { x: -17, y: 11 })
    ];

    this.sounds = [new Sound("pop", "./Parking/sounds/pop.wav")];

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
    yield* this.setup();
  }

  *whenIReceiveGameOn() {
    yield* this.wait(0.2);
    while (true) {
      this.costume = "inside";
      this.size = 200 * this.stage.vars.zoom;
      if (this.touching(this.sprites["Car"].andClones())) {
        this.costume = "Outline";
        if (this.touching(this.sprites["Car"].andClones())) {
          this.stage.vars.alert = 1;
        } else {
          this.broadcast("Win");
          return;
        }
      } else {
        this.stage.vars.alert = 0;
        this.costume = "Outline";
      }
      this.moveBehind();
      if (this.stage.vars.level == 7) {
        this.visible = false;
      }
      yield;
    }
  }

  *setup() {
    this.goto(170, -120);
    this.visible = true;
  }
}
