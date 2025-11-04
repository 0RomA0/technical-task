import { useState } from 'react';
import style from './Input.module.css';

type InputProps = {
  name: string;
  type: 'text' | 'password' | 'number';
  placeholder: string;
};

export default function Input({ type, name, placeholder }: InputProps) {
  const [eyeOpen, setEyeOpen] = useState(false);
  const [value, setValue] = useState('');

  const typePassword = type === 'password';
  const inputType = typePassword && eyeOpen ? 'text' : type;

  const handleClick = () => {
    setValue('');
  };

  return (
    <div className={style.inputContainer}>
      <input
        name={name}
        className={style.inputPassword}
        type={inputType}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />

      {typePassword ? (
        <button
          type="button"
          className={style.eyeBtn}
          onClick={() => setEyeOpen(!eyeOpen)}
        >
          <svg className={style.eyeIcon} width="20" height="20">
            <use
              href={`${import.meta.env.BASE_URL}sprite.svg#${
                eyeOpen ? 'icon-eye-on' : 'icon-eye-off'
              }`}
            />
          </svg>
        </button>
      ) : (
        <button type="button" className={style.closeBtn} onClick={handleClick}>
          <svg className={style.closeIcon} width="20" height="20">
            <use href={`${import.meta.env.BASE_URL}sprite.svg#icon-close`} />
          </svg>
        </button>
      )}
    </div>
  );
}
