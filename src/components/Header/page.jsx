import Slate from '@/assets/slate.svg'
import Image from 'next/image'
import Tooltip from '../Tooltip/page'
import Button from '@/components/ui/btnGradient'

export default function Header() {
    return (
        <>
<<<<<<< HEAD
            <div className='min-h-screen flex flex-col justify-center items-center'>
                <div className='pb-20'>
                    <Tooltip />
                </div>

                <h1 className='text-7xl'>The Best<span className='text-7xl'> Digital</span></h1>
                <div className="flex items-center">
                    <h1 className='text-7xl'>Marketing</h1>
                    <Image className='mx-2' src={Slate} alt='Slate Image' />
                    <h1 className='text-7xl'>Agency</h1>
=======
            <div className='max-w-7xl m-auto'>
                <div className='h-96 flex flex-col items-center justify-center'>
                    <h1 className='text-7xl'>The Best<span className='text-7xl'> Digital</span></h1>
                    <div className="flex items-center">
                        <h1 className='text-7xl'>Marketing</h1>
                        <Image className='mx-2' src={Slate} />
                        <h1 className='text-7xl'>Agency</h1>
                    </div>
                    <p className='pt-10 text-center'>We believe in combining innovative design, sustainable practices, and <br/>exceptional craftsmanship to bring your vision to life.</p>
>>>>>>> 574091bd4e829d169cc54d7392e62471ae4e64f9
                </div>
                <p className='pt-10 text-center'>We believe in combining innovative design, sustainable practices, and <br />exceptional craftsmanship to bring your vision to life.</p>
                <div className='mt-20'>
                    <Button />
                </div>
            </div>
        </>
    )
}
