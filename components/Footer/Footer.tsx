import { FooterProps } from './Footer.props';

import styles from './Footer.module.css';
import cn from 'classnames';

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div className={cn('one', styles.one)}>
        OwlTop © 2020 - 2021 Все права защищены
      </div>
      <div className={cn('two', styles.two)}> Пользовательское соглашение</div>
      <div className={cn('one', styles.three)}>Политика конфиденциальности</div>
    </footer>
  );
};

export default Footer;
