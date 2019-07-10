import React from 'react';
import Chart from 'react-apexcharts';
import moment from 'moment';
import { MetricsQuery,MultipleMeasurementsQuery,GraphqlApiClient} from './GraphqlUtils';
import DropDown from './DropDown'
import {defaultStateValues} from './utils';

class MetricChart extends React.Component {      
    constructor(props) {
      super(props);
      this.state = defaultStateValues;
    }

    fetchDataOnChange=(metricName='tubingPressure')=>{
      const inputVariables = {"input": [{metricName,"after": 1562736821958}]};
      GraphqlApiClient(MultipleMeasurementsQuery,inputVariables).then(({data:{data:{getMultipleMeasurements}}}) => {
      let categoriesArray = [],seriesArray = [];
      getMultipleMeasurements[0].measurements.slice(0,100).forEach(object => {
        const date =  moment.unix(object.at).toISOString().replace('Z','');
        categoriesArray.push(date);
        seriesArray.push(object.value);
      });

      let options = {
        options: {
          dataLabels: {enabled: false},
          stroke: {curve: 'smooth'},
          xaxis: {
            type: 'datetime',
            categories:categoriesArray,
          },
          tooltip: {
            x: {format: 'dd/MM/yy HH:mm'},
          }
        },
        series: [{
          name: 'series2',
          data: seriesArray
        }],
      }
      this.setState({
        ...options
      });

    });
    }

    render() {
      let {metricValues,open,selectedValue} = this.state;
      return (
        <div id="chart" style={{backgroundColor:"antiquewhite"}} >
            <DropDown 
                options={metricValues}  
                open={open} handleClose={()=>this.setState({open:false})} 
                handleChange={(event)=>{
                    this.setState({selectedValue:event.target.value});
                    this.fetchDataOnChange(event.target.value);
                }} 
                handleOpen={()=>this.setState({open:true})} 
                selectedValue={selectedValue} 
                />
            <Chart 
                type="area" 
                height="350"
                options={this.state.options} 
                series={this.state.series}  
            />
        </div>
      );
    }

    componentDidMount(){
        GraphqlApiClient(MetricsQuery,{})
        .then(({data:{data:{getMetrics:metricValues}}}) => {
          this.setState({metricValues});
        });
        this.fetchDataOnChange();
    }

  }



export default MetricChart;