import React, { useState, useRef, useEffect } from 'react';
import styles from '../../styles/components/dropdown.module.css';
import useResponsive from '@/hooks/useResponsive';
import { Item, SubItem } from './Item';

const Dropdown = ({ items, children, disappearWhen768 }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const isSmallScreen = useResponsive(768);

    const handleToggle = (event) => {
        event.stopPropagation();
        setIsOpen((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const handleItemClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (disappearWhen768 && isSmallScreen) {
        return <div ref={dropdownRef} style={{ position: 'relative' }}>{children}</div>;
    }

    

    return (
        <div ref={dropdownRef} style={{ position: 'relative' }}>
            <div onClick={handleToggle} className={styles.trigger}>
                {children}
            </div>
            {isOpen && (
                <div className={styles.content}>
                    {items.map((item, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.itemTitle} onClick={handleItemClick}>
                                <Item text={item.title.text} href={item.title.href} />
                            </div>
                            <div className={styles.titleLine}></div>
                            <div className={styles.subContent}>
                                {item.content.map((text, i) => (
                                    <div key={i} className={styles.subItem} onClick={handleItemClick}>
                                        <SubItem text={text.text} href={text.href} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
