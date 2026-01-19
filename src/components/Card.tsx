"use client";

import Image from "next/image";
import type React from "react";
import { CardBody} from "@/components/ui/items/CardBody";
import { CardContainer } from "@/components/ui/items/CardContainer";
import { CardItem } from "@/components/ui/items/CardItem";
import CardImage from "../../public/image_source.json";
import CardItems from "../app/data/CardItem.json";

type CardItemData = {
  id: string;
  translateZ?: number | string;
  as?: React.ElementType;
  className?: string;
  content: React.ReactNode;
};

type RawCardItem = {
  id: string;
  translateZ?: number | string;
  as?: string;
  className?: string;
  content: string;
};

const typedItems: CardItemData[] = (CardItems as RawCardItem[]).map((item) => ({
  ...item,
  as: item.as as unknown as React.ElementType,
}));

export const  ThreeDCardDemo=() =>{
  return (
    <CardContainer className="inter-var">

<CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">

  {typedItems.map((item) => (
    <CardItem
      key={item.id}
      translateZ={item.translateZ}
      as={item.as}
      className={item.className}
    >
      {item.content}
    </CardItem>
  ))}
  <CardItem translateZ="100" className="w-full mt-4 relative">
    <Image
      src={CardImage["3d_card_image_url"]}
      height={1000}
      width={1000}
      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
      alt="thumbnail"
    />

    <div className="absolute inset-0 flex items-center justify-center">
      <h2 className="text-4xl font-black text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] tracking-widest">
      </h2>
    </div>
  </CardItem>

</CardBody>
    </CardContainer>
  );
}
//EOF

