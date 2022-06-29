import './App.css';
import React from 'react';
import capybara1 from './images/capybara.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      petals: [0, 1, 2, 3, 4, 5, 6, 7],
      love:false,
    }
  }

  loveOrNot = () => {
    const length = this.state.petals.length;
    const newState = (length % 2 === 0) ? true : false;

    return this.setState({
      love: newState,
    });
  }

  handleClick = (e) => {
    e.preventDefault();

    this.setState({
      petals: this.state.petals.filter((id) => {
        return id !== parseInt(e.target.parentNode.id);
      }),
    });
    this.loveOrNot();
  }

  render() {
    return (
      <div className="App">
        <div className="heading">
          {
            this.state.petals.length === 0 ?
              'suck a d!'
              : (this.state.love ?
                'Loves me not...' :
                'Loves me...')
          }
        </div>
        <img src={capybara1} alt="meep" />
        <svg width="244px" height="302px" viewBox="0 0 244 302" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
                <path d="M223.120444,246.724259 C216.601694,240.205509 198.89935,211.936759 205.4181,205.418009 C211.93685,198.899259 240.2056,216.603165 246.72435,223.120353 C253.2431,229.639103 253.2431,240.205509 246.72435,246.724259 C240.2056,253.241446 229.638412,253.241446 223.120444,246.724259 Z" id="path-petal"></path>
            </defs>
                <g id="Artboard" transform="translate(-78.000000, -78.000000)">
                    <g id="Petal" transform="translate(0,0)" fill="#FFFFFF" fill-rule="nonzero">
                      {
                        this.state.petals.map((i) => {
                          const rotate = ( i > 3 ? `rotate(${(90*i)+45} 200 200)` : `rotate(${90*i} 200 200)`);
                          return <g id={i} transform={rotate} onClick={this.handleClick} >
                            <use fill="#FFFFFF" xlinkHref="#path-petal" className="petal"></use>
                          </g>
                        })
                      }
                    </g>
                </g>
        </svg>
        </div>
      );
  }
}


export default App;