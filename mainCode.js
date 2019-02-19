/*******************/
var renderer = null,
  scene = null,
  camera = null,
  root = null,
  group = null,
  sphere = null,
  sphereEnvMapped = null,
  orbitControls = null;
var loader;
/**************************************/
var sistemaSolar = null,
  gMercurio = null,
  gVenus = null,
  gTierra = null,
  gMarte = null,
  gJupiter = null,
  gSaturno = null,
  gUrano = null,
  gNeptuno = null,
  gPluton = null;
/********************/
// Radio extraido de: https://www.infolaso.com/tamano-de-los-planetas.html
var rSol = 50; //si coloco más se come a Mercurio :(
var rMercurio = 2.44;
var rVenus = 6.052;
var rTierra = 6.378;
var rMarte = 3.397;
var rJupiter = 71.492;
var rSaturno = 60.268;
var rUrano = 25.559;
var rNeptuno = 24.746;
var rPluton = 5;

// Distancias extraidas de: https://www.nocreasnada.com/la-distancia-de-los-planetas-al-sol
var dMercurio = 57.91;
var dVenus = 108.2;
var dTierra = 149.6;
var dMarte = 227.94;
var dJupiter = 778.33;
var dSaturno = 1429.4;
var dUrano = 2870.99;
var dNeptuno = 4504.300;
var dPluton = 5934.46;
/**************** */
var lunasTierra = 1;
var lunasMarte = 1;
var lunasJupiter = 1;
var lunasSaturno = 1;
var lunasUrano = 1;
var lunasNeptuno = 1;
var lunasPluton = 1;
/*********** */
var rotSol = .005;
var rotMercurio = .01;
var rotVenus = .015;
var rotTierra = .02;
var rotMarte = .025;
var rotJupiter = .03;
var rotSaturno = .035;
var rotUrano = .04;
var rotNeptuno = .045;
var rotPluton = .05;
/********************** */
var trasMercurio = 0.001;
var trasVenus = 0.0015;
var trasTierra = 0.002;
var trasMarte = 0.0025;
var trasJupiter = 0.003;
var trasSaturno = 0.0035;
var trasUrano = 0.004;
var trasNeptuno = 0.0045;
var trasPluton = 0.005;
/******************** */
var materiales = {};
var fondo = "img/fondoCanvas.jpg";
var solImg1 = "img/sol.jpg";
var mercurioImg1 = "img/mercurio1.jpg";
var mercurioImg2 = "img/mercurio2.jpg";
var venusImg1 = "img/venus1.jpg";
var venusImg2 = "img/venus2.jpg";
var tierraImg1 = "img/tierra1.jpg";
var tierraImg2 = "img/tierra2.jpg";
var marteImg1 = "img/marte1.jpg";
var marteImg2 = "img/marte2.jpg";
var jupiterImg1 = "img/jupiter1.jpg";
var saturnoImg1 = "img/saturno1.jpg";
var uranoImg1 = "img/urano1.jpg";
var neptunoImg1 = "img/neptuno1.jpg";
var plutonImg1 = "img/pluton1.jpg";
var plutonImg2 = "img/pluton2.jpg";
var lunaImg1 = "img/luna1.jpg";
var lunaImg2 = "img/luna2.jpg";
var asteroideImg1 = "img/asteroide1.jpg";
/**************************************/
//Pocas lunas porque hay planetas que tienen muchas!! Max 3 por planeta porque mi compu hace crash
var luna_1 = null,
  luna_2 = null,
  luna_3 = null,
  luna_4 = null,
  luna_5 = null,
  luna_7 = null,
  luna_8 = null,
  luna_9 = null,
  luna_15 = null,
  luna_16 = null,
  luna_17 = null,
  luna_20 = null,
  luna_21 = null;
  luna_22 = null;
/**********/
var anillo1 = null,
  anillo2 = null,
  anillo3 = null;
/************/
var mSol = null,
  matSol = null,
  geoSol = null;
/*************** */
var asteroidMap = null,
  asteroidMaterial = null,
  asteroidGeometry = null,
  asteroid = null;
gAsteroide = null;

/********************/
var luz1 = null,
  luz2 = null,
  luz3 = null,
  luz4 = null;
/******************** */

var duration = 20000; // ms
var currentTime = Date.now();


