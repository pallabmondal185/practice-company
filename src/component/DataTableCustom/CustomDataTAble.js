import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

const CustomDataTAble = (props) => {
    const {
        noOfItemsPerPage = 10,
        columns = [],
        rows = [],
        isSearchDefault = true,
        searchWithApi = false,
        handleApiAearch
    } = props;


    const initRows = rows;
    const initRowsData = initRows?.slice(0, noOfItemsPerPage);
    const [rowsData, setRowsData] = useState([]);

    // console.log("rowspage", rowsData)

    useEffect(() => {
        setRowsData(initRowsData)
    }, [initRows])

    // search start
    const handleSearch = (e) => {
        const value = e.target.value;
        const filteredData = initRows.filter(item => {
            // console.log("filteredData", item)
            const findData = Object.values(item).find((ele) => String(ele).includes(value))
            if (findData) return true
            else return false
        })
        setRowsData(filteredData?.slice(0, noOfItemsPerPage));
    }
    // search end

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
        setRowsData(parPageItem);
    }
    // pagination end

    return (
        <div className='container mt-5'>

            {/* search input */}
            <div className="form-group d-flex justify-content-end">
                {searchWithApi &&
                    // api search
                    <input
                        type="text"
                        className="form-control w-25"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Type to Search"
                        onChange={handleApiAearch}
                    />
                }

                {isSearchDefault &&
                    // default search
                    <input
                        type="text"
                        className="form-control w-25"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Search"
                        onChange={handleSearch}
                    />
                }
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
                    {rowsData.map((row, i) =>
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
            {
                rowsData?.length === 0 &&
                <div className='d-flex justify-content-center m-2'>
                    No Data Found
                </div>
            }

            {/* pagination section */}
            {
                rowsData?.length !== 0 &&
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
            }
        </div>
    )
}

export default CustomDataTAble
