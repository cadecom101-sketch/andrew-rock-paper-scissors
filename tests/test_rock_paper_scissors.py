import unittest

from rock_paper_scissors import determine_winner


class DetermineWinnerTests(unittest.TestCase):
    def test_player_wins_with_every_winning_combination(self):
        winning_combinations = (
            ("rock", "scissors"),
            ("scissors", "paper"),
            ("paper", "rock"),
        )

        for player_choice, computer_choice in winning_combinations:
            with self.subTest(
                player_choice=player_choice,
                computer_choice=computer_choice,
            ):
                self.assertEqual(
                    determine_winner(player_choice, computer_choice),
                    "Player",
                )

    def test_matching_choices_are_a_tie(self):
        for choice in ("rock", "paper", "scissors"):
            with self.subTest(choice=choice):
                self.assertEqual(determine_winner(choice, choice), "Tie")

    def test_computer_wins_when_player_does_not_win_or_tie(self):
        self.assertEqual(determine_winner("rock", "paper"), "Computer")
        self.assertEqual(determine_winner("paper", "scissors"), "Computer")
        self.assertEqual(determine_winner("scissors", "rock"), "Computer")

    def test_invalid_choice_is_rejected(self):
        with self.assertRaises(ValueError):
            determine_winner("lizard", "rock")


if __name__ == "__main__":
    unittest.main()
