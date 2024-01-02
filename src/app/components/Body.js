import { FaMapMarkerAlt } from "react-icons/fa";
import discoverItem from "../data/discoverItem";
import images from "../data/images";
import Image from "next/image";
import Modal from "./Modal";
const Body = () => {
  return (
    <main className="bg-slate-50 gap-8 flex flex-col items-center justify-center pt-40 border-b p-8">
      <div className="flex flex-col  gap-10">
        <div className="flex flex-col w-96 gap-2">
          <p className="font-bold text-4xl">
            Find the perfect Professional for you
          </p>
          <p className="text-2xl text-gray-500">
            {" "}
            Get Free quotes within minutes
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-10">
            <div className="flex flex-row">
              <div className="border border-solid border-black p-2">
                <input
                  type="text"
                  className="border-0 outline-none focus:outline-none"
                  placeholder="What service are you looking for"
                />
              </div>
              <div className="border p-2 border-solid border-gray-500 flex flex-row items-center  gap-2">
                <FaMapMarkerAlt />
                <input
                  type="text"
                  className="border-0 outline-none focus:outline-none"
                  placeholder="Pin code"
                />
              </div>
            </div>
            <button className="bg-sky-400 p-3 rounded-md">Search</button>
          </div>
          <div>
            <span>Popular: House Cleaning, Web Design, Personal Trainers</span>
          </div>
        </div>
        <div></div>
      </div>

      <div className="flex flex-col gap-8">
        <h2 className="text-4xl font-semibold text-center">Discover</h2>
        <div className="flex flex-row gap-24">
          {discoverItem.map((item) => {
            return (
              <div className="flex flex-col items-center gap-4 w-12">
               <div className={`border border-solid p-2 `}>
                <item.icon color={item.color} />

                </div>
                <span className="text-center font-medium text-sm">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {images?.map((item) => {
          return (
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-2xl">{item.title}</h2>
              <div className="flex flex-row gap-8 ">
                {
                item.images.map(item=>{
                    return(
                        <div className="flex flex-col border pb-2 gap-8 hover:scale-110 transition duration-300 ease-in-out">
                    <Image src={item.image}  width={400} height={50} />
                    <span >{item.itemName}</span>
                    </div>
                    )
                })
                }
                </div>
            </div>
          );
        })}
      </div>

    
    </main>
  );
};
export default Body;