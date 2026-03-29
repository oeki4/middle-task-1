import type { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Button.module.less'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'yellow'
}

export const Button = (props: ButtonProps) => {
  const { className, children, variant = 'primary', ...otherProps } = props

  return (
    <button
      className={clsx(styles.button, variant && styles[`button_${variant}`], className)}
      {...otherProps}
    >
      {children}
    </button>
  )
}
