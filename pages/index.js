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
          <header>
            <h1>Hi - WAIST</h1>
          </header>
          <img
            src="https://cdn.accentuate.io/8488635591/11611289059400/10-hi-waist-grapefruit-v1596554281555.png?700x1000"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="https://cdn.accentuate.io/8488635591/11611289059400/10-hi-waist-grapefruit-v1596554281555.png?700x1000"
            alt=""
          />
        </div>
        <div className="item">
          <img
            src="https://cdn.accentuate.io/8488635591/11611289059400/10-hi-waist-grapefruit-v1596554281555.png?700x1000"
            alt=""
          />
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
