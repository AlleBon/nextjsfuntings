import Image from 'next/image'
import Mapcontainer from './components/mapcards/mapcontainer';

export default function Home() {
  return (
    <div>
      <div className='border-1 border-solid rounded-sm inset-shadow-black-sm'>
        <div id='mainpart' className='flex flex-row justify-center items-center mb-10 mt-10'>
            <Image 
            src='/next.svg'
            width={140}
            height={200} 
            alt={'asdasd'}/>
          </div>
      </div>
      <Mapcontainer/>
    </div>
  );
}
