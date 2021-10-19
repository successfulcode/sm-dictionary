import { FC } from 'react';
import { Button, Layout } from 'antd';
import HeaderDict from './components/HeaderDict/HeaderDict'
import FooterDict from './components/FooterDict/FooterDict';

const App: FC = () => {
  return (
    <>
    <Layout>
      <HeaderDict />
      <div>
      <Button type="primary">Primary Button</Button>
      </div>
      <FooterDict />
    </Layout>
    </>
  );
};

export default App;
