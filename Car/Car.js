import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Car extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("On", "./Car/costumes/On.svg", {
        x: 23.344829999999973,
        y: 23.34483
      }),
      new Costume("Off", "./Car/costumes/Off.svg", {
        x: 23.34483,
        y: 23.34483
      }),
      new Costume("Tracks", "./Car/costumes/Tracks.png", { x: 4, y: 9 })
    ];

    this.sounds = [
      new Sound("pop", "./Car/sounds/pop.wav"),
      new Sound("unsatisfied", "./Car/sounds/unsatisfied.wav"),
      new Sound(
        "Drift Car Sound Effect",
        "./Car/sounds/Drift Car Sound Effect.wav"
      )
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Car body" },
        this.whenIReceiveCarBody
      ),
      new Trigger(Trigger.BROADCAST, { name: "reset" }, this.whenIReceiveReset),
      new Trigger(Trigger.BROADCAST, { name: "Win" }, this.whenIReceiveWin),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.bodyLength = 15;
  }

  *whenIReceiveCarBody() {
    this.direction = 0;
    this.moveBehind();
    while (true) {
      this.size = 200 * this.stage.vars.zoom;
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites["Front"].y - this.y,
          this.sprites["Front"].x - this.x
        )
      );
      this.goto(this.sprites["Front"].x, this.sprites["Front"].y);
      this.move(0 - this.vars.bodyLength * this.stage.vars.zoom);
      if (this.touching(this.sprites["Obstacles"].andClones())) {
        this.broadcast("reset");
        yield* this.playSoundUntilDone("unsatisfied");
      }
      if (this.keyPressed("down arrow") || this.keyPressed("up arrow")) {
        if (this.keyPressed("right arrow")) {
          this.effects.ghost = 75;
          this.costume = "Tracks";
          this.stamp();
          this.costume = "Off";
          this.effects.ghost = 0;
        } else {
          if (this.keyPressed("left arrow")) {
            this.effects.ghost = 75;
            this.costume = "Tracks";
            this.stamp();
            this.costume = "Off";
            this.effects.ghost = 0;
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveReset() {
    this.vars.bodyLength = 15;
    this.goto(-180, -95);
  }

  *whenIReceiveWin() {
    this.clearPen();
    this.stage.vars.level += 1;
    this.broadcast("reset");
  }

  *whenGreenFlagClicked() {
    this.clearPen();
    while (true) {
      if (this.keyPressed("down arrow")) {
        if (this.keyPressed("down arrow")) {
          yield* this.wait(0.75);
        }
        if (this.keyPressed("down arrow")) {
          this.costume = "On";
        }
        if (this.keyPressed("down arrow")) {
          yield* this.wait(0.75);
        }
        if (this.keyPressed("down arrow")) {
          this.costume = "Off";
        }
      } else {
        this.costume = "Off";
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.keyPressed("up arrow")) {
        yield* this.playSoundUntilDone("Drift Car Sound Effect");
      }
      yield;
    }
  }
}
