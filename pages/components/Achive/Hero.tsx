import React from "react";
import tw from "tailwind-styled-components";
import Image from "next/image";

const Hero = () => {
  // object javascript
  const dataSertifikat = [
    {
      id: 1,
      title: "1 . Deep Learning Fundamental",
      src: "/imgs/1DeepLearningFundamental.png",
      desc: "Certificate obtained from Gadjah Mada University in DLSprint training",
      year: "2021",
    },
    {
      id: 2,
      title: "2 . Deep Learning Data Science",
      src: "/imgs/2DeepLearningDataScience.png",
      desc: "Certificate obtained from Gadjah Mada University in DLSprint training",
      year: "2021",
    },
    {
      id: 3,
      title: "3. Thematic Academy Data Science",
      src: "/imgs/3TADataScience.png",
      desc: "Certificate obtained in Thematic academic Data Scientist Digital Talent training",
      year: "2021",
    },
    {
      id: 4,
      title: "4. Nvidia Deep Learning Fundamental",
      src: "/imgs/4NvidiaCertificate.png",
      desc: "Deep learning training certificate by Nvidia",
      year: "2021",
    },
  ];

  const badges = [
    {
      id: 1,
      title: "Introduction to AI in the Data Center",
      src: "/imgs/Badge.png",
      desc: "Badge obtained from Nvidia",
      year: "2021",
    },
  ];

  const achives = [
    {
      id: 1,
      title: "Award of Iplus Aceh 2019",
      src: "/imgs/Iplusaceh.png",
      desc: "Award of Iplus Aceh 2019",
      year: "2019",
    },
  ];
  return (
    <Container>
      <TitleHero>
        <h1 className="text-white font-bold font-slap text-3xl">
          My Achievement
        </h1>
      </TitleHero>
      <ConAchive>
        <ConComponen>
          <Subtitle>1. certificate</Subtitle>
          {dataSertifikat.map((sertifikat) => {
            return (
              <CardMyApp key={sertifikat.id}>
                <Image
                  src={sertifikat.src}
                  width={500}
                  height={300}
                  alt="CardImage"
                  className="rounded-md shadow-md"
                />
                <TitleCard>{sertifikat.title}</TitleCard>
                <p className="text-white mb-2">{sertifikat.year}</p>
                <DescCard>{sertifikat.desc}</DescCard>
              </CardMyApp>
            );
          })}
        </ConComponen>
        <ConComponen>
          <Subtitle>2. Badge</Subtitle>
          {badges.map((badge) => {
            return (
              <CardMyApp key={badge.id}>
                <Image
                  src={badge.src}
                  width={500}
                  height={500}
                  alt="CardImage"
                />
                <TitleCard>{badge.title}</TitleCard>
                <p className="text-white mb-2">{badge.year}</p>
                <DescCard>{badge.desc}</DescCard>
              </CardMyApp>
            );
          })}
        </ConComponen>
        <ConComponen>
          <Subtitle>3. Award</Subtitle>
          {achives.map((achive) => {
            return (
              <CardMyApp key={achive.id}>
                <Image
                  src={achive.src}
                  width={500}
                  height={800}
                  alt="CardImage"
                />
                <TitleCard>{achive.title}</TitleCard>
                <p className="text-white mb-2">{achive.year}</p>
                <DescCard>{achive.desc}</DescCard>
              </CardMyApp>
            );
          })}
        </ConComponen>
      </ConAchive>
    </Container>
  );
};

const Container = tw.div`bg-cdark text-center py-5`;
const TitleHero = tw.div`container mx-auto border-b border-gray-500 my-5 py-2 text-shadow-md`;
const ConAchive = tw.div`container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 p-1`;
const ConComponen = tw.div``;
const Subtitle = tw.p`text-xl font-slap capitalize py-5 text-white border-b border-gray-500`;

const CardMyApp = tw.div`bg-cnordic m-5 rounded-md px-10 py-10`;
const TitleCard = tw.div`my-3 font-semibold text-indigo-400`;
const DescCard = tw.div`mb-5 text-white`;

export default Hero;
