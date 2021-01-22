//#1
class AnimationHuman extends HTMLElement {
	connectedCallback() {
		var link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = '/static/fontawesome-free-5.12.0-web/css/all.css';
		var style = document.createElement('style');
		style.textContent = `
  * {
    margin: 0;
    padding: 0;
  }
  body {
    overflow: hidden;
  }
  #runner {
    --bg-height: 150px;
    --bg-width: 150px;
    position: absolute;
    bottom: 10vh;
    background: url('static/spritesheet.png');
    background-repeat: no-repeat;
    background-size: calc(8*var(--bg-width)) var(--bg-height);
    height: 150px;
    width: var(--bg-width);
    display: none;
  }
  .run {
    display: block !important;
    animation: walk 0.5s steps(1, end) 5 forwards,
    still 2.5s steps(1, end) 3.5s 1 forwards,
    click 1s steps(1, end) 6s 1 forwards,
    talk 1s steps(1, end) 11s 1 forwards,
    forward 2.5s linear 1 forwards;
  }
  @keyframes walk{
    0%, 100% {
      background-position: 0px;
    }
    50%{
      background-position: calc(-1*var(--bg-width));
    }
  }
  @keyframes still{
    0% {
      background-position: calc(-2*var(--bg-width));
    }
    50%, 100% {
      background-position: calc(-3*var(--bg-width));
    }
  }
  @keyframes click{
    0% {
      background-position: calc(-4*var(--bg-width));
    }
    50% {
      background-position: calc(-5*var(--bg-width));
    }
    100% {
      background-position: calc(-6*var(--bg-width));
    }
  }
  @keyframes talk{
    0% {
      background-position: calc(-6*var(--bg-width));
    }
    50%, 100% {
      background-position: calc(-7*var(--bg-width));
    }
  }
  @keyframes forward {
    0% {
      transform: translateX(100vw);
    }
    100% {
      transform: translateX(30vw);
    }
  }
  @media screen and (max-width: 600px) {
    #runner {
      --bg-height: 75px;
      --bg-width: 75px;
    }
    #road{
      transform: translateY(-5vh);
      border-bottom: 2px double black;
    }
  }
  #road {
    width: 100%;
    border-bottom: 5px double black;
    position: absolute;
    bottom: 10vh;
    display: none;
  }
  #sign {
    height: 100%;
    border-left: 5px dashed black;
    position: absolute;
    left: calc(30vw + 35px);
    bottom: 10vh;
  }
  #btn {
    background: url('static/arrow-btn.png');
    background-repeat: no-repeat;
    width: 25px;
    height: 75px;
    position: absolute;
    left: calc(30vw + 26px);
    bottom: calc(10vh + 3px);
    display: none;
  }
  .moveUp {
    bottom: 60vh !important;
    transition: bottom 4s ease-in-out;
  }
	#trigger {
		position: absolute;
		bottom: 0;
		right: 0;
		padding: 10px;
		text-decoration: none;
		color: inherit;
	}
`;
		let a = document.createElement('a');
		a.id = 'trigger';
		a.href = '#';
		let i = document.createElement('i');
		i.classList = 'far fa-question-circle fa-2x';
		a.appendChild(i)
		var runner = document.createElement('div');
		runner.setAttribute('id', 'runner');
		var road = document.createElement('div');
		road.setAttribute('id', 'road');
		var btn = document.createElement('div');
		btn.setAttribute('id', 'btn');
		//road btn
  var trigger = a; 
  trigger.addEventListener("click", myFunction);
  function myFunction() {
    runner.classList.toggle('run');
    trigger.style.display = 'none';
    btn.style.setProperty('display', "block", 'important');
    road.style.setProperty('display', "block", 'important');
    setTimeout(function() {
      road.classList.add('moveUp');
      btn.classList.add('moveUp');
      runner.classList.add('moveUp');
    }, 7000);
  }

		var shadow = this.attachShadow({mode: 'open'});
		shadow.appendChild(link);
		shadow.appendChild(style);

		shadow.appendChild(a);
		shadow.appendChild(runner);
		shadow.appendChild(road);
		shadow.appendChild(btn);

  }
}
window.customElements.define('animation-human', AnimationHuman);
