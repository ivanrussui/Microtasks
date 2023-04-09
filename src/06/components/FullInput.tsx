import { ChangeEvent, useState } from 'react';

type FullInputPropsType = {
    addTitle: (title: string) => void
}

export const FullInput = (props: FullInputPropsType) => {
    let [ title, setTitle ] = useState('')

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addTitle(title)
        setTitle('')
    }

    return (
        <div>
            <input value={ title } onChange={ onChangeInputHandler } />
            <button onClick={ onClickButtonHandler }>+</button>
        </div>
    );
}