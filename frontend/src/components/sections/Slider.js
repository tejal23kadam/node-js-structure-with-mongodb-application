import React from 'react'
import image1 from '../../../src/images/asus.jpg'
import mainImage from '../../../src/images/hero1.jpg'
import mainImage1 from '../../../src/images/cta-background.jpg'
import mainImage2 from '../../../src/images/image2.jpg'
import ImageSlider from './ImageSlider'
import Marquee from "react-fast-marquee";
function Slider() {
    const images = [
        {
            id: "slider1",
            images: [
                mainImage,
                mainImage1,
                mainImage2
            ],
            direction: "left"
        },
        {
            id: "slider2",
            images: [
                mainImage,
                mainImage2,
                mainImage1
            ],
            direction: "right"
        },
        {
            id: "slider2",
            images: [
                mainImage1,
                mainImage,
                mainImage2
            ],
            direction: "left"
        }

        // Add more image URLs here
    ];
    return (
        <section className='sliders-container'>
            <Marquee>
                <h1>fsdffd</h1>
               <img src={image1} alt="no image" style={{width:"100px",height:"100px", backgroundColor:"red"}}/>
               <img src={mainImage1} alt="no image" style={{width:"100px",height:"100px", backgroundColor:"red"}}/>
               <img src={mainImage2} alt="no image" style={{width:"100px",height:"100px", backgroundColor:"red"}}/>
               <img src={mainImage} alt="no image" style={{width:"100px",height:"100px", backgroundColor:"red"}}/>
            </Marquee>
              <Marquee direction='left'>
                 {
                    images.map((image) => (
                        <image key={image.id} id={image.id} images={image.images} style={{height:"50px", width:"20%"}}/>
                    ))
                }
            </Marquee>
            {/* <div>
                <ImageSlider images={images} />
            </div> */}

            {/* <div class="row d-flex align-items-center justify-content-between">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-none d-md-block">
                        <div class="hero__img" data-animation="bounceIn" data-delay=".4s" >
                            <img src={mainImage} alt="" />
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-5 col-md-5 col-sm-8">
                        <div class="hero__caption">
                            <span data-animation="fadeInRight" data-delay=".4s" class="" >60% Discount</span>
                            <h1 data-animation="fadeInRight" data-delay=".6s" class="" >Winter Collection</h1>
                            <p data-animation="fadeInRight" data-delay=".8s" class="" >Best Cloth Collection By 2020!</p>

                            <div class="hero__btn" data-animation="fadeInRight" data-delay="1s">
                                <a href="industries.html" class="btn hero-btn">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
                             */}
        </section>
    )
}

export default Slider