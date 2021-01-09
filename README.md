# Structures and Algorithms

A collection of data structures and algorithms written in Javascript.  There may
be multiple implementations of the same thing using different underlying
structures.

Each data structure or algorithm will have an included README with a description
of the algorithm or structure.  For data structures, this will also include
documentation about what methods are implemented for the structure.  There will
also be an included test suite for each structure or algorithm.  If an data
structure has multiple implementations (such as a stack implemented with an
array and one implemented with a linked list), these will share the same test
suite.

Additionally, each data structure implementation will be self-contained, meaning
code will not be shared amongst files, even if it means code repitition. We want
to maintain self-sufficiency and to be able to make modifications to an
individual implementation without impacting others.  Algorithms may utilize
implemented data structures, but not vice-versa. 
