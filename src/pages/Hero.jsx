import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import hero4 from '../assets/hero-4.jpg'
import { useState } from 'react'
import { heroText } from '../data'

const heroImages = [hero4, hero1, hero2, hero3]

const Hero = () => {
  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => setShowMore(!showMore)

  return (
    <div className="grid lg:grid-cols-2 align-element gap-24 items-center py-14">
      {/* info */}
      <div>
        <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-4xl text-primary text-center'>We will help you to start your business in Dubai</h1>
        <p className='mt-8 max-w-xl text-lg leading-8'>
          {showMore ? heroText : heroText.slice(0, 192)}
          <span onClick={handleShowMore} className='underline text-secondary cursor-pointer'>{showMore ? ' show less' : ' show more...'}</span>
        </p>
      </div>

      {/* crousel */}
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        <div className="carouse-item flex">
          {heroImages.map((image) => {
            return (
              <img src={image} className='rounded-box h-full w-80 object-cover' />
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Hero