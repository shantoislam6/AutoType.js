/*
 * Auto Typing Effect
 * @version 1.0.0
 * @author Shanto Islam
 * @todo Baner Title Antimtion
  https://github.com/shantoislam6/
 * 
*/
/* Init the  class */
;class AutoTyping {


	constructor ( obj ) {

		/**
		 * Plugin element.
		 * @public
		 */

		this.object = obj; 

		this.charIndex = 0;

		this.arrIndex = 0;

		this.colorIndex = 0;
		

	}

	/*All performmance handled by this function */

	start() {

		let container = this.object.container;

	if( this.object.blink == true ){

		if( this.object.blinkType == 'flatted' ){

			container.innerHTML += '<span ></span><span class="a-t-c2">_</span>';
			
		}else{

			container.innerHTML += '<span ></span><span class="a-t-c1">|</span>';

		}

	}else{
			container.innerHTML += '<span></span>';
	}

	container.lastElementChild.style.animation = 'blink-caret ' + this.object.blinkSpeed / 1000 + 's step-end infinite';

	
   let that = this;

	function autoType() {

		let loopIngTime; 

		/*this condition maintain  loop..*/

		if ( that.charIndex == that.object.text[that.arrIndex].length ) {

			that.charIndex = 0;

			that.arrIndex++;

			if( that.object.color != undefined ){

				that.colorIndex++;
			}
		

			if(that.object.loop === true){

				if ( that.arrIndex == that.object.text.length ) {
					
					that.arrIndex = 0;

				}
				if( that.object.color != undefined ){

					if( that.colorIndex == that.object.color.length){
						that.colorIndex = 0;
					}

				}

			}else{

				clearTimeout( loopIngTime );

			}
			
			/*---------for changeing time the new text--------*/

			setTimeout( ()=> {
                
				container.firstElementChild.innerHTML = '';

				if( that.object.color != undefined ){

					if(that.object.blink){

						container.lastElementChild.style.background = that.object.color[that.colorIndex];
					}

					container.style.color = that.object.color[that.colorIndex];
				}
				

				setTimeout(autoType, that.object.typeSpeed);

			},that.object.loopSpeed );

		} else {

			loopIngTime = setTimeout( autoType, that.object.typeSpeed );

			charAt();
		}
		
	}
	function charAt(){
		if ( that.object.color != undefined ){

			container.style.color = that.object.color[that.colorIndex];
			
			if( that.object.blink ){

				container.lastElementChild.style.background = that.object.color[that.colorIndex];
			}
			

		}

		container.firstElementChild.innerHTML += that.object.text[that.arrIndex].charAt( that.charIndex );

		that.charIndex++;

	}
	
	autoType();
	
	}

}

/*published the plugin as user input 
---------------------------------------------------------------*/
function autoTyping( obj ){

	return new AutoTyping( obj );
}
/*--------------------Coming soon-----------------------------------*/
