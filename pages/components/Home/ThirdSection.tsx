import tw from "tailwind-styled-components";
export default function ThirdSection() {
  const skill = [
    {
      id: 1,
      lang: "php",
      ket: "codeigniter,laravel",
    },
    {
      id: 2,
      lang: "Javascript",
      ket: "React, Next",
    },
    {
      id: 3,
      lang: "NodeJs",
      ket: "API",
    },
    {
      id: 4,
      lang: "Python",
      ket: "AI, Data Science, Deep Learning",
    },
    {
      id: 5,
      lang: "Database",
      ket: "SQL, NoSQL",
    },
    {
      id: 6,
      lang: "Version Control",
      ket: "git, gitlab, github",
    },
    {
      id: 7,
      lang: "DevOps",
      ket: "docker",
    },
  ];
  return (
    <div className="bg-cdark py-5">
      <ContainerTS>
        <h1 className="border-b-2 border-gray-400 pb-3">
          Skills & Experiences
        </h1>

        <WrapTS>
          <div className="sm:w-1/2 bg-gray-800 py-7 px-12">
            <p className="uppercase font-bold mb-5">Skills</p>
            <ul className="text-left list-decimal">
              {skill.map((item) => {
                return (
                  <li key={item.id} className="capitalize">
                    {item.lang} ({item.ket})
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="sm:w-1/2 bg-gray-600 py-7 px-12">
            <p className="uppercase font-bold mb-5">Experiences</p>
            <ul className="text-left list-decimal">
              <li>
                Working at State Office <span>(3 Years as IT Support)</span>
              </li>
              <li>
                Lecturer (Since 2016 until now. Teaching at Science and
                Techology Faculty)
              </li>
              <li>Director of ICT Department at Ubudiyah University</li>
            </ul>
          </div>
        </WrapTS>
      </ContainerTS>
    </div>
  );
}

const ContainerTS = tw.div`container mx-auto text-white font-slap text-center py-5`;
const WrapTS = tw.div`flex flex-col sm:flex-row sm:justify-around pt-5 text-center `;
