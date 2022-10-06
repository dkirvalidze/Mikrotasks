import React from "react";

type  BodyType = {
    students: StudentType[]
}

type StudentType = {
    id: number,
    name: string,
    age: number
}

export const Body = (props: BodyType) => {
    return (
        <ul>
            {props.students.map((objectFromStudentArray, index) => {
                return (
                    <li key={objectFromStudentArray.id}>
                        <span>{objectFromStudentArray.name}</span>
                        <span> age: {objectFromStudentArray.age}</span>
                    </li>
                )
            })}
        </ul>
    )
}