import stressPT from '../lib/kalendar/stressPT'
import { Bar } from 'react-chartjs-2'
import 'react-chartjs-2'
export default function chartGen(props) {
    return <Bar 
    height={200} 
    width={600}
    options={{
        matainAspectRatio: true,
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
                // This more specific font property overrides the global property
                fontSize: 20,
                fontColor: 'black',
                fontFamily: 'Helvetica'	
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
            data: [stressPT("O91", props.language), stressPT("O92", props.language), stressPT("O93", props.language)],
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