import door from "../assets/audio/door.mp3";
import horrorHit from "../assets/audio/horrorHit.mp3";
import carStart from "../assets/audio/carStart.mp3";
import birdsAndTrees from "../assets/audio/birdsAndTrees.mp3";
import storeAmbiance from "../assets/audio/storeAmbiance.mp3";
import grabBasket from "../assets/audio/grabBasket.mp3";
import grabCart from "../assets/audio/grabCart.mp3";
import grabNeither from "../assets/audio/grabNeither.mp3";
import horrorSwell from "../assets/audio/horrorSwell.mp3";

export const openDoor = new Audio(door);
export const hit = new Audio(horrorHit);
export const car = new Audio(carStart);
export const nature = new Audio(birdsAndTrees);

export const storeSound = new Audio(storeAmbiance);
export const StoreSound = () => {
  storeSound.play();
};

export const basket = new Audio(grabBasket);
export const cart = new Audio(grabCart);
export const neither = new Audio(grabNeither);
export const horror = new Audio(horrorSwell);

export const buttons = {
  play: `Red to Play!`,
  quit: `Blue to Quit!`,
  drive: `Green to Drive...`,
  walk: `Yellow to Walk...`,
  basket: `Black for a hand Basket...`,
  cart: `Silver for a Shopping Cart...`,
  neither: `Orange for Neither...`,
  rush: `Carmine to Rush...`,
  run: `Brown to Run...`,
  storefront: `Purple for Storefront...`,
  storeback: `Gold for Storeback...`,
};

export const quitClasses = {
  A: `quit-buttonA`,
  B: `quit-buttonB`,
  C: `quit-buttonC`,
  D: `quit-buttonD`,
  E: `quit-buttonE`,
};
