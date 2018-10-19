import math

def binary_search(input_array, value):
    # we can infer the value is not on the array when:
    # - the array is empty, so obviously the value is not inside
    # - the value is bigger than the last element of the array, because the list is sorted
    # - the value is lower than the first element of the array, because the list is sorted
    if len(input_array) == 0 or value > input_array[len(input_array) - 1] or value < input_array[0]:
        return -1

    min = 0
    max = len(input_array) - 1

    while min <= max:
        guess = math.floor((min + max) / 2)

        if input_array[guess] == value:
            return guess

        if input_array[guess] < value:
            min = guess + 1

        if input_array[guess] > value:
            max = guess - 1

    return -1

test_list = [1,3,9,11,15,19,29]
test_val1 = 25
test_val2 = 15
# should print -1
print(binary_search(test_list, test_val1))
# should print 4
print(binary_search(test_list, test_val2))
