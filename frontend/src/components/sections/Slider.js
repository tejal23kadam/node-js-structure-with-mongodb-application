import { imageUrl1, imageUrl2, imageUrl3 } from './SliderImagesArray';
import Marquee from "react-fast-marquee";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
//import './Slider.css'; // optional for custom styles

function Slider() {
    const [searchText, setSearchText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    //const [allProducts, setAllProducts] = useState([]);
    const navigate = useNavigate();
    const allProducts = useSelector((state) => state.allData.data);

    
    const handleChange = (e) => {
        const value = e.target.value;
        setSearchText(value);

        if (value.trim() === '') {
            setSuggestions([]);
            return;
        }

        const matches = allProducts.filter(product =>
            product.title.toLowerCase().includes(value.toLowerCase())
        );
        console.log("matches " + matches)

        setSuggestions(matches.slice(0, 8)); // limit to 5 suggestions
        setShowSuggestions(true);
    };

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
                        <form className="position-relative w-100" onSubmit={(e) => {
                            e.preventDefault();
                            if (searchText.trim()) {
                                navigate("/searchProduct", { state: { title: searchText } })
                                setShowSuggestions(false);
                            }
                        }}>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search products..."
                                value={searchText}
                                onChange={handleChange}
                                onFocus={() => searchText && setShowSuggestions(true)}
                                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                            />

                            {showSuggestions && suggestions.length > 0 && (
                                <ul className="list-group position-absolute w-100 z-3">
                                    {suggestions.map(item => (
                                        <li
                                            key={item._id}
                                            className="list-group-item list-group-item-action"
                                            onClick={() => {
                                                navigate("/searchProduct", { state: { title: item } })
                                                setShowSuggestions(false);
                                                setSearchText('');
                                            }}
                                        >
                                            {item.title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </form>

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
