const About = () => {
  return (
    <div className="grid sm:grid-cols-2 my-10 stat align-element">
      <img src="https://cdn.pixabay.com/photo/2014/09/06/15/40/business-437020_640.jpg" alt="about-image" className="object-cover stats" />
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
        <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto pb-10'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae
          quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio
          aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed
          officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!
        </p>
      </div>
    </div>
  );
};
export default About;