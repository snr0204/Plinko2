class Form {
    constructor(){
        this.title = createElement("h1")
        this.title1 = createElement("h1")
        this.title2 = createElement("h1")
        this.title3 = createElement("h1")
        this.title4= createElement("h1")
        this.title5= createElement("h1")

       

         
    }
    display(){

        this.title.html("100")
        this.title.position(20,700)
        this.title1.html("200")
        this.title1.position(100,700)
        this.title2.html("300")
        this.title2.position(180,700)
        this.title3.html("400")
        this.title3.position(260,700)
        this.title4.html("500")
        this.title4.position(340,700)
        this.title5.html("600")
        this.title5.position(410,700)
        this.color  = color(200,200,200)
    
    }
}