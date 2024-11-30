import { ButtonHTMLAttributes, ReactNode, useState } from 'react';
import styles from './LinkButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  link: string;
};

const LinkButton = ({ children, ...props }: Props) => {
  const [link] = useState(props.link);
  return (
    <button className={styles.button} {...props}>
      <a href={link} rel="noopener noreferrer" target="_blank">
        {children}&nbsp;
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </a>
    </button>
  );
};

export default LinkButton;
