import './UserInterface.css';
const UserInterface = ({scene}) => {
    const processAction = (data, type) => {
        // handle actions here
    }
    scene.setActionHandler(processAction);
    const onSwingButtonClicked = () => {
        scene.swing();
    }
    return (
        <div className="user-interface">
            <button onClick={onSwingButtonClicked}>Test Button</button>
        </div>
    );
}
export default UserInterface;