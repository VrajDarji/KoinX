import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className="w-full p-6 rounded-md bg-white text-black flex flex-col gap-y-4">
      <h1 className="text-2xl font-medium">Team</h1>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        quisquam laborum esse eaque, illo assumenda eos ab. At nam totam
        doloribus aspernatur ab hic cum et inventore maxime ex rem, tempore quae
        veritatis tempora eaque! Distinctio autem tenetur quas a!
      </p>
      <div className="grid grid-cols-1 w-full gap-y-4">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="bg-[#E8F4FD] p-4 rounded-md flex flex-col lg:flex-row gap-6"
            >
              <div className="w-full lg:max-w-max flex items-center lg:items-start flex-col gap-y-2">
                <Image
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcAgscSBmq1Qe-akHxiHz5FMpi-uBxWj5eQQ&usqp=CAU"
                  }
                  alt=""
                  height={100}
                  width={100}
                  className="rounded-md object-cover aspect-square"
                />
                <div className="flex flex-col gap-y-1 w-full items-center">
                  <p className="text-sm font-medium">John Smith</p>
                  <p className="text-xs">Designation here</p>
                </div>
              </div>
              <p className="text-sm h-full flex justify-center items-center ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium ab maiores aliquid harum doloremque sed est. Dolores
                minima aperiam sed magni ipsum odio non sit, praesentium modi
                expedita consequuntur nihil amet? Asperiores doloremque
                architecto mollitia? Eum aspernatur nisi voluptatem blanditiis
                ipsa aliquid, numquam maxime! Mollitia quaerat in nam voluptatum
                autem quae perspiciatis dolorem. Id totam veniam amet earum
                soluta nulla suscipit ratione, mollitia cum quidem aut, error
                perspiciatis recusandae labore ipsam necessitatibus ab
                perferendis. Error quae quis temporibus quibusdam voluptas.
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Team;
