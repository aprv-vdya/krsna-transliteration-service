if(typeof keyman === 'undefined') {
  console.log('Keyboard requires KeymanWeb 10.0 or later');
  if(typeof tavultesoft !== 'undefined') tavultesoft.keymanweb.util.alert("This keyboard requires KeymanWeb 10.0 or later");
} else {
KeymanWeb.KR(new Keyboard_iastify());
}
function Keyboard_iastify()
{
  var modCodes = keyman.osk.modifierCodes;
  var keyCodes = keyman.osk.keyCodes;

  this._v=(typeof keyman!="undefined"&&typeof keyman.version=="string")?parseInt(keyman.version,10):9;
  this.KI="Keyboard_iastify";
  this.KN="IASTify";
  this.KMINVER="10.0";
  this.KV={F:' 1em "Arial"',K102:0};
  this.KV.KLS={

  };
  this.KV.BK=(function(x){
    var
      empty=Array.apply(null, Array(65)).map(String.prototype.valueOf,""),
      result=[], v, i,
      modifiers=['default','shift','ctrl','shift-ctrl','alt','shift-alt','ctrl-alt','shift-ctrl-alt'];
    for(i=modifiers.length-1;i>=0;i--) {
      v = x[modifiers[i]];
      if(v || result.length > 0) {
        result=(v ? v : empty).slice().concat(result);
      }
    }
    return result;
  })(this.KV.KLS);
  this.KDU=0;
  this.KH='';
  this.KM=0;
  this.KBVER="1.0";
  this.KMBM=modCodes.SHIFT /* 0x0010 */;
  this.KVKL={
  "phone": {
    "font": "Tahoma",
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_Q",
                "text": "q"
              },
              {
                "id": "K_W",
                "text": "w"
              },
              {
                "id": "K_E",
                "text": "e"
              },
              {
                "id": "K_R",
                "text": "r"
              },
              {
                "id": "K_T",
                "text": "t"
              },
              {
                "id": "K_Y",
                "text": "y"
              },
              {
                "id": "K_U",
                "text": "u"
              },
              {
                "id": "K_I",
                "text": "i"
              },
              {
                "id": "K_O",
                "text": "o"
              },
              {
                "id": "K_P",
                "text": "p"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "text": "a",
                "pad": "50"
              },
              {
                "id": "K_S",
                "text": "s"
              },
              {
                "id": "K_D",
                "text": "d"
              },
              {
                "id": "K_F",
                "text": "f"
              },
              {
                "id": "K_G",
                "text": "g"
              },
              {
                "id": "K_H",
                "text": "h"
              },
              {
                "id": "K_J",
                "text": "j"
              },
              {
                "id": "K_K",
                "text": "k"
              },
              {
                "id": "K_L",
                "text": "l"
              },
              {
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_SHIFT",
                "text": "*Shift*",
                "sp": "1",
                "nextlayer": "shift"
              },
              {
                "id": "K_Z",
                "text": "z"
              },
              {
                "id": "K_X",
                "text": "x"
              },
              {
                "id": "K_C",
                "text": "c"
              },
              {
                "id": "K_V",
                "text": "v"
              },
              {
                "id": "K_B",
                "text": "b"
              },
              {
                "id": "K_N",
                "text": "n"
              },
              {
                "id": "K_M",
                "text": "m"
              },
              {
                "id": "K_PERIOD",
                "text": ".",
                "sk": [
                  {
                    "text": ",",
                    "id": "K_COMMA"
                  },
                  {
                    "text": "!",
                    "id": "K_1",
                    "layer": "shift"
                  },
                  {
                    "text": "?",
                    "id": "K_SLASH",
                    "layer": "shift"
                  },
                  {
                    "text": "'",
                    "id": "K_QUOTE"
                  },
                  {
                    "text": "\"",
                    "id": "K_QUOTE",
                    "layer": "shift"
                  },
                  {
                    "text": "\\",
                    "id": "K_BKSLASH"
                  },
                  {
                    "text": ":",
                    "id": "K_COLON",
                    "layer": "shift"
                  },
                  {
                    "text": ";",
                    "id": "K_COLON"
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "100",
                "sp": "1"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "K_NUMLOCK",
                "text": "*123*",
                "width": "150",
                "sp": "1",
                "nextlayer": "numeric"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "120",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "width": "610"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "150",
                "sp": "1"
              }
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_Q",
                "text": "Q"
              },
              {
                "id": "K_W",
                "text": "W"
              },
              {
                "id": "K_E",
                "text": "E"
              },
              {
                "id": "K_R",
                "text": "R"
              },
              {
                "id": "K_T",
                "text": "T"
              },
              {
                "id": "K_Y",
                "text": "Y"
              },
              {
                "id": "K_U",
                "text": "U"
              },
              {
                "id": "K_I",
                "text": "I"
              },
              {
                "id": "K_O",
                "text": "O"
              },
              {
                "id": "K_P",
                "text": "P"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_A",
                "text": "A",
                "pad": "50"
              },
              {
                "id": "K_S",
                "text": "S"
              },
              {
                "id": "K_D",
                "text": "D"
              },
              {
                "id": "K_F",
                "text": "F"
              },
              {
                "id": "K_G",
                "text": "G"
              },
              {
                "id": "K_H",
                "text": "H"
              },
              {
                "id": "K_J",
                "text": "J"
              },
              {
                "id": "K_K",
                "text": "K"
              },
              {
                "id": "K_L",
                "text": "L"
              },
              {
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_SHIFT",
                "text": "*Shift*",
                "sp": "2",
                "nextlayer": "default"
              },
              {
                "id": "K_Z",
                "text": "Z"
              },
              {
                "id": "K_X",
                "text": "X"
              },
              {
                "id": "K_C",
                "text": "C"
              },
              {
                "id": "K_V",
                "text": "V"
              },
              {
                "id": "K_B",
                "text": "B"
              },
              {
                "id": "K_N",
                "text": "N"
              },
              {
                "id": "K_M",
                "text": "M"
              },
              {
                "id": "K_PERIOD",
                "text": ".",
                "layer": "default",
                "sk": [
                  {
                    "text": ",",
                    "id": "K_COMMA",
                    "layer": "default"
                  },
                  {
                    "text": "!",
                    "id": "K_1",
                    "layer": "shift"
                  },
                  {
                    "text": "?",
                    "id": "K_SLASH",
                    "layer": "shift"
                  },
                  {
                    "text": "'",
                    "id": "K_QUOTE",
                    "layer": "default"
                  },
                  {
                    "text": "\"",
                    "id": "K_QUOTE",
                    "layer": "shift"
                  },
                  {
                    "text": "\\",
                    "id": "K_BKSLASH",
                    "layer": "default"
                  },
                  {
                    "text": ":",
                    "id": "K_COLON",
                    "layer": "shift"
                  },
                  {
                    "text": ";",
                    "id": "K_COLON",
                    "layer": "default"
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "sp": "1"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "K_NUMLOCK",
                "text": "*123*",
                "width": "150",
                "sp": "1",
                "nextlayer": "numeric"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "120",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "width": "610"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "150",
                "sp": "1"
              }
            ]
          }
        ]
      },
      {
        "id": "numeric",
        "row": [
          {
            "id": "1",
            "key": [
              {
                "id": "K_1",
                "text": "1"
              },
              {
                "id": "K_2",
                "text": "2"
              },
              {
                "id": "K_3",
                "text": "3"
              },
              {
                "id": "K_4",
                "text": "4"
              },
              {
                "id": "K_5",
                "text": "5"
              },
              {
                "id": "K_6",
                "text": "6"
              },
              {
                "id": "K_7",
                "text": "7"
              },
              {
                "id": "K_8",
                "text": "8"
              },
              {
                "id": "K_9",
                "text": "9"
              },
              {
                "id": "K_0",
                "text": "0"
              }
            ]
          },
          {
            "id": "2",
            "key": [
              {
                "id": "K_4",
                "layer": "shift",
                "text": "$",
                "pad": "50"
              },
              {
                "id": "K_2",
                "layer": "shift",
                "text": "@"
              },
              {
                "id": "K_3",
                "layer": "shift",
                "text": "#"
              },
              {
                "id": "K_5",
                "layer": "shift",
                "text": "%"
              },
              {
                "id": "K_7",
                "layer": "shift",
                "text": "&"
              },
              {
                "id": "K_HYPHEN",
                "layer": "shift",
                "text": "_"
              },
              {
                "id": "K_EQUAL",
                "text": "=",
                "layer": "default"
              },
              {
                "id": "K_BKSLASH",
                "layer": "shift",
                "text": "|"
              },
              {
                "id": "K_BKSLASH",
                "text": "\\",
                "layer": "default"
              },
              {
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": "3",
            "key": [
              {
                "id": "K_LBRKT",
                "text": "[",
                "pad": "110",
                "sk": [
                  {
                    "id": "U_00AB",
                    "text": "«"
                  },
                  {
                    "id": "K_COMMA",
                    "text": "<",
                    "layer": "shift"
                  },
                  {
                    "id": "K_LBRKT",
                    "text": "{",
                    "layer": "shift"
                  }
                ]
              },
              {
                "id": "K_9",
                "layer": "shift",
                "text": "("
              },
              {
                "id": "K_0",
                "layer": "shift",
                "text": ")"
              },
              {
                "id": "K_RBRKT",
                "text": "]",
                "sk": [
                  {
                    "id": "U_00BB",
                    "text": "»"
                  },
                  {
                    "id": "K_PERIOD",
                    "text": ">",
                    "layer": "shift"
                  },
                  {
                    "id": "K_RBRKT",
                    "text": "}",
                    "layer": "shift"
                  }
                ]
              },
              {
                "id": "K_EQUAL",
                "layer": "shift",
                "text": "+"
              },
              {
                "id": "K_HYPHEN",
                "text": "-"
              },
              {
                "id": "K_8",
                "layer": "shift",
                "text": "*"
              },
              {
                "id": "K_SLASH",
                "text": "/"
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "100",
                "sp": "1"
              }
            ]
          },
          {
            "id": "4",
            "key": [
              {
                "id": "K_LOWER",
                "text": "*abc*",
                "width": "150",
                "sp": "1",
                "nextlayer": "default"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "120",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "width": "610"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "150",
                "sp": "1"
              }
            ]
          }
        ]
      }
    ],
    "displayUnderlying": false
  }
};
  this.s_vowels_12="aāiīuūeēoōAĀIĪUŪEĒOŌ";
  this.s_cons_lower_13="kgṅcjñṭḍṇtdnpbmyrlvśṣsh";
  this.s_cons_upper_14="KGṄCJÑṬḌṆTDNPBMYRLVŚṢSH";
  this.KVER="18.0.249.0";
  this.KVS=[];
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.gs=function(t,e) {
    return this.g_main_0(t,e);
  };
  this.g_main_0=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e, modCodes.SHIFT | modCodes.VIRTUAL_KEY /* 0x4010 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(k.KFCM(2,t,[{t:'a',a:this.s_vowels_12},{t:'a',a:this.s_cons_lower_13}])){
        r=m=1;   // Line 100
        k.KDC(2,t);
        k.KIO(-1,this.s_vowels_12,1,t);
        k.KIO(-1,this.s_cons_lower_13,2,t);
        k.KO(-1,t,"̱");
      }
      else if(k.KFCM(2,t,[{t:'a',a:this.s_vowels_12},{t:'a',a:this.s_cons_upper_14}])){
        r=m=1;   // Line 102
        k.KDC(2,t);
        k.KIO(-1,this.s_vowels_12,1,t);
        k.KIO(-1,this.s_cons_upper_14,2,t);
        k.KO(-1,t,"̱");
      }
    }
    else if(k.KKM(e, modCodes.VIRTUAL_KEY /* 0x4000 */, keyCodes.K_EQUAL /* 0xBB */)) {
      if(k.KFCM(1,t,['a'])){
        r=m=1;   // Line 22
        k.KDC(1,t);
        k.KO(-1,t,"ā");
      }
      else if(k.KFCM(1,t,['ā'])){
        r=m=1;   // Line 23
        k.KDC(1,t);
        k.KO(-1,t,"a");
      }
      else if(k.KFCM(1,t,['i'])){
        r=m=1;   // Line 25
        k.KDC(1,t);
        k.KO(-1,t,"ī");
      }
      else if(k.KFCM(1,t,['ī'])){
        r=m=1;   // Line 26
        k.KDC(1,t);
        k.KO(-1,t,"i");
      }
      else if(k.KFCM(1,t,['u'])){
        r=m=1;   // Line 28
        k.KDC(1,t);
        k.KO(-1,t,"ū");
      }
      else if(k.KFCM(1,t,['ū'])){
        r=m=1;   // Line 29
        k.KDC(1,t);
        k.KO(-1,t,"u");
      }
      else if(k.KFCM(1,t,['r'])){
        r=m=1;   // Line 31
        k.KDC(1,t);
        k.KO(-1,t,"ṛ");
      }
      else if(k.KFCM(1,t,['ṛ'])){
        r=m=1;   // Line 32
        k.KDC(1,t);
        k.KO(-1,t,"ṝ");
      }
      else if(k.KFCM(1,t,['ṝ'])){
        r=m=1;   // Line 33
        k.KDC(1,t);
        k.KO(-1,t,"r");
      }
      else if(k.KFCM(1,t,['l'])){
        r=m=1;   // Line 35
        k.KDC(1,t);
        k.KO(-1,t,"ḷ");
      }
      else if(k.KFCM(1,t,['ḷ'])){
        r=m=1;   // Line 36
        k.KDC(1,t);
        k.KO(-1,t,"ḹ");
      }
      else if(k.KFCM(1,t,['ḹ'])){
        r=m=1;   // Line 37
        k.KDC(1,t);
        k.KO(-1,t,"l");
      }
      else if(k.KFCM(1,t,['n'])){
        r=m=1;   // Line 39
        k.KDC(1,t);
        k.KO(-1,t,"ṅ");
      }
      else if(k.KFCM(1,t,['ṅ'])){
        r=m=1;   // Line 40
        k.KDC(1,t);
        k.KO(-1,t,"ñ");
      }
      else if(k.KFCM(1,t,['ñ'])){
        r=m=1;   // Line 41
        k.KDC(1,t);
        k.KO(-1,t,"ṇ");
      }
      else if(k.KFCM(1,t,['ṇ'])){
        r=m=1;   // Line 42
        k.KDC(1,t);
        k.KO(-1,t,"n");
      }
      else if(k.KFCM(1,t,['s'])){
        r=m=1;   // Line 44
        k.KDC(1,t);
        k.KO(-1,t,"ś");
      }
      else if(k.KFCM(1,t,['ś'])){
        r=m=1;   // Line 45
        k.KDC(1,t);
        k.KO(-1,t,"ṣ");
      }
      else if(k.KFCM(1,t,['ṣ'])){
        r=m=1;   // Line 46
        k.KDC(1,t);
        k.KO(-1,t,"s");
      }
      else if(k.KFCM(1,t,['t'])){
        r=m=1;   // Line 48
        k.KDC(1,t);
        k.KO(-1,t,"ṭ");
      }
      else if(k.KFCM(1,t,['ṭ'])){
        r=m=1;   // Line 49
        k.KDC(1,t);
        k.KO(-1,t,"t");
      }
      else if(k.KFCM(1,t,['d'])){
        r=m=1;   // Line 51
        k.KDC(1,t);
        k.KO(-1,t,"ḍ");
      }
      else if(k.KFCM(1,t,['ḍ'])){
        r=m=1;   // Line 52
        k.KDC(1,t);
        k.KO(-1,t,"d");
      }
      else if(k.KFCM(1,t,['m'])){
        r=m=1;   // Line 54
        k.KDC(1,t);
        k.KO(-1,t,"ṃ");
      }
      else if(k.KFCM(1,t,['ṃ'])){
        r=m=1;   // Line 55
        k.KDC(1,t);
        k.KO(-1,t,"m");
      }
      else if(k.KFCM(1,t,['h'])){
        r=m=1;   // Line 57
        k.KDC(1,t);
        k.KO(-1,t,"ḥ");
      }
      else if(k.KFCM(1,t,['ḥ'])){
        r=m=1;   // Line 58
        k.KDC(1,t);
        k.KO(-1,t,"h");
      }
      else if(k.KFCM(1,t,['A'])){
        r=m=1;   // Line 61
        k.KDC(1,t);
        k.KO(-1,t,"Ā");
      }
      else if(k.KFCM(1,t,['Ā'])){
        r=m=1;   // Line 62
        k.KDC(1,t);
        k.KO(-1,t,"A");
      }
      else if(k.KFCM(1,t,['I'])){
        r=m=1;   // Line 64
        k.KDC(1,t);
        k.KO(-1,t,"Ī");
      }
      else if(k.KFCM(1,t,['Ī'])){
        r=m=1;   // Line 65
        k.KDC(1,t);
        k.KO(-1,t,"I");
      }
      else if(k.KFCM(1,t,['U'])){
        r=m=1;   // Line 67
        k.KDC(1,t);
        k.KO(-1,t,"Ū");
      }
      else if(k.KFCM(1,t,['Ū'])){
        r=m=1;   // Line 68
        k.KDC(1,t);
        k.KO(-1,t,"U");
      }
      else if(k.KFCM(1,t,['R'])){
        r=m=1;   // Line 70
        k.KDC(1,t);
        k.KO(-1,t,"Ṛ");
      }
      else if(k.KFCM(1,t,['Ṛ'])){
        r=m=1;   // Line 71
        k.KDC(1,t);
        k.KO(-1,t,"Ṝ");
      }
      else if(k.KFCM(1,t,['Ṝ'])){
        r=m=1;   // Line 72
        k.KDC(1,t);
        k.KO(-1,t,"R");
      }
      else if(k.KFCM(1,t,['L'])){
        r=m=1;   // Line 74
        k.KDC(1,t);
        k.KO(-1,t,"Ḷ");
      }
      else if(k.KFCM(1,t,['Ḷ'])){
        r=m=1;   // Line 75
        k.KDC(1,t);
        k.KO(-1,t,"Ḹ");
      }
      else if(k.KFCM(1,t,['Ḹ'])){
        r=m=1;   // Line 76
        k.KDC(1,t);
        k.KO(-1,t,"L");
      }
      else if(k.KFCM(1,t,['N'])){
        r=m=1;   // Line 78
        k.KDC(1,t);
        k.KO(-1,t,"Ṅ");
      }
      else if(k.KFCM(1,t,['Ṅ'])){
        r=m=1;   // Line 79
        k.KDC(1,t);
        k.KO(-1,t,"Ñ");
      }
      else if(k.KFCM(1,t,['Ñ'])){
        r=m=1;   // Line 80
        k.KDC(1,t);
        k.KO(-1,t,"Ṇ");
      }
      else if(k.KFCM(1,t,['Ṇ'])){
        r=m=1;   // Line 81
        k.KDC(1,t);
        k.KO(-1,t,"N");
      }
      else if(k.KFCM(1,t,['S'])){
        r=m=1;   // Line 83
        k.KDC(1,t);
        k.KO(-1,t,"Ś");
      }
      else if(k.KFCM(1,t,['Ś'])){
        r=m=1;   // Line 84
        k.KDC(1,t);
        k.KO(-1,t,"Ṣ");
      }
      else if(k.KFCM(1,t,['Ṣ'])){
        r=m=1;   // Line 85
        k.KDC(1,t);
        k.KO(-1,t,"S");
      }
      else if(k.KFCM(1,t,['T'])){
        r=m=1;   // Line 87
        k.KDC(1,t);
        k.KO(-1,t,"Ṭ");
      }
      else if(k.KFCM(1,t,['Ṭ'])){
        r=m=1;   // Line 88
        k.KDC(1,t);
        k.KO(-1,t,"T");
      }
      else if(k.KFCM(1,t,['D'])){
        r=m=1;   // Line 90
        k.KDC(1,t);
        k.KO(-1,t,"Ḍ");
      }
      else if(k.KFCM(1,t,['Ḍ'])){
        r=m=1;   // Line 91
        k.KDC(1,t);
        k.KO(-1,t,"D");
      }
      else if(k.KFCM(1,t,['M'])){
        r=m=1;   // Line 93
        k.KDC(1,t);
        k.KO(-1,t,"Ṃ");
      }
      else if(k.KFCM(1,t,['Ṃ'])){
        r=m=1;   // Line 94
        k.KDC(1,t);
        k.KO(-1,t,"M");
      }
      else if(k.KFCM(1,t,['H'])){
        r=m=1;   // Line 96
        k.KDC(1,t);
        k.KO(-1,t,"Ḥ");
      }
      else if(k.KFCM(1,t,['Ḥ'])){
        r=m=1;   // Line 97
        k.KDC(1,t);
        k.KO(-1,t,"H");
      }
    }
    return r;
  };
}
