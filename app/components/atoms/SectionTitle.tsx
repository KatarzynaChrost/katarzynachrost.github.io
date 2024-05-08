interface ISectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: ISectionTitleProps) => {
  return (
    <h3 className="font-semibold relative inline-block text-4xl mb-8 after:content-[''] after:absolute after:bottom-[45%] after:right-[-48px] after:w-10 after:h-px after:bg-zinc-400">
      {children}
    </h3>
  );
};

export default SectionTitle;
