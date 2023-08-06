import React from "react"

import {consumableTypeSummaryTemplate} from "./share"
import {Week, ConsumableType} from "./week"
import {TooltipText} from "../../../share"

type I = {
  consumables: Set<ConsumableType>,
  week: Week | undefined,
}
export const WeekTable = ({consumables, week}: I): React.ReactElement => {
  if(week === undefined) return <p>Loading ...</p>

  const total = JSON.parse(JSON.stringify(consumableTypeSummaryTemplate))

  return (
    <div className="consumables-table-wrapper">
      <table className="consumables-table">
        <thead>
          <tr>
            <th rowSpan={1}>Delivery</th>
            <th rowSpan={1}>Title</th>
            <th rowSpan={1}>THB</th>
            <th rowSpan={1}>Gram</th>
            <th rowSpan={1}>Non-Vegan (g)</th>
            <th rowSpan={1}>
              <TooltipText text="Health">
                <span className="notbold">
                  Probably Unhealthy (g)-Unhealthy (g)
                </span>
              </TooltipText>
            </th>
            <th rowSpan={1}>
              <TooltipText text="Packaging">
                <span className="notbold">
                  Plastic (g)-Paper (g)-Glass (g)
                </span>
              </TooltipText>
            </th>
          </tr>
        </thead>
        <tbody>
        {
          week.map((order, i) => {
            const types = order.types.filter(
              x => consumables.has(x.name)
            )
            const numItems = types.reduce((acc, cur) => {
              return acc + cur.items.length
            }, 0)
            return (
            <React.Fragment key={i}>
              {
                types.map((type, j) => {
                  return (
                  <React.Fragment key={j}>
                    {
                      type.items.map((v, k) => {
                        total.thb += v.thb
                        total.total_gram += isNaN(Number(v.g)) ? 0 : Number(v.g)
                        total.non_vegan += isNaN(Number(v.nv)) ? 0 : Number(v.nv)
//                         total.organic += isNaN(Number(v.oc)) ? 0 : Number(v.oc)
                        total.may_unhealthy += isNaN(Number(v.mu)) ? 0 : Number(v.mu)
                        total.unhealthy += isNaN(Number(v.u)) ? 0 : Number(v.u)

                        total.pkg.plastic += v.p
                        total.pkg.paper += v.pa
                        total.pkg.glass += v.gl

                        const lastIteminOrder = j === types.length - 1 &&
                          k === type.items.length - 1
                        const className = lastIteminOrder ? "last-tr-order" : ""
                        return (
                          <tr className={className} key={k}>
                            {
                              (j === 0 && k === 0) &&
                              <td rowSpan={numItems}>
                                {order.delivery.type}
                                {
                                  order.delivery.type !== "no fuel" &&
                                  <><br />{order.delivery.km} km</>
                                }
                              </td>
                            }
                            <td>{v.t}</td>
                            <td>{v.thb}</td>
                            <td>{v.g}</td>
                            <td>{v.nv}</td>
                            <td>{v.mu}-{v.u}</td>
                            <td>{v.p}-{v.pa}-{v.gl}</td>
                          </tr>
                        )
                      })
                    }
                  </React.Fragment>
                  )
                })
              }
            </React.Fragment>
            )
          })
        }
          <tr>
            <td colSpan={2}>Total</td>
            <td>{total.thb}</td>
            <td>{total.total_gram}</td>
            <td>{total.non_vegan}</td>
            <td>{total.may_unhealthy}-{total.unhealthy}</td>
            <td>{total.pkg.plastic}-{total.pkg.paper}-{total.pkg.glass}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
