"use client";

import { technologies } from "@/app/data/data";
import TagCloud, { TagCloudOptions } from "TagCloud";
import { useEffect, useRef } from "react";

const TechCloud = () => {
  const tagCloudRef = useRef(null);

  useEffect(() => {
    const container = tagCloudRef.current;

    const options: TagCloudOptions = {
      radius: 300,
      maxSpeed: "slow",
      initSpeed: "slow",
      keep: true,
    };

    container && TagCloud(container, technologies, options);
  }, []);

  return (
    <div className="font-bold hidden sm:table mx-auto text-2xl min-h-[600px] min-w-[600px]">
      <span
        ref={tagCloudRef}
        className="block overflow-hidden max-h-[600px] max-w-[600px]"
      ></span>
    </div>
  );
};

export default TechCloud;
