import React from 'react'
import {Istate as Iprops} from '../App'


const List:React.FC<Iprops>=({people})=>{

    const renderList=():JSX.Element[]=>{
        return people.map(person=>{
            return (<li className="List">
             <div className="List-heder">
                 <img className="List-img" src={person.url}/>
                 <h2>{person.name}</h2>
             </div>
             <p>{person.age}years old</p>
             <p className="List-note">{person.notes}</p>
            </li>)
        })
    }

    return (
        <ul>
           {renderList()}
        </ul>
    )
}

export default List
