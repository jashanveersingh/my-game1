import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Front from "./Front/Front.js";
import Car from "./Car/Car.js";
import Parking from "./Parking/Parking.js";
import ObstaclesAssets from "./ObstaclesAssets/ObstaclesAssets.js";
import Obstacles from "./Obstacles/Obstacles.js";
import Alert from "./Alert/Alert.js";
import Complete from "./Complete/Complete.js";
import Tn from "./Tn/Tn.js";
import HousePeice from "./HousePeice/HousePeice.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Front: new Front({
    x: 132.07606580009198,
    y: 42.44019028779181,
    direction: 107.9718971592947,
    costumeNumber: 1,
    size: 600,
    visible: true,
    layerOrder: 3
  }),
  Car: new Car({
    x: 103.53982448861163,
    y: 51.69669782643522,
    direction: 107.97188360755071,
    costumeNumber: 2,
    size: 400,
    visible: true,
    layerOrder: 2
  }),
  Parking: new Parking({
    x: 170,
    y: -120,
    direction: 90,
    costumeNumber: 1,
    size: 400,
    visible: false,
    layerOrder: 1
  }),
  ObstaclesAssets: new ObstaclesAssets({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 10,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Obstacles: new Obstacles({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 7,
    size: 400,
    visible: true,
    layerOrder: 5
  }),
  Alert: new Alert({
    x: 0,
    y: 199,
    direction: 90,
    costumeNumber: 1,
    size: 600,
    visible: true,
    layerOrder: 7
  }),
  Complete: new Complete({
    x: 0,
    y: 199,
    direction: 90,
    costumeNumber: 1,
    size: 600,
    visible: false,
    layerOrder: 6
  }),
  Tn: new Tn({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 9
  }),
  HousePeice: new HousePeice({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 400,
    visible: true,
    layerOrder: 8
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
