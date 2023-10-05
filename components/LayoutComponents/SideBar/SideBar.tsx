import { SideBarProps } from './SideBar.props';

import styles from './SideBar.module.css';
import cn from 'classnames';

const SideBar = ({
  ...props
}: SideBarProps): JSX.Element => {
  return <div {...props}>SideBar</div>;
};

export default SideBar;
