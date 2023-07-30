import React from "react";

const Footer = () => {
    return (
        <div>
            <div className="footer" style={{
                backgroundColor: 'black',
                height: '100px',
                width: '100%',
                marginTop: '100px',
                color: 'white',
                textAlign: 'center',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <h6>Copyright 	&copy; Your Website 2023</h6>
            </div>
        </div>
    )
}

export default Footer;