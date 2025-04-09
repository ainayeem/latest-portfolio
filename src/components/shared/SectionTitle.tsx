interface SectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <div className={`flex justify-center pt-16 md:pt-20 lg:pt-10 ${className}`}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-indigo-500">{title}</h1>
    </div>
  );
}
