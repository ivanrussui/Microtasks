import { Button } from './components/Button';

export const ButtonWrap = () => {

    // const myButton1 = (subscriber: string, age: number, adress: string) => {
    //     console.log(subscriber, age, adress)
    // }
    //
    // const myButton2 = (subscriber: string, age: number) => {
    //     console.log(subscriber, age)
    // }
    //
    // const myButton3 = () => {
    //     console.log('I stupid button')
    // }

    type ButtonType = {
        subscriber?: string
        age?: number
        address?: string
    }

    const myButton1 = ({ subscriber, age, address }: ButtonType) => {
        console.log(subscriber, age, address)
    }

    const myButton2 = ({ subscriber, age }: ButtonType) => {
        console.log(subscriber, age)
    }

    const myButton3 = ({}) => {
        console.log('I stupid button')
    }

    const callbackArr = [
        { type: '1', callback: myButton1 },
        { type: '2', callback: myButton2 },
        { type: '3', callback: myButton3 },
    ]

    const launchCorrectFunc = (type: string, subscriber?: string, age?: number, address?: string) => {
        const result = callbackArr.filter(t => t.type === type)[0].callback
        result({ subscriber, age, address })
    }

    return (
        <>
            <Button name={'MyYouTube-1'} callback={() => launchCorrectFunc('1', 'Vasya', 33, 'live in Moscow')} />
            <Button name={'MyYouTube-2'} callback={() => launchCorrectFunc('2', 'Nina', 22)} />
            <Button name={'MyYouTube-3'} callback={() => launchCorrectFunc('3')} />

            {/*<Button name={'MyYouTube-1'} callback={() => myButton1('Vasya', 33, 'live in Moscow')} />*/}
            {/*<Button name={'MyYouTube-2'} callback={() => myButton2('Nina', 22)} />*/}
            {/*<Button name={'MyYouTube-3'} callback={myButton3} />*/}
        </>
    )
}