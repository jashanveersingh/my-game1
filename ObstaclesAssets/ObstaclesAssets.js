import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ObstaclesAssets extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Yellow", "./ObstaclesAssets/costumes/Yellow.png", {
        x: 6,
        y: 10
      }),
      new Costume("Red", "./ObstaclesAssets/costumes/Red.png", { x: 6, y: 10 }),
      new Costume("Blue", "./ObstaclesAssets/costumes/Blue.png", {
        x: 6,
        y: 10
      }),
      new Costume("Green", "./ObstaclesAssets/costumes/Green.png", {
        x: 6,
        y: 10
      }),
      new Costume("Black/Grey", "./ObstaclesAssets/costumes/Black/Grey.png", {
        x: 6,
        y: 10
      }),
      new Costume("White", "./ObstaclesAssets/costumes/White.png", {
        x: 6,
        y: 10
      }),
      new Costume("Pink", "./ObstaclesAssets/costumes/Pink.png", {
        x: 6,
        y: 10
      }),
      new Costume("Oil can", "./ObstaclesAssets/costumes/Oil can.png", {
        x: 9,
        y: 8
      }),
      new Costume("Garbage", "./ObstaclesAssets/costumes/Garbage.png", {
        x: 4,
        y: 8
      }),
      new Costume("Cone", "./ObstaclesAssets/costumes/Cone.png", {
        x: 12,
        y: 18
      })
    ];

    this.sounds = [new Sound("pop", "./ObstaclesAssets/sounds/pop.wav")];

    this.triggers = [];
  }
}
