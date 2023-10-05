import { HeaderProps } from './Header.props';

import styles from './Header.module.css';
import cn from 'classnames';

const Header = ({
  ...props
}: HeaderProps): JSX.Element => {
  return <header {...props}> header</header>;
};

export default Header;
