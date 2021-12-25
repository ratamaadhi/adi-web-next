import Image from 'next/image'
import { myLoader } from '../../lib/media'

function Hero() {
  return (
    <div className='flex justify-center w-full h-[calc(100vh-160px)] px-20'>
      <div className='w-full h-fit flex justify-between'>
        <div className='flex flex-col justify-center w-1/2 text-secondary'>
          <div className='w-full'>
            <h1 className='text-7xl font-semibold'>Ratama Adhi</h1>
            <p className='text-2xl font-light leading-9 tracking-wider'>a front-end developer</p>
            <h1 className='text-5xl mt-14 font-medium italic'>" Less is better "</h1>
            <p className='text-lg font-normal leading-9 tracking-wider'>- Minimalism</p>
            <p className='text-lg font-semibold mt-14'>Minimalism is a tool that can assist you in finding freedom. Freedom from fear. Freedom from worry. Freedom from overwhelm. Freedom from guilt. Freedom from depression. Freedom from the trappings of the consumer culture we’ve built our lives around. Real freedom.</p>
          </div>
        </div>
        <div className='w-1/2 h-auto flex justify-end'>
          <div className='relative w-[412px] h-[549px] grayscale-[110%] hover:grayscale-0 transition duration-300 delay-100'>
            <Image
              loader={myLoader}
              src={"/hero-img.png"}
              alt={"ratama adhi"}
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
