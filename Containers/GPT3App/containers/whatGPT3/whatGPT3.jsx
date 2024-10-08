import "./whatGPT3.styles.scss";
import { Feature } from "../../components/componentExports";
import { Gpt3DataA, Gpt3DataB } from "../../helperfiles/data";

function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-container_featureA">
        {Gpt3DataA.map((dataA, index) => {
          return (
            <div key={index} className="dataA-containers">
              <Feature title={dataA.title} text={dataA.text} />
            </div>
          );
        })}
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination!!
        </h1>
        <p>
          <a href="#blog">Explore the Blogs</a>
        </p>
      </div>

      <div className="gpt3__whatgpt3-container_featureB">
        {Gpt3DataB.map((dataB, index) => {
          return (
            <div key={index} className="dataB-containers">
              <Feature title={dataB.title} text={dataB.text} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WhatGPT3;
