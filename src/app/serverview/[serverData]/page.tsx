import MapinformationDisplay from "@/app/components/mapInofrmation/mapinformationDisplay";
import { ServerThings } from "@/app/wannabesqlserver/data";


export default async function ServerViewer({
  params,
}: {
  params: Promise<{ serverData: string }>;
}) {

  const { serverData } = await params;
  const serverdata = ServerThings.find(x => x.id === Number(serverData));
    return(
        <div>
            <MapinformationDisplay serverdata={serverdata} />
        </div>
    )
}