import ChartBar from "./ChartBar";
import './Chart.css'
const Chart = (props) => {
    let dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxVal = Math.max(...dataPointValues)
    return (
        <div className="chart">
            {props.dataPoints.map(
                (dataPoint)=>{
                    return (
                    <ChartBar key={dataPoint.label} label={dataPoint.label} value={dataPoint.value} maxValue={maxVal}>
                    </ChartBar>)
                }
            )}
        </div>
    );
}
export default Chart;