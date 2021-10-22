import { FC } from 'react';
import { Button } from 'antd';

const ButtonDict: FC = ({ children }) => {
  return <Button type="primary">{children}</Button>;
};

export default ButtonDict;
