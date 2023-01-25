// Create a class for the element
class DropdownMenu extends HTMLElement {
	constructor() {
		super();
	}
	connectedCallback() {
    const shadow = this.attachShadow({mode: 'open'});

		const style = document.createElement('style');
		style.innerHTML = `
			* {
        margin: 0;
        padding: 0;
      }
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      .container {
        margin: 0 auto;
        width: 100%;
      }
      .upper {
        width: 100%;
        height: 50px;
        box-shadow:
          2px 0 0 0 black,
          0 2px 0 0 black,
          2px 2px 0 0 black,   /* Just to fix the corner */
          2px 0 0 0 black inset,
          0 2px 0 0 black inset;
        font-size: 24px;
        cursor: pointer;
      }
      .upper > label {
        display: inline-block;
        width: 100%;
        height: 100%;
        line-height: 50px;
        padding-left: 20px;
        cursor: pointer;
        position: relative;
      }
      label > svg {
        position: absolute;
        right: 10px;
        top: 10px;
      }
      .lower {
        overflow:hidden;
        width: 100%;
        max-height: 0px;
        transition: max-height  0.5s;
        box-shadow:
          2px 0 0 0 black,
          0 2px 0 0 black,
          2px 2px 0 0 black,   /* Just to fix the corner */
          2px 0 0 0 black inset,
          0 2px 0 0 black inset;
      }
      #btnControl {
        display: none;
      }
      #btnControl:checked ~ .lower {
        max-height: 1000px;
        transition: max-height 2s;
      }
      ul {
        display: block;
        list-style-type: none;
        padding: 20px;
        font-size: 24px;
        line-height: 36px;
      }
      li {
        cursor: pointer;
      }
      a {
				color:inherit;
        display:inline-block;
        height:100%;
        text-decoration: none;
        width:100%;
      }
      a:hover > span {
        opacity: 1;
      }
      .opague01 {
        opacity: 0.2;
      }
		`;
		var div = document.createElement('div');
		div.innerHTML = `
		<input type="checkbox" id="btnControl"/>
      <div class='upper'>
        <label for="btnControl">
          Quick Navigation
          <svg width="32" height="32" transform="scale(1)">
            <polyline transform="scale(0.2)" points="40 60 80 100 120 60" stroke="black" stroke-width="20"
              stroke-linecap="round" fill="none" stroke-linejoin="round"/>
          </svg>
        </label> 
      </div>
      <div class='lower'>
        <ul>
          <li>Introduction<span></span></li>
          <li><a href="#">Step 1<span class='opague01'> - How to setup</span></a></li>
          <li><a href="#">Step 2<span class='opague01'> - How to buy a domain</span></a></li>
          <li><a href="#">Step 3<span class='opague01'> - How to buy a pizza</span></a></li>
          <li><a href="#chapter4">Step 4<span class='opague01'> - How to setup server</span></a></li>
          <li><a href="#">Step 5<span class='opague01'> - How to celebrate yourself</span></a></li>
        </ul>
      </div>
		`;
    //insert all to the shadow dom
    shadow.appendChild(style);
    shadow.appendChild(div);
  }
}
// Define the new element
customElements.define('dropdown-menu', DropdownMenu);

