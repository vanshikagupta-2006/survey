class Form {
   constructor() {
      this.input = createInput("Name");
      this.input1 = createInput("Email ID");
      this.button = createButton('OK');
      this.greeting = createElement('h2');
      this.greeting1 = createElement('h6');
      this.greeting2 = createElement('h2');
   }
   hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.input1.hide();
   } 
   display(){
     var title = createElement('h2') 
     title.html("Welcome Voters");
     title.position(130, 0); 
     this.input.position(130, 160);
     this.input1.position(130, 140);
     this.button.position(250, 200); 
     this.button.mousePressed(()=>{
     this.input.hide();
     this.input1.hide();
     this.button.hide();
     player.name = this.input.value();
     playerCount+=1;
     player.index = playerCount; 
     player.update();
     player.updateCount(playerCount);
     this.greeting.html("Hello " + player.name) 
     this.greeting.position(130, 40);
     this.greeting1.html("Q1 How much per month would you be willing to pay?")
     this.greeting1.position(20, 70);
     this.button1 = createButton('1000');
     this.button2 = createButton('more');
     this.button1.position(20, 110); 
     this.button2.position(60, 110); 
     this.button1.mousePressed(()=>{
      this.button1.hide();
      this.button2.hide();
      this.greeting1.hide();
      this.greeting.hide();
      this.greeting2.html("THANK YOU "+ player.name)
     this.greeting2.position(20, 70);
   })
   this.button2.mousePressed(()=>{
      this.button1.hide();
      this.button2.hide();
      this.greeting1.hide();
      this.greeting.hide();
      this.greeting2.html("THANK YOU "+ player.name)
     this.greeting2.position(20, 70);
   })
     });
     
   }
}