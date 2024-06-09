type ButtonProps = Readonly<{
    children: string
}>;

export const Button = (props: ButtonProps) => {
    <button>{props.children}</button>
}