import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Sounds = [
  {
    name  : 'Heater-1',
    keyID : 'Q',
    url   : 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    name  : 'Heater-2',
    keyID : 'W',
    url   : 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    name  : 'Heater-3',
    keyID : 'E',
    url   : 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    name  : 'Heater-4_1',
    keyID : 'A',
    url   : 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    name  : 'Heater-6',
    keyID : 'S',
    url   : 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    name  : 'Dsc_Oh',
    keyID : 'D',
    url   : 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    name  : 'Kick_n_Hat',
    keyID : 'Z',
    url   : 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    name  : 'RP4_KICK_1',
    keyID : 'X',
    url   : 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    name  : 'Cev_H2',
    keyID : 'C',
    url   : 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const CssStyle = {
  color: "cyan",
  boxShadow: "2px 2px 8px cyan,\
              -2px -2px 8px cyan,\
              2px -2px 8px cyan,\
              -2px 2px 8px cyan"
}
              
const Pad = () => ( 
  <div className='container' id='drum-machine'>
    <div className='left'>
      <h1>Tap Pad</h1>
      <h3>a machine drum modern</h3>
      <p>Created By: Naufal Zaul</p>
    </div>
    <div className='middle'>
      <h1 className='display' id='display'></h1>
      <div className='pad-box'>
        <App/>
      </div>
    </div>
    <div className='right'>
      <i class="fas fa-drum"></i>
      <i class="fas fa-guitar"></i> 
      <i class="fas fa-play"></i>
      <i class="fas fa-volume-up"></i>
      <i class="fas fa-microphone-alt"></i>
      <i class="fas fa-headphones-alt"></i>
    </div>
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = CssStyle;
  }
  
  playSounds = (e) => {
    const targetValue = e.target.firstChild.nextSibling.lastChild.nodeValue;
    document.querySelector('.display').innerText = targetValue;
    console.log(e.target.lastChild.id)
    
    if(e.target) {
      e.target.lastChild.play()
      e.target.style.color = this.state.color;
      e.target.style.boxShadow = this.state.boxShadow;

      if(e.target.lastChild.id == "Q" || e.target.lastChild.id == "W" || e.target.lastChild.id == "A"){
        e.target.style.backgroundColor = 'pink';
      }else if(e.target.lastChild.id == "S" || e.target.lastChild.id == "X" || e.target.lastChild.id == "Z"){
        e.target.style.backgroundColor = 'greenyellow';
      } else {
        e.target.style.backgroundColor = 'yellow';
      }
      
      setTimeout(function() {
        e.target.style.color = "black";
        e.target.style.backgroundColor = "rgb(170, 162, 162)";
        e.target.style.boxShadow = "none";
      }, 150)
    }
  }
  
  render() {
    return (
      Sounds.map((Sounds) => (
        <div 
          className='drum-pad' 
          id='display' 
          onClick={this.playSounds}>
          
          {Sounds.keyID}
          
          <h1 style={{display:'none'}}>{Sounds.name}</h1>   
          
          <audio
            className="clip" 
            src={Sounds.url}
            id={Sounds.keyID}/>
        </div>
      ))
    )
  }  
}


document.addEventListener('keydown', (e) => {
  const theId = e.key.toUpperCase();
  const docID = document.getElementById(theId);
  const stylist = CssStyle;
  const targetValue = docID.parentElement.firstChild.nextSibling.lastChild.nodeValue;

  
  if(docID) {
    document.querySelector('.display').innerText = targetValue;
    console.log(docID.id)
    
    docID.play();
    docID.parentElement.style.color = stylist.color;
    docID.parentElement.style.boxShadow = stylist.boxShadow;

    if(docID.id == "Q" || docID.id == "W" || docID.id == "A"){
      docID.parentElement.style.backgroundColor = 'pink';
    }else if(docID.id == "S" || docID.id == "X" || docID.id == "Z"){
      docID.parentElement.style.backgroundColor = 'greenyellow';
    } else {
      docID.parentElement.style.backgroundColor = 'yellow';
    }
    
    setTimeout(function() {
        docID.parentElement.style.color = "black";
        docID.parentElement.style.backgroundColor = "rgb(170, 162, 162)";
        docID.parentElement.style.boxShadow = "none";   
    }, 150)
  }
})


ReactDOM.render(<Pad/>,document.getElementById('root'));
