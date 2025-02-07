"use client"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Text } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const monthNames: { [key: number]: string } = {
	1: "January",
	2: "February",
	3: "March",
	4: "April",
	5: "May",
	6: "June",
	7: "July",
	8: "August",
	9: "September",
	10: "October",
	11: "November",
	12: "December"
  };

const chartData = [
	{
		"case_year" : 2024,
		"case_month" : 1,
		"Pct FCOS" : 74.52229299363057
	},
	{
		"case_year" : 2024,
		"case_month" : 2,
		"Pct FCOS" : 72.53521126760563
	},
	{
		"case_year" : 2024,
		"case_month" : 3,
		"Pct FCOS" : 86.70886075949366
	},
	{
		"case_year" : 2024,
		"case_month" : 4,
		"Pct FCOS" : 83.43558282208589
	},
	{
		"case_year" : 2024,
		"case_month" : 5,
		"Pct FCOS" : 71.42857142857143
	},
	{
		"case_year" : 2024,
		"case_month" : 6,
		"Pct FCOS" : 83.33333333333334
	},
	{
		"case_year" : 2024,
		"case_month" : 7,
		"Pct FCOS" : 75.28089887640449
	},
	{
		"case_year" : 2024,
		"case_month" : 8,
		"Pct FCOS" : 78.125
	},
	{
		"case_year" : 2024,
		"case_month" : 9,
		"Pct FCOS" : 76.85185185185185
	},
	{
		"case_year" : 2024,
		"case_month" : 10,
		"Pct FCOS" : 80.64516129032258
	},
	{
		"case_year" : 2024,
		"case_month" : 11,
		"Pct FCOS" : 67.08074534161491
	},
	{
		"case_year" : 2024,
		"case_month" : 12,
		"Pct FCOS" : 66.66666666666666
	}
]

const chartConfig = {
	case_month: {
		label: "Month of Room In: $Month"
	},
	"Pct FCOS": {
		label: "% of First Case On-Time Starts",
		color: "#2471a3",
	}
} satisfies ChartConfig;

export default function PercentFCOS() {
  return (
  <>
    <h1 className="chart-title">% of FCOS (&lt; 0 Minutes Delay)</h1>
    <div className="live-data-line-graph" >
      <ChartContainer config={chartConfig} className="min-h-[350px] w-full">
        <LineChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="case_month"
            tickLine={true}
            tickMargin={10}
            axisLine={false}
			tickFormatter={(value: number) => monthNames[value].slice(0, 3)}
			tick={<CustomizedAxisTick />}
          />
          <ChartTooltip content={<ChartTooltipContent hideIndicator={true} labelKey="case_month" />} />
          <YAxis
		  	type="number"
			tickLine={true}
		  	tickFormatter={(value) => `${value.toFixed(1)}%`}
            domain={[0, 100]}
          />
          <Line type="monotone" dataKey="Pct FCOS" stroke="#2471a3" />
        </LineChart>
      </ChartContainer>
    </div>
  </>
)
}

const CustomizedAxisTick = (props) => {
	const { x, y, payload } = props;
	return (
	  <g transform={`translate(${x},${y})`}>
		<Text x={5} y={0} dy={5} textAnchor="end" transform="rotate(-90)">
		  {monthNames[payload.value].slice(0, 3)}
		</Text>
	  </g>
	);
  };

