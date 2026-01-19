import { CometCard } from "@/components/ui/comet-card";
import Image from "next/image";
import Cards_image from "../../public/image_source.json";

interface HealthCardProps {
  status: string;
  timestamp: string;
}

export function HealthCard({ status, timestamp }: HealthCardProps) {
  return (
    <CometCard>
      <div
        className="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2 saturate-0 md:my-20 md:p-4 hover:shadow-2xl transition-shadow duration-300"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div className="mx-2 flex-1" style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}>
          <div className="relative mt-2 aspect-[3/4] w-full">
            <Image
              fill
              className="rounded-[16px] bg-[#000000] object-cover contrast-75"
              alt="Health Status"
              src={Cards_image.card_image_url}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                opacity: 1,
              }}
            />
             <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-3xl font-bold text-white drop-shadow-md">{status || "LOADING..."}</h2>
             </div>
          </div>
        </div>
        <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
          <div className="text-xs">System Health</div>
          <div className="text-xs text-gray-300 opacity-50">{timestamp ? new Date(timestamp).toLocaleTimeString() : "--:--"}</div>
        </div>
      </div>
    </CometCard>
  );
}
//EOF