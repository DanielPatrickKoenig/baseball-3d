import BaseScene from '../BaseScene';
import GroundController from '../controllers/GroundController';
import LightController, {LightTypes} from '../controllers/LightController';
import BallCollisionController from './BallCollisionController';
import BatterController from './BatterController';
export default class GameScene extends BaseScene{
    constructor(el){
        super(el);
        this.batter = null;
        this.balls = null;
    }
    initialize(){
        const lightController = new LightController({environment: this.environment});
        lightController.addLight({type: LightTypes.DIRECTIONAL, color: 0xffffff, intensity: 1.5, target: {x: 20, y: 0, z: 15}});
        lightController.addLight({type: LightTypes.DIRECTIONAL, color: 0xffffff, intensity: .5, target: {x: -5, y: 0, z: -22}});

        new GroundController({environment: this.environment}, 'https://danielpatrickkoenig.github.io/spirit-of-kovak/dist/dirt_row.png');

        this.batter = new BatterController({environment: this.environment});

        this.balls = new BallCollisionController({environment: this.environment});
    }
    swing(){
        this.batter.swing();
    }
}