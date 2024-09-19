import { useState } from 'react';
import styles from '../../styles/components/input.module.css';
import Text from '../Text';
import { useApiContext } from '@/context/wrappers/ContextProvider';
import useResponsive from '@/hooks/useResponsive';
import Image from 'next/image';
import ItemUploaded from './ItemUploaded';

const Input = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  name,
  id,
  className = '',
  options = [],
  handleDelete,
  ...rest
}) => {

  const { t } = useApiContext();
  const isResponsive = useResponsive(768);

  const uploadTitle = {
    text: placeholder,
    tag: "p",
    font: "poppinsRegular",
    size: isResponsive ? 14 : 20,
    color: 'blackBase',
  };

  const dragAndDropText = {
    text: 'Arrastra y suelta o',
    tag: "p",
    font: "poppinsMedium",
    size: isResponsive ? 12 : 16,
    color: 'blackBase',
  };

  const selectDocumentText = {
    text: 'selecciona tus documentos',
    tag: "p",
    font: "poppinsMedium",
    size: isResponsive ? 12 : 16,
    color: 'blueLink',
  };

  const extensionsText = {
    text: 'PDF, JPG o PNG',
    tag: "p",
    font: "poppinsRegular",
    size: isResponsive ? 10 : 12,
    color: 'blackCaption',
  };

  if (type === 'file') {
    return (
      <>
        <div className={styles.filePlaceholder}><Text text={uploadTitle} /></div>
        <div className={styles.fileInputContainer}>
          <label className={styles.fileLabel} htmlFor={id}>
            <input
              type="file"
              onChange={onChange}
              name={name}
              id={id}
              className={styles.fileInput}
              {...rest}
            />
            <div className={styles.fileText1}>
              <Image
                src="/images/components/input/upload.svg"
                alt="Upload File"
                width={32}
                height={32}
                priority
              />
            </div>
            <div><Text text={dragAndDropText} className={styles.fileText1} /></div>
            <div><Text text={selectDocumentText} className={styles.fileText2} /></div>
            <div><Text text={extensionsText} className={styles.fileText3} /></div>
          </label>
        </div>
        {value && value?.length > 0 ?
          <ul>
            {value?.map((file, index) => (
              <ItemUploaded
                handleDelete={handleDelete}
                key={index}
                text={file.name}
                index={index}
                name={name}
              />
            ))}
          </ul> : null
        }
      </>
    );
  }

  if (type === 'select') {
    return (
      <div>
        <select
          value={value}
          onChange={onChange}
          name={name}
          id={id}
          className={`${className} ${styles.input}`}
          {...rest}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.label}>
              {option.value}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        className={`${className} ${styles.input}`}
        {...rest}
      />
    </div>
  );
};

export default Input;
