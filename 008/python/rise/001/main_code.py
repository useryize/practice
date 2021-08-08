from PIL import Image

import pygame
import time


def main():
    pygame.init()
    # 创建窗口
    screen = pygame.display.set_mode((480, 480), 0, 32)
    # 创建窗口标题
    pygame.display.set_caption('easy')
    # 设置背景颜色
    screen.fill((62, 105, 115))
    # 导入飞机图片
    aircraft = pygame.image.load('./icon.png')
    x = 480 / 2 - 30 / 2
    y = 400
    b = 10
    while True:
        # 获取操作事件  pygame.event.get()返回数组
        for item_even in pygame.event.get():
            # 关闭事件
            if item_even.type == pygame.QUIT:
                pygame.quit()
                exit()
            else:
                pass

        key_pressed = pygame.key.get_pressed()  # 获取键盘按下事件
        if key_pressed[pygame.K_w] or key_pressed[pygame.K_UP]:
            y -= b
        if key_pressed[pygame.K_s] or key_pressed[pygame.K_DOWN]:
            y += b
        if key_pressed[pygame.K_a] or key_pressed[pygame.K_LEFT]:
            x -= b
        if key_pressed[pygame.K_d] or key_pressed[pygame.K_RIGHT]:
            x += b
        if key_pressed[pygame.K_SPACE]:
            print('空格')
        print(x)
        screen.blit(aircraft, (x, y))  # 将飞机导入  到窗口上
        pygame.display.update()
        time.sleep(0.1)


if __name__ == '__main__':
    main()
