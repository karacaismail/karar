import * as echarts from 'echarts/core'
import { BarChart, LineChart, RadarChart, CustomChart } from 'echarts/charts'
import { GridComponent, TooltipComponent, LegendComponent, MarkLineComponent } from 'echarts/components'
import { SVGRenderer } from 'echarts/renderers'
import type { Viz } from './types'

echarts.use([BarChart, LineChart, RadarChart, CustomChart, GridComponent, TooltipComponent, LegendComponent, MarkLineComponent, SVGRenderer])

const BRAND = '#f95428'
const INK = '#414d57'
const INK_SOFT = '#82929c'
const PALETTE = [BRAND, '#4f6d8c', '#2f9e77', '#c0873a']
const FONT = 'Roboto, sans-serif'

function quadrantOption(v: Extract<Viz, { kind: 'quadrant' }>): echarts.EChartsCoreOption {
  // Four labeled boxes on a 2x2 grid drawn with a custom series.
  const cells = [
    { x: 0, y: 1, label: v.quads[0] },
    { x: 1, y: 1, label: v.quads[1] },
    { x: 0, y: 0, label: v.quads[2] },
    { x: 1, y: 0, label: v.quads[3] },
  ]
  return {
    grid: { left: 78, right: 16, top: 34, bottom: 44 },
    xAxis: {
      type: 'category', data: v.x, position: 'bottom',
      axisLine: { lineStyle: { color: INK_SOFT } }, axisTick: { show: false },
      axisLabel: { color: INK, fontFamily: FONT, fontSize: 13, interval: 0 },
    },
    yAxis: {
      type: 'category', data: [v.y[0], v.y[1]],
      axisLine: { lineStyle: { color: INK_SOFT } }, axisTick: { show: false },
      axisLabel: { color: INK, fontFamily: FONT, fontSize: 13, rotate: 90 },
    },
    series: [{
      type: 'custom',
      renderItem: (_params: unknown, api: { value: (i: number) => number; coord: (p: number[]) => number[]; size: (p: number[]) => number[] }) => {
        const x = api.value(0)
        const y = api.value(1)
        const center = api.coord([x, y])
        const size = api.size([1, 1])
        const isTop = y === 1
        const isRight = x === 1
        const strong = (isTop && isRight)
        return {
          type: 'group',
          children: [
            {
              type: 'rect',
              shape: { x: center[0] - size[0] / 2 + 5, y: center[1] - size[1] / 2 + 5, width: size[0] - 10, height: size[1] - 10, r: 10 },
              style: { fill: strong ? BRAND : '#eef1f3', stroke: strong ? BRAND : '#d3d9dd' },
            },
            {
              type: 'text',
              style: {
                text: cells.find((c) => c.x === x && c.y === y)!.label,
                x: center[0], y: center[1],
                textAlign: 'center', textVerticalAlign: 'middle',
                fill: strong ? '#ffffff' : INK,
                fontFamily: FONT, fontSize: 14, fontWeight: 600,
                width: size[0] - 26, overflow: 'break', lineHeight: 19,
              },
            },
          ],
        }
      },
      data: cells.map((c) => [c.x, c.y]),
    }],
  }
}

function paretoOption(v: Extract<Viz, { kind: 'pareto' }>): echarts.EChartsCoreOption {
  const total = v.values.reduce((a, b) => a + b, 0)
  let running = 0
  const cumulative = v.values.map((n) => {
    running += n
    return Math.round((running / total) * 100)
  })
  return {
    grid: { left: 44, right: 46, top: 40, bottom: 34 },
    tooltip: { trigger: 'axis', textStyle: { fontFamily: FONT } },
    legend: { data: ['Etki payı', 'Kümülatif %'], textStyle: { color: INK, fontFamily: FONT, fontSize: 13 }, top: 0 },
    xAxis: { type: 'category', data: v.categories, axisLabel: { color: INK_SOFT, fontFamily: FONT, fontSize: 11, rotate: 30 } },
    yAxis: [
      { type: 'value', axisLabel: { color: INK_SOFT, fontFamily: FONT }, splitLine: { lineStyle: { color: '#e9ecee' } } },
      { type: 'value', max: 100, axisLabel: { formatter: '{value}%', color: INK_SOFT, fontFamily: FONT }, splitLine: { show: false } },
    ],
    series: [
      { name: 'Etki payı', type: 'bar', data: v.values, itemStyle: { color: BRAND, borderRadius: [5, 5, 0, 0] } },
      {
        name: 'Kümülatif %', type: 'line', yAxisIndex: 1, data: cumulative, smooth: true,
        lineStyle: { color: INK, width: 2 }, itemStyle: { color: INK }, symbolSize: 6,
        markLine: { symbol: 'none', label: { formatter: '%80', fontFamily: FONT, color: INK_SOFT }, lineStyle: { color: INK_SOFT, type: 'dashed' }, data: [{ yAxis: 80 }] },
      },
    ],
  }
}

