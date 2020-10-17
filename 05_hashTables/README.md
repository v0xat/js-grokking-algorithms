# Summary

A hash function is a function where you put in a string (a sequence of bytes) and you get back a number.

*collision*: two keys have been assigned the same slot.

In the average case, hash tables take O(1) for everything. O(1) is called *constant time*. It means the time taken will stay the same, regardless of how big the hash table is.

**Recap**

Hash tables are a powerful data structure because they’re so fast and they let you model data in a different way.

- You can make a hash table by combining a hash function with an array.
- Collisions are bad. You need a hash function that minimizes collisions.
- Hash tables have really fast search, insert, and delete.
- Hash tables are good for modeling relationships from one item to another item.
- Once your load factor is greater than .07, it’s time to resize your hash table.
- Hash tables are used for caching data (for example, with
a web server).
- Hash tables are great for catching duplicates.

