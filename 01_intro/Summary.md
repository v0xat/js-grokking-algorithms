Guess the middle number and eliminate half the remaining numbers every time.

For any list of **n**, binary search will take log2 **n** steps to run in the worst case, whereas simple search will take **n** steps.

For simple search maximum number of guesses is the same as the size of the list. This is called **linear time**.

Binary search is different. If the list is 100 items long, it takes at most 7 guesses. If the list is 4 billion items, it takes at most 32 guesses. Binary search runs in **logarithmic time**.

Big O notation tells you how fast an algorithm is. For example, suppose you have a list of size **n**. Simple search needs to check each element, so it will take **n** operations. The run time in Big O notation is O(**n**). Where are the seconds? There are none — Big O doesn’t tell you the speed in seconds. **Big O notation lets you compare the number of operations.** It tells you how fast the algorithm grows.

**Big O establishes a worst-case run time**

- Algorithm speed isn’t measured in seconds, but in growth of the number of operations.
- Instead, we talk about how quickly the run time of an algorithm increases as the size of the input increases.
- Run time of algorithms is expressed in Big O notation.
- O(log *n*) is faster than O(*n*), but it gets a lot faster as the list of items you’re searching grows.
- Algorithm times are measured in terms of **growth** of an algorithm.
