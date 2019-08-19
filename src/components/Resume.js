import React from 'react';
import _ from 'lodash';

/* Icons */
import { FaStar, FaStarHalfAlt} from 'react-icons/fa';


const Resume = () => (
<>
<Section id="resume" title="Resume"/>
		<div style={{
			padding:'2em',
		}}>
			<div style={{
				display:'flex',
				flexDirection:'column',
				margin:'1em 0'
			}}>
				<h3 style={{padding:0}}>Jan Iverson Eligio</h3>
				<p style={{padding:0}}>Honolulu, HI</p>
				<p style={{padding:0}}>jeligio808@gmail.com</p>
			</div>
			<div style={{
				margin:'1em 0'
			}}>
				<h4 style={{margin:0}}>Education</h4>
				<p style={{padding:0}}>University of Hawaii at Manoa, Spring 2020</p>
			</div>
			<div style={{
				margin:'1em 0'
			}}>
				<h4 style={{marginBottom:0}}>Skills</h4>
				<div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
				{ <RatingTable data={[
					{name: "JavaScript/ES6", rating: 4},
					{name: "React", rating: 4},
					{name: "HTML", rating: 3},
					{name: "CSS", rating: 3},
				]}/>
				}
				{ <RatingTable data={[

					{name: "Git", rating: 2},
					{name: "Java", rating: 2},
					{name: "C", rating: 2.5},
					{name: "C++", rating: 1}
				]}/>
				}
				</div>
			</div>
			<div style={{
				margin:'1em 0'
			}}>
			</div>
		</div>
</>
);

const Section = ({id, title, content}) => (
    <div id={ id } className="grid">
      <div className="content-wrap">
          <h2 className="content-title">{ title }</h2>
          { content }
      </div>
    </div>
);

const RatingTable = ({data}) => {
return (
  <table style={{width:'40%'}}>
	  <tbody>
      {
      data.map(skill => {
          const isFloat = skill.rating % 1 !== 0;
          let stars = _.times(Math.trunc(skill.rating), 1);
          return (
              <tr key={skill.name}>
                  <td>
					  {skill.name}
					  <div>                  
					  {
						  stars.map((star, index) => <FaStar key={index} color="gold" size=".8em" />)
					  }
					  {isFloat && <FaStarHalfAlt size=".8em" color="gold"/>}	
					  </div>
				  </td>
              </tr>
              );
      })
	  }
	  </tbody>
  </table>
);
};

export default Resume;