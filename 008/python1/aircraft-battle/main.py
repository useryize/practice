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
        for item_even in pygame.event.get():
            if item_even.type == pygame.QUIT:
                pygame.quit()
                print(item_even)
                exit()

        pygame.display.update()


if __name__ == '__main__':
    main()
