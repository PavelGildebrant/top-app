import { FooterProps } from './Footer.props';

import styles from './Footer.module.css';
import cn from 'classnames';

const Footer = ({
  ...props
}: FooterProps): JSX.Element => {
  return <div {...props}>footer</div>;
};

export default Footer;
