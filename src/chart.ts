import * as echarts from 'echarts/core'
import { BarChart, LineChart, RadarChart, CustomChart, ScatterChart, FunnelChart } from 'echarts/charts'
import { GridComponent, TooltipComponent, LegendComponent, MarkLineComponent, MarkPointComponent } from 'echarts/components'
import { SVGRenderer } from 'echarts/renderers'
import type { Viz } from './types'

echarts.use([BarChart, LineChart, RadarChart, CustomChart, ScatterChart, FunnelChart, GridComponent, TooltipComponent, LegendComponent, MarkLineComponent, MarkPointComponent, SVGRenderer])

const BRAND = '#f95428'
const INK = '#414d57'
const INK_SOFT = '#82929c'
const PALETTE = [BRAND, '#4f6d8c', '#2f9e77', '#c0873a']
const FONT = 'Roboto, sans-serif'

function quadrantOption(v: Extract<Viz, { kind: 'quadrant' }>): echarts.EChartsCoreOption {
  // Four labeled boxes on a 2x2 grid. `highlight` picks the accent cell (or none):
  // quads order is [TL, TR, BL, BR].
  const cells = [
    { x: 0, y: 1, i: 0, label: v.quads[0] },
    { x: 1, y: 1, i: 1, label: v.quads[1] },
    { x: 0, y: 0, i: 2, label: v.quads[2] },
    { x: 1, y: 0, i: 3, label: v.quads[3] },
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
        const cell = cells.find((c) => c.x === x && c.y === y)!
        const strong = v.highlight != null && v.highlight === cell.i
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
                text: cell.label,
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
      markLine: i === 0 && v.marks?.length
        ? {
            symbol: 'none',
            label: { fontFamily: FONT, color: INK, formatter: (p: { dataIndex: number }) => v.marks![p.dataIndex]?.label ?? '' },
            lineStyle: { color: INK_SOFT, type: 'dashed' },
            data: v.marks.map((m) => ({ xAxis: m.x })),
          }
        : undefined,
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

function scatterOption(v: Extract<Viz, { kind: 'scatter' }>): echarts.EChartsCoreOption {
  return {
    grid: { left: 56, right: 30, top: 30, bottom: 48 },
    tooltip: { textStyle: { fontFamily: FONT }, formatter: (p: { name: string }) => p.name },
    xAxis: {
      type: 'value', name: v.xLabel, nameLocation: 'middle', nameGap: 26,
      nameTextStyle: { color: INK, fontFamily: FONT, fontSize: 13 },
      axisLabel: { show: false }, splitLine: { lineStyle: { color: '#eef1f3' } }, axisLine: { lineStyle: { color: INK_SOFT } },
    },
    yAxis: {
      type: 'value', name: v.yLabel, nameLocation: 'middle', nameGap: 30,
      nameTextStyle: { color: INK, fontFamily: FONT, fontSize: 13 },
      axisLabel: { show: false }, splitLine: { lineStyle: { color: '#eef1f3' } }, axisLine: { lineStyle: { color: INK_SOFT } },
    },
    series: [{
      type: 'scatter',
      symbolSize: (_val: number[], p: { dataIndex: number }) => (v.points[p.dataIndex].size ?? 16) * 2,
      label: {
        show: true, position: 'top', color: INK, fontFamily: FONT, fontSize: 12, fontWeight: 600,
        formatter: (p: { dataIndex: number }) => v.points[p.dataIndex].name,
      },
      data: v.points.map((p) => ({
        name: p.name, value: [p.x, p.y],
        itemStyle: { color: p.accent ? BRAND : '#4f6d8c', opacity: 0.85 },
      })),
    }],
  }
}

function pyramidOption(v: Extract<Viz, { kind: 'pyramid' | 'funnel' }>, up: boolean): echarts.EChartsCoreOption {
  return {
    tooltip: { textStyle: { fontFamily: FONT } },
    series: [{
      type: 'funnel',
      sort: up ? 'ascending' : 'descending',
      left: 4, width: '46%', top: 8, bottom: 8,
      gap: 3,
      label: { position: 'right', color: INK, fontFamily: FONT, fontSize: 12, fontWeight: 600, formatter: '{b}', width: 120, overflow: 'break' },
      labelLine: { length: 10, lineStyle: { color: INK_SOFT } },
      itemStyle: { borderWidth: 0 },
      data: v.levels.map((l, i) => ({
        name: l.name, value: l.value,
        itemStyle: { color: i === (up ? v.levels.length - 1 : 0) ? BRAND : ['#4f6d8c', '#5f7d9c', '#7290ab', '#8aa3ba', '#a4b8ca', '#bccbd8'][i % 6] },
      })),
    }],
  }
}

function barsOption(v: Extract<Viz, { kind: 'bars' }>): echarts.EChartsCoreOption {
  return {
    grid: { left: 48, right: 16, top: 40, bottom: 60 },
    tooltip: { trigger: 'axis', textStyle: { fontFamily: FONT } },
    legend: v.series.length > 1 ? { data: v.series.map((s) => s.name), textStyle: { color: INK, fontFamily: FONT, fontSize: 13 }, top: 0 } : undefined,
    xAxis: { type: 'category', data: v.categories, axisLabel: { color: INK, fontFamily: FONT, fontSize: 12, interval: 0, width: 84, overflow: 'break' } },
    yAxis: {
      type: 'value', name: v.yLabel, nameTextStyle: { color: INK_SOFT, fontFamily: FONT },
      axisLabel: { color: INK_SOFT, fontFamily: FONT }, splitLine: { lineStyle: { color: '#e9ecee' } },
    },
    series: v.series.map((s, i) => ({
      name: s.name, type: 'bar', data: s.values,
      itemStyle: { color: PALETTE[i % PALETTE.length], borderRadius: [5, 5, 0, 0] },
      barMaxWidth: 42,
    })),
  }
}

const charts: echarts.ECharts[] = []

/** Mount every `[data-viz]` container on the current page. Call after each render. */
export function mountCharts(specs: Record<string, Viz>): void {
  charts.splice(0).forEach((c) => c.dispose())
  document.querySelectorAll<HTMLElement>('[data-viz]').forEach((el) => {
    const v = specs[el.dataset.viz ?? '']
    if (!v) return
    let option: echarts.EChartsCoreOption
    switch (v.kind) {
      case 'quadrant': option = quadrantOption(v); break
      case 'pareto': option = paretoOption(v); break
      case 'curve': option = curveOption(v); break
      case 'radar': option = radarOption(v); break
      case 'scatter': option = scatterOption(v); break
      case 'pyramid': option = pyramidOption(v, true); break
      case 'funnel': option = pyramidOption(v, false); break
      case 'bars': option = barsOption(v); break
      default: return // table / process / venn3 are rendered as static HTML, not ECharts
    }
    const chart = echarts.init(el, undefined, { renderer: 'svg' })
    chart.setOption(option)
    charts.push(chart)
  })
}

window.addEventListener('resize', () => charts.forEach((c) => c.resize()))
