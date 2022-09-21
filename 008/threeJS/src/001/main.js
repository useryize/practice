import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls' // 导入轨道控制器
// 创建场景
const scene = new THREE.Scene()

// 创建相机
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)

// 设置相机位置
camera.position.set(0, 0, 10)

// 相机添加到场景中
scene.add(camera)

// 添加物体
// 创建几何体
const boxGeometry = new THREE.BoxGeometry(1, 1, 1) // x y z 长宽高
const meshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0xffcccc }) // 材质

// 根据几何体和材质创建物体
const mesh = new THREE.Mesh(boxGeometry, meshBasicMaterial)

// 将物体添加到场景中
scene.add(mesh)

// 初始化渲染器
const render = new THREE.WebGL1Renderer();

// 设置渲染器尺寸
render.setSize(window.innerWidth, window.innerHeight)
document.body.append(render.domElement)

// 使用渲染器通过相机将场景渲染出来
// render.render(scene, camera)

// 创建轨道控制器
const controls = new OrbitControls(camera, render.domElement)

// 封装渲染函数
function renderFun() {
    render.render(scene, camera)
    // 渲染下一帧时执行函数 window.requestAnimationFrame(callback); Html5新增神器
    requestAnimationFrame(renderFun)
}
renderFun()
