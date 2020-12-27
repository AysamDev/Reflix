
import '../style/Landing.css';
import { Component } from 'react';
import {Link } from 'react-router-dom'
class Landing extends Component {
  render()
  {
      let users = this.props.users
    return (
    
            <div>
            <div className="title">Who's Watching?</div>
            <div className='Users'>
            {
            users.map(u => 
                {
                    let backColor = u.color
                    return(
                        <Link to={`./catalog/${u.name}`}>
                            <div className='user' style={{background: `${backColor}` }} >
                                <div>
                                    <span>{u.name}</span>
                                </div>
                            </div>
                            </Link>
                        )
                }
                )
        }
        </div>
        </div>
   
    );
  }

}

export default Landing;
