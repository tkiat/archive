import {isType} from "@app/share"

export type Weeks = {
  [key: string]: Week
}
export type Week = [Order]

type Order = {
  delivery: Delivery,
  types: Type[]
}
type Delivery = {
  type: "no fuel"
} | {
  type: "public" | "private",
  km: number
}
type Type = {
  name: ConsumableType,
  items: Item[]
}

export const consumableTypes = ["food", "drink-solid", "drink-liquid", "other-edibles", "nonedibles"] as const
export type ConsumableType = (typeof consumableTypes)[number]

type Item = {
  t: string,
  thb: number | string,
  g: number | string,
  nv: number | string,
  oc: number | string,
  mu: number | string,
  u: number | string,
  p: number,
  pa: number,
  gl: number | string
}

export const isWeeks = (u: unknown): u is Weeks =>
  typeof u === "object" && u !== null &&
  Object.entries(u).every(([k, x]) => {
    const r = typeof k === "string" && isWeekValue(x)
    if (!r) console.error("consumables record: wrong format. key: ", k, "value: ", x)
    return r
  })

const isWeekValue = (u: unknown) =>
  Array.isArray(u) && u.every(x => isOrder(x))

const isOrder = (u: unknown) =>
  typeof u === "object" && u !== null &&
    "delivery" in u && isDelivery(u.delivery) &&
    "types" in u && isTypes(u.types)

const isDelivery = (u: unknown) => typeof u === "object" && u !== null &&
  "type" in u && (u.type === "no fuel" ||
    (
      (u.type === "public" || u.type === "private") &&
        "km" in u && typeof u.km === "number"
    )
  )

const isTypes = (u: unknown) => Array.isArray(u) && u.every(x =>
  typeof x === "object" && x !== null &&
  "name" in x && isType(x.name, consumableTypes) &&
  "items" in x && isItems(x.items)
)

const isItems = (u: unknown) =>
  Array.isArray(u) && u.every(x => {
    return "t" in x && typeof x.t === "string" &&
    "thb" in x && (typeof x.thb === "number" || typeof x.thb === "string") &&
    "g" in x && (typeof x.g === "number" || typeof x.g === "string") &&
    "nv" in x && (typeof x.nv === "number" || typeof x.nv === "string") &&
    "oc" in x && (typeof x.oc === "number" || typeof x.oc === "string") &&
    "mu" in x && (typeof x.mu === "number" || typeof x.mu === "string") &&
    "u" in x && (typeof x.u === "number" || typeof x.u === "string") &&
    "p" in x && typeof x.p === "number" &&
    "pa" in x && typeof x.pa === "number" &&
    "gl" in x && typeof x.gl === "number"
  })

