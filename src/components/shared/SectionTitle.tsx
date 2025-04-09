interface SectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <div className={`flex justify-center py-16 md:py-20 lg:py-10 ${className}`}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-indigo-500">{title}</h1>
    </div>
  );
}
