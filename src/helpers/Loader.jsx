import Loader from 'react-loader-spinner';
import { Loaderbtn } from './Loader.styled';

export const Spinner = () => {
  return (
    <Loaderbtn>
      <Loader
        type="Bar"
        color="#ea2128"
        height={90}
        width={90}
        timeout={300}
      />
    </Loaderbtn>
  );
};

