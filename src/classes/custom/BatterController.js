import PlayerController from '../controllers/PlayerController';
export default class BatterController extends PlayerController{
    constructor(data){
        super(data, 'https://danielpatrickkoenig.github.io/shared-app-resources/baseHumanoidRotatedUnmirrored.glb', {x: 0, y: 2, z: 0});
        this.swingTime = .5;
    }
    async swing(){
        const swingSpeed = this.swingTime/2;
        this.rigManager.sequence('rightClavical', 'x', [{value:0, time:swingSpeed}, {value:10, time:swingSpeed}]);
        this.rigManager.sequence('leftClavical', 'x', [{value:0, time:swingSpeed}, {value:10, time:swingSpeed}]);
        this.rigManager.sequence('rightArm', 'x', [{value:-80, time:swingSpeed}, {value:-70, time:swingSpeed}]);
        this.rigManager.sequence('leftArm', 'x', [{value:-80, time:swingSpeed}, {value:-70, time:swingSpeed}]);
        this.rigManager.sequence('rightForearm', 'x', [{value:-50, time:swingSpeed}, {value:-60, time:swingSpeed}]);
        this.rigManager.sequence('leftForearm', 'x', [{value:-50, time:swingSpeed}, {value:-60, time:swingSpeed}]);
        this.rigManager.sequence('torso', 'y', [{value: 0, time:swingSpeed}, {value: 60, time:swingSpeed}]);
        this.rigManager.sequence('neck', 'y', [{value: 0, time:swingSpeed}, {value: -60, time:swingSpeed}]);
        await new Promise(resolve => setTimeout(resolve, this.swingTime * 1000 * 1.001));
        this.wait();
    }
    wait(){
        this.rigManager.sequence('rightSholder', 'x', [{value:-20, time:2}]);
        this.rigManager.sequence('leftSholder', 'x', [{value:-20, time:2}]);
        this.rigManager.sequence('rightClavical', 'x', [{value:10, time:2}]);
        this.rigManager.sequence('leftClavical', 'x', [{value:10, time:2}]);
        this.rigManager.sequence('rightArm', 'x', [{value:-70, time:2}]);
        this.rigManager.sequence('leftArm', 'x', [{value:-70, time:2}]);
        this.rigManager.sequence('rightForearm', 'x', [{value:-60, time:2}]);
        this.rigManager.sequence('leftForearm', 'x', [{value:-60, time:2}]);
        this.rigManager.sequence('torso', 'y', [{value: -60, time:2}]);
        this.rigManager.sequence('neck', 'y', [{value: 60, time:2}]);
    }
    modelLoaded(model){
        super.modelLoaded(model);
        // model.rotateX(90 * (Math.PI/180));
        this.rigManager.currentState = 'idle';
        this.rigManager.cycle('rightLeg', 'z', [{value:-30, time:.5}, {value:30, time:.5}], ['moving', 'carying']);
        this.rigManager.cycle('leftLeg', 'z', [{value:-30, time:.5}, {value:30, time:.5}], ['moving', 'carying']);
        this.rigManager.cycle('rightLeg', 'z', [{value:0, time:.5}], ['idle', 'holding']);
        this.rigManager.cycle('leftLeg', 'z', [{value:0, time:.5}], ['idle', 'holding']);

        this.wait();

        
    }
    move(direction){
        super.move(direction);
        console.log(this.getLocatables('LocatableController'));
    }
}