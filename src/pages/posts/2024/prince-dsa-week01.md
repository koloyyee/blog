---
layout: ../../../layouts/Markdown-Post-Layout.astro
title: "Stepping into the world the Algorithm."
description: "The first week of Princeton DSA course."
publishedAt : 2024-01-19
tags: ["algorithm", "princeton", "java"]
---

# Princeton DSA Week 01 

## New Journey
After finishing my course on MOOC.fi with Java, I believe it is time for me to face my greatest fears and the mountain I want to climb, Data Structures & Algorithms (DSA). With the help of the internet, I have finally decided to do the Coursera Princeton DSA course, and in week 1 I already got hammered.

First, it is how to include the package alg4s.jar, with me having little to no experience in Java package management, I had to learn how to put the jar to the module in IntelliJ, and it took me 1 hour to figure it out. 

## Read the Whole Question!
Then my second weak point, reading the questions, there were 3 tasks to do for our first task, HelloWorld.java, HelloGoodbye.java, and RandomWord.java, surprisingly I failed to pass in the first run! Wait what? It should be easy, no? That’s right, it is easy if you have read the question, this is important throughout this whole week.

Not only did I find I wasn’t reading the whole question but I also overthink by using loops, and it shows how much overthinking I was, optimizing for no reason.

## Get Your Hands Dirty
After task 1, I was introduced to week 1 slides and reading the book chapters 1.4, and 1.5 is more important than I thought. Because it introduces the idea of trees, bushes and graphs, this data structure was never introduced to me until now.

The professor introduced UnionFind, Quick Union Find, and Weighted Quick Union Find algorithms to search for the dynamic connective between nodes, which was eye-opening when I saw how the branch was moved and connected with the union() and how the effective and simple the find(), it was truly fascinating.

After the simple introduction of the algorithm, rather than start working on the PSET, I took a slower route by trying to type out the whole algorithm myself and it was harder than I thought, especially tracking passing values between arrays what something I have never done before, it is an eye opening algorithm. Then I face my fear, of doing the PSET, and it is not easy(if you don’t read the question).

## The Assignment
It is called percolation, this computation algorithm helps to find a way to connect one end to the other, it can used in oil drilling, playing Go and Hex and many more. We can also find the tipping point where we have a high chance of determining the grid is percolated, and it is the goal of this assignment, to percolate and find the chances of success with confidence of 95%! Lots of words but in the spec of the assignments, the team from Princeton did provide us with the algorithm of Weighted Quick Union Find, and a big hint of virtual sites to track top and bottom so we can prevent brute forcing.

Why not brute forcing and do a few for loops? It works no? They do, it is small, and as the data set grows bigger, so as the memory and the time it takes to compute, that algorithm exists so we can find the most optimal way to achieve our task. Enough said I think you can also give this course a try!


## Algorithm
### Union-Find

