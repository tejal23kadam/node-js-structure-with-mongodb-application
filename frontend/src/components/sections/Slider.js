import { imageUrl1, imageUrl2, imageUrl3 } from './SliderImagesArray';
import Marquee from "react-fast-marquee";
//import './Slider.css'; // optional for custom styles

function Slider() {
    return (
        <section className='sliders-container mt-4'>
            {/* Header */}
            <div className="row g-2 align-items-center justify-content-center">
                <div className="col-12 text-center">
                    <h1>What are you looking for?</h1>
                </div>
            </div>

            {/* Search Bar */}
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-10 col-md-6 text-center">
                        <input
                            className="form-control my-2"
                            id="inputtext4"
                            placeholder="Find your perfect product...."
                            type="text"
                        />
                    </div>
                </div>
            </div>

            {/* Marquee Row 1 */}
            <div className="mt-4">
                <Marquee pauseOnHover={true}>
                    {imageUrl1.map((section, i) => (
                        <div
                            key={i}
                            className="image mx-2"
                            style={{ backgroundImage: `url('${section.url}')` }}
                        >
                            <div className="overlay" />
                        </div>
                    ))}
                </Marquee>
            </div>

            {/* Marquee Row 2 - only for large screens */}
            <div className="d-none d-lg-block mt-4">
                <Marquee direction="right" pauseOnHover={true} gradient={true}>
                    {imageUrl2.map((section, i) => (
                        <div
                            key={i}
                            className="image mx-2"
                            style={{ backgroundImage: `url('${section.url}')` }}
                        >
                            <div className="overlay" />
                        </div>
                    ))}
                </Marquee>
            </div>

            {/* Marquee Row 3 */}
            <div className="mt-4">
                <Marquee pauseOnHover={true}>
                    {imageUrl3.map((section, i) => (
                        <div
                            key={i}
                            className="image mx-2"
                            style={{ backgroundImage: `url('${section.url}')` }}
                        >
                            <div className="overlay" />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
}

export default Slider;
