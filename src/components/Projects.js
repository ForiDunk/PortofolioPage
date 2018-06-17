import React from 'react';

const Projects = () => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">My projects:</div>
      <div className="show-for-desktop">My projects:</div>
    </div>
    <div className="list-body">
      <a className="list-item" href="https://safe-island-56168.herokuapp.com/" target="_blank">
        <div>
          <h3 className="list-item__title">YelpCamp</h3>
        </div>
        <span className="list-item__sub-title">Share campsites you've visited or check out and comment on other's campsites.</span>
      </a>
      <a className="list-item" href="https://fori-indecision.herokuapp.com/" target="_blank">
        <div>
          <h3 className="list-item__title">Fori-Indecision</h3>
        </div>
        <span className="list-item__sub-title">Put your life in the hands of a computer, let him decide for you what to do.</span>
      </a>
      <a className="list-item" href="https://fori-weather.herokuapp.com/" target="_blank">
        <div>
          <h3 className="list-item__title">Fori-Weather</h3>
        </div>
        <span className="list-item__sub-title">Find out the weather conditions all around the world (not optimizes for mobile yet...)</span>
      </a>
      <a className="list-item" href="https://fori-expensify.herokuapp.com/" target="_blank">
        <div>
          <h3 className="list-item__title">Fori-Expensify</h3>
        </div>
        <span className="list-item__sub-title">It's time to get your expenses under control! Monitor your expenses with Fori-Expensify.</span>
      </a>
      <a className="list-item" href="https://forigame.stackblitz.io/" target="_blank">
        <div>
          <h3 className="list-item__title">Forigame</h3>
        </div>
        <span className="list-item__sub-title">Simple Rock-Paper-Scissors game, created in about 2-3 hours online to battle boredome.</span>
      </a>
    </div>
  </div>
);

export default Projects;