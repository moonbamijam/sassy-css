import { ReactNode } from "react";
import sectionStyles from "./section.module.scss";

type SectionProps = {
  id: string;
  children: ReactNode;
  title: string;
  desc: string;
};

const Section = ({ id, children, title, desc }: SectionProps) => {
  return (
    <section id={id} className={`container ${sectionStyles.section}`}>
      <div className={`${sectionStyles.heading}`}>
        <h1 className={`${sectionStyles.title}`}>{title}</h1>
        <p className={`${sectionStyles.desc}`}>{desc}</p>
      </div>
      {children}
    </section>
  );
};

export default Section;
