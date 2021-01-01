import stressPT from '../lib/kalendar/stressPT'
import { Bar } from 'react-chartjs-2'
import 'react-chartjs-2'
import mainTime from '../lib/time/mainTime'
export default function classChart(props) {
    let day = mainTime().getDate()
    return <Bar 
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
        labels:['O91', 'O92', '093'],
        datasets: [{
            label: 'Klasser',
            data: [stressPT("O91", props.language, day)[1], stressPT("O92", props.language, day)[1], stressPT("O93", props.language, day)[1]],
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