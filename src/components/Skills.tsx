import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllSkills } from "@/services/skill";
import { TSkill } from "@/types/skill.type";
import SectionTitle from "./shared/SectionTitle";
import SkillCard from "./SkillCard";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

const Skills = async () => {
  const { data: skills }: { data: TSkill[] } = await getAllSkills();

  type GroupedSkills = {
    [category: string]: TSkill[];
  };

  const groupedSkills: GroupedSkills = skills?.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as GroupedSkills);

  return (
    <div className=" mt-10">
      {/* Section Title */}
      <SectionTitle title="Skills & Technologies" />

      {/* Tabs Section */}
      <BackgroundBeamsWithCollision>
        <Tabs defaultValue="frontend" className="w-full mt-10 flex flex-col items-center p-4 bg-[#1d1b48] rounded-lg">
          <TabsList className="flex gap-4 bg-custom-black-100">
            {Object.keys(groupedSkills).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="transition-all duration-300 cursor-pointer capitalize  data-[state=active]:bg-[#4f46e5]"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="w-full flex justify-center pt-10 pb-5">
            {Object.entries(groupedSkills).map(([category, skillList]) => (
              <TabsContent
                key={category}
                value={category}
                className="top-0 left-0 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 transition-opacity duration-300"
              >
                {skillList.map((skill) => (
                  <SkillCard key={skill._id} skill={skill} />
                ))}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default Skills;
