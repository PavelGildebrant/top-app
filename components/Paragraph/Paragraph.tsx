import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.css';
import cn from 'classnames';

const Paragraph = ({
  size = 'average',
  children,
  className,
  ...props
}: ParagraphProps): JSX.Element => {
  return (
    <>
      <p
        className={cn(styles.p, className, {
          [styles.small]: size === 'small',
          [styles.average]: size === 'average',
          [styles.big]: size === 'big',
        })}
        {...props}>
        {children}
      </p>
    </>
  );
};
export default Paragraph;