function animate() {
  sol.rotation.y += rotSol;
  mercurio.rotation.y += rotMercurio;
  venus.rotation.y += rotVenus;
  tierra.rotation.y += rotTierra;
  marte.rotation.y += rotMarte;
  jupiter.rotation.y += rotJupiter;
  saturno.rotation.y += rotSaturno;
  urano.rotation.y += rotUrano;
  neptuno.rotation.y += rotNeptuno;
  pluton.rotation.y += rotPluton;
  /*******************/
  gMercurio.rotation.y += trasMercurio;
  gVenus.rotation.y += trasVenus;
  gTierra.rotation.y += trasTierra;
  gMarte.rotation.y += trasMarte;
  gJupiter.rotation.y += trasJupiter;
  gSaturno.rotation.y += trasSaturno;
  gUrano.rotation.y += trasUrano;
  gNeptuno.rotation.y += trasNeptuno;
  gPluton.rotation.y += trasPluton;
  /***********************************/
  luna_1.rotation.y += 0.00004;
  luna_2.rotation.y += 0.0004;
  luna_3.rotation.y += 0.0004;
  luna_4.rotation.y += 0.0003;
  luna_5.rotation.y += 0.0004;
  luna_7.rotation.y += 0.0004;
  luna_8.rotation.y += 0.0003;
  luna_9.rotation.y += 0.0004;
  luna_15.rotation.y += 0.0004;
  luna_16.rotation.y += 0.0003;
  luna_17.rotation.y += 0.0004;
  luna_21.rotation.y += 0.0004;
  luna_22.rotation.y += 0.0003;
  /****************************/
  lTierra.rotation.y += rotTierra;
  luna1.rotation.y += rotMarte;
  luna2.rotation.y += rotMarte;
  luna3.rotation.y += rotJupiter;
  luna4.rotation.y += rotJupiter;
  luna5.rotation.y += rotJupiter;
  luna7.rotation.y += rotSaturno;
  luna8.rotation.y += rotSaturno;
  luna9.rotation.y += rotSaturno;
  luna15.rotation.z += rotUrano;
  luna16.rotation.z += rotUrano;
  luna17.rotation.z += rotUrano;
  luna21.rotation.y += rotNeptuno;
  luna22.rotation.y += rotNeptuno;
  /****************************/
  gAsteroide.rotation.y += 0.01;

}

function run() {
  requestAnimationFrame(function () { run(); });

  renderer.render(scene, camera);

  animate();
  orbitControls.update();
}

function setLightColor(luz, r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  luz.color.setRGB(r, g, b);
}

function toggleTexture() {
  textureOn = !textureOn;
  var names = materialName.split("-");
  if (!textureOn) {
    setMaterial(names[0]);
  }
  else {
    setMaterial(names[0] + "-textured");
  }
}

function cPlaneta(nombre, x, y, z, imagen1, imagen2) {

  mp1 = new THREE.TextureLoader().load(imagen1);
  mp2 = new THREE.TextureLoader().load(imagen2);

  if (!imagen2) {
    material = nombre + "-phong";
    materiales[material] = new THREE.MeshPhongMaterial({ map: mp1 });
  } else {
    material = nombre + "-phong-textured";
    materiales[material] = new THREE.MeshPhongMaterial({ map: mp1, bumpMap: mp2, bumpScale: 0.5 });
  }
  gp1 = new THREE.SphereGeometry(x, y, z);
  planeta = new THREE.Mesh(gp1, materiales[material]);
  planeta.visible = true;
  return planeta;
}

function cAnillo(radio, aAncho, distancia, color, temp) {
  var geoAnillo = new THREE.TorusGeometry(radio, aAncho, 2, 200);
  var material = new THREE.MeshBasicMaterial({ color: color });
  var anillo = new THREE.Mesh(geoAnillo, material);

  if (!temp) {
    anillo.rotation.x = Math.PI / 2;
  }
  anillo.position.x = distancia;
  return anillo;

}

function cOrbita(nombre) {
  var temp;
  switch (nombre) {
    case 'mercurio':
      temp = new THREE.TorusGeometry(dMercurio, 0.25, 16, 200);
      break;
    case 'venus':
      temp = new THREE.TorusGeometry(dVenus, 0.25, 16, 200);
      break;
    case 'tierra':
      temp = new THREE.TorusGeometry(dTierra, 0.25, 16, 200);
      break;
    case 'marte':
      temp = new THREE.TorusGeometry(dMarte, 0.25, 16, 200);
      break;
    case 'jupiter':
      temp = new THREE.TorusGeometry(dJupiter, 0.25, 16, 200);
      break;
    case 'saturno':
      temp = new THREE.TorusGeometry(dSaturno, 0.25, 16, 200);
      break;
    case 'urano':
      temp = new THREE.TorusGeometry(dUrano, 0.25, 16, 200);
      break;
    case 'neptuno':
      temp = new THREE.TorusGeometry(dNeptuno, 0.25, 16, 200);
      break;
    case 'pluton':
      temp = new THREE.TorusGeometry(dPluton, 0.25, 16, 200);
      break;
    default:
      temp = new THREE.TorusGeometry(30, 0.1, 16, 100);
      break;
  }
  var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  var orbitaTemp = new THREE.Mesh(temp, material);
  orbitaTemp.rotation.x = Math.PI / 2;
  return orbitaTemp;
}

