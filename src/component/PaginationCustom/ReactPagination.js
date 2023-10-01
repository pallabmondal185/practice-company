import React, { useState } from 'react'
import CustomReactPagination from './CustomReactPagination'

const ReactPagination = () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    const noOfItemsPerPage = 6;

    const [paginatedItems, setPaginatedItems] = useState(items?.slice(0, noOfItemsPerPage));

    return (
        <div>
            <div>
                {
                    paginatedItems?.map((it, i) =>
                        <p key={i}>num {it}</p>
                    )
                }
            </div>

            <CustomReactPagination
                noOfItemsPerPage={noOfItemsPerPage}
                items={items}  //it is the main data
                setPaginatedItems={setPaginatedItems}
            />
        </div>
    )
}

export default ReactPagination;
