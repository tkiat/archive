<!--insert title name here with symbol we dont need anymore json file-->
## 1. Use CSS Methodology
### Why Should You Use It? 
CSS methodologies are formal system that help us not only scale CSS code better, but also make our code more readable and more systematic. 
### Available CSS Methodologies
OOCSS (Objected-Oriented CSS), BEM (Block, Element, Modifier), SMACSS, etc. The most used one (at least currently) is BEM so I am going to talk about it in sections below.
### Block, Element, Modifier (BEM)
I recommend you to look at BEM official websites for definitions and supplement yourself with articles somewhere else along the line of "overcoming common problems in BEM" title. Below is a rough definition at a glance.

BEM uses only class for CSS selectors. It has three parts:
1. Block
  - It is independent component that can be reused.
  - Class structure: xxx or xxx-yyy. For example, `<form class='search-form'></form>`
2. Element
  - A part of a block that can't be separated from it. Examples include full name input in a form field.
  - Class Structure: block-name__element-name
  - An element cannot be a part of another element. If an element contains subelements, treat it like a service block. For example, instead of
		```
		<ul>
			<li class='menu__item'>
				...many subelements
			<li>
		</ul>
		```
		use
		```
		<ul>
			<li class='menu-item'>
				...many subelements
			<li>
		</ul>
		```
3. Modifier
	- Describes appearance, state, or behavior of a block or an element. It can't be used alone i.e. it must be used together with a block or an element's class
	- Class structure: block-name_modifier-name or block-name__element-name_modifier-name. For example, `<form class="search-form search-form_focused">`

### BEM Best Practices
  - Use strong meaningful word e.g. use `menu-icon_warning` rather than `menu-icon_background-red`. The reason is that `...background-red` is not only too specific (i.e. cannot assign other attributes without the classname remains reasonable) but also does not really have any meaning. Does 'red' mean 'blood' or 'urgency' or something else? We never know. 

## 2. Use CSS Framework
  CSS framework is framework that helps us developer write CSS easier. The first time I need framework is when I want to generate many, say 1000+ random particles with different properties. Only insane person wants to code with vanila CSS in this situation.
## 3. Normalize/Reset CSS
Ever wonder why there is unexpected margin on your website even you don't specify it? Yes, you are right! Each browser can have different default CSS implementations. By adding a predefined stylesheet into the project, you can expect the same default behavior across browsers. This stylesheet can either remove all styles from the web (reset) or retain some basic default styling (normalize).
## 4. Use CSS Vendor Prefixes
When the standard comes out, different browsers can have different interpretations or implementations. The prefix such as -webkit- for chrome/safari, -moz- for firefox, -ms- for internet explorer, -o- for opera is used to make your code behaves as expected on different browsers. Tools like Autoprefixer can automatically parse your CSS and add vendor prefixes, so that you don't have to worry about it again.
## 5. Prefer External CSS Over Inline Styling and Internal CSS
## 6. Systematically Order Properties and Selectors
There are a lot of ways to do this. I personally order them alphabetically. It offers many advantages: 
1. Anyone in the team is already familiar with it
2. It is very readable. Class selectors (start with '.') are grouped nicely. This is also true for ID selector (start with '#'), media query, keyframes, generic classes

## 7. Combine CSS Elements with Shared Properties
For example,
```
div, p {
	padding: 0 20px;
	font-size: 24px;
	...other shared properties
}
div {
	...all unique properties for div
}
```
## 8. Use CSS Minifiers
Extra spaces and other stuffs are nice to us since they make codes more readable. Unfortunately, they make file size unnecessarily bigger and hence higher bandwidth usage on websites. CSS minifier comes into play. It eliminates those.
## 9. Comments
You may sometimes comment if the code is hard to understand. Never comment something trivial such as
```
.verbose {
	/*This aligns text to the right*/
	text-align: right;
}
```
## 10. Combine Multiple CSS Files with CSS Bundler
This reduces the number of HTTP requests. The client can then view your website faster.
