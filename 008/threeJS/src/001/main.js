import * as THREE from 'three'

// 创建场景
const scene = new THREE.Scene()

// 创建相机
/**
 * 透视相机（PerspectiveCamera）
 * PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
 * fov — 摄像机视锥体垂直视野角度
 * aspect — 摄像机视锥体长宽比
 * near — 摄像机视锥体近端面
 * far — 摄像机视锥体远端面
 */
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)

// 设置相机位置
camera.position.set(0, 0, 10)

// 相机添加到场景中
scene.add(camera)

// 添加物体
// 创建几何体
const boxGeometry  = new THREE.BoxGeometry(1,1,1) // x y z 长宽高
const meshBasicMaterial = new THREE.MeshBasicMaterial({color: 0xffcccc}) // 材质

// 根据几何体和材质创建物体
const mesh = new THREE.Mesh(boxGeometry, meshBasicMaterial)

// 将物体添加到场景中
scene.add(mesh)

// 初始化渲染器
const render = new THREE.WebGL1Renderer();

// 设置渲染器尺寸
render.setSize(window.innerWidth, window.innerHeight)

document.body.append(render.domElement)
render.render(scene, camera)
