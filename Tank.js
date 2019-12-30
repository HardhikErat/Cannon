class Tank {
    constructor(iP, tx, ty, ts, tdir) {
      this.x = tx;
      this.y = ty;
      this.s = ts;
      this.isPlayer = iP;
      this.dir = tdir;
    }
  
    rectTank(tx, ty) {
      rectMode(CENTER);
      rect(tx, ty, this.s, this.s);
    }
  
    render(r,g,b) {
      fill(r,g,b);
      rectMode(CENTER);
      //center
      this.rectTank(this.x, this.y);
  
      if (this.dir == 'u') {
        //head
        this.rectTank(this.x, this.y - this.s);
  
        this.rectTank(this.x - this.s, this.y);
        this.rectTank(this.x + this.s, this.y);
  
        this.rectTank(this.x - this.s, this.y + this.s);
        this.rectTank(this.x + this.s, this.y + this.s);
  
        if (this.isPlayer)
          this.rectTank(this.x, this.y + this.s);
      } else if (this.dir == 'd') {
        //head
        this.rectTank(this.x, this.y + this.s);
  
        this.rectTank(this.x + this.s, this.y);
        this.rectTank(this.x - this.s, this.y);
  
        this.rectTank(this.x + this.s, this.y - this.s);
        this.rectTank(this.x - this.s, this.y - this.s);
  
        if (this.isPlayer)
          this.rectTank(this.x, this.y - this.s);
      } else if (this.dir == 'l') {
        //head
        this.rectTank(this.x - this.s, this.y);
  
        this.rectTank(this.x, this.y + this.s);
        this.rectTank(this.x, this.y - this.s);
  
        this.rectTank(this.x + this.s, this.y + this.s);
        this.rectTank(this.x + this.s, this.y - this.s);
  
        if (this.isPlayer)
          this.rectTank(this.x + this.s, this.y);
      } else if (this.dir == 'r') {
        //head
        this.rectTank(this.x + this.s, this.y);
  
        this.rectTank(this.x, this.y - this.s);
        this.rectTank(this.x, this.y + this.s);
  
        this.rectTank(this.x - this.s, this.y - this.s);
        this.rectTank(this.x - this.s, this.y + this.s);
  
        if (this.isPlayer)
          this.rectTank(this.x - this.s, this.y);
      }
    }
  }