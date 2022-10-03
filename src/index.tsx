import 'react-native-gesture-handler';
import { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { useCachedResources } from './hooks/useCachedResources';
import Navigation from './navigation';
import Providers from './providers';

interface iBookshelfProps {}

const Bookshelf: FC<iBookshelfProps> = () => {
  const isLoaded = useCachedResources();
  if (!isLoaded) return null;
  return (
    <RecoilRoot>
      <Providers>
        <Navigation />
      </Providers>
    </RecoilRoot>
  );
};

export default Bookshelf;
