import { Students } from './components/Students';

const students = [
    { id: 1, name: 'Ivan', age: 23 },
    { id: 2, name: 'Anna', age: 22 },
    { id: 3, name: 'Melissa', age: 32 },
    { id: 4, name: 'Zzz', age: 30 },
]

export const StudentsWrap = () => {
    return (
        <Students students={students} />
    )
}