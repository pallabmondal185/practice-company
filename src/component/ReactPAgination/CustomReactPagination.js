
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

// import './paginate.css'

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

const CustomReactPagination = (props) => {
    const {
        noOfItemsPerPage = 5,
        items = [],
        setPaginatedItems
    } = props;

    const [pageOffset, setPageOffset] = useState(0);
    const pageCount = Math.ceil(items.length / noOfItemsPerPage);

    // console.log("pageOffsetdd", initialIndex, lastIndex, items);

    const handlePageChange = (e) => {
        // console.log("etrr", e);
        const currPage = e.selected
        setPageOffset(currPage);

        const initialIndex = currPage * noOfItemsPerPage;
        const lastIndex = currPage * noOfItemsPerPage + noOfItemsPerPage;
        const parPageItem = items?.slice(initialIndex, lastIndex);
        setPaginatedItems(parPageItem);
    }

    return (
        <div>
            {/* <div>
                {
                    items?.slice(initialIndex, lastIndex)?.map((it, i) =>
                        <p key={i}>num {it}</p>
                    )
                }
            </div> */}

            <div className='d-flex justify-content-center'>
                <ReactPaginate
                    previousLabel="Previous"
                    nextLabel="Next"
                    breakLabel="..."

                    // to change the design you can change this class names
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active"

                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    forcePage={pageOffset}

                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}

export default CustomReactPagination
