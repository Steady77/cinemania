import cn from 'classnames';
import { forwardRef } from 'react';

import { IInput } from './form.interface';
import styles from './form.module.scss';

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ placeholder, error, type = 'text', style, ...rest }, ref) => {
    return (
      <>
        <div
          className={cn(styles.common, styles.field)}
          style={style}
        >
          <label>
            <span>{placeholder}</span>
            <input
              ref={ref}
              type={type}
              {...rest}
            />
          </label>
          {error && <div className={styles.error}>{error.message}</div>}
        </div>
      </>
    );
  },
);

Input.displayName = 'Input';

export default Input;
