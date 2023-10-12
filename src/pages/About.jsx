import { aboutContent, aboutContent2 } from '../data';

const About = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 my-10 stat align-element">
        <img src="https://cdn.pixabay.com/photo/2014/09/06/15/40/business-437020_640.jpg" alt="about-image" className="object-cover sm:rounded-tl-[15rem] sm:rounded-br-[15rem] rounded-lg mt-20" />
        <div>
          <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center py-10'>
            <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl '>
              We love
            </h1>
            <div className='stats bg-primary shadow'>
              <div className='stat'>
                <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
                  what we do
                </div>
              </div>
            </div>
          </div>
          <div className='pl-10'>
            {aboutContent.map((cont, index) => {
              return (
                <div key={index}>
                  <h3 className='text-4xl font-bold bg-primary text-neutral w-60 my-2 rounded-md shadow-lg px-2 py-2'>{cont.title}</h3>
                  <p className='text-md font-semibold'>{cont.content}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 my-10 stat align-element">

        <div>
          <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center py-10'>
            <h1 className='text-4xl font-bold leading-none tracking-tight sm:text-6xl '>
              Know
            </h1>
            <div className='stats bg-primary shadow'>
              <div className='stat'>
                <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
                  Why Us
                </div>
              </div>
            </div>
          </div>
          <div className='pl-10'>
            {aboutContent2.map((cont, index) => {
              return (
                <div key={index}>
                  <h3 className='text-4xl font-bold bg-primary text-neutral w-96 my-2 rounded-md shadow-lg px-2 py-2'>{cont.title}</h3>
                  <p className='text-md font-semibold'>{cont.content}</p>
                </div>
              )
            })}
          </div>
        </div>
        <img src="https://cdn.pixabay.com/photo/2014/09/06/15/40/business-437020_640.jpg" alt="about-image" className="object-cover sm:rounded-tl-[15rem] sm:rounded-br-[15rem] rounded-lg mt-20" />
      </div>
    </>
  );
};
export default About;
