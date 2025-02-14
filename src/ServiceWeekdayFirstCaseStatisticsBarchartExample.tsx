"use client"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartConfig = {
	percent_first_case_on_time: {
	  label: "% of First Cases On-Time",
	  color: "#2471a3",
	},
} satisfies ChartConfig;

const visualizationData = [
	{
		"scheduled_service" : "Anesthesiology",
		"FC Count" : 1,
		"Pct FCOS" : 100.0
	},
	{
		"scheduled_service" : "Colorectal",
		"FC Count" : 2,
		"Pct FCOS" : 50.0
	},
	{
		"scheduled_service" : "Gen",
		"FC Count" : 1,
		"Pct FCOS" : 100.0
	},
	{
		"scheduled_service" : "General",
		"FC Count" : 10,
		"Pct FCOS" : 90.0
	},
	{
		"scheduled_service" : "Gynecology",
		"FC Count" : 5,
		"Pct FCOS" : 100.0
	},
	{
		"scheduled_service" : "Hand",
		"FC Count" : 1,
		"Pct FCOS" : 0.0
	},
	{
		"scheduled_service" : "Ophthalmology",
		"FC Count" : 14,
		"Pct FCOS" : 85.71428571428571
	},
	{
		"scheduled_service" : "Orthopedics",
		"FC Count" : 8,
		"Pct FCOS" : 62.5
	},
	{
		"scheduled_service" : "Otorhinolaryngology",
		"FC Count" : 5,
		"Pct FCOS" : 20.0
	},
	{
		"scheduled_service" : "Plastic",
		"FC Count" : 5,
		"Pct FCOS" : 40.0
	},
	{
		"scheduled_service" : "Podiatry",
		"FC Count" : 5,
		"Pct FCOS" : 40.0
	},
	{
		"scheduled_service" : "Urology",
		"FC Count" : 3,
		"Pct FCOS" : 66.66666666666666
	},
	{
		"scheduled_service" : "Vascular",
		"FC Count" : 9,
		"Pct FCOS" : 55.55555555555556
	}
]

export function ServiceWeekdayFirstCaseStatsChart() {
	return (
	  <div className="visualization-container">
		  <h1 className="chart-title">Service Weekday First Case Statistics</h1>
		  <div className="live-data-vertical-barchart" >
		  <ChartContainer config={chartConfig} className="h-[550px] w-[700px]">
          <BarChart
            accessibilityLayer
						width={300}
						height={550}
            data={visualizationData}
            layout="vertical"
            margin={{
						top: 40,
						bottom: 20,
            right: 60,
			  		left: 80
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="scheduled_service"
              type="category"
              tickLine={false}
              tickMargin={5}
              axisLine={false}
              
            />
            <XAxis 
							dataKey="Pct FCOS" 
							type="number" 
							tickFormatter={(value) => `${value}%`}
							label={{ value: "% of First Cases On Time", position: "insideBottom", offset: -5 }}
						/>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="Pct FCOS"
              layout="vertical"
              fill="#7B71FA"
              radius={4}
            >
              <LabelList
                dataKey="Pct FCOS"
                position="right"
                offset={8}
                className="fill-foreground font-bold"
                fontSize={12}
								formatter={(value) => `${Math.round(value)}%`}
              />
            </Bar>
          </BarChart>
          </ChartContainer>
		  </div>
	  </div>
	)
}



