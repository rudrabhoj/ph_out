import * as phaser from 'phaser';

import ControlContainer from './Dep/ControlContainer'
import World from './Game/Core/Engine/World';

let control = new ControlContainer();
let world: World = control.getMain();

(<any>window).world = world;

world.init(500, 500);
