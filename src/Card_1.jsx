import React from 'react'
// import Services from './Services'
function Card_1(props) {
    return (
        <>
            <div className="col-10 col-md-4 gy-5">
                <div className="card">
                    <img src={props.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">{props.ti}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card_1
