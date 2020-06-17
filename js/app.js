var app=new Vue({
				el: "#app",

				data: {
					firstNum:"",
					secondNum:"",
					has_error:false,
					result:"",
					error:"",
					output:""
				},

				methods: {
					plus(){
						var first=Number(this.firstNum);
						var second=Number(this.secondNum);
						this.result= first + second;
						this.output=" Summation is :"

					},
					minus(){ 
						var first=Number(this.firstNum);
						var second=Number(this.secondNum);
						this.result= first - second;
						this.output="Difference is :"

					},
					multiplication(){
						var first=Number(this.firstNum);
						var second=Number(this.secondNum);
						this.result= first * second;
						this.output="Multiplication is :"

					},
					division(){
						var first=Number(this.firstNum);
						var second=Number(this.secondNum);
						this.result= first / second;
						this.output="Division is :"

					},
					checkError(){
						if(isNaN(this.firstNum)) //if a number returns false
						{
							this.has_error=true;
							this.error="In the 1st field please enter a valid number";
						}
						else if(isNaN(this.secondNum))
						{
							this.has_error=true;
							this.error="In the 2nd field Please enter a valid number";
						}
						else
						{	
							this.has_error=false;
							this.error="";	
						}
					}
				}
			})