
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

import './paginate.css'

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <div>
                        <h3>Item #{item}</h3>
                    </div>
                ))}
        </>
    );
}

const ReactPagination = ({ itemsPerPage = 5 }) => {
    const [pageOffset, setPageOffset] = useState(0);
    console.log("pageOffsetdd", pageOffset)
    // const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading_items_from ${itemOffset} to ${endOffset}`);
    // const currentItems = items.slice(itemOffset, endOffset);



    const pageCount = Math.ceil(items.length / itemsPerPage);


    const handlePageChange = (e) => {
        // console.log("etrr", e);
        setPageOffset(e.selected)
    }

    return (
        <div>
            {/* <Items currentItems={currentItems} /> */}
            {/* <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}

                className="paginate-continer"
                pageClassName="paginate-li"
            /> */}

            <div>
                {
                    items?.map((it, i) =>
                        <p key={i}>num {it}</p>
                    )
                }
            </div>

            <div className='d-flex justify-content-center'>
                <ReactPaginate
                    previousLabel="Previous"
                    nextLabel="Next"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName="pagination"
                    activeClassName="active"
                    forcePage={pageOffset}
                />
            </div>
        </div>
    )
}

export default ReactPagination
