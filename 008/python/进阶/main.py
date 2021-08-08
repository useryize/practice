import pygame
import time


def main():
    pygame.init()
    # 创建窗口
    screen = pygame.display.set_mode((480, 480), 0, 32)
    # 创建窗口标题
    pygame.display.set_caption('easy')
    # 设置背景颜色
    screen.fill((0, 0, 0))
    # 导入飞机图片
    aircraft = pygame.image.load('aaa.jpg')
    # 将飞机导入  到窗口上
    screen.blit(aircraft, (480 / 2 - 30 / 2, 400))

    while True:
        # 获取操作事件 pygame.event.get()返回数组
        for item_even in pygame.event.get():
            # 关闭事件
            if item_even.type == pygame.QUIT:
                pygame.quit()
                exit()
            # 键盘事件 需要按下后在按才会触发
            # elif item_even.type == pygame.KEYDOWN:
            #     # 按上键盘左建
            #     if item_even.key == pygame.K_w or item_even.key == pygame.K_UP:
            #         print('上')
            #     # 按下键盘左建
            #     elif item_even.key == pygame.K_s or item_even.key == pygame.K_DOWN:
            #         print('下')
            #     # 按下键盘左建
            #     elif item_even.key == pygame.K_a or item_even.key == pygame.K_LEFT:
            #         print('左')
            #     # 按下键盘右建
            #     elif item_even.key == pygame.K_d or item_even.key == pygame.K_RIGHT:
            #         print('右')
            #     # 按下键盘空格建
            #     elif item_even.key == pygame.K_SPACE:
            #         print('空格')

        key_pressed = pygame.key.get_pressed()  # 获取键盘按下事件
        if key_pressed[pygame.K_w] or key_pressed[pygame.K_UP]:
            print('上')
        if key_pressed[pygame.K_s] or key_pressed[pygame.K_DOWN]:
            print('下')
        if key_pressed[pygame.K_a] or key_pressed[pygame.K_LEFT]:
            print('左')
        if key_pressed[pygame.K_d] or key_pressed[pygame.K_RIGHT]:
            print('右')
        if key_pressed[pygame.K_SPACE]:
            print('空格')
        pygame.display.update()
        time.sleep(0.1)


if __name__ == '__main__':
    main()
