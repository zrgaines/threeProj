var container3, 
    renderer3, 
    scene3, 
    camera3, 
    mesh3, 
    start = Date.now(),
    fov3 = 30;


      var counter3 = 2;

      $('#projDiv3').on('click', function(){
        if(counter3 % 2 == 0){
          counter3++;
          init3();
        }
      })
  var init3 = function(){
      // grab the container from the DOM
    container3 = document.getElementById( "proj3" );

    // create a scene
    scene3 = new THREE.Scene();

    // create a camera the size of the browser window
    // and place it 100 units away, looking towards the center of the scene
    camera3 = new THREE.PerspectiveCamera( 
      fov3, 
      window.innerWidth / 700, 
      1, 
      10000 );
    camera3.position.z = 100;
    camera3.target = new THREE.Vector3( 0, 0, 0 );

    scene3.add( camera3 );

    // create a wireframe material		
  material = new THREE.ShaderMaterial( {

      uniforms: { 
          time: { // float initialized to 0
              type: "f", 
              value: 0.0 
          }
      },
      vertexShader: document.getElementById( 'vertexShader' ).textContent,
      fragmentShader: document.getElementById( 'fragmentShader' ).textContent
      
  } );

    // create a sphere and assign the material
    mesh3 = new THREE.Mesh( 
      new THREE.IcosahedronGeometry( 20, 5),
      material 
    );
    scene3.add( mesh3 );

    // create the renderer and attach it to the DOM
    renderer3 = new THREE.WebGLRenderer({alpha: true});
    renderer3.setSize( window.innerWidth, 800 );

    container3.appendChild( renderer3.domElement );

    render3();

  }


function render3() {
  var object3 = scene3.children[1];
  object3.rotation.z += .001;
   object3.rotation.x += .001;

  material.uniforms[ 'time' ].value = .00025 * ( Date.now() - start );
  // let there be light
  renderer3.render( scene3, camera3 );
  requestAnimationFrame( render3 );

}