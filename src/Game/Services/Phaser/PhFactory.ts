import {Game, GameObjects, Scene} from 'phaser';

class PhFactory {
  constructor() {

  }

  createGame(width: number, height: number, container: string, renderer: string = "null"): Game {
    let rnd: any;

    if (renderer == 'canvas') {
      rnd = Phaser.CANVAS;
    } else if (renderer == 'webgl') {
      rnd = Phaser.WEBGL;
    } else {
      rnd = Phaser.AUTO;
    }

    let game: Game = new Game({
      type: rnd,
      parent: container,
      width: width,
      height: height
    });

    return game;
  }

  createGraphics(scene: Scene): GameObjects.Graphics {
    let o = new GameObjects.Graphics(scene);

    return o;
  }

  createScene(config: any): Scene {
    console.log(config);
    return new Scene(config);
  }
}

export default PhFactory;