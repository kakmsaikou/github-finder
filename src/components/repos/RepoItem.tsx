import { FaEye, FaLink } from 'react-icons/fa';

interface Props {
  repo: Repo;
}

const RepoItem = ({ repo }: Props) => {
  const {
    name,
    html_url,
    description,
    watchers_count,
    stargazers_count,
    open_issues,
    forks,
  } = repo;

  return (
    <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
      <div className='card-body'>
        <h3 className='mb-3 text-xl font-semibold'>
          <a href={html_url}>
            <FaLink className='inline mr-1' /> {name}
          </a>
        </h3>
        <p className='mb-3'>{description}</p>
        <div>
          <div className='mr-2 badge badge-info badge-lg'>
            <FaEye className='mr-2' /> {watchers_count}
          </div>
          <div className='mr-2 badge badge-success badge-lg'>
            <FaEye className='mr-2' /> {stargazers_count}
          </div>
          <div className='mr-2 badge badge-error badge-lg'>
            <FaEye className='mr-2' /> {open_issues}
          </div>
          <div className='mr-2 badge badge-warning badge-lg'>
            <FaEye className='mr-2' /> {forks}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
