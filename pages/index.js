import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
              <form>
                <p>
                  <span>$35.00</span>
                </p>

                <ul id="menu">
                  <li>color</li>
                  <li>black</li>
                  <li>beige</li>
                </ul>
                <select name="sizes" id="sizes">
                  <option value="0">size</option>
                  <option value="xx-small">xx-small</option>
                  <option value="x-small">x-small</option>
                  <option value="small">small</option>
                  <option value="medium">medium</option>
                  <option value="large">large</option>
                  <option value="x-large">x-large</option>
                </select>
                <label for="sizes">
                  {' '}
                  <a href="#">what's my size</a>
                </label>
                <br />
                <br />
                <button>add to cart</button>
                <a href="#">build a cycle set and save up to 20%</a>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery-container">
        <div className="item">
          <img
            src="https://cdn.shopify.com/s/files/1/0795/1599/t/550/assets/product-image-hiphugger-pine-1_800x.progressive.jpg?v=12376506267943978321"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="https://cdn.shopify.com/s/files/1/0795/1599/t/550/assets/product-image-cheeky-dusk-1_800x.progressive.jpg?v=2855225748247821412"
            alt=""
          />
        </div>
        <div className="item--center">
          <img
            src="https://cdn.shopify.com/s/files/1/0795/1599/t/550/assets/product-image-thong-black-2_800x.progressive.jpg?v=2906008199094514758"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="https://cdn.shopify.com/s/files/1/0795/1599/t/550/assets/product-image-sport-beige-1_800x.progressive.jpg?v=15684164004110123735"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="https://cdn.shopify.com/s/files/1/0795/1599/t/550/assets/product-image-boyshort-navy-1_800x.progressive.jpg?v=1599479964802298078"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
