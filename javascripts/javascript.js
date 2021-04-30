(function() {
    // Add event listener
    document.addEventListener("mousemove", space);
    const elem = document.querySelector("#space");
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