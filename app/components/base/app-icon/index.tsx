import type { FC } from 'react';
import classNames from 'classnames';
import style from './style.module.css';

export type AppIconProps = {
  size?: 'xs' | 'tiny' | 'small' | 'medium' | 'large';
  rounded?: boolean;
  background?: string;
  className?: string;
};

const AppIcon: FC<AppIconProps> = ({
  size = 'medium',
  rounded = false,
  background,
  className,
}) => {
  return (
    <span
      className={classNames(
        style.appIcon,
        size !== 'medium' && style[size],
        rounded && style.rounded,
        className ?? '',
      )}
      style={{
        background,
      }}
    >
      {/* Replace the emoji with an image from the public folder */}
      <img
        src="/nigeria-flag.png"
        alt="App Icon"
        className={style.iconImage} // Add a class for styling the image
      />
    </span>
  );
};

export default AppIcon;