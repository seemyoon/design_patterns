# Design Patterns

This repository contains **well-structured examples** of all major **Design Patterns** implemented in **Python** and **JavaScript**.


---

## Pattern Categories

### 1. Creational Patterns

Creational patterns deal with **object creation mechanisms**, trying to create objects in a manner suitable to the situation.

| Pattern            | Description |
|--------------------|-------------|
| **Singleton**       | Ensures a class has only one instance and provides a global point of access to it |
| **Factory Method**  | Creates objects without specifying the exact class |
| **Abstract Factory**| Produces families of related objects without specifying their concrete classes |
| **Builder**         | Constructs complex objects step-by-step |
| **Prototype**       | Clones objects instead of creating new instances from scratch |

Examples: `creational/`

---

### 2. Structural Patterns

Structural patterns focus on how classes and objects are composed to form larger structures.

| Pattern         | Description |
|-----------------|-------------|
| **Adapter**      | Allows incompatible interfaces to work together |
| **Bridge**       | Separates abstraction from its implementation |
| **Composite**    | Treats individual objects and compositions uniformly |
| **Decorator**    | Adds behavior to objects dynamically |
| **Facade**       | Provides a simplified interface to a complex system |
| **Flyweight**    | Shares common state between multiple objects to save memory |
| **Proxy**        | Controls access to another object |

Examples: `structural/`

---

### 3. Behavioral Patterns

Behavioral patterns are concerned with **communication between objects**.

| Pattern                   | Description |
|---------------------------|-------------|
| **Observer**              | Defines a one-to-many dependency for notification |
| **Strategy**              | Enables selecting an algorithm at runtime |
| **Command**               | Encapsulates a request as an object |
| **State**                 | Allows an object to alter its behavior based on internal state |
| **Template Method**       | Defines the skeleton of an algorithm, deferring steps to subclasses |
| **Visitor**               | Separates algorithms from the objects on which they operate |
| **Iterator**              | Provides a way to access elements sequentially without exposing structure |
| **Mediator**              | Encapsulates object communication in a single mediator object |
| **Memento**               | Captures and restores object state without violating encapsulation |
| **Chain of Responsibility** | Passes a request along a chain of handlers |
| **Interpreter**           | Defines a grammar and an interpreter for a language |

Examples: `behavioral/`
