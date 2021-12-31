import React from "react";
import tw from "tailwind-styled-components";
import ContactIlus from "../Logo/ContactIlus";

export default function Hero() {
  return (
    <>
      <Container>
        <TitleHero>
          <h1 className="text-white font-bold font-slap text-3xl">Contact Us</h1>
        </TitleHero>
        <ConContact>
          <div className="sm:py-5 sm:mx-10 sm:w-1/2 w-full px-5 ">
            <ContactIlus />
          </div>
          <div className="text-white w-3/4 py-5 sm:w-1/2 ">
            {/* form tailwind */}
            <form action="#" >
              <div className="text-left w-full">
                <div className="flex flex-col my-5">
                  <label htmlFor="name" className="mr-28">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border-2 border-gray-100 rounded-md w-full sm:w-3/4 p-2 text-black mt-2"
                  />
                </div>
                <div className="w-full my-5 flex flex-col">
                  <label htmlFor="email" className="mr-28">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="border-2 border-gray-100 rounded-md w-full sm:w-3/4 p-2 text-black mt-2"
                  />
                </div>
                <div className="w-full my-5 flex flex-col">
                  <label htmlFor="message" className="mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full h-48 sm:w-3/4 text-black rounded-md"
                  />
                </div>
              </div>
              <div className="sm:flex text-center sm:text-right mt-10">
                <div className="sm:mr-40"></div>
                <button className="bg-cdark hover:bg-gray-800 shadow-md text-white font-bold py-2 px-4 rounded-full w-40">
                  {" "}
                  Send
                </button>
              </div>
            </form>
          </div>
        </ConContact>
      </Container>
    </>
  );
}

const Container = tw.div`bg-cnordic text-center py-5`;
const TitleHero = tw.div`container mx-auto border-b-2 border-gray-200 my-5 py-2 text-shadow-md`;
const ConContact = tw.div`flex flex-col sm:flex-row sm:justify-evenly items-center text-shadow-md`;
