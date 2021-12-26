import React from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";
export default function Hero() {
  return (
    <>
      <Container>
        <TitleHero>
          <h1 className="text-white font-bold font-slap text-3xl">Contact</h1>
        </TitleHero>
        <ConContact>
          <div className="py-5 mx-10 w-1/3">
            <Image
              src="/imgs/yoot.png"
              alt="foto"
              height="220"
              width="150"
              className="shadow-md bg-cdark mt-4"
            />
          </div>
          <div className="text-white py-10 mx-10 w-2/3 ">
            {/* form tailwind */}
            <form action="#">
              <div className="flex flex-col text-left">
                <div className="my-5">
                  <label htmlFor="name" className="mr-28">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border-2 border-gray-100 w-full sm:w-1/2 p-2 text-black"
                  />
                </div>
                <div className="w-full my-5">
                  <label htmlFor="email" className="mr-28">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="border-2 border-gray-100 w-full sm:w-1/2 p-2 text-black"
                  />
                </div>
                <div className="w-full my-5 flex flex-col sm:flex-row">
                  <label htmlFor="message" className="mr-24">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="border-2 border-gray-100 w-full sm:w-1/2 p-2 text-black"
                  />
                </div>
              </div>
              <div className="sm:flex text-center sm:text-right mt-10">
                <div className="sm:mr-40"></div>
                <button className="bg-cdark text-white font-bold py-2 px-4 rounded-full w-40">
                  {" "}
                  Send
                </button>
              </div>
            </form>
            {/* <form className="flex flex-col text-left">
              <div className="py-2 flex">
                <label className="mr-28">Name </label>
                <input type="text" name="name" placeholder="Your name..." />
              </div>
              <div className="py-2 flex">
                <label className="mr-28">Email </label>
                <input type="email" name="email" placeholder="Your email..." />
              </div>
              <div className="py-2 flex">
                <label className="mr-28">City </label>
                <input type="text" name="city" placeholder="Your city..." />
              </div>
              <div className="py-2 flex">
                <label className="mr-28">Message </label>
                <textarea name="msg" placeholder="Your message..." />
              </div>
            </form> */}
          </div>
        </ConContact>
      </Container>
    </>
  );
}

const Container = tw.div`bg-cnordic text-center py-5`;
const TitleHero = tw.div`container mx-auto border-b-2 border-gray-200 my-5 py-2`;
const ConContact = tw.div`flex flex-col sm:flex-row sm:justify-evenly items-center`;
