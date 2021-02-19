class Tree{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		
		
		this.image=loadImage("tree.png")
		
	}
	display()
	{
		var pos =this.body.position;
		push();
		translate(pos.x,pos.y);
		
		imageMode(CENTER);
		image(this.image, 0, 0, this.width, this.height);
		pop();
			
	}

}