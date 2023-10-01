import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'

const CustomDataTAble = ({ noOfItemsPerPage = 3 }) => {
    const columns = [
        {
            name: "SL",
            title: "sl"
        },
        {
            name: <h3>Name</h3>,
            title: "name"
        },
        {
            name: "Email",
            title: "email"
        },
        {
            name: "Age",
            title: "age"
        },
    ]

    const initRows = [
        {
            name: "pallab",
            email: "pallab1@gmail.com",
            age: 27,
            sl: 1
        },
        {
            name: "pallab 2",
            email: "pallab2@gmail.com",
            age: 30,
            sl: 2
        },
        {
            name: "pallab 3",
            email: "pallab3@gmail.com",
            age: 42,
            sl: 3
        },
        {
            name: "pallab 4",
            email: "pallab3@gmail.com",
            age: 42,
            sl: 4
        },
        {
            name: "pallab 4",
            email: "pallab3@gmail.com",
            age: 42,
            sl: 4
        }
    ]

    const [rows, setRows] = useState(initRows?.slice(0, noOfItemsPerPage));

    // search start
    const handleSearch = (e) => {
        const value = e.target.value;
        console.log(Object.entries(initRows))
    }

    // pagination start
    const [pageOffset, setPageOffset] = useState(0);
    const pageCount = Math.ceil(initRows.length / noOfItemsPerPage);

    const handlePageChange = (e) => {
        // console.log("etrr", e);
        const currPage = e.selected
        setPageOffset(currPage);

        const initialIndex = currPage * noOfItemsPerPage;
        const lastIndex = currPage * noOfItemsPerPage + noOfItemsPerPage;
        const parPageItem = initRows?.slice(initialIndex, lastIndex);
        setRows(parPageItem);
    }
    // pagination end

    return (
        <div className='container mt-5'>

            {/* search input */}
            <div className="form-group d-flex justify-content-end">
                <input
                    type="email"
                    className="form-control w-25"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={handleSearch}
                />
            </div>

            {/* table section */}
            <table className="table">
                <thead>
                    <tr>
                        {columns.map((item, i) =>
                            <th scope="col" key={i}>{item?.name}</th>
                        )
                        }
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) =>
                        <tr key={i}>
                            {
                                columns.map((col, i) =>
                                    <th scope="row" key={i}>{row[col.title]}</th>
                                )
                            }
                        </tr>
                    )
                    }
                </tbody>
            </table>

            {/* pagination section */}
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

export default CustomDataTAble