function createScene(canvas) {
  var fondoImg = new THREE.TextureLoader().load(fondo);
  var luces = new THREE.PointLight(0xffffff, 1, 0);
  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setSize(canvas.width, canvas.height);
  scene = new THREE.Scene();
  fondoImg.wrapS = fondoImg.wrapT = THREE.RepeatWrapping;
  fondoImg.repeat.set(1, 1);
  scene.background = fondoImg
  camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 1, 40000);
  camera.position.set(-200, 60, 120);
  scene.add(camera);
  root = new THREE.Object3D;
  luces.position.set(0, 0, 0);
  luces.castShadow = true;
  luces.shadow.bias = 0.001;
  luces.shadow.mapSize.width = 2048;
  luces.shadow.mapSize.height = 2048;
  root.add(luces);
  /*************************/
  sistemaSolar = new THREE.Object3D;
  root.add(sistemaSolar);
  /*************************/
  mSol = new THREE.TextureLoader().load(solImg1);
  matSol = new THREE.MeshBasicMaterial({ map: mSol });
  geoSol = new THREE.SphereGeometry(rSol, 50, 50);
  sol = new THREE.Mesh(geoSol, matSol);
  sol.visible = true;
  /*************************/
  gMercurio = new THREE.Object3D;
  gVenus = new THREE.Object3D;
  gTierra = new THREE.Object3D;
  gMarte = new THREE.Object3D;
  gJupiter = new THREE.Object3D;
  gSaturno = new THREE.Object3D;
  gUrano = new THREE.Object3D;
  gNeptuno = new THREE.Object3D;
  gPluton = new THREE.Object3D;
  /*************************/
  luna_1 = new THREE.Object3D;
  luna_2 = new THREE.Object3D;
  luna_3 = new THREE.Object3D;
  luna_4 = new THREE.Object3D;
  luna_5 = new THREE.Object3D;
  luna_7 = new THREE.Object3D;
  luna_8 = new THREE.Object3D;
  luna_9 = new THREE.Object3D;
  luna_15 = new THREE.Object3D;
  luna_16 = new THREE.Object3D;
  luna_17 = new THREE.Object3D;
  luna_21 = new THREE.Object3D;
  luna_22 = new THREE.Object3D;
  /******Planetas***/
  mercurio = cPlaneta("mercurio", rMercurio, 50, 50, mercurioImg1, mercurioImg2);
  venus = cPlaneta("venus", rVenus, 50, 50, venusImg1, venusImg2);
  tierra = cPlaneta("tierra", rTierra, 50, 50, tierraImg1, tierraImg2);
  marte = cPlaneta("marte", rMarte, 50, 50, marteImg1, marteImg2);
  jupiter = cPlaneta("jupiter", rJupiter, 50, 50, jupiterImg1);
  saturno = cPlaneta("saturno", rSaturno, 50, 50, saturnoImg1);
  urano = cPlaneta("urano", rUrano, 50, 50, uranoImg1);
  neptuno = cPlaneta("neptuno", rNeptuno, 50, 50, neptunoImg1);
  pluton = cPlaneta("pluton", rPluton, 50, 50, plutonImg1, plutonImg2);
  mercurio.position.x = dMercurio;
  venus.position.x = dVenus;
  tierra.position.x = dTierra;
  marte.position.x = dMarte;
  jupiter.position.x = dJupiter;
  saturno.position.x = dSaturno;
  urano.position.x = dUrano;
  neptuno.position.x = dNeptuno;
  pluton.position.x = dPluton;
  /*********************Orbitas */
  var oMercurio = cOrbita('mercurio'),
    oVenus = cOrbita('venus'),
    oTierra = cOrbita('tierra'),
    oMarte = cOrbita('marte'),
    oJupiter = cOrbita('jupiter'),
    oSaturno = cOrbita('saturno'),
    oUrano = cOrbita('urano'),
    oNeptuno = cOrbita('neptuno'),
    oPluton = cOrbita('pluton');
  gMercurio.add(mercurio);
  gVenus.add(venus);
  gTierra.add(tierra);
  gMarte.add(marte);
  gJupiter.add(jupiter);
  gSaturno.add(saturno);
  gUrano.add(urano);
  gNeptuno.add(neptuno);
  gPluton.add(pluton);
  /***********Anillos */
  anillo1 = cAnillo(rSaturno + 50, 10, dSaturno, 0xffffff);
  anillo2 = cAnillo(rUrano + 50, 5, dUrano, 0xffffff, true);
  anillo3 = cAnillo(rNeptuno + 50, 5, dNeptuno, 0xffffff);
  gSaturno.add(anillo1);
  gUrano.add(anillo2);
  gNeptuno.add(anillo3);
  /*************Lunas */
  lTierra = cPlaneta("lTierra", lunasTierra, 50, 50, lunaImg1, lunaImg2);
  luna1 = cPlaneta("luna1", lunasMarte, 50, 50, lunaImg1, lunaImg2);
  luna2 = cPlaneta("luna2", lunasMarte, 50, 50, lunaImg1, lunaImg2);
  luna3 = cPlaneta("luna3", lunasJupiter, 50, 50, lunaImg1, lunaImg2);
  luna4 = cPlaneta("luna4", lunasJupiter, 50, 50, lunaImg1, lunaImg2);
  luna5 = cPlaneta("luna5", lunasJupiter, 50, 50, lunaImg1, lunaImg2);
  luna7 = cPlaneta("luna7", lunasSaturno, 50, 50, lunaImg1, lunaImg2);
  luna8 = cPlaneta("luna8", lunasSaturno, 50, 50, lunaImg1, lunaImg2);
  luna9 = cPlaneta("luna9", lunasSaturno, 50, 50, lunaImg1, lunaImg2);
  luna15 = cPlaneta("luna15", lunasUrano, 50, 50, lunaImg1, lunaImg2);
  luna16 = cPlaneta("luna16", lunasUrano, 50, 50, lunaImg1, lunaImg2);
  luna17 = cPlaneta("luna17", lunasUrano, 50, 50, lunaImg1, lunaImg2);
  luna21 = cPlaneta("luna21", lunasNeptuno, 50, 50, lunaImg1, lunaImg2);
  luna22 = cPlaneta("luna22", lunasNeptuno, 50, 50, lunaImg1, lunaImg2);
  lTierra.position.x = 15;
  luna1.position.x = 15;
  luna2.position.x = 10;
  luna3.position.x = 100;
  luna4.position.x = 150;
  luna5.position.x = 200;
  luna7.position.x = 100;
  luna8.position.x = 150;
  luna9.position.x = 200;
  luna15.position.y = 50;
  luna16.position.y = 100;
  luna17.position.y = 150;
  luna21.position.x = 100;
  luna22.position.x = 150;
  tierra.add(lTierra);
  luna_1.add(luna1);
  luna_2.add(luna2);
  luna_3.add(luna3);
  luna_4.add(luna4);
  luna_5.add(luna5);
  luna_7.add(luna7);
  luna_8.add(luna8);
  luna_9.add(luna9);
  luna_15.add(luna15);
  luna_16.add(luna16);
  luna_17.add(luna17);
  luna_21.add(luna21);
  luna_22.add(luna22);
  marte.add(luna_1);
  marte.add(luna_2);
  jupiter.add(luna_3);
  jupiter.add(luna_4);
  jupiter.add(luna_5);
  saturno.add(luna_7);
  saturno.add(luna_8);
  saturno.add(luna_9);
  urano.add(luna_15);
  urano.add(luna_16);
  urano.add(luna_17);
  neptuno.add(luna_21);
  neptuno.add(luna_22);
  /***********Ateroides**************/
  gAsteroide = new THREE.Object3D;
  mAsteroide = new THREE.TextureLoader().load(asteroideImg1);
  matAsteroide = new THREE.MeshBasicMaterial({ map: mAsteroide });
  geoAsteroide = new THREE.SphereGeometry(1, 50, 50);
  for (i = 0; i < 1000; i++) {
    var ran1 = Math.floor(Math.random() * ((dJupiter - 100) - (dMarte + 100)) + (dMarte - 100));
    ran1 *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    var ran2 = Math.floor(Math.random() * ((120) - (1)) + (1));
    ran2 *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    var ran3 = Math.floor(Math.random() * ((340) - (1)) + (1));
    ran3 *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    asteroides = new THREE.Mesh(geoAsteroide, matAsteroide);
    asteroides.visible = true;
    asteroides.position.x = ran1;
    asteroides.position.y = ran2;
    asteroides.position.z = ran3;
    gAsteroide.add(asteroides);
  }
  sistemaSolar.add(gAsteroide);
  /**************************/
  gMercurio.add(oMercurio);
  gVenus.add(oVenus);
  gTierra.add(oTierra);
  gMarte.add(oMarte);
  gJupiter.add(oJupiter);
  gSaturno.add(oSaturno);
  gUrano.add(oUrano);
  gNeptuno.add(oNeptuno);
  gPluton.add(oPluton);
  sistemaSolar.add(sol);
  sistemaSolar.add(gMercurio);
  sistemaSolar.add(gVenus);
  sistemaSolar.add(gTierra);
  sistemaSolar.add(gMarte);
  sistemaSolar.add(gJupiter);
  sistemaSolar.add(gSaturno);
  sistemaSolar.add(gUrano);
  sistemaSolar.add(gNeptuno);
  sistemaSolar.add(gPluton);
  scene.add(root);
}
