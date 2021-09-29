import Loader from 'react-loader-spinner';
import { Loaderbtn } from './Loader.styled';

export const Spinner = () => {
  return (
    <Loaderbtn>
      <Loader
        type="Bar"
        color="#4a0e4e"
        height={90}
        width={90}
        timeout={300}
      />
    </Loaderbtn>
  );
};

