import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Front extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Thing", "./Front/costumes/Thing.svg", {
        x: 23.34483,
        y: 23.34483
      })
    ];

    this.sounds = [new Sound("Fun Time", "./Front/sounds/Fun Time.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "reset" }, this.whenIReceiveReset),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Game on" },
        this.whenIReceiveGameOn
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "r" }, this.whenKeyRPressed)
    ];

    this.vars.power = 0.3;
    this.vars.speed = 0.01264377102313964;
    this.vars.break = 0.96;
    this.vars.stear = 0.000013564425046649291;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.level = 1;
    this.stage.vars.zoom = 2;
    this.broadcast("reset");
  }

  *thrustForward(joystickY) {
    this.vars.speed += this.vars.power * joystickY;
    this.vars.speed = this.vars.speed * this.vars.break;
    this.move(this.stage.vars.zoom * this.vars.speed);
  }

  *thrustLeftRight(joystickX) {
    this.vars.stear += 4 * joystickX;
    this.vars.stear = this.vars.stear * 0.9;
    this.direction = this.sprites["Car"].direction + this.vars.stear;
  }

  *whenIReceiveReset() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.vars.speed = 0;
    this.vars.power = 0.3;
    this.vars.break = 0.96;
    this.vars.stear = 0;
    this.goto(-180, -60);
    this.direction = 0;
    this.broadcast("Game on");
  }

  *whenIReceiveGameOn() {
    this.broadcast("Car body");
    while (true) {
      this.size = 300;
      this.size = this.size * this.stage.vars.zoom;
      yield* this.thrustForward(
        this.keyPressed("up arrow") - this.keyPressed("down arrow")
      );
      yield* this.thrustLeftRight(
        this.keyPressed("right arrow") - this.keyPressed("left arrow")
      );
      yield;
    }
  }

  *whenKeyRPressed() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.broadcast("reset");
  }
}
