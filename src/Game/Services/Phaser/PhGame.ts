import {Game, GameObjects, Scene} from 'phaser';

import PhFactory from './PhFactory';

class PhGame {
  private _phFactory: PhFactory;
  private _game: Game | null;
  private _sceneKey: string;
  private _scene: Scene | null;

  constructor(phFactory: PhFactory) {
    this._phFactory = phFactory;
    this._game = null;
    this._scene = null;

    console.log('i am phgame');

    this._sceneKey = 'main_scene';
  }

  get scene(): Scene {
    if (this._scene == null || this._game == null) {
      console.error("Game not initialized, can't give scene!");
    }

    return <Scene> this._scene;
  }

  public init(w: number, h: number, container: string): void {
    this._scene = this._phFactory.createScene({key: this._sceneKey, active: true});

    this._game = this._createGame(w, h, container);

    console.log('adding scene!!');

    console.log('scenes before ', this._game.scene.getScenes());

    this._game.scene.add(this._sceneKey, this._scene);

    console.log('scenes aftere ', this._game.scene.getScenes())
  }

  public clearScreen() {
    if (this._game != null) {
      this._game.scene.start(this._sceneKey);
    } else {
      console.error("Game has not been initialized!");
    }
  }

  //Foreign Dependencies
  private _createGame(w: number, h: number, container: string): Game {
    return this._phFactory.createGame(w, h, container, 'canvas');
  }
}

export default PhGame;