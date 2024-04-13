---
layout: ../../../layouts/Markdown-Post-Layout.astro
title: "Let's start with Linked List and Array."
description: "The second week of Princeton DSA course."
publishedAt : 2024-01-25
tags: ["algorithm", "princeton", "java"]
---

# Princeton Algorithm Week 02

## Mythical Beast: Linked List

Linked list is very interesting data structure to me, in its most basic form is there is an item or data then is a node for the next item.
```java

class Node<Item> {
	private Item item;
	private Node<Item> next;

}

```
What it does to create a link between 1 node to another node, but we don’t stop here, because a node can be very flexible, if we only have one “next” node, it is also known as the singly linked list, if we have a “prev” node, it will be a doubly linked list for data structures like stack, queue, it is very popular to use a linked list as the core data structure, as it is very easy to add and remove an element, except when we need to traverse the linked list. The doubly linked list to crucial to Deque.

### First Question: Deque.
What is a Deque you may ask, Deque is a queue that allows adding or removing an element to the head or tail. it is one of the questions in the PSET, and doubly linked it is very important, but as a reminder don’t forget where the tail and head pointer should be when either one is null.

```java

class Node<Item> {
	private Node<Item> prev;
	private Item item;
	private Node<Item> next;

}

```

### Second Question: Randomize Queue - Hint: Circular Array
To that, we go back to our old friend array. The array makes the retrieval of any item fast because of the index. Interestingly enough thanks to this PSET I learnt something called the “circular array” where if the tail or head reaches the end it can just be “wrapped around” thanks to the index. But the downside of using an array is when the array is copied, it takes a long time to copy the values, but the traverse speed is fast! If you are doing the RandomizedQueue you can consider using a resizable array as your weapon of choice!



## LeetCode Challenge with Stack:
LeetCode: Valid Parentheses
One of the best ways is to apply the knowledge.

### Use it if you understand it.
As Princeton professor said if I am not sure about the implementations of the underlying algorithm might as well just write my own.

So I created my stack by using the stack data structure taught in the book, and I got to beat 98% of the people who did the challenge.

### Let's get back to the challenge.
First, let's turn the string into an array and loop through it, if it is ( or { or [ we will push the other side e.g: ],}, and ).

If the stack is empty in the first loop it will be false, if not we can start pushing the "something" (you need figure it out yourself) onto the stack, afterwards we can pop the stack to see if the array’s right-hand side sign are the same as the "something" in our stack then we’ll know () or [], {}. 

### Why Stack?
Why Stack? Because of LIFO(last in first out), if we store the right-hand side of the () / {} / [] when we pop it, the sequence will be the same as we are pushing it in, if they are not the same we know it will be false. It is a very good challenge, I admit I did need to get some hints, but I will give it a try again in 2 weeks.

Stack, Queue, Singly and Doubly Linked List, Deque, Resizable Array Stack/Queue, Circular Array, these guys opened my eyes, can’t wait to do the second part of Week 2 


## Algorithm
###
