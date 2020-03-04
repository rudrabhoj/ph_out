import SmartDepend from '../Dep/SmartDepend';

//Core
import Entity     from        '../Game/Core/Engine/Entity';
import World      from        '../Game/Core/Engine/World';

//Services
import Screen     from        '../Game/Services/Screen';


class ControlContainer {
  private _smartDepend:SmartDepend;
  private _entity:any; _world:any;

  private _screen:any;

  constructor() {
    this._smartDepend = new SmartDepend();

    this._addModules();
    this._addDepends();
  }

  public getMain(): World {
    let spEntity = <World> this._smartDepend.resolve(this._world);

    return spEntity;
  }

  private _addModules() {
    //Game
      //Core
      this._entity        = this._smartDepend.addModule(Entity, false);
      this._world         = this._smartDepend.addModule(World, false);

      //Services
      this._screen        = this._smartDepend.addModule(Screen, false);

  }

  private _addDepends() {
    //Game
      //Core
      this._smartDepend.addDependency(this._world, this._entity);
      this._smartDepend.addDependency(this._world, this._screen);
  }

}

export default ControlContainer;