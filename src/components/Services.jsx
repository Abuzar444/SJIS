import ProjectsCard from './ServicesCard';
import { services } from '../data';
import SectionTitle from './SectionTitle';

const Services = () => {
  return (
    <section className='py-20 align-element' id='projects'>
      <SectionTitle text='Our Services' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {services.map((service) => {
          return <ProjectsCard key={service.id} {...service} />;
        })}
      </div>
    </section>
  );
};
export default Services;
