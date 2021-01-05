import React from 'react';

const Skills = () => {

    const DATA = [ 
        { skill: 'JavaScript/ES6', rating: 10 },
        { skill: 'React', rating: 7 },
        { skill: 'Git', rating: 5 },
        { skill: 'HTML', rating: 6 },
        { skill: 'CSS', rating: 4 },
        { skill: 'Java', rating: 3 },
        { skill: 'C/C++', rating: 2 },        
    ]
    return (
        <table style={{border:'1px solid black', width:'75%'}}>
            <thead>
                <tr>
                    <th>Skill</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                { DATA.map(o => {
                    return (
                        <tr key={Math.random()}>
                            <td>{o.skill}</td>
                            <td>{o.rating}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Skills;