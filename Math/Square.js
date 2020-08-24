/*******************************************************\
 *                 COPYRIGHT 2020                      *
 *******************************************************
 *   Have privacy police this made by website          *
 *   thekotekjournal.epizy.com                         *
 *   this not for publish CODE                         *
 *((((((((((((((((((((((((((C))))))))))))))))))))))))))*
\*******************************************************/

export class Squares {
            large(s) {
                return s * s;
            }
            around(s){
                return 4 * s;
            }
            GetSideInLarge(x){
                return Math.sqrt(x);
            }
            GetSideInAround(x){
                return x / 4;
            }
            Diagonal(s){
                return (Math.sqrt(2 * (s * s)));
            }
        }