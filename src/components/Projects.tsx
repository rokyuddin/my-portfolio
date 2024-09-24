import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { IconCurrentLocation } from "@tabler/icons-react";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container w-full py-20 flex flex-col gap-10">
        <div className="flex flex-col lg:justify-center lg:items-center max-w-2xl mx-auto gap-2">
          <p className="uppercase text-sm text-white">Projects</p>
          <h1 className="text-xl lg:text-3xl font-bold text-white">
            Top Notch <span className="text-blue-500">Creative Solutions</span>
          </h1>
          <p className="lg:text-center text-sm md:text-base font-normal tracking-wide leading-loose text-zinc-400">
            Delivering high-quality, innovative web development services to meet
            your unique needs. From custom website development and performance
            optimization to comprehensive maintenance and support, I provide
            exceptional solutions that enhance your online presence and drive
            success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full">
          {projects.map((item) => (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center w-full"
              key={item.id}
            >
              <PinContainer title={item.title} href={item.link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] rounded-lg overflow-hidden h-[25svh] md:h-[30svh] mb-4">
                  <Image
                    src={item.img}
                    alt="cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-1 text-white">
                  {item.title}
                </h1>

                <p className="lg:text-base lg:font-normal font-light text-sm line-clamp-3 text-zinc-400">
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          src={icon}
                          alt={index.toString()}
                          width={20}
                          height={20}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex  text-sm text-blue-500">
                      Check Live Site
                    </p>
                    <IconCurrentLocation className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
