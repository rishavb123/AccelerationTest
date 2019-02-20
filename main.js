let first = true;
let startTime = new Date().getTime();
let curTime = startTime;

let v = 0;

if (window.DeviceMotionEvent != undefined) {
    window.ondevicemotion = (e) => {
        document.getElementById("p1").innerHTML = e.acceleration.x;
        document.getElementById("p2").innerHTML = e.acceleration.y;
        document.getElementById("p3").innerHTML = e.acceleration.z;



        const deltaT = (new Date().getTime() - curTime) / 1000.0;
        v += e.acceleration.x * deltaT;
        document.getElementById("p4").innerHTML = Math.round(v);

        first = false;

    }
}