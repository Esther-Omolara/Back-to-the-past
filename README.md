# Back-to-the-past
Problem: Back to the Past
Ivan is 18 years old and receives an inheritance that consists of X money and a time machine. He decides to return to 1800, but does not know if the money will be enough to live without working. Write a program that calculates if Ivan will have enough money to not have to work until a particular year (inclusive). Assuming that for every even (1800, 1802, etc.) year he will spend 12 000 dollars. For every odd one (1801, 1803, etc.) he will spend 12 000 + 50 * [the age he will have reached in the given year].
Input Data
The input is read from the console and contains exactly 2 lines:
Inherited money – a real number in the range [1.00 … 1 000 000.00].Year, until which he has to live in the past (inclusive) – integer number in the range [1801 … 1900].
Output Data
Print on the console 1 line. The sum must be formatted up to the two symbols after the decimal point:
If money is enough:
"Yes! He will live a carefree life and will have {N} dollars left." – where N is the money that will remain.
If money is NOT enough:
"He will need {М} dollars to survive." – where M is the sum that is NOT enough.
Solution
