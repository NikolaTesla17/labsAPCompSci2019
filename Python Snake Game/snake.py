import pygame
import random
BLACK = (0, 0, 0)
BLUE = (0, 0, 255)
WHITE = (255, 255, 255)

segment_width = 15
segment_height = 15
segment_margin = 3
foodX = 200
foodY = 200
food = 0
segs = 2

x_change = 18
y_change = 0


class Segment(pygame.sprite.Sprite):

    def __init__(self, x, y):
        super().__init__()

        self.image = pygame.Surface([15, 15])
        self.image.fill((255, 255, 255))

        self.rect = self.image.get_rect()
        self.rect.x = x
        self.rect.y = y


pygame.init()
screen = pygame.display.set_mode([600, 600])
sprites = pygame.sprite.Group()
clock = pygame.time.Clock()
done = False

snake_segments = []
for i in range(segs):
    x = 250 - (18) * i
    y = 30
    segment = Segment(x, y)
    snake_segments.append(segment)
    sprites.add(segment)


while not done:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            done = True

        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_LEFT:
                x_change = (18) * -1
                y_change = 0
            if event.key == pygame.K_RIGHT:
                x_change = (18)
                y_change = 0
            if event.key == pygame.K_UP:
                x_change = 0
                y_change = (18) * -1
            if event.key == pygame.K_DOWN:
                x_change = 0
                y_change = (18)

    old_segment = snake_segments.pop()
    sprites.remove(old_segment)