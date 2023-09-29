import Image from 'next/image'

export default function Home() {
  return (
    <div className=" h-screen w-full flex flex-col justify-center items-center">
      <span className=' text-[50px] text-black'> User Profile System </span>
      <span className='text-[25px]'> with....</span>
      <span className='text-[35px]'> nextAuth, Prisma, Mongodb</span>
    </div>
  )
}
