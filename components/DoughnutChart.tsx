'use client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [100, 200, 300, 400],
                backgroundColor: ['#0747b6', '#2265d8', '#2791fa', '#0765fa']
            }
        ],
        labels: ['Bank1', 'Bank numro 2', 'Bank3', 'Bank char']
    }
  return <Doughnut 
    data={data} 
    options={{
        cutout: '40%',
        plugins: {
            legend: {
                display: false
            }
        }
    }}
    />
}

export default DoughnutChart