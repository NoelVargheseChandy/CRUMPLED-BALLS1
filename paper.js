class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false
            restitution:0.3,
            friction:0,
            density:1.2		
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
 		World.add(world, this.body);
        this.image=loadImage("paper.png");
	}
	display()
	{
		image(this.image, 0,0,this.r, this.r); 
					
        
			push()
			translate(this.body.position.x,this.body.position.y);
			
			//strokeWeight(4);
			fill(128,128,128)
			
			pop()
			
    }