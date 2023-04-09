import { useState } from 'react';
import { FullInput } from './components/FullInput';
import { Input } from './components/Input';
import { Button } from './components/Button';

export const MyInput = () => {
    let [ message, setMessage ] = useState([
        { message: 'message1' },
        { message: 'message2' },
        { message: 'message3' },
    ])

    let [ title, setTitle ] = useState('')

    const addTitle = (title: string) => {
        if (title !== '') {
            let newMessages = [ { message: title }, ...message ]
            setMessage(newMessages)
        }
    }

    const callBackButtonHandler = () => {
        addTitle(title)
        setTitle('')
    }



    return (
        <>
            {/*<FullInput addTitle={ addTitle } />*/}
            <Input title={title} setTitle={setTitle} />
            <Button name={'+'} callBack={callBackButtonHandler} />
            { message.map((el, index) => {
                return (
                    <div key={ index }>{ el.message }</div>
                )
            }) }
        </>
    )
}