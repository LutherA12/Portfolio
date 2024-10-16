import { useState } from "react";
import {
  DriveBasket,
  DriveCart,
  DriveNeither,
  QuitBeforeSecondStoryDrive,
} from "../../../helpers/AllFileExports";
import {
  buttons,
  quitClasses,
  basket,
  cart,
  neither,
  horror,
} from "../../../helpers/Data";
import "../Buttons.Styles.scss";

export default function SecondButtonsDrive() {
  const [isBasketDisabled, setIsBasketDisabled] = useState(false);
  const [isCartDisabled, setIsCartDisabled] = useState(false);
  const [isNeitherDisabled, setIsNeitherDisabled] = useState(false);
  const [isQuitDisabled, setIsQuitDisabled] = useState(false);

  const [storyBasket, setStoryBasket] = useState("");
  const [storyCart, setStoryCart] = useState("");
  const [storyNeither, setStoryNeither] = useState("");
  const [storyQuit, setStoryQuit] = useState("");

  const basketButtonHandler = () => {
    setIsBasketDisabled(true);
    setIsCartDisabled(true);
    setIsNeitherDisabled(true);
    setIsQuitDisabled(true);
    basket.play();

    setStoryBasket(<DriveBasket />);
  };

  const cartButtonHandler = () => {
    setIsBasketDisabled(true);
    setIsCartDisabled(true);
    setIsNeitherDisabled(true);
    setIsQuitDisabled(true);
    cart.play();

    setStoryCart(<DriveCart />);
  };

  const neitherButtonHandler = () => {
    setIsBasketDisabled(true);
    setIsCartDisabled(true);
    setIsNeitherDisabled(true);
    setIsQuitDisabled(true);
    neither.play();

    setStoryNeither(<DriveNeither />);
  };

  const quitButtonHandler = () => {
    setIsBasketDisabled(true);
    setIsCartDisabled(true);
    setIsNeitherDisabled(true);
    setIsQuitDisabled(true);
    horror.play();

    setStoryQuit(<QuitBeforeSecondStoryDrive />);
  };

  const secondButtonsDrive = [
    <button
      className="basket-button second-buttons"
      onClick={basketButtonHandler}
      disabled={isBasketDisabled}
      type="button"
    >
      {buttons.basket}
    </button>,
    <button
      className="cart-button second-buttons"
      onClick={cartButtonHandler}
      disabled={isCartDisabled}
      type="button"
    >
      {buttons.cart}
    </button>,
    <button
      className="neither-button second-buttons"
      onClick={neitherButtonHandler}
      disabled={isNeitherDisabled}
      type="button"
    >
      {buttons.neither}
    </button>,
    <button
      className={`${quitClasses.B} second-buttons`}
      onClick={quitButtonHandler}
      disabled={isQuitDisabled}
      type="button"
    >
      {buttons.quit}
    </button>,
  ];

  return (
    <div>
      <div className="second-buttons-container">
        {secondButtonsDrive.map((secondbuttonsdrive, key) => {
          return <div key={key}>{secondbuttonsdrive}</div>;
        })}
      </div>
      <div className="second-story-container story-containers">
        {storyBasket}
        {storyCart}
        {storyNeither}
        {storyQuit}
      </div>
    </div>
  );
}
