import styles from '../../styles/components/input.module.css';

const Input = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  name,
  id,
  className = '',
  ...rest
}) => {
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
