const AboutPage = () => {
  return (
    <>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. This is a
        project that I worked on while learning React, and I made some
        modifications to the original project.
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        My Github:
        <a className='text-white' href='https://github.com/kakmsaikou'>
          {' '}
          Tacitus Pie
        </a>
      </p>
    </>
  );
};

export default AboutPage;
