import React from 'react';
import styled from 'styled-components'

const Info = styled.div`
background-color:rgb(0,0,255);
    opacity:0.6;
    color: white;
    position: Fixed;
    left: 0;
    bottom: 0;
    width:100%
    
`;

const Name = styled.h3`
    display:flex;
    justify-content:center;
    align-items:center;   
    opacity: 0.9
    font-size: 15px
    height: 50px;
    width: 100%;
    font-weight: 300;
    
`

const Footer = () => {
    return(
        <footer data-testid="navbar">
            <Info>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <Name data-testid="logo-text">An attempt by Prathmesh Wavhal</Name>
                        </div>
                        <div className="col-9">

                        </div>
                    </div>
                </div>
            </Info>
        </footer>
    )
};

export default Footer