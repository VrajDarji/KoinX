import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
interface AboutProps {
  name: string;
  description: string;
}

const divs = [
  {
    gradientFrom: "#76EDA4",
    gradintTo: "#186AAC",
    imageUrl: "/Images/profits.png",
    tag: "Profits",
  },
  {
    gradientFrom: "#FF9664",
    gradintTo: "#F13F39",
    imageUrl: "/Images/liability.png",
    tag: "tax liability",
  },
];

const About: React.FC<AboutProps> = ({ name, description }) => {
  const createMarkup = (htmlstring: string) => {
    return { __html: htmlstring };
  };

  return (
    <div className="w-full p-6 rounded-md bg-white text-black flex flex-col gap-y-4">
      <h1 className="text-2xl font-medium">About {name}</h1>
      <div className="flex flex-col gap-y-2 pb-3 border-b-2">
        <p className="font-medium">What is {name}?</p>
        <div
          dangerouslySetInnerHTML={createMarkup(description)}
          className="desc text-sm"
        ></div>
      </div>
      <div className="flex flex-col gap-y-2 pb-3 border-b-2">
        <p className="font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          beatae autem quia harum quidem architecto optio dolorem eius eligendi
          distinctio quasi corrupti nihil dignissimos ea exercitationem
          doloremque voluptatum quis aperiam, omnis repellendus nobis nostrum
          minus at esse. Pariatur sed quam repudiandae praesentium qui in, quis
          vel est eveniet fugit! Fugiat.
        </p>
      </div>
      <div className="flex flex-col gap-y-2 pb-3 border-b-2">
        <p className="font-medium text-xl">Already holding {name}?</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 w-full">
          {divs.map((div, index) => (
            <div
              key={index}
              className="w-full aspect-[3.4/1] rounded-md flex flex-row gap-x-4 p-4 relative"
              style={{
                backgroundImage: `linear-gradient(to bottom right,${div.gradientFrom}, ${div.gradintTo})`,
              }}
            >
              <div className="h-full aspect-square overflow-hidden rounded-md relative">
                <Image src={div.imageUrl} alt="" fill />
              </div>
              <div className="flex flex-col items-start gap-y-6">
                <p className="text-white text-2xl font-medium ">
                  Calculate your <br />
                  {div.tag}
                </p>
                <button className="px-2 py-1 bg-white text-black flex text-sm font-medium rounded-md items-center gap-x-2">
                  Check Now <ArrowRight size={20} strokeWidth={1.4} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="text-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem,
        temporibus dolorem! Doloremque odit dolor impedit sit fugiat. Odio
        cupiditate tenetur aliquid harum magni et, odit corporis sit totam
        consequatur repellat quibusdam amet deserunt illo veritatis.
      </p>
    </div>
  );
};

export default About;
