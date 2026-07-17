"""Andrew's command-line Rock, Paper, Scissors demo."""

import random


CHOICES = ("rock", "paper", "scissors")


def determine_winner(player_choice: str, computer_choice: str) -> str:
    """Return Player, Computer, or Tie for a pair of valid choices."""
    if player_choice not in CHOICES or computer_choice not in CHOICES:
        raise ValueError("Choices must be rock, paper, or scissors.")

    winning_combinations = {
        ("rock", "scissors"),
        ("scissors", "paper"),
        ("paper", "rock"),
    }

    if player_choice == computer_choice:
        return "Tie"
    if (player_choice, computer_choice) in winning_combinations:
        return "Player"
    return "Computer"


def get_player_choice() -> str:
    """Prompt until the player enters one of the available choices."""
    while True:
        choice = input("Please choose rock, paper, or scissors: ").strip().lower()
        if choice in CHOICES:
            return choice
        print("That isn't a valid choice. Please try again.")


def play() -> None:
    """Play one round of Rock, Paper, Scissors."""
    print("Let's play rock, paper, or scissors!")
    player_choice = get_player_choice()
    computer_choice = random.choice(CHOICES)
    print(f"Computer chose: {computer_choice}")

    winner = determine_winner(player_choice, computer_choice)
    if winner == "Player":
        print("You won!")
    elif winner == "Tie":
        print("It's a tie!")
    else:
        print("Computer won!")


if __name__ == "__main__":
    play()
