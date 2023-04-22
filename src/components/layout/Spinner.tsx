import spinner from '../../assets/spinner.gif';

const Spinner = () => {
  return (
    <div className='mt-20'>
      <img
        width={180}
        className='text-cent
      er mx-auto'
        src={spinner}
        alt='Loading...'
      />
    </div>
  );
};

export default Spinner;
