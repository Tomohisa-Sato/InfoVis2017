function main1(isovalue)
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();
///////////////////////////////////
   

    screen.init( volume, {
        width: window.innerWidth*0.8,
        height: window.innerHeight,
	targetDom: document.getElementById("display"),
        enableAutoResize: false
    });




//////////////////
   
    screen.scene.delete();
   
    //var isovalue = 128;
    var surfaces = Isosurfaces( volume, isovalue );
    
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth*0.8, window.innerHeight ] );
    });

   
    screen.loop();
}
