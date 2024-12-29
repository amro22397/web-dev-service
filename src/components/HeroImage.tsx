import Image from 'next/image'
import React from 'react'

const HeroImage = () => {
  return (
    <div className="flex items-start justify-center w-full lg:w-1/2">
                <div className="">
                  <Image
                    src={"/top11.png"}
                    blurDataURL={'/top11.png'}
                    width="616"
                    height="617"
                    className={"object-cover"}
                    alt="Hero Illustration"
                    loading="eager"
                    placeholder="blur"
                  />
                </div>
              </div>
  )
}

export default HeroImage
