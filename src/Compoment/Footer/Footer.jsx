import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
const Footer = () => {
    return (
        <>
            <footer classname="Container" style={{
                backgroundColor: 'black',
                margin: '2em',
                display: 'block',
                boxSizing: 'inherit',
                padding: '1%',
                marginTop: '100px',
                left: '0',
                bottom: '0',
                right: '0',
            }}>
                <div classname="Row">
                    <div classname="Col Col--11 Col--sm-9 Col--sMd-8 Col--md-6 Col--lg-5 Col--xl-4 Col--xxl-3">
                        <div style={{ display: "flex", border: "0", margin: "0" }}>
                            <img width="70px" src="https://i.ibb.co/K9NfKFW/wired-gradient-62-film.png" alt="wired-gradient-62-film" border="0" />
                            <Link to="/"><Button><h3>MOVIE WORLD</h3></Button></Link>
                        </div>
                        <hr style={{ width: '30%', color: '#fff', float: 'left', opacity: '.1' }} />
                        <div style={{
                            fontSize: '11px',
                            // fontWeight: '700',
                            lineHeight: '16px',
                            letterSpacing: '.5px',
                            color: '#707c86',
                            marginTop: '21px'
                        }}>
                            <div classname="_2gH8FsQuGR">
                                <h4>Copyright © {new Date().getFullYear()} Tubi, Inc.</h4> </div>
                            <div>
                                <h5>Tubi is a registered trademark of Tubi, Inc. All rights reserved.</h5> </div></div>
                    </div></div>
            </footer>
        </>
    )
}

export default Footer