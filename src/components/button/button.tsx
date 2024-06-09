import styles from './button.module.scss'

type ButtonProps = Readonly<{
    children?: React.ReactNode
}>;

export const Button = (props: ButtonProps) => {
    return(<button className={styles.button}>{props.children}</button>)
}