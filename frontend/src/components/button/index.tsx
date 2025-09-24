
import type { ButtonProps } from './index.d';

import './index.css';

const Button = (props: ButtonProps) => {
  const { children, className, ...rest } = props;

  return <button className={`text-center ${className}`} {...rest}>{children}</button>
}

const PrimaryButton = (props: ButtonProps) => {
  const { children, className, ...rest } = props;

  return <Button className={`primary-button ${className}`} {...rest}>{children}</Button>  
}

const SecondaryButton = (props: ButtonProps) => {
  const { children, className, ...rest } = props;

  return <Button className={`secondary-button ${className}`} {...rest}>{children}</Button>  
}

export { PrimaryButton, SecondaryButton };

export default Button;