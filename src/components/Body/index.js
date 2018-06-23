import React, { Fragment } from 'react';
import Introduction from "./Introduction";
import Slide from 'react-reveal/Slide';


export default () => (
  <Fragment>
    <Slide top>
      <Introduction />
    </Slide>
  </Fragment>
);