function curveOption(v: Extract<Viz, { kind: 'curve' }>): echarts.EChartsCoreOption {
  return {
    grid: { left: 52, right: 20, top: v.series.length > 1 ? 40 : 24, bottom: 44 },
    tooltip: { trigger: 'axis', textStyle: { fontFamily: FONT } },
    legend: v.series.length > 1
      ? { data: v.series.map((s) => s.name), textStyle: { color: INK, fontFamily: FONT, fontSize: 13 }, top: 0 }
      : undefined,
    xAxis: {
      type: 'value', name: v.xLabel, nameLocation: 'middle', nameGap: 28,
      nameTextStyle: { color: INK, fontFamily: FONT, fontSize: 13 },
      axisLabel: { show: false }, splitLine: { show: false }, axisLine: { lineStyle: { color: INK_SOFT } },
    },
    yAxis: {
      type: 'value', name: v.yLabel, nameLocation: 'middle', nameGap: 30,
      nameTextStyle: { color: INK, fontFamily: FONT, fontSize: 13 },
      axisLabel: { show: false }, splitLine: { show: false }, axisLine: { lineStyle: { color: INK_SOFT } },
    },
    series: v.series.map((s, i) => ({
      name: s.name, type: 'line', data: s.data, smooth: true, symbol: 'none',
      lineStyle: { width: 3, color: PALETTE[i % PALETTE.length] },
      areaStyle: v.series.length === 1 ? { color: BRAND, opacity: 0.12 } : undefined,
    })),
  }
}

function radarOption(v: Extract<Viz, { kind: 'radar' }>): echarts.EChartsCoreOption {
  return {
    tooltip: { textStyle: { fontFamily: FONT } },
    legend: { data: v.series.map((s) => s.name), textStyle: { color: INK, fontFamily: FONT, fontSize: 13 }, bottom: 0 },
    radar: {
      indicator: v.axes.map((a) => ({ name: a, max: v.max })),
      radius: '62%', center: ['50%', '46%'],
      axisName: { color: INK, fontFamily: FONT, fontSize: 13 },
      splitArea: { areaStyle: { color: ['#ffffff', '#f6f7f8'] } },
      splitLine: { lineStyle: { color: '#d3d9dd' } },
      axisLine: { lineStyle: { color: '#d3d9dd' } },
    },
    series: [{
      type: 'radar',
      data: v.series.map((s, i) => ({
        name: s.name, value: s.values,
        lineStyle: { color: PALETTE[i % PALETTE.length], width: 2, type: s.name.includes('sınır') ? 'dashed' : 'solid' },
        itemStyle: { color: PALETTE[i % PALETTE.length] },
        areaStyle: s.name.includes('sınır') ? undefined : { opacity: 0.08 },
      })),
    }],
  }
}

const charts: echarts.ECharts[] = []

/** Mount every `[data-viz]` container on the current page. Call after each render. */
export function mountCharts(specs: Record<string, Viz>): void {
  charts.splice(0).forEach((c) => c.dispose())
  document.querySelectorAll<HTMLElement>('[data-viz]').forEach((el) => {
    const v = specs[el.dataset.viz ?? '']
    if (!v) return
    const chart = echarts.init(el, undefined, { renderer: 'svg' })
    const option =
      v.kind === 'quadrant' ? quadrantOption(v)
      : v.kind === 'pareto' ? paretoOption(v)
      : v.kind === 'curve' ? curveOption(v)
      : radarOption(v)
    chart.setOption(option)
    charts.push(chart)
  })
}

window.addEventListener('resize', () => charts.forEach((c) => c.resize()))
