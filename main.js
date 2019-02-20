let totalAcceleration = 0;
let count = 0;

let first = true;

if (window.DeviceMotionEvent != undefined) {
    window.ondevicemotion = (e) => {
        document.getElementById("p1").innerHTML = e.acceleration.x;
        document.getElementById("p2").innerHTML = e.acceleration.y;
        document.getElementById("p3").innerHTML = e.acceleration.z;
        if (!first) {
            totalAcceleration += e.acceleration.x;
            count++;
        }


        document.getElementById("p4").innerHTML = totalAcceleration / count;

        first = false;

    }
}