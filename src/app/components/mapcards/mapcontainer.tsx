import Image from 'next/image'
import MapIcon from '../../icons/mapicon';
import { serverData } from '@/app/interfaces/serverData';
import Link from 'next/link';
import { ServerThings } from '@/app/wannabesqlserver/data';

const Mapcontainer = () => {
    return(
        <section className='grid grid-cols-3 grid-flow-row gap-4 mt-20'>
            {ServerThings.map((server: serverData, index: number) => {
                return (
                <Link className='flex flex-col border rounded-md' key={index} href={`/serverview/${server.id}`}>
                    <div id='card' className='flex flex-col m-2 h-full'>

                        <div id='card-img' className='h-[105px] overflow-hidden rounded-md'>
                            <Image 
                                src={server.map_image.length == 0 ? '/de_mirage.jpg' : server.map_image  }
                                width={350}
                                height={250}
                                objectFit='cover'
                                alt='asdasd'
                                style={{marginTop: '-20px'}}
                            />
                        </div>

                        <div className='flex flex-col gap-5 mt-2 h-full'>
                            <div id='card-info' className='flex flex-row w-full justify-between'>
                                <div id='players'>

                                    <span className='flex flex-row mr-1 max-w-1/2'>
                                        <Image src='/serverPlayers.svg' alt={'asdasd'} height={20} width={20} />
                                        <p className='ml-2 text-amber-300 font-mono'>{server.players}</p> 
                                        / 
                                        <p className='text-amber-300 font-mono'>{server.max_players}</p>
                                    </span>
                                </div>

                                {server.map &&
                                <div id='map' className='flex flex-row max-w-1/2 font-mono break-all ml-1'>
                                    <p>{server.map}</p>
                                </div>
                                }
                                
                            </div>
                            {server.ip && 
                            <div className='mt-auto'>
                                <div className='flex flex-row justify-center'>
                                    <MapIcon/>
                                    <p className='font-mono text-amber-800'>
                                        {server.ip}
                                    </p>
                                </div>
                            </div>}
                            
                        </div>
                        
                    </div>
            </Link>
            );})}
            
        </section>
    );
};

export default Mapcontainer;
