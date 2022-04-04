import React from 'react';
import './random-quote.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getQuote } from '../../Redux/Slice/randomQuoteSlice.js';
import { useState } from 'react';
import { BsTwitter } from 'react-icons/bs';
import { ImTumblr } from 'react-icons/im';

RandomQuote.propTypes = {};

function RandomQuote(props) {
  const dispatch = useDispatch();

  const { qoutes, loading, status } = useSelector((state) => state.quote);

  const [quoteItem, setQuoteItem] = useState();
  const [color, setColor] = useState();
  let colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];
  useEffect(() => {
    dispatch(getQuote());
  }, []);
  useEffect(() => {
    item();
    if (status === 'success') {
      setQuoteItem(qoutes[0]);
      setColor(colors[0]);
    }
  }, [status]);

  const item = () => {
    let item = qoutes[Math.floor(Math.random() * qoutes.length)];
    let colorItem = colors[Math.floor(Math.random() * colors.length)]
    console.log(item);
    setQuoteItem(item);
    setColor(colorItem);
    return item;
  };
  return (
    <div className="container" style={{backgroundColor: `${color}`}}>
      <div className="random-quote">
        <div className="content">
          <h2 style={{color: `${color}`}}>{quoteItem ? quoteItem.quote : ''}</h2>
          <h3 style={{ textAlign: 'right' },{color: `${color}`}}>
            {' '}
            - {quoteItem ? quoteItem.author : ''}
          </h3>
        </div>
        <div className="random-button">
          <div className="icon-button">
            <button style={{backgroundColor: `${color}`}}> 
              <BsTwitter style={{color: 'white'}}></BsTwitter>
            </button>
            <button style={{backgroundColor: `${color}`}}>
              <ImTumblr style={{color: 'white'}}></ImTumblr>
            </button>
          </div>
          <input style={{color: 'white'},{backgroundColor: `${color}`}} type="button" value="New Quote" onClick={item} />
        </div>
      </div>
    </div>
  );
}

export default RandomQuote;
