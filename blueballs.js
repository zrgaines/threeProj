      // Initialization      
      var container1;
      var camera1, scene1, renderer1;
      var counter1 = 2;

      $('#projDiv1').on('click', function(){
        if(counter1 % 2 == 0){
          counter1++;
          init();
          animate();
        }
      })
      

      //Geo Spheres (formerly Blue Balls)
      function init() {
        container1 = document.getElementById( 'proj1' );

        camera1 = new THREE.PerspectiveCamera( 45, window.innerWidth / 800, 1, 5000 );
        camera1.position.y = -1000;

        scene1 = new THREE.Scene();
        
        // Lights, gotta be able to see shit
        var light1;
        scene1.add( new THREE.AmbientLight( 0x3385ff ) );
        light1 = new THREE.DirectionalLight( 0x0066ff, 2);
        light1.position.set( camera1.position.x, camera1.position.y, camera1.position.z);
        scene1.add( light1 );

        // Material to be used in our sphere
        var material1 = new THREE.MeshLambertMaterial({
          side: THREE.DoubleSide,
          wireframe: true,
          color: 0x6666ff
        });
        
        // Define the geometry and pass material into mesh, then add to scene
        for(var i = 0; i < 50; i++) {
          var x = Math.random() * 2000 - 1000;
          var y = Math.random() * 2000 - 1000;
          var z = Math.random() * 2000 - 1000;
          var object1 = new THREE.Mesh( new THREE.SphereGeometry(100, 30, 10), material1 );
          object1.position.set( x, y, z );
          scene1.add( object1 );
        }

        // More setup stuff for renderer
        renderer1 = new THREE.WebGLRenderer({alpha:true});
        renderer1.setSize( window.innerWidth, 800 );
        container1.appendChild( renderer1.domElement );
        container1.addEventListener( 'resize', onWindowResize, false );
      }

      // Makes it so it doesnt break when you adjust window size
      function onWindowResize() {
        camera1.aspect = window.innerWidth / 800;
        camera1.updateProjectionMatrix();
        renderer1.setSize( window.innerWidth, 800 );
      }

      function animate() {
        requestAnimationFrame( animate );
        render1();
      }
            
      // Update Loop
      function render1() {
        var timer = Date.now() * 0.00001;

        //Creates the AweSOME camera rotation!!!
        camera1.position.x = Math.cos( timer * 50 ) * 200;
        camera1.position.y = Math.tan( timer * 50 ) * 200;
        camera1.position.z = Math.sin( timer * 50 ) * 200;
        camera1.lookAt( scene1.position );

        for ( var i = 0, l = scene1.children.length; i < l; i ++ ) {
          var object1 = scene1.children[ i ];
          
          // Makes the sphere rotation
          object1.rotation.x = timer * 20;
          object1.rotation.y = timer * 15;
          object1.rotation.z = timer * 20;
        }
        renderer1.render( scene1, camera1 );
      }