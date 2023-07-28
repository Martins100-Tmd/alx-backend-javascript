import Building from "./5-building";

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(floor) {
    if (typeof floor === "number") this._floors = floor;
    throw new TypeError("Floors must be a number");
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft === "number") this._sqft = sqft;
    else throw new TypeError("Sqft must be a number");
  }

  evacuationWarningMessage() {
    this.evacuationWarningMessage = function eWM() {
      return `Evacuate slowly the ${this._floors} floors`;
    };
    return this.evacuationWarningMessage();
  }
}

