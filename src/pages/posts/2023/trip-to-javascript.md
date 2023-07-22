---
layout: ../../../layouts/Markdown-Post-Layout.astro
title: "The Declarative Way."
description: "Looks harder then it seems"
publishedAt : 2023-07-16
tags: ["javascript", "declarative", "functional programming"]
---

## The importance of refactoring

Last Thursday 19/07/2023 I was trying to calculate the attendance rate for some students, but I faced some problems, I might have to submit `null` as a value else it will be a number, I was trying hard with whatever coding knowledge I have with me and I ended up with this.

```typescript
// Mine
    let currentAttendeesNum = attendees.length
    let currentAttended = 0
    $data.attendance.forEach((status) => {
      switch (status) {
        case 'late':
        case 'attended':
          currentAttended += 1
          break
        case 'quitted':
        case 'not_needed':
        case 'waiting':
          currentAttendeesNum -= 1
          break
        default:
          currentAttendeesNum
      }
    })
    let rate = isNaN(+currentAttended / currentAttendeesNum) ? 0 : +currentAttended / currentAttendeesNum
    attendanceRate = parseFloat(rate.toFixed(1))
```

<br>
In my mind, I was thinking how much I can avoid creating some new memory, and I type as I think, and my senior looked at my code he right away said, "I would rather do it in a declarative way, not that you are wrong but it is hard to maintain.". And he is right.

<br>
<br>
"To solve it, we can just use 2 reduce functions and that's it"

```typescript
const AttendanceStatus = {
    WAITING : "waiting",
    NOT_NEEDED: "not_needed",
    QUITTED: "quitted",
    ABSENT: "absent",
    PERSONAL : "personal",
    LATE: "late",
    SICK_LEAVE: "sick_leave"
} as const

  $: if ($data.attendance) {
    const atts: number[] = $data.attendance.reduce((acc, curr) => {
      if ([AttendanceStatus.WAITING, AttendanceStatus.NOT_NEEDED, AttendanceStatus.QUITTED].includes(curr)) {
        return acc
      } else if ([AttendanceStatus.ATTENDED, AttendanceStatus.LATE].includes(curr)) {
        return [...acc, 1]
      } else if ([AttendanceStatus.ABSENT, AttendanceStatus.PERSONAL, AttendanceStatus.SICK_LEAVE].includes(curr)) {
        return [...acc, 0]
      }
    }, [])

    attendanceRate = atts?.length > 0 ? atts.reduce((acc, curr) => acc + curr) / atts.length : null
```

<br>
<br>
and this moment I looked at my mine vs his, he just made it so much cleaner and much easier to read, and he also explains to me imperative vs declarative. I learnt something very useful on Thursday.
<br>
<br>
Programming is so much fun.
