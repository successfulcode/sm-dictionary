import { FC } from 'react';
import './App.scss';
import { Layout } from 'antd';
import HeaderDict from '../HeaderDict/HeaderDict';
import FooterDict from '../FooterDict/FooterDict';
import ButtonDict from '../UI/ButtonDict';

const App: FC = () => {
  return (
    <>
      <Layout>
        <HeaderDict />
        <div>
          <ButtonDict>HeyHeyHey ...</ButtonDict>
        </div>
        <FooterDict />
      </Layout>
    </>
  );
};

export default App;
