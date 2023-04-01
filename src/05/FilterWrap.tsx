import React, { useState } from 'react';
import { Filter } from './components/Filter';

export type FilterType = 'all' | 'ruble' | 'dollar'

export const FilterWrap = () => {
    const [money, setMoney] = useState([
        { banknote: "dollar", nominal: 100, number: "a123456789" },
        { banknote: "dollar", nominal: 50, number: "b123456789" },
        { banknote: "ruble", nominal: 100, number: "c123456789" },
        { banknote: "dollar", nominal: 100, number: "d123456789" },
        { banknote: "dollar", nominal: 50, number: "e123456789" },
        { banknote: "ruble", nominal: 100, number: "f123456789" },
        { banknote: "dollar", nominal: 50, number: "j123456789" },
        { banknote: "ruble", nominal: 50, number: "h123456789" }
    ])

    let [filter, setFilter] = useState<FilterType>('all');

    let currentMoney = money;
    if (filter === 'ruble') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'ruble');
    }
    if (filter === 'dollar') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'dollar');
    }

    const onClickHandler = (subscr: FilterType) => {
        setFilter(subscr);
    }

    return (
        <>
            <Filter currentMoney={currentMoney}
                    onClickHandler={(filter)=> onClickHandler(filter)}
                    filter={filter} />
        </>
    )
}