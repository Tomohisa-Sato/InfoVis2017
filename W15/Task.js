var volume = new KVS.LobsterData();
var screen = new KVS.THREEScreen();
var surfaces;
var isovalue=128;
function main()
{
   
///////////////////////////////////
   






//////////////////
    screen.init( volume, {
        width: window.innerWidth*0.8,
        height: window.innerHeight,
	targetDom: document.getElementById("display"),
        enableAutoResize: false
    });

    
    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var isovalue = 128;
    

    surfaces = Isosurfaces( volume, isovalue );
    
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth*0.8, window.innerHeight ] );
    });

   
    screen.loop();
}


function apply(){
    var iso = document.getElementById("isovalue");
    var t_value = iso.value;
    isovalue=t_value;
    screen.scene.remove(surfaces);
    surfaces = Isosurfaces( volume, isovalue );
    screen.scene.add( surfaces );
}
	  
