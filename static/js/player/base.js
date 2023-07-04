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

        this.ctx = this.root.game_map.ctx;
    }

    start(){

    }

    update(){
        this.render();
    }

    render(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
