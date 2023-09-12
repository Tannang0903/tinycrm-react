export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'Deals won per month'
    }
  }
}

export const chart = {
  labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
  datasets: [
    {
      label: 'React',
      data: [32, 42, 51, 60, 51, 95, 90],
      backgroundColor: '#2196F3',
      borderColor: '#2196F3'
    },
    {
      label: 'Angular',
      data: [37, 42, 41, 37, 31, 44, 50],
      backgroundColor: '#F44236',
      borderColor: '#F44236'
    },
    {
      label: 'Vue',
      data: [60, 54, 54, 28, 27, 49, 36],
      backgroundColor: '#FFCA29',
      borderColor: '#FFCA29'
    }
  ]
}
