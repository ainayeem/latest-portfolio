import { Card, CardTitle } from "@/components/ui/card";
import { TSkill } from "@/types/skill.type";
import Image from "next/image";

export default function SkillCard({ skill }: { skill: TSkill }) {
  return (
    <div className="transition-all duration-300 hover:scale-105 hover:-translate-y-1">
      <Card className="mx-auto px-6 bg-custom-black-100 border-[#4b43d3] group transition-all duration-300 hover:border-white hover:shadow-lg hover:shadow-[#4b43d3]/20">
        <div className="transition-transform duration-300 group-hover:rotate-6">
          <Image
            className="mx-auto transition-all duration-300 group-hover:brightness-110"
            width={60}
            height={60}
            alt={`${skill?.name} Icon`}
            src={skill?.icon}
          />
        </div>
        <CardTitle className="text-center transition-colors duration-300 group-hover:text-[#4b43d3]">{skill.name}</CardTitle>
      </Card>
    </div>
  );
}
