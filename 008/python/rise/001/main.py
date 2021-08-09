import pygame
import time


def main():
    pygame.init()
    # 窗口宽度
    window_w = 480
    # 窗口高度
    window_h = 480
    # 飞机坐标轴
    x_position = window_h / 2 - 30 / 2
    y_position = 400
    # 飞机移动速度
    speed = 3

    # 创建窗口
    screen = pygame.display.set_mode((window_w, window_h), 0, 32)
    # 创建窗口标题
    pygame.display.set_caption('easy')
    # 导入飞机图片
    aircraft = pygame.image.load('./icon.png')

    while True:

        # 设置背景颜色
        screen.fill((62, 105, 115))
        # 将飞机导入  到窗口上
        screen.blit(aircraft, (x_position, y_position))

        # 获取操作事件  pygame.event.get()返回数组
        for item_even in pygame.event.get():
            # 关闭事件
            if item_even.type == pygame.QUIT:
                pygame.quit()
                exit()

        key_pressed = pygame.key.get_pressed()  # 获取键盘按下事件
        # print('上')
        if key_pressed[pygame.K_w] or key_pressed[pygame.K_UP]:
            y_position -= speed
        # print('下')
        if key_pressed[pygame.K_s] or key_pressed[pygame.K_DOWN]:
            y_position += speed
        # print('左')
        if key_pressed[pygame.K_a] or key_pressed[pygame.K_LEFT]:
            x_position -= speed
        # print('右')
        if key_pressed[pygame.K_d] or key_pressed[pygame.K_RIGHT]:
            x_position += speed
        if key_pressed[pygame.K_SPACE]:
            print('空格')
        pygame.display.update()
        time.sleep(0.01)


if __name__ == '__main__':
    main()
