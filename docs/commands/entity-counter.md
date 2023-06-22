## Introduction

[Sourced By Bedrock Commands Community Discord](https://discord.gg/SYstTYx5G5)

This system allows you to track how many players/entities are there on your world and run your desired commands based on the values obtained.

> Note: you cannot track entities in unloaded chunks though players can still be tracked regardless.

## Setup

*To be typed in chat:*

`/scoreboard objectives add total dummy`

## System

<CodeHeader>mcfunction</CodeHeader>

```yaml
/scoreboard players set onlinePlayers total 0
/execute as @e [type=player] run scoreboard players add onlinePlayers total 1

#Your Commands Here (examples)
/execute if score onlinePlayers total matches 4.. run title @a actionbar Enough players to start game.
/execute if score onlinePlayers total matches ..3 run title @a actionbar Not enough players.
```
![commandBlockChain3](/assets/images/commands/commandBlockChain/3.png)


Here we have used a FakePlayer name `onlinePlayers` and targeting `@e [type=player]` to track how many players are currently on the world. However you may use any FakePlayer name and target any entity you might need. Such as `@e [type=creeper]`

Similarly we're running a `/title` command as an example;
- a) when there are 4 or more players `4..`
- b) when there are 3 players or less `..3`

You can edit this as well to suit your need.

## Explanation

- The first two commands in the system sets the FakePlayer name's score to 0 (here `onlinePlayers`) and from each loaded entity we want to track (here `type=player`) it will add a score to the specified FakePlayer name (here `onlinePlayers`)

Now based on the values obtained we can use the `/execute if score` command to run our desired commands when certain values are met.
- **` n `** any number n
- **` n.. `** any number n and above
- **` ..n `** any number n and below
- **` n1..n2 `** any number n1 to any number n2.

## Entity Counter
To start off with, type these commands in chat:
- If you haven't already: `/scoreboard objective add total dummy`
- `/scoreboard objective setdisplay sidebar total`

Then set the following commands:
`/scoreboard players set entities toatal 0` Repeat | Unconditional | Always Active
Then make that command block face into this one:
`/execute as @e[type=!player] run scoreboard players add entities total 1` Chain | Unconditional | Always Active

These commands all one to the score for "entities" for every entity that exists that is not a player. This only counts loaded entities. The first command clears the count to count again otherwise it would just add on and on.
