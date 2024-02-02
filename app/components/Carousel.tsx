"use client"

import Image from 'next/image'
import { useState } from 'react'

interface CarouselProps {
    images: string[];
}

export default function Carousel({ images }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToPrevious = () => {
        // is first image ? go to last
        const isFirstImage = currentIndex === 0
        const newIndex = isFirstImage ? images.length -1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const goToNext = () => {
        // is last image ? go to first
        const isLastImage = currentIndex === images.length - 1
        const newIndex = isLastImage ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <div className="h-full relative">
            <div className="bg-black/25 aspect-square px-1 rounded-full absolute top-1/2 left-[10px] text-white z-10 cursor-pointer" onClick={goToPrevious}>&larr;</div>
            <Image 
                className="w-full aspect-video object-cover"
                width={0}
                height={0}
                sizes="100vw"
                priority={true}
                src={images[currentIndex]}
                alt={`Image of property`}
                quality={100}
            />
            <div className="bg-black/25 aspect-square px-1 rounded-full absolute top-1/2 right-[10px] text-white z-10 cursor-pointer" onClick={goToNext}>&rarr;</div>
        </div>
    )
}