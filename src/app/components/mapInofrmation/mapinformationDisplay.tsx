"use client";

import { serverData } from "@/app/interfaces/serverData";
import Image from "next/image";

const MapinformationDisplay = ({
  serverdata,
}: {
  serverdata: serverData | undefined;
}) => {
  return (
    <div className="flex felx-col justify-center">
      {serverdata && (
        <div className="max-w-xl w-full rounded-2xl overflow-hidden shadow-lg dark:bg-gray-900 border border-gray-700 p-4 space-y-4">
          {/* Map Image */}
          <div className="h-[140px] w-full overflow-hidden rounded-lg relative">
            <Image
              src={
                serverdata.map_image?.length === 0
                  ? "/de_mirage.jpg"
                  : serverdata.map_image
              }
              fill
              alt={serverdata.map}
              className="object-cover object-center"
            />
          </div>

          {/* Title & Hostname */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              {serverdata.hostname}
            </h2>
            <p className="text-sm text-gray-500">{serverdata.id}</p>
          </div>

          {/* Server Stats Grid */}
          <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <span className="font-semibold">Map:</span> {serverdata.map}
            </div>
            <div>
              <span className="font-semibold">Players:</span>{" "}
              {serverdata.players}/{serverdata.max_players}
            </div>
            <div>
              <span className="font-semibold">Bots:</span> {serverdata.bots}
            </div>
            <div>
              <span className="font-semibold">Port:</span> {serverdata.port}
            </div>
            <div>
              <span className="font-semibold">Country:</span>{" "}
              {serverdata.country_code}
            </div>
            <div>
              <span className="font-semibold">Banned:</span>{" "}
              {serverdata.banned ? "Yes" : "No"}
            </div>
            <div>
              <span className="font-semibold">Ping:</span> {serverdata.ping} ms
            </div>
            <div>
              <span className="font-semibold">Updated:</span>{" "}
              {new Date(serverdata.updated_at).toLocaleDateString()}
            </div>
          </div>

          {/* Connect Button + URL */}
          <div className="flex justify-between items-center">
            <a
              href={serverdata.connect}
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              Connect
            </a>
            <a
              href={serverdata.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              View Source
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
export default MapinformationDisplay;
