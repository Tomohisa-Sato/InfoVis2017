function main(){
   
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
    document.addEventListener('mousedown',mouse_down_event);
    var vertices =[
	new THREE.Vector3().fromArray([0,0,0]),
	new THREE.Vector3().fromArray([0,0,1]),
	new THREE.Vector3().fromArray([0,1,0]),
	new THREE.Vector3().fromArray([0,1,1]),
	new THREE.Vector3().fromArray([1,0,0]),
	new THREE.Vector3().fromArray([1,0,1]),
	new THREE.Vector3().fromArray([1,1,0]),
	new THREE.Vector3().fromArray([1,1,1])
    ];
    
    var faces = [
	[0,1,2],
	[1,2,3],
	[0,1,4],
	[1,4,5],
	[0,2,4],
	[2,4,6],
	[4,5,6],
	[5,6,7],
	[1,3,5],
	[3,5,7],
	[2,3,6],
	[3,6,7]
    ];
    var geometry = new THREE.Geometry();
    var i,j;
    for(i=0; i<8;i++){
	geometry.vertices.push(vertices[i]);
    }
    for(i=0;i<12;i++){
	geometry.faces.push(new THREE.Face3(faces[i][0],faces[i][1],faces[i][2]));
    }
    geometry.computeFaceNormals();
    var material = new THREE.MeshBasicMaterial();
    material.vertexColors = THREE.FaceColors;
    for(i=0;i<12;i++){
	geometry.faces[i].color = new THREE.Color(0,1,0);
    }
    material.side = THREE.DoubleSide;
    
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
    renderer.render(scene,camera);
    var light = new THREE.PointLight( 0xffffff);

    light.position.set(0,0,1);

    scene.add( light );

    loop();
    
   
    
    function mouse_down_event(event){
	var x_win = event.clientX;
	var y_win = event.clientY;
	var vx = renderer.domElement.offsetLeft;
	var vy = renderer.domElement.offsetTop;
	var vw = renderer.domElement.width;
	var vh = renderer.domElement.height;
	var x_NDC = 2*(x_win -vx)/vw-1;
	var y_NDC = -(2*(y_win - vy)/vh-1);
	var p_NDC = new THREE.Vector3(x_NDC,y_NDC,1);
	var p_wld = p_NDC.unproject(camera);
	var origin = camera.position;
	var direction = p_wld.sub(origin).normalize();
	var raycaster = new THREE.Raycaster(origin,direction);
	var intersects = raycaster.intersectObject(cube);
	if(intersects.length >0){
	    intersects[0].face.color.setRGB(1,0,0);
	    intersects[0].object.geometry.colorsNeedUpdate = true;
	}

	
    }
    function loop()
    {
        requestAnimationFrame( loop );
        cube.rotation.x += 0.001;
        cube.rotation.y += 0.001;
        renderer.render( scene, camera );
	
    }
	
}
