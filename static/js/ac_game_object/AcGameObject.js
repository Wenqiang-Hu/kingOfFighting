let AC_GAME_OBJECTS = [];

class AcGameObject{
    constructor(){
        AC_GAME_OBJECTS.push(this);
        this.timeDelta;
        this.has_call_start = false;
    }

    start(){

    }

    update(){

    }

    destroy() {
        for (let i in AC_GAME_OBJECTS){
            if (AC_GAME_OBJECTS[i] === this){
                AC_GAME_OBJECTS.splice(i, 1);
                break;
            }
        }
    }
}

let last_timestamp;
let AC_GAME_OBJECT_FRAME = (timestamp) => {
    for (let object of AC_GAME_OBJECTS){
        if (!object.has_call_start) {
            object.start();
            object.has_call_start = true;
        } else {
            object.timeDelta = timestamp - last_timestamp;
            object.update();
        }
    }
    last_timestamp = timestamp;
    requestAnimationFrame(AC_GAME_OBJECT_FRAME);

}
requestAnimationFrame(AC_GAME_OBJECT_FRAME);

export {
    AcGameObject
}