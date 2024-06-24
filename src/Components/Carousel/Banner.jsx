import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { banner_images } from './Banner_Images'
import './Style.css'
const Banner = () => {


    const items = banner_images.map((item,index) => <img className="img  " role='presentation' onClick={() => navigate} src={item.img} alt="banner"  key={index}/>)
   
    return (
        <div className='banner_section w-full h-full bg-white p-1  cursor-pointer '>
            <Carousel autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={false}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        background: "#fff",
                        color: "#333",
                        marginTop: -25,
                        height: "100px",
                        borderRadius: "3px",
                        width: "50px",
                        fontSize: "80px",
                        marginLeft: "-10px",
                        marginRight: "-10px"
                    }
                }}>
           {items}
            </Carousel>
        </div>
    )
}

export default Banner