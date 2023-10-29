import React from 'react'

export default function List() {
    const to_do = [
        {
            title: 'Tarefa um',
            time: '01:00:00'
        },
        {
            title: 'Tarefa dois',
            time: '01:30:00'
        },
        {
            title: 'Tarefa Três',
            time: '01:50:00'
        }
    ];

    const listItems = to_do.map((item, index) => {
        return (
            <li key={index}>
                <h3>{item.title}</h3>
                <aside>{item.time}</aside>
            </li>
        )
    })

    return (
        <aside>
            <h2>Estudos do dia</h2>
            <ul>
                {listItems}
            </ul>
        </aside>
    )
}
