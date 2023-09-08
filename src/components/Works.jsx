import { works } from '../data';
import SectionTitle from './SectionTitle';
import SkillsCard from './WorksCard';
const Works = () => {
  return (
    <section className='py-20 align-element ' id='skills'>
      <SectionTitle text='tech stack' />
      <div className='py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {works.map((work) => {
          return <SkillsCard key={work.id} {...work} />;
        })}
      </div>
    </section>
  );
};
export default Works;
