import React from 'react';

function Parent(props) {
  return (
    <div>
      <h1>This is a Parent component</h1>
      <h1>The title of the movie is {props.movie}</h1>
      <h1>I ate {props.food} yesterdy evening</h1>
      <h1>Today is {props.today}</h1>
    </div>
  );
}

export default Parent;
