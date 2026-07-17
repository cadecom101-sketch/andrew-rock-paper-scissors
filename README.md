# Andrew's Rock, Paper, Scissors Demo

A beginner-friendly command-line Rock, Paper, Scissors game written in Python.
Play one round against the computer and see who wins.

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
