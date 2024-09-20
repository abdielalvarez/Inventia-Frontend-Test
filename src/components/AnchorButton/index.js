import React from 'react';
import styles from '../../styles/components/anchorbutton.module.css';
import Link from 'next/link';

const AnchorButton = ({ href, children, theme = 'primary', responsiveBreakpoint = 920, expandWidth, ...props }) => {
  const themeClass =
    theme === 'tertiary' ? styles.tertiary :
    theme === 'secondary' ? styles.secondary :
    styles.primary;
  const responsiveClass = responsiveBreakpoint === 728 ? styles.responsive728 : styles.responsive920;
  const isInternal = href?.startsWith('/') || href?.startsWith('#');

  const generalStyles = `${styles.button} ${themeClass} ${responsiveClass} ${expandWidth ? styles.buttonWidth100per : ''}`

  if (href && !isInternal) {
    return (
      <a
        href={href}
        className={generalStyles}
        target='_blank'
        rel='noopener noreferrer'
        {...props}
      >
        {children}
      </a>
    );
  } else if (href && isInternal) {
    return (
      <Link
        href={href}
        className={generalStyles}
        {...props}
      >
        {children}
      </Link>
    )
  }
  return (
    <button className={generalStyles} {...props}>
      {children}
    </button>
  );
};

export default AnchorButton;