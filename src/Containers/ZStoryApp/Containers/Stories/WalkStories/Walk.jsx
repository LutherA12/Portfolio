import { React } from "react";
import { SecondButtonsWalk } from "../../../helpers/AllFileExports";
import "../Stories.Styles.scss";

export default function Walk() {
  return (
    <div className="walk story-containers">
      You figure walking is best for today, there isn't a cloud in the sky!!
      Besides you would like to get some exercise in for today. You get about
      halfway to the store and start to notice there aren't any cars on the
      road. This strikes you as odd because it 2:00pm on Saturday and traffic is
      usually a lot heaver right now. You also notice that a lot of the traffic
      lights seem to be malfunctioning, some blinking yellow, others blinking
      red and because you're walking; you start to notice that while there are
      some cars parked outside of the various houses you are passing, you
      haven't seen another person yet besides your neighbor! That includes kids,
      you haven't seen any kids playing outside even though it's a beautiful
      day! You can't shake a very eerie and peculiar feeling about all of this
      as you finally arrive into the store parking lot to look for a shopping
      cart...
      <SecondButtonsWalk />
    </div>
  );
}
