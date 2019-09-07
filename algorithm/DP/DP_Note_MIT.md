# Dynamic Programming
This is the not for the DP part (4 lectures) of [MIT 6.006](https://www.youtube.com/watch?v=moPtwq_cVH8&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&index=23).

## What is DP
~= "careful brute force"
~= "subproblems" + "reuse" + guessing

## 5 steps
1. define subproblems
2. guess (part of solution)
   - in step2(& 3): which subprob to use to solve larger subprob
   - in step1: add more subprob to guess/remember more (remember more information about past) (for complicate DP)
3. relate subproblem solution
4. recurse & memoize -> acyclic -> topo order OR build DP table bottom-up
   - For memoize: use array OR parent pointer (remember which guess was best)
5. solve original problem (time = number of subprob * time/subprob)

## For subproblems of strings / sequences
- suffixes x[i:] O(n)
- prefixes x[:i] O(n)
- substrings x[i:j] O(n^2)

## Examples
### Fibonacci number
1. subproblems: prefixes fib(n - 1), if memo O(1) each
2. guess: sum of fib(n - 1) and fib(n - 2)
3. fib(n) = fib(n - 1) + fib(n - 2)
4. Easily turn to a DAG, each node indegrees is last two nodes.
5. fib(n)
```python
# Recursive
if n in memo: return memo[n]
if n <= 2: f = 1
else: f = fib(n - 1) + fib(n - 2)
memo[n] = f
return f

# Bottom up
fib = {}
for k in range(k):
    if k <= 2: f = 1
    else: f = fib[k - 1] + fib[k - 2]
    fib[k] = f
return fib[n]
```
### Shortest paths
### Text justification
Split text into "good" lines, badness(i, j): how bad the line start with i, end with j - 1. Should minimize the total badnesss value.
1. subproblems: suffixes words[i:], each sub O(n)
2. guess: where to start the next line
3. `DP(i) = min(i, j)(DP(j) + badness(i, j)), DP(n) = 0`
4. topoOrder: n, n - 1, n - 1, ..., 0
   total time: O(n ^ 2)
5. original prob: DP(0)
### Perfect information blackjack
- Deck: c0, c1, ..., cn-1
- 1 player vs dealer
- $1 bet/hand
- Max income
1. suffix ci
2. guess: how many hits?
3.
```
BJ(i) = max({-1, 1, 0} + BJ(j - 1) for j in range(i + 4, n) if valid game)
```
5. O(n^3)
### Parenthesization
Optimal evealuation of associative expression
1. subprob: optimal evealuation of Ai*...*Aj-1 (substring)
2. guess: outermost/last multiplation
3.
```
DP(i, j) = min(DP(i, k) + DP(k, j) + cost of (Aik * Akj) for k in range(i + 1, j))
DP(i, i + 1) = 0
```
time/sub = O(n)
4. topoorder: increasing substring size
5. DP(0, n)
### Edit distance
Given two string x & y, what's the cheapest possible sequence of character edits (insert, delete, replace) to turn x -> y
1. subprob: edit distance on x [i:] & y [j:] subprobs num: m * n, O(1) each
2. guess: for each x[i], y[j]:
          - replace
          - delete x[i]
          - insert y[j]
3.
```
DP(i, j) = min(
    cost of replace x[i] -> y[j] + DP(i + 1, j + 1),
    cost of insert y[j] + DP(i, j + 1),
    cost of delete x[i] + DP(i + 1, j)
)
```
4. topo graph: matrix(i, j) insert go right, delete go down, replace go right-bottom
5. DP(0, 0), O(mn)
### Knapsack
- list of items (size, value)
- Knapsack size S
1. subprobs: suffix i of items when remain size X
2. guess: is item i in the subset or not (boolean)
3. `DP(i, X) = max(DP(i + 1, X), DP(i + 1, X - si) + vi)`
4. DP(0, S), O(nS)
### Piano/Guitar fingering
- given sequence of n notes, find fingering for each note (single note)
- fingures: 1 ... F
- difficulty measure: d(p, f, q, g) key p -> q, fingure f => g
1. subprobs: how to play notes [i:] when use f for notes[i]
2. guess: finger g for notes[i + 1]
3. `DP(i, f) = min((DP(i + 1, g) + d(i, f, i + 1, g)) for g in 1...F)`
4. toporder: `for i in reversed(range(n)): for f in 1 ... F`
5. min(DP(0, f) for f in 1...F) => O(nF^2)
- If need to combine with string (guitar) => generalize 'finger' to 'finger + string'
- Multiple notes => the past need to remember is 'fingers to notes/null'
### Tetris training
- seq of n pieces
- drop from top
- full rows don't clear
- width is small
- initial empty
- can you survive?
1. subprob: suffix pieces[i:] given board skyline
2. guess: how to play for each piece (4 * width choice)
### Super Mario Bros I
- given level n
- small screen
- configuratoin
  - everything on scree c(w, h) (for each pixel)
  - Mario's velocity
  - score
  - time
  - screen vs level
