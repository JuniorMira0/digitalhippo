import Link from 'next/link';
import MaxWidthWrapper from './components/MaxWidthWrapper';
import { Button, buttonVariants } from '@/components/ui/button';
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react';

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description: "Get your assets delivered to your email in seconds and download them rigth away"
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description: "Every asset on your is verified by our team to ensure our highest quality standards. Not happy? we offer a 30-day refound garantee"
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description: "We've pladged 1% of sales to the preservation and restoration of the natural enviroment"
  }
]

export default function Home() {
  return <>
  <MaxWidthWrapper>
    <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
      <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>Your marketplace for high-quality{ ' ' }
        <span className='text-blue-600'>digital assets</span>
        .
      </h1>
      <p className='mt-6 text-lg max-w-prose text-muted-foreground'>Welcome to DigitalHippo. Every asset on our plataform is verifid by our tem to ensure our higest quality standarts.</p>
      <div className='flex flex-col sm:flex-row gap-4 mt-6'>
        <Link href="/products" className={ buttonVariants() }>Browse Trending</Link>
        <Button variant='ghost'>Our quality promise &rarr;</Button>
      </div>
    </div>

    {/*TODO: list products */ }
  </MaxWidthWrapper>
    <section className='border-t border-gray-200 bg-gray-50'>
      <MaxWidthWrapper className='py-20'>
        <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>

        </div>
      </MaxWidthWrapper>
    </section>
  </>
}
