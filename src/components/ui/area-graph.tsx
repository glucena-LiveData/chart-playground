import { Area, AreaChart, XAxis, YAxis } from "recharts"

import { cn } from "@/lib/utils"
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
  dataKey: keyof TData
  formatter: (value: unknown) => string
  color: string
}

export interface AreaGraphConfig<TData> {
  label: (value: unknown) => string
  x: Axis<TData>
  y: Axis<TData> & {
    min: number
    max: number
  }
}

interface AreaGraphProps<TData> extends React.HTMLAttributes<HTMLDivElement> {
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
  ...props
}: AreaGraphProps<TData>) {
  const { x, y, label } = configuration

  const gradientId = `colorGradient-${y.color.replace("#", "")}`

  return (
    <Card {...props} className={cn("flex flex-col", props.className)}>
      <CardHeader className="flex flex-col">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={{ x, y }}>
          <AreaChart accessibilityLayer data={data}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={y.color} stopOpacity={0.3} />
                <stop offset="100%" stopColor={y.color} stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey={x.dataKey.toString()}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={x.formatter}
              tick={({ x, y, payload, tickFormatter }) => (
                <g transform={`translate(${x},${y})`}>
                  <text
                    x={5}
                    y={0}
                    dy={3}
                    textAnchor="end"
                    transform="rotate(-90)"
                  >
                    {tickFormatter(payload.value)}
                  </text>
                </g>
              )}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  hideIndicator={true}
                  hideLabel={false}
                  labelKey={y.dataKey.toString()}
                />
              }
              formatter={label}
            />
            <YAxis
              type="number"
              tickLine={false}
              axisLine={false}
              tickFormatter={y.formatter}
              domain={[y.min, y.max]}
              width={40}
            />
            <Area
              dataKey={y.dataKey.toString()}
              label={"y.label"}
              type="natural"
              stroke={y.color}
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
