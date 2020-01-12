import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BrewsService {

  constructor() { }

  brewData(){
   const data:any= [
    {
      "1": 1,
      "name": "GOLDEN GRAPE ORDINARY BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 2,
      "name": "MEN'S CLUB DELUXE BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 3,
      "name": "HONEY BEE MEDIUM BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 4,
      "name": "NO.1 MC DOWELL MEDIUM BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 5,
      "name": "MCDOWELL'S VSOP BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 6,
      "name": "VSOP EXSHAW GOLD BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 600,
      "half": 300,
      "quarter": 150
    },
    {
      "1": 7,
      "name": "CAESAR PREMIUM BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 600,
      "half": 300,
      "quarter": 150
    },
    {
      "1": 8,
      "name": "LOUIS VERNANT XO BLENDED PREMIUM BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 800,
      "half": 400,
      "quarter": 200
    },
    {
      "1": 9,
      "name": "BINNIE'S DELUXE BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 10,
      "name": "CAPTON BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 11,
      "name": "JET BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 12,
      "name": "OFFICER'S CHOICE NO.1 CLASSIC BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 13,
      "name": "OLD ADMIRAL SELECT VSOP BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 14,
      "name": "DAY NIGHT BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 15,
      "name": "8 PM EXCELLENCY SUPREME BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 16,
      "name": "CLUB CLASS PREMIUM BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 17,
      "name": "McDOWELL'S ROYAL VSOP BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 18,
      "name": "SEA BREEZE BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 19,
      "name": "GOLDEN BELL ORIENTAL BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 560,
      "half": 280,
      "quarter": 140
    },
    {
      "1": 20,
      "name": "JOIE DE FRANC VSOP DELUXE BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 600,
      "half": 300,
      "quarter": 150
    },
    {
      "1": 21,
      "name": "ARISTOCRAT PREMIUM VSOP BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 600,
      "half": 300,
      "quarter": 150
    },
    {
      "1": 22,
      "name": "KYRON PREMIUM BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 800,
      "half": 400,
      "quarter": 200
    },
    {
      "1": 23,
      "name": "GOLDEN EAGLE DOCTOR ORDINARY BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 24,
      "name": "VORION NO.1 INDIAN BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 25,
      "name": "TRIPLE CROWN VSOP BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 26,
      "name": "BRIGADIER'S NO.1 BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 27,
      "name": "TI'S V.S.O.P. BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 28,
      "name": "OLD NAPOLEON VSOP DELUXE BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 29,
      "name": "TI'S COURRIER NAPOLEON BLUE LABEL\nFRENCH RESERVE BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 760,
      "half": 380,
      "quarter": 190
    },
    {
      "1": 30,
      "name": "GEO'S CLOVIS XO FRENCH GRAPE BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 840,
      "half": 420,
      "quarter": 210
    },
    {
      "1": 31,
      "name": "GRANDIS BLUE ULTRA PREMIUM BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 960,
      "half": 480,
      "quarter": 240
    },
    {
      "1": 32,
      "name": "GRAPPE RESERVA VERY SPECIAL\nPREMIUM FRENCH GRAPE BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 1480,
      "half": 740,
      "quarter": 370
    },
    {
      "1": 33,
      "name": "MONITOR ORDINARY BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 34,
      "name": "SHIVAS FINE ORDINARY BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 35,
      "name": "MONITOR DELUXE BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 36,
      "name": "CARDINAL GRAPE BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 37,
      "name": "CARDINAL NO.1 VSOP PREMIUM BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 560,
      "half": 280,
      "quarter": 140
    },
    {
      "1": 38,
      "name": "HONIEY DAY BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 39,
      "name": "SHOT OLP BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 40,
      "name": "HONIEY DAY DELUXE BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 41,
      "name": "ACCORD NO.1 BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 42,
      "name": "MH VSOP BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 43,
      "name": "ACCORD'S PREMIUM FRENCH BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 44,
      "name": "WONDERLAND SPECIAL VSOP BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 45,
      "name": "TI'S MANSION HOUSE FINEST FRENCH BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 46,
      "name": "KING NAPOLEON XO BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 560,
      "half": 280,
      "quarter": 140
    },
    {
      "1": 47,
      "name": "BLENDER'S MAGIC VSOP BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 600,
      "half": 300,
      "quarter": 150
    },
    {
      "1": 48,
      "name": "ROYAL ACCORD PRE.GOLD FRENCH BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 600,
      "half": 300,
      "quarter": 150
    },
    {
      "1": 49,
      "name": "COURRIER NAPOLEON FINEST FRENCH BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 600,
      "half": 300,
      "quarter": 150
    },
    {
      "1": 50,
      "name": "HOLANDAS SPANISH VSOP BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 760,
      "half": 380,
      "quarter": 190
    },
    {
      "1": 51,
      "name": "MISSIONARY MONKS AUTHENTIC PURE XO BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 800,
      "half": 400,
      "quarter": 200
    },
    {
      "1": 52,
      "name": "AGE DE OAK VSOP PREMIUM BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 1040,
      "half": 520,
      "quarter": 260
    },
    {
      "1": 53,
      "name": "BLACK PEARL BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 54,
      "name": "HAYWARDS PUNCH DELUXE BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 55,
      "name": "MAGNUS CHOICE VSOP BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 56,
      "name": "NO.1 MC DOWELL�S BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 57,
      "name": "COPPER BARREL VSOP BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 58,
      "name": "JOHN EX SHAW VSOP BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 59,
      "name": "RADIUM HOUSE FRENCH BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 60,
      "name": "LA MARTINE VSOP PREMIUM BRANDY",
      "type": "brandy",
      "litre": 800,
      "full": 600,
      "half": 300,
      "quarter": 150
    },
    {
      "1": 61,
      "name": "1848 PREMIUM XO BRANDY",
      "type": "brandy",
      "litre": 960,
      "full": 720,
      "half": 360,
      "quarter": 180
    },
    {
      "1": 62,
      "name": "KONIGE FUSION VSOP PREMIUM BRANDY",
      "type": "brandy",
      "litre": 1060,
      "full": 800,
      "half": 400,
      "quarter": 200
    },
    {
      "1": 63,
      "name": "DIAMOND BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 64,
      "name": "MGM NO.1 VSOP BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 65,
      "name": "SPECIAL APPOINTMENT DELUXE BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 66,
      "name": "MGM RICHMAN'S NO.1 GRAPE BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 560,
      "half": 280,
      "quarter": 140
    },
    {
      "1": 67,
      "name": "MGM GOLD VSOP PREMIUM BRANDY",
      "type": "brandy",
      "litre": 850,
      "full": 640,
      "half": 320,
      "quarter": 160
    },
    {
      "1": 68,
      "name": "CLOVIS XO FRENCH GRAPE BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 840,
      "half": 420,
      "quarter": 210
    },
    {
      "1": 69,
      "name": "MGM GOLD RESERVE FRENCH BRANDY",
      "type": "brandy",
      "litre": 1280,
      "full": 960,
      "half": 480,
      "quarter": 240
    },
    {
      "1": 70,
      "name": "HOBSONS XR PURE FRENCH GRAPE BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 1560,
      "half": 780,
      "quarter": 390
    },
    {
      "1": 71,
      "name": "MC LENE ORDINARY BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 72,
      "name": "OLD SECRET BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 73,
      "name": "ALL GOLD VSOP BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 74,
      "name": "EMPEES NAPOLEAN BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 75,
      "name": "HONEYWELL GRAPE BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 76,
      "name": "BRIHANS NAPOLEON PREMIUM BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 560,
      "half": 280,
      "quarter": 140
    },
    {
      "1": 77,
      "name": "MACMILLAN PREMIUM BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 600,
      "half": 300,
      "quarter": 150
    },
    {
      "1": 78,
      "name": "ELCANSO PREMIUM DELUXE V.S.O.P. BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 600,
      "half": 300,
      "quarter": 150
    },
    {
      "1": 79,
      "name": "CARTE ROYALE XO PREMIUM BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 640,
      "half": 320,
      "quarter": 160
    },
    {
      "1": 80,
      "name": "CHEVALIER DE PARIS XL\nPREMIUM BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 720,
      "half": 360,
      "quarter": 180
    },
    {
      "1": 81,
      "name": "TOP STAR SPECIAL BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 82,
      "name": "OLD CHEF DELUXE BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 83,
      "name": "BLACK CAT SPECIAL BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 84,
      "name": "SNJ NO.1 XO STRONG BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 85,
      "name": "ANACONDA NO.1 EXTRA VSOP\nBRANDY",
      "type": "brandy",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 86,
      "name": "BRIHAN�S SUPERIOR GRAPE\nBRANDY",
      "type": "brandy",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 87,
      "name": "12TH CENTURY PREMIUM XO\nFRENCH BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 88,
      "name": "BEJOIS NAPOLEON RESERVE\nBRANDY",
      "type": "brandy",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 89,
      "name": "BRIHAN'S SUPERIOR NAPOLEON\nBRANDY",
      "type": "brandy",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 90,
      "name": "FRENCH XO PLUS PREMIUM\nBRANDY",
      "type": "brandy",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 91,
      "name": "ROYAL PALACE PREMIUM\nBLENDED BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 600,
      "half": 300,
      "quarter": 150
    },
    {
      "1": 92,
      "name": "LE ROI XL SPECIAL RESERVA\nBRANDY",
      "type": "brandy",
      "litre": "",
      "full": 680,
      "half": 340,
      "quarter": 170
    },
    {
      "1": 93,
      "name": "KING LOUIS XIV XO FRENCH\nBRANDY",
      "type": "brandy",
      "litre": "",
      "full": 720,
      "half": 360,
      "quarter": 180
    },
    {
      "1": 94,
      "name": "MORPHEUS XO BLENDED\nPREMIUM BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 760,
      "half": 380,
      "quarter": 190
    },
    {
      "1": 95,
      "name": "BOLS XO EXCELLENCE BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 800,
      "half": 400,
      "quarter": 200
    },
    {
      "1": 96,
      "name": "BRITISH EMPIRE PREMIUM\nMATURED BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 800,
      "half": 400,
      "quarter": 200
    },
    {
      "1": 97,
      "name": "SIGNOUT PREMIUM CLASSIC\nBRANDY",
      "type": "brandy",
      "litre": "",
      "full": 1040,
      "half": 520,
      "quarter": 260
    },
    {
      "1": 98,
      "name": "MORPHEUS BLUE XO + BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 1120,
      "half": 560,
      "quarter": 280
    },
    {
      "1": 99,
      "name": "GOLDEN CHOICE DELUXE BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 100,
      "name": "SEAMEN'S PRIDE CLASSIC BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 101,
      "name": "TROPICANA VSOP BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 102,
      "name": "GOLDEN VATS NO.1 BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 103,
      "name": "ROMAN CASTLE GRAPE BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 104,
      "name": "GOLD FINGER PREMIUM BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 105,
      "name": "ROYAL NAPOLEON VSOP BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 560,
      "half": 280,
      "quarter": 140
    },
    {
      "1": 106,
      "name": "SAINT LOUIS FRENCH BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 800,
      "half": 400,
      "quarter": 200
    },
    {
      "1": 107,
      "name": "FLORENCE XO PREMIUM BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 840,
      "half": 420,
      "quarter": 210
    },
    {
      "1": 108,
      "name": "LE CHARANTE XO FRENCH BRANDY",
      "type": "brandy",
      "litre": 1490,
      "full": 1120,
      "half": 560,
      "quarter": 280
    },
    {
      "1": 109,
      "name": "IMPERIAL'S EXPRESS SPECIAL BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 110,
      "name": "BLACK MAGIC SUPERIOR BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 111,
      "name": "EMPEROR DELUXE BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 112,
      "name": "TI'S MANSION HOUSE ULTRA FRENCH BRANDY",
      "type": "brandy",
      "litre": 800,
      "full": 600,
      "half": 300,
      "quarter": 150
    },
    {
      "1": 113,
      "name": "IMPERIAL XO FRENCH PREMIUM BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 600,
      "half": 300,
      "quarter": 150
    },
    {
      "1": 114,
      "name": "MONT CASTLE FINEST GRAPE\nBRANDY",
      "type": "brandy",
      "litre": "",
      "full": 640,
      "half": 320,
      "quarter": 160
    },
    {
      "1": 115,
      "name": "COURRIER NAPOLEON ULTRA\nFRENCH BRANDY",
      "type": "brandy",
      "litre": 900,
      "full": 680,
      "half": 340,
      "quarter": 170
    },
    {
      "1": 116,
      "name": "BOOTZ AUTHENTIC DUTCH\nGRAPE BRANDY",
      "type": "brandy",
      "litre": "",
      "full": 720,
      "half": 360,
      "quarter": 180
    },
    {
      "1": 117,
      "name": "BOLS PREMIER X.O. EXCELLENCE\nBRANDY",
      "type": "brandy",
      "litre": "",
      "full": 960,
      "half": 480,
      "quarter": 240
    },
    {
      "1": 118,
      "name": "BAGPIPER MEDIUM WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 119,
      "name": "NO.1 MC DOWELL MEDIUM WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 120,
      "name": "MCDOWELL'S GREEN LABEL WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 121,
      "name": "MCDOWELL'S CENTURY WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 560,
      "half": 280,
      "quarter": 140
    },
    {
      "1": 122,
      "name": "SIGNATURE RARE PREMIUM WHISKY",
      "type": "whisky",
      "litre": 1010,
      "full": 760,
      "half": 380,
      "quarter": 190
    },
    {
      "1": 123,
      "name": "ROYAL CHALLENGE DELUXE WHISKY",
      "type": "whisky",
      "litre": 1010,
      "full": 760,
      "half": 380,
      "quarter": 190
    },
    {
      "1": 124,
      "name": "ANTIQUITY BLUE SUPER PREMIUM\nWHISKY",
      "type": "whisky",
      "litre": "",
      "full": 1120,
      "half": 560,
      "quarter": 280
    },
    {
      "1": 125,
      "name": "OFFICER'S CHOICE CLASSIC WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 126,
      "name": "8 PM SELECT BLEND OF INDIANWHISKY\n& SCOTCH",
      "type": "whisky",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 127,
      "name": "BAGPIPER GOLD RARE WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 560,
      "half": 280,
      "quarter": 140
    },
    {
      "1": 128,
      "name": "McDOWELL'S NO.1 RESERVE PRE.\nWHISKY",
      "type": "whisky",
      "litre": "",
      "full": 600,
      "half": 300,
      "quarter": 150
    },
    {
      "1": 129,
      "name": "McD. VINTAGE GOLD BLENDED MALT\nWHISKY",
      "type": "whisky",
      "litre": 850,
      "full": 640,
      "half": 320,
      "quarter": 160
    },
    {
      "1": 130,
      "name": "VORION NO.1 INDIAN CLASSIC WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 131,
      "name": "BRIGADIER'S NO.1 DELUXE WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 132,
      "name": "GOLDEN EAGLE PREMIUM WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 600,
      "half": 300,
      "quarter": 150
    },
    {
      "1": 133,
      "name": "MONITOR ORDINARY WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 134,
      "name": "MONITOR DELUXE WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 135,
      "name": "COSMOPOLITAN MEDIUM WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 136,
      "name": "CARDINAL NO.1 WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 137,
      "name": "HONIEY DAY SUPER FINE WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 138,
      "name": "ACCORD NO.1 BLENDED WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 139,
      "name": "SENATE ROYALE FINEST WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 600,
      "half": 300,
      "quarter": 150
    },
    {
      "1": 140,
      "name": "TEACHERS HIGH LAND CREAM SCOTCH WHISKY",
      "type": "whisky",
      "litre": 1940,
      "full": 1460,
      "half": 730,
      "quarter": ""
    },
    {
      "1": 141,
      "name": "TEACHERS 50 12 YRS SCOTCH WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 1970,
      "half": "",
      "quarter": ""
    },
    {
      "1": 142,
      "name": "BLACK DOG DLX. AGED 12 YRS SCOTCH WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 2080,
      "half": 1040,
      "quarter": 520
    },
    {
      "1": 143,
      "name": "PERNOD RICARD INDIA PRIVATE LTD",
      "type": "whisky",
      "litre": "",
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 144,
      "name": "100 PIPER DELUXE BLENDED SCOTCH WHISKY",
      "type": "whisky",
      "litre": 1740,
      "full": 1310,
      "half": "",
      "quarter": ""
    },
    {
      "1": 145,
      "name": "BLACK & WHITE BLENDED SCOTCH WHISKY-750",
      "type": "whisky",
      "litre": "",
      "full": 1510,
      "half": "",
      "quarter": ""
    },
    {
      "1": 146,
      "name": "DIAMOND WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 147,
      "name": "MGM INDIAN CHALLENGE PREMIUM WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 760,
      "half": 380,
      "quarter": 190
    },
    {
      "1": 148,
      "name": "CLUB ROYAL WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 149,
      "name": "BRIHANS PREMIUM WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 150,
      "name": "RED KNIGHT SELECT DELUXE WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 760,
      "half": 380,
      "quarter": 190
    },
    {
      "1": 151,
      "name": "TOP STAR SPECIAL WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 152,
      "name": "WHYTE HALL SPECIAL WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 153,
      "name": "AFTER DARK FINE GRAIN WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 840,
      "half": 420,
      "quarter": 210
    },
    {
      "1": 154,
      "name": "PETER SCOT PREMIUM MALT WHISKY",
      "type": "whisky",
      "litre": "",
      "full": 1120,
      "half": 560,
      "quarter": 280
    },
    {
      "1": 155,
      "name": "OLD KING XXXX RUM",
      "type": "rum",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 156,
      "name": "MCDOWELL CELEBRATION PREMIUM \nRUM",
      "type": "rum",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 157,
      "name": "CAPTON RUM",
      "type": "rum",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 158,
      "name": "JET SELECT XXX RUM",
      "type": "rum",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 159,
      "name": "McD. RARE OLD CASK XXX RUM",
      "type": "rum",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 160,
      "name": "ARABIAN NIGHT RESERVE PREMIUM XXX \nRUM",
      "type": "rum",
      "litre": "",
      "full": 560,
      "half": 280,
      "quarter": 140
    },
    {
      "1": 161,
      "name": "OLD MONK DELUX RUM",
      "type": "rum",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 162,
      "name": "VORION NO.1 INDIAN CLASSIC XXX RUM",
      "type": "rum",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 163,
      "name": "OLD MONK GOLD RESERVE PREMIUM \nRUM",
      "type": "rum",
      "litre": "",
      "full": 560,
      "half": 280,
      "quarter": 140
    },
    {
      "1": 164,
      "name": "SHIVAS XXX ORDINARY RUM",
      "type": "rum",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 165,
      "name": "MONITOR ORD 3D GOLD RUM",
      "type": "rum",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 166,
      "name": "OAK VAT MATURED RUM",
      "type": "rum",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 167,
      "name": "GOLD MAKER WHITE MED RUM",
      "type": "rum",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 168,
      "name": "CLASSIC GRANDEE PREMIUM RUM",
      "type": "rum",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 169,
      "name": "OLD MONSTER XXX RUM",
      "type": "rum",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 170,
      "name": "TI MADIRA XXX RUM",
      "type": "rum",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 171,
      "name": "ARABIAN PRIDE DELUXE XXX RUM",
      "type": "rum",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 172,
      "name": "CARRIBEAN KICK XXX RUM",
      "type": "rum",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 173,
      "name": "ANCIENT CASK PREMIUM XXX RUM",
      "type": "rum",
      "litre": "",
      "full": 760,
      "half": 380,
      "quarter": 190
    },
    {
      "1": 174,
      "name": "OLD KEMP XXX RUM",
      "type": "rum",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 175,
      "name": "BLACK PEARL XXX RUM",
      "type": "rum",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 176,
      "name": "COPPER BARREL DELUXE XXX RUM",
      "type": "rum",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 177,
      "name": "DIAMOND XXX RUM",
      "type": "rum",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 178,
      "name": "SAFL SUPER STAR XXX RUM",
      "type": "rum",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 179,
      "name": "MGM WHITE MEDIUM RUM",
      "type": "rum",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 180,
      "name": "MGM RICHMAN'S DELUXE XXX RUM",
      "type": "rum",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 181,
      "name": "MC LENE XXX ORDINARY RUM",
      "type": "rum",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 182,
      "name": "OLD SECRET XXX RUM",
      "type": "rum",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 183,
      "name": "KHODAYS CLASSIC XXX RUM",
      "type": "rum",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 184,
      "name": "EL CANSO DARK XXX RUM",
      "type": "rum",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 185,
      "name": "HERCULES RESERVE 3 'X' RUM",
      "type": "rum",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 186,
      "name": "OLD CHEF STRONG XXX RUM",
      "type": "rum",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 187,
      "name": "BLACK CAT SPECIAL XXX RUM",
      "type": "rum",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 188,
      "name": "TOP STAR STRONG XXX RUM",
      "type": "rum",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 189,
      "name": "LORD NELSON XXX RUM",
      "type": "rum",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 190,
      "name": "ROLE MODEL SUPERIOR DARK\nRUM",
      "type": "rum",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 191,
      "name": "BACARDI CLASSIC SUPERIOR\nRUM",
      "type": "rum",
      "litre": "",
      "full": 800,
      "half": 400,
      "quarter": 200
    },
    {
      "1": 192,
      "name": "BACARDI LIMON-ORIGINAL\nCITRUS RUM",
      "type": "rum",
      "litre": "",
      "full": 800,
      "half": 400,
      "quarter": 200
    },
    {
      "1": 193,
      "name": "BACARDI APPLE-ORIGINAL APPLE\nRUM",
      "type": "rum",
      "litre": "",
      "full": 800,
      "half": 400,
      "quarter": 200
    },
    {
      "1": 194,
      "name": "BACARDI BLACK ORIGINAL\nPREMIUM CRAFTED RUM",
      "type": "rum",
      "litre": "",
      "full": 840,
      "half": 420,
      "quarter": 210
    },
    {
      "1": 195,
      "name": "ONE MAN ARMY XXX RUM",
      "type": "rum",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 196,
      "name": "STALLION STRIDE DARK RUM",
      "type": "rum",
      "litre": "",
      "full": 520,
      "half": 260,
      "quarter": 130
    },
    {
      "1": 197,
      "name": "CRYSTAL ROMANOV VODKA",
      "type": "vodka",
      "litre": "",
      "full": 480,
      "half": 240,
      "quarter": 120
    },
    {
      "1": 198,
      "name": "MAGIC MOMENTS PREMIUM CHOCOLATE VODKA",
      "type": "vodka",
      "litre": "",
      "full": 720,
      "half": 360,
      "quarter": 180
    },
    {
      "1": 199,
      "name": "VODKA SPICE PREMIUM",
      "type": "vodka",
      "litre": "",
      "full": 760,
      "half": 380,
      "quarter": 190
    },
    {
      "1": 200,
      "name": "VODKA BLUE PREMIUM",
      "type": "vodka",
      "litre": "",
      "full": 760,
      "half": 380,
      "quarter": 190
    },
    {
      "1": 201,
      "name": "SIPPING SPIRITS RESOLUTE PINK VODKA",
      "type": "vodka",
      "litre": "",
      "full": 960,
      "half": 480,
      "quarter": 240
    },
    {
      "1": 202,
      "name": "BRISNOFF MED VODKA",
      "type": "vodka",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 203,
      "name": "ARIZONA PREMIUM APPLE VODKA",
      "type": "vodka",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 204,
      "name": "ACCORD'S FINE DISTILLED ORANGE\nVODKA",
      "type": "vodka",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 205,
      "name": "ACTIVATOR VANILLA VODKA",
      "type": "vodka",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 206,
      "name": "ERISTOFF TRIPLE DISTILLED\nPREMIUM VODKA",
      "type": "vodka",
      "litre": "",
      "full": 720,
      "half": 360,
      "quarter": 180
    },
    {
      "1": 207,
      "name": "MAGIC MOMENTS PREMIUM\nAPPLE VODKA",
      "type": "vodka",
      "litre": "",
      "full": 760,
      "half": 380,
      "quarter": 190
    },
    {
      "1": 208,
      "name": "MGM MEDIUM VODKA",
      "type": "vodka",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 209,
      "name": "MGM ORANGE MEDIUM VODKA",
      "type": "vodka",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 210,
      "name": "MGM APPLE MEDIUM VODKA",
      "type": "vodka",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 211,
      "name": "MAGIC MOMENTS PREMIUM GRAIN\nVODKA",
      "type": "vodka",
      "litre": "",
      "full": 640,
      "half": 320,
      "quarter": 160
    },
    {
      "1": 212,
      "name": "POWER APPLE VODKA",
      "type": "vodka",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 213,
      "name": "POWER ORANGE VODKA",
      "type": "vodka",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 214,
      "name": "MONITOR DRY ORDINARY GIN",
      "type": "gin",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 215,
      "name": "DIAMOND ORDINARY GIN",
      "type": "gin",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 216,
      "name": "RED SEA RUBY FORTIFIED WINE",
      "type": "wine",
      "litre": "",
      "full": 280,
      "half": 140,
      "quarter": 70
    },
    {
      "1": 217,
      "name": "MISTY GRAPES RED WINE",
      "type": "wine",
      "litre": "",
      "full": 400,
      "half": 200,
      "quarter": 100
    },
    {
      "1": 218,
      "name": "GOLCONDA RUBY PREMIUM WINE",
      "type": "wine",
      "litre": "",
      "full": 360,
      "half": 180,
      "quarter": 90
    },
    {
      "1": 219,
      "name": "GLOBUS FORTIFIED PORT WINE",
      "type": "wine",
      "litre": "",
      "full": 440,
      "half": 220,
      "quarter": 110
    },
    {
      "1": 220,
      "name": "THE WAREHOUSE RED WINE",
      "type": "wine",
      "litre": "",
      "full": 860,
      "half": 430,
      "quarter": ""
    },
    {
      "1": 221,
      "name": "KALYANI BLACK LABEL PREMIUM LAGER BEER",
      "type": "beer",
      "litre": 100,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 222,
      "name": "BULLET SUPER STRONG BEER",
      "type": "beer",
      "litre": 100,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 223,
      "name": "KING FISHER SUPERIOR STRONG BEER",
      "type": "beer",
      "litre": 120,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 224,
      "name": "KING FISHER SELECT PREMIUM BEER",
      "type": "beer",
      "litre": 120,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 225,
      "name": "MARCOPOLO SUPER STRONG BEER",
      "type": "beer",
      "litre": 90,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 226,
      "name": "SAND PIPER SUPER PRE BEER",
      "type": "beer",
      "litre": 100,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 227,
      "name": "BULLET SUPER STRONG BEER",
      "type": "beer",
      "litre": 100,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 228,
      "name": "ZINGARO MAGNUM STRONG BEER",
      "type": "beer",
      "litre": 120,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 229,
      "name": "KING FISHER SELECT PREMIUM BEER",
      "type": "beer",
      "litre": 120,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 230,
      "name": "BLACK KNIGHT SUPER STRONG BEER",
      "type": "beer",
      "litre": 90,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 231,
      "name": "VORION 6000 SUPER STRONG BEER",
      "type": "beer",
      "litre": 100,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 232,
      "name": "VORION LITE PREMIUM BEER",
      "type": "beer",
      "litre": 110,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 233,
      "name": "VORION 12000 SUPER STRONG PREMIUM BEER",
      "type": "beer",
      "litre": 120,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 234,
      "name": "BLACK KNIGHT MAXX SUPER STRONG PREMIUM BEER",
      "type": "beer",
      "litre": 120,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 235,
      "name": "SNJ 10000 SUPER STRONG BEER",
      "type": "beer",
      "litre": 110,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 236,
      "name": "HIGH VOLTAGE SUPER STRONG BEER",
      "type": "beer",
      "litre": 110,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 237,
      "name": "HAYWARDS 5000 ULTRA PREMIUM\nSTRONG BEER",
      "type": "beer",
      "litre": 110,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 238,
      "name": "SNJ 20000 SUPER STRONG BEER",
      "type": "beer",
      "litre": 120,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 239,
      "name": "BRITISH EMPIRE ULTRA PREMIUM EXCLUSIVE BEER",
      "type": "beer",
      "litre": 120,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 240,
      "name": "FOSTERS AUSTRALIAN STRONG PREMIUM BEER",
      "type": "beer",
      "litre": 140,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 241,
      "name": "BLACK PEARL SUPER STRONG BEER",
      "type": "beer",
      "litre": 110,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 242,
      "name": "KOLT PREMIUM STRONG BEER",
      "type": "beer",
      "litre": 120,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 243,
      "name": "COMMANDO SUPER STRONG BEER",
      "type": "beer",
      "litre": 110,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 244,
      "name": "MAX 11000 SUPER STRONG BEER",
      "type": "beer",
      "litre": 120,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 245,
      "name": "ICEBERG'S 9000 MEGA STRONG BEER",
      "type": "beer",
      "litre": 120,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 246,
      "name": "MAXKOOL PLATINUM PREMIUM LAGER BEER",
      "type": "beer",
      "litre": 120,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 247,
      "name": "HORSE POWER SUPER STRONG BEER",
      "type": "beer",
      "litre": 120,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 248,
      "name": "10000 VOLTS SUPER STRONG BEER",
      "type": "beer",
      "litre": 120,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 249,
      "name": "ACCORD GOLD PREMIUM LAGER BEER",
      "type": "beer",
      "litre": 120,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 250,
      "name": "ROYAL ACCORD SUPER STRONG BEER",
      "type": "beer",
      "litre": 120,
      "full": "",
      "half": "",
      "quarter": ""
    },
    {
      "1": 251,
      "name": "CARLSBERG ELEPHANT SUPREME PREMIUM BEER",
      "type": "beer",
      "litre": 140,
      "full": "",
      "half": "",
      "quarter": ""
    }
  ]

    return data
  }
}
