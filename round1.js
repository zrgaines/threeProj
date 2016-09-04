      //learn 3
      var counter2 = 2;
      
      $('#projDiv2').on('click', function(){
        if(counter2 % 2 == 0) {
          counter2++;
          init2();
        }
      })
      
      // init2();
      function init2() {
        
        container2 = document.getElementById( 'proj2' );

        // heeere we go !
        var scene2 = new THREE.Scene();
        var camera2 = new THREE.PerspectiveCamera( 45, window.innerWidth / 400, 0.1, 1000 );

        var renderer2 = new THREE.WebGLRenderer({ alpha: true });
        renderer2.setSize( window.innerWidth, 400 );
        container2.appendChild( renderer2.domElement );

        //THREEx.WindowResize(renderer, camera);
        var shape = [];
        var shapeSpeed = .15;

        var geometry2 = new THREE.IcosahedronGeometry(2.5,0);
        var material2 = new THREE.MeshNormalMaterial({ color: 0x0000ff });
        shape[0] = new THREE.Mesh( geometry, material );
        shape[1] = new THREE.Mesh( geometry, material );
        shape[2] = new THREE.Mesh( geometry, material );
        shape[0].position.set(0,5,0);
        shape[1].position.set(0,5,0);
        shape[2].position.set(0,5,0);
        scene2.add(shape[0],shape[1],shape[2]);

        var light2 = new THREE.PointLight(0xfca4c5);
        light2.position.set(0,250,0);
        scene2.add(light2);

        camera2.position.set(3,4,10);

        function render2() {
          requestAnimationFrame( render2 );

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

          renderer2.render(scene2, camera2);
        }
        render2();
        
      }