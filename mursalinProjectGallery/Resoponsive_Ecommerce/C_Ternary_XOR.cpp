#include <bits/stdc++.h>
using namespace std;

#define endl '\n'
using ll = long long;

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int t;
    cin >> t;
    while (t--)
    {
        int n;
        cin >> n;

        string s;
        cin >> s;

        string o = "1", p = "1";
        int cnt1 = 1, cnt2 = 1, ok = 0, r = -1;

        for (int i = 1; i < n; i++)
        {
            if (s[i] == '0')
            {
                o += '0';
                p += '0';
            }
            else if (ok == 0)
            {
                if (s[i] == '2')
                {

                    if (cnt1 < cnt2)
                    {

                        o += '2';

                        p += '0';
                        r = 1;
                        ok = 1;
                    }
                    else if (cnt1 > cnt2)
                    {
                        p += '2';

                        o += '0';
                        r = 2;
                        ok = 1;
                    }
                    else
                    {
                        o += '1';
                        p += '1';
                        cnt1++;
                        cnt2++;
                    }
                }

                else
                {
                    if (cnt1 < cnt2)
                    {

                        o += '1';

                        p += '0';
                        r = 1;
                        ok = 1;
                    }
                    else if (cnt1 > cnt2)
                    {
                        p += '1';

                        o += '0';
                        r = 2;
                        ok = 1;
                    }
                    else
                    {
                        o += '1';
                        p += '0';

                        cnt1++;
                    }
                }
            }

            else
            {
                if (r == 1)
                {
                    if (s[i] == '1')
                    {
                        o += '1';
                        p += '0';
                    }

                    else
                    {
                        o += '2';
                        p += '0';
                    }
                }

                else
                {
                    if (s[i] == '1')
                    {
                        o += '0';
                        p += '1';
                    }

                    else
                    {
                        o += '0';
                        p += '2';
                    }
                }
            }
        }

        cout << o << endl;
        cout << p

             << endl;
    }

    return 0;
}