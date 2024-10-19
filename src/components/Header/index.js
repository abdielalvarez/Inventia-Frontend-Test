'use client'
import { useEffect, useState } from 'react';
import styles from '../../styles/components/header.module.css';
import Image from 'next/image';
import useText from './useText';
import Text from '../Text';
import useResponsive from '@/hooks/useResponsive';
import Link from 'next/link';
import { ROUTE_HOME } from '@/utils/routes';
import Dropdown from '../Dropdown';
import { useApiContext } from '@/context/wrappers/ContextProvider';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { setLang, state } = useApiContext()

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
    setColliders((prevState) => {
      const isAlreadyOpen = prevState[colliderName];
      const updatedColliders = Object.keys(prevState).reduce((acc, key) => {
        acc[key] = key === colliderName ? !isAlreadyOpen : false;
        return acc;
      }, {});
      return updatedColliders;
    });
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
    contactUsText,
    langText,
    dropdownDataServices,
    dropdownDataSuccessStories
  } = useText(isMenuOpen, colliders)

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
        />
      </Link>
    )
  }

  const handleChangeLanguage = (e) => {
    e && e.preventDefault()
    const lang =
      !state?.language ||
      state?.language === 'en' ?
      'es' : 'en'
    setLang(lang)
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
        <MainLogo /> : null
      }
      <div className={styles.headerlabels}>
        <Dropdown items={dropdownDataServices} disappearWhen768>
          <div className={styles.headerlabel}>
            <Text texts={servicesText} />
          </div>
        </Dropdown>
        <Dropdown items={dropdownDataSuccessStories} disappearWhen768>
          <div className={styles.headerlabel}>
            <Text texts={successText} />
          </div>
        </Dropdown>
        <div className={styles.headerlabel}>
          <Text texts={aboutUsText} />
        </div>
        <div className={styles.headerlabel}>
          <Text texts={contactUsText} />
        </div>
        <div onClick={handleChangeLanguage} className={styles.headerlabel}>
          <Text texts={langText} />
          <div className={styles.headerbox}>
            <Image
              src="/images/header/world.png"
              alt="Close"
              width={18}
              height={18}
            />
          </div>
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
            className={styles.headerclose}
          /> :
          <Image
            src="/images/header/hamburger.svg"
            alt="Hamburger Menu"
            width={36}
            height={36}
            priority
          />
        }
      </div>
      <div className={`${styles.headermenu} ${isMenuOpen ? styles.headeropen : ''}`}>
        <div className={styles.headermenuContent}>
          <div className={styles.headerlabel} onClick={toggleMenu}>
            {isMenuOpen ?
              <MainLogo /> : null
            }
          </div>
          <div className={`${styles.headerCollider} ${colliders.services ? styles.headerColliderOpen : ''}`} onClick={() => toggleCollider('services')}>
            <Text texts={servicesText} />
            <div className={`${styles.collapseContent} ${colliders.services ? styles.expand : ''}`}>
              <div onClick={toggleMenu}>
                <Text texts={servicesInventiaExperienceText} />
              </div>
              <div onClick={toggleMenu} className={styles.headerSubitem}>
                <Text texts={servicesInventiaExperienceOption1Text} />
              </div>
              <div onClick={toggleMenu} className={styles.headerSubitem}>
                <Text texts={servicesInventiaExperienceOption2Text} />
              </div>
              <div onClick={toggleMenu} className={styles.headerSubitem}>
                <Text texts={servicesInventiaExperienceOption3Text} />
              </div>
              <div onClick={toggleMenu}>
                <Text texts={servicesInventiaSoftwareText} />
              </div>
              <div onClick={toggleMenu} className={styles.headerSubitem}>
                <Text texts={servicesInventiaSoftwareOption1Text} />
              </div>
              <div onClick={toggleMenu} className={styles.headerSubitem}>
                <Text texts={servicesInventiaSoftwareOption2Text} />
              </div>
              <div onClick={toggleMenu} className={styles.headerSubitem}>
                <Text texts={servicesInventiaSoftwareOption3Text} />
              </div>
            </div>
          </div>
          <div className={`${styles.headerCollider} ${colliders.success ? styles.headerColliderOpen : ''}`} onClick={() => toggleCollider('success')}>
            <Text texts={successText} />
            <div className={`${styles.collapseContent} ${colliders.success ? styles.expand : ''}`}>
              <div onClick={toggleMenu}>
                <Text texts={successServiciosFinancierosText} />
              </div>
              <div onClick={toggleMenu} className={styles.headerSubitem}>
                <Text texts={successServiciosFinancierosOption1Text} />
              </div>
              <div onClick={toggleMenu} className={styles.headerSubitem}>
                <Text texts={successServiciosFinancierosOption2Text} />
              </div>
              <div onClick={toggleMenu}>
                <Text texts={successBankingText} />
              </div>
              <div onClick={toggleMenu} className={styles.headerSubitem}>
                <Text texts={successBankingOption1Text} />
              </div>
              <div onClick={toggleMenu} className={styles.headerSubitem}>
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
          <div className={styles.headerlabel} onClick={handleChangeLanguage}>
            <Text texts={langText} />
            <div className={styles.headerbox}>
              <Image
                src="/images/header/world.png"
                alt="Close"
                width={18}
                height={18}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;