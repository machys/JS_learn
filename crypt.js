// Write class below
class ShiftCipher{
    constructor(shift){
      this._shift = shift%64;
    }

    crypto(side,sentence){
        const length = sentence.length;
        let final = "";
        for (let i =0;i<length;i++){
           let charcode = sentence.charCodeAt(i)
           const aftershift = sentence.charCodeAt(i)+this._shift;
            if(((charcode >= 65)&&(charcode <= 90))||((charcode >= 97) && (charcode <= 122))){
                //console.log(charcode,String.fromCharCode(charcode));
              ((charcode >= 97) && (charcode <= 122))?charcode-=71:charcode -= 65;
              //console.log(charcode,String.fromCharCode(charcode+71));
              if (!side) {
                    charcode -= this._shift;
                    (charcode < 0)?charcode += 52:null;
                }else{
                    charcode += this._shift;
                   // (charcode>=50)?charcode -= 52:null;
                } 
                //console.log (charcode);
                charcode %= 52;
              
              if (charcode <=25){
                  final += String.fromCharCode(charcode+65);
                 // console.log(charcode,String.fromCharCode(charcode+65));
              }else {
                  
                  final += String.fromCharCode(charcode+71);
                  
              }
            }else{
              final += sentence[i];
            }     
        }
        return final;
      }
      decrypt(sentence){
        return this.crypto(false,sentence).toLowerCase();   
      }
      encrypt(sentence){
        return this.crypto(true,sentence).toUpperCase();   
      }
  
  }
  const cipher = new ShiftCipher(2);
  console.log(cipher.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'
  console.log(cipher.decrypt('K <3 OA RWRRA')); //
  
  const test2 = new ShiftCipher(1);
  //console.log(test2.encrypt("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));
  //console.log(test2.encrypt("abcdefghijklmnopqrstuvwxyz"));
  //console.log(test2.decrypt("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));
  //console.log(test2.decrypt("abcdefghijklmnopqrstuvwxyz"));
  console.log(test2.encrypt("Z"));
  