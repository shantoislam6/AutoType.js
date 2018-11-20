

<h1 style="font-size:40px">AutoType Writer<h1>

### [Live Demo](https://shantoislam6.github.io/AutoType.js/index.html)

autoType.js is a library that allows type text automatically. Enter in any string, and watch it type at the speed you've set, backspace what it's typed, and begin a new sentence for however many strings you've set.

---

Installation
------------
#### 1ST STEP:
Download src file 

### [click here](https://github.com/shantoislam6/AutoType.js/archive/master.zip)

#### 2ND STEP:
After dowloade autoType.js libirary  first you have to link in your html document:

~~~html
<link rel="stylesheet" href="src/min.autoType.1.0.0 .css">
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

~~~






Customization
----

~~~ javascript
	autoTyping({
	   container : document.querySelector('.auto-typing'),
	 	text : ['Example One' , 'Example Tow', 'Example Three', 'Example Four' ,'Example More..'],
		loop : true, 
	   typeSpeed : 150,
	   loopSpeed : 700,
	       color : ['red','green','blue'],
	       blink : true, 
	  blinkSpeed : 400,
           blinkType : 'default', ;

    }).start();
   ~~~
    
    
  #### 'container' property :
  You have to must setup a container where your can be showing you text.
	
  #### 'text' property:
  You have to must setup this property including multiple text as a list of array.
	
  #### 'loop' property:
  The loop property allows you to setup your list of text showing continuously. It's optional.

  #### 'typeSpeed' property:
  This property for a set of auto-typing speed.
	
  #### 'loopSpeed' property:
   This property for a set of changing new-text speed.
	
  #### 'color' property:
  This property allows you to set individual color for individual text of your text array.
      
  #### 'blink' property :    
  This property is optional.If you use this, you will show a blink effect.

  #### 'blinkSpeed' property:
  This property for set speed for your blink effect.
	
  #### 'blinkType' property:
  There are two type of blink which I have used. The two blinkType property vlues are 'default' & 'faltted'.
  You can use for chaniging your blink style..
	
	
  


