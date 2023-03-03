import React from 'react';
import { ToastContainer } from 'react-toastify';

class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>{process.env.AUTHAPIHOST}</div>
                <ToastContainer />
            </React.Fragment>
        )
    }
}

export default Footer;




