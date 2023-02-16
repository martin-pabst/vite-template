import * as PIXI from "pixi.js";
import $ from 'jquery';

export class PixiDemo {

    constructor() {
        const app = new PIXI.Application({ antialias: true });
        let div = <HTMLDivElement>$('#pixi-canvas')[0];
        div.appendChild(<any>app.view);

        const graphics = new PIXI.Graphics();
        // Rectangle
        graphics.beginFill(0xDE3249);
        graphics.drawRect(50, 50, 100, 100);
        graphics.endFill();

        app.stage.addChild(graphics);


        PIXI.Assets.load('graphics/spritesheet.json').then(() => {
            const texture = PIXI.Texture.from('TowerDefense#31');
            const sprite = PIXI.Sprite.from(texture);
            sprite.position.x = 400;
            sprite.position.y = 300;
            app.stage.addChild(sprite);
        });

    }

    
}