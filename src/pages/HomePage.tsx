import UserResults from '../components/users/UserResults';

const HomePage = () => {
  console.log(import.meta.env.VITE_REACT_APP_GITHUB_URL); // 123

  return (
    <>
      <UserResults />
    </>
  );
};

export default HomePage;
