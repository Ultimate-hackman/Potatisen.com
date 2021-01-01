import stressPT from '../lib/kalendar/stressPT'
import { Line } from 'react-chartjs-2'
import 'react-chartjs-2'



export default function classChart(props) {
     let y = stressPT(props.ugg, props.language)
    let x = y[1]

    return <Line
    height={200} 
    width={600}
    options={{
        matainAspectRatio: false,
        responsive: true,
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        },
        legend: {
            labels: {
                fontSize: 20,
                fontColor: 'black',

            }
        },
        layout: {
            padding: {
                width: '50%'
            }
        }
    }} 
    data={{
        labels: x,
        datasets: [{
            lineTension: 0,
            label: 'Stress tydligen inte över tid must fix',
            data: y[0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1

        }]
    }}
    />
}