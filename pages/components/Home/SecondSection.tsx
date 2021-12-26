import tw from "tailwind-styled-components";
import SecondIlus from "../../components/Logo/SecondIlus";
export default function SecondSection() {
  return (
    <WrapSec className="z-10 ...">
      <TitleSection>
        <p className="text-center text-3xl pt-10  uppercase">
          Background
        </p>
      </TitleSection>
      <Container>
        <SecondIlus />
        <div className="md:w-1/2 p-5">
          <p className="py-5 text-lg font-semibold">As a Lecturer</p>
          <p>
            I am a lecturer at the University of Ubudiyah Indonesia, Faculty of
            Science and Technology, Informatics Study Program. I teach at a
            campus located in downtown Banda Aceh which has a vision and mission
            to become a university that competes in the fields of health and
            information technology. I teach several courses related to my
            knowledge in the computer field including &quot; web programming,
            databases, visual programming, data management, artificial
            intelligence, data warehouse, web databases, digital image
            processing, and many others or can be seen on the pddikti page for
            details&quot;.However, my scientific fields are programming /
            software engineering, digital image processing (image processing),
            and Artificial Intelligence (AI). As a lecturer, apart from teaching,
            I also have to undergo the other Tri Dharma of Higher Education,
            namely community service (PKM) and research (Research).There are
            several scientific publications that I have issued and can be seen
            on the google scholar page, and the sinta dikti page.
          </p>
        </div>
        <div className="md:w-1/2 p-5">
          <p className="py-5 text-lg font-semibold ">As a Programmer</p>
          <p>
            Apart from being a lecturer, I am also a full-stack web programmer
            (web developer). Several applications have been developed including
            web-based applications at the University of Ubudiyah Indonesia. I
            developed the application at the agency because I was trusted as a
            2017-2018 staff and 2018-2020 director at the Cyber Development
            Center Directorate, University of Ubudiyah Indonesia. In addition, I
            have also made an Online Attendance application at the Southeast
            Aceh Education and Culture Office. Applications that have been made
            can be seen on the following page.
          </p>
        </div>
      </Container>
    </WrapSec>
  );
}

const WrapSec = tw.div`px-5 bg-gray-500 font-slap text-gray-300 h-auto pb-16`;
const Container = tw.div`relative container mx-auto flex flex-col md:flex-row items-start justify-between py-5 text-center`;
const TitleSection = tw.div`border-b-2 border-gray-200 container mx-auto`;
