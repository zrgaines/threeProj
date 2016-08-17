      //learn 3
      init2();
      function init2() {
        
        container2 = document.getElementById( 'proj2' );

        // heeere we go !
        
        var blue = new THREE.Color(0x7658ed);
        var pink = new THREE.Color(0xfca4c5);

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / 400, 0.1, 1000 );

        var renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize( window.innerWidth, 400 );
        container2.appendChild( renderer.domElement );

        //THREEx.WindowResize(renderer, camera);
        var shape = [];
        var shapeSpeed = .15;

        geometry = new THREE.IcosahedronGeometry(2.5,0);
        material = new THREE.MeshNormalMaterial({ color: 0x0000ff });
        shape[0] = new THREE.Mesh( geometry, material );
        shape[1] = new THREE.Mesh( geometry, material );
        shape[2] = new THREE.Mesh( geometry, material );
        shape[0].position.set(0,5,0);
        shape[1].position.set(0,5,0);
        shape[2].position.set(0,5,0);
        scene.add(shape[0],shape[1],shape[2]);

        var light = new THREE.PointLight(0xfca4c5);
        light.position.set(0,250,0);
        scene.add(light);

        camera.position.set(3,4,10);

        function render() {
          requestAnimationFrame( render );

          for (var i = 0; i < shape.length; i++) {
            if(shape[i].position.x > 30) {
              shape[i].position.x = -23;
            }
            shape[i].position.x += shapeSpeed;
          }
          shape[0].rotation.x += 0.035;
          shape[0].rotation.y -= 0.005;
          shape[1].rotation.y += 0.015;
          shape[1].rotation.z -= 0.005;
          shape[2].rotation.z -= 0.025;
          shape[2].rotation.x += 0.005;

          renderer.render(scene, camera);
        }
        render();
        
      }