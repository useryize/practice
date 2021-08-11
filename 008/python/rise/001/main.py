import pygame
import time
import random

# 窗口宽高
window_w = 480
window_h = 600

# 飞机的宽高
aircraft_w = 30
aircraft_h = 30

# 子弹的宽高
bullets_w = 10
bullets_h = 10

# 敌机宽高
enemy_w = 20
enemy_h = 20

# 敌机子弹宽高
enemyBullets_w = 10
enemyBullets_h = 10

# 飞机可操作区域
operation_area_w = window_w - aircraft_w
operation_area_h = window_h - aircraft_h


# 飞机类
class Aircraft:
    def __init__(self, screen):
        """
        :param screen: 窗口对象
        """
        # 导入飞机图片
        self.aircraft = pygame.image.load('./icon.png')
        # 飞机坐标轴
        self.x_position = window_w / 2 - 30 / 2
        self.y_position = window_h - 100

        # 飞机移动速度
        self.speed = 3
        self.screen = screen

        # 接受发射的子弹
        self.bulletsList = []

    # 监听键盘事件
    def get_pressed_aircraft(self):
        # 获取操作事件  pygame.event.get()返回数组
        for item_even in pygame.event.get():
            # 关闭事件
            if item_even.type == pygame.QUIT:
                pygame.quit()
                exit()
            # 按键事件
            elif item_even.type == pygame.KEYDOWN:
                # 空格
                if item_even.key == pygame.K_SPACE:
                    # 按空格发射子弹
                    get_bullets = Bullets(self.screen, self.x_position, self.y_position)

                    # 保存每一颗子弹
                    self.bulletsList.append(get_bullets)

        # 获取键盘按下事件
        key_pressed = pygame.key.get_pressed()
        # print('上')
        if key_pressed[pygame.K_w] or key_pressed[pygame.K_UP]:
            self.y_position -= self.speed
        # print('下')
        if key_pressed[pygame.K_s] or key_pressed[pygame.K_DOWN]:
            self.y_position += self.speed
        # print('左')
        if key_pressed[pygame.K_a] or key_pressed[pygame.K_LEFT]:
            self.x_position -= self.speed
        # print('右')
        if key_pressed[pygame.K_d] or key_pressed[pygame.K_RIGHT]:
            self.x_position += self.speed

        # 飞机超出宽度时
        if self.x_position > operation_area_w:
            self.x_position = operation_area_w
        if self.x_position < 0:
            self.x_position = 0
        if self.y_position > operation_area_h:
            self.y_position = operation_area_h
        if self.y_position < 0:
            self.y_position = 0

        # 子弹触发频率高 改为按键触发
        # if key_pressed[pygame.K_SPACE]:
        #     # 按空格发射子弹
        #     get_bullets = Bullets(self.screen, self.x_position, self.y_position, self.aircraft_w, self.aircraft_h)
        #
        #     # 保存每一颗子弹
        #     self.bulletsList.append(get_bullets)

    def display_aircraft(self):
        # 设置背景颜色
        self.screen.fill((30, 8, 7))
        # 将飞机导入到窗口上
        self.screen.blit(self.aircraft, (self.x_position, self.y_position))

        # 遍历子弹列表 并将每一颗子弹显示
        for item in self.bulletsList:
            # 每一个item都是一个子弹类的实例
            item.display_bullets()
            item.auto_moving()


# 子弹类
class Bullets:
    def __init__(self, screen, x, y):
        """
        :param screen: 窗口对象
        :param x: 飞机x坐标
        :param y: 飞机y坐标
        """
        self.bullets_img = pygame.image.load('icon01.jpg')
        self.screen = screen

        # 子弹坐标 横坐标起始值为 飞机横坐标 + 飞机本身宽度一半 - 子弹本身一半
        self.x = x + aircraft_w / 2 - bullets_w / 2
        self.y = y - 10

        # 子弹移动速度
        self.speed = 2

    # 显示子弹
    def display_bullets(self):
        self.screen.blit(self.bullets_img, (self.x, self.y))

    # 子弹自动移动
    def auto_moving(self):
        self.y -= self.speed


# 敌机类
class Enemy:
    def __init__(self, screen):
        self.enemy_img = pygame.image.load('icon02.jpg')
        self.x = 0
        self.y = 0
        self.speed = 3
        self.screen = screen
        self.direction = 'right'
        self.enemy_bullets_list = []

    # 显示敌机
    def display_enemy(self):
        self.screen.blit(self.enemy_img, (self.x, self.y))
        get_enemy_bullets = EnemyBullets(self.screen, self.x, self.y)
        self.enemy_bullets_list.append(get_enemy_bullets)

    # 敌机自动移动
    def auto_moving(self):
        if self.direction == 'right':
            self.x += self.speed
        if self.direction == 'left':
            self.x -= self.speed
        if self.x > operation_area_w:
            self.direction = 'left'
        if self.x < 0:
            self.direction = 'right'
        for item in self.enemy_bullets_list:
            item.display()
            item.auto_launch()


# 敌机子弹
class EnemyBullets:
    def __init__(self, screen, x, y):
        self.enemy_bullets_img = pygame.image.load('icon03.jpg')
        self.screen = screen
        # 子弹坐标 敌机很坐标 + 敌机本身一半 - 子弹本身一半
        self.x = x + enemy_w / 2 - enemyBullets_w / 2
        self.y = y + enemy_h
        self.speed = 10

    def display(self):
        self.screen.blit(self.enemy_bullets_img, (self.x, self.y))

    def auto_launch(self):
        self.y += self.speed
        print(self.y)


def main():
    pygame.init()

    # 创建窗口
    screen = pygame.display.set_mode((window_w, window_h))
    # 创建窗口标题
    pygame.display.set_caption('easy')
    # 获取飞机类
    get_aircraft = Aircraft(screen)
    # 获取敌机类
    get_enemy = Enemy(screen)

    while True:
        # 执行飞机监听事件
        get_aircraft.get_pressed_aircraft()

        # 显示飞机
        get_aircraft.display_aircraft()

        # 显示敌机
        get_enemy.display_enemy()
        # 敌机移动
        get_enemy.auto_moving()

        time.sleep(0.01)
        pygame.display.update()


if __name__ == '__main__':
    main()
