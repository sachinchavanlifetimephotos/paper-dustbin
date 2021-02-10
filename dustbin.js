class dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=100;
		this.dustbinHeight=103;
		this.wallThickness=10;
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
	
        this.width=width;   
        this.height=height;  
       
		this.image=loadImage("dustbingreen.png"); 
		World.add(world,this.image); 
        
		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody); 

		var options={ 
			isStatic:false, 
			restitution:0.3, 
			friction:0.5, 
			density:1.2, 
	   }

	}  

	display() 
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position; 
		   
		   image (this.image,100,200,this.width,this.height ); 
		  
		   pop ();  

	} 

} 
