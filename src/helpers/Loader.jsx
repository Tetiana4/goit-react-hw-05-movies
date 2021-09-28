import Loader from 'react-loader-spinner';

export const Spinner = () => {
  return (
      <Loader
        type="Puff"
        color="#4a0e4e"
        height={50}
        width={50}
        timeout={300}
      />    
  );
};