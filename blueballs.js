      // Initialization      
      var container;
      var camera, scene, renderer;
      var counter = 2;

      $('#projDiv1').on('click', function(){
        if(counter % 2 == 0){
          counter++;
          init();
          animate();
        }
      })
      

      //Geo Spheres (formerly Blue Balls)
      function init() {
        container = document.getElementById( 'proj1' );

        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / 800, 1, 5000 );
        camera.position.y = -1000;

        scene = new THREE.Scene();
        
        // Lights, gotta be able to see shit
        var light;
        scene.add( new THREE.AmbientLight( 0x3385ff ) );
        light = new THREE.DirectionalLight( 0x0066ff, 2);
        light.position.set( camera.position.x, camera.position.y, camera.position.z);
        scene.add( light );

        // Material to be used in our sphere
        var material = new THREE.MeshLambertMaterial({
          side: THREE.DoubleSide,
          wireframe: true,
          color: 0x6666ff
        });
        
        // Define the geometry and pass material into mesh, then add to scene
        for(var i = 0; i < 50; i++) {
          var x = Math.random() * 2000 - 1000;
          var y = Math.random() * 2000 - 1000;
          var z = Math.random() * 2000 - 1000;
          var object = new THREE.Mesh( new THREE.SphereGeometry(100, 30, 10), material );
          object.position.set( x, y, z );
          scene.add( object );
        }

        // More setup stuff for renderer
        renderer = new THREE.WebGLRenderer({alpha:true});
        renderer.setSize( window.innerWidth, 800 );
        container.appendChild( renderer.domElement );
        container.addEventListener( 'resize', onWindowResize, false );
      }

      // Makes it so it doesnt break when you adjust window size
      function onWindowResize() {
        camera.aspect = window.innerWidth / 800;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, 800 );
      }

      function animate() {
        requestAnimationFrame( animate );
        render();
      }
            
      // Update Loop
      function render() {
        var timer = Date.now() * 0.00001;

        //Creates the AweSOME camera rotation!!!
        camera.position.x = Math.cos( timer * 50 ) * 200;
        camera.position.y = Math.tan( timer * 50 ) * 200;
        camera.position.z = Math.sin( timer * 50 ) * 200;
        camera.lookAt( scene.position );

        for ( var i = 0, l = scene.children.length; i < l; i ++ ) {
          var object = scene.children[ i ];
          
          // Makes the sphere rotation
          object.rotation.x = timer * 20;
          object.rotation.y = timer * 15;
          object.rotation.z = timer * 20;
        }
        renderer.render( scene, camera );
      }