# Node Reactor Pattern
The reactor in Node.js is the event-based model that allows asynchronous operations to be processed efficiently using the Event Loop.

# Topics
- handling concurrent I/O
- Event Demultiplexer (ex: select, poll, epoll, kqueue)
- Reactor
- Event Handlers
- Handle
- Synchronous Event Demultiplexing
- Asynchronous Operations

## What is?
- It is a mechanism that allows the node
- Handling many requests at the same time without creating a `thread` per request
- events + callbacks/promises

## What is threads?
- It is the path that the program follows to execute tasks
- One thread -> once thing per time
- many thread -> many things per time
- Javascript is single-thread(only have a main thread)

## Events
- handle asynchronous events and tasks
- even though it is single-threaded
