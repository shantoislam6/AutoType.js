

<h1 style="font-size:40px">AutoType Writer<h1>

### [Live Demo](http://www.mattboldt.com/demos/typed-js/)

autoType.js is a library that types. Enter in any string, and watch it type at the speed you've set, backspace what it's typed, and begin a new sentence for however many strings you've set.

---

Installation
------------
#### 1ST STEP:
Download src file [click here](https://github.com/shantoislam6/autoType-Writer/archive/master.zip)
#### 2ND STEP:
After dowloade autoType.js libirary  first you have to link in your html document:
~~~html
<script src="src/min.autoType.1.0.0.js"></script>
~~~

#### Setup

This is really all you need to get going.

~~~ html
  <div>
     <h3 class="auto-typing" ></span></h3>
  </div>
~~~

~~~ javascript
<script>
  	autoTyping({
		container : document.querySelector('.auto-typing'),
			 text : ['Example One' , 'Example Tow', 'Example Three', 'Example Four' ,'Example More..'],
			 loop : true, //optional
		    typeSpeed : 150,
		    loopSpeed : 700,
			color : ['red','green','blue'],//optional
			blink : true, //optional
	   blinkSpeed : 400,
		blinkType : 'default', // flatted;

	}).start();
</script>
~~~






Customization
----

~~~ javascript

~~~

