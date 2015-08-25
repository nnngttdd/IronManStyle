function IronMan(){
	this.count = 0;
	$('body').append('<div id="container"></div>')
	IronMan.prototype.initClass = function(){

		this.container = $('#container');
		this.initWebgl();
	}

	IronMan.prototype.initWebgl = function(){
		this.camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,100000);

		this.camera.position.z = 4000;
		this.camera.position.y = 0;
		this.camera.lookAt(new THREE.Vector3(0,0,0));

		this.controls = new THREE.OrbitControls(this.camera);
		//鼠标事件
		// this.controls.enabled = false;
		// this.controls.noZoom = true;
		// this.controls.noRotate = true;

		this.controls.target = new THREE.Vector3(0,0,0);

		this.scene  = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.renderer.setSize( window.innerWidth , window.innerHeight );
        this.container.appendChild( this.renderer.domElement );
        
        var light = new THREE.PointLight(0xffffff, 1);
		light.position.z = 5000;
		this.scene.add(light);

		var light = new THREE.PointLight(0xffffff, 4);
		light.position.y = -1000;
		light.position.z = 100;
		this.scene.add(light);
		
		var light = new THREE.PointLight(0xffffff, 4);
		light.position.y = 1000;
		light.position.z = 100;
		this.scene.add(light);

		window.addEventListener('resize', this.onWindowResize, false);

		this.animate();
	}

	IronMan.prototype.animate = function(){
		requestAnimationFrame(this.animate.bind(this));
		this.controls.update();
		this.renderer.render(this.scene,this.camera);
		this.count++;
	}

	IronMan.prototype.initData = function(){
		this.options = {
			'circle' : {
				//[半径，颜色，线条粗细，透明度，显示度数]
				'one' : [250, '#4c0f16', 2, 1, 300],
				'two' : [],
				'three' : [],
				'four' : [],
				'five' : [],
				'six' : []
			}
		}
	}

	IronMan.prototype.initCircle = function(){
		this.circles = new THREE.Object3D();
		for(var i in this.options.circle){
			var geo = new THREE.Geometry();
			// for(var j=1; j<parseInt(30*(i)))
		}
	}

	this.initClass();

}