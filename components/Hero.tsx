"use client"
import React from 'react'
import CustomButton from "./CustomButton"
import Image from 'next/image'
import hero from "../public/hero.png"

export default function Hero() {
    const handleScroll = () => {}
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero-title'>
                Find, book or rent a car --quickly and easily!
            </h1>

            <p className='hero__subtitle'>
                Streamline your car rental exprience with our effortless booking process.
            </p>

            <CustomButton
            title = "Explore Cars"
            containerStyle= "bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}/>
        </div>

        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src={hero} alt='hero' fill className='object-contain'/>
                </div>
                <div className='hero__image-overlay'/>
            
        </div>
    </div>
  )
}
