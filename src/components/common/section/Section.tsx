import { ReactNode } from "react";
import sectionStyles from "./section.module.scss";

type SectionProps = {
  children: ReactNode;
  title: string;
  desc: string;
};

const Section = ({ children, title, desc }: SectionProps) => {
  return (
    <section id={title} className={`container ${sectionStyles.section}`}>
      <div className={`${sectionStyles.heading}`}>
        <h2 className={`${sectionStyles.title}`}>{title}</h2>
        <p className={`${sectionStyles.desc}`}>{desc}</p>
      </div>
      {children}
    </section>
  );
};

export default Section;
