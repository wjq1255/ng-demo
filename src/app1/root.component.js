import React from 'react';
import Subone from './Subone.component.js';
import Subtwo from './Subtwo.component.js';

export default class Root extends React.Component {

    constructor(props){
        super(props);//第一步，这是必须的
        //不能调用state
        this.state = {//第二步，赋初始值
            route:window.location.hash.substr(1)
        };

        
    }

    componentDidMount() {
    	window.addEventListener("hashchange", ()=>{
    			this.setState({
                route: window.location.hash.substr(1)
            })
    		}, false);
    }

    render() {

    	let Child
        switch (this.state.route) {
          case '/subone': Child = Subone; break;
          case '/subtwo': Child = Subtwo; break;
          default:      Child = Subone;
        }
        return (
	      <div style={{margin: '20px'}}>
	        <p>使用React框架的子系统.</p>
					<ul>
	          <li><a href="#/subone">菜单1</a></li>
	          <li><a href="#/subtwo">菜单2</a></li>
	        </ul>
	        <Child/>
	      </div>

    	);
  	}
}
