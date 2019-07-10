import axios from 'axios';

export const MetricsQuery = `{getMetrics}`;

export const MultipleMeasurementsQuery = `query ($input: [MeasurementQuery]) {
  getMultipleMeasurements(input:$input) {
      metric
      measurements {
          at
          value
          metric
          unit
          }   
  }
}`

export const GraphqlApiClient = (query,variables) => {
    return axios({
        url: 'https://react.eogresources.com/graphql',
        method: 'post',
        data: {query,variables},
        headers: {
              'Content-Type': 'application/json'
        }
      })
}


