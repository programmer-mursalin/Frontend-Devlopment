#include <stdio.h>

int main()
{
    int n;
    scanf("%d", &n); // Read number of lines
    int l = 1;       // Initial number of asterisks

    for (int i = 1; i <= n; i++) // Loop for n rows
    {
        for (int j = 1; j <= l; j++) // Print l asterisks
        {
            printf("* ");
        }
        printf("\n"); // Newline after each row
        l = l + 2;    // Increase number of asterisks by 2
    }
}
