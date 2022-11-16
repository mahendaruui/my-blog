import React from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";
import Link from "next/link";

function Heroapp() {
  return (
    <Container>
      <TitleHero>
        <h1 className="text-white font-bold font-slap text-3xl">
          My Application
        </h1>
      </TitleHero>
      <ContMyApp>
        <CardMyApp>
          <Image
            src="/imgs/Ubudiyahweb.png"
            width={500}
            height={600}
            alt="CardImage"
            className="rounded-md shadow-md"
          />
          <TitleCard>Portal Ubudiyah Indonesia University</TitleCard>
          <DescCard>
            The official website of the University of Ubudiyah Indonesia is a
            website designed using a content management system (CMS) and
            continues to be developed. The UUI website with the latest
            appearance since 2018 has been optimized with Search Engine
            Optimization (SEO).
          </DescCard>
          <Link href="https://uui.ac.id">
            <a
              className="bg-cdark px-5 py-2 rounded-xl text-white hover:bg-cnordic"
              target="_blank"
            >
              Check this out!
            </a>
          </Link>
        </CardMyApp>
        <CardMyApp>
          <Image
            src="/imgs/elearning.png"
            width={500}
            height={600}
            alt="CardImage"
            className="rounded-md shadow-md"
          />
          <TitleCard>Elearning UUI</TitleCard>
          <DescCard>
            This Elearning application system is specially designed to assist
            the online learning process at Ubudiyah University Indonesia with
            various features. The main feature of this system is that lecturers
            can share lecture material with students and assist lecturers in
            managing meetings.
          </DescCard>
          <Link href="https://elearning.uui.ac.id">
            <a
              className="bg-cdark px-5 py-2 rounded-xl text-white hover:bg-cnordic"
              target="_blank"
            >
              Check this out!
            </a>
          </Link>
        </CardMyApp>
        <CardMyApp>
          <Image
            src="/imgs/simasegar.png"
            width={500}
            height={600}
            alt="CardImage"
            className="rounded-md shadow-md"
          />
          <TitleCard>Sim Absensi Sekolah</TitleCard>
          <DescCard>
            The school attendance system is specifically designed for the
            purposes of recording employee attendance at the education office in
            Southeast Aceh. In addition, this system has a feature of recording
            the learning process in every school in Southeast Aceh District
          </DescCard>
          <Link href="https://sim-asegar.com">
            <a
              className="bg-cdark px-5 py-2 rounded-xl text-white hover:bg-cnordic"
              target="_blank"
            >
              Check this out!
            </a>
          </Link>
        </CardMyApp>
        <CardMyApp>
          <Image
            src="/imgs/simpeg.png"
            width={500}
            height={600}
            alt="CardImage"
            className="rounded-md shadow-md"
          />
          <TitleCard>Sistem Pegawai</TitleCard>
          <DescCard>
            The staffing information system of Universitas Ubudiyah Indonesia is
            designed to record staffing information and help human resources see
            the performance of each employee and can perform performance
            reports.
          </DescCard>
          <Link href="https://simpeg.uui.ac.id">
            <a
              className="bg-cdark px-5 py-2 rounded-xl text-white hover:bg-cnordic"
              target="_blank"
            >
              Check this out!
            </a>
          </Link>
        </CardMyApp>
        <CardMyApp>
          <Image
            src="/imgs/wisuda.png"
            width={500}
            height={600}
            alt="CardImage"
            className="rounded-md shadow-md"
          />
          <TitleCard>Wisuda App</TitleCard>
          <DescCard>
            The graduation system is a graduation registration application for
            students who have graduated at the University of Ubudiyah Indonesia.
            In addition to the registration feature, this application can also
            display graduation statistics data every year
          </DescCard>
          <Link href="https://wisuda.uui.ac.id">
            <a
              className="bg-cdark px-5 py-2 rounded-xl text-white hover:bg-cnordic"
              target="_blank"
            >
              Check this out!
            </a>
          </Link>
        </CardMyApp>
        <CardMyApp>
          <Image
            src="/imgs/eabsenuui.png"
            width={500}
            height={600}
            alt="CardImage"
            className="rounded-md shadow-md"
          />
          <TitleCard>Absensi UUI</TitleCard>
          <DescCard>
            An online attendance system specifically designed to record student
            attendance at every meeting in courses taught by lecturers at the
            University of Ubudiyah Indonesia
          </DescCard>
          <Link href="https://eabsensi.uui.ac.id">
            <a
              className="bg-cdark px-5 py-2 rounded-xl text-white hover:bg-cnordic"
              target="_blank"
            >
              Check this out!
            </a>
          </Link>
        </CardMyApp>
      </ContMyApp>
    </Container>
  );
}

const Container = tw.div`bg-cdark text-center py-5`;
const TitleHero = tw.div`container mx-auto border-b border-gray-500 my-5 py-2 text-shadow-md`;
// const ContMyApp = tw.div`flex flex-col sm:flex-row sm:justify-around text-shadow-md `;
const ContMyApp = tw.div`container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 `;
const CardMyApp = tw.div`bg-cnordic m-5 rounded-md px-10 py-10`;
const TitleCard = tw.div`my-3 font-semibold text-indigo-400`;
const DescCard = tw.div`mb-5 text-white`;

export default Heroapp;
