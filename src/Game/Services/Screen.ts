import IScreen from '../Services/IScreen';

class Screen {
  constructor() {

  }

  createScreen(width: number, height: number, elementId: string): void {
    console.log("Creating a game with width %s and height %s on the element %s");
  }
}

export default Screen;