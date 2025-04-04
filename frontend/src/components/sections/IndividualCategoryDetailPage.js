import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../paginationComponent/Pagination';
import SingleProductDetailPage from '../singleProductDetailComponent/SingleProductDetailPage';
import { addToCart } from '../sliceComponent/CartSlice';

function IndividualCategoryDetailPage(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(1);
  const postsPerPage = 8;

  const data = useSelector((state) => state.allData.data.products);
  let filterBrands = props.brandFilter;
  let filteredData;

  let filterDiscount = props.discountFilter
  const loading = useSelector((state) => state.allData.loading);
  const error = useSelector((state) => state.allData.error);

  const dispatch = useDispatch();

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (id) => {
    setOpen(true);
    setCurrentProductId(id);
  };

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data || data.length === 0) return <h1>No data available</h1>;

  if (props.category === '' || props.category === 'all') {
    filteredData = data;
  }
  else {
    filteredData = data.filter(data => data.category === props.category);
  }
  
  console.log("filterb " + filterBrands);
  if (filterBrands) {
    filteredData = filteredData.filter((data) => data.brand.toLowerCase().includes(filterBrands));
    console.log("filter brand data" + JSON.stringify(filteredData));
  }

  if (filterDiscount) {
    filteredData = filteredData.filter((data) => data.discount === filterDiscount);
    console.log("filter discount data" + JSON.stringify(filteredData));
  }

  return (
    <>
      <div className='container'>
        <div className='pro-container'>
          {(filteredData) ?
            (
              (filteredData.slice(indexOfFirstPost, indexOfLastPost).map((data) => (
                <div className="pro" key={data.id} >
                  <div class="des" >
                    <img src={data.image} alt="noImage" onClick={() => handleOpen(data.id)} />
                    <h5 className="overme">{data.title} </h5>
                    <div>
                      {
                        (data.discount) ? (
                          <div style={{ display: "flex" }}>
                            <h5><s>{data.price}</s> </h5>
                            <h4>${Math.trunc(data.price - ((data.price * data.discount) / 100))}</h4>
                            <div style={{ display: "flex", paddingTop: "6px" }}>
                              <p class="discount">{data.discount}%</p>
                              <p>off no</p>
                            </div>
                          </div>
                        ) :
                          (
                            <h4>${data.price}</h4>
                          )
                      }
                    </div>
                  </div>
                  <i onClick={() => { dispatch(addToCart(data)) }} className="fal bi bi-cart cart" ></i>
                </div>
              )))
            ) :
            (<h1>data is missing</h1>)
          }
        </div>   
        
             
        <SingleProductDetailPage isOpen={open} onClose={handleClose} productId={currentProductId} ></SingleProductDetailPage>
        <Pagination
          length={filteredData.length}
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          handlePagination={handlePagination}
        />
      </div >
    </>   
  )
}
export default IndividualCategoryDetailPage