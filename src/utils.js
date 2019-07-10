export let defaultStateValues = {
    metricValues:[],
    open:false,
    selectedValue:'',
    options: {
      dataLabels: {enabled: false},
      stroke: {curve: 'smooth'},
      xaxis: {
        type: 'datetime',
        categories: [
            "2018-09-19T01:00:00", "2018-09-19T02:30:00",
            "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00",
            "2018-09-19T09:30:00"
        ],
      },
      tooltip: {
        x: {format: 'dd/MM/yy HH:mm'},
      }
    },
    series: [{
      name: 'series2',
      data:[32, 45, 32, 34, 52, 41]
    }],
  }