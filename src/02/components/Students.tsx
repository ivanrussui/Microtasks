type NewComponentType = {
    students: Array<StudentType>
}

type StudentType = {
    id: number
    name: string
    age: number
}

export const Students = (props: NewComponentType) => {
    const topCars = [
        { manufacturer: 'BMW', model: 'm5cs' },
        { manufacturer: 'Mercedes', model: 'e63s' },
        { manufacturer: 'Audi', model: 'rs6' }
    ]

    return (
        <>
            <ul>
                {props.students.map((element, index) => {
                    return (
                        <li key={element.id}>Student: {element.name}, age: {element.age} </li>
                    );
                })}
            </ul>
            <table>
                <tr>
                    {topCars.map((element, index) => {
                        return (
                            <th key={index}>{++index}</th>
                        )
                    })}
                </tr>
                <tr>
                    {topCars.map((element, index) => {
                        return (
                            <td key={index}>{element.manufacturer}</td>
                        )
                    })}
                </tr>
                <tr>
                    {topCars.map((el, i) => {
                        return <td key={i}>{el.model}</td>
                    })}
                </tr>
            </table>
        </>
    );
}