import React from "react";
import { ThirdButtonsDBasket } from "../../../helpers/AllFileExports";
import { StoreSound } from "../../../helpers/Data";
import "../Stories.Styles.scss";

export default function DriveBasket() {
  return (
    <div className="drive-basket story-containers" onChange={StoreSound()}>
      {" "}
      You decide to grab a hand basket instead of a cart, you've driven here but
      you don't have much to get so this should be a quick trip. As you walk
      from aisle to aisle looking for groceries you don't see anyone else
      shopping. Come to think of it, you didn't see a door greeter or any
      cashiers either.You did see other cars in the parking lot though and
      you're pretty sure you can hear other voices and carts so there must be
      someone else here! As you enter the cereal aisle you spot someone
      lumbering across the opening at the other end of the aisle.
      <br />
      <br />
      All of a sudden, CRUNCH!!!!
      <br />
      <br />
      You feel severe pain on your left shoulder blade like something bit you!
      You throw your elbow back hard and turn around to see a man, but not like
      any man you've ever seen before! His eyes are pale white, no pupils. His
      face looks to be rotten, large chunks of flesh are missing, his clothes
      are torn and tattered, and this bastard just took a bite out of your left
      shoulder!
      <ThirdButtonsDBasket />
    </div>
  );
}
