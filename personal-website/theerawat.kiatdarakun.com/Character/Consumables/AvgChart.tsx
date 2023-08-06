import React from "react"
import {Bar} from "react-chartjs-2"
import {Chart, registerables} from "chart.js"

import {WeeklySummaryValue, consumableTypeSummaryTemplate} from "./share"
import {ConsumableType} from "./week"

Chart.register(...registerables)

const getHighlightColor = () => {
  const app = document.getElementById(import.meta.env.VITE_ID_APP)
  return app ? getComputedStyle(app).getPropertyValue("--highlight-color")
    : "white"
}

type I = {
  avgSummary: WeeklySummaryValue,
  consumables: Set<ConsumableType>,
}
export const AvgChart = ({avgSummary, consumables}: I):
  React.ReactElement => {

  const [color, setColor] = React.useState(getHighlightColor())

  React.useEffect(() => {
    setColor(getHighlightColor())
  }, [])

  if(avgSummary === undefined) return <p>Loading ...</p>
  const summary = combineFields(avgSummary, consumables)

  return (
    <div className="consumables-avg">
      <ul className="info-side">
        <li>
          Delivery (km)
          <ul>
            <li>Public ({summary.km.public})</li>
            <li>Private ({summary.km.private})</li>
          </ul>
        </li>
        <li>Spending: {summary.thb} THB</li>
        <li>
          Packaging (g)
          <ul>
            <li>Plastic ({summary.pkg.plastic})</li>
            <li>Paper ({summary.pkg.paper})</li>
            <li>Glass ({summary.pkg.glass})</li>
          </ul>
        </li>
      </ul>

      <div className="consumables-avg__bar-container">
        <button
          id="consumables-barchart-trigger"
          onClick={() => { setColor(getHighlightColor()) }}
        >
        </button>
        <Bar
          data={{
            labels: [
              "Total",
              "Non-Vegan",
              "Probably Unhealthy",
              "Unhealthy",
              "Organic",
            ],
            datasets: [{
              data: [
                summary.total_gram,
                summary.non_vegan,
                summary.may_unhealthy,
                summary.unhealthy,
                summary.organic,
              ],
              borderWidth: 2,
              borderColor: color,
              backgroundColor: color.replace(/,[^,]*$/g, ', 0.2)'),
            }],
          }}
          options={{
            maintainAspectRatio: false,
            plugins: {
              tooltip:{
                intersect : false,
                mode:"index",
              },
              legend: {
                display: false,
                labels: {
                }
              },
              title: {
                display: false,
                text: "",
              },
            },
            responsive: true,
            scales: {
              y: {
                grid: {
                  color: color.replace(/,[^,]*$/g, ', 0.2)'),
                },
                title: {
                  display: true,
                  text: "gram",
                  color: color,
                },
                ticks: {
                  color: color,
                }
              },
              x: {
                grid: {
                  color: color.replace(/,[^,]*$/g, ', 0.2)'),
                },
                ticks: {
                  color: color,
                }
              },
            }
          }}
        />
      </div>
    </div>
  )
}

const combineFields = (summary: WeeklySummaryValue, consumables: Set<ConsumableType>) =>
  [...consumables].reduce((acc, cur) => {
    acc.thb += summary.types[cur].thb
    acc.total_gram += summary.types[cur].total_gram

    acc.non_vegan += summary.types[cur].non_vegan
    acc.organic += summary.types[cur].organic
    acc.may_unhealthy += summary.types[cur].may_unhealthy
    acc.unhealthy += summary.types[cur].unhealthy

    acc.pkg.plastic += summary.types[cur].pkg.plastic
    acc.pkg.paper += summary.types[cur].pkg.paper
    acc.pkg.glass += summary.types[cur].pkg.glass
    return acc
  }, {
    ... JSON.parse(JSON.stringify(consumableTypeSummaryTemplate)),
    km: { public: summary.km.public, private: summary.km.private, },
  })
