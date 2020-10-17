import Head from 'next/head';
import React, { useState } from 'react';

function MySelectComponent() {
  var [defaultSelectedText, setDefaultSelectedText] = useState('');
  var [showOptionList, setShowOptionList] = useState(false);
  var [optionList, setOptionList] = useState([]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, false);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, false);
    };
  }, [defaultSelectedText]);

  function handleClickOutside(e) {
    if (
      !e.target.classList.contains('custom-select-option') &&
      !e.target.classList.contains('selected-text')
    ) {
      setShowOptionList(false);
    }
  }

  // This method handles the display of option list
  function handleListDisplay() {
    setShowOptionList((showOptionList) => !showOptionList);
  }

  // This method handles the setting of name in select text area
  // and list display on selection
  handleOptionClick = (e) => {
    this.setState({
      defaultSelectText: e.target.getAttribute('data-name'),
      showOptionList: false,
    });
  };
}

function Cart() {
  var [quantity, setQuantity] = useState(0);
  var [activeId, setActiveId] = useState('black');
  var [colors, setColors] = useState(['black', 'beige']);

  function handleIncrement(e) {
    e.preventDefault();
    setQuantity((quantity) => quantity + 1);
  }

  function handleDecrement(e) {
    e.preventDefault();
    setQuantity((quantity) => quantity - 1);
  }

  function handleChange(e) {
    setQuantity(e.target.value);
  }

  function handleClick(e, id) {
    console.log('id ', id);
    setActiveId(id);
  }

  const displayCounter = quantity < 1;

  return (
    <form>
      <p>
        <span>$35.00</span>
      </p>

      <ul id="menu">
        <li>color</li>
        {colors.map((currentItem) => {
          return (
            <li
              key={currentItem}
              className={`${currentItem}-item`}
              onClick={(e) => handleClick(e, currentItem)}
            >
              {currentItem}{' '}
              {activeId === currentItem ? (
                <i className="fas fa-check"></i>
              ) : null}
            </li>
          );
        })}
      </ul>

      <div className="number">
        {
          <button
            className="minus"
            disabled={displayCounter}
            onClick={(e) => handleDecrement(e)}
          >
            -
          </button>
        }
        <input
          type="text"
          value={`quantity (${quantity})`}
          onChange={(e) => handleChange(e)}
        />
        <button className="plus" onClick={(e) => handleIncrement(e)}>
          +
        </button>
      </div>

      <select name="sizes" id="sizes">
        <option value="0">size</option>
        <option value="xx-small">xx-small</option>
        <option value="x-small">x-small</option>
        <option value="small">small</option>
        <option value="medium">medium</option>
        <option value="large">large</option>
        <option value="x-large">x-large</option>
      </select>
      <label htmlFor="sizes">
        {' '}
        <a href="#">what's my size</a>
      </label>
      <br />
      <br />
      <button>add to cart</button>
      <a href="#">build a cycle set and save up to 20%</a>
    </form>
  );
}

export default function Home() {
  var [products, setProducts] = useState([
    // {
    //   name: 'Hi-Waist',
    //   imgSrc:
    //     'https://cdn.accentuate.io/8488635591/11611289059400/10-hi-waist-grapefruit-v1596554281555.png?700x1000',
    //   strength: 'Heavy',
    // },
    {
      name: 'Hiphugger',
      imgSrc:
        'https://cdn.shopify.com/s/files/1/0795/1599/t/550/assets/product-image-hiphugger-pine-1_800x.progressive.jpg?v=12376506267943978321',
      strength: 'Heavy',
    },
    {
      name: 'Cheeky',
      imgSrc:
        'https://cdn.shopify.com/s/files/1/0795/1599/t/550/assets/product-image-cheeky-dusk-1_800x.progressive.jpg?v=2855225748247821412',
      strength: 'Light',
    },
    {
      name: 'Thong',
      imgSrc:
        'https://cdn.shopify.com/s/files/1/0795/1599/t/550/assets/product-image-thong-black-2_800x.progressive.jpg?v=2906008199094514758',
      strength: 'Lightest',
    },
    {
      name: 'Sport',
      imgSrc:
        'https://cdn.shopify.com/s/files/1/0795/1599/t/550/assets/product-image-sport-beige-1_800x.progressive.jpg?v=15684164004110123735',
      strength: 'Medium',
    },
    {
      name: 'Boyshort',
      imgSrc:
        'https://cdn.shopify.com/s/files/1/0795/1599/t/550/assets/product-image-boyshort-navy-1_800x.progressive.jpg?v=1599479964802298078',
      strength: 'Light',
    },
  ]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 'feature-container' handles the product description, current product selected and form for it */}
      <div className="feature-container">
        <div className="item">
          <div className="vertical-aligner-helper">
            <div className="product-copy">
              <p>
                <span>Hi - WAIST</span>
              </p>

              <p>
                Heavy days. Holds up to 2 tampon's worth.com
                <br />
                <br />
                The phrase "treat yo'self" reaches new belly-button brushing
                heights with the HiWaist, and it's here just in time for cuffung
                season.
              </p>
            </div>
          </div>
        </div>
        <div className="item item--order-modifier">
          <img
            src="https://cdn.accentuate.io/8488635591/11611289059400/10-hi-waist-grapefruit-v1596554281555.png?700x1000"
            alt=""
          />
        </div>
        <div className="item">
          <div className="vertical-aligner-helper">
            <div>
              <Cart />
            </div>
          </div>
        </div>
      </div>

      {/* 'gallery-container' handles the showcasing of the products */}
      <div className="gallery-container">
        {products.map((product, i, array) => {
          return (
            <div
              key={product.name}
              className={i === 3 ? 'item--center' : 'item'}
            >
              <div className="img-container">
                <img src={product.imgSrc} alt={product.name} />
                <a href="#">Shop {product.name}</a>
                <p>{product.strength} days</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
