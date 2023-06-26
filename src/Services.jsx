import React from 'react'
import Card_1 from './Card_1'
import imgdata from './imgdata'

function Services() {
  return (
    <>
      <div className="container-fluid">
        <p className="h4 text-center">Services</p>
        <div className="row mt-5">
        {
          imgdata.map((val,ind)=>{
            return <Card_1 
            key={val.ind}
            img={val.imgsrc}
            ti={val.descrip}
            />
          })
        }
        </div>

      </div>
    </>
  )
}

export default Services
