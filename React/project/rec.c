#include <stdio.h>
int fact(int x, int y, int cnt)
{
    if (cnt == 1)
        return 0;

    return n * fact(n - 1);
}
int main()
{
    int cnt = 0;
    int result = fact(0, 1, cnt);
    printf("%d", result);
}