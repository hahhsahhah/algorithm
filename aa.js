class Solution {
    public:
        int longestString(int x, int y, int z) {
            int temp=min(x,y);
            if(x==0&&y==0)
            {
              return z*2;
            }
            if(x!=0&&y!=0)
            {
                if(x==y)
                {
                    return (x+y)*2+z*2;
                }
                else
                {
                    return (temp*2+1)*2+z*2;
                }
            }
            else
            {
                return (z+1)*2;
            }
            
        }
    };