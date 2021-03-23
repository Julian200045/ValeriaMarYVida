import React, {useState} from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'


const Sliders=({slides}) =>{
   const [current, setCurrent] = useState(0);
   const length = slides.length;

    const nextSlide= ()=>{
        setCurrent(current===length-1?0:current+1)
    }
    const prevSlide=()=>{
        setCurrent(current===0?length-1:current-1)
    }

   if(!Array.isArray(slides)||slides.length<=0){
       return null;
   }



    return (
    <div className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {slides.map((slide,index)=>{
            return(
                <div className={index===current ? 'slide active' : 'slide'} key={index}>
                    {index===current && <img src={slide.image} className="image"/>}
                </div>
                
            )
        })}
    </div>
    )
}

export default Sliders

export const SliderMarina=[
    {
        image: 'multimedia/slider/marina1.jfif'
    },
    {
        image: 'multimedia/slider/marina2.jfif'
    },
    {
        image: 'multimedia/slider/marina3.jfif'
    },
    {
        image: 'multimedia/slider/marina4.jfif'
    },
    {
        image: 'multimedia/slider/marina5.jfif'
    },
    {
        image: 'multimedia/slider/marina6.jfif'
    }
]

export const SliderSoleada=[
    {
        image: 'multimedia/slider/soleada1.jfif'
    },
    {
        image: 'multimedia/slider/soleada2.jfif'
    },
    {
        image: 'multimedia/slider/soleada3.jfif'
    },
    {
        image: 'multimedia/slider/soleada4.jfif'
    }
]

export const SliderMimosa=[
    {
        image: 'multimedia/slider/mimosa1.jfif'
    },
    {
        image: 'multimedia/slider/mimosa2.jfif'
    },
    {
        image: 'multimedia/slider/mimosa3.jfif'
    },
    {
        image: 'multimedia/slider/mimosa4.jfif'
    }
]


