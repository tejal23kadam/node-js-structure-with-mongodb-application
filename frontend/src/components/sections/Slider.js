import { imageUrl1, imageUrl2, imageUrl3 } from './SliderImagesArray';

import Marquee from "react-fast-marquee";
function Slider() {
    return (
        <section className='sliders-container'>
            <div className='col-xl-12 text-center pt-5 pb-4'>
                <h1>What are you looking for?</h1>
            </div>
            <div>
                <div class="container">
                    <div class="row">
                        <div>
                            <div class="col-xl-12 col-md-8 advance-search pb-5 ">
                                <input class="form-control my-2 my-lg-0" id="inputtext4" placeholder="Find your perfect product...." type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Marquee pauseOnHover="true" >
                    {imageUrl1.map((section, i) => (
                        <div class="image" style={{ "background-image": `url('${section.url}')` }}>
                            <div class="overlay">
                            </div>
                        </div>

                    ))}

                </Marquee>
            </div>
            <div className='d-none d-lg-block'>
                <Marquee direction='right' pauseOnHover="true" gradient="true" className=''>
                    {
                        imageUrl2.map((section, i) => (
                            <div class="image" style={{ "background-image": `url('${section.url}')` }}>
                                <div class="overlay">
                                </div>
                            </div>

                        ))

                    }
                </Marquee>
            </div>
            <div>
                <Marquee pauseOnHover="true" >
                    {
                        imageUrl3.map((section, i) => (
                            <div class="image" style={{ "background-image": `url('${section.url}')` }}>
                                <div class="overlay">
                                </div>
                            </div>

                        ))

                    }
                </Marquee>
            </div>
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