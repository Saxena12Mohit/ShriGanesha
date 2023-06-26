import React from 'react'
import imgg1 from '../src/Images/imgg1.jpg'
import Home from './Home';
import About from './About';

function Common(props) {
  return (
   <>
   <section className="d-flex justify-content-center ">
      <div className="container overflow-hidden text-right mt=5">
        <div className="row gx-5 row align-items-center ">
          <div className="col-sm-12 col-xxl-6  coll_one">
            <div className="p-3 ">
              <h1>{props.statement1}<strong>{props.statement2}</strong></h1>
              <h2>{props.statement3}</h2>
              <button type="button" className="btn btn-outline-success mt-4">Success</button>
            </div>
          </div>
          <div className="col-sm-12 col-xxl-6 coll_two">
            <div className="p-3 "><img src={imgg1} className="img-fluid img-thumbnail imgg1" alt="..."/></div>
          </div>
        </div>
      </div>
    </section>
   </>
  )
}

export default Common
