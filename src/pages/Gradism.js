import React from 'react';

class Gradism extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gradient:'',
      colors:[
        {
          position:0,
          code:'#9d2b97'
        },
        {
          position:50,
          code:'#801f7b'
        },
        {
          position:100,
          code:'#52134e'
        }
      ]
    };

    // ref
    this.textRef = React.createRef(null);

  }

  copyText = () => {
    // get the linear gradient
    console.log(this.textRef.current.innerText);
    let text = this.textRef.current.innerText;

    navigator.clipboard.writeText(text);
    alert("Text copied");
  }

  changeHandler = (event, index) => {
    // get current state
    const { colors } = this.state;
    let color = colors[index];

    // 
    let target = event.target;
    let { name, value } = target;
    color[name] = value;

    // update the color index
    colors[index] = color;

    // update state
    this.setState({
      colors
    });

  }

  removeColor = (index) => {
    // get colors
    const { colors } = this.state;

    // remove the color
    colors.splice(index, 1);

    this.setState({
      colors
    });

  }

  renderItem = (colors) => {
    return colors.map((color, index) => {
      return (
        <div className="d-flex item" key={index}>
            <input type="number" name="position" className="position" value={color.position} onChange={event => this.changeHandler(event, index)}/>
            <input type="text" name="code" className="color-code" value={color.code} onChange={event => this.changeHandler(event, index)}/>
            <span className="close-btn" onClick={() => this.removeColor(index)}>&times;</span>
        </div>
      );
    });

  }

  render() {
    const { colors } = this.state;

    console.log(colors);
    const gradient = colors.map(color => {
      return `${color.code} ${color.position}%`;
    }).join(", ");

    console.log(gradient);

    return (
      <div className="">
        <div className="navbar">
          <h5>GRADISM</h5>

          <div>
            &#9776;
          </div>
        </div>

        <div className="main">
          <div 
            className="gradient-picker"
            style={{
              background: "linear-gradient(90deg, "+ gradient +")"
            }}
            >
          </div>

          <div className="input-section">
            {this.renderItem(colors)}
          </div>

          <div className="clipboard">
            <div className="clip" ref={this.textRef}>
              background:<br></br>
                linear-gradient(<br></br>
                  90deg,<br></br>
                  {gradient}
                )
            </div>
            <button className="btn" onClick={this.copyText}>&#x1F4CB;</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Gradism;
