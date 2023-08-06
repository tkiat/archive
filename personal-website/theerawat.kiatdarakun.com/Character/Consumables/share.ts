import {isType} from "@app/share"

import {Weeks, Week, ConsumableType, consumableTypes} from "./week"

export const consumableTypeSummaryTemplate = {
  thb: 0,
  total_gram: 0,

  non_vegan: 0,
  organic: 0,
  may_unhealthy: 0,
  unhealthy: 0,

  pkg: { plastic: 0, paper: 0, glass: 0, },
}
type ConsumableTypeSummary = typeof consumableTypeSummaryTemplate

export type WeeklySummaryValue = {
  types: {
    [key in ConsumableType]: ConsumableTypeSummary
  },
  "km": { public: 0, private: 0 },
}
export type WeeklySummary = {[key: string]: WeeklySummaryValue}

export const createWeeklySummaries = (weeks: Weeks): WeeklySummary[] => {
  const weeklySummaries = [] as WeeklySummary[]

  (Object.entries(weeks) as [string, Week][]).forEach(([date, orders]) => {
    const s = JSON.parse(JSON.stringify(weeklySummaryTemplate))
    orders.forEach(order => {
      if (order.delivery.type !== "no fuel") {
        s.km[order.delivery.type] += order.delivery.km
      }
      order.types.forEach(type => {
        const n = type.name
        type.items.forEach(v => {
          s.types[n].thb += v.thb
          s.types[n].total_gram += isNaN(Number(v.g)) ? 0 : Number(v.g)
          s.types[n].non_vegan += isNaN(Number(v.nv)) ? 0 : Number(v.nv)
          s.types[n].organic += isNaN(Number(v.oc)) ? 0 : Number(v.oc)
          s.types[n].may_unhealthy += isNaN(Number(v.mu)) ? 0 : Number(v.mu)
          s.types[n].unhealthy += isNaN(Number(v.u)) ? 0 : Number(v.u)

          s.types[n].pkg.plastic += v.p
          s.types[n].pkg.paper += v.pa
          s.types[n].pkg.glass += v.gl
        })
      })
    })
    weeklySummaries.push({[date]: s})
  })
  return weeklySummaries
}

export const createAvgWeeklySummary = (ws: WeeklySummary[], n: number) => {
  const sum = ws.map(x => Object.values(x)[0]).reduce((acc, cur) =>
    combineWeeklySummaryValues(acc, cur)
  )
  return getAvgWeeklySummaryValue(sum, n)
}

const weeklySummaryTemplate = consumableTypes.reduce((acc, cur) => {
  acc.types[cur] = consumableTypeSummaryTemplate
  return acc
}, {types: {}, km: { public: 0, private: 0, }} as WeeklySummaryValue)

const combineWeeklySummaryValues =
  (a: WeeklySummaryValue, b: WeeklySummaryValue) =>

  consumableTypes.reduce((acc, cur) => {
    acc.types[cur] = {
      thb: a.types[cur].thb + b.types[cur].thb,
      total_gram: a.types[cur].total_gram + b.types[cur].total_gram,
      non_vegan: a.types[cur].non_vegan + b.types[cur].non_vegan,
      may_unhealthy: a.types[cur].may_unhealthy + b.types[cur].may_unhealthy,
      unhealthy: a.types[cur].unhealthy + b.types[cur].unhealthy,
      organic: a.types[cur].organic + b.types[cur].organic,
      pkg: {
        plastic: a.types[cur].pkg.plastic + b.types[cur].pkg.plastic,
        paper: a.types[cur].pkg.paper + b.types[cur].pkg.paper,
        glass: a.types[cur].pkg.glass + b.types[cur].pkg.glass,
      },
    }
    return acc
  }, {
    types: {},
    km: {
      public: a.km.public + b.km.public,
      private: a.km.private + b.km.private,
    }
  } as WeeklySummaryValue)

const getAvgWeeklySummaryValue = (x: WeeklySummaryValue, n: number) =>
  consumableTypes.reduce((acc, cur) => {
    acc.types[cur] = {
      thb: Math.round(x.types[cur].thb / n),
      total_gram: Math.round(x.types[cur].total_gram / n),
      non_vegan: Math.round(x.types[cur].non_vegan / n),
      may_unhealthy: Math.round(x.types[cur].may_unhealthy / n),
      unhealthy: Math.round(x.types[cur].unhealthy / n),
      organic: Math.round(x.types[cur].organic / n),
      pkg: {
        plastic: Math.round(x.types[cur].pkg.plastic / n),
        paper: Math.round(x.types[cur].pkg.paper / n),
        glass: Math.round(x.types[cur].pkg.glass / n),
      },
    }
    return acc
  }, {
    types: {},
    km: {
      public: Math.round(x.km.public / n),
      private: Math.round(x.km.private / n),
    }
  } as WeeklySummaryValue)
