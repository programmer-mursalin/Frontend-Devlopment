#include <bits/stdc++.h>
using namespace std;

double equation(double n)
{
    return (n * n * n) - 3 * n + 1;
}

int main()
{
    double a, b, c, error, tol;
    int i = 0;

    cin >> a >> b;
    cin >> tol;

    if (equation(a) * equation(b) >= 0)
    {
        cout << "no found" << endl;
        return 0;
    }

    c = (a + b) / 2.0;
    error = fabs(b - a);

    while (error > tol)
    {
        i++;

        cout << "It" << i << ": c = " << c << ", f(c) = " << equation(c) << endl;

        if (equation(c) == 0.0)
        {
            break;
        }
        else if (equation(a) * equation(c) < 0)
        {
            b = c;
        }
        else
        {
            a = c;
        }

        c = (a + b) / 2.0;
        error = fabs(b - a);
    }

    cout << "root is: " << c << endl;
}