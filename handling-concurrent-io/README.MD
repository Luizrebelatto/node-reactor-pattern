# Handling Concurrent I/O
- It is the ability of a system to handle multiple input and output operations at the same time without blocking everything.
- I/O = input/output
- Concurrent
  - handle multiple tasks while working
- Node does not block the thread
- event loop + callbacks/promises

#### Example
```
Request 01 → search DB (waiting DB)
Request 02 → call external API
Request 03 → read cache
```
- While A is waiting for DB
- B and C continue to be executed