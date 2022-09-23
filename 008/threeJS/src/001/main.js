import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls' // 导入轨道控制器
import gsap from 'gsap' // gsap动画库
// 创建场景
const scene = new THREE.Scene()

// 创建相机
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)

// 设置相机位置
camera.position.set(45, 0, 10)

// 相机添加到场景中
scene.add(camera)

// 添加物体
// 创建几何体
const boxGeometry = new THREE.BoxGeometry(1, 1, 1) // x y z 长宽高
const meshBasicMaterial = new THREE.MeshBasicMaterial({ color: 0xffcccc }) // 材质

// 根据几何体和材质创建物体
const cube1 = new THREE.Mesh(boxGeometry, meshBasicMaterial)
const cube2 = new THREE.Mesh(boxGeometry, meshBasicMaterial)
const cube3 = new THREE.Mesh(boxGeometry, meshBasicMaterial)

// 修改物体位置
// cube1.position.set(5, 00, 0)

// 物体缩放
// cube1.scale.set(3, 2, 1)

// 物体旋转
// cube1.rotation.set(Math.PI / 4, 0, 0, 'XYZ')

// 将物体添加到场景中
scene.add(cube1)
scene.add(cube2)
scene.add(cube3)


// 初始化渲染器
const render = new THREE.WebGL1Renderer();

// 设置渲染器尺寸
render.setSize(window.innerWidth, window.innerHeight)
document.body.append(render.domElement)

// 使用渲染器通过相机将场景渲染出来
// render.render(scene, camera)

// 创建轨道控制器
const controls = new OrbitControls(camera, render.domElement)

// 添加坐标辅佐器
const AxesHelper = new THREE.AxesHelper(10)

// 将辅助器添加到场景中
scene.add(AxesHelper)

gsap.to(cube1.position, { x: 10, duration: 10,  })
// 封装渲染函数
function renderFun(time) {
    // cubeMoving(time)
    render.render(scene, camera)
    // 渲染下一帧时执行函数 window.requestAnimationFrame(callback); Html5新增神器 回调默认参数time(毫秒)
    requestAnimationFrame(renderFun)
}

// 封装物体移动
// let clock = new THREE.Clock()
// clock.getElapsedTime()
let num = 0
let numType = 1
let speed = 0.1
const cubeMoving = (time) => {
    // 平移参数
    num > 10 && (numType = 2)
    num < -10 && (numType = 1)
    num = numType === 1 ? num + speed : num - speed

    // 平移
    cube1.position.set(num, 0, 0)
    cube2.position.set(0, num, 0)
    cube3.position.set(0, 0, num)
    // 缩放
    // cube1.scale.set(num, num, num)
    // cube2.scale.set(num, num, num)
    // cube3.scale.set(num, num, num)
}

renderFun()
