import React, { useEffect, useMemo, useState } from 'react'
import CustomDataTAble from './CustomDataTAble'

const DataTable = () => {
    const columns = [
        {
            name: "SL",
            title: "sl"
        },
        {
            name: <span>Name</span>,
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
        {
            name: "city",
            title: "city"
        },
        {
            name: "Action",
            title: "action"
        }
    ]

    const rows = [
        {
            name: "pallab",
            email: "pallab1@gmail.com",
            age: 27,
            sl: 1,
            city: "kolkata",
            action: <div><button>Del</button></div>,
        },
        {
            name: "pallab 2",
            email: "pallab2@gmail.com",
            age: 30,
            sl: 2,
            city: "london",
            action: <div><button>Del</button></div>
        },
        {
            name: "pallab 3",
            email: "pallab3@gmail.com",
            age: 42,
            sl: 3,
            city: "manipur",
            action: <div><button>Del</button></div>
        },
        {
            name: "pallab 4",
            email: "pallab3@gmail.com",
            age: 42,
            sl: 4,
            city: "chennai",
            action: <div><button>Del</button></div>
        },
        {
            name: "pallab 4",
            email: "pallab3@gmail.com",
            age: 42,
            sl: 4,
            city: "delhi",
            action: <div><button>Del</button></div>
        }
    ]

    // for api
    const columns2 = [
        {
            name: "SL",
            title: "sl"
        },
        {
            name: "Name",
            title: "name"
        },
        {
            name: "Description",
            title: "desc"
        },
        {
            name: "Image",
            title: "image"
        },
    ]

    const [rows2, setRows2] = useState([]);
    const [catData, seacatData] = useState([]);

    console.log("rows2", rows2)
    const getCatData = async () => {
        const res = await fetch("http://127.0.0.1:5090/api/v1/get-category")
        const data = await res?.json()
        // console.log("resdd", data)
        if (data && data?.status) {
            seacatData(data?.data);

        }
    }

    const handleApiAearch = async (e) => {
        const value = e.target.value
        const res = await fetch(`http://127.0.0.1:5090/api/v1/search-category-name`, {
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify({
                name: value
            }),

            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const data = await res?.json();

        if (data && data?.status) {
            seacatData(data?.data);
        }
    }

    const catDataMemo = useMemo(() => {
        let arr = [];
        catData?.forEach((item, i) => {
            let obj = {
                sl: i + 1,
                name: item?.name,
                desc: item?.description,
                image: item?.image
            }
            arr?.push(obj)
        });
        return arr
    }, [catData])

    useEffect(() => {
        getCatData();
    }, [])

    return (
        <div>
            <CustomDataTAble
                noOfItemsPerPage={3}
                // columns={columns}
                // rows={rows}
                columns={columns2}
                rows={catDataMemo}

                isSearchDefault={false}
                searchWithApi={true}
                handleApiAearch={handleApiAearch}
            />
        </div>
    )
}

export default DataTable;
