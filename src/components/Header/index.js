'use client'
import { useEffect, useState } from 'react';
import styles from '../../styles/components/header.module.css';
import Image from 'next/image';
import useText from './useText';
import Text from '../Text';
import useResponsive from '@/hooks/useResponsive';
import Link from 'next/link';
import { ROUTE_HOME } from '@/utils/routes';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [colliders, setColliders] = useState({
    services: false,
    success: false,
    aboutUs: false,
    contactUs: false,
  });

  const toggleCollider = (colliderName) => {
    setColliders((prevState) => ({
      ...prevState,
      [colliderName]: !prevState[colliderName],
    }));
  };

  const {
    servicesText,
    servicesInventiaExperienceText,
    servicesInventiaExperienceOption1Text,
    servicesInventiaExperienceOption2Text,
    servicesInventiaExperienceOption3Text,
    servicesInventiaSoftwareText,
    servicesInventiaSoftwareOption1Text,
    servicesInventiaSoftwareOption2Text,
    servicesInventiaSoftwareOption3Text,
    successServiciosFinancierosText,
    successServiciosFinancierosOption1Text,
    successServiciosFinancierosOption2Text,
    successBankingText,
    successBankingOption1Text,
    successBankingOption2Text,
    successText,
    aboutUsText,
    contactUsText
  } = useText(isMenuOpen)

  const isSmallScreen = useResponsive(768);

  useEffect(() => {
    if (!isSmallScreen) {
      setMenuOpen(false);
    }
  }, [isSmallScreen]);

  const MainLogo = () => {
    return (
      <Link href={ROUTE_HOME}>
        <Image
          src="/images/header/logo.svg"
          alt="Logo"
          width={!isSmallScreen ? 73 : 36}
          height={!isSmallScreen ? 87 : 43}
          priority
          className={styles.headerlogo}
        />
      </Link>
    )
  }

  return (
    <header
      className={
        !isMenuOpen && !isSmallScreen ?
          styles.header :
          !isMenuOpen ?
            styles.headerCollapsed :
            styles.headerExtended
      }
    >
      {!isMenuOpen ?
        <MainLogo/> : null
      }
      <div className={styles.headerlabels}>
        <div className={styles.headerlabel}>
          <Text texts={servicesText} />
        </div>
        <div className={styles.headerlabel}>
          <Text texts={successText} />
        </div>
        <div className={styles.headerlabel}>
          <Text texts={aboutUsText} />
        </div>
        <div className={styles.headerlabel}>
          <Text texts={contactUsText} />
        </div>
      </div>
      <div className={styles.headermenuIcon} onClick={toggleMenu}>
        {isMenuOpen ?
          <Image
            src="/images/header/close.svg"
            alt="Close"
            width={43}
            height={43}
            priority
            className={styles.headerlogo}
          /> :
          <Image
            src="/images/header/hamburger.svg"
            alt="Hamburger Menu"
            width={36}
            height={36}
            priority
            className={styles.headerlogo}
          />
        }
      </div>
      <div className={`${styles.headermenu} ${isMenuOpen ? styles.headeropen : ''}`}>
        <div className={styles.headermenuContent}>
          <div className={styles.headerlabel} onClick={toggleMenu}>
            {isMenuOpen ?
              <MainLogo/> : null
            }
          </div>
          <div className={`${styles.headerCollider} ${colliders.services ? styles.headerColliderOpen : ''}`} onClick={() => toggleCollider('services')}>
            <Text texts={servicesText} />
            <div className={`${styles.collapseContent} ${colliders.services ? styles.expand : ''}`}>
              <div>
                <Text texts={servicesInventiaExperienceText} />
              </div>
              <div className={styles.headerSubitem}>
                <Text texts={servicesInventiaExperienceOption1Text} />
              </div>
              <div className={styles.headerSubitem}>
                <Text texts={servicesInventiaExperienceOption2Text} />
              </div>
              <div className={styles.headerSubitem}>
                <Text texts={servicesInventiaExperienceOption3Text} />
              </div>
              <div>
                <Text texts={servicesInventiaSoftwareText} />
              </div>
              <div className={styles.headerSubitem}>
                <Text texts={servicesInventiaSoftwareOption1Text} />
              </div>
              <div className={styles.headerSubitem}>
                <Text texts={servicesInventiaSoftwareOption2Text} />
              </div>
              <div className={styles.headerSubitem}>
                <Text texts={servicesInventiaSoftwareOption3Text} />
              </div>
            </div>
          </div>
          <div className={`${styles.headerCollider} ${colliders.success ? styles.headerColliderOpen : ''}`} onClick={() => toggleCollider('success')}>
            <Text texts={successText} />
            <div className={`${styles.collapseContent} ${colliders.success ? styles.expand : ''}`}>
              <div>
                <Text texts={successServiciosFinancierosText} />
              </div>
              <div className={styles.headerSubitem}>
                <Text texts={successServiciosFinancierosOption1Text} />
              </div>
              <div className={styles.headerSubitem}>
                <Text texts={successServiciosFinancierosOption2Text} />
              </div>
              <div>
                <Text texts={successBankingText} />
              </div>
              <div className={styles.headerSubitem}>
                <Text texts={successBankingOption1Text} />
              </div>
              <div className={styles.headerSubitem}>
                <Text texts={successBankingOption2Text} />
              </div>
            </div>
          </div>
          <div className={styles.headerlabel} onClick={toggleMenu}>
            <Text texts={aboutUsText} />
          </div>
          <div className={styles.headerlabel} onClick={toggleMenu}>
            <Text texts={contactUsText} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;