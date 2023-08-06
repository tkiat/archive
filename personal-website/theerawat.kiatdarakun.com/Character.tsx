import React from "react"
import * as jsYaml from 'js-yaml'

import {PageWithIconsScrollbar} from "../share"
import {Consumables} from "./Character/Consumables"
import {Hobbies} from "./Character/Hobbies"
import {ThingsIOwn} from "./Character/ThingsIOwn"
import {Trait} from "./Character/Trait"

export const Character = (): React.ReactElement => {
  const data = {
    icons: [
      <i className="fa-solid fa-person"></i>,
      <i className="fa-solid fa-person-hiking"></i>,
      <i className="fa-solid fa-cart-shopping"></i>,
//       <i className="fa-solid fa-suitcase-rolling"></i>,
    ],
    content: {
      sections: [
        <Trait />,
        <Hobbies />,
        <Consumables />,
//         <ThingsIOwn />,
      ]
    }
  }
  return <PageWithIconsScrollbar data={data} page="about-character" />
}
