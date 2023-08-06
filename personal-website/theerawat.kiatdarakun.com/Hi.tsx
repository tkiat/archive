import React from "react"

import {TooltipText, TooltipTextWithDelay} from "../share"

export const Hi = (): React.ReactElement =>
  <div className="no-split">
    <p>Hi, I am Theerawat <i className="fa-regular fa-face-grin"></i>. I live by my judgments and interpretations of <b className="highlight">the true meaning of life</b> and produce works on sustainability, software, and philosophy that reflect them. I possess good English and analytical skills and a background in communications technology. Here are&nbsp;
      <TooltipTextWithDelay text="my contact info">
        <span className="notbold">
          <i className="fa-regular fa-envelope"></i> <span style={{unicodeBidi: "bidi-override", direction: "rtl"}}>moc.nukaradtaik@tawareeht</span> <i className="fa-solid fa-key"></i> <a className="contact__link" href="https://raw.githubusercontent.com/tkiat/configs-and-scripts/main/configs/gpg/public.pgp" target="blank">GPG Public Key</a>
        </span>
      </TooltipTextWithDelay>
      , the&nbsp;
      <TooltipTextWithDelay text="credits">
        <span className="notbold">
          <span className="highlight">[Font]</span> &nbsp;
          <a href="https://fonts.google.com/specimen/Lato">Lato</a>, &nbsp;
          <a href="https://fonts.google.com/specimen/Raleway">Raleway</a>
          &nbsp;—&nbsp;
          <span className="highlight">[Background]</span> &nbsp;
          <a href="https://www.vecteezy.com/vector-art/229917-high-seas-vector-illustration">Ocean</a>, &nbsp;
          <a href="https://www.vecteezy.com/vector-art/192739-stone-gate-in-the-desert-landscape-vector">Desert</a>, &nbsp;
          <a href="https://www.vecteezy.com/vector-art/271238-cherry-blossoms-background-illustration">Cherry Blossoms</a>, &nbsp;
          <a href="https://www.vecteezy.com/vector-art/2395226-snow-mountain-background-vector">Snow</a>
          &nbsp;—&nbsp;
          <span className="highlight">[Duck]</span> &nbsp;
          <a href="https://freesvg.org/duck">Duck</a>, &nbsp;
          <a href="https://freesvg.org/green-party-hat">Party Hat</a>, &nbsp;
          <a href="https://freesvg.org/orange-balloon">Balloon</a>, &nbsp;
          <a href="https://freesvg.org/sunglasses-black-silhouette">Sunglasses</a>, &nbsp;
          <a href="https://freesvg.org/usb-video-camera-symbol-vector-drawing">Camera</a>, &nbsp;
          <a href="https://freesvg.org/vector-drawing-of-cogwheel-gear">Cogwheel</a>
        </span>
      </TooltipTextWithDelay>
      &nbsp;for assets on this website, and the&nbsp;
      <TooltipTextWithDelay text="license">
        <span className="notbold">
          This work is licensed under the Creative Commons Attribution-NonCommercial-NoDerivs 3.0 Unported License. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-nd/3.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
        </span>
      </TooltipTextWithDelay>
      &nbsp;for the content here.
    </p>

    <h3 className="highlight">The True Meaning of Life</h3>

    <div>
      This is the summary of my view on&ensp;
      <TooltipText text="Meaning">
        Meaning is a sense of importance, which requires a <i>conscious</i> inclination toward or against something. To my knowledge, only instinctual emotions, sensory perceptions, and thoughts can create meaning.
      </TooltipText>
      &ensp;-&gt;&ensp;
      <TooltipText text="The meaning of Life">
        The meaning of life is a sense of importance that emerges from life, and any capable entity may perceive it. The definition of such an entity depends on knowledge and beliefs. Some believe in souls and/or God; some believe only in their ideas of the physical world; some believe that only their consciousness exists.
      </TooltipText>
      &ensp;-&gt;&ensp;
      <TooltipText text="The True Meaning of Life">
        <div>Having five legs is a true property of a five-leg unicorn, even though it is fictional. Likewise, the true meaning of life is a sense of importance emerging from the inherent properties of life (whether or not life is fictional), and any capable entity may perceive it.</div>

        <br />

        <div>To my knowledge, only instinctual emotions, sensory experiences, and thoughts can create meaning, out of which only the first two are the inherent qualities of life since thoughts alone are arbitrary. Based on emotions and sensory perceptions, one may use memories and thoughts to align actions and possessions with meanings emerging from them. Such action, though probably imperfect, is always a manifestation of one's pursuit of true meaning.</div>
      </TooltipText>
    </div>
  </div>
