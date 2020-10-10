# Summary

In the worst case,quicksort takes O(*n*^2) time. But that’s the worst case. In the average case, quicksort takes O(*n log n*) time.

When you write Big O notation like O(*n*), it really means this: **c * n**

Where *c* is some fixed amount of time that your algorithm takes. It’s called the *constant*. You usually ignore that constant, because if two algorithms have different *Big O* times, the constant doesn’t matter.

But sometimes the constant *can* make a difference. Quicksort versus merge sort is one example. Quicksort has a smaller constant than merge sort. So if they’re both O(*n log n*) time, quicksort is faster. And quicksort is faster in practice because it hits the average case way more often than the worst case.

**Recap**

- D&C works by breaking a problem down into smaller and smaller pieces. 
- If you’re using D&C on a list, the base case is probably an empty array or an array with one element.
- If you’re implementing quicksort, choose a random element as the pivot. The average runtime of quicksort is O(*n log n*)! 
- The constant in Big O notation can matter sometimes. That’s why
quicksort is faster than merge sort.
- The constant almost never matters for simple search versus binary search, because O(*log n*) is so much faster than O(*n*) when your list gets big.

