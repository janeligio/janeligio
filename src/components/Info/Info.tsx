import React from 'react';
import './Info.css';

export default function Info() {
    return(
    <section className="info">
        <div className="jan-info">
            <LoadingText text="I'm Jan and I'm probably a programmer."/>
        </div>
    </section>
    );
}

interface LoadingTextProps {
    text: string
  }

function LoadingText(props:LoadingTextProps) {
    const text = props.text.split('');
    const [renderedText, setRenderedText] = React.useState([text[0]]);
    const [curr,setCurr] = React.useState(1);
    React.useEffect(() => {
      let startInterval = setInterval(() => {
        const pass = Math.floor(Math.random() * 2);
        if(pass === 0) {
          if(curr >= text.length) {
            clearInterval(startInterval);
          } else {
            setRenderedText([...renderedText, text[curr]]);
            setCurr(curr+1);
          }
        }
  
  
      }, 40);
      return () => {
        // console.log(`Clearing interval: ${startInterval}`);
        clearInterval(startInterval);
      }
    })
  
    return (<p className="loading-text">{renderedText}</p>);
  }