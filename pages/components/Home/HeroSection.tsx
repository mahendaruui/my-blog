import tw from "tailwind-styled-components";

export default function HeroSection() {
  return (
    <>
      <SectionHero>
        {/* <Image src="../assets/imgs/yoot.png" height='500' width="500" layout="fill" /> */}
        <ProfilImage>
          <img src="/imgs/yoot.png" alt="foto" height="130" width="150" className="rounded-2xl shadow-md bg-cdark" />
        </ProfilImage>

        <ProfilDesc >
          <p className="text-lg md:text-xl">Mahendar Dwi Payana</p>
          <p>Lecturer - Web Developer - Data Science</p>
        </ProfilDesc>
        <DescHero >
          <p className="font-semibold text-cwhite my-2">Focus Skill</p>
          <p className="px-5 italic text-sm text-cwhite">
            Web Programming, Database (MySQL, SQLite, MongoDB), RestFull API, Data Science, Data Enggineering, Artifial Intelligence (Machine Learning, Deep Learning)
          </p>
          <p className="my-2 text-cwhite">Aceh, Indonesia</p>
        </DescHero>
      </SectionHero>
    </>
  )

}


const SectionHero = tw.div`flex flex-col font-slap items-center py-10 mx-auto bg-gradient-to-r from-cdark via-cnordic to-cdark shadow-lg divide-y`;
const ProfilImage = tw.div``;
const ProfilDesc = tw.div`text-center text-sm my-5 pt-2 text-shadow-md text-cwhite `;
const DescHero = tw.div`text-center text-shadow-md`;
