---
title: "Lessons Ive learnt as a code reviewer"
pubDatetime: 2019-12-31T00:00:00.000Z
description: "Code reviewing is one of the most underrated topics in software development."
---

Code reviewing is one of the most underrated topics in software development. Most teams don't even bother to do it while some do it for the sake of doing it. But when use it correctly it could be the turning point for any team to be a successful one.

### Little bit of background as to why i chose to wrap up this year

2019 has been an eventful year for me personally. I left my previous job , moved to Singapore where i got an opportunity to join an amazing [company](https://www.ascendaloyalty.com/) as a senior dev.

Before I joined [Ascenda](https://www.ascendaloyalty.com/), I worked for 4 different companies where I worked on multiple projects and teams. Throughout this period of time, I might have done thousands of lines of code changes and created hundreds of pull requests. But I am embarrassed to say that none of those pull requests have gone through proper code reviewing. Because in any of my previous work places, code reviewing was never really a mandatory step of completing a feature or fixing a bug. So I never really knew or understood how code reviewing can be such an important step in a dev team.

But in Ascenda , it is part of the work culture, that a PR will go through rigorous amount of code reviewing before it is get merged. When I opened my first PR at Ascenda I got overwhelming amount of comments from multiple reviewers and it was so intimidating at first. I couldn't believe the amount of mistakes were pointed out in my PR. And for a while I was suffering from [imposter syndrome](https://en.wikipedia.org/wiki/Impostor_syndrome).

![PRcomments](https://lazydevguy.files.wordpress.com/2019/12/image-1.png)
One of my early PRs had more than 100 of comments from multiple reviewers!

But since then every time I opened a new PR, I minimised the mistakes I made earlier and got to a point where I started to understand the full potential of code reviewing. Then it got better from there when I started to review PRs of others as well.

### Code reviews could reveal more about the codebase than you previously knew

As a developer, you need to know about how the application works from top to bottom. But it is not possible to learn the whole mechanism of the app for a developer on his own. Because you will probably be working on a set of features while your colleagues work on some other features. So there is always a gap between the knowledge as you are not expose to the whole development of the app. But when you review PRs, you fill this gap. You get to know more and you will be surprised how handy this new information could become useful for your own tasks in the long run.

### You can learn multiple ways to solve a problem

When you reviewing someone else's code, you have to think from the other person's perspective. And this person might not be thinking the same way as you do. This person might have better ways or cleverer ways of finding a solution to a particular problem. These tips collectively will help you to write more efficient code in the future.

### You can teach someone else with a better approach

There is nothing more satisfying than teaching something you know to another person. When you review a PR and find out that there is a better way to approach a particular problem, then you can teach your fellow developer about it, which would ultimately beneficial for the entire team. I think this is one of the best ways to improve the team dynamics in development team especially if there are new members in the team.

### You can help increase the overall throughput of the team

Normally the ratio between developers and QA in a software team is 3:1 Which means that usually in the middle of a Sprint, the QA work is overloaded by lot of features/bugs which need to be tested. The worst thing about this is that sometimes us developers tend to do silly mistakes. When there is no proper code review in place, these issues are detected at the very early stage of QA testing and are sent back to the developer almost instantly. Let me explain this more using an example.

Scenario: Imagine there is a task which is basically adding a banner text in the app in landing page , in the account page and in also in the email template.

1) Developer A , completes the task , creates a PR.

2) Developer B approves the PR without conducting proper code review.

3) PR is merged to staging and deployed.

4) Task is sent to QA , who finds out that the changes are only made in landing page and accounts page but not in email template.

5) QA labels it as needs fix. Send back to Developer A who is now working on some other task.

6) Developer A again switch back to this PR and fixes it. Again step 2 , 3 happens.

7) QA finds out this time, the Developer forgot to change the colour of the text in the email as the task says. And it was again labeled as needs fix and sent back to the Developer A and the cycle continues.

If you look at above scenario , you could see there is a cycle going on. Imagine if Developer B had conducted a proper code review in the first place, He could've seen this issue almost immediately and informed Developer A. Because these kind of issues can be seen even without digging into the code. This would've minimised the time and the roundtrips between the developer and the QA. Also this would've minimised the context switch happens between the cycles for Developer A. This is a major point holding back teams from developing and shipping features as per original estimation and schedule. Teams could overcome this with proper code reviews.

### You can identify edge cases early in the development phase

This is I think what code reviews are meant to be in the first place. Usually when you are implementing something complex, you tend to miss the edge cases. Sometimes even the QAs don't find it because well, those are hidden in the code and overlooked during testing. Especially if they are related to security. But these edge cases could pop up during proper code reviews. It makes more sense if you imagine code reviews are your first line of defence against nasty production bugs!

### Code reviews might help you identify performance issues

This is another key point that could be discovered using proper code reviews in place. Imagine a simple scenario where there is a feature which is done using 2 loops. QA sign this off because the feature works as per the requirement. But what the QA doesn't know is that the feature could be done using a single loop in the implementation therefore reducing the complexity from O(N^2) to O(N). This wouldn't be a problem when QA tested this against the staging data which is a small dataset compare to production. But when size of N increases (N = size of the incoming data) it could pose a significant performance issue which could've been eliminated at the very early stage of the development.

### It will help you identify duplicate code

When you work in code base (especially if it is a multi tenant application), It is imperative that the teams follow one of key principles in software development which is re-usability. Otherwise you will end up with lot of duplicate code which will lead to maintenance hell. Code duplication is not something a QA could find out. So even if the PR contains duplicate code but if it runs according to the spec then it will be the signed off by QA. But this is bad for the codebase. These can be only unearthed during proper code reviews.

Wrapping things up ..

Code reviewing should be embraced as part of the work culture and there is no doubt about it. You could avoid code smells , performance issues and code duplications if proper code reviews put in place. Also it is fun to see how minds of other developers work when finding a solution for a common problem. Most importantly it teaches to be a better developer!

There is so much you could write up more on this topic, will probably do a part II next year 🙂 Happy New Year !

Also our super awesome Ascenda Team looking for tech savvy developers to join us, as we are rapidly expanding our team. So if you want to join our team, ping me on below 🙂

LinkedIn: https://www.linkedin.com/in/maliksalim/
Email: salim.malik@ascendaloyalty.com 