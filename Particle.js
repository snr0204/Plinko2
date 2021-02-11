class Particle {

    constructor (x , y , r ){


        //this.scoreBoard= createElement("h1")


        var options = {
            
            restitution: 0.5
        }
        this.r = r;
        this.body = Bodies.circle(x , y , this.r , options)
        this.color = color(random(0,255) , random(0,255) , random(0,255));
        World.add (world , this.body)
        this.radius = r 
    }
    display(){
        var pos = this.body.position
        push()
        translate(pos.x , pos.y)
        rotate(this.body.angle)
        fill(this.color);
        ellipse(0 , 0 , this.r, this.r)
        pop()
        
        if(pos.x>10&&pos.x<420&&pos.y>=700&&pos.y<= 780){
            console.log("reached");
        }
    
    }
}

