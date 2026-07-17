# Andrew's Rock, Paper, Scissors Demo

A beginner-friendly Rock, Paper, Scissors game. Play against the computer and
see who wins.

## Play online

No download or account is needed. Open the browser game here:

**[Play Andrew's Rock, Paper, Scissors](https://cadecom101-sketch.github.io/andrew-rock-paper-scissors/)**

## Run the game

You need Python 3 installed. From this project's folder, run:

```bash
python rock_paper_scissors.py
```

Type `rock`, `paper`, or `scissors` when prompted. The game accepts any mix of
uppercase and lowercase letters and asks again if the choice is not valid.

## Example

```text
Let's play rock, paper, or scissors!
Please choose rock, paper, or scissors: rock
Computer chose: scissors
You won!
```

## Run the tests

```bash
python -m unittest discover -s tests
```

The tests use only Python's standard library, so there are no extra packages to
install.

## Browser version

The shareable web game is built with plain HTML, CSS, and JavaScript. It has no
external dependencies and works on phones, tablets, and computers.
