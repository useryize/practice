import pygame
import time


# 飞机类
class Aircraft:
    def __init__(self, screen, window_w, window_h):
        # 导入飞机图片
        self.aircraft = pygame.image.load('./icon.png')
        # 飞机坐标轴
        self.x_position = window_h / 2 - 30 / 2
        self.y_position = window_w - 100
        # 飞机移动速度
        self.speed = 3
        self.screen = screen

    # 监听键盘事件
    def get_pressed_aircraft(self):
        # 获取操作事件  pygame.event.get()返回数组
        for item_even in pygame.event.get():
            # 关闭事件
            if item_even.type == pygame.QUIT:
                pygame.quit()
                exit()

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
        if key_pressed[pygame.K_SPACE]:
            # 按空格发射子弹
            # self.screen.fill((30, 8, 7))
            # self.screen.blit(self.aircraft, (0, 0))
            # 将飞机导入到窗口上
            get_bullets = Bullets(self.screen, self.x_position, self.y_position)
            get_bullets.display_bullets()

    def display_aircraft(self):
        # 设置背景颜色
        self.screen.fill((30, 8, 7))
        # 将飞机导入到窗口上
        self.screen.blit(self.aircraft, (self.x_position, self.y_position))


# 子弹类
class Bullets:
    def __init__(self, screen, x, y):
        self.bullets_img = pygame.image.load('icon01.jpg')
        self.x = 0
        self.y = 0
        self.screen = screen

    # 显示子弹
    def display_bullets(self):
        self.screen.blit(self.bullets_img, (0, 0))


def main():
    pygame.init()
    # 窗口宽度
    window_w = 480
    # 窗口高度
    window_h = 480
    # 创建窗口
    screen = pygame.display.set_mode((window_w, window_h))
    # 创建窗口标题
    pygame.display.set_caption('easy')
    # 获取飞机类
    get_aircraft = Aircraft(screen, window_w, window_h)

    while True:
        # 执行飞机监听事件
        get_aircraft.get_pressed_aircraft()

        # 显示飞机
        get_aircraft.display_aircraft()

        time.sleep(0.01)
        pygame.display.update()


if __name__ == '__main__':
    main()
