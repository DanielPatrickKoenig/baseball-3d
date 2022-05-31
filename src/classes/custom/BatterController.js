import PlayerController from '../controllers/PlayerController';
export default class BatterController extends PlayerController{
    constructor(data){
        super(data, 'https://danielpatrickkoenig.github.io/shared-app-resources/baseHumanoidRotatedUnmirrored.glb', {x: 0, y: 2, z: 0});
    }
    modelLoaded(model){
        super.modelLoaded(model);
        // model.rotateX(90 * (Math.PI/180));
        this.rigManager.currentState = 'idle';
        this.rigManager.cycle('rightLeg', 'z', [{value:-30, time:.5}, {value:30, time:.5}], ['moving', 'carying']);
        this.rigManager.cycle('leftLeg', 'z', [{value:-30, time:.5}, {value:30, time:.5}], ['moving', 'carying']);
        this.rigManager.cycle('rightLeg', 'z', [{value:0, time:.5}], ['idle', 'holding']);
        this.rigManager.cycle('leftLeg', 'z', [{value:0, time:.5}], ['idle', 'holding']);
        // this.rigManager.cycle('leftArm', 'z', [{value:-90, time:.5}], ['moving', 'idle']);
        // this.rigManager.cycle('leftArm', 'y', [{value:0, time:.5}], ['idle']);
        // this.rigManager.cycle('leftArm', 'y', [{value:-20, time:.5}, {value:20, time:.5}], ['moving']);
        // this.rigManager.cycle('leftArm', 'y', [{value:90, time:.5}], ['carying', 'holding']);
        // this.rigManager.cycle('rightArm', 'z', [{value:90, time:.5}], ['moving', 'idle']);
        // this.rigManager.cycle('rightArm', 'y', [{value:0, time:.5}], ['idle']);
        // this.rigManager.cycle('rightArm', 'y', [{value:-20, time:.5}, {value:20, time:.5}], ['moving']);
        // this.rigManager.cycle('rightArm', 'y', [{value:-90, time:.5}], ['carying', 'holding']);
    }
    move(direction){
        super.move(direction);
        console.log(this.getLocatables('LocatableController'));
    }
}