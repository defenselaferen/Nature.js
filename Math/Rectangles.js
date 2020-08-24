/*******************************************************\
 *                 COPYRIGHT 2020                      *
 *******************************************************
 *   Have privacy police this made by website          *
 *   thekotekjournal.epizy.com                         *
 *   this not for publish CODE                         *
 *((((((((((((((((((((((((((C))))))))))))))))))))))))))*
\*******************************************************/

export class Rectangles {
            large(p, l) {
                return p * l;
            }
            around(p, l){
                return (2 * (p + l));
            }
            GetLongInLargeAndWide(L, I){
                return L / I;
            }
            GetLongInAroundAndWide(K, I){
                return ((K / 2) - I);
            }
            GetWideInLargeAndLong(L, I){
                return L / I;
            }
            GetWideInAroundAndLong(K, I){
                return ((K / 2) - I);
            }
            Diagonal(p, l){
                return (Math.sqrt((p * p) + (l * l)));
            }
        }