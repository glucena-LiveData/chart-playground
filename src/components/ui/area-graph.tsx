import { Area, AreaChart, Text, Tooltip, XAxis, YAxis } from "recharts"

import { LineChartConfig } from "@/types/chart-config"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

interface AreaGraphProps<TData> {
  title: String
  subtitle: String
  chartConfig: { [key: string]: LineChartConfig }
  data: TData[]
}

export function AreaGraph<TData>({
  title,
  subtitle,
  chartConfig,
  data,
}: AreaGraphProps<TData>) {
  const [xAxisConfig, yAxisConfig] = Object.values(chartConfig)
  // Calculate the minimum and maximum value of data range and round up to the nearest 10
  const maxYValue =
    Math.ceil(Math.max(...data.map((d) => d[yAxisConfig.dataKey])) / 10) * 10
  const minValue =
    Math.floor(Math.min(...data.map((d) => d[yAxisConfig.dataKey])) / 10) * 10 -
    10
  const minYValue = minValue < 0 ? 0 : minValue

  // Generate a unique gradient ID based on the yAxisConfig.color
  const gradientId = `colorGradient-${yAxisConfig.color.replace("#", "")}`

  return (
    <Card className="visualization-container">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="live-data-line-graph">
          <ChartContainer config={chartConfig} className="h-[150px] w-[530px]">
            <AreaChart accessibilityLayer data={data}>
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor={
                      yAxisConfig.color ? yAxisConfig.color : "#7B71FA"
                    }
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="100%"
                    stopColor={
                      yAxisConfig.color ? yAxisConfig.color : "#7B71FA"
                    }
                    stopOpacity={0.05}
                  />
                </linearGradient>
              </defs>
              <XAxis
                dataKey={xAxisConfig.dataKey}
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={
                  xAxisConfig.formatter
                    ? xAxisConfig.formatter
                    : (value) => value
                }
                tick={<RotatedAxisTick />}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    hideIndicator={true}
                    hideLabel={false}
                    labelKey={yAxisConfig.datakey}
                  />
                }
                formatter={
                  yAxisConfig.formatter
                    ? yAxisConfig.formatter
                    : (value) => value
                }
              />
              <YAxis
                type="number"
                tickLine={false}
                axisLine={false}
                tickFormatter={
                  yAxisConfig.tickFormatter
                    ? yAxisConfig.tickFormatter
                    : (value) => value
                }
                domain={[minYValue, maxYValue]}
                width={40} // Adjust the width of the Y-axis
              />
              <Area
                dataKey={yAxisConfig.dataKey}
                label={yAxisConfig.label}
                type="natural"
                stroke={yAxisConfig.color ? yAxisConfig.color : "#7B71FA"}
                strokeWidth={3}
                fill={`url(#${gradientId})`}
                fillOpacity={1}
                dot={false}
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}

const RotatedAxisTick = (props) => {
  const { x, y, payload, tickFormatter } = props
  return (
    <g transform={`translate(${x},${y})`}>
      <Text x={3} y={0} dy={3} textAnchor="end" transform="rotate(-90)">
        {tickFormatter(payload.value)}
      </Text>
    </g>
  )
}
