import { Line } from 'react-chartjs-2'
import { chart, options } from 'src/modules/Share/constants/chart'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const LineChart = () => {
  return (
    <div>
      <Line options={options} data={chart} />
    </div>
  )
}

export default LineChart
