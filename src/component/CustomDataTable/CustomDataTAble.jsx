import React from 'react'

const CustomDataTAble = () => {
    const columns = [
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

    const data = [
        {
            title: "name",
            value: "pallab"
        },
        {
            title: "email",
            value: "pallab@gmail.com"
        },
        {
            title: "age",
            value: "26"
        },
    ]

    return (
        <div className='container'>
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
                    {columns.map((col, i) =>
                        <tr>
                            {
                                data.map((row, i) =>
                                    <th scope="row" key={i}>{row.value}</th>
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
