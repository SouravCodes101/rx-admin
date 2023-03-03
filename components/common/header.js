import React from 'react';
import Navbar from 'rsuite/Navbar';
import Image from 'next/image'
import utility from "../../util/utility";
import SuperAdminMenu from "./menu/superAdminMenu";

class Header extends React.Component {
    async componentDidMount() {
        let session=await utility.fetchSession();
        console.log("session",session);
        let roles=[];
        for(let item of session.roles){
            roles.push(item.role.name);
        }
        this.setState({session:session,roles:roles});
    }
    constructor(props) {
        super(props);
        this.state = {
            session:null,
            roles:[]
        }
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <Navbar>
                        <Navbar.Brand>
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                width={30}
                                height={30}
                            />
                        </Navbar.Brand>
                        {this.state.roles.includes("SUPER_ADMIN") &&
                            <SuperAdminMenu/>
                        }
                    </Navbar>
                </div>
            </React.Fragment>
        )
    }
}

export default Header;




