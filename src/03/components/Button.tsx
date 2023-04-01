type buttonType = {
    name: string
    callback: () => void
}

export const Button = (props: buttonType) => {
    const buttonHandler = () => {
        return (
            props.callback()
        )
    }

    return (
        <button onClick={buttonHandler}>{props.name}</button>
    );
}