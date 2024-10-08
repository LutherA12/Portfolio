import React from "react";
import { ThirdButtonsWCart } from "../../../helpers/AllFileExports";
import { StoreSound } from "../../../helpers/Constants";
import "../Stories.Styles.scss";

export default function WalkCart() {
  return (
    <div className="walk-cart story-containers" onChange={StoreSound()}>
      {" "}
      You decide to grab a shopping cart. You plan on getting quite a few things
      and since it's Saturday you've got time, plus, this particular store
      doesn't really care if you take shopping carts off of their lot it seems
      so you may be walking this cart home. As you walk from aisle to aisle
      looking for groceries you don't see anyone else shopping. Come to think of
      it, you didn't see a door greeter or any cashiers either. You did see
      other cars in the parking lot though and you're pretty sure you can hear
      other voices and carts so there must be someone else here! As you enter
      the cereal aisle you spot someone lumbering across the opening at the
      other end of the aisle.
      <br />
      <br />
      All of a sudden, CRUNCH!!!!
      <br />
      <br />
      You feel severe pain on your left shoulder blade like something bit you!
      You throw your elbow back hard and turn around to see a man, but not like
      any man you've ever seen before! His eyes are pale white, no pupils. His
      face looks to be rotten, large chunks of flesh are missing, his clothes
      are torn and tattered, and this bastard just took a bite out of you!
      <ThirdButtonsWCart />
    </div>
  );
}
