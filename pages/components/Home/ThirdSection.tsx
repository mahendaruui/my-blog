import tw from "tailwind-styled-components";
export default function ThirdSection() {
  return (
    <div className="bg-cdark py-5">
      <ContainerTS>

        <h1 className="border-b-2 border-gray-400 pb-3">Skills & Experiences</h1>

        <WrapTS>

          <div className="w-1/2 bg-gray-800 p-10">
            <p className="uppercase font-bold mb-5">Skills</p>
            <ul className="text-left list-decimal">
              <li>PHP <span>(Codeigniter, Laravel)</span></li>
              <li>Javascript <span> (React, Next)</span></li>
              <li>nodeJs <span> (API)</span></li>
              <li>Python <span>(AI, Data Science, Deep Learning)</span></li>
              <li>Database <span>(SQL, NoSQL)</span></li>
              <li>Version Control / Dev Ops <span>(Git, Docker)</span></li>

            </ul>
          </div>

          <div className="text-center w-1/2 bg-gray-600 p-10">
            <p className="uppercase font-bold mb-5">Experiences</p>

            <ul className="text-left list-decimal">
              <li>Working at State Office <span>(3 Years as IT Support)</span></li>
              <li>Lecturer at Ubudiyah University (Since 2016 until now. Teaching at Science and Techology)</li>
              <li>Director of ICT Department at Ubudiyah University</li>

            </ul>
          </div>

        </WrapTS>

      </ContainerTS>

    </div>
  )
}

const ContainerTS = tw.div`container mx-auto text-white font-slap text-center py-5`
const WrapTS = tw.div`flex justify-around pt-5 text-center`
