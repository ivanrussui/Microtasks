import { FilterType } from '../FilterWrap';

export type PropsType = {
    currentMoney: Array<CurrentMoneyType>
    filter: FilterType
    onClickHandler: (filter: FilterType) => void
}

type CurrentMoneyType = {
    banknote: string
    nominal: number
    number: string
}

export const Filter = (props: PropsType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{ marginLeft: '20px' }}>
                <button onClick={() => props.onClickHandler('all')}>ALL</button>
                <button onClick={() => props.onClickHandler('ruble')}>RUBLES</button>
                <button onClick={() => props.onClickHandler('dollar')}>DOLLARS</button>
            </div>
        </>
    )
}