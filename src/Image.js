import React from 'react'
import product from './product'
const Image = ({image}) => {
    const imageStyle = {
        width: '300px',
        height: 'auto',
    };
return (
    <div><img src={product.image} alt='not found' style={imageStyle}/>
        </div>
)
}

export default Image

