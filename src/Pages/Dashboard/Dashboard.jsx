import React from 'react';
import { StatsData } from '../Models/StaticStatsData';
import CardStatistik from '../../Components/CardStatistic/CardStatistik';
import './Dashboard.css';
import PageTitle from '../../Components/PageTitle/PageTitle';
import RechartDashboard from '../../Components/Charts/RechartDashboard';
import CardSessionToday from "../../Components/CardSessionToday/CardSessionToday";
import {useSelector} from "react-redux"

function Dashboard(props) {
    const username = useSelector((state) => state.auth.username)

    return (
        <div className='page-wrapper'>
            <PageTitle title="Dashboard"/>
            <div className="stats-wrapper mx-auto row">
                {
                    StatsData.map((item, idx) => (
                        <CardStatistik
                            key={idx}
                            data={item}
                            id={idx}
                        />
                    ))
                }
            </div>
            <div className="row px-3 sec-2-dash">
                <div className="col-lg-8">
                    <RechartDashboard/>
                </div>
                <div className="col-lg-4"><CardSessionToday/></div>
            </div>
        </div>
    );
}

export default Dashboard;