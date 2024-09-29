import Slate from '@/assets/slate.svg'
import Image from 'next/image'
import Tooltip from '../Tooltip/page'
import Button from '@/components/ui/btnGradient'

export default function Header() {
    return (
        <>
            <div className='min-h-screen flex flex-col justify-center items-center'>
                <div className='pb-20'>
                    <Tooltip />
                </div>

                <h1 className='text-7xl'>The Best<span className='text-7xl'> Digital</span></h1>
                <div className="flex items-center">
                    <h1 className='text-7xl'>Marketing</h1>
                    <Image className='mx-2' src={Slate} alt='Slate Image' />
                    <h1 className='text-7xl'>Agency</h1>
                </div>
                <p className='pt-10 text-center'>We believe in combining innovative design, sustainable practices, and <br />exceptional craftsmanship to bring your vision to life.</p>
                <div className='mt-20'>
                    <Button />
                </div>
            </div>
        </>
    )
}
