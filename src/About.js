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
            <div className="widget-item">
              <a href=" " className="add">
                <img src="./img/add.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog section end */}
  {/* Intro section */}
  <section className="intro-video-section set-bg  align-items-end " data-setbg><img src="./img/promo-bg.jpg" alt="#"/>
    <a href="https://www.youtube.com/watch?v=uFsGy5x_fyQ" className="video-play-btn video-popup"><img src="img/icons/solid-right-arrow.png" alt="#" /></a>
    <div className="">
      {/* <div className="d0">
        <h2 >Promo video of the game</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
      </div> */}
    </div>
  </section>
  {/* Intro section end */}
  {/* Featured section */}
  <section className="featured-section">
    <div className="featured-bg set-bg" data-setbg /><img src="img/featured-bg.jpg" className="featured-bg set-bg"  alt="#"/>
    <div className="featured-box">
      <div className="text-box">
        <div className="top-meta">22.12.2022  /  in <a href>Games</a></div>
        <h3>The game you’ve been waiting  for is out now</h3>
        <p>There’s a marked difference between a gaming addiction causing aggression or depression, and an already depressed or troubled person turning to games as a form of escapism.

The research tells us gaming has no harmful impacts on healthy young people who don’t have existing mental health problems.

However, negative forces in life may drive some people towards gaming as a way to cope. Specifically, people who already feel a sense of self blame, loss of control in life or social disengagement are more likely to turn to gaming as a coping mechanism – not unlike how some may turn to drugs, alcohol or gambling.</p>
   
      </div>
    </div>
  </section>


  </div>
  
  )
}

export default About