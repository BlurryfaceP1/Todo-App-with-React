import React from 'react';
import styled from 'styled-components'

const Info = styled.div`
    background-color:background-color: #000000;
    background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);
    // opacity:0.6;
    color: white;
    position: absolute;
    left: 0;
    bottom: 0;
    width:100%
    padding-block: 1rem;
    
`;

const Name = styled.h3`

    opacity: 0.9
    font-size: 1em;
    height: 2em;
    width: 10em;
    margin-left: 180%;
    font-weight: 300;
    text-align: center;
    
`
const Pratham =styled.div`
    
    font-weight: bold;
    font-size: 1em;
`; 

const Footer = () => {
    return(
        <footer data-testid="navbar">
            <Info>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <Name data-testid="logo-text">App by <Pratham>Prathmesh Wavhal</Pratham></Name>
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