import React, { Component } from 'react'
import "./nav.css";
import logo from "../../images/profile_pic.png";

export default class Nav extends Component {
    render() {
        return (
            <div className='nav'>

                <div className='nav_blocks'><div className='cre'>cre</div><div className='A'>A</div><div className='R'>R</div><div className='T'>T</div><div className='e'>e</div></div>
                {/* <div className='nav_blocks'></div> */}
                <div className='nav_blocks1'>
                    {/* <img src='https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg' className='profilePic'></img> */}
                    {/* <img src={logo} alt="amaan" className="profilePic"></img> */}
                    {/* <a href='/' className='img_button'><img src={logo} alt="amaan" className="profilePic"></img></a> */}
                </div>
            </div>
        )
    }
}