"use server"
import MapinformationDisplay from "@/app/components/mapInofrmation/mapinformationDisplay";
import { ServerThings } from "@/app/wannabesqlserver/data";


async function serverviewer ({params}: 
    {params: {serverData: number}
})
{

    const {serverData} = await params
    const serverdata = ServerThings.find(x => x.id == serverData);

    return(
        <div>
            <MapinformationDisplay serverdata={serverdata} />
        </div>
    )
}

export default serverviewer;