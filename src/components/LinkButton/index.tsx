import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './LinkButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

const LinkButton = ({ children, ...props }: Props) => {
  return (
    <button className={styles.button} {...props}>
      <a>
        {children}
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </a>
    </button>
  );
};

export default LinkButton;
