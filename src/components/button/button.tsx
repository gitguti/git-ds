import styles from './button.module.scss'
type ButtonProps = Readonly<{
    children: string
}>;

export const Button = (props: ButtonProps) => {
    <button className={styles.button}>{props.children}</button>
}