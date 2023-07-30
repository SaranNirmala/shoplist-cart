import React from "react";

const Content = () => {
    return (
        <div>
            <div style={{
                height: 300,
                width: '100%',
                backgroundColor: 'rgb(33,37,41)',
                display: 'flex',
                flexWrap: 'wrap',
                alignContent: 'center',
                justifyContent: 'center',
            }}>
                <div className='text-center text white' style={{
                    display: 'flex',
                    height: '150px',
                    width: '400px',
                    flexDirection: 'column',
                    color: 'white',
                    alignContent: 'center',
                    justifyContent: 'center',

                }} >
                    <h1 className='head' style={{
                        fontSize: 58,

                    }}>Shop in style</h1>

                    <p className='text-para' style={{
                        fontSize: 21,
                        fontStyle: 'normal',
                        color: 'rgb(144,146,134)',
                    }}>
                        With this shop homepage template
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Content;