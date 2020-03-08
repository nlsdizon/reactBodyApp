import React, { Component } from 'react';
import Link from 'next/link';

const linkStyle = {
    marginRight: 15
  };

class Header extends Component
{
    render()
    {
        return(
            <div>
                <Link href="/">
                    <a style={linkStyle}>Home</a>
                </Link>
                <Link href="/personal">
                    <a style={linkStyle}>Personal Info</a>
                </Link>
            </div>
        );
    }
}

export default Header;