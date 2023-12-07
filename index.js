import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Render from "./Render/Render.js";
import Physics from "./Physics/Physics.js";
import Cloud from "./Cloud/Cloud.js";
import Next from "./Next/Next.js";
import Current from "./Current/Current.js";
import Counter from "./Counter/Counter.js";
import Buttons from "./Buttons/Buttons.js";
import Poof from "./Poof/Poof.js";
import FramesPersecond from "./FramesPersecond/FramesPersecond.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Render: new Render({
    x: 71.1810603589982,
    y: -121.5981019668764,
    direction: -38,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 5,
    size: 35,
    visible: false,
    layerOrder: 3
  }),
  Physics: new Physics({
    x: 187,
    y: -56,
    direction: -45.16017009041599,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Cloud: new Cloud({
    x: 52.5,
    y: 125,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Next: new Next({
    x: 172,
    y: 77,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 4,
    size: 30,
    visible: true,
    layerOrder: 5
  }),
  Current: new Current({
    x: 52.5,
    y: 125,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 5,
    size: 46,
    visible: true,
    layerOrder: 9
  }),
  Counter: new Counter({
    x: -178,
    y: 88,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 10,
    size: 30,
    visible: false,
    layerOrder: 6
  }),
  Buttons: new Buttons({
    x: 0,
    y: -120,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 7,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  Poof: new Poof({
    x: 86.5,
    y: -123.5,
    direction: 92.84109826075579,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 31,
    visible: false,
    layerOrder: 2
  }),
  FramesPersecond: new FramesPersecond({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 8
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
