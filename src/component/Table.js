import React from 'react'


export default function Table({tName,tType}) {
    return (
        <div className='table'>

            <div className="col">
                <div className="lable">

                    <p>{tName} *</p>
                    <input type={tType} className='form-control w-100 d-block' />
                   
                </div>
            </div>



        </div>

    )
}


