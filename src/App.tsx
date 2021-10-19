import { FC } from 'react';
import { Button, Layout } from 'antd';
import HeaderDict from './components/HeaderDict/HeaderDict'

const App: FC = () => {
  return (
    <>
    <Layout>
      <HeaderDict />
      <div>
      <Button type="primary">Primary Button</Button>
      </div>
      
    </Layout>
    </>
  );
};

export default App;
