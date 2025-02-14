import { Area, AreaChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

interface Axis<TData> {
  label: string
  dataKey: keyof TData
  formatter: (value: unknown) => string
  color?: string
}

export interface AreaGraphConfig<TData> {
  x: Axis<TData>
  y: Axis<TData>
}

interface AreaGraphProps<TData> {
  title: string
  subtitle: string
  configuration: AreaGraphConfig<TData>
  data: TData[]
}

export function AreaGraph<TData>({
  title,
  subtitle,
  configuration,
  data,
}: AreaGraphProps<TData>) {
  const [xAxisConfig, yAxisConfig] = Object.values(configuration)

  // Calculate the minimum and maximum value of data range and round up to the nearest 10
  const maxYValue = 100
  // Math.ceil(Math.max(...data.map((d) => d[yAxisConfig.dataKey])) / 10) * 10
  const minValue = 0
  // Math.floor(Math.min(...data.map((d) => d[yAxisConfig.dataKey])) / 10) * 10 -
  // 10
  const minYValue = minValue < 0 ? 0 : minValue

  // Generate a unique gradient ID based on the yAxisConfig.color
  const gradientId = `colorGradient-${yAxisConfig.color?.replace("#", "")}`

  return (
    <Card className="flex flex-col">
      <CardHeader className="flex flex-col">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="flex grow">
        <ChartContainer
          config={{
            xAxisConfig: configuration.x,
            yAxisConfig: configuration.y,
          }}
        >
          <AreaChart accessibilityLayer data={data}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor={yAxisConfig.color ? yAxisConfig.color : "#7B71FA"}
                  stopOpacity={0.3}
                />
                <stop
                  offset="100%"
                  stopColor={yAxisConfig.color ? yAxisConfig.color : "#7B71FA"}
                  stopOpacity={0.05}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey={xAxisConfig.dataKey.toString()}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={
                xAxisConfig.formatter ? xAxisConfig.formatter : (value) => value
              }
              // tick={<RotatedAxisTick />}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  hideIndicator={true}
                  hideLabel={false}
                  labelKey={yAxisConfig.dataKey.toString()}
                />
              }
              formatter={
                yAxisConfig.formatter ? yAxisConfig.formatter : (value) => value
              }
            />
            <YAxis
              type="number"
              tickLine={false}
              axisLine={false}
              tickFormatter={
                yAxisConfig.formatter ? yAxisConfig.formatter : (value) => value
              }
              domain={[minYValue, maxYValue]}
              width={40}
            />
            <Area
              dataKey={yAxisConfig.dataKey.toString()}
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
      </CardContent>
    </Card>
  )
}

// const RotatedAxisTick = (props: {
//   x: number
//   y: number
//   payload: { value: string }
//   tickFormatter: (value: string) => string
// }) => {
//   const { x, y, payload, tickFormatter } = props
//   return (
//     <g transform={`translate(${x},${y})`}>
//       <Text x={3} y={0} dy={3} textAnchor="end" transform="rotate(-90)">
//         {tickFormatter(payload.value)}
//       </Text>
//     </g>
//   )
// }
