import { Player } from "./base.js";
import { GIF } from "../utility/gif.js";

export class Kyo extends Player {
    constructor(root, info){
        super(root, info);

        this.init_animations();
    }

    init_animations(){
        let outer = this;
        let offset = [0, -22, -22, -140, 0, 0, 0]
        for (let i = 0; i < 7; i ++) {
            let gif = GIF();
            gif.load(`/static/images/player/kyo/${i}.gif`);
            this.animations.set(i, {
                gif: gif,
                frame_cnt: 0,   // total frame count
                frame_rate: 5,  // refresh every 5 frame
                offset_y: offset[i],       
                loaded: false,  // finished loading
                scale: 2,
            });

            gif.onload = function () {
                let obj = outer.animations.get(i);
                obj.frame_cnt = gif.frames.length;
                obj.loaded = true;

                if (i === 3) {
                    obj.frame_rate = 4;
                }

                if (i === 4) {
                    obj.frame_rate = 7;
                }

            }
        }
    }
}