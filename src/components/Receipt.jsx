import React from 'react';

function Receipt(props) {
  return (
    <div className='ticket'>
      <h1>Name: {props.ticketInfo.person}</h1>
      <h1>Order: {props.ticketInfo.order.main}</h1>
      <ul>
        {props.ticketInfo.order.toppings.map((topng, i) => {
          return <li key={i}>{topng}</li>;
        })}
      </ul>
    </div>
  );
}

export default Receipt;
