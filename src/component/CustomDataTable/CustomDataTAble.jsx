import React from 'react'

const CustomDataTAble = () => {
    const columns = [
        {
            name: "SL",
            title: "sl"
        },
        {
            name: "Name",
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

    const rows = [
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
        }
    ]

    return (
        <div className='container mt-5'>

            <div className="form-group d-flex justify-content-end">
                <input
                    type="email"
                    className="form-control w-25"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                />
            </div>

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
        </div>
    )
}

export default CustomDataTAble
