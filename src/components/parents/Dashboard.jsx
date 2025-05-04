import React from "react";
import SampleRow from "../enfants/SampleRow";
import StatusBadge from "../enfants/StatusBadge";
import NavBar from "./Navbar";

const Dashboard = () => {
    return (
        <>
            <div>
                <NavBar/>
            </div>
            {/* <div>This is my first Dashboard</div> */}

            <div>
                <StatusBadge/>
                <SampleRow/>
            </div>
        </>
    )
}
export default Dashboard;