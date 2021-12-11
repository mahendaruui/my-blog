import tw from "tailwind-styled-components";
// import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter, faLinkedinIn, faGithub, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import Image from 'next/image'
export default function HeroSection() {
  return (
    <>
      <SectionHero>
        {/* <Image src="../assets/imgs/yoot.png" height='500' width="500" layout="fill" /> */}
        <ProfilImage>
          {/* <img src="/imgs/yoot.png" alt="foto" height="130" width="150" className="rounded-2xl shadow-md bg-cdark mt-4" /> */}
          <Image src="/imgs/yoot.png" alt="foto" height="220" width="150" className="rounded-2xl shadow-md bg-cdark mt-4" />
        </ProfilImage>
        <ProfilDesc >
          <p className="text-lg md:text-xl">Mahendar Dwi Payana</p>
          <p>Lecturer - Web Developer - Data Scientist</p>
          <div className="mt-3 flex justify-between">
            <Link href="https://www.instagram.com/hendartea/">
              <a className="cursor-pointer" target="_blank" title="instagram">
                <FontAwesomeIcon className="h-5" icon={faInstagram} />
              </a>
            </Link>
            <Link href="https://twitter.com/hendartea">
              <a className="cursor-pointer" target="_blank" title="twitter">
                <FontAwesomeIcon className="h-5" icon={faTwitter} />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/mahendar-dwipayana-4ba1a076/">
              <a className="cursor-pointer" target="_blank" title="linkedIn">
                <FontAwesomeIcon className="h-5" icon={faLinkedinIn} />
              </a>
            </Link>
            <Link href="https://github.com/mahendaruui">
              <a className="cursor-pointer" target="_blank" title="office github">
                <FontAwesomeIcon className="h-5" icon={faGithub} />
              </a>
            </Link>
            <Link href="https://github.com/mahendartea">
              <a className="cursor-pointer" target="_blank" title="private github">
                <FontAwesomeIcon className="h-5" icon={faGithubSquare} />
              </a>
            </Link>
          </div>
          <div className="flex mx-auto mt-5 justify-center">
            <Image src="/notion-logo-no-background.png" alt="notion" className="" height="8" width="18" />
            {/* <img src="notion-logo-no-background.png" className="h-4" alt="notion" /> */}
            <Link href="https://aquatic-shovel-5ca.notion.site/Portofolio-b7e26d40365f48c5a4ffcf23af8a767b">
              <a className="px-1 cursor pointer px-2" title="detail" target="_blank">Detail </a>
            </Link>
            <FontAwesomeIcon className="h-4 px-1" icon={faFilePdf} />
            <Link href="/CV Mahendar Dwi Payana.pdf" >
              <a className="px-1 underline cursor-pointer" target="_blank" title="CV">Download CV</a>
            </Link>
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
