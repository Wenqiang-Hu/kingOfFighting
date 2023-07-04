import  { AcGameObject }  from '/static/js/ac_game_object/AcGameObject.js';

export class Player extends AcGameObject{
    constructor(root, info){
        super();

        this.root = root;
        this.id = info.id;
        this.x = info.x;
        this.y = info.y;
        this.width = info.width;
        this.height = info.height;
        this.color = info.color;

        this.vx = 0;
        this.vy = 0;

        this.speedx = 400; // horizontal moving speed
        this.speedy = 1000; // vertical moving speed
        
        this.direction = 1;
        this.gravity = 50;

        this.ctx = this.root.game_map.ctx;
    }

    start(){

    }

    move(){
        this.vy += this.gravity;

        this.x += this.vx * this.timeDelta / 1000;
        this.y += this.vy * this.timeDelta / 1000;

        if (this.y > 450){
            this.y = 450;
            this.vy = 0;
        }
    }

    update(){
        this.move();
        this.render();
    }

    render(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
