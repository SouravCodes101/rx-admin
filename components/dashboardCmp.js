import React from 'react';
import {FlexboxGrid, Breadcrumb} from 'rsuite';
import Link from 'next/link'

class DashboardCmp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <div className={"padding-container"}>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link href="/dashboard">Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
                    </Breadcrumb>
                    <FlexboxGrid justify="center">
                        <FlexboxGrid.Item>
                            DASHBOARD
                        </FlexboxGrid.Item>
                    </FlexboxGrid>
                </div>
            </React.Fragment>
        )
    }
}
export default DashboardCmp;




