"use client";

import TagCloud from "TagCloud";
import { useEffect } from "react";
import { technologies } from "../data/data";

const TechCloud = () => {
  useEffect(() => {
    const container = ".tag-cloud";

    const options = {
      radius: 300,
      maxSpeed: "slow",
      initSpeed: "slow",
      keep: true,
    };

    TagCloud(container, technologies, options);
  }, []);

  return (
    <div className="font-bold hidden sm:block text-2xl min-h-[600px] min-w-[600px]">
      <span className="tag-cloud block overflow-hidden max-h-[600px] max-w-[600px]"></span>
    </div>
  );
};

export default TechCloud;
