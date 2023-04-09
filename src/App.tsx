import React from 'react';
import './App.css';
import { Site } from './01/Site';
import { StudentsWrap } from './02/StudentsWrap';
import { ButtonWrap } from './03/ButtonWrap';
import { MyUseState } from './04/MyUseState';
import { FilterWrap } from './05/FilterWrap';
import { MyInput } from './06/MyInput';

function App() {
    return (
        <div style={ { margin: '10px' } }>
            {/*<Site />*/ }
            {/*<StudentsWrap />*/ }
            {/*<ButtonWrap />*/ }
            {/*<MyUseState />*/ }
            {/*<FilterWrap />*/ }
            <MyInput />
        </div>
    );
}

export default App;
