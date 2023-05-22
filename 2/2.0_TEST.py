def sumNums(n):
    res = 0
    while n != 0:
        res = res + (n % 10)
        n = n // 10
    return res


def mulNums(n):
    res = 1
    while n != 0:
        res = res * (n % 10)
        n = n // 10
    return res


nums = int(input())

print(f'Сумма цифр = {sumNums(nums)}')
print(f'Произведение цифр = {mulNums(nums)}')
