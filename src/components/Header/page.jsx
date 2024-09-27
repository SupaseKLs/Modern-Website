import Slate from '@/assets/slate.svg'
import Image from 'next/image'
export default function Header() {
    return (
        <>
            <div className='max-w-7xl m-auto'>
                <div className='h-96 flex flex-col items-center justify-center'>
                    <h1 className='text-7xl'>The Best<span className='text-7xl'> Digital</span></h1>
                    <div className="flex items-center">
                        <h1 className='text-7xl'>Marketing</h1>
                        <Image className='mx-2' src={Slate} />
                        <h1 className='text-7xl'>Agency</h1>
                    </div>
                    <p className='pt-10 text-center'>We believe in combining innovative design, sustainable practices, and <br/>exceptional craftsmanship to bring your vision to life.</p>
                </div>
                <div>
                    
                </div>
            </div>
        </>
    )
}