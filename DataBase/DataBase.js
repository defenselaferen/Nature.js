/*******************************************************\
 *                 COPYRIGHT 2020                      *
 *******************************************************
 *   Have privacy police this made by website          *
 *   thekotekjournal.epizy.com                         *
 *   this not for publish CODE                         *
 *((((((((((((((((((((((((((C))))))))))))))))))))))))))*
\*******************************************************/

export class DataBase {
          constructor()
          {
              this.Vector2D = [[],[]];
              this.IncrementInVector = 0;
          }
          PushData(object)
          {
              // Safe Data
              if(object == null)
              {
                  return false;
              } else
              {
                  if(object.primary == null)
                  {
                      PrintErr("Please If You Push Data Make Name Primary");
                      return false;
                  }
                  if(object.value == null)
                  {
                      PrintErr("Please If You Push Data Make Name Value");
                      return false;
                  }
              }
              
              this.Vector2D[0].push(object.primary);
              this.Vector2D[1].push(CryptoJS.AES.encrypt(object.value, "Secret Passphrase"));
              
          }
          
          QueryValue(primary)
          {
              if(primary == null)
              {
                  PrintErr('If You Wont Use Query You Must To Make Primary');
                  return false;
              }
              
              let LengthVector = this.Vector2D[0].length;
              for(let i = 0; i < LengthVector; i++)
              {
                  if(this.Vector2D[0][i] == primary)
                  {
                        let resulting = CryptoJS.AES.decrypt(this.Vector2D[1][i], "Secret Passphrase");
                        resulting = resulting.toString(CryptoJS.enc.Utf8);
                      return resulting;
                  }
              }
          }
          
          PushPrimaryIncrement(values)
          {
              this.PushData({
                  primary : this.IncrementInVector,
                  value : values
              });
              this.IncrementInVector++;
          }
          
          GetLength()
          {
              return this.Vector2D[0].length;
          }
          
          DeleteData(primary)
          {
              let temp2D = [[],[]];
              const LengthVector2D = this.Vector2D[0].length;
              for(let i = 0; i < LengthVector2D; i++)
              {
                  if(this.Vector2D[0][i] == primary)
                  {
                      this.Vector2D[0].pop();
                      this.Vector2D[1].pop();
                      break;
                  } else 
                  {
                      temp2D[0].push(this.Vector2D[0][i]);
                      temp2D[1].push(this.Vector2D[1][i]);
                      this.Vector2D[0].pop();
                      this.Vector2D[1].pop();
                  }
              }
              for(let i = 0; i < temp2D.length; i++)
              {
                  this.Vector2D[0].push(temp2D[0][i]);
                  this.Vector2D[1].push(temp2D[1][i]);
              }
          }
      }