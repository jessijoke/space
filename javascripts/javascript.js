const elem = document.querySelector("#space");
const displayText = document.querySelector("#text");

if (window.DeviceOrientationEvent && 'ontouchstart' in window) {
    
    window.addEventListener("deviceorientation", handleOrientation, true);

    function handleOrientation(event) {
        let xTilt = event.beta;
        let yTilt = event.alpha;

        displayText.innerText = `Changing the message so I know it updated`;
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        //let _mouseX = data.dm.x;
        //let _mouseY = data.dm.y;
        let _depth1 = `50% 50%`;
        let _depth2 = `${50 - (xTilt)}% ${50 - (yTilt)}%`;
        let _depth3 = `${80 - ((xTilt - 40) * .005)}% ${80 - ((xTilt - 40) * .005)}%`;
        let _depth4 = `${50 - ((xTilt - 40) * 1.5)}% ${50 - ((xTilt - 40) * 1.5)}%`;
        let _depth5 = `${50 - ((xTilt - 40) * 3)}% ${50 - ((xTilt - 40) * 3)}%`;
        let x = `${_depth5}, ${_depth4}, ${_depth3}, ${_depth2}, ${_depth1}`;
        //console.log(x);
        elem.style.backgroundPosition = x;
    }

    setTimeout(handleOrientation(), 100);
    //-13-17 xtilt
    //36

} else {
    // setup some mouse following hack
    (function() {
        // Add event listener
        document.addEventListener("mousemove", space);
        // Magic happens here
        function space(e) {
            let _w = window.innerWidth/2;
            let _h = window.innerHeight/2;
            let _mouseX = e.clientX;
            let _mouseY = e.clientY;
            let _depth1 = `${50 - (_mouseX - _w) * 0.000001}% ${50 - (_mouseY - _h) * 0.000001}%`;
            let _depth2 = `${50 - (_mouseX - _w) * 0.00002}% ${50 - (_mouseY - _h) * 0.00002}%`;
            let _depth3 = `${50 - (_mouseX - _w) * 0.0005}% ${50 - (_mouseY - _h) * 0.0005}%`;
            let _depth4 = `${50 - (_mouseX - _w) * 0.007}% ${50 - (_mouseY - _h) * 0.007}%`;
            let _depth5 = `${50 - (_mouseX - _w) * 0.03}% ${50 - (_mouseY - _h) * 0.03}%`;
            let x = `${_depth5}, ${_depth4}, ${_depth3}, ${_depth2}, ${_depth1}`;
            console.log(x);
            elem.style.backgroundPosition = x;
        }
    
    })();
    
}



//alert("This is going to work");
    /*var gn = new GyroNorm();

    let displayText = document.querySelector("#text");

   //alert('this is new');

    gn.init().then(function() {
        start_gn();
    });

    function start_gn() {
        gn.start(gnCallBack);
    }

    function gnCallBack(data) {
        }
        */
        // Process:
    // data.do.alpha	( deviceorientation event alpha value )
    // data.do.beta		( deviceorientation event beta value )
    // data.do.gamma	( deviceorientation event gamma value )
    // data.do.absolute	( deviceorientation event absolute value )
     // data.dm.x		( devicemotion event acceleration x value )
    // data.dm.y		( devicemotion event acceleration y value )
    // data.dm.z		( devicemotion event acceleration z value )

    // data.dm.gx		( devicemotion event accelerationIncludingGravity x value )
    // data.dm.gy		( devicemotion event accelerationIncludingGravity y value )
    // data.dm.gz		( devicemotion event accelerationIncludingGravity z value )

    // data.dm.alpha	( devicemotion event rotationRate alpha value )
    // data.dm.beta		( devicemotion event rotationRate beta value )
    // data.dm.gamma	( devicemotion event rotationRate gamma value )