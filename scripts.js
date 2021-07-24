// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){

    const button_up = document.getElementById('up');
    const button_down = document.getElementById("down");
    const button_left = document.getElementById("left");
    const button_right = document.getElementById("right");
    const takeoff = document.getElementById("takeoff");
    let land = this.document.getElementById("landing");
    const abortMission = document.getElementById("missionAbort");
    const status = document.getElementById('flightStatus');
    const background = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById('spaceShuttleHeight');
    let imgObj = document.getElementById('rocket');
    imgObj.style.position = 'absolute';
    imgObj.style.left = '150px';
    imgObj.style.bottom = '0px';

    takeoff.addEventListener('click', function() {
        let ready = window.confirm('Confirm that the shuttle is ready for takeoff.');
        if (ready == true){
            status.innerHTML = 'Shuttle in flight.';
            background.style.backgroundColor = 'blue';
            shuttleHeight.innerHTML =  10000;
            movement = parseInt(imgObj.style.bottom) + 10 + 'px';
            imgObj.style.bottom = movement;
        }
    });

    land.addEventListener('click', function() {
        window.alert('The shuttle is landing. Landing gear engaged.');
        status.innerHTML = 'The shuttle has landed.';
        background.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = '0';
        imgObj.style.bottom = '0px';
        imgObj.style.left = '150px';
    });

    abortMission.addEventListener('click', function(){
        window.confirm("Confirm that you want to abort the mission.");
        status.innerHTML = "Mission aborted.";
        background.style.backgroundColor = 'green';
        shuttleHeight.innerHTML = '0';
        imgObj.style.bottom = '0px';
        imgObj.style.left = '150px';
    });

    button_up.addEventListener('click', function(){
        movement = parseInt(imgObj.style.bottom) + 10 + 'px';
        imgObj.style.bottom = movement;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;

    });

    button_down.addEventListener('click', function(){
        movement = parseInt(imgObj.style.bottom) - 10 + 'px';
        imgObj.style.bottom = movement;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;

    });

    button_left.addEventListener('click', function(){
        movement = parseInt(imgObj.style.left) - 10 + 'px';
        imgObj.style.left = movement;
       
    });

    button_right.addEventListener('click', function(){
        movement = parseInt(imgObj.style.left) + 10 + 'px';
        imgObj.style.left = movement;
    
    });
};
window.addEventListener("load", init);