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
const cube1 = new THREE.Mesh(boxGeometry, meshBasicMaterial)
const cube2 = new THREE.Mesh(boxGeometry, meshBasicMaterial)
const cube3 = new THREE.Mesh(boxGeometry, meshBasicMaterial)

// 修改物体位置
cube1.position.set(5, 00, 0)

// 物体缩放
// cube1.scale.set(3, 2, 1)

// 物体旋转
cube1.rotation.set(Math.PI / 4, 0, 0, 'XYZ')

// 将物体添加到场景中
scene.add(cube1)
// scene.add(cube2)
// scene.add(cube3)


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


// 封装渲染函数
function renderFun() {
    // cubeMoving()
    render.render(scene, camera)
    // 渲染下一帧时执行函数 window.requestAnimationFrame(callback); Html5新增神器
    requestAnimationFrame(renderFun)
}

// 封装物体移动
let xType = 1 // 移动方向
const num = 0.03 // 移动速度
const num2 = 10 // 反向点
const num3 = 0 // 反向点
const cubeMoving = (arr) => {
    if (xType === 1) {
        cube1.position.x += num
        cube2.position.y += num
        cube3.position.z += num
    }
    if (xType === 2) {
        cube1.position.x -= num
        cube2.position.y -= num
        cube3.position.z -= num
    }
    if (cube1.position.x > num2 || cube2.position.y > num2 || cube3.position.z > num2) {
        xType = 2
    }
    if (cube1.position.x < num3 || cube2.position.y < num3 || cube3.position.z < num3) {
        xType = 1
    }

}

renderFun()
