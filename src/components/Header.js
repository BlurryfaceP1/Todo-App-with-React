import React from 'react';
import styled from 'styled-components'

const Nav = styled.div`
background-color:rgb(0,0,255);
    opacity:0.6;
    color: white;
    position: center;
    padding: 10px;
    
`;

const Title = styled.h3`
    opacity: 0.9
    
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