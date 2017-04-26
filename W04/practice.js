function main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x008080 } );
    var cube = new THREE.Mesh( geometry, material );

    var geometry2 = new THREE.BoxGeometry( 1, 1, 2 );
    var material2 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    var cube2 = new THREE.Mesh( geometry2, material2 );
    cube2.position.set(0.4,0,0);
    
    var light = new THREE.PointLight(0xffffff);
    light.position.set(1,1,1);
    scene.add(light);
    scene.add(cube );
    scene.add(cube2);
    

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        cube.rotation.x += 0.001;
        cube.rotation.y += 0.001;
	cube2.rotation.x+=0.001;
        renderer.render( scene, camera );
    }
}
