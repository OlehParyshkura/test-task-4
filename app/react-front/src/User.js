import React, { useState, useEffect,useRef } from 'react';
import Chartjs from 'chart.js';
import Container from 'react-bootstrap/Container';


function User(props) {
  const [userStats, setUserStats] = useState([]);
  const [user, setUser] = useState([]);
  const [id,setId] = useState(undefined);
  useEffect(() => {
    console.log(props.match.params.id);
    setId(props.match.params.id)
    getUserStats(props.match.params.id);
  }, []);
  function getUserStats(id) {
    fetch('http://localhost:8080/api/users/' + id)
      .then(res => res.json())
      .then(res => { 
        setUserStats(res.stats);
        setUser(res.user) })
      .catch((err) => { console.error(err) })
  }

  const clickChartConfig = {
    type: 'line',
    data: {
      labels: userStats.map((stat)=>stat.date),
      datasets: [
        {
          label: 'Clicks',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: userStats.map((stat)=>stat.clicks)
        }
      ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
}
const viewsChartConfig = {
  type: 'line',
  data: {
    labels: userStats.map((stat)=>stat.date),
    datasets: [
      {
        label: 'Page views',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: userStats.map((stat)=>stat.page_views)
      }
    ]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
}
    const clickChartContainer = useRef(null);
    const [clickChartInstance, setClickChartInstance] = useState(null);
  
    const viewsChartContainer = useRef(null);
    const [viewsChartInstance, setViewsChartInstance] = useState(null);

    useEffect(() => {
      if (clickChartContainer && clickChartContainer.current) {
        const newClickChartInstance = new Chartjs(clickChartContainer.current, clickChartConfig);
        setClickChartInstance(newClickChartInstance);
      }
    }, [clickChartContainer,userStats]);
    
    useEffect(() => {
      if (viewsChartContainer && viewsChartContainer.current) {
        const newViewsChartInstance = new Chartjs(viewsChartContainer.current, viewsChartConfig);
        setViewsChartInstance(newViewsChartInstance);
      }
    }, [viewsChartContainer,userStats]);

  return (
    <Container>
      <h2>{user.first_name+" "+user.last_name}</h2>
      <canvas ref={clickChartContainer} />
      <canvas ref={viewsChartContainer} />
    </Container>
  );
}

export default User;