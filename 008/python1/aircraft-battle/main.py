import pygame


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
    # 将飞机导入到窗口上
    screen.blit(aircraft, (480 / 2 - 30 / 2, 400))

    while True:
        # 获取操作事件
        for item_even in pygame.event.get():
            # 关闭事件
            if item_even.type == pygame.QUIT:
                pygame.quit()
                exit()
            # 键盘事件
            elif item_even.type == pygame.KEYDOWN:
                # 按上键盘左建
                if item_even.key == pygame.K_w or item_even.key == pygame.K_UP:
                    print('上')
                # 按下键盘左建
                elif item_even.key == pygame.K_s or item_even.key == pygame.K_DOWN:
                    print('下')
                # 按下键盘左建
                elif item_even.key == pygame.K_a or item_even.key == pygame.K_LEFT:
                    print('左')
                # 按下键盘右建
                elif item_even.key == pygame.K_d or item_even.key == pygame.K_RIGHT:
                    print('右')

        pygame.display.update()


if __name__ == '__main__':
    main()
