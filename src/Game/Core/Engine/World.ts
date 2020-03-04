import Entity from '../Engine/Entity';
import IScreen from '../../Services/IScreen';

class World {
  private _width: number;
  private _height: number;

  private _initialized: boolean;

  private _entity: Entity;

  private _screen: IScreen;

  constructor(entity: Entity, screen: IScreen) {
    this._width = 0;
    this._height = 0;

    this._initialized = false;

    this._entity = entity;

    this._screen = screen;
  }

  public init(w: number, h: number): number {
    let elmId: string = this._getElementName();

    this._width = w;
    this._height = h;

    this._createScreen(w, h, elmId);

    return 5;
  }

  private _getElementName(): string {
    return 'gameDiv';
  }

  //Foreign Dependencies
  private _createScreen(w: number, h: number, elmId: string): void {
    this._screen.createScreen(w, h, elmId);
  }


}

export default World;