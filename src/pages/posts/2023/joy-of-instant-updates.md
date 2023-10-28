---

layout: ../../../layouts/Markdown-Post-Layout.astro
title: "The Joy of Realtime Updates."
publishedAt: 2023-Oct-28
description: "Network Programming & WebSocket are magical!"
tags: ["blogging"]

---

### Animals of Instant Gratification

The dominance of JavaScript has been mainly because it is the de facto language of web browsers, and more importantly junior programmers like myself have instant success when we see something showing up on the screen, and not only that I have always been fascinated by sockets and the realtime communication between 2 parties.

### First Encounter with WebSocket

During my coding bootcamp days in Hong Kong, we were writing a milestone project with React (class component days) I was trying very hard to do a chat room and polling with socket.io, it was hard, challenging, yet fun and rewarding when you see one user cast a vote and the donut chart on the other screen updated instantly. The layouts and colours weren't the attractive sides but the instant update that WebSocket was able to achieve is simply amazing.

### Challenge Accepted But Be Pragmatic

Back to 2023, and a few weeks ago, someone asked me if I was interested in working on a pilot project in which I'll need to do an instant update of a countdown timer from one room to the other room and right of the bet I thought of using WebSocket then I realize I'll need a database with realtime update features that brings to me maybe I could use [Pocketbase](https://pocketbase.io/), [Supabase](https://supabase.com/) or [Firebase](https://firebase.google.com/).

I remember reading the book, "[The Pragmatic Programmer](https://www.amazon.ca/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052/ref=sr_1_1?crid=1PXBK9K8CAW0M&keywords=the+pragmatic+programmer&qid=1698508334&sprefix=the+pragmatic+programmer%2Caps%2C85&sr=8-1)", the authors stated when it comes to the project that will be used in production, it would be better to use a tech stack that is stable and mature, that's why Instagram picked Postgres, with that in mind I picked Firebase.

### Don't Throw Away Money

This is the first time I to used Firebase, I heard about the authentication capabilities but I don't much about the database besides it has some real-time updates, hench, time to go through the documentation. First, I was drawn to the Firestore, which is similar to MongoDB, they are both Document NoSQL databases, but as I was developing the features which work the update was instant, I could see the timer was ticking and all of a sudden the app no longer updated! Why? What had happened? Oh... free-tier has a read / write limit per day, and down the road, it will be a drain for cash.

So I dived deeper and realized I had no idea what I was doing, syncing a countdown timer is not the same as using 1 machine, this led me to find [this StackOverflow question](https://stackoverflow.com/questions/66843397/how-to-implement-a-distributed-countdown-timer-in-firebase), then I realize how we should align between users!

### From Front To Back

Eventually, I changed the database from Firestore to Realtime Database, and the structure of the record also changed, what's need to be updated, and how to update the state in the front end was challenging yet fruitful. I do find joy in doing it, and since I am doing Java in college, network programming will be my next goal both in Java and NodeJs because I'll be able to work on the backend part of the socket! Maybe one day with C++, Haskell, Swift and Go, who knows?
