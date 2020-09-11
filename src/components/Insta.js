import React from 'react'
import Image from 'react-bootstrap/Image';

const Insta = (props) => {
  const { caption, media_url, permalink } = props;
// media_type, id, timestamp, username
  return (
    <div>
      {/* <div className="card">
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={website} className="btn btn-primary">Go website</a>
        </div>
      </div> */}
      
            <a href={permalink}>
            <Image className="mx-3 mt-2 mb-2" src={media_url} 
            rounded style={{height:"220px", width: "200px" }}
            title={caption}
            />
            </a>
            {/* <Image className="mx-3" src={italiana} roundedCircle style={{height:"320px", width: "250px" }}/>
            <Image className="mx-3" src={italiana} thumbnail style={{height:"320px", width: "220px" }}/>
            <Image className="mx-3" src={italiana} thumbnail style={{height:"320px", width: "220px" }}/>
        */}
    </div>


  )
}

export default Insta
