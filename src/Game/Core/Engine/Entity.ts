class Entity {
  private _x: number;
  private _y: number;
  private _initialized: boolean;

  constructor() {
    this._x = 0;
    this._y = 0;

    this._initialized = false;
  }

  init(x: number, y: number): void {
    this._x = x;
    this._y = y;
  }

  createNew(): Entity {
    return new Entity();
  }


}

export default Entity;