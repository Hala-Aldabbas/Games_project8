import React from 'react'
import './Landing.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function About() {
  return (
   
  <div >
  
    
    {/* Blog section */}
  <section className="blog-section spad">
    <div className="container">
      <div className="row">
        <div className="col-xl-9 col-lg-8 col-md-7">
          <div className="section-title text-white">
            <h2>Latest News</h2>
          </div>
      
          {/* Blog item */}
          <div className="blog-item">
            <div className="blog-thumb">
              <img src="./img/blog/1.jpg" alt="" />
            </div>
            <div className="blog-text text-box text-white">
              <div className="top-meta">22.12.2022  /  in <a href>Games</a></div>
              <h3>The best online game is out now!</h3>
              <p>Video games are increasingly incorporating blockchains, the decentralised databases that underpin cryptocurrencies, as well as NFTs and other “digital assets”. New games are emerging expressly to support blockchain technology, while traditional games are being updated to incorporate blockchains.</p>
              {/* <a href="#" className="read-more">Read More  <img src="img/icons/double-arrow.png" alt="#" /></a> */}
            </div>
          </div>
          {/* Blog item */}
          <div className="blog-item">
            <div className="blog-thumb">
              <img src="./img/blog/2.jpg" alt="" />
            </div>
            <div className="blog-text text-box text-white">
              <div className="top-meta">22.12.2022  /  in <a href>Games</a></div>
              <h3>The best online game is out now!</h3>
              <p>You’ve likely heard recently how the metaverse will usher in a new era of digital connectivity, virtual reality (VR) experiences and e-commerce. Tech companies are betting big on it: Microsoft’s massive US$68.7 billion acquisition of game developing giant Activision Blizzard reflected the company’s desire to bolster its position in the interactive entertainment space.</p>
              {/* <a href="#" className="read-more">Read More  <img src="img/icons/double-arrow.png" alt="#" /></a> */}
            </div>
          </div>
          {/* Blog item */}
          <div className="blog-item">
            <div className="blog-thumb">
              <img src="./img/blog/3.jpg" alt="" />
            </div>
            <div className="blog-text text-box text-white">
              <div className="top-meta">22.12.2022  /  in <a href>Games</a></div>
              <h3>The best online game is out now!</h3>
              <p>The coroner found Oliver had a “gaming disorder” as defined by the World Health Organisation, although he was not diagnosed as such during his life. The WHO’s classification of a gaming disorder is based on a person’s attitude towards gaming, rather than time spent gaming. Simply, gaming becomes a disorder when it starts to interfere with a person’s healthy daily functioning.</p>
              {/* <a href="#" className="read-more">Read More  <img src="img/icons/double-arrow.png" alt="#" /></a> */}
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-5 sidebar">
          <div id="stickySidebar">
            <div className="widget-item">
              <h4 className="widget-title">Trending</h4>
              <div className="trending-widget">
                <div className="tw-item">
                  <div className="tw-thumb">
                    <img src="./img/blog-widget/1.jpg" alt="#" />
                  </div>
                  <div className="tw-text">
                    <div className="tw-meta">22.12.2022  /  in <a href>Games</a></div>
                    <h5  className="hom5">The best online game is out now!</h5>
                  </div>
                </div>
                <div className="tw-item">
                  <div className="tw-thumb">
                    <img src="./img/blog-widget/2.jpg" alt="#" />
                  </div>
                  <div className="tw-text">
                    <div className="tw-meta">22.12.2022  /  in <a href>Games</a></div>
                    <h5>The best online game is out now!</h5>
                  </div>
                </div>
                <div className="tw-item">
                  <div className="tw-thumb">
                    <img src="./img/blog-widget/3.jpg" alt="#" />
                  </div>
                  <div className="tw-text">
                    <div className="tw-meta">22.12.2022  /  in <a href>Games</a></div>
                    <h5>The best online game is out now!</h5>
                  </div>
                </div>
                <div className="tw-item">
                  <div className="tw-thumb">
                    <img src="./img/blog-widget/4.jpg" alt="#" />
                  </div>
                  <div className="tw-text">
                    <div className="tw-meta">22.12.2022  /  in <a href>Games</a></div>
                    <h5>The best online game is out now!</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget-item">
              <div className="categories-widget">
                <h4 className="widget-title">categories</h4>
                <ul>
                  <li><a href="/HomePage ">Games</a></li>
                  <li><a href="/genres">Gaming Types</a></li>
                  <li><a href="/platforms">Where to play Games</a></li>
                  <li><a href="/publishers ">Game Publishers</a></li>
                
                </ul>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog section end */}
 
  


  </div>
  
  )
}

export default About