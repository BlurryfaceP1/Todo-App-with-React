import React from 'react';
import styled from 'styled-components'

const Nav = styled.div`
    background-color:background-color: #000000;
    background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);
    // opacity:0.6; 
    color: white;
    text-align: center;
    width:100%;
    padding-block: 1rem;
    
`;

const Title = styled.h3`
    opacity: 0.9;
    margin-left: 165%;
    width: 8em;
    text-align: center;
    
    
`

const Header = () => {
    return(
        <header data-testid="navbar">
            <Nav>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <Title data-testid="logo-text">Todo-App</Title>
                        </div>
                        <div className="col-9">

                        </div>
                    </div>
                </div>
            </Nav>
        </header>
    )
};

export default Header