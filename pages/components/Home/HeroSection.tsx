import tw from "tailwind-styled-components";
// import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faFacebook, faInstagram, faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
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
          <div className="mt-3 flex justify-between">
            <span>
              <FontAwesomeIcon className="h-5" icon={faFacebook} />
            </span>
            <span>
              <FontAwesomeIcon className="h-5" icon={faInstagram} />
            </span>
            <span>
              <FontAwesomeIcon className="h-5" icon={faTwitter} />
            </span>
            <span>
              <FontAwesomeIcon className="h-5" icon={faLinkedinIn} />
            </span>
            <span>
              <FontAwesomeIcon className="h-5" icon={faGithub} />
            </span>
          </div>
          <div className="flex mx-auto mt-5 justify-center">
            <img src="notion-logo-no-background.png" className="h-5 px-1" alt="notion" />
            <p className="px-1">Detail</p>
          </div>
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
const ProfilDesc = tw.div`text-center text-sm my-5 pt-2 text-shadow-lg text-cwhite `;
const DescHero = tw.div`text-center text-shadow-md`;
