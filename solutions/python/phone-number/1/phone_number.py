import re

class PhoneNumber:
    def __init__(self, number: str):
        # Check for letters
        if re.search(r"[A-Za-z]", number):
            raise ValueError("letters not permitted")

        # Check for invalid punctuation
        if re.search(r"[^\d\s\+\-\.\(\)]", number):
            raise ValueError("punctuations not permitted")

        # Strip all non-digit characters
        digits = re.sub(r"\D", "", number)

        # Validate length
        if len(digits) < 10:
            raise ValueError("must not be fewer than 10 digits")
        if len(digits) > 11:
            raise ValueError("must not be greater than 11 digits")

        # Handle 11-digit numbers
        if len(digits) == 11:
            if digits[0] != "1":
                raise ValueError("11 digits must start with 1")
            digits = digits[1:]  # remove country code

        # Now we must have exactly 10 digits
        self.number = digits
        self.area_code = digits[0:3]
        self.exchange_code = digits[3:6]
        self.subscriber_number = digits[6:]

        # Area code rules
        if self.area_code[0] == "0":
            raise ValueError("area code cannot start with zero")
        if self.area_code[0] == "1":
            raise ValueError("area code cannot start with one")

        # Exchange code rules
        if self.exchange_code[0] == "0":
            raise ValueError("exchange code cannot start with zero")
        if self.exchange_code[0] == "1":
            raise ValueError("exchange code cannot start with one")

    def __str__(self):
        return self.number

    def pretty(self):
        """Return formatted number as (NXX)-NXX-XXXX"""
        return f"({self.area_code})-{self.exchange_code}-{self.subscriber_number}"

    def pretty_with_country(self):
        """Return formatted number with country code +1"""
        return f"+1 ({self.area_code})-{self.exchange_code}-{self.subscriber_number}"