import React from "react"

import {TooltipText, TooltipTextWithDelay} from "../../share"

export const Trait = (): React.ReactElement =>
  <section>
    <h2>Traits</h2>

    <h3>Internal</h3>

    <ul className="more-gap-list">
      <li>
        <b className="highlight">Personality Test</b>

        &nbsp;—&nbsp;
        <TooltipTextWithDelay text="MBTI">
          <div>Taken on 31 Mar 2021 from <a href="https://www.16personalities.com/">here</a></div>
          <br />
          <ul>
            <li>(I)ntroverted (79%) - (E)xtraverted</li>
            <li>I(N)tuitive (52%) - Ob(S)ervant</li>
            <li>(T)hinking (51%) - (F)eeling</li>
            <li>(J)udging(58%) - (P)rospecting</li>
            <li>(A)ssertive (65%) - (T)erbulent</li>
          </ul>
        </TooltipTextWithDelay>
        ,&ensp;
        <TooltipTextWithDelay text="Big 5">
          <div>Taken on 31 Mar 2021 <a href="https://openpsychometrics.org/tests/IPIP-BFFM/">here</a></div>
          <br />
          <ul>
            <li>Extroversion: 11 (percentile)</li>
            <li>Emotional Stability: 57</li>
            <li>Agreeableness: 7</li>
            <li>Conscientiousness: 95</li>
            <li>Intellect/Imagination: 46</li>
          </ul>
        </TooltipTextWithDelay>
        ,&ensp;
        <TooltipTextWithDelay text="Four Temperaments">
          <div>Taken on 31 Mar 2021 <a href="http://openpsychometrics.org/tests/O4TS/">here</a></div>
          <br />
          <ul>
            <li>Choleric: 12</li>
            <li>Melancholic: 12</li>
            <li>Sanguine: 5</li>
            <li>Phlegmatic: 22</li>
          </ul>
        </TooltipTextWithDelay>
      </li>

      <li>
        <b className="highlight">Hard Skills</b>
        &nbsp;—&nbsp;
        <TooltipText text="Language">
          <ul>
            <li>Thai (native)</li>
            <li>English (professional)</li>
            <li>German (basic)</li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipText text="Computer">
          <ul>
            <li>Basic office software (Microsoft Office, LibreOffice, cloud storage, Graphviz, LaTeX, email hosting, etc.)</li>
            <li>Coding: Basic front-end dev, Git, Vim, Haskell/Python/Typescript/React.js/SCSS/shell scripting, etc.</li>
            <li>Linux (Debian, Nix, NixOS, QubesOS, etc.)</li>
            <li>Typing speed of 60 WPM</li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipText text="Communications">
          Obtain Bachelor and Master's degrees related to Communications technologies.
        </TooltipText>
      </li>

      <li>
        <b className="highlight">Soft Skills</b>
        &nbsp;—&nbsp;
        <TooltipText text="Workplace">
          <ul>
            <li><b className="highlight">Performance</b>: I am naturally inclined to learn something new, and I possess good quantitative and analytical thinking skills. I believe I can handle most jobs.</li>
            <li><b className="highlight">Teamwork</b>: As a highly conscientious person, I tend to be disciplined. I have so far abided by the rules in the workplaces.</li>
            <li><b className="highlight">Social</b>: I am a direct and friendly person and I dislike gossip. However, I have a social withdrawal tendency (outside work).</li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipText text="Personal">
          <ul>
            <li><b className="highlight">Self-Awareness</b>: A long self-reflection period of mine proved fruitful. I now know what truly matters to me and align my life to it.</li>
            <li><b className="highlight">Low-Impact Living</b>: I know how to save household electrity/water, eat simply, not disturb others, and frequently avoid creating unnecessary wastes.</li>
          </ul>
        </TooltipText>
      </li>
    </ul>

    <h3>External</h3>

    <ul className="more-gap-list">
      <li>
        <b className="highlight">Appearance</b>

        &nbsp;—&nbsp;
        <TooltipText text="Body">
          <ul>
            <li>177 cm</li>
            <li>Ectomorphs</li>
            <li>Brown skin</li>
            <li>Short black hair</li>
            <li>Short bread and nails</li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipText text="Clothing and Accessories">
          <ul>
            <li>No piercings and tattoos</li>
            <li>Don't usually wear watch</li>
            <li>Wear prescription glasses</li>
            <li>Usually wear only a short pant without underwear at home</li>
          </ul>
        </TooltipText>
        ,&ensp;
        <TooltipText text="Other">
          <ul>
            <li>Thai</li>
            <li>Millennials</li>
          </ul>
        </TooltipText>
      </li>
      <li>
        <b className="highlight">Behavior</b>

        &nbsp;—&nbsp;
        <TooltipText text="Interaction">
          <ul>
            <li>Calm and stable</li>
            <li>No insults, pointless arguments, and gossips</li>
            <li>Never have sexual or romantic relationship</li>
          </ul>
        </TooltipText>
      </li>
    </ul>
  </section>
//       <li>
//         <b className="highlight">Views</b>
// 
//         &nbsp;—&nbsp;
//         <TooltipText text="Life Purpose">
//           <p>Life with purpose is an end in itself. Only my subjective self constitutes my life purpose since only things that I regard as important constitute my life purpose and it requires my subjective self to regard so.</p>
// 
//           <p>After this realization, I began with the most basic actions I can take: commit suicide or live. My survival instinct nudged me to live, and my (seemingly innate) curiosity drove me to live by true meaning. Unlike made-up meaning (like music, fame, money, etc.), true meaning cannot go beyond consciousness that matters and reflects truths, plus things that can support or oppose it.</p>
//         </TooltipText>
//       </li>
