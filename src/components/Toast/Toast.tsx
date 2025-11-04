import { useEffect, useState } from 'react';
import style from './Toast.module.css';

type ToastProps = {
  type: 'info' | 'success' | 'error';
  message: string;
  duration: number;
  closable: boolean;
};

export default function Toast({
  type = 'info',
  message,
  duration,
  closable,
}: ToastProps) {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setShowToast(true);
    const timer = setTimeout(() => {
      setShowToast(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const handlClick = () => {
    setShowToast(false);
  };

  return (
    showToast && (
      <div
        className={`${style.toastContainet} ${style[type]} ${
          showToast ? style.show : ''
        }`}
      >
        <p className={style.toastText}>{message}</p>

        {closable && (
          <button className={style.closeBtn} onClick={handlClick} title="Close">
            <svg className={style.closeIcon} width="20" height="20">
              <use href={`${import.meta.env.BASE_URL}sprite.svg#icon-close`} />
            </svg>
          </button>
        )}
      </div>
    )
  );
}
