function Weapon(ground, helo, air, acc, stab, ap, he, rof, supp, tags, rounds, name)
{"use strict";
    this.sName = name;
    this.sRoundType = rounds;
    this.rGround = ground;
    this.rHelo = helo;
    this.rAir = air;
    this.iAccuracy = acc;
    this.iStab = stab;
    this.AP = ap;
    this.HE = he;
    this.ROF = rof;
    this.iSuppression = supp;
    this.sTags = tags;
	this.iAmmo = 0;
}

function Arm(id, ammo)
{
    MainArmory[id].iAmmo = ammo;
    return MainArmory[id];
}

function WeaponDataLoad()
{"use strict";                             //ground,helo   air,  acc,stab,ap, he,   rof,   supp, tags, rounds name
    MainArmory[  0] = new Weapon(     0,    0,     0,    0,  0,  0,   0.00, "0",    0, "", "", "NONE");
    MainArmory[  1] = new Weapon(105000,    0,     0,  910,  0,  20,  0.00, "0", 1420, "[HEAT][CLUS][CORR][STAT]", "610MM ROCKETS", "M39");
    MainArmory[  2] = new Weapon(  3150,    0,     0,   50, 50,  26,  0.00, "0S",  150, "[HEAT][SA]", "SALH missile", "9K121 VIKHR");
    MainArmory[  3] = new Weapon( 16800,    0,     0, 4550,  0,   0, 10.00, "2",  467, "[AOE][CORR][STAT][SMK]", "203MM", "M201A");
    MainArmory[  4] = new Weapon( 24850,    0,     0, 3640,  0,   0, 10.00, "2",  467, "[AOE][CORR][STAT][SMK]", "203MM", "M201A1");
    MainArmory[  5] = new Weapon( 35000,    0,     0, 7280,  0,   0,  9.00, "2",  380, "[AOE][CORR][STAT][SMK]", "175MM", "M113A1");
    MainArmory[  6] = new Weapon( 37450,    0,     0, 4550,  0,   0, 10.00, "3",  467, "[AOE][CORR][STAT][SMK]", "203MM", "2A44");
    MainArmory[  7] = new Weapon( 42000,    0,     0, 3640,  0,   0, 10.00, "3",  467, "[AOE][CORR][STAT][SMK]", "203MM", "2A44");
    MainArmory[  8] = new Weapon( 42000,    0,     0, 3640,  0,   0,  9.00, "3",  380, "[AOE][CORR][STAT][SMK]", "170MM", "M1978");
    MainArmory[  9] = new Weapon( 52500,    0,     0, 4550,  0,   8,  0.00, "3",  650, "[HEAT][CLUS][CORR][STAT]", "300MM", "9M55K");
    MainArmory[ 10] = new Weapon(  6300,    0,     0,   75,  0, 200, 10.00, "20s",    0, "[HEAT][FF][STAT][SHIP]", "Radar missiles", "P-270 MOSKIT");
    MainArmory[ 11] = new Weapon( 12250,    0,     0, 9100,  0,   0,  7.00, "4",  350, "[AOE][CORR][STAT][SMK]", "152mm", "D-1");
    MainArmory[ 12] = new Weapon( 14000,    0,     0, 9100,  0,   0,  7.00, "4",  357, "[AOE][CORR][STAT][SMK]", "155MM", "M126");
    MainArmory[ 13] = new Weapon( 18550,    0,     0, 9100,  0,   0,  7.00, "4",  350, "[AOE][CORR][STAT][SMK]", "152mm", "D-22");
    MainArmory[ 14] = new Weapon( 18900,    0,     0, 9100,  0,   0,  7.00, "4",  357, "[AOE][CORR][STAT][SMK]", "155MM", "JSW 155");
    MainArmory[ 15] = new Weapon( 21000,    0,     0, 6370,  0,   0,  7.00, "4",  357, "[AOE][CORR][STAT][SMK]", "155MM", "M185");
    MainArmory[ 16] = new Weapon( 24500,    0,     0, 3640,  0,   0,  7.00, "4",  357, "[AOE][CORR][STAT][SMK]", "155MM", "L31");
    MainArmory[ 17] = new Weapon( 24500,    0,     0, 5460,  0,   0,  7.00, "4",  357, "[AOE][CORR][STAT][SMK]", "155MM", "FH155");
    MainArmory[ 18] = new Weapon( 35000,    0,     0, 4550,  0,   0, 11.00, "4",  442, "[AOE][CORR][STAT]", "220M", "9M27F");
    MainArmory[ 19] = new Weapon( 42000,    0,     0, 4550,  0,   0, 11.00, "4",  450, "[AOE][CORR][STAT]", "227MM ROCKET", "M26");
    MainArmory[ 20] = new Weapon(  1050,  875,     0,   15,  5,   0,  0.75, "588",   90, "", "12.7MM", "NSVT");
    MainArmory[ 21] = new Weapon( 35000,    0,     0, 4550,  0,   5,  0.00, "4",  442, "[HEAT][CLUS][CORR][STAT]", "220M", "9M27F");
    MainArmory[ 22] = new Weapon( 42000,    0,     0, 4550,  0,   6,  0.00, "4",  450, "[HEAT][CLUS]", "227MM ROCKET", "M26");
    MainArmory[ 23] = new Weapon(  1050,    0,     0,   70,  0,   0,  8.00, "6",  380, "[AOE][STAT]", "165MM", "M135");
    MainArmory[ 24] = new Weapon( 11200,    0,     0, 7280,  0,   0,  5.00, "5",  242, "[AOE][CORR][STAT][SMK]", "105MM", "JSW 105");
    MainArmory[ 25] = new Weapon( 11200,    0,     0, 7280,  0,   0,  5.00, "5",  242, "[AOE][CORR][STAT][SMK]", "105MM", "M103");
    MainArmory[ 26] = new Weapon( 15050,    0,     0, 9100,  0,   0,  6.00, "5",  281, "[AOE][CORR][STAT][SMK]", "122mm", "2A18");
    MainArmory[ 27] = new Weapon( 12250,    0,     0, 4550,  0,   0,  8.00, "5",  312, "[AOE][CORR][STAT]", "240mm", "MD24-F");
    MainArmory[ 28] = new Weapon( 14700,    0,     0, 7280,  0,   0,  5.00, "5",  242, "[AOE][CORR][SMK][STAT]", "105MM", "Mk 61");
    MainArmory[ 29] = new Weapon( 15050,    0,     0, 7280,  0,   0,  6.00, "5",  281, "[AOE][CORR][STAT][SMK]", "122mm", "2A18");
    MainArmory[ 30] = new Weapon( 17500,    0,     0, 7280,  0,   0,  5.00, "5",  242, "[AOE][CORR][STAT][SMK]", "105MM", "L13A1");
    MainArmory[ 31] = new Weapon( 19250,    0,     0, 7280,  0,   0,  7.00, "5",  350, "[AOE][CORR][STAT][SMK]", "152mm", "D-22");
    MainArmory[ 32] = new Weapon( 23800,    0,     0, 7280,  0,   0,  6.00, "5",  281, "[AOE][CORR][STAT][SMK]", "122mm", "D-30");
    MainArmory[ 33] = new Weapon( 23800,    0,     0, 5460,  0,   0,  7.00, "5",  357, "[AOE][CORR][STAT][SMK]", "155MM", "GCT F1");
    MainArmory[ 34] = new Weapon( 27300,    0,     0, 6370,  0,   0,  6.00, "5",  281, "[AOE][CORR][STAT][SMK]", "130mm", "M-46");
    MainArmory[ 35] = new Weapon( 29050,    0,     0, 4550,  0,   0,  7.00, "5",  350, "[AOE][CORR][STAT][SMK]", "152mm", "2A64");
    MainArmory[ 36] = new Weapon(     0, 2625,  4200,   60,  0,   0,  9.00, "20S",  360, "[AOE][GUID][RAD]", "Radar missiles", "HQ-61A");
    MainArmory[ 37] = new Weapon(     0, 2800,  4550,   45,  0,   0,  9.00, "20S",  360, "[AOE][GUID][RAD]", "Radar missiles", "V-600P");
    MainArmory[ 38] = new Weapon(     0,    0,  5600,   70,  0,   0,  9.00, "30S",  360, "[AOE][GUID][RAD]", "Radar missiles", "MIM-104C");
    MainArmory[ 39] = new Weapon(  4900,    0,     0,   40,  0, 160,  8.00, "20s",    0, "[HEAT][FF][STAT][SHIP]", "Radar missiles", "P-15 Termit");
    MainArmory[ 40] = new Weapon(  2100,    0,     0,   35,  0,  20,  0.00, "20s",  150, "[HEAT][GUID]", "MCLOS misile", "ENTAC");
    MainArmory[ 41] = new Weapon( 33950,    0,     0, 3640,  0,   0,  7.00, "6",  357, "[AOE][CORR][STAT][SMK]", "155MM", "155mm/52");
    MainArmory[ 42] = new Weapon(     0, 2450,  3850,   40,  0,   0,  9.00, "25S",  360, "[AOE][GUID][RAD]", "Radar missiles", "3M9");
    MainArmory[ 43] = new Weapon(     0, 2450,  3850,   40,  0,   0,  9.00, "25S",  360, "[AOE][GUID][RAD]", "Radar missiles", "MIM-23A Hawk");
    MainArmory[ 44] = new Weapon(     0, 2625,  4200,   50,  0,   0,  9.00, "25S",  360, "[AOE][GUID][RAD]", "Radar missiles", "MIM-23B I-Hawk");
    MainArmory[ 45] = new Weapon(     0, 2625,  4200,   50,  0,   0,  9.00, "6S",  360, "[AOE][GUID]", "SACLOS missile", "EOTS I-Hawk");
    MainArmory[ 46] = new Weapon(     0, 3325,  4200,   55,  0,   0,  9.00, "25S",  360, "[AOE][GUID][RAD]", "Radar missiles", "MIM-23B I-Hawk PIP II");
    MainArmory[ 47] = new Weapon(     0, 2800,  4550,   65, 65,   0,  9.00, "10S",  360, "[AOE][GUID][RAD]", "Radar missiles", "3M9M3");
    MainArmory[ 48] = new Weapon(     0, 2800,  4550,   60,  0,   0,  9.00, "25S",  360, "[AOE][GUID][RAD]", "Radar missiles", "MIM-23B I-Hawk");
    MainArmory[ 49] = new Weapon(     0, 3500,  4550,   60,  0,   0,  9.00, "25S",  360, "[AOE][GUID][RAD]", "Radar missiles", "MIM-23B I-Hawk PIP III");
    MainArmory[ 50] = new Weapon(  1050,    0,     0,   20,  5,   4,  1.00, "6",   69, "[HEAT]", "60mm HEAT", "HB 60");
    MainArmory[ 51] = new Weapon(  1925,    0,     0,   30,  0,  11,  3.00, "6S",  115, "[KE][STAT][AOE]", "100MM", "D-10T");
    MainArmory[ 52] = new Weapon(  1925,    0,     0,   40, 10,  11,  3.00, "6",  133, "[KE][AOE]", "115mm", "2A20");
    MainArmory[ 53] = new Weapon(  1925,    0,     0,   30,  5,  13,  3.00, "6",  133, "[KE][AOE]", "115mm", "2A20");
    MainArmory[ 54] = new Weapon(  2100,    0,     0,   45, 15,  13,  3.00, "6",  133, "[KE][AOE]", "115mm", "2A20");
    MainArmory[ 55] = new Weapon(  2450,    0,     0,   45,  0,  14,  0.00, "10S",  150, "[HEAT][GUID]", "SACLOS missile", "Susong-Po");
    MainArmory[ 56] = new Weapon(  1925,    0,     0,   40,  0,  15,  3.00, "6",  121, "[KE][STAT][AOE]", "105MM", "L7A3");
    MainArmory[ 57] = new Weapon(  2275,    0,     0,   45, 15,  15,  3.00, "6",  133, "[KE][AOE]", "115mm", "2A20");
    MainArmory[ 58] = new Weapon(  2100,    0,     0,   35,  5,  16,  3.00, "6",  133, "[KE][AOE]", "115mm", "2A20");
    MainArmory[ 59] = new Weapon(  2275,    0,     0,   45, 15,  17,  3.00, "6",  133, "[KE][AOE]", "115mm", "2A20");
    MainArmory[ 60] = new Weapon(  2275,    0,     0,   40, 15,  18,  3.00, "6",  133, "[KE][AOE]", "115mm", "2A20");
    MainArmory[ 61] = new Weapon(  2275,    0,     0,   60,  5,  19,  3.00, "6",  138, "[KE][AOE]", "120MM", "L11A5");
    MainArmory[ 62] = new Weapon(  2800,    0,     0,   50,  0,  24,  0.00, "10S",  150, "[HEAT][GUID]", "SACLOS missile", "HJ-8A");
    MainArmory[ 63] = new Weapon(  2100,    0,     0,   50, 25,  18,  4.00, "7",  144, "[KE][AOE]", "125MM", "2A46");
    MainArmory[ 64] = new Weapon(  2800,    0,     0,   20,  5,   0,  4.00, "7",   49, "[AOE]", "85MM", "D-70");
    MainArmory[ 65] = new Weapon(  3500,    0,     0, 3640,  0,   0, 10.00, "7",  442, "[NPLM][CORR][STAT]", "220mm", "M0.1.01.04");
    MainArmory[ 66] = new Weapon(     0, 2625,  4200,   50, 50,   0,  9.00, "7",  360, "[AOE][GUID][RAD]", "Radar missiles", "9M38");
    MainArmory[ 67] = new Weapon(     0, 2800,  4550,   65, 65,   0,  9.00, "7",  360, "[AOE][GUID][RAD]", "Radar missiles", "9M38M1");
    MainArmory[ 68] = new Weapon(     0, 2800,  4550,   65,  0,   0,  9.00, "30S",  360, "[AOE][GUID][RAD]", "Radar missiles", "V-600P");
    MainArmory[ 69] = new Weapon(  1575,    0,     0,   35,  0,   7,  2.00, "7",   88, "[HEAT][STAT][AOE]", "76MM HEAT", "L5A1");
    MainArmory[ 70] = new Weapon(  1925,    0,     0,   20,  0,   7,  3.00, "7",  121, "[HEAT][STAT]", "105MM HEAT", "L28");
    MainArmory[ 71] = new Weapon(  1925,    0,     0,   25,  0,   7,  5.00, "7",  141, "[HEAT][STAT][AOE]", "122mm HEAT", "D-49");
    MainArmory[ 72] = new Weapon(  1925,    0,     0,   45,  0,   8,  3.00, "7",  104, "[KE][STAT][AOE]", "90MM", "Cockerill Mk.3");
    MainArmory[ 73] = new Weapon(  1925,    0,     0,   40,  0,   8,  3.00, "7",  104, "[HEAT][STAT][AOE]", "90MM HEAT", "F1");
    MainArmory[ 74] = new Weapon(  1925,    0,     0,   40,  0,  10,  3.00, "7",  104, "[HEAT][STAT][AOE]", "90MM HEAT", "D/925");
    MainArmory[ 75] = new Weapon(  2100,    0,     0,   30,  0,  10,  2.00, "7",   88, "[HEAT][STAT][AOE]", "76MM", "L23A1");
    MainArmory[ 76] = new Weapon(  1925,    0,     0,   45,  5,  11,  3.00, "7",  104, "[KE][AOE]", "90MM", "F4");
    MainArmory[ 77] = new Weapon(  1925,    0,     0,   30,  5,  11,  3.00, "7",  115, "[KE][STAT][AOE]", "100MM", "D-10T");
    MainArmory[ 78] = new Weapon(  1925,    0,     0,   30, 10,  11,  3.00, "7",  115, "[KE][STAT][AOE]", "100MM", "D-10T");
    MainArmory[ 79] = new Weapon(  1225,    0,     0,   45,  5,  12,  1.00, "7",  300, "[STAT]", "HEAT", "Type 56 RR");
    MainArmory[ 80] = new Weapon(  1400,    0,     0,   40,  0,  12,  2.00, "7",  328, "[HEAT][STAT][AOE]", "82MM HEAT Rocket", "TYPE 78 RR");
    MainArmory[ 81] = new Weapon(  1575,    0,     0,   30,  0,  12,  3.00, "7",  104, "[HEAT][STAT][AOE]", "90MM HEAT", "Pvpj 1110 m/77");
    MainArmory[ 82] = new Weapon(  1750,    0,     0,   20,  0,  12,  2.00, "7",   84, "[HEAT][STAT][AOE]", "73MM HEAT", "SPG-9");
    MainArmory[ 83] = new Weapon(  1750,    0,     0,   30,  0,  12,  3.00, "7",  122, "[HEAT][STAT]", "106MM HEAT rounds", "M40 RR");
    MainArmory[ 84] = new Weapon(  2100,    0,     0,   40, 10,  12,  3.00, "7",  121, "[KE][AOE]", "105MM", "PLA 105");
    MainArmory[ 85] = new Weapon(  2100,    0,     0,   45,  5,  12,  3.00, "7",  121, "[KE][AOE]", "105MM", "MECA L/48");
    MainArmory[ 86] = new Weapon(  1925,    0,     0,   50, 20,  13,  4.00, "7",  138, "[KE][AOE]", "120MM", "L11A5");
    MainArmory[ 87] = new Weapon(  1925,    0,     0,   35, 20,  13,  4.00, "7",  144, "[KE][AOE]", "125MM", "2A26");
    MainArmory[ 88] = new Weapon(  2100,    0,     0,   55,  0,  13,  3.00, "7",  104, "[KE][STAT][AOE]", "90MM", "Cockerill Mk.8");
    MainArmory[ 89] = new Weapon(  2100,    0,     0,   50, 15,  13,  3.00, "7",  115, "[KE][STAT][AOE]", "100MM", "D-10T");
    MainArmory[ 90] = new Weapon(  2100,    0,     0,   55, 15,  13,  3.00, "7",  115, "[KE][STAT][AOE]", "100MM", "D-10T");
    MainArmory[ 91] = new Weapon(  1575,    0,     0,   30,  0,  14,  3.00, "7",  104, "[HEAT][STAT][AOE]", "90MM HEAT", "Pvpj 1110 m/84");
    MainArmory[ 92] = new Weapon(  1925,    0,     0,   30,  0,  14,  3.00, "7",  138, "[HEAT][STAT]", "120MM HEAT", "L6 WOMBAT");
    MainArmory[ 93] = new Weapon(  2100,    0,     0,   60, 35,  14,  4.00, "7",  138, "[KE][AOE]", "120MM", "L11A5");
    MainArmory[ 94] = new Weapon(  2100,    0,     0,   50, 35,  14,  4.00, "7",  144, "[KE][AOE]", "125MM", "2A46");
    MainArmory[ 95] = new Weapon(  2275,    0,     0,   60, 15,  15,  3.00, "7",  115, "[KE][AOE]", "100MM", "D-10T");
    MainArmory[ 96] = new Weapon(  1400,    0,     0,   40,  0,  16,  2.00, "7",  380, "[HEAT][STAT][AOE]", "95MM HEAT ROCKET", "PW-80");
    MainArmory[ 97] = new Weapon(  2100,    0,     0,   50,  5,  16,  3.00, "7",  121, "[KE][AOE]", "105MM", "MECA L/48");
    MainArmory[ 98] = new Weapon(  2275,    0,     0,   60, 40,  16,  4.00, "7",  138, "[KE][AOE]", "120MM", "L11A5");
    MainArmory[ 99] = new Weapon(  2275,    0,     0,   60, 45,  17,  4.00, "7",  138, "[KE][AOE]", "120MM", "L11A5");
    MainArmory[100] = new Weapon(  2100,    0,     0,   40, 30,  15,  3.00, "7",  121, "[KE][AOE]", "105MM", "D-10T");
    MainArmory[101] = new Weapon(  2275,    0,     0,   40,  5,  18,  3.00, "7",  138, "[KE][AOE]", "120MM", "BWK120");
    MainArmory[102] = new Weapon(  2275,    0,     0,   60, 40,  19,  4.00, "7",  138, "[KE][AOE]", "120MM", "L11A5");
    MainArmory[103] = new Weapon(  2275,    0,     0,   65, 50,  19,  4.00, "7",  138, "[KE][AOE]", "120MM", "L11A5");
    MainArmory[104] = new Weapon(  2275,    0,     0,   55, 45,  19,  4.00, "7",  144, "[KE][AOE]", "125MM", "PLA 125");
    MainArmory[105] = new Weapon(  2275,    0,     0,   65, 50,  22,  4.00, "7",  144, "[KE][AOE]", "125MM", "PLA 125");
    MainArmory[106] = new Weapon(  7700,    0,     0, 2730,  0,   0,  5.00, "8",  276, "[AOE][CORR][STAT][SMK]", "120MM", "AMOS");
    MainArmory[107] = new Weapon( 28000,    0,     0, 4550,  0,   0,  7.00, "8",  291, "[AOE][CORR]", "130MM rockets", "K30");
    MainArmory[108] = new Weapon(     0, 2625,  2100,   30,  0,   0,  6.00, "20S",  240, "[AOE][FF][STAT]", "IR missiles", "MIM-72A");
    MainArmory[109] = new Weapon(     0, 2975,  2380,   40,  0,   0,  6.00, "20S",  240, "[AOE][FF][STAT]", "IR missiles", "MIM-72F");
    MainArmory[110] = new Weapon(     0, 3325,  2625,   50,  0,   0,  6.00, "20S",  240, "[AOE][FF][STAT]", "IR missiles", "MIM-72G");
    MainArmory[111] = new Weapon(     0, 3325,  2625,   40,  0,   0,  5.00, "20S",  200, "[AOE][FF][STAT]", "IR missiles", "Tan SAM");
    MainArmory[112] = new Weapon(  1575,    0,     0,   50,  0,   6,  2.00, "8",   88, "[KE][AOE][STAT]", "76MM", "M1A2");
    MainArmory[113] = new Weapon(  1925,    0,     0,   40,  0,   8,  3.00, "8",  104, "[KE][AOE][STAT]", "90MM", "M3");
    MainArmory[114] = new Weapon(  1925,    0,     0,   30,  5,   9,  3.00, "8",   98, "[KE][AOE]", "85MM", "D-70");
    MainArmory[115] = new Weapon(  1750,    0,     0,   40, 15,  10,  2.00, "8",   88, "[HEAT][AOE]", "76MM", "D-56T");
    MainArmory[116] = new Weapon(  1925,    0,     0,   25, 10,  10,  3.00, "8",  121, "[KE][AOE]", "105MM", "L7");
    MainArmory[117] = new Weapon(  1925,    0,     0,   40,  0,  11,  3.00, "8",   98, "[KE][STAT][AOE]", "85MM", "T62-85TC");
    MainArmory[118] = new Weapon(  1925,    0,     0,   45,  0,  11,  3.00, "10",  121, "[KE][AOE]", "105MM", "L7");
    MainArmory[119] = new Weapon(  2100,    0,     0,   30, 10,  11,  3.00, "8",  121, "[KE][AOE]", "105MM", "L7");
    MainArmory[120] = new Weapon(  2100,    0,     0,   45, 20,  13,  3.00, "8",  121, "[KE][AOE]", "105MM", "L7");
    MainArmory[121] = new Weapon(  2450,    0,     0,   40, 10,  14,  1.00, "10S",  150, "[HEAT][GUID]", "MCLOS misile", "HJ-73");
    MainArmory[122] = new Weapon(  2275,    0,     0,   50, 35,  16,  4.00, "8",  144, "[KE][AOE]", "125MM", "2A46");
    MainArmory[123] = new Weapon(  2275,    0,     0,   50, 35,  17,  3.00, "8",  121, "[KE][AOE]", "105MM", "PLA 105");
    MainArmory[124] = new Weapon(  2275,    0,     0,   60, 55,  17,  3.00, "8",  121, "[KE][AOE]", "105MM", "L7A3");
    MainArmory[125] = new Weapon(  2275,    0,     0,   50, 35,  18,  4.00, "8",  144, "[KE][AOE]", "125MM", "2A46");
    MainArmory[126] = new Weapon(  2275,    0,     0,   50, 40,  18,  4.00, "8",  144, "[KE][AOE]", "125MM", "2A46M");
    MainArmory[127] = new Weapon(   875,  595,     0,   50,  5,   0,  0.50, "315",   55, "", "7.62MM", "NF-1");
    MainArmory[128] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "MM-40Exocet");
    MainArmory[129] = new Weapon(  2625,    0,     0,   50,  0,  22,  0.00, "6s",  150, "[HEAT][GUID]", "SALH missile", "Svir");
    MainArmory[130] = new Weapon(  2275,    0,     0,   50, 40,  20,  4.00, "8",  144, "[KE][AOE]", "125MM", "2A46M");
    MainArmory[131] = new Weapon(  2275,    0,     0,   65, 50,  21,  4.00, "8",  138, "[KE][AOE]", "120MM", "L11A5");
    MainArmory[132] = new Weapon(  7700,    0,     0, 3185,  0,   0,  5.00, "9",  176, "[AOE][CORR][STAT][SMK]", "120MM", "2A51 Nona");
    MainArmory[133] = new Weapon(  7700,    0,     0, 2730,  0,   0,  5.00, "9",  276, "[AOE][CORR][STAT][SMK]", "120MM", "2A60 Nona");
    MainArmory[134] = new Weapon(  7700,    0,     0, 3640,  0,   0,  5.00, "9",  276, "[AOE][CORR][STAT][SMK]", "120MM", "PRAM vz.85");
    MainArmory[135] = new Weapon(  7700,    0,     0, 3640,  0,   0,  5.00, "9",  276, "[AOE][CORR][STAT][SMK]", "120MM", "2S11");
    MainArmory[136] = new Weapon( 17500,    0,     0, 1820,  0,   0,  7.00, "9",  285, "[AOE][CORR][STAT]", "122mm rockets", "M-210F");
    MainArmory[137] = new Weapon( 17500,    0,     0, 4550,  0,   0,  6.00, "9",  266, "[AOE][CORR][STAT]", "110mm rockets", "SF2");
    MainArmory[138] = new Weapon( 17500,    0,     0, 4550,  0,   0,  7.00, "9",  266, "[AOE][CORR][STAT]", "110mm rockets", "SF2");
    MainArmory[139] = new Weapon(     0, 2275,  1820,   50, 50,   0,  5.00, "6S",  200, "[AOE][FF]", "IR missiles", "FIM-92A STINGER");
    MainArmory[140] = new Weapon(     0, 2275,  1820,   70, 70,   0,  5.00, "6S",  200, "[AOE][FF]", "IR missiles", "FIM-92C STINGER");
    MainArmory[141] = new Weapon(     0, 2450,  1960,   55, 55,   0,  4.00, "20S",  160, "[AOE][FF]", "IR missiles", "Igla");
    MainArmory[142] = new Weapon(     0, 2450,  1960,   70, 70,   0,  5.00, "20S",  200, "[AOE][FF]", "IR missiles", "Type 91");
    MainArmory[143] = new Weapon(     0, 2625,  2100,   60, 60,   0,  5.00, "20S",  200, "[AOE][FF]", "IR missiles", "Mistral");
    MainArmory[144] = new Weapon( 17500,    0,     0, 4550,  0,   3,  0.00, "9",  285, "[HEAT][CLUS][CORR][STAT]", "122mm rockets", "9M217");
    MainArmory[145] = new Weapon(  2100,    0,     0,   40,  5,   9,  3.00, "9",  121, "[KE][AOE]", "105MM", "F1");
    MainArmory[146] = new Weapon(  2100,    0,     0,   40,  5,   9,  3.00, "9",  121, "[HEAT][AOE]", "105MM", "F1");
    MainArmory[147] = new Weapon(  1575,    0,     0,   35,  5,  12,  2.00, "9",   84, "[HEAT][AOE]", "73MM HEAT", "2A28 Grom");
    MainArmory[148] = new Weapon(  1575,    0,     0,   35,  5,  12,  2.00, "9",   84, "[HEAT][AOE]", "73MM HEAT", "2A28 GROM");
    MainArmory[149] = new Weapon(  2100,    0,     0,   60,  5,  12,  3.00, "9",  121, "[KE][AOE]", "105MM", "F1");
    MainArmory[150] = new Weapon(  2100,    0,     0,   40, 25,  13,  4.00, "9",  144, "[KE][AOE]", "125MM", "2A46");
    MainArmory[151] = new Weapon(  2100,    0,     0,   50, 35,  16,  4.00, "9",  144, "[KE][AOE]", "125MM", "2A46");
    MainArmory[152] = new Weapon(  2275,    0,     0,   60,  5,  16,  3.00, "9",  121, "[KE][AOE]", "105MM", "F1");
    MainArmory[153] = new Weapon(  2275,    0,     0,   60, 50,  16,  3.00, "9",  121, "[KE][AOE]", "105MM", "KM68A1");
    MainArmory[154] = new Weapon(  2275,    0,     0,   60, 50,  16,  3.00, "9",  138, "[KE][AOE]", "120MM", "L44");
    MainArmory[155] = new Weapon(  2275,    0,     0,   40, 30,  16,  4.00, "9",  144, "[KE][AOE]", "125MM", "2A46M");
    MainArmory[156] = new Weapon(  2275,    0,     0,   50, 35,  16,  4.00, "9",  144, "[KE][AOE]", "125MM", "2A46M");
    MainArmory[157] = new Weapon(  2275,    0,     0,   55, 45,  18,  4.00, "9",  144, "[KE][AOE]", "125MM", "2A46M");
    MainArmory[158] = new Weapon(  2275,    0,     0,   65, 30,  18,  3.00, "9",  138, "[KE][AOE]", "120MM", "CN120-25");
    MainArmory[159] = new Weapon(  2275,    0,     0,   65, 55,  18,  3.00, "9",  138, "[KE][AOE]", "120MM", "L44");
    MainArmory[160] = new Weapon(  2275,    0,     0,   50, 30,  18,  4.00, "9",  144, "[KE][AOE]", "125MM", "2A46M");
    MainArmory[161] = new Weapon(  2275,    0,     0,   55, 45,  18,  4.00, "9",  144, "[KE][AOE]", "125MM", "2A46M");
    MainArmory[162] = new Weapon(  2275,    0,     0,   50, 35,  18,  4.00, "9",  144, "[KE][AOE]", "125MM", "2A46M");
    MainArmory[163] = new Weapon(  2275,    0,     0,   65, 60,  19,  3.00, "9",  138, "[KE][AOE]", "120MM", "L44");
    MainArmory[164] = new Weapon(  2275,    0,     0,   55, 45,  19,  4.00, "9",  144, "[KE][AOE]", "125MM", "2A46M");
    MainArmory[165] = new Weapon(  2275,    0,     0,   65, 30,  19,  3.00, "9",  138, "[KE][AOE]", "120MM", "CN120-25");
    MainArmory[166] = new Weapon(  2275,    0,     0,   55, 45,  20,  4.00, "9",  144, "[KE][AOE]", "125MM", "2A46M");
    MainArmory[167] = new Weapon(  2275,    0,     0,   60, 50,  20,  4.00, "9",  155, "[KE][AOE]", "125MM", "2A46M");
    MainArmory[168] = new Weapon(  2275,    0,     0,   55, 40,  20,  4.00, "9",  144, "[KE][AOE]", "125MM", "2A46M");
    MainArmory[169] = new Weapon(  2275,    0,     0,   65, 60,  19,  3.00, "9",  138, "[KE][AOE]", "120MM", "M256");
    MainArmory[170] = new Weapon(  2275,    0,     0,   70, 65,  22,  4.00, "9",  138, "[KE][AOE]", "120MM", "L30");
    MainArmory[171] = new Weapon(  2275,    0,     0,   60, 50,  22,  4.00, "9",  144, "[KE][AOE]", "125MM", "2A46M");
    MainArmory[172] = new Weapon(  2275,    0,     0,   70, 65,  23,  3.00, "9",  138, "[KE][AOE]", "120MM", "L44");
    MainArmory[173] = new Weapon(  2275,    0,     0,   65, 55,  23,  4.00, "9",  144, "[KE][AOE]", "125MM", "2A46M");
    MainArmory[174] = new Weapon(  2275,    0,     0,   65, 50,  23,  4.00, "9",  144, "[KE][AOE]", "125MM", "2A46M");
    MainArmory[175] = new Weapon(  2450,    0,     0,   45, 25,   0,  3.00, "10",  115, "[AOE]", "100MM", "2A70");
    MainArmory[176] = new Weapon(  7700,    0,     0, 2730,  0,   0,  5.00, "10",  276, "[STAT][CORR][SMK]", "AOE", "2R2M");
    MainArmory[177] = new Weapon(     0, 2100,  1680,   30,  0,   0,  3.00, "6S",  120, "[HEAT][FF][AOE]", "IR missiles", "HN-5A");
    MainArmory[178] = new Weapon(     0, 2100,  1680,   30,  0,   0,  3.00, "6S",  120, "[AOE][FF][STAT]", "IR missiles", "Strela-2M");
    MainArmory[179] = new Weapon(     0, 2275,  1820,   50,  0,   0,  5.00, "6S",  200, "[AOE][FF][STAT]", "IR missiles", "FIM-92A STINGER");
    MainArmory[180] = new Weapon(     0, 2275,  1820,   70,  0,   0,  5.00, "6S",  200, "[AOE][FF][STAT]", "IR missiles", "FIM-92C STINGER");
    MainArmory[181] = new Weapon(     0, 2275,  1820,   50,  0,   0,  3.00, "6S",  120, "[HEAT][FF][AOE]", "IR missiles", "HN-5B");
    MainArmory[182] = new Weapon(  1050, 2800,  2625,   65, 55,   0,  1.00, "793",  140, "[AOE][RAD]", "35MM", "Twin GDF-001");
    MainArmory[183] = new Weapon(     0, 2275,  1820,   40,  0,   0,  3.00, "6S",  120, "[AOE][FF][STAT]", "IR missiles", "Strela-3");
    MainArmory[184] = new Weapon(     0, 2275,  1820,   50, 50,   0,  3.00, "6S",  120, "[AOE][FF][STAT]", "IR missiles", "Strela-3");
    MainArmory[185] = new Weapon(     0, 2450,  1960,   55,  0,   0,  4.00, "6s",  160, "[AOE][FF][STAT]", "IR missiles", "Igla");
    MainArmory[186] = new Weapon(     0, 2450,  1960,   40,  0,   0,  4.00, "6s",  160, "[AOE][FF][STAT]", "IR missiles", "Igla-1");
    MainArmory[187] = new Weapon(     0, 2625,  2100,   60,  0,   0,  4.00, "6s",  160, "[AOE][FF]", "IR missiles", "Grom");
    MainArmory[188] = new Weapon(     0, 2625,  2100,   60, 60,   0,  4.00, "10S",  160, "[AOE][FF]", "IR missiles", "Grom");
    MainArmory[189] = new Weapon(     0, 2625,  2100,   60, 60,   0,  5.00, "6S",  200, "[AOE][FF][STAT]", "IR missiles", "Mistral");
    MainArmory[190] = new Weapon(     0, 2800,  2275,   35, 35,   0,  7.00, "10S",  280, "[AOE][GUID]", "SACLOS missile", "9M33");
    MainArmory[191] = new Weapon(     0, 2800,  2275,   50, 50,   0,  5.00, "6s",  200, "[AOE][GUID]", "SACLOS missile", "Roland");
    MainArmory[192] = new Weapon(     0, 3325,  2625,   60,  0,   0,  6.00, "10",  240, "[AOE][FF]", "IR missiles", "Crotale");
    MainArmory[193] = new Weapon(     0, 2450,  3150,   65,  0,   0,  5.00, "10S",  200, "[AOE][GUID][RAD]", "Radar missiles", "Roland 2");
    MainArmory[194] = new Weapon(     0, 2800,  3500,   65, 65,   0,  6.00, "6s",  240, "[AOE][GUID][RAD]", "Radar missiles", "Roland 3");
    MainArmory[195] = new Weapon(  1925,    0,     0,   45, 35,   9,  3.00, "10",  121, "[KE][AOE]", "105MM", "L7A3");
    MainArmory[196] = new Weapon(   455,  455,     0,   15, 15,   0,  1.00, "150",   30, "", "7.62TT", "Type 49");
    MainArmory[197] = new Weapon(  2100,    0,     0,   50, 35,  10,  3.00, "10",  121, "[HEAT][AOE]", "105MM HEAT", "L7A3");
    MainArmory[198] = new Weapon(  1925,    0,     0,   55,  3,  11,  3.00, "10",  115, "[KE][AOE]", "100mm", "2A48-1");
    MainArmory[199] = new Weapon(  1925,    0,     0,   45, 35,  11,  3.00, "10",  121, "[KE][AOE]", "105MM", "L7A3");
    MainArmory[200] = new Weapon(   595,  595,     0,   40,  5,   0,  1.00, "64",   55, "", "7.62MM", "vz.52");
    MainArmory[201] = new Weapon(  1925,    0,     0,   25,  0,  12,  2.00, "10",   95, "[HEAT][STAT][AOE]", "82MM HEAT", "BZK vz.59A");
    MainArmory[202] = new Weapon(  1925,    0,     0,   45, 35,  12,  3.00, "10",  121, "[KE][AOE]", "105MM", "L7A3");
    MainArmory[203] = new Weapon(  2275,    0,     0,   60, 45,  12,  3.00, "10",  121, "[KE][AOE]", "105MM", "L7A3");
    MainArmory[204] = new Weapon(  1925,    0,     0,   35,  0,  13,  0.00, "10S",  150, "[HEAT][GUID]", "SACLOS missile", "MAT 49");
    MainArmory[205] = new Weapon(  2100,    0,     0,   45,  5,  13,  3.00, "10",  115, "[KE][AOE]", "103mm", "BS-3");
    MainArmory[206] = new Weapon(  2100,    0,     0,   50, 35,  13,  3.00, "10",  121, "[KE][AOE]", "105MM", "L7A3");
    MainArmory[207] = new Weapon(   455,    0,     0,   40,  0,  14,  0.00, "10",  292, "[HEAT][STAT]", "73MM HEAT", "LRAC 73");
    MainArmory[208] = new Weapon(   700,    0,     0,   40,  0,  14,  0.00, "10",  332, "[HEAT][STAT]", "83MM HEAT Rocket", "RPG-7");
    MainArmory[209] = new Weapon(  2450,    0,     0,   45,  0,  14,  0.00, "20s",  150, "[HEAT][GUID]", "SACLOS missile", "Susong-Po");
    MainArmory[210] = new Weapon(  1750,    0,     0,   35,  0,  15,  3.00, "10",  122, "[HEAT][STAT][AOE]", "106MM HEAT rounds", "M40A1C RR");
    MainArmory[211] = new Weapon(  2100,    0,     0,   45, 35,  15,  3.00, "10",  121, "[KE][AOE]", "105MM", "L7A3");
    MainArmory[212] = new Weapon(  2275,    0,     0,   65, 55,  16,  3.00, "10",  121, "[KE][AOE]", "105MM", "L7A3");
    MainArmory[213] = new Weapon(  2275,    0,     0,   65, 50,  16,  3.00, "10",  121, "[KE][AOE]", "105MM", "L7A3");
    MainArmory[214] = new Weapon(  2275,    0,     0,   65, 50,  16,  3.00, "10",  121, "[KE][AOE]", "105MM", "L7A3");
    MainArmory[215] = new Weapon(  2275,    0,     0,   65, 55,  17,  3.00, "10",  121, "[KE][AOE]", "105MM", "L7A3");
    MainArmory[216] = new Weapon(  2275,    0,     0,   65, 50,  17,  3.00, "10",  121, "[KE][AOE]", "105MM", "L7A3");
    MainArmory[217] = new Weapon(  2625,    0,     0,   45,  0,  17,  0.00, "10S",  150, "[HEAT][GUID]", "SACLOS missile", "Jyu-MAT");
    MainArmory[218] = new Weapon(   700,    0,     0,   60,  0,  18,  0.00, "10",  336, "[HEAT][STAT]", "84MM HEAT", "CARL GUSTAV M2");
    MainArmory[219] = new Weapon(   595,  595,     0,   60, 15,   0,  1.00, "171",   55, "", "7.62MM", "SG-542");
    MainArmory[220] = new Weapon(  1050,  525,     0,   10,  5,   0,  0.50, "652",   55, "", "7.62MM", "M60");
    MainArmory[221] = new Weapon(   525,    0,     0,   30,  0,  13,  0.00, "20",  264, "[HEAT][STAT]", "66MM HEAT Rocket", "M72 LAW");
    MainArmory[222] = new Weapon(   875,    0,     0,   60,  0,  20,  0.00, "10",  336, "[HEAT][STAT]", "84MM HEAT", "Carl Gustav M3");
    MainArmory[223] = new Weapon(  2625,    0,     0,   60,  0,  20,  0.00, "10S",  150, "[HEAT][GUID]", "SACLOS missile", "I-TOW");
    MainArmory[224] = new Weapon(  2275,    0,     0,   55,  0,  21,  3.00, "10",  138, "[KE][STAT][AOE]", "120MM", "BWK120");
    MainArmory[225] = new Weapon(  2100,    0,     0,   50, 15,  15,  3.00, "7",  115, "[KE][AOE]", "100MM", "D-10T");
    MainArmory[226] = new Weapon(  2625,    0,     0,   40, 10,  22,  1.00, "6s",  150, "[HEAT][GUID]", "SACLOS missile", "HOT 1");
    MainArmory[227] = new Weapon(  2625,    0,     0,   70,  0,  25,  0.00, "10S",  150, "[HEAT][GUID]", "SACLOS missile", "TOW 2");
    MainArmory[228] = new Weapon( 17500,    0,     0, 4550,  0,   0,  7.00, "11",  285, "[AOE][CORR][STAT]", "122mm rockets", "9M217");
    MainArmory[229] = new Weapon(     0, 2975,  2450,   50, 50,   0,  7.00, "20s",  280, "[AOE][GUID]", "SACLOS missile", "9M311");
    MainArmory[230] = new Weapon(     0, 3325,  2625,   65, 65,   0,  7.00, "20s",  280, "[AOE][GUID]", "SACLOS missile", "9M311M");
    MainArmory[231] = new Weapon(     0, 2800,  3500,   60,  0,   0,  7.00, "25S",  280, "[AOE][FF][RAD][STAT]", "Radar missiles", "AIM-120A AMRAAM");
    MainArmory[232] = new Weapon( 17500,    0,     0, 4550,  0,   3,  0.00, "11",  285, "[HEAT][CLUS][CORR][STAT]", "122mm rockets", "9M217");
    MainArmory[233] = new Weapon(   525,  525,     0,   45, 45,   0,  1.00, "533",   40, "", "7.62mm", "Type 85 SMG");
    MainArmory[234] = new Weapon(  3500,    0,     0,   25,  0,   0, 20.00, "12",  600, "[AOE]", "1000KG IRON BOMB", "FAB 1000");
    MainArmory[235] = new Weapon(  3500,    0,     0,   25,  0,   0, 30.00, "12",  600, "[AOE]", "3000kg iron bomb", "3000-2");
    MainArmory[236] = new Weapon(     0, 2100,  1680,   20,  0,   0,  4.00, "5S",  160, "[AOE][GUID]", "MCLOS misile", "BLOWPIPE");
    MainArmory[237] = new Weapon(     0, 2450,  1960,   45,  0,   0,  5.00, "5S",  200, "[AOE][GUID]", "SACLOS missile", "Javelin ");
    MainArmory[238] = new Weapon(     0, 2625,  2100,   45,  0,   0,  4.00, "5S",  160, "[AOE][GUID]", "SACLOS missile", "RBS 70");
    MainArmory[239] = new Weapon(     0, 2450,  3150,   50, 50,   0,  7.00, "12s",  280, "[AOE][GUID][RAD]", "SACLOS missile", "9M33M2");
    MainArmory[240] = new Weapon(     0, 2800,  3500,   55, 55,   0,  7.00, "12s",  280, "[AOE][GUID][RAD]", "SACLOS missile", "9M33M2");
    MainArmory[241] = new Weapon(     0, 3150,  3850,   60,  0,   0,  7.00, "30s",  280, "[AOE][GUID][RAD]", "Radar missiles", "9K330");
    MainArmory[242] = new Weapon(  1925,    0,     0,   30,  0,   8,  3.00, "12s",  104, "[HEAT][STAT][AOE]", "90MM", "BK 90/L40");
    MainArmory[243] = new Weapon(  1925,    0,     0,   50, 20,   9,  3.00, "8",   98, "[KE][AOE]", "85MM", "D44");
    MainArmory[244] = new Weapon(  1925,    0,     0,   50, 20,   9,  3.00, "8",  104, "[KE][AOE]", "85MM", "D45");
    MainArmory[245] = new Weapon(  2100,    0,     0,   50, 25,  13,  3.00, "12",  115, "[KE][AOE]", "100MM", "2A15 Norov");
    MainArmory[246] = new Weapon(  1575,    0,     0,   45,  0,  15,  0.00, "5S",  150, "[HEAT][GUID]", "SACLOS missile", "Metys");
    MainArmory[247] = new Weapon(  2625,    0,     0,   50,  0,  15,  0.00, "5S",  150, "[HEAT][GUID]", "SACLOS missile", "TOW");
    MainArmory[248] = new Weapon(  2450,    0,     0,   40, 10,  16,  1.00, "5s",  150, "[HEAT][GUID]", "SACLOS missile", "Fagot-M");
    MainArmory[249] = new Weapon(  2450,    0,     0,   45,  0,  16,  0.00, "5s",  150, "[HEAT][GUID]", "SACLOS missile", "Faktoriya");
    MainArmory[250] = new Weapon(  2450,    0,     0,   40,  0,  17,  0.00, "5S",  150, "[HEAT][GUID]", "SACLOS missile", "MILAN F1");
    MainArmory[251] = new Weapon(  2625,    0,     0,   60,  0,  20,  0.00, "10S",  150, "[HEAT][GUID]", "SACLOS missile", "I-TOW");
    MainArmory[252] = new Weapon(  2625,    0,     0,   45,  0,  20,  0.00, "5S",  150, "[HEAT][GUID]", "SACLOS missile", "Konkurs");
    MainArmory[253] = new Weapon(  2450,    0,     0,   35,  0,   0,  5.00, "7",  138, "[AOE][STAT]", "120MM", "PRAM vz.82");
    MainArmory[254] = new Weapon(  2625,    0,     0,   45,  0,  20,  0.00, "5S",  150, "[HEAT][GUID]", "SACLOS missile", "Konkurs");
    MainArmory[255] = new Weapon(  2800,    0,     0,   55,  0,  20,  0.00, "5S",  150, "[HEAT][GUID]", "SACLOS missile", "Kokon");
    MainArmory[256] = new Weapon(  2275,    0,     0,   70, 70,  22,  3.00, "12",  138, "[KE][AOE]", "120MM", "GIAT 120");
    MainArmory[257] = new Weapon(  2450,    0,     0,   60,  0,  21,  0.00, "5S",  150, "[HEAT][GUID]", "SACLOS missile", "Chu-MAT");
    MainArmory[258] = new Weapon(  2625,    0,     0,   40, 10,  22,  1.00, "6s",  150, "[HEAT][GUID]", "SACLOS missile", "HOT 1");
    MainArmory[259] = new Weapon(  2625,    0,     0,   45,  0,  22,  0.00, "10S",  150, "[HEAT][GUID]", "SACLOS missile", "SWINGFIRE");
    MainArmory[260] = new Weapon(  2625,    0,     0,   50,  0,  23,  0.00, "5S",  150, "[HEAT][GUID]", "SACLOS missile", "Konkurs-M");
    MainArmory[261] = new Weapon(  2800,    0,     0,   55, 40,  22,  0.00, "1s",  150, "[HEAT][SA]", "SACLOS missile", "Kokon-M");
    MainArmory[262] = new Weapon(  2450,    0,     0,   45,  0,  24,  0.00, "5S",  150, "[HEAT][GUID]", "SACLOS missile", "MILAN F2");
    MainArmory[263] = new Weapon(  1050,    0,     0,   60,  0,  25,  0.00, "5S",  150, "[HEAT][GUID][AOE]", "SACLOS missile", "ERYX");
    MainArmory[264] = new Weapon(  2275,    0,     0,   50,  0,  26,  0.00, "5S",  150, "[HEAT][GUID]", "SACLOS missile", "RBS 56");
    MainArmory[265] = new Weapon(  3150, 2100,  1400,   25, 25,   0,  3.00, "56",   44, "[AOE]", "76MM", "AK-176");
    MainArmory[266] = new Weapon(  1750,    0,     0,   30,  5,   8,  3.00, "13",  104, "[HEAT][AOE]", "90MM", "F3");
    MainArmory[267] = new Weapon(  1750,    0,     0,   30,  0,  15,  3.00, "13",  122, "[HEAT][STAT][STAT]", "106MM HEAT rounds", "M40A1C RR");
    MainArmory[268] = new Weapon(     0, 2275,  1820,   70, 70,   0,  5.00, "20S",  200, "[AOE][FF]", "IR missiles", "FIM-92C STINGER");
    MainArmory[269] = new Weapon(     0, 2275,  1820,   70, 70,   0,  5.00, "20S",  200, "[AOE][FF]", "IR missiles", "Type 91");
    MainArmory[270] = new Weapon(     0, 2275,  1820,   50,  0,   0,  3.00, "4S",  120, "[AOE][FF][STAT]", "IR missiles", "Strela-3");
    MainArmory[271] = new Weapon(     0, 2800,  2240,   55,  0,   0,  4.00, "8S",  160, "[AOE][GUID]", "SACLOS missile", "Twin RBS 90");
    MainArmory[272] = new Weapon(  2450,    0,     0,   40,  0,  15,  0.00, "20S",  150, "[HEAT][GUID]", "MCLOS misile", "Malyutka-P");
    MainArmory[273] = new Weapon(  7700,    0,     0,   50,  0,  80,  4.00, "20S",    0, "[HEAT][FF][STAT][SHIP]", "Radar missiles", "RGM-84 Harpoon");
    MainArmory[274] = new Weapon(   525,    0,     0,   35,  0,   0,  4.00, "15",  150, "[NPLM][STAT]", "Napalm rounds", "AG1 3x40");
    MainArmory[275] = new Weapon(  1050,  595,     0,   90,  0,   0,  1.00, "15",   55, "[STAT]", "7.62MM", "Howa DMR");
    MainArmory[276] = new Weapon(  1050,  595,     0,   95,  0,   0,  1.00, "15",   55, "[STAT]", "7.62MM", "Dragunov SVD");
    MainArmory[277] = new Weapon(     0, 2450,  1960,   40, 40,   0,  4.00, "10S",  160, "[AOE][FF]", "IR missiles", "Igla-1");
    MainArmory[278] = new Weapon(     0, 2450,  1960,   45, 45,   0,  4.00, "10S",  160, "[AOE][FF]", "IR missiles", "9M31M");
    MainArmory[279] = new Weapon(     0, 2450,  1960,   40, 40,   0,  4.00, "10S",  160, "[AOE][FF]", "IR missiles", "9M31");
    MainArmory[280] = new Weapon(   525,    0,     0,   25,  0,  12,  0.00, "10",  440, "[HEAT][STAT]", "110MM HEAT ROCKETS", "P27 Pancerovka");
    MainArmory[281] = new Weapon(     0, 2625,  2100,   60,  0,   0,  5.00, "6S",  200, "[AOE][FF][STAT]", "IR missiles", "Mistral");
    MainArmory[282] = new Weapon(     0, 2625,  2100,   50, 50,   0,  5.00, "10S",  200, "[AOE][FF]", "IR missiles", "9M37");
    MainArmory[283] = new Weapon(  1575,  595,     0,   95,  0,   1,  1.00, "15",   90, "[KE][STAT]", "12.7MM", "C15 LRSW");
    MainArmory[284] = new Weapon(  1575,    0,     0,   25,  0,   7,  2.00, "15",   88, "[KE][STAT][AOE]", "76MM", "ZIS-3");
    MainArmory[285] = new Weapon(   525,  525,     0,   30, 15,   0,  1.00, "160",   40, "", "7.62MM", "Vz.58");
    MainArmory[286] = new Weapon(   700,    0,     0,   70,  0,  18,  2.00, "15",  336, "[HEAT][STAT][AOE]", "84MM HEAT", "CARL GUSTAV M2");
    MainArmory[287] = new Weapon(   595,  595,     0,   40, 10,   0,  1.00, "120",   55, "", "7.62MM", "Gv M75");
    MainArmory[288] = new Weapon(     0, 2800,  2275,   50,  0,   0,  5.00, "20S",  200, "[AOE][GUID]", "SACLOS missile", "RAPIER");
    MainArmory[289] = new Weapon(     0, 2100,  3850,   60,  0,   0,  5.00, "20S",  200, "[AOE][GUID]", "SACLOS missile", "RAPIER");
    MainArmory[290] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "Kh-31A");
    MainArmory[291] = new Weapon(  2800, 3325,  2625,   70,  0,  25,  7.00, "20S",  150, "[HEAT][GUID][AOE]", "SALH missile", "ADATS");
    MainArmory[292] = new Weapon(  4900,    0,     0, 2730,  0,   0,  9.00, "18",  189, "[AOE][CORR][STAT][SMK]", "82mm", "M37");
    MainArmory[293] = new Weapon(  2800,    0,     0,   50,  0,  24,  0.00, "10S",  150, "[HEAT][GUID]", "SACLOS missile", "HJ-8A");
    MainArmory[294] = new Weapon(  2975,    0,     0,   70,  0,  26,  0.00, "10S",  150, "[HEAT][GUID]", "SACLOS missile", "HJ-9");
    MainArmory[295] = new Weapon(  4900,    0,     0, 2730,  0,   0,  3.00, "20",  189, "[AOE][CORR][STAT][SMK]", "82mm", "2B9 Vasilek");
    MainArmory[296] = new Weapon(  1925,    0,     0,   40, 15,   9,  3.00,  "20",   20, "[AOE][KE]", "85mm", "2A62");
    MainArmory[297] = new Weapon(   525,  525,     0,   40, 40,   0,  1.00, "533",   40, "", "5.45mm", "LADA AKSU");
    MainArmory[298] = new Weapon(   455,  455,     0,   30, 30,   0,  1.00, "342",   30, "", "9MM PB", "Skorpion");
    MainArmory[299] = new Weapon(   700,    0,     0,   45,  0,  19,  0.00, "20",  332, "[HEAT][STAT]", "83MM HEAT Rocket", "AT4");
    MainArmory[300] = new Weapon(   700,    0,     0,   60,  0,  21,  0.00, "20",  320, "[HEAT][STAT]", "80mm HEAT rocket", "PF-89");
    MainArmory[301] = new Weapon(   455,  455,     0,   30, 30,   0,  1.00, "342",   30, "", "9MM PB", "STERLING");
    MainArmory[302] = new Weapon(   700,    0,     0,   50,  0,  23,  0.00, "20",  448, "[HEAT][STAT]", "112mm HEAT rockets", "APILAS");
    MainArmory[303] = new Weapon(  2100, 1575,  2100,   40, 40,   0,  1.00, "1071",   60, "[AOE]", "30MM", "Twin DEFA 550");
    MainArmory[304] = new Weapon(  3850,    0,     0, 2275,  0,   0,  2.00, "22",  138, "[AOE][CORR][STAT][SMK]", "60mm", "HB 60");
    MainArmory[305] = new Weapon(  3500,    0,     0,   25,  0,   0, 15.00, "23",  600, "[AOE]", "500kg bombs", "FAB 500");
    MainArmory[306] = new Weapon(  3500,    0,     0,   25,  0,   0, 15.00, "23",  600, "[AOE]", "500KG IRON BOMBS", "MC/GP Mk.10");
    MainArmory[307] = new Weapon(  3500,    0,     0,   15,  0,   0, 16.00, "75",  600, "[AOE]", "400kg iron bombs", "SAMP T200");
    MainArmory[308] = new Weapon(  3500,    0,     0,   20,  0,   0, 20.00, "23",  600, "[AOE]", "1000KG IRON OMBS", "FAB 1000");
    MainArmory[309] = new Weapon(  3500,    0,     0,   30,  0,   0, 11.00, "23",  600, "[AOE]", "250kg iron bombs", "FAB 250");
    MainArmory[310] = new Weapon(  3500,    0,     0,   30,  0,   6,  0.00, "23",  300, "[HEAT][CLUS]", "500kg cluster", "RBK-500");
    MainArmory[311] = new Weapon(  3500,    0,     0,   30,  0,   6,  0.00, "23",  300, "[HEAT][CLUS]", "450KG cluster", "BL-755");
    MainArmory[312] = new Weapon(   700,    0,     0,   55,  0,  20,  0.00, "20",  290, "[HEAT][STAT]", "72mm HEAT rockets", "RPG-26");
    MainArmory[313] = new Weapon(     0,    0, 12600,   40, 40,   0,  8.00, "4S",  320, "[AOE][FF]", "Radar missiles", "AIM-54 PHOENIX");
    MainArmory[314] = new Weapon(     0,    0,  2800,   30, 30,   0,  1.00, "789",   60, "[AOE]", "30MM", "Type 23-II");
    MainArmory[315] = new Weapon(  4900,    0,     0,   60, 60,  26,  0.00, "2S",  150, "[HEAT][FF]", "AntiRadar missile", "AGM-78D STANDARD");
    MainArmory[316] = new Weapon(  1575, 1575,     0,   60, 50,   2,  1.00, "450",   69, "[KE][AOE]", "30MM", "M230");
    MainArmory[317] = new Weapon(  4550,    0,     0,   55, 55,  28,  1.00, "26",  150, "", "AntiRadar missile", "AS-37 Martel AR");
    MainArmory[318] = new Weapon(  4200,    0,     0,   50, 50,  20,  0.00, "1S",  150, "[HEAT][FF]", "AntiRadar missile", "AGM-45B SHRIKE");
    MainArmory[319] = new Weapon(  5250,    0,     0,   65, 65,  20,  0.00, "2S",  150, "[HEAT][FF][SEAD]", "AntiRadar missile", "AGM-88 HARM");
    MainArmory[320] = new Weapon( 16800,    0,     0, 7280,  0,   0,  5.00, "7",    0, "[AOE][CORR][SMK]", "105MM", "M-49");
    MainArmory[321] = new Weapon(     0, 2625,  2100,   60, 60,   0,  6.00, "2S",  240, "[AOE][FF]", "IR missiles", "TY-90");
    MainArmory[322] = new Weapon(     0, 2625,  3150,   50, 50,   0,  4.00, "2s",  160, "[AOE][FF]", "IR missiles", "R-60M Molniya");
    MainArmory[323] = new Weapon(     0, 2100,  3500,   45, 45,   0,  4.00, "2s",  160, "[AOE][FF]", "IR missiles", "R.550 Magic");
    MainArmory[324] = new Weapon(     0, 2100,  3500,   50, 50,   0,  4.00, "2s",  160, "[AOE][FF]", "IR missiles", "R-60M Molniya");
    MainArmory[325] = new Weapon(     0, 2100,  3500,   30, 30,   0,  4.00, "2s",  150, "[AOE][FF]", "IR missiles", "AAM-1");
    MainArmory[326] = new Weapon(     0, 2100,  3500,   30, 30,   0,  4.00, "2S",  160, "[AOE][FF]", "IR missiles", "AIM-9B");
    MainArmory[327] = new Weapon(     0, 2100,  3500,   35, 35,   0,  4.00, "2S",  160, "[AOE][FF]", "IR missiles", "AIM-9F");
    MainArmory[328] = new Weapon(     0, 2100,  3500,   40, 40,   0,  4.00, "2S",  160, "[AOE][FF]", "IR missiles", "AIM-9J");
    MainArmory[329] = new Weapon(     0, 2100,  3850,   50, 50,   0,  4.00, "2s",  160, "[AOE][FF]", "IR missiles", "R.550 Magic II");
    MainArmory[330] = new Weapon(     0, 2100,  3850,   50, 50,   0,  4.00, "2S",  160, "[AOE][FF]", "IR missiles", "AIM-9L");
    MainArmory[331] = new Weapon(     0, 2100,  4200,   60, 60,   0,  5.00, "2S",  200, "[AOE][FF]", "IR missiles", "R-73A Vympel");
    MainArmory[332] = new Weapon(     0,    0,  4200,   35, 35,   0,  5.00, "2s",  200, "[AOE][FF]", "IR missiles", "R-55");
    MainArmory[333] = new Weapon(     0, 2100,  4200,   50, 50,   0,  4.00, "2s",  160, "[AOE][FF]", "IR missiles", "PL-8");
    MainArmory[334] = new Weapon(     0, 2100,  4200,   60, 60,   0,  5.00, "2S",  200, "[AOE][FF]", "IR missiles", "AIM-9M");
    MainArmory[335] = new Weapon(     0,    0,  7700,   60, 60,   0,  5.00, "2S",  200, "[AOE][FF]", "Radar missiles", "AIM-120A AMRAAM");
    MainArmory[336] = new Weapon(     0,    0, 12600,   40, 40,   0,  8.00, "3s",  320, "[AOE][FF]", "Radar missiles", "R-37 Vympel");
    MainArmory[337] = new Weapon(     0,    0,  8400,   60, 60,   0,  6.00, "0S",  240, "[AOE][SA]", "SA Radar missile", "R-27R Vympel");
    MainArmory[338] = new Weapon(  3500,    0,     0,   25,  0,   0, 15.00, "23",  600, "[AOE]", "500KG IRON BOMBS", "Mk83x2");
    MainArmory[339] = new Weapon(  3500,    0,     0,   20,  0,   0, 15.00, "33",  600, "[AOE]", "500KG IRON BOMBS", "Mk83x3");
    MainArmory[340] = new Weapon(  3500,    0,     0,   20,  0,   0, 15.00, "42",  600, "[AOE]", "500KG IRON BOMBS", "Mk83x4");
    MainArmory[341] = new Weapon(  3500,    0,     0,   20,  0,   0, 15.00, "42",  600, "[AOE]", "500kg bombs", "FAB 500");
    MainArmory[342] = new Weapon(  3500,    0,     0,   25,  0,   0, 10.00, "42",  600, "[AOE]", "227KG IRON BOMB", "Mk82x4");
    MainArmory[343] = new Weapon(  3500,    0,     0,   25,  0,   0, 11.00, "42",  600, "[AOE]", "250kg iron bombs", "FAB 250");
    MainArmory[344] = new Weapon(  3500,    0,     0,   20,  0,   6,  0.00, "42",  300, "[HEAT][CLUS]", "450KG CLUSTER", "250-1");
    MainArmory[345] = new Weapon(  3500,    0,     0,   25, 25,   6,  1.00, "42",  300, "[HEAT][CLUS]", "450KG CLUSTER", "BL-755");
    MainArmory[346] = new Weapon(  3500,    0,     0,   25,  0,  10,  0.00, "42",  300, "[HEAT][CLUS]", "450KG cluster", "BK90 Mjoelner");
    MainArmory[347] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "68TR");
    MainArmory[348] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "Dual M2 Browning");
    MainArmory[349] = new Weapon(  4200,    0,     0,   55, 55,  24,  0.00, "2s",  150, "[HEAT][FF][SEAD]", "AntiRadar missile", "Kh-25MPU");
    MainArmory[350] = new Weapon(  3150,    0,     0,   40, 40,  26,  0.00, "2",  150, "[HEAT][FF]", "ELECTRO-OPTICAL MISSILE", "AGM-65B MAVERICK");
    MainArmory[351] = new Weapon(  3325,    0,     0,   50, 50,  26,  0.00, "2",  150, "[HEAT][FF]", "IR missiles", "AGM-65D MAVERICK");
    MainArmory[352] = new Weapon(  3325,    0,     0,   50, 50,  30,  0.00, "2S",  150, "[HEAT][FF]", "IR missiles", "AGM-65F MAVERICK");
    MainArmory[353] = new Weapon(  3325,    0,     0,   60, 60,  30,  1.00, "2",  150, "[HEAT][FF]", "ELECTRO-OPTICAL MISSILE", "AGM-65G MAVERICK");
    MainArmory[354] = new Weapon(  3500,    0,     0,   50, 50,  30,  0.00, "2s",  150, "[HEAT][FF]", "TV Guidance Missile", "KH-29T");
    MainArmory[355] = new Weapon(  1050,    0,     0,   30, 20,   0,  2.00, "52",  100, "[NPLM][AOE]", "Napalm rounds", "ATO-200");
    MainArmory[356] = new Weapon(  1050,    0,     0,   30,  0,   0,  2.00, "52",  100, "[NPLM][STAT]", "Napalm rounds", "M10-8");
    MainArmory[357] = new Weapon(   350,    0,     0,    0,  0,   0,  0.50, "53",   45, "[NPLM][STAT]", "Napalm rounds", "LFP 54");
    MainArmory[358] = new Weapon(   350,    0,     0,    0,  0,   0,  0.50, "53",   45, "[NPLM]", "Napalm rounds", "LPO-50");
    MainArmory[359] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "Eldspruta M/41");
    MainArmory[360] = new Weapon(  4200,    0,     0,   50, 50,  20,  0.00, "1S",  150, "[HEAT][FF]", "AntiRadar missile", "AGM-45B SHRIKE");
    MainArmory[361] = new Weapon(  1575, 1575,     0,   60, 50,   3,  1.00, "562",   69, "[KE][AOE]", "30MM", "GIAT 30");
    MainArmory[362] = new Weapon(  5250,    0,     0,   65, 65,  28,  0.00, "1s",  150, "[HEAT][FF][SEAD]", "AntiRadar missile", "Kh-58U");
    MainArmory[363] = new Weapon(  9450,    0,     0,   70, 70, 120,  6.00, "10S",    0, "[HEAT][FF][RAD][SHIP]", "Radar missiles", "P-270 MOSKIT");
    MainArmory[364] = new Weapon(  2100,    0,     0,   30, 20,   0,  2.00, "60",  157, "[AOE]", "68MM", "SNEB");
    MainArmory[365] = new Weapon(  2975,    0,     0,   50, 50,   0, 10.00, "0S",  400, "[AOE][SA]", "MCLOS misile", "Rb O5A");
    MainArmory[366] = new Weapon(  2975,    0,     0,   30, 30,   0, 10.00, "60",  150, "[HEAT][GUID]", "MCLOS misile", "AGM-12C Bullpup");
    MainArmory[367] = new Weapon(  3500,    0,     0,    0,  0,   0, 20.00, "1S",  600, "[AOE][FF]", "SALH missile", "GBU-27/B PAVEWAY III");
    MainArmory[368] = new Weapon(  3500,    0,     0,   20,  0,   0, 15.00, "60",  600, "[AOE]", "500KG IRON BOMBS", "Mk83x6");
    MainArmory[369] = new Weapon(  2800,    0,     0,   70, 50,  26,  0.00, "2s",  150, "[HEAT][SA]", "SALH missile", "AGM-114A HELLFIRE");
    MainArmory[370] = new Weapon(     0, 1750,  3150,   25, 25,   0,  5.00, "60",  200, "[AOE][FF]", "IR missiles", "AIM-4D Falcon");
    MainArmory[371] = new Weapon(     0, 2100,  3500,   35, 35,   0,  4.00, "2S",  160, "[AOE][FF]", "IR missiles", "AIM-9F");
    MainArmory[372] = new Weapon(     0, 2100,  3500,   40, 40,   0,  3.00, "1s",  120, "[AOE][FF]", "IR missiles", "R-60 Molniya");
    MainArmory[373] = new Weapon(  3150,    0,     0,   40, 40,  26,  0.00, "2S",  150, "[HEAT][FF]", "ELECTRO-OPTICAL MISSILE", "Rb 75");
    MainArmory[374] = new Weapon(  3500,    0,     0,   15,  0,   7,  0.00, "60",  300, "[HEAT][CLUS]", "450KG cluster", "BLG-66 Beluga");
    MainArmory[375] = new Weapon(  2100, 2975,  2975,   55,  0,  12,  3.00, "60",  304, "[AOE][RAD][STAT][KE]", "76MM", "OTO Melara 76");
    MainArmory[376] = new Weapon(  2450,    0,     0,   30, 20,  13,  0.00, "1s",  150, "[HEAT][SA]", "MCLOS misile", "Falanga");
    MainArmory[377] = new Weapon(  2450,    0,     0,   45, 30,  14,  0.00, "1s",  150, "[HEAT][SA]", "SACLOS missile", "Susong-Po");
    MainArmory[378] = new Weapon(  2450,    0,     0,   40, 30,  15,  0.00, "1s",  150, "[HEAT][SA]", "SACLOS missile", "Malyutka-P");
    MainArmory[379] = new Weapon(  2625,    0,     0,   50, 35,  15,  0.00, "1S",  150, "[HEAT][SA]", "SACLOS missile", "TOW");
    MainArmory[380] = new Weapon(  1225, 1225,     0,   20, 10,   0,  1.00, "1058",   60, "[AOE]", "12.7MM", "Yak-B");
    MainArmory[381] = new Weapon(  2450,    0,     0,   30, 20,  17,  0.00, "1s",  150, "[HEAT][SA]", "MCLOS misile", "SS-11");
    MainArmory[382] = new Weapon(  4200,    0,     0,   70, 70,  40,  2.00, "1s",    0, "[HEAT][FF][SHIP]", "Radar missile", "YJ-7R");
    MainArmory[383] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "kh-31a");
    MainArmory[384] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "Sea Skua");
    MainArmory[385] = new Weapon(  4550,    0,     0,   60, 60,  60,  3.00, "1s",    0, "[HEAT][FF][SHIP]", "Radar missiles", "Penguin");
    MainArmory[386] = new Weapon(  3500,    0,     0,   70, 70,  30,  0.00, "3s",  150, "[HEAT][SA]", "SALH missile", "AS30L");
    MainArmory[387] = new Weapon(  6125,    0,     0,   70, 70,  60,  3.00, "1s",    0, "[HEAT][FF][SHIP]", "Radar missiles", "AM-39 Exocet");
    MainArmory[388] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "AS.15TT");
    MainArmory[389] = new Weapon(  2625,    0,     0,   60, 45,  20,  0.00, "1S",  150, "[HEAT][SA]", "SACLOS missile", "I-TOW");
    MainArmory[390] = new Weapon(  2800,    0,     0,   55, 40,  20,  0.00, "5S",  150, "[HEAT][GUID]", "SACLOS missile", "Kokon");
    MainArmory[391] = new Weapon(  2625,    0,     0,   50, 35,  22,  0.00, "1S",  150, "[HEAT][SA]", "SACLOS missile", "HOT 1");
    MainArmory[392] = new Weapon(  2100,    0,     0,   20, 10,   0,  2.00, "88",  184, "[AOE]", "80MM ROCKETS", "S-80FP");
    MainArmory[393] = new Weapon(  2800,    0,     0,   60, 45,  24,  0.00, "1S",  150, "[HEAT][SA]", "SACLOS missile", "HJ-8A");
    MainArmory[394] = new Weapon(  2625,    0,     0,   70, 50,  25,  0.00, "1S",  150, "[HEAT][SA]", "SACLOS missile", "TOW 2");
    MainArmory[395] = new Weapon(  2625,    0,     0,   65, 50,  25,  0.00, "1s",  150, "[HEAT][SA]", "SACLOS missile", "HOT 2");
    MainArmory[396] = new Weapon(  2800,    0,     0,   70, 50,  26,  0.00, "1S",  150, "[HEAT][SA]", "SALH missile", "AGM-114A HELLFIRE");
    MainArmory[397] = new Weapon(     0, 2100,  3500,   40, 40,   0,  4.00, "2s",  160, "[AOE][FF]", "IR missiles", "R-13M");
    MainArmory[398] = new Weapon(  3150,    0,     0,   40, 40,  30,  0.00, "1S",  150, "[HEAT][SA]", "MCLOS misile", "AJ 168");
    MainArmory[399] = new Weapon(  3325,    0,     0,   50, 50,  30,  0.00, "1S",  150, "[HEAT][SA]", "SALH missile", "AGM-65E MAVERICK");
    MainArmory[400] = new Weapon(     0, 1575,  2100,   20, 20,   0,  2.00, "62",  173, "[AOE]", "75MM rocket", "Jaktraket m/57");
    MainArmory[401] = new Weapon(   595,  595,     0,   40,  5,   0,  1.00, "64",   55, "", "7.5MM", "Krag-Jorgensen");
    MainArmory[402] = new Weapon(   595,  595,     0,   40,  5,   0,  1.00, "64",   55, "", "7.62MM", "M14");
    MainArmory[403] = new Weapon(  2100,    0,     0,   30, 30,   0,  2.00, "67",  161, "[AOE]", "70MM ROCKETS", "M151 CRV7");
    MainArmory[404] = new Weapon(  2100,    0,     0,   15,  5,   0,  2.00, "61",  161, "[AOE]", "70MM ROCKETS", "FFAR");
    MainArmory[405] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "0S",    0, "0", "0", "Bofors L/60");
    MainArmory[406] = new Weapon(   455,    0,     0,   60,  0,   0,  1.00, "72",   90, "[AOE][STAT]", "40MM FRAG", "Pallad-M");
    MainArmory[407] = new Weapon(   595,  595,     0,   30,  5,   0,  1.00, "75",   55, "", "7.62MM", "H&K G3");
    MainArmory[408] = new Weapon(   595,  595,     0,   30,  5,   0,  1.00, "75",   55, "", "7.62MM", "L1A1 SLR");
    MainArmory[409] = new Weapon(  3500,    0,     0,   15,  0,   0, 15.00, "75",  600, "[AOE]", "500kg bombs", "FAB 500");
    MainArmory[410] = new Weapon(  3500,    0,     0,    0,  0,   0, 15.00, "1s",  600, "[AOE][FF]", "SALH missile", "LT-2");
    MainArmory[411] = new Weapon(  3500,    0,     0,   15,  0,   0, 20.00, "42",  600, "[AOE]", "1000KG ITON OMBS", "Mk84");
    MainArmory[412] = new Weapon(  3500,    0,     0,   20,  0,   0, 11.00, "75",  600, "[AOE]", "250kg iron bombs", "FAB 250");
    MainArmory[413] = new Weapon(  3500,    0,     0,   15,  0,   6,  0.00, "75",  300, "[HEAT][CLUS]", "500kg cluster", "RBK-500");
    MainArmory[414] = new Weapon(  4900,    0,     0,   60, 60,  60,  3.00, "1s",    0, "[HEAT][FF][SHIP]", "Radar missiles", "C-802");
    MainArmory[415] = new Weapon(  5600,    0,     0,   65, 65,  80,  4.00, "1s",    0, "[HEAT][FF][SHIP]", "Radar missiles", "AGM-84 Harpoon");
    MainArmory[416] = new Weapon(  4200,    0,     0,   60, 60,  80,  4.00, "1s",    0, "[HEAT][FF][SHIP]", "Radar missiles", "AS>34 Kormoran");
    MainArmory[417] = new Weapon(     0, 1575,  2100,   20, 20,   0,  2.00, "88",  132, "[AOE]", "57mm rocket", "ARS-57");
    MainArmory[418] = new Weapon(  1750, 1575,     0,   25,  0,   2,  1.00, "94",   69, "[KE][STAT][AOE]", "30MM", "L21A1 RARDEN");
    MainArmory[419] = new Weapon(  1750, 1575,     0,   40,  0,   3,  1.00, "94",   69, "[KE][STAT][AOE]", "30MM", "L21A1 RARDEN");
    MainArmory[420] = new Weapon(  1225,  525,     0,   15,  5,   0,  1.00, "97",   80, "[AOE]", "40MM FRAG", "K4");
    MainArmory[421] = new Weapon(  3500,    0,     0,   40,  0,   0, 10.00, "23",  600, "[AOE]", "227KG IRON BOMB", "Mk82 Snakeyex2");
    MainArmory[422] = new Weapon(  3500,    0,     0,   15,  0,   0, 12.00, "100",  600, "[AOE]", "340KG IRON BOMB", "M117");
    MainArmory[423] = new Weapon(  3500,    0,     0,   10,  0,   6,  0.00, "100",  300, "[HEAT][CLUS]", "245KG CLUSTER BOMB", "MK 20 ROCKEYE II");
    MainArmory[424] = new Weapon(  3500,    0,     0,   10,  0,   0, 15.00, "110",  600, "[AOE]", "500kg bombs", "FAB 500");
    MainArmory[425] = new Weapon(   595,  595,     0,   40, 10,   0,  1.00, "120",   55, "", "7.62MM", "AG-3");
    MainArmory[426] = new Weapon(   595,  595,     0,   40, 10,   0,  1.00, "120",   55, "", "7.62MM", "C1A1 SLR");
    MainArmory[427] = new Weapon(   595,  595,     0,   40, 10,   0,  1.00, "120",   55, "", "7.62MM", "AK4");
    MainArmory[428] = new Weapon(   595,  595,     0,   40, 10,   0,  1.00, "120",   55, "", "7.62MM", "Gv M75");
    MainArmory[429] = new Weapon(   595,  595,     0,   40, 10,   0,  1.00, "120",   55, "", "7.62MM", "H&K G3A2");
    MainArmory[430] = new Weapon(  1400,    0,     0,   40,  0,  13,  2.00, "7",  360, "[HEAT][STAT]", "90MM HEAT", "M67 RR");
    MainArmory[431] = new Weapon(   595,  595,     0,   40, 10,   0,  1.00, "75",   55, "", "7.62MM", "L1A1 SLR");
    MainArmory[432] = new Weapon(  2100,    0,     0,   15,  5,   0,  1.00, "120",  132, "[AOE]", "57mm rocket", "S-5M");
    MainArmory[433] = new Weapon(   525,  525,     0,   23, 10,   0,  1.00, "128",   40, "", "7.62MM", "Mpi-K");
    MainArmory[434] = new Weapon(   525,    0,     0,   30,  0,  10,  0.00, "10",  328, "[HEAT][STAT]", "82MM HEAT Rocket", "TYPE 56");
    MainArmory[435] = new Weapon(  3500,    0,     0,   25,  0,   0, 10.00, "153",  600, "[AOE]", "227KG IRON BOMB", "Mk82x18");
    MainArmory[436] = new Weapon(  2100, 1575,  2800,   40, 40,   0,  1.00, "130",   60, "[AOE]", "30mm", "GIAT 30/719B");
    MainArmory[437] = new Weapon(  1575, 1575,     0,   20, 10,   2,  1.00, "1153",   46, "[KE][AOE]", "20MM", "M197 VULCAN");
    MainArmory[438] = new Weapon(  2100,    0,     0,   30, 20,   0,  2.00, "132",  157, "[AOE]", "68MM", "SNEB");
    MainArmory[439] = new Weapon(  2100,    0,     0,   20, 10,   0,  2.00, "136",  184, "[AOE]", "80MM ROCKETS", "S-80FP");
    MainArmory[440] = new Weapon(  1225,  525,     0,   15, 10,   0,  1.00, "137",   80, "[AOE]", "40MM FRAG", "Mk19");
    MainArmory[441] = new Weapon(   525,  525,     0,   45, 23,   0,  1.00, "232",   40, "", "7.62MM", "Vz.58");
    MainArmory[442] = new Weapon(  1225,  525,     0,   15, 10,   0,  1.00, "142",   70, "[AOE]", "30mm FRAG", "AGS-17");
    MainArmory[443] = new Weapon(   455,  455,     0,   15, 15,   0,  1.00, "150",   30, "", "9MM PB", "Hovea M/49");
    MainArmory[444] = new Weapon(  2100,    0,     0,   10,  5,   0,  2.00, "149",  161, "[AOE]", "70MM ROCKETS", "FFAR");
    MainArmory[445] = new Weapon(   525,  525,     0,   30, 15,   0,  1.00, "160",   40, "", "7.62MM", "kbk AKM");
    MainArmory[446] = new Weapon(   525,  525,     0,   30, 15,   0,  1.00, "160",   40, "", "5.45mm", "AK-74");
    MainArmory[447] = new Weapon(   525,  525,     0,   30, 15,   0,  1.00, "216",   40, "", "5.56MM", "F88 Austeyr");
    MainArmory[448] = new Weapon(   525,  525,     0,   30, 15,   0,  1.00, "160",   40, "", "5.56MM", "C7");
    MainArmory[449] = new Weapon(   525,  525,     0,   30, 15,   0,  1.00, "232",   40, "", "5.56MM", "FAMAS");
    MainArmory[450] = new Weapon(     0, 2450,  1960,   70,  0,   0,  5.00, "6S",  200, "[AOE][FF][STAT]", "IR missiles", "Type 91");
    MainArmory[451] = new Weapon(   525,  525,     0,   30, 15,   0,  1.00, "160",   40, "", "5.56MM", "K2");
    MainArmory[452] = new Weapon(   525,  525,     0,   30, 15,   0,  1.00, "160",   40, "", "5.56MM", "L85");
    MainArmory[453] = new Weapon(   525,  525,     0,   30, 15,   0,  1.00, "160",   40, "", "5.56MM", "M16");
    MainArmory[454] = new Weapon(   525,  525,     0,   30, 15,   0,  1.00, "160",   40, "", "7.62MM", "Mpi-KM");
    MainArmory[455] = new Weapon(   525,  525,     0,   30, 15,   0,  1.00, "160",   40, "", "7.62MM", "TQBZ-56");
    MainArmory[456] = new Weapon(   525,  525,     0,   30, 15,   0,  1.00, "160",   40, "", "7.62MM", "Type 68");
    MainArmory[457] = new Weapon(   525,  525,     0,   30, 15,   0,  1.00, "160",   40, "", "7.62MM", "QBZ-81");
    MainArmory[458] = new Weapon(  3500,    0,     0,    5,  0,   0, 11.00, "166",  600, "[AOE]", "250kg iron bombs", "FAB 250");
    MainArmory[459] = new Weapon(   595,  595,     0,   60, 15,   0,  1.00, "120",   55, "", "7.62MM", "AG-3");
    MainArmory[460] = new Weapon(   595,  595,     0,   60, 15,   0,  1.00, "120",   55, "", "7.62MM", "C1A1 SLR");
    MainArmory[461] = new Weapon(   595,  595,     0,   60, 15,   0,  1.00, "171",   55, "", "7.62MM", "H&K G3A2");
    MainArmory[462] = new Weapon(   595,  595,     0,   60, 15,   0,  1.00, "75",    55, "", "7.62MM", "L1A1 SLR");
    MainArmory[463] = new Weapon(   595,  595,     0,   40, 10,   0,  1.00, "120",   55, "", "7.62MM", "AK4");
    MainArmory[464] = new Weapon(  1575, 1575,  1400,   15,  0,   0,  2.00, "171",  228, "[AOE][STAT]", "57mm", "S-68A");
    MainArmory[465] = new Weapon(  1050, 2800,  1750,   15,  0,   0,  2.00, "171",  228, "[AOE][STAT]", "57mm", "T69");
    MainArmory[466] = new Weapon(  1750,  525,     0,   15,  5,   0,  1.00, "172",   80, "[AOE]", "40MM FRAG", "Twin Mk19");
    MainArmory[467] = new Weapon(  3500,    0,     0,   10,  0,   0,  0.00, "60",   150, "[NPLM]", "340KG BOMB", "“Bidons speciaoux”");
    MainArmory[468] = new Weapon(  1750, 1575,     0,   50, 25,   2,  1.00, "204",   58, "[KE][AOE]", "25MM", "BUSHMASTER");
    MainArmory[469] = new Weapon(  1750, 1575,     0,   60, 30,   3,  1.00, "204",   58, "[KE][AOE]", "25MM", "BUSHMASTER");
    MainArmory[470] = new Weapon(  1925, 1575,     0,   70, 40,   5,  1.00, "204",   92, "[KE][AOE]", "45MM", "COMVAT");
    MainArmory[471] = new Weapon(  1925, 1575,     0,   70, 50,   6,  1.50, "204",   92, "[KE][AOE]", "50mm", "Rh-503");
    MainArmory[472] = new Weapon(  1400, 1400,     0,   15,  5,   0,  1.00, "225",  148, "[AOE]", "37mm", "T63");
    MainArmory[473] = new Weapon(   525,  525,     0,   45, 23,   0,  1.00, "232",   40, "", "7.62MM", "KBK AKM");
    MainArmory[474] = new Weapon(   525,  525,     0,   45, 23,   0,  1.00, "232",   40, "", "7.62MM", "Mpi-KM");
    MainArmory[475] = new Weapon(  2800, 1575,  1575,   30, 30,   4,  1.00, "789",   69, "[AOE]", "30mm", "Gsh-2-30");
    MainArmory[476] = new Weapon(   525,  525,     0,   45, 23,   0,  1.00, "160",   40, "", "5.45mm", "AK-74");
    MainArmory[477] = new Weapon(   525,  525,     0,   45, 23,   0,  1.00, "232",   40, "", "5.56MM", "C7");
    MainArmory[478] = new Weapon(   525,  525,     0,   45, 23,   0,  1.00, "232",   40, "", "5.56MM", "CAR-15");
    MainArmory[479] = new Weapon(   525,  525,     0,   45, 23,   0,  1.00, "160",   40, "", "5.56MM", "K2");
    MainArmory[480] = new Weapon(   525,  525,     0,   45, 23,   0,  1.00, "232",   40, "", "5.56MM", "L85");
    MainArmory[481] = new Weapon(   525,  525,     0,   60, 30,   0,  1.00, "355",   40, "", "5.56MM", "M16");
    MainArmory[482] = new Weapon(   525,  525,     0,   45, 23,   0,  1.00, "232",   40, "", "7.62MM", "QBZ-56-I");
    MainArmory[483] = new Weapon(   525,  525,     0,   45, 23,   0,  1.00, "232",   40, "", "7.62MM", "Vz.58");
    MainArmory[484] = new Weapon(   525,  525,     0,   45, 23,   0,  1.00, "232",   40, "", "", "kbk Tantal");
    MainArmory[485] = new Weapon(   455,  455,     0,   20, 20,   0,  1.00, "240",   30, "", "9MM PB", "C1 SMG");
    MainArmory[486] = new Weapon(   455,  455,     0,   20, 20,   0,  1.00, "240",   30, "", "9MM PB", "Kpist m/45B");
    MainArmory[487] = new Weapon(   455,  455,     0,   20, 20,   0,  1.00, "240",   30, "", "9MM PB", "MAT 49");
    MainArmory[488] = new Weapon(  2100, 2450,  2800,   10,  5,   0,  1.00, "240",    2, "[AOE]", "37mm", "Dual Type 61");
    MainArmory[489] = new Weapon(   980,  595,     0,   70, 35,   0,  0.50, "243",   55, "[CQC]", "7.7MM", "Bren L4");
    MainArmory[490] = new Weapon(   595,  595,     0,   40,  5,   0,  1.00,  "64",   55, "", "7.5MM", "Mauser m/96");
    MainArmory[491] = new Weapon(   875,  595,     0,   50, 30,   0,  0.50, "249",   55, "[CQC]", "7.62MM", "C2A1");
    MainArmory[492] = new Weapon(   595,  595,     0,   80, 20,   0,  1.00, "266",   55, "", "7.62MM", "AK4");
    MainArmory[493] = new Weapon(   595,  595,     0,   80, 20,   0,  1.00, "266",   55, "", "7.62MM", "AG-3");
    MainArmory[494] = new Weapon(  2100, 1575,  2800,   40, 40,   0,  1.00, "267",   60, "[AOE]", "30MM", "Gsh-301");
    MainArmory[495] = new Weapon(  2275,    0,     0,   55, 45,  23,  4.00,   "8",  144, "[KE][AOE]", "125MM", "2A46M");
    MainArmory[496] = new Weapon(   875,  595,     0,   50, 25,   0,  0.50, "272",   55, "[CQC]", "7.62MM", "62L Shiki");
    MainArmory[497] = new Weapon(   875,  595,     0,   40,  0,   0,  0.50, "272",   55, "[STAT]", "7.62MM", "62 Shiki");
    MainArmory[498] = new Weapon(   455,  455,     0,   40, 40,   0,  1.00, "533",   30, "", "9MM PB", "MP5SD");
    MainArmory[499] = new Weapon(  1400, 1400,  1225,   10,  5,   0,  1.50, "281",  160, "[AOE][STAT]", "40mm", "M2A1");
    MainArmory[500] = new Weapon(  1050, 2450,  1750,   10,  0,   0,  1.50, "281",  160, "[AOE][STAT]", "40MM", "Twin Ivakan m/36");
    MainArmory[501] = new Weapon(  1050, 2450,  1750,   10,  0,   0,  1.50, "281",  160, "[AOE][STAT]", "40mm", "M2A1");
    MainArmory[502] = new Weapon(  1975, 1575,     0,   60, 35,   4,  1.00, "281",   92, "[KE][AOE][AOE]", "40MM", "Bofors L/70");
    MainArmory[503] = new Weapon(  1925,    0,     0,   25,  5,  14,  1.00,   "7",  138, "[HEAT][STAT]", "120MM HEAT", "2A60 Nona");
    MainArmory[504] = new Weapon(  2450,    0,     0,   30, 30,   0,  4.00, "300",  293, "[AOE]", "127MM ROCKETS", "Mk.24 Zuni");
    MainArmory[505] = new Weapon(  2450,    0,     0,   30, 30,   0,  4.00, "300",  293, "[AOE]", "130MM rockets", "130-1");
    MainArmory[506] = new Weapon(  2625, 2800,  2800,   25, 25,   0,  1.00, "300",    2, "[AOE][RAD][DEF]", "37mm", "Dual Type 76F");
    MainArmory[507] = new Weapon(     0,    0,  5600,   40, 40,   0,  5.00,  "0S",  200, "[AOE][SA]", "SA Radar missile", "R.530");
    MainArmory[508] = new Weapon(     0,    0,  7000,   40, 40,   0,  5.00,  "0S",  200, "[AOE][SA]", "SA Radar missile", "PL-11");
    MainArmory[509] = new Weapon(     0,    0,  5600,   40, 40,   0,  8.00,  "2s",  320, "[AOE][FF]", "IR missiles", "R-40T Vympel");
    MainArmory[510] = new Weapon(     0,    0,   700,   35, 35,   0,  5.00,  "0S",  200, "[AOE][SA]", "SA Radar missile", "AIM-7E SPARROW");
    MainArmory[511] = new Weapon(     0,    0,  7700,   40, 40,   0,  6.00,  "0S",  240, "[AOE][SA]", "SA Radar missile", "AIM-7F SPARROW");
    MainArmory[512] = new Weapon(  2100, 1575,  2800,   30, 30,   0,  1.00, "4028",   92, "[AOE]", "20MM", "M61A1 Vulcan");
    MainArmory[513] = new Weapon(   700,    0,     0,   60,  0,  19,  0.00,  "10",  336, "[HEAT][STAT]", "84MM HEAT", "LRAC F1");
    MainArmory[514] = new Weapon(   980,  595,     0,   30,  0,   0,  0.50, "320",   55, "[STAT]", "7.62MM", "UK vz.59");
    MainArmory[515] = new Weapon(   525,  525,     0,   45, 23,   0,  1.00, "232",   40, "", "5.56MM", "M16");
    MainArmory[516] = new Weapon(   770,  595,     0,   40, 20,   0,  0.50, "326",   55, "[CQC]", "7.62MM", "RPD");
    MainArmory[517] = new Weapon(  2100, 1575,  2275,   30, 30,   0,  1.00, "326",   60, "[AOE]", "30MM", "ADEN 30");
    MainArmory[518] = new Weapon(   875,  595,     0,   50,  0,   0,  0.50, "340",   55, "[STAT]", "", "C6");
    MainArmory[519] = new Weapon(   875,  595,     0,   40,  5,   0,  0.50, "340",   45, "", "6.5MM", "Ksp m/58");
    MainArmory[520] = new Weapon(   700,    0,     0,   50,  0,  23,  0.00, "10",  320, "[HEAT][STAT]", "80mm HEAT rocket", "TYPE 69-III");
    MainArmory[521] = new Weapon(  2100, 1575,  2800,   40, 40,   0,  1.00, "4028",   92, "[AOE]", "20MM", "M61A1 Vulcan");
    MainArmory[522] = new Weapon(  1400, 1400,     0,   15,  5,   1,  1.00, "342",   40, "[KE]", "14.5mm", "KPVT");
    MainArmory[523] = new Weapon(  1050, 2800,  2625,   45,  0,   0,  1.00, "348",  148, "[AOE][RAD][STAT]", "37mm", "PLA 37-2");
    MainArmory[524] = new Weapon(   525,  525,     0,   60, 30,   0,  1.00, "355",   40, "", "7.62MM", "AKM");
    MainArmory[525] = new Weapon(   525,  525,     0,   60, 30,   0,  1.00, "355",   40, "", "5.45mm", "Mpi-AK-74N");
    MainArmory[526] = new Weapon(   525,  525,     0,   60, 30,   0,  1.00, "533",   40, "", "5.56MM", "AUG Para");
    MainArmory[527] = new Weapon(   525,  525,     0,   60, 30,   0,  1.00, "355",   40, "", "5.56MM", "Carbine M727");
    MainArmory[528] = new Weapon(   525,  525,     0,   60, 30,   0,  1.00, "355",   40, "", "5.56MM", "L85");
    MainArmory[529] = new Weapon(   525,  525,     0,   60, 30,   0,  1.00, "355",   40, "", "7.62MM", "AK5");
    MainArmory[530] = new Weapon(   875,  595,     0,   50, 30,   0,  0.50, "461",   55, "[CQC]", "7.62MM", "I.MG3");
    MainArmory[531] = new Weapon(   595,  595,     0,   60, 30,   0,  1.00, "355",   55, "", "7.62MM", "H&K G3KA4");
    MainArmory[532] = new Weapon(  1750, 1575,     0,   40, 30,   3,  1.00, "375",   69, "[KE][AOE]", "30mm", "2A72");
    MainArmory[533] = new Weapon(  1750, 1575,     0,   60, 30,   4,  1.00, "375",   69, "[KE][AOE]", "30m", "Bushmaster II");
    MainArmory[534] = new Weapon(  1925, 2800,  2625,   60, 35,   3,  1.50, "391",  160, "[KE][AOE][RAD]", "40MM", "L70B");
    MainArmory[535] = new Weapon(   595,  595,     0,   60, 15,   0,  1.00, "120",   55, "", "7.62MM", "Gv M75");
    MainArmory[536] = new Weapon(  1575, 2450,  1750,   20,  5,   0,  1.00, "400",   40, "[AOE]", "20MM", "Oerlikon 20");
    MainArmory[537] = new Weapon(   875,  595,     0,   50,  5,   0,  0.50, "340",   55, "", "7.62MM", "FN MAG");
    MainArmory[538] = new Weapon(  5250,    0,     0,   50, 50, 160,  8.00, "10S",    0, "[HEAT][FF][RAD][SHIP]", "Radar missiles", "P-15 Termit");
    MainArmory[539] = new Weapon(   455,  455,     0,   30, 30,   0,  1.00, "342",   30, "", "9MM PB", "vz.25");
    MainArmory[540] = new Weapon(   525,  525,     0,   55, 25,   0,  1.00, "232",   40, "", "5.45mm", "STG 941");
    MainArmory[541] = new Weapon(  2100, 1575,  1750,   20, 20,   0,  1.00, "857",   46, "[AOE]", "23MM", "NR-23");
    MainArmory[542] = new Weapon(  1575, 1575,     0,   15,  5,   2,  1.00, "450",   46, "[KE][AOE]", "20MM", "Akan m/47D");
    MainArmory[543] = new Weapon(  1575, 1575,     0,   15,  5,   2,  1.00, "450",   53, "[KE][AOE]", "23MM", "AZP-23");
    MainArmory[544] = new Weapon(  1575, 1575,     0,   15,  5,   2,  1.00, "450",   53, "[KE][AOE]", "23MM", "NS-23");
    MainArmory[545] = new Weapon(  1750, 1575,     0,   25, 10,   2,  1.00, "450",   58, "[KE][AOE]", "25MM", "ZPT 90");
    MainArmory[546] = new Weapon(  1050, 2800,  2625,   40,  0,   0,  1.50, "451",  160, "[AOE][RAD]", "40MM", "Twin Ivakan m/48");
    MainArmory[547] = new Weapon(   455,  455,     0,   40, 40,   0,  1.00, "533",   30, "", "9MM PB", "MP2A1");
    MainArmory[548] = new Weapon(  1050, 2450,  1750,   10,  0,   0,  1.00, "472",   92, "[AOE][STAT]", "23MM", "ZU-23-2");
    MainArmory[549] = new Weapon(  1400, 1750,     0,   10,  5,   1,  1.00, "510",  110, "[KE]", "14.5mm", "ZPTU-2");
    MainArmory[550] = new Weapon(   455,  455,     0,   40, 40,   0,  1.00, "533",   30, "", "9MM PB", "L34A1");
    MainArmory[551] = new Weapon(   455,  455,     0,   40, 40,   0,  1.00, "533",   30, "", "9MM SP6", "AS VAL");
    MainArmory[552] = new Weapon(   525,  525,     0,   40, 40,   0,  1.00, "533",   40, "", "5.45mm", "AKS-74U");
    MainArmory[553] = new Weapon(   525,  525,     0,   60, 60,   0,  1.00, "533",   40, "", "4.73mm", "H&K G11");
    MainArmory[554] = new Weapon(   525,  525,     0,   40, 40,   0,  1.00, "533",   40, "", "7.62MM", "Type 64 SMG");
    MainArmory[555] = new Weapon(   525,  525,     0,   60, 30,   0,  1.00, "355",   40, "", "7.62MM", "Vz.58");
    MainArmory[556] = new Weapon(  2100, 1575,  2275,   20, 20,   0,  1.00, "535",   46, "[AOE]", "23MM", "Gsh-23L");
    MainArmory[557] = new Weapon(  1050, 2625,  1750,   15,  0,   0,  1.00, "545",  120, "[AOE][STAT]", "30m", "PLDvK vz.53/59");
    MainArmory[558] = new Weapon(  1050, 2625,  1750,   25,  0,   0,  1.00, "545",  120, "[AOE][STAT]", "30m", "PLDvK vz.53/59");
    MainArmory[559] = new Weapon(  2100, 1575,  2275,   30, 30,   0,  1.00, "326",   60, "[AOE]", "30MM", "ADEN 30");
    MainArmory[560] = new Weapon(  1575, 1575,     0,   15, 10,   2,  1.00, "562",   46, "[KE][AOE]", "20MM", "M621");
    MainArmory[561] = new Weapon(  1775, 1575,     0,   25, 10,   2,  1.00, "562",   69, "[KE][AOE]", "30mm", "2A42");
    MainArmory[562] = new Weapon(  1750, 1575,     0,   30, 20,   2,  1.00, "562",   69, "[KE][AOE]", "30mm", "2A42");
    MainArmory[563] = new Weapon(  1750, 1575,     0,   30, 10,   2,  1.00, "562",   58, "[KE][AOE]", "25MM", "KBA 25");
    MainArmory[564] = new Weapon(  1750, 1575,     0,   25, 10,   2,  1.00, "562",   69, "[KE][AOE]", "30mm", "VK-30");
    MainArmory[565] = new Weapon(  1575, 1575,     0,   60, 50,   3,  1.00, "562",   69, "[KE][AOE]", "30mm", "2A42");
    MainArmory[566] = new Weapon(  2800,    0,     0,   70, 50,  26,  0.00, "4S",  150, "[HEAT][FF]", "SALH missile", "AGM-114C HELLFIRE");
    MainArmory[567] = new Weapon(  1050,  875,     0,   10,  5,   0,  0.75, "588",   90, "", "12.7MM", "DshK");
    MainArmory[568] = new Weapon(  1050,  875,     0,   15,  5,   0,  0.75, "588",   90, "", "12.7MM", "NSVT");
    MainArmory[569] = new Weapon(  1575, 1575,     0,   15, 15,   2,  1.00, "749",   46, "[KE][AOE]", "20MM", "HS.820");
    MainArmory[570] = new Weapon(  1050,  875,     0,   15,  5,   0,  0.75, "588",   90, "", "12.7MM", "T54");
    MainArmory[571] = new Weapon(  2800, 1575,  1575,   30, 30,   0,  1.00, "631",   60, "[AOE]", "30mm", "Gsh-2-30");
    MainArmory[572] = new Weapon(  2100, 1575,  1750,   20, 20,   0,  1.00, "647",  104, "[AOE]", "30MM", "NR-30");
    MainArmory[573] = new Weapon(   875,  525,     0,   20, 10,   0,  0.50, "652",   55, "", "7.62MM", "62 Shiki");
    MainArmory[574] = new Weapon(   875,  525,     0,   15,  5,   0,  0.50, "652",   55, "", "7.62MM", "PKT");
    MainArmory[575] = new Weapon(   875,  525,     0,   15,  5,   0,  0.50, "652",   55, "", "7.62MM", "M1919");
    MainArmory[576] = new Weapon(   875,  525,     0,   20, 10,   0,  0.50, "652",   55, "", "7.62MM", "GPMG");
    MainArmory[577] = new Weapon(   875,  525,     0,   20, 10,   0,  0.50, "652",   55, "", "7.62MM", "L37");
    MainArmory[578] = new Weapon(   875,  525,     0,   20, 10,   0,  0.50, "652",   55, "", "7.62MM", "M240");
    MainArmory[579] = new Weapon(   875,  525,     0,   30, 20,   0,  0.50, "652",   55, "", "7.62MM", "MG3");
    MainArmory[580] = new Weapon(   875,  525,     0,   20, 10,   0,  0.50, "652",   55, "", "7.62MM", "NF-1");
    MainArmory[581] = new Weapon(   875,  525,     0,   10,  5,   0,  0.50, "652",   55, "", "7.62MM", "M60");
    MainArmory[582] = new Weapon(  1050,  875,     0,   15,  5,   0,  0.75, "652",   90, "", "12.7MM", "M2 BROWNING");
    MainArmory[583] = new Weapon(  1050, 2625,  1750,   20,  0,   0,  1.00, "704",  120, "[AOE][STAT][STAT][SMK]", "30MM", "KCB");
    MainArmory[584] = new Weapon(  1050, 2800,  2625,   50, 35,   0,  1.00, "717",  140, "[AOE][RAD]", "35MM", "TWIN KDA");
    MainArmory[585] = new Weapon(  2275,    0,     0,   50, 45,  15,  3.00, "10",  138, "[KE][AOE]", "120MM", "L44");
    MainArmory[586] = new Weapon(  2100,    0,     0,   55, 45,  13,  5.00, "10",  175, "[HEAT][AOE]", "152MM HEAT", "XM-150");
    MainArmory[587] = new Weapon(  1575, 1575,     0,   15,  5,   2,  1.00, "749",   46, "[KE][AOE]", "20MM", "M693 F1");
    MainArmory[588] = new Weapon(  1575, 1575,     0,   15,  5,   2,  1.00, "749",   46, "[KE][AOE]", "20MM", "Rh 202");
    MainArmory[589] = new Weapon(  1575, 1575,     0,   15,  5,   2,  1.00, "749",   46, "[KE][AOE]", "20MM", "HS.820");
    MainArmory[590] = new Weapon(  1400, 1750,     0,   10,  5,   1,  1.00, "761",  110, "[KE]", "14.5mm", "ZPTU-4");
    MainArmory[591] = new Weapon(  2800, 1575,  1575,   30, 30,   4,  1.00, "789",   69, "[HEAT][AOE]", "30mm", "Gsh-2-30");
    MainArmory[592] = new Weapon(  1050, 2800,  2625,   45,  0,   0,  1.00, "793",  140, "[AOE][RAD][STAT]", "35MM", "Twin GDF-001");
    MainArmory[593] = new Weapon(  1050, 2800,  2625,   55, 35,   0,  1.00, "717",  140, "[AOE][RAD]", "35MM", "TWIN KDA");
    MainArmory[594] = new Weapon(  1050, 2800,  2625,   60, 30,   0,  1.00, "793",  140, "[AOE][RAD]", "35MM", "Twin GDF-001");
    MainArmory[595] = new Weapon(  1575, 1575,  1400,   20,  5,   0,  1.00, "818",   92, "[AOE]", "20MM", "M61A1 Vulcan");
    MainArmory[596] = new Weapon(  1050, 2450,  1750,   25,  0,   0,  1.00, "818",   92, "[AOE][STAT][STAT]", "20MM", "M168 VULCAN");
    MainArmory[597] = new Weapon(  1050, 2625,  2450,   45,  0,   0,  1.00, "818",   92, "[AOE][RAD][STAT]", "20MM", "M168 VULCAN");
    MainArmory[598] = new Weapon(  1050, 2800,  2625,   55, 15,   0,  1.00, "853",  120, "[AOE][RAD]", "30MM", "Twin KCB");
    MainArmory[599] = new Weapon(  2100, 1575,  1400,   20, 20,   0,  0.75, "857",   90, "", "12.7MM", "M2 BROWNING");
    MainArmory[600] = new Weapon(  2100, 1575,  1750,   20, 20,   0,  1.00, "857",   46, "[AOE]", "23MM", "NR-23");
    MainArmory[601] = new Weapon(  2100, 1575,  1750,   30, 30,   0,  1.00, "857",   46, "[AOE]", "23MM", "Gsh-23L");
    MainArmory[602] = new Weapon(  1575, 1575,     0,   30,  5,   2,  1.00, "900",   46, "[KE][AOE]", "20MM", "TWIN M621");
    MainArmory[603] = new Weapon(  1575, 1575,     0,   20,  5,   2,  1.00, "900",   53, "[KE][AOE]", "23MM", "23MM Z-9");
    MainArmory[604] = new Weapon(  1050, 2450,  1750,   25,  0,   0,  1.00, "913",   80, "[AOE][STAT]", "20MM", "TA 20");
    MainArmory[605] = new Weapon(  1050, 2625,  2450,   30,  5,   0,  1.00, "1031",  120, "[AOE][RAD]", "30mm", "HSS.831");
    MainArmory[606] = new Weapon(   875,  525,     0,   20,  5,   0,  0.50, "1035",   55, "", "7.62MM", "Twin M1919");
    MainArmory[607] = new Weapon(   875,  525,     0,   10,  5,   0,  0.50, "1034",   55, "", "7.62MM", "Twin Ksp m/36");
    MainArmory[608] = new Weapon(   875,  525,     0,   20,  5,   0,  0.50, "1034",   55, "", "7.62MM", "M240");
    MainArmory[609] = new Weapon(   455,    0,     0,   60,  0,   0,  1.00, "72",   90, "[AOE][STAT]", "40MM FRAG", "Hawk MM1");
    MainArmory[610] = new Weapon(  1050, 1050,     0,   20, 10,   0,  1.00, "1052",   36, "[AOE]", "7.62MM", "GSHG-7.62");
    MainArmory[611] = new Weapon(  1050, 1050,     0,   20, 10,   0,  1.00, "1052",   36, "", "7.62MM", "M134 MINIGUN");
    MainArmory[612] = new Weapon(  2100, 1575,  1400,   20, 20,   0,  1.00, "1178",   36, "", "7.62MM", "Machine gun 7.62");
    MainArmory[613] = new Weapon(  1050, 2800,  2625,   45, 15,   0,  1.00, "1342",  120, "[AOE][RAD]", "30mm", "Twin 30NK");
    MainArmory[614] = new Weapon(  1050, 2800,  1750,   35,  0,   0,  1.00, "1380",  120, "[AOE][STAT]", "30mm", "2A38M");
    MainArmory[615] = new Weapon(  2100, 1575,  2100,   30, 30,   0,  1.00, "1499",   40, "[AOE]", "20MM", "Twin M39A2");
    MainArmory[616] = new Weapon(  1575, 1575,     0,   15,  5,   2,  1.00, "1499",   53, "[KE][AOE]", "23MM", "Gsz-23");
    MainArmory[617] = new Weapon(  2100,    0,     0,   20, 10,   0,  2.00, "136",  184, "[AOE]", "80MM ROCKETS", "S-80FP");
    MainArmory[618] = new Weapon(  1050, 2800,  2625,   50, 40,   0,  1.00, "1515",  100, "[AOE][RAD]", "23MM", "PLA 25");
    MainArmory[619] = new Weapon(   875,  525,     0,   10,  5,   0,  0.50, "1518",   55, "", "7.62MM", "Quad PKT");
    MainArmory[620] = new Weapon(  1225, 1225,     0,   10,  5,   0,  0.75, "1518",   90, "", "12.7MM", "Quad M2 Browning");
    MainArmory[621] = new Weapon(  1050, 2450,  1750,   20, 10,   0,  1.00, "1538",   92, "[AOE]", "23MM", "AZP-23 AMUR");
    MainArmory[622] = new Weapon(  1050, 2450,  2275,   30, 20,   0,  1.00, "1538",   92, "[AOE][RAD]", "23MM", "AZP-23 AMUR");
    MainArmory[623] = new Weapon(  1050, 2625,  2450,   45, 35,   0,  1.00, "1538",   92, "[AOE][RAD]", "23MM", "AZP-23 AMUR");
    MainArmory[624] = new Weapon(  1050,    0,     0,   20,  5,   4,  1.00, "6",   69, "[HEAT]", "60mm HEAT", "HB 60");
    MainArmory[625] = new Weapon(  2100, 1575,  2800,   30, 30,   0,  1.00, "1578",  106, "[AOE]", "23MM", "Gsh-6-32");
    MainArmory[626] = new Weapon(  1575, 1575,  1400,   20,  5,   0,  1.00, "1765",   92, "[AOE]", "23MM", "AZP-23 AMUR");
    MainArmory[627] = new Weapon(   700, 1750,   350,   20, 20,   0,  1.00, "1874",    0, "[AOE][RAD][DEF]", "30mm", "AK230 CIWS");
    MainArmory[628] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "OTO Melara");
    MainArmory[629] = new Weapon(  2100, 1575,  2275,   40, 30,   0,  1.00, "2142",   40, "[AOE]", "20MM", "Quad m/49 Bofors");
    MainArmory[630] = new Weapon(  2100, 1575,  2100,   20, 20,   0,  1.00, "2147",   40, "[AOE]", "20MM", "Quad Colt Mk12");
    MainArmory[631] = new Weapon(  2800, 1575,  1575,   30, 30,   4,  1.00, "1418",  138, "[HEAT][AOE]", "30mm", "GSH-6-30");
    MainArmory[632] = new Weapon(  1050, 1050,     0,   20, 10,   0,  1.00, "2758",   36, "", "7.62MM", "TWIN M134 MINIGUN");
    MainArmory[633] = new Weapon(  2100, 1575,  2450,   30, 30,   0,  1.00, "4028",   92, "[AOE]", "20MM", "M61A1 Vulcan");
    MainArmory[634] = new Weapon(  4200,    0,     0, 2275,  0,   0,  2.00, "22",  138, "[AOE][CORR][STAT][SMK]", "60mm", "HB 60 LP");
    MainArmory[635] = new Weapon(     0, 2625,  4200,   50,  0,   0,  9.00, "25S",  360, "[AOE][GUID]", "Radar missiles", "HEOS I-Hawk");
    MainArmory[636] = new Weapon(  1575,    0,     0,   25,  5,   6,  2.00, "13",   87, "[KE][AOE]", "75MM", "SA.50");
    MainArmory[637] = new Weapon(  2450,    0,     0,   45,  0,  16,  0.00, "20S",  150, "[HEAT][GUID]", "MCLOS misile", "HJ-73B");
    MainArmory[638] = new Weapon(   595,  595,     0,   40, 10,   0,  1.00, "120",   55, "", "7.62MM", "Howa 64  Shiki");
    MainArmory[639] = new Weapon(   525,  525,     0,   30, 15,   0,  1.00, "160",   40, "", "5.56MM", "Howa 89 Shiki");
    MainArmory[640] = new Weapon(   525,  525,     0,   60, 30,   0,  1.00, "160",   40, "", "5.56MM", "Howa 89F Shiki");
    MainArmory[641] = new Weapon(   875,  595,     0,   50, 30,   0,  0.50, "461",   55, "[CQC]", "7.62MM", "I.MG3");
    MainArmory[642] = new Weapon(  3500,    0,     0,   25,  0,   8,  0.00, "42",  300, "[HEAT][CLUS]", "450KG CLUSTER", "IBL-755");
    MainArmory[643] = new Weapon(     0, 2450,  1960,   45, 45,   0,  5.00, "5S",  200, "[AOE][GUID]", "SACLOS missile", "Javelin LML");
    MainArmory[644] = new Weapon(   770,  595,     0,   50, 25,   0,  0.50, "342",   40, "[CQC]", "5.56MM", "K3 LMG");
    MainArmory[645] = new Weapon(  1750, 1575,     0,   25, 10,   2,  1.00, "562",   58, "[KE][AOE]", "25MM", "KBA 25");
    MainArmory[646] = new Weapon(   525,  525,     0,   60, 15,   0,  1.00, "160",   40, "", "7.62MM", "kbk AKM");
    MainArmory[647] = new Weapon(  1925, 1575,     0,   50, 30,   3,  1.00, "271",   81, "[KE][AOE]", "35MM", "KDE 35");
    MainArmory[648] = new Weapon(  2975,    0,     0,   50, 50,  28,  0.00, "1s",  150, "[HEAT][SA]", "SALH missile", "KH-23M");
    MainArmory[649] = new Weapon(  3150,    0,     0,   50, 50,  28,  0.00, "1s",  150, "[HEAT][SA]", "SALH missile", "KH-25ML");
    MainArmory[650] = new Weapon(  3325,    0,     0,   50, 50,  30,  0.00, "2s",  150, "[HEAT][FF]", "IR missiles", "KH-29D");
    MainArmory[651] = new Weapon(  1925,    0,     0,   35, 10,  11,  3.00, "7",  115, "[KE][AOE]", "100MM", "D-10T");
    MainArmory[652] = new Weapon(  2625,    0,     0,   70,  0,  25,  0.00, "10S",  150, "[HEAT][GUID]", "SACLOS missile", "TOW 2");
    MainArmory[653] = new Weapon( 41300,    0,     0, 3640,  0,   0,  7.00, "",  357, "", "", "CN98");
	MainArmory[654] = new Weapon(  1400, 1050,     0,   20,  5,   1,  1.00, "342",   40, "[KE]", "", "KPVT");
	MainArmory[655] = new Weapon(  2275,    0,     0,   65, 50,  23,  4.00, "9",  144, "[KE][AOE]", "125MM", "2A46M");
	MainArmory[656] = new Weapon(  1400, 1050,     0,   10,  5,   1,  1.00, "342",   40, "[KE]", "14.5mm", "KPVT");
	MainArmory[657] = new Weapon(  2625,    0,     0,   45,  0,  20,  0.00, "5S",  150, "[HEAT][GUID]", "SACLOS missile", "Konkurs");
	MainArmory[658] = new Weapon(   875,  595,     0,   40,  0,   0,  0.50, "340",   45, "[STAT]", "6.5MM", "Ksp m/58");
	MainArmory[659] = new Weapon(  1925,    0,     0,   45, 25,  11,  3.00, "9",  104, "[HEAT][AOE][AOE]", "90MM HEAT", "Kv-90S73");
	MainArmory[660] = new Weapon(  2100,    0,     0,   45,  0,  12,  3.00, "15",  121, "[KE][STAT][AOE]", "105MM", "L/62");
	MainArmory[661] = new Weapon(  2275,    0,     0,   60,  0,  16,  3.00, "15",  121, "[KE][STAT][AOE]", "105MM", "L/62");
	MainArmory[662] = new Weapon(  2275,    0,     0,   65,  0,  17,  3.00, "15",  121, "[KE][STAT][AOE]", "105MM", "L/62");
    MainArmory[663] = new Weapon(  1925,    0,     0,   15,  0,   8,  0.00, "7",  121, "[KE][STAT]", "105MM", "L13A1");
    MainArmory[664] = new Weapon(  4900,    0,     0, 2730,  0,   0,  3.00, "18",  187, "[AOE][CORR][STAT][SMK]", "81MM", "L16A2");
    MainArmory[665] = new Weapon(  2450,    0,     0,   35, 10,  17,  1.00, "6s",  150, "[HEAT][GUID][AOE]", "MCLOS misile", "SS-11 TCA");
    MainArmory[666] = new Weapon(   875,  595,     0,   50,  5,   0,  0.50, "340",   55, "", "7.62MM", "L7A1");
    MainArmory[667] = new Weapon(   875,  525,     0,   45, 20,   0,  0.50, "272",   55, "[CQC]", "7.62MM", "M60 Shorty");
    MainArmory[668] = new Weapon(   350,    0,     0,    0,  0,   0,  0.50, "53",   45, "[NPLM][STAT]", "Napalm rounds", "M9");
    MainArmory[669] = new Weapon(     0, 2275,  1820,   35,  0,   0,  3.00, "6S",  120, "[AOE][FF][STAT]", "IR missiles", "FIM-43 Redeye");
    MainArmory[670] = new Weapon(  1925,    0,     0,   20,  0,  16,  0.00, "8",  179, "[KE][STAT]", "155MM", "L31");
    MainArmory[671] = new Weapon(  2275,    0,     0,   50, 40,  20,  4.00, "8",  144, "[KE][AOE]", "125MM", "2A46M");
    MainArmory[672] = new Weapon(  2800,    0,     0,   70, 35,  26,  0.00, "2s",  150, "[HEAT][SA]", "SALH missile", "9K121 VIKHR");
    MainArmory[673] = new Weapon( 24500,    0,     0, 7280,  0,   0,  7.00, "12",  357, "[AOE][CORR][STAT][SMK]", "155MM", "m/60");
    MainArmory[674] = new Weapon(   525,    0,     0,   50,  5,  14,  1.00, "10",  400, "[HEAT][STAT]", "100mm heat", "RL-100 Blindicide");
    MainArmory[675] = new Weapon(  1925,    0,     0,   20,  5,   8,  3.00, "8",   97, "[KE][AOE]", "84mm", "QF 20-PDR");
    MainArmory[676] = new Weapon(   525,  525,     0,   30, 30,   0,  1.00, "342",   40, "", "5.45mm", "AKS-74U");
    MainArmory[677] = new Weapon(  4990,    0,     0,   70, 70,  22,  0.00, "2S",  150, "[HEAT][FF]", "AntiRadar missile", "ALARM");
    MainArmory[678] = new Weapon(  4900,    0,     0,   70, 70,  60,  3.00, "1s",    0, "[HEAT][FF][SHIP]", "Radar missiles", "AM-39 Exocet");
    MainArmory[679] = new Weapon(  2800,    0,     0,   50,  0,  21,  0.00, "6s",  150, "[HEAT][GUID]", "SALH missile", "Arkan");
    MainArmory[680] = new Weapon(  2800,    0,     0,   60, 45,  25,  0.00, "1s",  150, "[HEAT][SA]", "SACLOS missile", "ATAKA V");
    MainArmory[681] = new Weapon(  2625,    0,     0,   40,  0,  17,  0.00, "8S",  150, "[HEAT][GUID]", "SALH missile", "BASTION");
    MainArmory[682] = new Weapon(     0, 2275,  1820,   35,  0,   0,  3.00, "6S",  120, "[AOE][FF][STAT]", "IR missiles", "Hamlet");
    MainArmory[683] = new Weapon(   700,    0,     0,   70,  0,  18,  2.00, "15",  336, "[HEAT][STAT][AOE]", "84MM HEAT", "CARL GUSTAV M2");
    MainArmory[684] = new Weapon(  1925,    0,     0,   30, 10,  11,  0.00, "7",  115, "[KE][AOE]", "105MM", "D-10T");
    MainArmory[685] = new Weapon(  2275,    0,     0,   15,  0,   9,  0.00, "6",  141, "[HEAT][STAT]", "122mm HEAT", "D-30");
    MainArmory[686] = new Weapon(   455,  455,     0,   40, 40,   0,  1.00, "533",   30, "", "9MM PB", "Hovea M/49");
    MainArmory[687] = new Weapon(  1750,    0,     0,   40,  0,  10,  2.00, "8",   88, "[HEAT][AOE]", "76MM", "D-56T");
    MainArmory[688] = new Weapon(   595,  595,     0,   40, 10,   0,  1.00, "120",   55, "", "7.62MM", "Howa 64  Shiki");
    MainArmory[689] = new Weapon(  1050,  595,     0,   95,  0,   0,  1.00, "15",   55, "[STAT]", "7.62MM", "Dragunov SVD");
    MainArmory[690] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "dual M2BROWNING");
    MainArmory[691] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "Dual Type 2M-3M");
    MainArmory[692] = new Weapon(   595,  595,     0,   40, 10,   0,  1.00, "120",   55, "", "7.62MM", "FAL");
    MainArmory[693] = new Weapon(   770,  595,     0,   60, 30,   0,  0.50, "375",   55, "[CQC]", "7.62MM", "FAL0");
    MainArmory[694] = new Weapon(   525,    0,     0,   50,  0,   0,  4.00, "12",  150, "[NPLM][STAT]", "Napalm rounds", "FHJ-84");
    MainArmory[695] = new Weapon(     0, 2275,  1820,   70, 70,   0,  5.00, "10S",  200, "[AOE][FF]", "IR missiles", "FIM-92C STINGER");
    MainArmory[696] = new Weapon(  2450,    0,     0,   35, 20,  16,  0.00, "1s",  150, "[HEAT][SA]", "SACLOS missile", "Fleyta");
    MainArmory[697] = new Weapon(  7000,    0,     0,   70,  0,  80,  4.00, "20S",    0, "[HEAT][FF][SHIP]", "Radar missiles", "AM-39 Exocet");
    MainArmory[698] = new Weapon(   875,  595,     0,   20, 10,   0,  0.50, "652",   55, "", "7.62MM", "FN MAG");
    MainArmory[699] = new Weapon(  2450, 1575,  2100,   40, 40,   0,  1.00, "6157",  115, "[AOE]", "25MM", "GAU-12/A Equalizer");
    MainArmory[700] = new Weapon(     0,    0,  2800,   30, 30,   0,  1.00, "857",  100, "[AOE]", "23MM", "Gsh-23L");
    MainArmory[701] = new Weapon(   525,  525,     0,   30, 15,   0,  1.00, "160",   40, "", "5.56MM", "Howa 89 Shiki");
    MainArmory[702] = new Weapon(  1575, 1575,     0,   15, 15,   2,  1.00, "749",   40, "[KE][AOE]", "20MM", "HS.820");
    MainArmory[703] = new Weapon(   875,  595,     0,   50, 30,   0,  0.50, "461",   55, "[CQC]", "7.62MM", "I.MG3");
    MainArmory[704] = new Weapon(     0, 2450,  1960,   55, 55,   0,  5.00, "6s",  200, "[AOE][FF][STAT]", "IR missiles", "Igla-N");
    MainArmory[705] = new Weapon(     0, 2625,  2100,   60, 60,   0,  4.00, "9",  160, "[AOE][FF]", "IR missiles", "Igla-V");
    MainArmory[706] = new Weapon(  2800,    0,     0,   60, 50,  24,  0.00, "6s",  150, "[HEAT][SA]", "SALH missile", "Invar");
    MainArmory[707] = new Weapon(  1750, 1575,     0,   25, 10,   2,  1.00, "562",   58, "[KE][AOE]", "25MM", "KBA 25");
    MainArmory[708] = new Weapon(   875,  595,     0,   40, 20,   0,  0.50, "249",   55, "", "7.62MM", "Kg m/37");
    MainArmory[709] = new Weapon(  3500,    0,     0,   55, 55,  24,  0.00, "3s",  150, "[HEAT][FF][SEAD]", "AntiRadar missile", "Kh-25MPU");
    MainArmory[710] = new Weapon(  4550,    0,     0,   50, 50,  28,  0.00, "2s",  150, "[HEAT][FF][SEAD]", "AntiRadar missile", "KH-28");
    MainArmory[711] = new Weapon(  3150,    0,     0,   50, 50,  30,  1.00, "1s",  150, "[HEAT][FF]", "SALH missile", "KH-29L");
    MainArmory[712] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "kh-31a");
    MainArmory[713] = new Weapon(  4900,    0,     0,   60, 60,  28,  0.00, "2s",  150, "[HEAT][FF][SEAD]", "AntiRadar missile", "Kh-58");
    MainArmory[714] = new Weapon(  2975,    0,     0,   30, 30,  28,  0.00, "1s",  150, "[HEAT][SA]", "SACLOS missile", "KH-66");
    MainArmory[715] = new Weapon(  2625,    0,     0,   45, 30,  20,  0.00, "6s",  150, "[HEAT][SA]", "SACLOS missile", "Kobra");
    MainArmory[716] = new Weapon(  2625,    0,     0,   55, 45,  22,  0.00, "6s",  150, "[HEAT][SA]", "SACLOS missile", "Agona");
    MainArmory[717] = new Weapon(   875,  595,     0,   60, 30,   0,  0.50, "340",   45, "[CQC]", "6.5MM", "Ksp m/58B");
    MainArmory[718] = new Weapon(  2100,    0,     0,   45,  0,  12,  3.00, "15",  121, "[KE][STAT][AOE]", "105MM", "L/62");
    MainArmory[719] = new Weapon(   595,  595,     0,   80, 20,   0,  1.00, "75",   55, "", "7.62MM", "L1A1 SLR");
    MainArmory[720] = new Weapon(  2275,    0,     0,   65, 60,  23,  3.00, "9",  138, "[KE][AOE]", "120MM", "L44");
    MainArmory[721] = new Weapon(  2275,    0,     0,   65, 60,  21,  3.00, "9",  138, "[KE][AOE]", "120MM", "L44");
    MainArmory[722] = new Weapon( 41300,    0,     0, 3640,  0,   0,  7.00, "5",  357, "[AOE][CORR][STAT][SMK]", "155MM", "L47");
    MainArmory[723] = new Weapon(  1925,    0,     0,   35, 15,  10,  3.00, "8",  121, "[KE][AOE]", "105MM", "L7");
    MainArmory[724] = new Weapon(  1925,    0,     0,   60, 20,  11,  3.00, "8",  121, "[KE][AOE]", "105MM", "L7");
    MainArmory[725] = new Weapon(  2100,    0,     0,   60, 25,  13,  3.00, "8",  121, "[KE][AOE]", "105MM", "L7");
    MainArmory[726] = new Weapon(  2275,    0,     0,   70, 40,  16,  3.00, "8",  121, "[KE][AOE]", "105MM", "L7");
    MainArmory[727] = new Weapon(  2100,    0,     0,   35, 15,  11,  3.00, "8",  121, "[KE][AOE]", "105MM", "L7");
    MainArmory[728] = new Weapon(   875,  595,     0,   50,  5,   0,  0.50, "340",   55, "", "7.62MM", "L7A1");
    MainArmory[729] = new Weapon(  2100,    0,     0,   60, 45,  13,  3.00, "10",  121, "[KE][AOE]", "105MM", "L7A3");
    MainArmory[730] = new Weapon(  2275,    0,     0,   65, 50,  15,  3.00, "10",  121, "[KE][AOE]", "105MM", "L7A3");
    MainArmory[731] = new Weapon(   770,  595,     0,   60, 25,   0,  0.50, "318",   40, "", "5.56MM", "L86 LMG");
    MainArmory[732] = new Weapon(   770,  595,     0,   50, 25,   0,  0.50, "422",   40, "[CQC]", "5.45mm", "LADA RPK");
    MainArmory[733] = new Weapon(   700,    0,     0,   70,  0,  22,  0.00, "20",  336, "[HEAT][STAT]", "94MM HEAT ROCKETS", "LAW 80");
    MainArmory[734] = new Weapon(   770,  595,     0,   60, 25,   0,  0.50, "411",   40, "[CQC]", "5.45mm", "LMG 944");
    MainArmory[735] = new Weapon(  2275,    0,     0,   20,  0,  11,  0.00, "6",  141, "[HEAT][STAT]", "122mm HEAT", "M-46");
    MainArmory[736] = new Weapon(  3500,    0,     0,   10,  0,   0,  0.00, "33",  150, "[NPLM]", "340KG NAPALM", "M/58");
    MainArmory[737] = new Weapon( 24500,    0,     0, 4550,  0,   0,  7.00, "12",  357, "[AOE][CORR][STAT][SMK]", "155MM", "m/60");
    MainArmory[738] = new Weapon(   525,  525,     0,   60, 30,   0,  1.00, "355",   40, "", "5.56MM", "m/85");
    MainArmory[739] = new Weapon(  2625,    0,     0,   40, 40,   0,  3.00, "200",  161, "[AOE]", "70MM ROCKETS", "M151 CRV7");
    MainArmory[740] = new Weapon(  2100,    0,     0,   20, 10,   0,  2.00, "132",  161, "[AOE]", "70MM ROCKETS", "M151 HYDRA");
    MainArmory[741] = new Weapon(  2450,    0,     0,   30, 30,   0,  2.00, "271",  161, "[AOE]", "70MM ROCKETS", "M151 HYDRA");
    MainArmory[742] = new Weapon(   525,    0,     0,   40,  0,   0,  4.00, "17",  150, "[NPLM][STAT]", "Napalm rounds", "M202 Flash");
    MainArmory[743] = new Weapon(   525,    0,     0,   30,  0,  10,  0.00, "10",  360, "[HEAT][STAT]", "83MM HEAT Rocket", "M20A1 Super Bazooka");
    MainArmory[744] = new Weapon(  3850,    0,     0, 2275,  0,   0,  2.00, "22",  138, "[AOE][CORR][STAT][SMK]", "60mm", "M224 Mortar");
    MainArmory[745] = new Weapon(   875,  525,     0,   50,  0,   0,  0.50, "340",   55, "[STAT]", "7.62MM", "M240");
    MainArmory[746] = new Weapon(  2275,    0,     0,   65, 60,  19,  3.00, "9",  138, "[KE][AOE]", "120MM", "M256");
    MainArmory[747] = new Weapon(  2275,    0,     0,   70, 65,  24,  3.00, "9",  138, "[KE][AOE]", "120MM", "M256");
    MainArmory[748] = new Weapon(  2275,    0,     0,   65, 55,  22,  3.00, "9",  138, "[KE][AOE]", "120MM", "M256");
    MainArmory[749] = new Weapon(  1925,    0,     0,   15,  0,  16,  0.00, "6",  179, "[KE][STAT]", "155MM", "M284");
    MainArmory[750] = new Weapon( 23800,    0,     0, 3640,  0,   0,  7.00, "4",  357, "[AOE][CORR][STAT][SMK]", "155MM", "M284");
    MainArmory[751] = new Weapon(  4900,    0,     0, 2730,  0,   0,  3.00, "18",  187, "[AOE][CORR][STAT][SMK]", "81MM", "M29");
    MainArmory[752] = new Weapon(  6300,    0,     0, 3185,  0,   0,  4.00, "12",  247, "[AOE][CORR]", "107MM", "M30");
    MainArmory[753] = new Weapon(  1750,    0,     0,   40, 10,   8,  2.00, "8",   88, "[KE][AOE]", "76MM", "M32");
    MainArmory[754] = new Weapon(  1750,    0,     0,   60, 10,  10,  2.00, "8",   88, "[KE][AOE]", "76MM", "M32");
    MainArmory[755] = new Weapon(  1925,    0,     0,   45,  0,   9,  3.00, "8",  104, "[KE][STAT][AOE]", "90MM", "M41");
    MainArmory[756] = new Weapon(  1575,    0,     0,   35,  0,  10,  0.00, "5S",  150, "[HEAT][GUID]", "SACLOS missile", "M47 DRAGON");
    MainArmory[757] = new Weapon(  1925,    0,     0,   50,  0,  15,  0.00, "5S",  150, "[HEAT][GUID]", "SACLOS missile", "M47 SUPER DRAGON");
    MainArmory[758] = new Weapon( 49000,    0,     0, 2275,  0,   0, 20.00, "0", 1340, "[AOE][CORR][STAT]", "570mm rocket", "M52 Tactical missile");
    MainArmory[759] = new Weapon(  1575,    0,     0,   40,  0,   4,  2.00, "6",   87, "[KE][STAT][AOE]", "75MM", "M6");
    MainArmory[760] = new Weapon(   980,  595,     0,   35,  0,   0,  0.50, "272",   55, "[STAT]", "7.62MM", "M60");
    MainArmory[761] = new Weapon(   980,  595,     0,   50, 30,   0,  0.50, "272",   55, "[CQC]", "7.62MM", "M60E3");
    MainArmory[762] = new Weapon(  1050,  525,     0,   10,  5,   0,  0.50, "652",   55, "", "7.62MM", "M60E3");
    MainArmory[763] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "9K33M OSA-M");
    MainArmory[764] = new Weapon(  1225,  525,     0,   15, 10,   0,  1.00, "142",   70, "[AOE]", "30mm FRAG", "AGS-17");
    MainArmory[765] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "AK630 CIWS");
    MainArmory[766] = new Weapon(     0, 2450,  1960,   55, 55,   0,  4.00, "10S",  160, "[AOE][FF]", "IR missiles", "Igla");
    MainArmory[767] = new Weapon(  2625,    0,     0,   45,  0,  20,  0.00, "20S",  150, "[HEAT][GUID]", "SACLOS missile", "Konkurs");
    MainArmory[768] = new Weapon(  1400, 1050,     0,   20,  5,   1,  1.00, "342",   40, "[KE]", "14.5mm", "KPVT");
    MainArmory[769] = new Weapon( 28000,    0,     0, 4550,  0,   0,  8.00, "7",  312, "[AOE][CORR]", "140mm rocket", "M-14-0F");
    MainArmory[770] = new Weapon(   525,    0,     0,   40,  0,   0,  4.00, "17",  150, "[NPLM][STAT]", "Napalm rounds", "M202 Flash");
    MainArmory[771] = new Weapon(   875,  525,     0,   50,  5,   0,  0.50, "340",   55, "", "7.62MM", "M240");
    MainArmory[772] = new Weapon(  1575,    0,     0,   50,  0,  13,  0.00, "5S",  150, "[HEAT][GUID]", "SACLOS missile", "M47 DRAGON II");
    MainArmory[773] = new Weapon(  1925,    0,     0,   45,  0,   9,  3.00, "8",  121, "[KE][AOE][STAT]", "105MM", "M68");
    MainArmory[774] = new Weapon(  1925,    0,     0,   45,  0,  11,  3.00, "10",  121, "[KE][AOE][STAT]", "105MM", "M68");
    MainArmory[775] = new Weapon(  2100,    0,     0,   45,  0,  13,  3.00, "8",  121, "[KE][AOE][STAT]", "105MM", "M68");
    MainArmory[776] = new Weapon(  1925,    0,     0,   45, 25,  13,  3.00, "10",  121, "[KE][AOE]", "105MM", "M68");
    MainArmory[777] = new Weapon(  1925,    0,     0,   45,  0,   9,  3.00, "8",  121, "[KE][AOE][STAT]", "105MM", "M68A1");
    MainArmory[778] = new Weapon(  2275,    0,     0,   45,  0,  17,  3.00, "8",  121, "[KE][AOE][STAT]", "105MM", "M68A1");
    MainArmory[779] = new Weapon(  2100,    0,     0,   60, 30,  13,  3.00, "10",  121, "[KE][AOE]", "105MM", "M68A1");
    MainArmory[780] = new Weapon(  2100,    0,     0,   60, 30,  16,  3.00, "10",  121, "[KE][AOE]", "105MM", "M68A1");
    MainArmory[781] = new Weapon(  2100,    0,     0,   60, 40,  15,  3.00, "10",  121, "[KE][AOE]", "105MM", "M68A1");
    MainArmory[782] = new Weapon(  2100,    0,     0,   65, 50,  13,  3.00, "9",  121, "[KE][AOE]", "105MM", "M68A1");
    MainArmory[783] = new Weapon(  2100,    0,     0,   65, 50,  15,  3.00, "9",  121, "[KE][AOE]", "105MM", "M68A1");
    MainArmory[784] = new Weapon(   525,    0,     0,   40,  0,  16,  0.00, "20",  264, "[HEAT][STAT]", "66MM HEAT Rocket", "M72A4 LAW");
    MainArmory[785] = new Weapon(  1750,  525,     0,   10,  5,   0,  1.00, "63",   80, "[AOE]", "40MM FRAG", "M75");
    MainArmory[786] = new Weapon(  1925,    0,     0,   40, 20,  11,  5.00, "8",  175, "[HEAT][AOE]", "152MM HEAT", "M81");
    MainArmory[787] = new Weapon(  1925,    0,     0,   45, 15,  11,  5.00, "8",  175, "[HEAT][AOE]", "152MM HEAT", "M81E1");
    MainArmory[788] = new Weapon(   875,  525,     0,   20, 10,   0,  0.50, "652",   55, "", "7.62MM", "MAG 7.62");
    MainArmory[789] = new Weapon(  2450,    0,     0,   35,  0,  13,  0.00, "10S",  150, "[HEAT][GUID]", "MCLOS misile", "Malyutka");
    MainArmory[790] = new Weapon(   595,  595,     0,   40,  5,   0,  1.00, "64",   55, "", "7.5MM", "MAS 49/56");
    MainArmory[791] = new Weapon(  2100, 1575,  2275,   35, 35,   0,  1.00, "1285",   54, "[AOE]", "27MM", "MAUSER BK-27");
    MainArmory[792] = new Weapon(  2100, 1575,  2800,   35, 35,   0,  1.00, "1285",   54, "[AOE]", "27MM", "MAUSER BK-27");
    MainArmory[793] = new Weapon(  3500,    0,     0,   20,  0,   0, 15.00, "42",  600, "[AOE]", "500KG IRON BOMBS", "MC/GP Mk.10");
    MainArmory[794] = new Weapon(  1575,    0,     0,   55,  0,  26,  0.00, "5S",  150, "[HEAT][GUID]", "SACLOS missile", "Metys-M");
    MainArmory[795] = new Weapon(   980,  595,     0,   40,  0,   0,  0.50, "461",   55, "[STAT]", "7.62MM", "MG3");
    MainArmory[796] = new Weapon(     0,    0,  7700,   65, 65,   0,  5.00, "2s",  200, "[AOE][FF]", "Radar missiles", "MICA EM");
    MainArmory[797] = new Weapon(     0, 2100,  4200,   65, 65,   0,  5.00, "2s",  200, "[AOE][FF]", "IR missiles", "MICA IR");
    MainArmory[798] = new Weapon(  2450,    0,     0,   50,  5,  26,  1.00, "5S",  150, "[HEAT][GUID]", "SACLOS missile", "MILAN F3");
    MainArmory[799] = new Weapon(   525,    0,     0,   30,  0,  14,  0.00, "20",  264, "[HEAT][STAT]", "72.5MM HEAT rocket", "Miniman");
    MainArmory[800] = new Weapon(   770,  595,     0,   45, 25,   0,  0.50, "413",   40, "[CQC]", "5.56MM", "MINIMI");
    MainArmory[801] = new Weapon(  3500,    0,     0,   15,  0,   6,  0.00, "75",  300, "[HEAT][CLUS]", "245KG CLUSTER BOMB", "MK 20 ROCKEYE II");
    MainArmory[802] = new Weapon(  3500,    0,     0,   20,  0,   6,  0.00, "60",  300, "[HEAT][CLUS]", "245KG CLUSTER BOMB", "MK 20 ROCKEYE II");
    MainArmory[803] = new Weapon(  3500,    0,     0,   25,  0,   6,  0.00, "42",  300, "[HEAT][CLUS]", "245KG CLUSTER BOMB", "MK 20 ROCKEYE II");
    MainArmory[804] = new Weapon(  3500,    0,     0,   30,  0,   6,  0.00, "23",  300, "[HEAT][CLUS]", "245KG CLUSTER BOMB", "MK 20 ROCKEYE II x2");
    MainArmory[805] = new Weapon(  3500,    0,     0,   10,  0,   0,  0.00, "23",  150, "[NPLM]", "340KG IRON BOMB", "Mk77x2");
    MainArmory[806] = new Weapon(  3500,    0,     0,   10,  0,   0,  0.00, "42",  150, "[NPLM]", "340KG IRON BOMB", "Mk77");
    MainArmory[807] = new Weapon(  3500,    0,     0,   10,  0,   0,  0.00, "75",  150, "[NPLM]", "340KG IRON BOMB", "Mk77");
    MainArmory[808] = new Weapon(  3500,    0,     0,   40,  0,   0, 10.00, "100",  600, "[AOE]", "227KG IRON BOMB", "Mk82 Snakeyex12");
    MainArmory[809] = new Weapon(  3500,    0,     0,   20,  0,   0, 10.00, "60",  600, "[AOE]", "227KG IRON BOMB", "Mk82x6");
    MainArmory[810] = new Weapon(  3500,    0,     0,   20,  0,   0, 15.00, "42",  600, "[AOE]", "500KG IRON BOMBS", "Mk83x4");
    MainArmory[811] = new Weapon(   455,  455,     0,   20, 20,   0,  1.00, "240",   30, "", "9MM PB", "MP2A1");
    MainArmory[812] = new Weapon(  2100, 1575,  1750,   20, 20,   0,  1.00, "428",   74, "[AOE]", "37mm", "N-37");
    MainArmory[813] = new Weapon(   455,  455,     0,   40, 40,   0,  1.00, "533",   30, "", "9MM PB", "Newnanbu M66");
    MainArmory[814] = new Weapon(  3500,    0,     0,   10,  0,   0,  0.00, "33",  150, "[NPLM]", "340KG BOMB", "Northic II");
    MainArmory[815] = new Weapon(  3500,    0,     0,   15,  0,   0, 15.00, "42",  600, "[NPLM]", "500kg FAB", "ODAB-500");
    MainArmory[816] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "otobreda");
    MainArmory[817] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "P-270 MOSKIT");
    MainArmory[818] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "phalanx");
    MainArmory[819] = new Weapon(   980,  595,     0,   30,  0,   0,  0.50, "275",   55, "[STAT]", "7.62MM", "PKM");
    MainArmory[820] = new Weapon(   980,  595,     0,   30,  0,   0,  0.50, "275",   55, "[STAT]", "7.62MM", "PKM");
    MainArmory[821] = new Weapon(   980,  595,     0,   30,  5,   0,  0.50, "275",   55, "", "7.62MM", "PKM");
    MainArmory[822] = new Weapon(     0, 2100,  3500,   30, 30,   0,  4.00, "2s",  160, "[AOE][FF]", "IR missiles", "PL-2");
    MainArmory[823] = new Weapon(     0, 2100,  3500,   40, 40,   0,  4.00, "2s",  160, "[AOE][FF]", "IR missiles", "PL-5");
    MainArmory[824] = new Weapon(     0, 2100,  3500,   50, 50,   0,  4.00, "2s",  160, "[AOE][FF]", "IR missiles", "PL-7");
    MainArmory[825] = new Weapon(   455,  455,     0,   40, 40,   0,  1.00, "533",   30, "", "9MM PB", "PM-63");
    MainArmory[826] = new Weapon(   700,    0,     0,   70,  0,  24,  0.00, "10",  440, "[HEAT][STAT]", "110MM HEAT ROCKETS", "PzF 3");
    MainArmory[827] = new Weapon(   700,    0,     0,   55,  0,  16,  0.00, "10",  336, "[STAT]", "HEAT", "PzF 44");
    MainArmory[828] = new Weapon(  1925,    0,     0,   30, 10,   8,  3.00, "8",   97, "[KE][AOE]", "84mm", "QF 20-PDR");
    MainArmory[829] = new Weapon(  2100, 1575,  2100,   30, 30,   0,  1.00, "1499",   40, "[AOE]", "20MM", "Quad M39A2");
    MainArmory[830] = new Weapon(     0, 2450,  1960,   55,  0,   0,  5.00, "6S",  200, "[AOE][FF][STAT]", "IR missiles", "QW-1");
    MainArmory[831] = new Weapon(     0,    0,  7000,   40, 40,   0,  5.00, "300",  200, "[AOE][SA][RAD]", "SA Radar missile", "R-23R Vympel");
    MainArmory[832] = new Weapon(     0,    0,  8400,   50, 50,   0,  6.00, "0S",  240, "[AOE][SA]", "SA Radar missile", "R-27RI Vympel");
    MainArmory[833] = new Weapon(     0, 2100,  4550,   45, 45,   0,  6.00, "2s",  240, "[AOE][FF]", "IR missiles", "R-27T Vympel");
    MainArmory[834] = new Weapon(     0,    0, 11200,   30, 30,   0,  7.00, "1s",  280, "[AOE][SA]", "Radar missiles", "R-33E Vympel");
    MainArmory[835] = new Weapon(     0,    0,  7000,   40, 40,   0,  8.00, "0S",  320, "[AOE][SA]", "SA Radar missile", "R-40R Vympel");
    MainArmory[836] = new Weapon(     0, 2100,  4200,   50, 50,   0,  5.00, "2S",  200, "[AOE][FF]", "IR missiles", "R-73M1 Vympel");
    MainArmory[837] = new Weapon(     0,    0,  7700,   60, 60,   0,  5.00, "2s",  200, "[AOE][FF]", "Radar missiles", "R-77");
    MainArmory[838] = new Weapon(     0, 2100,  3500,   40, 40,   0,  4.00, "2S",  160, "[AOE][FF]", "IR missiles", "Rb 24J");
    MainArmory[839] = new Weapon(  2100,    0,     0,   50, 15,  15,  3.00, "7",  121, "[KE][AOE]", "105MM", "D-10T");
    MainArmory[840] = new Weapon(  1925,    0,     0,   45,  0,  11,  3.00, "8",  121, "[KE][STAT]", "105MM", "M68");
    MainArmory[841] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "Bofors L/60");
    MainArmory[842] = new Weapon(  2450,    0,     0,   45, 10,  14,  0.00, "10S",  150, "[HEAT][GUID]", "MCLOS misile", "Susong-Po");
    MainArmory[843] = new Weapon(  3500,    0,     0,    0,  0,   0, 10.00, "1S",  600, "[AOE][FF]", "SALH missile", "GBU-12 PAVEWAY II");
    MainArmory[844] = new Weapon(  3500,    0,     0,    0,  0,   0, 12.00, "1s",  600, "[AOE][FF]", "SALH missile", "GCS-1 M117");
    MainArmory[845] = new Weapon(  1925,    0,     0,   15,  5,  14,  1.00, "8",  179, "[KE][STAT]", "155MM", "GCT F1");
    MainArmory[846] = new Weapon(  1575, 1575,     0,   25, 15,   2,  1.00, "1500",   69, "[KE][AOE]", "30mm", "Gsh-30K");
    MainArmory[847] = new Weapon(   595,  595,     0,   60, 15,   0,  1.00, "120",   55, "", "7.62MM", "Gv M75");
    MainArmory[848] = new Weapon(  1050,  595,     0,   95,  0,   0,  1.00, "15",   55, "[STAT]", "7.62MM", "H&K PSG1");
    MainArmory[849] = new Weapon(     0, 2100,  3500,   25, 25,   0,  4.00, "1S",  160, "[AOE][FF]", "IR missiles", "Rb 28 Falcon");
    MainArmory[850] = new Weapon(     0,    0,  7700,   50, 50,   0,  6.00, "0S",  240, "[AOE][SA]", "SA Radar missile", "Rb 71");
    MainArmory[851] = new Weapon(     0, 2100,  3850,   50, 50,   0,  4.00, "2S",  160, "[AOE][FF]", "IR missiles", "Rb 74");
    MainArmory[852] = new Weapon(  3500,    0,     0,   20,  0,   6,  0.00, "60",  300, "[HEAT][CLUS]", "500kg cluster", "RBK-500");
    MainArmory[853] = new Weapon(  3500,    0,     0,   25,  0,   6,  0.00, "42",  300, "[HEAT][CLUS]", "500kg cluster", "RBK-500");
    MainArmory[854] = new Weapon(     0, 2625,  2100,   45,  0,   0,  4.00, "5S",  160, "[AOE][GUID]", "SACLOS missile", "RBS 70 Mk.2");
    MainArmory[855] = new Weapon(     0, 2800,  2240,   55,  0,   0,  4.00, "5S",  160, "[AOE][GUID]", "SACLOS missile", "RBS 90");
    MainArmory[856] = new Weapon(  1925,    0,     0,   30, 15,  12,  3.00, "10",   90, "[HEAT]", "81mm HEAT", "Recoilless gun");
    MainArmory[857] = new Weapon(  2800,    0,     0,   50, 40,  40,  0.00, "6s",  150, "[HEAT][SA]", "SALH missile", "Refleks");
    MainArmory[858] = new Weapon(  2800,    0,     0,   50, 40,  22,  1.00, "6S",  150, "[HEAT][GUID]", "SALH missile", "Refleks");
    MainArmory[859] = new Weapon(  8750,    0,     0,   40, 40,  80,  4.00, "10S",    0, "[HEAT][FF][RAD][SHIP]", "Radar missiles", "RGM-84 Harpoon");
    MainArmory[860] = new Weapon(  1575, 1575,     0,   25, 10,   2,  1.00, "749",   46, "[KE][AOE]", "20MM", "Rh 202");
    MainArmory[861] = new Weapon(  2100,    0,     0,   60, 35,  16,  3.00, "8",  121, "[KE][AOE]", "105MM", "Rh-105-II");
    MainArmory[862] = new Weapon(  2275,    0,     0,   70, 65,  23,  3.00, "12",  138, "[KE][AOE]", "120MM", "Rh-M-120");
    MainArmory[863] = new Weapon(   525,    0,     0,   50,  5,  14,  1.00, "10",  400, "[HEAT][STAT]", "100mm heat", "RL-100 Blindicide");
    MainArmory[864] = new Weapon(   875,    0,     0,   60,  0,  15,  0.00, "10",  232, "[HEAT][STAT]", "58mm HEAT rocket", "RPG-16D");
    MainArmory[865] = new Weapon(   525,    0,     0,   50,  0,  15,  0.00, "20",  290, "[HEAT][STAT]", "72.5MM HEAT rocket", "RPG-18");
    MainArmory[866] = new Weapon(   525,    0,     0,   30,  0,  10,  0.00, "10",  328, "[HEAT][STAT]", "82MM HEAT Rocket", "RPG-2");
    MainArmory[867] = new Weapon(   875,    0,     0,   70,  0,  24,  0.00, "10",  420, "[HEAT][STAT]", "105mm HEAT rocket", "RPG-29 Vampyr");
    MainArmory[868] = new Weapon(   525,    0,     0,   40,  0,  15,  0.00, "20",  272, "[HEAT][STAT]", "68mm HEAT rocket", "RPG-75");
    MainArmory[869] = new Weapon(   700,    0,     0,   40,  0,  17,  0.00, "10",  332, "[HEAT][STAT]", "83MM HEAT Rocket", "RPG-7V");
    MainArmory[870] = new Weapon(   700,    0,     0,   70,  0,  17,  2.00, "10",  332, "[HEAT][STAT]", "83MM HEAT Rocket", "RPG-7V");
    MainArmory[871] = new Weapon(   525,    0,     0,   50,  0,  24,  0.00, "10",  420, "[HEAT][STAT]", "105mm HEAT rocket", "RPG-7VR");
    MainArmory[872] = new Weapon(   770,  595,     0,   50, 25,   0,  0.50, "409",   55, "[CQC]", "7.62MM", "RPK");
    MainArmory[873] = new Weapon(   770,  595,     0,   50, 25,   0,  0.50, "381",   40, "[CQC]", "5.45mm", "RPK-74");
    MainArmory[874] = new Weapon(   525,    0,     0,   50,  0,   0,  4.00, "10",  225, "[NPLM][STAT]", "Napalm rounds", "RPO Rys");
    MainArmory[875] = new Weapon(  2275,    0,     0,   30, 20,   0,  4.00, "57",  281, "[AOE]", "122mm rockets", "S-13");
    MainArmory[876] = new Weapon(  2450,    0,     0,   30, 30,   0, 11.00, "46",  552, "[AOE]", "240mm rocket", "S-24B");
    MainArmory[877] = new Weapon(  2450,    0,     0,   40, 30,   0, 10.00, "9",  552, "[AOE]", "240mm rocket", "S-24B");
    MainArmory[878] = new Weapon(  1575,    0,     0,   40,  0,   8,  3.00, "6",   98, "[KE][STAT][AOE]", "85MM", "S-53");
    MainArmory[879] = new Weapon(  2450,    0,     0,   30, 30,   0,  2.00, "137",  127, "[AOE]", "55mm rockets", "S-5M");
    MainArmory[880] = new Weapon(  2450,    0,     0,   30, 30,   0,  2.00, "300",  132, "[AOE]", "55mm rockets", "S-5M");
    MainArmory[881] = new Weapon(  5250,    0,     0,   60, 60, 100,  5.00, "1s",    0, "[HEAT][FF][SHIP]", "Radar missiles", "Sea Eagle");
    MainArmory[882] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "Sea Vulcan CIWS");
    MainArmory[883] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "seacat");
    MainArmory[884] = new Weapon(   525,  525,     0,   60, 30,   0,  1.00, "355",   55, "", "7.62MM", "SG-543");
    MainArmory[885] = new Weapon(  2800,    0,     0,   40,  0,  20,  0.00, "10S",  150, "[HEAT][GUID]", "SALH missile", "Sheksna");
    MainArmory[886] = new Weapon(  2450,    0,     0,   30,  0,  16,  0.00, "8S",  150, "[HEAT][GUID]", "SACLOS missile", "SHILLELAGH");
    MainArmory[887] = new Weapon(  2625,    0,     0,   40,  0,  16,  0.00, "8S",  150, "[HEAT][GUID]", "SACLOS missile", "SHILLELAGH-C");
    MainArmory[888] = new Weapon(  3500,    0,     0,   10,  0,   0,  0.00, "42",  150, "[NPLM]", "500kg bombs", "ZB500x4");
    MainArmory[889] = new Weapon( 32200,    0,     0, 3640,  0,   0,  7.00, "5",  350, "[AOE][CORR][STAT][SMK]", "152mm", "ShKH-77");
    MainArmory[890] = new Weapon(  1925,    0,     0,   25,  5,   7,  1.00, "6",  175, "[HEAT]", "152MM HEAT", "SkKh-77");
    MainArmory[891] = new Weapon( 18900,    0,     0, 5460,  0,   0,  7.00, "5",  350, "[AOE][CORR][STAT][SMK]", "152mm", "SkKh-77");
    MainArmory[892] = new Weapon(     0,    0,  7700,   50, 50,   0,  6.00, "0S",  240, "[AOE][SA]", "SA Radar missile", "SKYFLASH");
    MainArmory[893] = new Weapon(     0,    0,  8400,   50, 50,   0,  6.00, "0S",  240, "[AOE][SA]", "SA Radar missile", "SKYFLASH SuperTEMP");
    MainArmory[894] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "SM1 MR block V");
    MainArmory[895] = new Weapon(   875,    0,     0,   70,  0,  21,  2.00, "15",  332, "[HEAT][STAT][AOE]", "83MM HEAT Rocket", "SMAW");
    MainArmory[896] = new Weapon(  2450,    0,     0,   30, 30,   0,  3.00, "196",  157, "[AOE]", "68MM", "SNEB");
    MainArmory[897] = new Weapon(  1050,    0,     0,   55,  0,  16,  2.00, "7",  292, "[HEAT][STAT][AOE]", "73MM HEAT rocket", "SPG-9D");
    MainArmory[898] = new Weapon(  2450,    0,     0,   30, 30,   0,  4.00, "299",  311, "[AOE]", "135MM rocket", "Sprangraket m/56");
    MainArmory[899] = new Weapon(  2450,    0,     0,   30,  0,  17,  0.00, "20S",  150, "[HEAT][GUID]", "SACLOS missile", "SS-11");
    MainArmory[900] = new Weapon(  2625, 3150,  2450,   65,  0,  12,  6.00, "20S",  150, "[HEAT][GUID]", "SACLOS missile", "STARSTREAK");
    MainArmory[901] = new Weapon(   525,  525,     0,   60, 40,   0,  1.00, "533",   40, "", "5.45mm", "STG 943");
    MainArmory[902] = new Weapon(   770,  595,     0,   50, 25,   0,  0.50, "394",   40, "[CQC]", "5.56MM", "STONER 63");
    MainArmory[903] = new Weapon(     0, 2100,  1680,   30, 30,   0,  3.00, "20S",  120, "[AOE][FF]", "IR missiles", "Strela-2M");
    MainArmory[904] = new Weapon(     0, 2100,  1680,   30,  0,   0,  3.00, "6s",  120, "[AOE][FF][STAT]", "IR missiles", "Strela-3");
    MainArmory[905] = new Weapon(     0, 2275,  1820,   50, 50,   0,  3.00, "10S",  120, "[AOE][FF]", "IR missiles", "Strela-3");
    MainArmory[906] = new Weapon(     0,    0,   700,   60, 60,   0,  5.00, "0S",  200, "[AOE][SA]", "SA Radar missile", "Super 530 D");
    MainArmory[907] = new Weapon(     0,    0,  6300,   50, 50,   0,  5.00, "0S",  200, "[AOE][SA]", "SA Radar missile", "Super 530 F");
    MainArmory[908] = new Weapon(  2625,    0,     0,   50,  0,  22,  0.00, "6s",  150, "[HEAT][GUID]", "SALH missile", "Svir");
    MainArmory[909] = new Weapon(  1400,    0,     0,   20,  0,  12,  2.00, "7",   95, "[HEAT][STAT][AOE]", "82MM HEAT", "T21 Tarasnice");
    MainArmory[910] = new Weapon(  1400,    0,     0,   40,  0,  12,  0.00, "7",  328, "[HEAT][STAT]", "82MM HEAT Rocket", "T21 Tarasnice");
    MainArmory[911] = new Weapon(     0, 1575,  2100,   20, 20,   0,  2.00, "88",  132, "[AOE]", "570mm rocket", "T57-2");
    MainArmory[912] = new Weapon(  1750,    0,     0,   35,  0,   8,  3.00, "6",   98, "[KE][STAT][AOE]", "85MM", "T62-85TC");
    MainArmory[913] = new Weapon(  1925,    0,     0,   40,  0,  11,  3.00, "8",   98, "[KE][STAT][AOE]", "85MM", "T62-85TC");
    MainArmory[914] = new Weapon(  1925,    0,     0,   45,  0,  11,  3.00, "6",   98, "[KE][STAT][AOE]", "85MM", "T62-85TC");
    MainArmory[915] = new Weapon(  1400,    0,     0,   15,  5,   2,  0.00, "225",   81, "[KE]", "37mm", "T63");
    MainArmory[916] = new Weapon(  7700,    0,     0, 4550,  0,   0,  1.00, "5",    0, "[NPLM][CORR][STAT]", "130MM rockets", "T63");
    MainArmory[917] = new Weapon(  7700,    0,     0, 4550,  0,   0,  1.00, "8",    0, "[NPLM][CORR][STAT]", "130MM rockets", "T63");
    MainArmory[918] = new Weapon(  7700,    0,     0, 3640,  0,   0,  5.00, "9",  276, "[AOE][CORR][STAT][SMK]", "120mm", "T64");
    MainArmory[919] = new Weapon(  4900,    0,     0, 2730,  0,   0,  3.00, "18",  189, "[AOE][CORR][STAT][SMK]", "82MM", "T67");
    MainArmory[920] = new Weapon(  1925,    0,     0,   40, 10,  10,  3.00, "7",  115, "[KE][AOE]", "100MM", "T69-II");
    MainArmory[921] = new Weapon(  1925,    0,     0,   40, 10,  15,  3.00, "7",  115, "[KE][AOE]", "100MM", "T69-II");
    MainArmory[922] = new Weapon( 14000,    0,     0, 1820,  0,   0,  7.00, "7",  291, "[AOE][CORR][STAT]", "130MM rockets", "T75");
    MainArmory[923] = new Weapon(  2100,    0,     0,   50, 25,  16,  3.00, "7",  121, "[KE][AOE]", "105MM", "T83");
    MainArmory[924] = new Weapon(  2100,    0,     0,   55, 30,  15,  3.00, "8",  121, "[KE][AOE]", "105MM", "T83");
    MainArmory[925] = new Weapon(  2275,    0,     0,   55, 40,  16,  3.00, "8S",  121, "[KE][AOE]", "105MM", "T83");
    MainArmory[926] = new Weapon(  7700,    0,     0, 3640,  0,   0,  5.00, "9",  276, "[AOE][CORR][STAT][SMK]", "120MM", "Tampella");
    MainArmory[927] = new Weapon(  1050, 2800,  2625,   50, 35,   0,  1.00, "277",  120, "[AOE][RAD]", "30mm radar", "Twin 2A38M");
    MainArmory[928] = new Weapon(  2100, 1575,  2275,   30, 30,   0,  1.00, "1071",   60, "[AOE]", "30MM", "Twin ADEN 30");
    MainArmory[929] = new Weapon(  1750,  525,     0,   15,  5,   0,  1.00, "173",   70, "[AOE]", "30mm FRAG", "Twin AGS-17");
    MainArmory[930] = new Weapon(  2100, 1575,  2100,   20, 20,   0,  1.00, "1071",   40, "[AOE]", "20MM", "TWIN COLT MK12");
    MainArmory[931] = new Weapon(  2100, 1575,  2800,   40, 40,   0,  1.00, "1071",   60, "[AOE]", "30MM", "Twin DEFA 550");
    MainArmory[932] = new Weapon(  1050, 2800,  2625,   65,  0,   0,  1.00, "793",  140, "[AOE][RAD][STAT]", "35MM", "Twin GDF-001");
    MainArmory[933] = new Weapon(  1575, 1575,     0,   50,  5,   2,  1.00, "900",   69, "[KE][AOE]", "30MM", "TWIN M230");
    MainArmory[934] = new Weapon(  2100, 1575,  2275,   25, 25,   0,  1.00, "535",   46, "[AOE]", "23MM", "Twin Type 23");
    MainArmory[935] = new Weapon(   980,  595,     0,   30,  0,   0,  0.50, "296",   55, "", "7.62MM", "TYPE 67");
    MainArmory[936] = new Weapon(   525,  525,     0,   45, 23,   0,  1.00, "232",   40, "", "7.62MM", "Type 68");
    MainArmory[937] = new Weapon(   525,  525,     0,   60, 30,   0,  1.00, "160",   40, "", "7.62MM", "Type 68");
    MainArmory[938] = new Weapon(   700,    0,     0,   40,  0,  14,  0.00, "10",  332, "[HEAT][STAT]", "83MM HEAT Rocket", "TYPE 69");
    MainArmory[939] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "Type 69 CIWS");
    MainArmory[940] = new Weapon(   700,    0,     0,   40,  0,  20,  0.00, "10",  340, "[HEAT][STAT]", "85MM HEAT ROCKET", "TYPE 69-I");
    MainArmory[941] = new Weapon(   875,  595,     0,   40,  0,   0,  0.50, "250",   55, "[STAT]", "7.62MM", "Type 73 LMG");
    MainArmory[942] = new Weapon(   350,    0,     0,    0,  0,   0,  0.50, "53",   45, "[NPLM][STAT]", "Napalm rounds", "Type 74");
    MainArmory[943] = new Weapon(   770,  595,     0,   60, 30,   0,  0.50, "409",   55, "[CQC]", "7.62MM", "Type 81");
    MainArmory[944] = new Weapon(  1050,  525,     0,   10,  5,   0,  0.50, "652",   55, "", "7.62MM", "UK vz.59");
    MainArmory[945] = new Weapon(   455,  455,     0,   20, 20,   0,  1.00, "240",   30, "", "9MM PB", "Uzi");
    MainArmory[946] = new Weapon(   455,  455,     0,   40, 40,   0,  1.00, "533",   30, "", "9MM PB", "Uzi");
    MainArmory[947] = new Weapon(  1050,  595,     0,   95,  0,   0,  1.00, "15",   55, "[STAT]", "9MM SP6", "VSS Vintorez");
    MainArmory[948] = new Weapon(  2100,    0,     0,   40, 30,   2,  1.00, "67",  161, "[HEAT][AOE]", "70mm HEAT rockets", "WDU-5002/B CRV7");
    MainArmory[949] = new Weapon(  2275,    0,     0,   65, 60,  17,  3.00, "13",  121, "[KE][AOE]", "105MM", "XM-35");
    MainArmory[950] = new Weapon(  5250,    0,     0,   70, 70,  30,  0.00, "1s",  150, "[HEAT][FF][SEAD]", "AntiRadar missile", "YINGJI-91");
    MainArmory[951] = new Weapon(  3150,    0,     0,   50, 50,  26,  0.00, "2s",  150, "[HEAT][FF]", "TV guidance missile", "YJ-7");
    MainArmory[952] = new Weapon(  8750,    0,     0,   65, 65,  80,  4.00, "10s",   0, "[HEAT][FF][RAD][SHIP]", "Radar missiles", "YJ-82");
    MainArmory[953] = new Weapon(  5600,    0,     0,   80, 80,  80,  4.00, "1s",    0, "[HEAT][FF][SHIP]", "Radar missiles", "YJ-82K");
    MainArmory[954] = new Weapon(  1050,  595,     0,   85,  0,   0,  1.00, "15",   55, "[STAT]", "7.62MM", "Zastava M76");
    MainArmory[955] = new Weapon(  3500,    0,     0,   10,  0,   0,  0.00, "23",  150, "[NPLM]", "500kg bombs", "ZB500x2");
    MainArmory[956] = new Weapon(  3500,    0,     0,   10,  0,   0,  0.00, "75",  150, "[NPLM]", "500kg bombs", "ZB500x8");
    MainArmory[957] = new Weapon(  1050, 2450,  1750,   10,  5,   0,  1.00, "472",   92, "[AOE]", "23MM", "ZU-23-2");
    MainArmory[958] = new Weapon(  1050, 2625,  1750,   25, 15,   0,  1.00, "472",   92, "[AOE]", "23MM", "ZU-23-2");
    MainArmory[959] = new Weapon(  1925,    0,     0,   15,  5,   9,  1.00, "5",  141, "[HEAT][STAT]", "122mm", "2A18");
    MainArmory[960] = new Weapon(  1925,    0,     0,   20,  5,  14,  1.00, "7",  138, "[HEAT][STAT]", "120MM HEAT", "2A51 Nona");
    MainArmory[961] = new Weapon(  1925,    0,     0,   15,  5,  16,  1.00, "8",  175, "[HEAT]", "152mm", "2A64");
    MainArmory[962] = new Weapon(   875,  595,     0,   50, 20,   0,  0.50, "315",   55, "[CQC]", "7.5MM", "AA-52");
    MainArmory[963] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "AK630 CIWS");
    MainArmory[964] = new Weapon(     0,    0,  7700,   50, 50,   0,  6.00, "0S",  240, "[AOE][SA]", "SA Radar missile", "AIM-7M SPARROW");
    MainArmory[965] = new Weapon(     0, 2800,  3850,   60, 60,   0,  5.00, "2S",  200, "[AOE][FF]", "IR missiles", "AIM-9M");
    MainArmory[966] = new Weapon(  1925,    0,     0,   25,  0,  14,  0.00, "19",  138, "[HEAT][STAT]", "120MM HEAT", "AMOS");
    MainArmory[967] = new Weapon(  2800,    0,     0,   50, 35,  21,  1.00, "6S",  150, "[HEAT][SA]", "SALH missile", "ARKAN");
    MainArmory[968] = new Weapon(   700,    0,     0,   45,  0,  25,  0.00, "20",  480, "[HEAT][STAT]", "83MM HEAT Rocket", "AT12T");
    MainArmory[969] = new Weapon(  2625,    0,     0,   40, 30,  17,  0.00, "8S",  150, "[HEAT][SA]", "SALH missile", "BASTION");
    MainArmory[970] = new Weapon(  3500,    0,     0,   10,  0,   0,  0.00, "51",  150, "[NPLM]", "340KG BOMB", "BLU1/B");
    MainArmory[971] = new Weapon(   595,  595,     0,   40, 10,   0,  1.00, "120",   55, "", "7.62MM", "C1A1 SLR");
    MainArmory[972] = new Weapon(   525,  525,     0,   60, 30,   0,  1.00, "533",   40, "", "5.56MM", "C7 Carbine");
    MainArmory[973] = new Weapon(  3500,    0,     0,   20,  0,   6,  0.00, "51",  300, "[HEAT][CLUS]", "340KG BOMB", "CBU-24");
    MainArmory[974] = new Weapon(  3500,    0,     0,   25,  0,   8,  0.00, "42",  300, "[HEAT][CLUS]", "450KG cluster", "CBU-87");
    MainArmory[975] = new Weapon(   770,  595,     0,   50, 25,   0,  0.50, "326",   40, "[CQC]", "5.56MM", "COLT LMG");
    MainArmory[976] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "Crotale CN2");
    MainArmory[977] = new Weapon(  1925,    0,     0,   15,  5,  12,  1.00, "6",  175, "[HEAT][STAT]", "152MM HEAT", "D-22");
    MainArmory[978] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "DARDO CIWS");
    MainArmory[979] = new Weapon(  2100, 1575,  2275,   30, 30,   0,  1.00, "326",   60, "[AOE]", "30MM", "DEFA 550");
    MainArmory[980] = new Weapon(     0,    0,     0,    0,  0,   0,  0.00, "000000",    0, "", "000000", "dual em,erlec 30");
    MainArmory[981] = new Weapon(  1225, 1225,     0,   15, 15,   0,  0.75, "1034",   90, "", "12.7MM", "Dual M2 Browning");
    MainArmory[982] = new Weapon(  1050,    0,     0,   60,  0,  25,  2.00, "5S",  150, "[HEAT][GUID][AOE]", "SACLOS missile", "ERYX");
    MainArmory[983] = new Weapon(  1050,    0,     0,   60,  0,  25,  2.00, "5S",  150, "[HEAT][GUID][AOE]", "SACLOS missile", "ERYX");
    MainArmory[984] = new Weapon(   525,  525,     0,   45, 23,   0,  1.00, "216",   40, "", "5.56MM", "F88 Austeyr");
    MainArmory[985] = new Weapon(   595,  595,     0,   30,  5,   0,  1.00, "75",   55, "", "7.62MM", "FAL");
    MainArmory[986] = new Weapon(   595,  595,     0,   40, 10,   0,  1.00, "120",   55, "", "7.62MM", "FAL");
    MainArmory[987] = new Weapon(   595,  595,     0,   80, 20,   0,  1.00, "266",   55, "", "7.62MM", "FAL");
    MainArmory[988] = new Weapon(   525,  525,     0,   45, 23,   0,  1.00, "232",   40, "", "5.56MM", "FAMAS");
    MainArmory[989] = new Weapon(  1925,    0,     0,   40,  0,  10,  3.00, "13",  121, "[KE][STAT][AOE]", "105MM", "FL12");
    MainArmory[990] = new Weapon(  2100,    0,     0,   50,  0,  12,  3.00, "13",  121, "[KE][STAT][AOE]", "105MM", "FL15");
    MainArmory[991] = new Weapon(   875,  595,     0,   50,  0,   0,  0.50, "340",   55, "[STAT]", "7.62MM", "FN MAG");
    MainArmory[992] = new Weapon(   875,  595,     0,   50,  0,   0,  0.50, "340",   55, "[STAT]", "7.62MM", "FN MAG");
    MainArmory[993] = new Weapon(  2800, 1575,  1575,   40, 40,   6,  1.00, "6157",  138, "[HEAT][AOE]		", "30MM", "GAU-8/A AVENGER");
    MainArmory[994] = new Weapon( 12250,    0,     0, 4550,  0,   0,  1.00, "5",    0, "[NPLM][CORR][STAT]", "240mm", "MD24-F");
    MainArmory[995] = new Weapon(  1575,    0,     0,   20,  0,   3,  0.00, "171",    132, "[KE][STAT]", "57mm", "S-68A");
    MainArmory[996] = new Weapon(  1750,    2100, 2450, 10,  5,   0,  1.00, "400",    2, "[AOE]", "25mm", "Dual Type 61");
    MainArmory[997] = new Weapon(     0,    2100, 2100, 30, 30,   0,  3.00, "6s",   120, "[AOE][FF]", "IR missile", "Strela-2M");
    MainArmory[998] = new Weapon(  6125,    0, 0, 60,  60,  160,  8.00, "10s",    0, "[HEAT][FF][RAD][SHIP]", "Radar missile", "P-120 Malakhit");
    MainArmory[999] = new Weapon(  3500,    0, 0,  10,  0,  0,  0.00, "23",    150, "[NPLM]", "250kg iron bombs", "250-1");
    MainArmory[1000] = new Weapon(     0, 2425, 2100,  60,  60,  0,  5.00, "6s",    200, "[AOE][FF]", "IR missiles", "QW-2");
    MainArmory[1001] = new Weapon(  4375, 2100, 700,  15,  15,  0,  6.00, "24",    58, "[AOE]", "100mm", "100 gun");
    MainArmory[1002] = new Weapon(  2450, 2450, 2450,  15,  5,  0,  1.00, "300",    2, "[AOE]", "57mm", "Dual Type 66");
    MainArmory[1003] = new Weapon(  5075, 2100, 1400,  20,  20,  0,  8.00, "36",   72, "[AOE]", "[DEF]", "Dual AK-130-MR");
    MainArmory[1004] = new Weapon(     0, 3500, 4550,  60,  60,  0,  8.00, "8s",  320, "[AOE][FF][RAD][DEF]", "Radar missile", "Shtil-1");
    MainArmory[1005] = new Weapon(  4900, 2100, 700,  15,  15,  0,  8.00, "33",    72, "[AOE]", "130mm", "Dual Type 76-130");
    MainArmory[1006] = new Weapon(  6125,    0, 0,  50,  50, 100,  5.00, "10s",    0, "[HEAT][FF][RAD][SHIP]", "Radar missile", "Hai Ying-1J");
    MainArmory[1007] = new Weapon(  4375, 2100, 140,  25,  25,  0,  6.00, "24",    58, "[AOE][DEF]", "120mm", "Dual PJ-33A");
    MainArmory[1008] = new Weapon(     0, 2800, 2800,  60,  60,  0,  5.00, "12s",    200, "[AOE][FF][RAD][DEF]", "Radar missile", "HQ-7");
    MainArmory[1009] = new Weapon(     0,  2450, 3150,  60, 60,  0,  5.00, "1s",    300, "[AOE][FF][RAD][DEF]", "Radar missile", "3K95 Kinzhal");
}

function TransportPair(iside, infID, vehID)
{
    this.iSide = iside;
    this.uID = infID;
    this.vID = vehID;
}

window.TransportLinker = [
        new TransportPair(0,  519,  332),  //TACOM	M35
        new TransportPair(0,  519,  384),  //	M998  HUMVEE
        new TransportPair(0,  519,  674),  //	UH-1H HUEY
        new TransportPair(0,  519,  679),  //	UH-60A BLACKHawk
        new TransportPair(0,  519,  678),  //	UH-1N TWIN HUEY
        new TransportPair(0,   50,  288),  //Assault Engineers	M113A1
        new TransportPair(0,   50,  289),  //	M113A3
        new TransportPair(0,   50,  674),  //	UH-1H HUEY
        new TransportPair(0,   50,  679),  //	UH-60A BLACKHawk
        new TransportPair(0,   50,  678),  //	UH-1N TWIN HUEY
        new TransportPair(0,   42,  332),  //CAVALRY SCOUTS	M35
        new TransportPair(0,   42,  384),  //	M998  HUMVEE
        new TransportPair(0,   42,  282),  //	M113A1 DRAGON
        new TransportPair(0,   42,  290),  //	M113A1 SUPER DRAGON
        new TransportPair(0,   42,  674),  //	UH-1H HUEY
        new TransportPair(0,   42,  679),  //	UH-60A BLACKHawk
        new TransportPair(0,  106,  384),  //Delta Force	M998  HUMVEE
        new TransportPair(0,  106,  527),  //	V-150
        new TransportPair(0,  106,  613),  //	CH-46 PHROG
        new TransportPair(0,  106,  615),  //	CH-47C Chinook
        new TransportPair(0,  218,  384),  //LAAD REDEYE	M998  HUMVEE
        new TransportPair(0,  218,  288),  //	M113A1
        new TransportPair(0,  218,  289),  //	M113A3
        new TransportPair(0,  218,  674),  //	UH-1H HUEY
        new TransportPair(0,  218,  679),  //	UH-60A BLACKHawk
        new TransportPair(0,  218,  678),  //	UH-1N TWIN HUEY
        new TransportPair(0,  219,  384),  //LAAD STINGER A	M998  HUMVEE
        new TransportPair(0,  219,  288),  //	M113A1
        new TransportPair(0,  219,  289),  //	M113A3
        new TransportPair(0,  219,  674),  //	UH-1H HUEY
        new TransportPair(0,  219,  679),  //	UH-60A BLACKHawk
        new TransportPair(0,  219,  678),  //	UH-1N TWIN HUEY
        new TransportPair(0,  832,  384),  //LAAD STINGER C	M998  HUMVEE
        new TransportPair(0,  832,  288),  //	M113A1
        new TransportPair(0,  832,  289),  //	M113A3
        new TransportPair(0,  832,  674),  //	UH-1H HUEY
        new TransportPair(0,  832,  679),  //	UH-60A BLACKHawk
        new TransportPair(0,  832,  678),  //	UH-1N TWIN HUEY
        new TransportPair(0,  472,  384),  //LIGHT RIFLEMEN	M998  HUMVEE
        new TransportPair(0,  472,  674),  //	UH-1H HUEY
        new TransportPair(0,  472,  679),  //	UH-60A BLACKHawk
        new TransportPair(0,  472,  678),  //	UH-1N TWIN HUEY
        new TransportPair(0,  806,  384),  //LIGHT RIFLEMEN 90	M998  HUMVEE
        new TransportPair(0,  806,  674),  //	UH-1H HUEY
        new TransportPair(0,  806,  679),  //	UH-60A BLACKHawk
        new TransportPair(0,  806,  678),  //	UH-1N TWIN HUEY
        new TransportPair(0,  521,  332),  //Navy seals	M35
        new TransportPair(0,  521,  384),  //	M998  HUMVEE
        new TransportPair(0,  521,  527),  //	V-150
        new TransportPair(0,  521,  678),  //	UH-1N TWIN HUEY
        new TransportPair(0,  521,  613),  //	CH-46 PHROG
        new TransportPair(0,  452,  332),  //RANGERS	M35
        new TransportPair(0,  452,  384),  //	M998  HUMVEE
        new TransportPair(0,  452,  527),  //	V-150
        new TransportPair(0,  452,  674),  //	UH-1H HUEY
        new TransportPair(0,  452,  679),  //	UH-60A BLACKHawk
        new TransportPair(0,  452,  615),  //	CH-47C Chinook
        new TransportPair(0,  455,  384),  //RIFLEMEN	M998  HUMVEE
        new TransportPair(0,  455,  288),  //	M113A1
        new TransportPair(0,  455,  289),  //	M113A3
        new TransportPair(0,  455,  330),  //	M2 BRADLEY IFV
        new TransportPair(0,  455,  328),  //	M2A1 BRADLEY IFV
        new TransportPair(0,  455,  329),  //	M2A2 BRADLEY IFV
        new TransportPair(0,  455,  674),  //	UH-1H HUEY
        new TransportPair(0,  455,  679),  //	UH-60A BLACKHawk
        new TransportPair(0,  805,  384),  //RIFLEMEN 90	M998  HUMVEE
        new TransportPair(0,  805,  288),  //	M113A1
        new TransportPair(0,  805,  289),  //	M113A3
        new TransportPair(0,  805,  330),  //	M2 BRADLEY IFV
        new TransportPair(0,  805,  328),  //	M2A1 BRADLEY IFV
        new TransportPair(0,  805,  329),  //	M2A2 BRADLEY IFV
        new TransportPair(0,  805,  674),  //	UH-1H HUEY
        new TransportPair(0,  805,  679),  //	UH-60A BLACKHawk
        new TransportPair(0,  833,  384),  //SMAW	M998  HUMVEE
        new TransportPair(0,  833,  229),  //	LVTP-7
        new TransportPair(0,  833,  230),  //	LVTP-7A1
        new TransportPair(0,  833,  678),  //	UH-1N TWIN HUEY
        new TransportPair(0,  520,  229),  //US MARINES	LVTP-7
        new TransportPair(0,  520,  230),  //	LVTP-7A1
        new TransportPair(0,  520,  678),  //	UH-1N TWIN HUEY
        new TransportPair(0,  520,  613),  //	CH-46 PHROG
        new TransportPair(0,  804,  229),  //US MARINES 90	LVTP-7
        new TransportPair(0,  804,  230),  //	LVTP-7A1
        new TransportPair(0,  804,  678),  //	UH-1N TWIN HUEY
        new TransportPair(0,  804,  613),  //	CH-46 PHROG
        new TransportPair(0,  517,  419),  //HQ Section	Pinzgauer
        new TransportPair(0,  517,  847),  //	STALWART
        new TransportPair(0,  517,  470),  //	SAXON
        new TransportPair(0,  517,  118),  //	FV432
        new TransportPair(0,  517,  632),  //	LYNX AH.1
        new TransportPair(0,  517,  634),  //	LYNX AH.7
        new TransportPair(0,  145,  847),  //FUSILIERS	STALWART
        new TransportPair(0,  145,  470),  //	SAXON
        new TransportPair(0,  145,  118),  //	FV432
        new TransportPair(0,  145,  124),  //	FV519 WARRIOR
        new TransportPair(0,  145,  125),  //	FV510 WARRROR 90
        new TransportPair(0,  145,  863),  //	FV510 WARRIOR MILAN
        new TransportPair(0,  145,  632),  //	LYNX AH.1
        new TransportPair(0,  145,  634),  //	LYNX AH.7
        new TransportPair(0,  809,  847),  //FUSILIERS 90	STALWART
        new TransportPair(0,  809,  470),  //	SAXON
        new TransportPair(0,  809,  118),  //	FV432
        new TransportPair(0,  809,  124),  //	FV519 WARRIOR
        new TransportPair(0,  809,  125),  //	FV510 WARRROR 90
        new TransportPair(0,  809,  863),  //	FV510 WARRIOR MILAN
        new TransportPair(0,  809,  632),  //	LYNX AH.1
        new TransportPair(0,  809,  634),  //	LYNX AH.7
        new TransportPair(0,  148,  419),  //GREEN JACKET	Pinzgauer
        new TransportPair(0,  148,  847),  //	STALWART
        new TransportPair(0,  148,  470),  //	SAXON
        new TransportPair(0,  148,  824),  //	PUMA HC.1
        new TransportPair(0,  518,  847),  //GURKAS	STALWART
        new TransportPair(0,  518,  470),  //	SAXON
        new TransportPair(0,  518,  824),  //	PUMA HC.1
        new TransportPair(0,  811,  847),  //GURKAS 90	STALWART
        new TransportPair(0,  811,  470),  //	SAXON
        new TransportPair(0,  811,  824),  //	PUMA HC.1
        new TransportPair(0,  217,  847),  //LAAD BLOWPIPE	STALWART
        new TransportPair(0,  217,  470),  //	SAXON
        new TransportPair(0,  217,  118),  //	FV432
        new TransportPair(0,  217,  632),  //	LYNX AH.1
        new TransportPair(0,  217,  634),  //	LYNX AH.7
        new TransportPair(0,  180,  847),  //LAAD JAVELIN	STALWART
        new TransportPair(0,  180,  470),  //	SAXON
        new TransportPair(0,  180,  118),  //	FV432
        new TransportPair(0,  180,  632),  //	LYNX AH.1
        new TransportPair(0,  180,  634),  //	LYNX AH.7
        new TransportPair(0,  392,  847),  //MILAN 1	STALWART
        new TransportPair(0,  392,  470),  //	SAXON
        new TransportPair(0,  392,  118),  //	FV432
        new TransportPair(0,  392,  632),  //	LYNX AH.1
        new TransportPair(0,  392,  634),  //	LYNX AH.7
        new TransportPair(0,  814,  847),  //MILAN 2	STALWART
        new TransportPair(0,  814,  470),  //	SAXON
        new TransportPair(0,  814,  118),  //	FV432
        new TransportPair(0,  814,  632),  //	LYNX AH.1
        new TransportPair(0,  814,  634),  //	LYNX AH.7
        new TransportPair(0,  417,  847),  //PARATROOPERS	STALWART
        new TransportPair(0,  417,  470),  //	SAXON
        new TransportPair(0,  417,  632),  //	LYNX AH.1
        new TransportPair(0,  417,  634),  //	LYNX AH.7
        new TransportPair(0,  812,  847),  //PARATROOPERS 90	STALWART
        new TransportPair(0,  812,  470),  //	SAXON
        new TransportPair(0,  812,  632),  //	LYNX AH.1
        new TransportPair(0,  812,  634),  //	LYNX AH.7
        new TransportPair(0,  434,  847),  //ROYAL MARINES	STALWART
        new TransportPair(0,  434,  470),  //	SAXON
        new TransportPair(0,  434,  232),  //	BUFFALO IV
        new TransportPair(0,  434,  121),  //	FV4333 STORMER
        new TransportPair(0,  434,  632),  //	LYNX AH.1
        new TransportPair(0,  434,  634),  //	LYNX AH.7
        new TransportPair(0,  813,  847),  //ROYAL MARINES 90	STALWART
        new TransportPair(0,  813,  470),  //	SAXON
        new TransportPair(0,  813,  121),  //	FV4333 STORMER
        new TransportPair(0,  813,  632),  //	LYNX AH.1
        new TransportPair(0,  813,  634),  //	LYNX AH.7
        new TransportPair(0,  464,  632),  //SAS	LYNX AH.1
        new TransportPair(0,  464,  634),  //	LYNX AH.7
        new TransportPair(0,  464,  824),  //	PUMA HC.1
        new TransportPair(0,  808,  419),  //SBS	Pinzgauer
        new TransportPair(0,  808,  847),  //	STALWART
        new TransportPair(0,  808,  470),  //	SAXON
        new TransportPair(0,  808,  632),  //	LYNX AH.1
        new TransportPair(0,  808,  634),  //	LYNX AH.7
        new TransportPair(0,  808,  824),  //	PUMA HC.1
        new TransportPair(0,  492,  129),  //TERRITORIALS	FV603 Saracen
        new TransportPair(0,   01,  539),  //Groupe de CMDT	VRLA
        new TransportPair(0,   01,  528),  //	VAB
        new TransportPair(0,   01,  532),  //	VAB T20/13
        new TransportPair(0,   01,  657),  //	PUMA 330H
        new TransportPair(0,   01,  599),  //	AS565 PANTHER
        new TransportPair(0,   39,  843),  //ATGM MILAN F1	AMX-13 VTT
        new TransportPair(0,   39,  528),  //	VAB
        new TransportPair(0,   39,  532),  //	VAB T20/13
        new TransportPair(0,   39,  657),  //	PUMA 330H
        new TransportPair(0,   39,  599),  //	AS565 PANTHER
        new TransportPair(0,   40,  843),  //ATGM MILAN F2	AMX-13 VTT
        new TransportPair(0,   40,  528),  //	VAB
        new TransportPair(0,   40,  532),  //	VAB T20/13
        new TransportPair(0,   40,   05),  //	AMX-10P
        new TransportPair(0,   40,  657),  //	PUMA 330H
        new TransportPair(0,   40,  599),  //	AS565 PANTHER
        new TransportPair(0,  800,  843),  //ATGM MILAN F3	AMX-13 VTT
        new TransportPair(0,  800,  528),  //	VAB
        new TransportPair(0,  800,  532),  //	VAB T20/13
        new TransportPair(0,  800,   05),  //	AMX-10P
        new TransportPair(0,  800,  657),  //	PUMA 330H
        new TransportPair(0,  800,  599),  //	AS565 PANTHER
        new TransportPair(0,   98,  843),  //CHASSEURS	AMX-13 VTT
        new TransportPair(0,   98,  528),  //	VAB
        new TransportPair(0,   98,  532),  //	VAB T20/13
        new TransportPair(0,   98,   05),  //	AMX-10P
        new TransportPair(0,   98,  657),  //	PUMA 330H
        new TransportPair(0,   99,  843),  //CHASSEURS 85	AMX-13 VTT
        new TransportPair(0,   99,  528),  //	VAB
        new TransportPair(0,   99,  532),  //	VAB T20/13
        new TransportPair(0,   99,   05),  //	AMX-10P
        new TransportPair(0,   99,  657),  //	PUMA 330H
        new TransportPair(0,  110,  528),  //COMMANDO-MARINE	VAB
        new TransportPair(0,  110,  532),  //	VAB T20/13
        new TransportPair(0,  110,  657),  //	PUMA 330H
        new TransportPair(0,  110,  661),  //	PUMA 330H PIRATE
        new TransportPair(0,  110,  599),  //	AS565 PANTHER
        new TransportPair(0,  416,  539),  //COMMANDOS PARA	VRLA
        new TransportPair(0,  416,  528),  //	VAB
        new TransportPair(0,  416,  532),  //	VAB T20/13
        new TransportPair(0,  416,  657),  //	PUMA 330H
        new TransportPair(0,  416,  661),  //	PUMA 330H PIRATE
        new TransportPair(0,  156,  539),  //HUSSARDS	VRLA
        new TransportPair(0,  156,  843),  //	AMX-13 VTT
        new TransportPair(0,  156,  528),  //	VAB
        new TransportPair(0,  156,  532),  //	VAB T20/13
        new TransportPair(0,  156,  657),  //	PUMA 330H
        new TransportPair(0,  156,  661),  //	PUMA 330H PIRATE
        new TransportPair(0,  801,  539),  //HUSSARDS 85	VRLA
        new TransportPair(0,  801,  843),  //	AMX-13 VTT
        new TransportPair(0,  801,  528),  //	VAB
        new TransportPair(0,  801,  532),  //	VAB T20/13
        new TransportPair(0,  801,  657),  //	PUMA 330H
        new TransportPair(0,  801,  661),  //	PUMA 330H PIRATE
        new TransportPair(0,  236,  528),  //LEGION	VAB
        new TransportPair(0,  236,  532),  //	VAB T20/13
        new TransportPair(0,  236,  657),  //	PUMA 330H
        new TransportPair(0,  236,  661),  //	PUMA 330H PIRATE
        new TransportPair(0,  237,  528),  //LEGION 90	VAB
        new TransportPair(0,  237,  532),  //	VAB T20/13
        new TransportPair(0,  237,  657),  //	PUMA 330H
        new TransportPair(0,  237,  661),  //	PUMA 330H PIRATE
        new TransportPair(0,  803,  843),  //MISTRAL	AMX-13 VTT
        new TransportPair(0,  803,  528),  //	VAB
        new TransportPair(0,  803,  532),  //	VAB T20/13
        new TransportPair(0,  803,   05),  //	AMX-10P
        new TransportPair(0,  803,  657),  //	PUMA 330H
        new TransportPair(0,  803,  599),  //	AS565 PANTHER
        new TransportPair(0,  454,  843),  //REZERVISTES	AMX-13 VTT
        new TransportPair(0,  433,  528),  //RIMa	VAB
        new TransportPair(0,  433,  532),  //	VAB T20/13
        new TransportPair(0,  433,  657),  //	PUMA 330H
        new TransportPair(0,  433,  599),  //	AS565 PANTHER
        new TransportPair(0,  802,  528),  //RIMa 85	VAB
        new TransportPair(0,  802,  532),  //	VAB T20/13
        new TransportPair(0,  802,  657),  //	PUMA 330H
        new TransportPair(0,  802,  599),  //	AS565 PANTHER
        new TransportPair(0,  468,  843),  //SAPEURS	AMX-13 VTT
        new TransportPair(0,  468,  528),  //	VAB
        new TransportPair(0,  468,  532),  //	VAB T20/13
        new TransportPair(0,  468,  657),  //	PUMA 330H
        new TransportPair(0,  468,  599),  //	AS565 PANTHER
        new TransportPair(0,  429,  390),  //Fuehrungsgruppe	MD Jupiter
        new TransportPair(0,  429,  496),  //	Tpz FUCHS
        new TransportPair(0,  429,  497),  //	Tpz FUCHS MILAN
        new TransportPair(0,  429,  621),  //	DORNIER 205
        new TransportPair(0,   53,  390),  //BGS	MD Jupiter
        new TransportPair(0,   53,  496),  //	Tpz FUCHS
        new TransportPair(0,   53,  497),  //	Tpz FUCHS MILAN
        new TransportPair(0,   53,  291),  //	M113A1G
        new TransportPair(0,   53,  621),  //	DORNIER 205
        new TransportPair(0,   53,  856),  //	TrTrsp CH-53G
        new TransportPair(0,  487,  496),  //DECKUNGSGRUPPE	Tpz FUCHS
        new TransportPair(0,  487,  497),  //	Tpz FUCHS MILAN
        new TransportPair(0,  487,  291),  //	M113A1G
        new TransportPair(0,  487,  394),  //	MARDER 1
        new TransportPair(0,  487,  395),  //	MARDER 1A1
        new TransportPair(0,  487,  396),  //	MARDER 1A2
        new TransportPair(0,  487,  397),  //	MARDER 1A3
        new TransportPair(0,  487,  621),  //	DORNIER 205
        new TransportPair(0,  430,  496),  //FALLSCHIRMJAEGER	Tpz FUCHS
        new TransportPair(0,  430,  497),  //	Tpz FUCHS MILAN
        new TransportPair(0,  430,  621),  //	DORNIER 205
        new TransportPair(0,  430,  856),  //	TrTrsp CH-53G
        new TransportPair(0,  818,  496),  //FALLSCHIRMJAEGER 90	Tpz FUCHS
        new TransportPair(0,  818,  497),  //	Tpz FUCHS MILAN
        new TransportPair(0,  818,  621),  //	DORNIER 205
        new TransportPair(0,  818,  856),  //	TrTrsp CH-53G
        new TransportPair(0,  134,  390),  //FERNSPAEHER	MD Jupiter
        new TransportPair(0,  134,  496),  //	Tpz FUCHS
        new TransportPair(0,  134,  497),  //	Tpz FUCHS MILAN
        new TransportPair(0,  134,  621),  //	DORNIER 205
        new TransportPair(0,  134,  856),  //	TrTrsp CH-53G
        new TransportPair(0,  827,  496),  //FLIEGERFAUST	Tpz FUCHS
        new TransportPair(0,  827,  497),  //	Tpz FUCHS MILAN
        new TransportPair(0,  827,  291),  //	M113A1G
        new TransportPair(0,  827,  621),  //	DORNIER 205
        new TransportPair(0,  143,  496),  //FLIEGERFAUST 2	Tpz FUCHS
        new TransportPair(0,  143,  497),  //	Tpz FUCHS MILAN
        new TransportPair(0,  143,  291),  //	M113A1G
        new TransportPair(0,  143,  621),  //	DORNIER 205
        new TransportPair(0,  153,  291),  //HEIMATSCHUETZEN	M113A1G
        new TransportPair(0,  177,  496),  //Jaeger	Tpz FUCHS
        new TransportPair(0,  177,  497),  //	Tpz FUCHS MILAN
        new TransportPair(0,  177,  291),  //	M113A1G
        new TransportPair(0,  177,  621),  //	DORNIER 205
        new TransportPair(0,  176,  496),  //PALR MILAN	Tpz FUCHS
        new TransportPair(0,  176,  497),  //	Tpz FUCHS MILAN
        new TransportPair(0,  176,  291),  //	M113A1G
        new TransportPair(0,  176,  621),  //	DORNIER 205
        new TransportPair(0,  175,  496),  //PALR MILAN 2	Tpz FUCHS
        new TransportPair(0,  175,  497),  //	Tpz FUCHS MILAN
        new TransportPair(0,  175,  291),  //	M113A1G
        new TransportPair(0,  175,  621),  //	DORNIER 205
        new TransportPair(0,  413,  291),  //Panzergrenadiere	M113A1G
        new TransportPair(0,  413,  394),  //	MARDER 1
        new TransportPair(0,  413,  395),  //	MARDER 1A1
        new TransportPair(0,  413,  396),  //	MARDER 1A2
        new TransportPair(0,  413,  397),  //	MARDER 1A3
        new TransportPair(0,  413,  866),  //	Marder 2
        new TransportPair(0,  414,  291),  //Panzergrenadiere 90	M113A1G
        new TransportPair(0,  414,  394),  //	MARDER 1
        new TransportPair(0,  414,  395),  //	MARDER 1A1
        new TransportPair(0,  414,  396),  //	MARDER 1A2
        new TransportPair(0,  414,  397),  //	MARDER 1A3
        new TransportPair(0,  414,  866),  //	Marder 2
        new TransportPair(0,   57,  551),  //Command Squad	M35
        new TransportPair(0,   57,   45),  //	GRIZZLY
        new TransportPair(0,   57,   55),  //	Bison
        new TransportPair(0,   57,  608),  //	CH-118
        new TransportPair(0,   57,  609),  //	CH-135
        new TransportPair(0,  544,   45),  //BLOWPIPE	GRIZZLY
        new TransportPair(0,  544,   55),  //	Bison
        new TransportPair(0,  544,  546),  //	M113A1
        new TransportPair(0,  544,  608),  //	CH-118
        new TransportPair(0,  544,  609),  //	CH-135
        new TransportPair(0,  540,   45),  //CANADIAN AIRBORNE	GRIZZLY
        new TransportPair(0,  540,   55),  //	Bison
        new TransportPair(0,  540,  608),  //	CH-118
        new TransportPair(0,  540,  609),  //	CH-135
        new TransportPair(0,  540,  857),  //	CH-147
        new TransportPair(0,  815,   45),  //CANADIAN AIRBORNE 90	GRIZZLY
        new TransportPair(0,  815,   55),  //	Bison
        new TransportPair(0,  815,  608),  //	CH-118
        new TransportPair(0,  815,  609),  //	CH-135
        new TransportPair(0,  815,  857),  //	CH-147
        new TransportPair(0,  817,   45),  //CANADIAN RIFLES 85	GRIZZLY
        new TransportPair(0,  817,   55),  //	Bison
        new TransportPair(0,  817,  546),  //	M113A1
        new TransportPair(0,  817,   69),  //	TH-495
        new TransportPair(0,   02,   45),  //CANADIAN RIFLES	GRIZZLY
        new TransportPair(0,   02,   55),  //	Bison
        new TransportPair(0,   02,  546),  //	M113A1
        new TransportPair(0,   60,   45),  //ERYX	GRIZZLY
        new TransportPair(0,   60,   55),  //	Bison
        new TransportPair(0,   60,  546),  //	M113A1
        new TransportPair(0,   60,  608),  //	CH-118
        new TransportPair(0,   60,  609),  //	CH-135
        new TransportPair(0,  825,   45),  //Highlanders	GRIZZLY
        new TransportPair(0,  825,   55),  //	Bison
        new TransportPair(0,  825,  608),  //	CH-118
        new TransportPair(0,  825,  609),  //	CH-135
        new TransportPair(0,  825,  857),  //	CH-147
        new TransportPair(0,  828,   45),  //HIGHLANDERS 90	GRIZZLY
        new TransportPair(0,  828,   55),  //	Bison
        new TransportPair(0,  828,  608),  //	CH-118
        new TransportPair(0,  828,  609),  //	CH-135
        new TransportPair(0,  828,  857),  //	CH-147
        new TransportPair(0,  829,   45),  //JAVELIN G/L	GRIZZLY
        new TransportPair(0,  829,   55),  //	Bison
        new TransportPair(0,  829,  546),  //	M113A1
        new TransportPair(0,  829,  608),  //	CH-118
        new TransportPair(0,  829,  609),  //	CH-135
        new TransportPair(0,  387,   45),  //MAW	GRIZZLY
        new TransportPair(0,  387,   55),  //	Bison
        new TransportPair(0,  387,  546),  //	M113A1
        new TransportPair(0,  387,  608),  //	CH-118
        new TransportPair(0,  387,  609),  //	CH-135
        new TransportPair(0,  418,  551),  //PATHFINDERS	M35
        new TransportPair(0,  418,   45),  //	GRIZZLY
        new TransportPair(0,  418,   55),  //	Bison
        new TransportPair(0,  418,  857),  //	CH-147
        new TransportPair(0,  147,   45),  //PIONEERS	GRIZZLY
        new TransportPair(0,  147,   55),  //	Bison
        new TransportPair(0,  147,  546),  //	M113A1
        new TransportPair(0,  147,   69),  //	TH-495
        new TransportPair(0,  147,  608),  //	CH-118
        new TransportPair(0,  147,  609),  //	CH-135
        new TransportPair(0,   68,  551),  //RECCE	M35
        new TransportPair(0,   68,   45),  //	GRIZZLY
        new TransportPair(0,   68,   55),  //	Bison
        new TransportPair(0,   68,  857),  //	CH-147
        new TransportPair(0,  795,  557),  //Stabsdeling	MD Jupiter
        new TransportPair(0,  795,  553),  //	M/113A1
        new TransportPair(0,  795,  902),  //	M/113G
        new TransportPair(0,  795,  846),  //	LYNX
        new TransportPair(0,  107,  553),  //DRAGONER	M/113A1
        new TransportPair(0,  107,  902),  //	M/113G
        new TransportPair(0,  894,  557),  //FKP	MD Jupiter
        new TransportPair(0,  894,  846),  //	LYNX
        new TransportPair(0,  151,  374),  //HAER HJEMMEVAERNET	M6 MOSENGRIS
        new TransportPair(0,  897,  553),  //ILDSTOTTEDRUPPE	M/113A1
        new TransportPair(0,  897,  902),  //	M/113G
        new TransportPair(0,  896,  553),  //ILDSTOTTEDRUPPE 85	M/113A1
        new TransportPair(0,  896,  902),  //	M/113G
        new TransportPair(0,  174,  557),  //JAEGERE	MD Jupiter
        new TransportPair(0,  174,  846),  //	LYNX
        new TransportPair(0,  898,  557),  //JAEGERE 90	MD Jupiter
        new TransportPair(0,  898,  846),  //	LYNX
        new TransportPair(0,  254,  553),  //LIVGARDEN	M/113A1
        new TransportPair(0,  254,  902),  //	M/113G
        new TransportPair(0,  901,  553),  //LIVRAGDEN 85	M/113A1
        new TransportPair(0,  901,  902),  //	M/113G
        new TransportPair(0,  152,  553),  //LLRkt HAMLET	M/113A1
        new TransportPair(0,  152,  902),  //	M/113G
        new TransportPair(0,  904,  553),  //LLRkt M/93	M/113A1
        new TransportPair(0,  904,  902),  //	M/113G
        new TransportPair(0,  146,  557),  //SPEJDERNE	MD Jupiter
        new TransportPair(0,  146,  553),  //	M/113A1
        new TransportPair(0,  146,  902),  //	M/113G
        new TransportPair(0,  146,  846),  //	LYNX
        new TransportPair(0,  797,  493),  //Stabsgrupp	TGB 13
        new TransportPair(0,  797,  872),  //	AMFIBIEBIL
        new TransportPair(0,  797,  882),  //	PATGB XA-180
        new TransportPair(0,  797,  627),  //	HKP 3C
        new TransportPair(0,  133,  493),  //FALLSKAERMSAEGARE 	TGB 13
        new TransportPair(0,  133,  872),  //	AMFIBIEBIL
        new TransportPair(0,  133,  882),  //	PATGB XA-180
        new TransportPair(0,  133,  627),  //	HKP 3C
        new TransportPair(0,  133,  612),  //	HKP 4C
        new TransportPair(0,  155,  494),  //HEMVAERNSMAEN	TGB m/42
        new TransportPair(0,  210,  872),  //KUSTJAEGARE	AMFIBIEBIL
        new TransportPair(0,  210,  627),  //	HKP 3C
        new TransportPair(0,  210,  612),  //	HKP 4C
        new TransportPair(0,  876,  872),  //KUSTJAEGARE 90	AMFIBIEBIL
        new TransportPair(0,  876,  627),  //	HKP 3C
        new TransportPair(0,  876,  612),  //	HKP 4C
        new TransportPair(0,  427,  494),  //Lvgrp RBS 70	TGB m/42
        new TransportPair(0,  427,  872),  //	AMFIBIEBIL
        new TransportPair(0,  427,  408),  //	PBV 302A
        new TransportPair(0,  427,  483),  //	STRF 9040
        new TransportPair(0,  427,  627),  //	HKP 3C
        new TransportPair(0,  831,  494),  //Lvgrp RBS 90	TGB m/42
        new TransportPair(0,  831,  872),  //	AMFIBIEBIL
        new TransportPair(0,  831,  882),  //	PATGB XA-180
        new TransportPair(0,  831,  408),  //	PBV 302A
        new TransportPair(0,  831,  483),  //	STRF 9040
        new TransportPair(0,  831,  627),  //	HKP 3C
        new TransportPair(0,  878,  494),  //NORRLANDSJAEGARE	TGB m/42
        new TransportPair(0,  878,  872),  //	AMFIBIEBIL
        new TransportPair(0,  878,  882),  //	PATGB XA-180
        new TransportPair(0,  878,  627),  //	HKP 3C
        new TransportPair(0,  878,  612),  //	HKP 4C
        new TransportPair(0,  412,  494),  //Pansarskytte	TGB m/42
        new TransportPair(0,  412,  872),  //	AMFIBIEBIL
        new TransportPair(0,  412,  408),  //	PBV 302A
        new TransportPair(0,  412,  483),  //	STRF 9040
        new TransportPair(0,  412,  627),  //	HKP 3C
        new TransportPair(0,  881,  494),  //Pansarskytte 90	TGB m/42
        new TransportPair(0,  881,  872),  //	AMFIBIEBIL
        new TransportPair(0,  881,  882),  //	PATGB XA-180
        new TransportPair(0,  881,  408),  //	PBV 302A
        new TransportPair(0,  881,  483),  //	STRF 9040
        new TransportPair(0,  881,  627),  //	HKP 3C
        new TransportPair(0,  425,  494),  //Pvgrp RBS 56	TGB m/42
        new TransportPair(0,  425,  872),  //	AMFIBIEBIL
        new TransportPair(0,  425,  882),  //	PATGB XA-180
        new TransportPair(0,  425,  408),  //	PBV 302A
        new TransportPair(0,  425,  483),  //	STRF 9040
        new TransportPair(0,  425,  627),  //	HKP 3C
        new TransportPair(0,  887,  494),  //Stormpionjaerer	TGB m/42
        new TransportPair(0,  887,  872),  //	AMFIBIEBIL
        new TransportPair(0,  887,  882),  //	PATGB XA-180
        new TransportPair(0,  887,  408),  //	PBV 302A
        new TransportPair(0,  887,  483),  //	STRF 9040
        new TransportPair(0,  796,  372),  //Kommandoplass	M621
        new TransportPair(0,  796,  473),  //	XA-180
        new TransportPair(0,  796,  920),  //	XA-186NO
        new TransportPair(0,  796,  673),  //	UH-1B
        new TransportPair(0,  796,  935),  //	BELL 412
        new TransportPair(0,  907,  473),  //FALLSKJERMJEGER	XA-180
        new TransportPair(0,  907,  920),  //	XA-186NO
        new TransportPair(0,  907,  673),  //	UH-1B
        new TransportPair(0,  907,  935),  //	BELL 412
        new TransportPair(0,  907,  854),  //	BELL 204
        new TransportPair(0,  826,  473),  //FALLSKJERMSJEGER 90	XA-180
        new TransportPair(0,  826,  920),  //	XA-186NO
        new TransportPair(0,  826,  673),  //	UH-1B
        new TransportPair(0,  826,  935),  //	BELL 412
        new TransportPair(0,  826,  854),  //	BELL 204
        new TransportPair(0,  906,  473),  //FSK	XA-180
        new TransportPair(0,  906,  920),  //	XA-186NO
        new TransportPair(0,  906,  673),  //	UH-1B
        new TransportPair(0,  906,  935),  //	BELL 412
        new TransportPair(0,  906,  854),  //	BELL 204
        new TransportPair(0,  149,  473),  //GEVAERMENN	XA-180
        new TransportPair(0,  149,  920),  //	XA-186NO
        new TransportPair(0,  149,  560),  //	NM113
        new TransportPair(0,  149,  403),  //	NM135
        new TransportPair(0,  149,  673),  //	UH-1B
        new TransportPair(0,  149,  935),  //	BELL 412
        new TransportPair(0,  908,  473),  //GEVAERMENN 90	XA-180
        new TransportPair(0,  908,  920),  //	XA-186NO
        new TransportPair(0,  908,  560),  //	NM113
        new TransportPair(0,  908,  403),  //	NM135
        new TransportPair(0,  908,  905),  //	CV9030N
        new TransportPair(0,  908,  673),  //	UH-1B
        new TransportPair(0,  908,  935),  //	BELL 412
        new TransportPair(0,  154,  560),  //LHV	NM113
        new TransportPair(0,  401,  372),  //MARINEJEGER	M621
        new TransportPair(0,  401,  473),  //	XA-180
        new TransportPair(0,  401,  920),  //	XA-186NO
        new TransportPair(0,  401,  673),  //	UH-1B
        new TransportPair(0,  401,  935),  //	BELL 412
        new TransportPair(0,  401,  854),  //	BELL 204
        new TransportPair(0,  830,  372),  //OPPKLARING	M621
        new TransportPair(0,  830,  560),  //	NM113
        new TransportPair(0,  830,  473),  //	XA-180
        new TransportPair(0,  830,  920),  //	XA-186NO
        new TransportPair(0,  830,  673),  //	UH-1B
        new TransportPair(0,  830,  935),  //	BELL 412
        new TransportPair(0,  830,  854),  //	BELL 204
        new TransportPair(0,  426,  473),  //RBS 70	XA-180
        new TransportPair(0,  426,  920),  //	XA-186NO
        new TransportPair(0,  426,  560),  //	NM113
        new TransportPair(0,  426,  673),  //	UH-1B
        new TransportPair(0,  426,  935),  //	BELL 412
        new TransportPair(0,  916,  473),  //RBS 70 Mk.2	XA-180
        new TransportPair(0,  916,  920),  //	XA-186NO
        new TransportPair(0,  916,  560),  //	NM113
        new TransportPair(0,  916,  673),  //	UH-1B
        new TransportPair(0,  916,  935),  //	BELL 412
        new TransportPair(0,  481,  473),  //STORMER	XA-180
        new TransportPair(0,  481,  920),  //	XA-186NO
        new TransportPair(0,  481,  560),  //	NM113
        new TransportPair(0,  481,  403),  //	NM135
        new TransportPair(0,  481,  905),  //	CV9030N
        new TransportPair(0,  481,  673),  //	UH-1B
        new TransportPair(0,  481,  935),  //	BELL 412
        new TransportPair(0,  918,  473),  //STORMINGENIOR	XA-180
        new TransportPair(0,  918,  920),  //	XA-186NO
        new TransportPair(0,  918,  560),  //	NM113
        new TransportPair(0,  918,  403),  //	NM135
        new TransportPair(0,  918,  673),  //	UH-1B
        new TransportPair(0,  918,  935),  //	BELL 412
        new TransportPair(0,  917,  473),  //STORMINGENIOR 90	XA-180
        new TransportPair(0,  917,  920),  //	XA-186NO
        new TransportPair(0,  917,  560),  //	NM113
        new TransportPair(0,  917,  403),  //	NM135
        new TransportPair(0,  917,  905),  //	CV9030N
        new TransportPair(0,  917,  673),  //	UH-1B
        new TransportPair(0,  917,  935),  //	BELL 412
        new TransportPair(0,   22,  522),  //TAC HQ	UNIMOG
        new TransportPair(0,   22,   37),  //	ASLAV-PC
        new TransportPair(0,   22,  675),  //	UH-1H HUEY
        new TransportPair(0,   22,  655),  //	S-70
        new TransportPair(0,   28,   48),  //ASSAULT PINOEERS	STOLLY
        new TransportPair(0,   28,  279),  //	M113A1 30/30
        new TransportPair(0,   28,  280),  //	M113A1 30/50
        new TransportPair(0,   28,  287),  //	M113A1 MINIGUN
        new TransportPair(0,   28,   37),  //	ASLAV-PC
        new TransportPair(0,   28,  675),  //	UH-1H HUEY
        new TransportPair(0,   28,  655),  //	S-70
        new TransportPair(0,   23,   48),  //COMMANDOS	STOLLY
        new TransportPair(0,   23,  279),  //	M113A1 30/30
        new TransportPair(0,   23,  280),  //	M113A1 30/50
        new TransportPair(0,   23,  675),  //	UH-1H HUEY
        new TransportPair(0,   23,  655),  //	S-70
        new TransportPair(0,  798,   48),  //COMMANDOS 90	STOLLY
        new TransportPair(0,  798,  279),  //	M113A1 30/30
        new TransportPair(0,  798,  280),  //	M113A1 30/50
        new TransportPair(0,  798,   37),  //	ASLAV-PC
        new TransportPair(0,  798,  675),  //	UH-1H HUEY
        new TransportPair(0,  798,  655),  //	S-70
        new TransportPair(0,   24,   48),  //DIGGERS	STOLLY
        new TransportPair(0,   24,  279),  //	M113A1 30/30
        new TransportPair(0,   24,  280),  //	M113A1 30/50
        new TransportPair(0,  799,   48),  //DIGGERS 90	STOLLY
        new TransportPair(0,  799,  279),  //	M113A1 30/30
        new TransportPair(0,  799,  280),  //	M113A1 30/50
        new TransportPair(0,  799,   37),  //	ASLAV-PC
        new TransportPair(0,   25,   48),  //MILAN	STOLLY
        new TransportPair(0,   25,  279),  //	M113A1 30/30
        new TransportPair(0,   25,  280),  //	M113A1 30/50
        new TransportPair(0,   25,   37),  //	ASLAV-PC
        new TransportPair(0,   25,  675),  //	UH-1H HUEY
        new TransportPair(0,   25,  655),  //	S-70
        new TransportPair(0,   26,   48),  //MRAAW	STOLLY
        new TransportPair(0,   26,  279),  //	M113A1 30/30
        new TransportPair(0,   26,  280),  //	M113A1 30/50
        new TransportPair(0,   26,  675),  //	UH-1H HUEY
        new TransportPair(0,   26,  655),  //	S-70
        new TransportPair(0,   31,  522),  //NORFORCE	unimog
        new TransportPair(0,   31,   48),  //NORFORCE	STOLLY
        new TransportPair(0,   31,  279),  //	M113A1 30/30
        new TransportPair(0,   31,  280),  //	M113A1 30/50
        new TransportPair(0,   31,   37),  //	ASLAV-PC
        new TransportPair(0,   31,  616),  //	chinook
        new TransportPair(0,   27,  522),  //NZSAS	UNIMOG
        new TransportPair(0,   27,   48),  //	STOLLY
        new TransportPair(0,   27,   37),  //	ASLAV-PC
        new TransportPair(0,   27,  616),  //	CH-47C Chinook
        new TransportPair(0,   29,   48),  //RBS 70	STOLLY
        new TransportPair(0,   29,  279),  //	M113A1 30/30
        new TransportPair(0,   29,  280),  //	M113A1 30/50
        new TransportPair(0,   29,  675),  //	UH-1H HUEY
        new TransportPair(0,   29,  655),  //	S-70
        new TransportPair(0,   30,   48),  //REDEYE	STOLLY
        new TransportPair(0,   30,  279),  //	M113A1 30/30
        new TransportPair(0,   30,  280),  //	M113A1 30/50
        new TransportPair(0,   30,  675),  //	UH-1H HUEY
        new TransportPair(0,   30,  655),  //	S-70
        new TransportPair(0,  807,   48),  //SASR	STOLLY
        new TransportPair(0,  807,   37),  //	ASLAV-PC
        new TransportPair(0,  807,  616),  //	CH-47C Chinook
        new TransportPair(0,  164,  501),  //Honbu-Han	Chugata
        new TransportPair(0,  164,  163),  //	HMV
        new TransportPair(0,  164,  626),  //	UH-1H
        new TransportPair(0,  165,  163),  //CHU-MAT	HMV
        new TransportPair(0,  165,  504),  //	NANA-SAN SHIKI
        new TransportPair(0,  165,  626),  //	UH-1H
        new TransportPair(0,  167,  163),  //HUDOU-REN	HMV
        new TransportPair(0,  167,  868),  //	KYU-ROKU WAPC
        new TransportPair(0,  167,  626),  //	UH-1H
        new TransportPair(0,  167,  630),  //	KV-107 Shirasagi
        new TransportPair(0,  170,  501),  //JSDF RANGERS	Chugata
        new TransportPair(0,  170,  163),  //	HMV
        new TransportPair(0,  170,  868),  //	KYU-ROKU WAPC
        new TransportPair(0,  170,  626),  //	UH-1H
        new TransportPair(0,  170,  630),  //	KV-107 Shirasagi
        new TransportPair(0,  169,  626),  //KUTEI	UH-1H
        new TransportPair(0,  169,  630),  //	KV-107 Shirasagi
        new TransportPair(0,  821,  163),  //KUTEI 90	HMV
        new TransportPair(0,  821,  868),  //	KYU-ROKU WAPC
        new TransportPair(0,  821,  626),  //	UH-1H
        new TransportPair(0,  821,  630),  //	KV-107 Shirasagi
        new TransportPair(0,  168,  163),  //M67-HAN	HMV
        new TransportPair(0,  168,  868),  //	KYU-ROKU WAPC
        new TransportPair(0,  168,  504),  //	NANA-SAN SHIKI
        new TransportPair(0,  168,  515),  //	HACHI-KYU SHIKI
        new TransportPair(0,  168,  626),  //	UH-1H
        new TransportPair(0,  173,  163),  //PSAM	HMV
        new TransportPair(0,  173,  504),  //	NANA-SAN SHIKI
        new TransportPair(0,  173,  626),  //	UH-1H
        new TransportPair(0,  172,  163),  //STINGER	HMV
        new TransportPair(0,  172,  504),  //	NANA-SAN SHIKI
        new TransportPair(0,  172,  626),  //	UH-1H
        new TransportPair(0,  171,  163),  //Syouju-Buntai	HMV
        new TransportPair(0,  171,  504),  //	NANA-SAN SHIKI
        new TransportPair(0,  823,  163),  //Syouju-Buntai 90	HMV
        new TransportPair(0,  823,  868),  //	KYU-ROKU WAPC
        new TransportPair(0,  823,  504),  //	NANA-SAN SHIKI
        new TransportPair(0,  823,  515),  //	HACHI-KYU SHIKI
        new TransportPair(0,  436,  203),  //BONBU	K-511
        new TransportPair(0,  436,  205),  //	KM900
        new TransportPair(0,  436,  676),  //	UH-1H
        new TransportPair(0,  446,  198),  //GONGBYUNG	KM113A1
        new TransportPair(0,  446,  185),  //	K200
        new TransportPair(0,  446,  205),  //	KM900
        new TransportPair(0,  446,  676),  //	UH-1H
        new TransportPair(0,  442,  205),  //HAEBYUNG	KM900
        new TransportPair(0,  442,  231),  //	LVTP-7
        new TransportPair(0,  442,  676),  //	UH-1H
        new TransportPair(0,  820,  205),  //HAEBYUNG 90	KM900
        new TransportPair(0,  820,  231),  //	LVTP-7
        new TransportPair(0,  820,  676),  //	UH-1H
        new TransportPair(0,  443,  198),  //HYU-SAM MISTRAL	KM113A1
        new TransportPair(0,  443,  185),  //	K200
        new TransportPair(0,  443,  205),  //	KM900
        new TransportPair(0,  443,  676),  //	UH-1H
        new TransportPair(0,  444,  198),  //HYU-SAM REDEYE	KM113A1
        new TransportPair(0,  444,  185),  //	K200
        new TransportPair(0,  444,  205),  //	KM900
        new TransportPair(0,  444,  676),  //	UH-1H
        new TransportPair(0,  448,  198),  //HYU-SAM STINGER	KM113A1
        new TransportPair(0,  448,  185),  //	K200
        new TransportPair(0,  448,  205),  //	KM900
        new TransportPair(0,  448,  676),  //	UH-1H
        new TransportPair(0,  441,  198),  //JIKSA-HWAGI-BAN	KM113A1
        new TransportPair(0,  441,  185),  //	K200
        new TransportPair(0,  441,  205),  //	KM900
        new TransportPair(0,  441,  676),  //	UH-1H
        new TransportPair(0,  445,  198),  //SOCHONG-SU	KM113A1
        new TransportPair(0,  445,  185),  //	K200
        new TransportPair(0,  445,  205),  //	KM900
        new TransportPair(0,  445,  676),  //	UH-1H
        new TransportPair(0,  819,  198),  //SOCHONG-SU 85	KM113A1
        new TransportPair(0,  819,  185),  //	K200
        new TransportPair(0,  819,  205),  //	KM900
        new TransportPair(0,  819,  438),  //	KAFV 25
        new TransportPair(0,  819,  439),  //	KAFV 40/50
        new TransportPair(0,  819,  676),  //	UH-1H
        new TransportPair(0,  447,  203),  //SUSAEK-DAE	K-511
        new TransportPair(0,  447,  198),  //	KM113A1
        new TransportPair(0,  447,  185),  //	K200
        new TransportPair(0,  447,  205),  //	KM900
        new TransportPair(0,  447,  670),  //	BELL 205
        new TransportPair(0,  447,  682),  //	UH-60P
        new TransportPair(0,  447,  676),  //	UH-1H
        new TransportPair(0,  435,  203),  //Teukjeonsa	K-511
        new TransportPair(0,  435,  205),  //	KM900
        new TransportPair(0,  435,  670),  //	BELL 205
        new TransportPair(0,  435,  682),  //	UH-60P
        new TransportPair(0,  435,  676),  //	UH-1H
        new TransportPair(0,  449,  205),  //UDT/SEAL	KM900
        new TransportPair(0,  449,  231),  //	LVTP-7
        new TransportPair(0,  449,  670),  //	BELL 205
        new TransportPair(0,  449,  682),  //	UH-60P
        new TransportPair(0,  449,  676),  //	UH-1H
        new TransportPair(0,  437,  198),  //YEBIGUN	KM113A1
        new TransportPair(0,  437,  185),  //	K200
        new TransportPair(0,  980,  946),  //Staf Eenheid	DAF YA 4440
        new TransportPair(0,  980,  990),  //	YP-408 PWI
        new TransportPair(0,  980,  940),  //	AMX-PRI
        new TransportPair(0,  980,  994),  //	YP-765-50
        new TransportPair(0,  980,  993),  //	YP-765-25
        new TransportPair(0,  980, 1005),  //	UH-14
        new TransportPair(0,  947,  966),  //GENIE	M113A1
        new TransportPair(0,  947,  990),  //	YP-408 PWI
        new TransportPair(0,  947,  998),  //	AB-204B
        new TransportPair(0,  948,  990),  //GRENADIERS	YP-408 PWI
        new TransportPair(0,  948,  940),  //	AMX-PRI
        new TransportPair(0,  948,  994),  //	YP-765-50
        new TransportPair(0,  948,  993),  //	YP-765-25
        new TransportPair(0,  948,  998),  //	AB-204B
        new TransportPair(0,  949,  946),  //HUZAREN	DAF YA 4440
        new TransportPair(0,  949,  990),  //	YP-408 PWI
        new TransportPair(0,  949,  966),  //	M113A1
        new TransportPair(0,  949, 1005),  //	UH-14
        new TransportPair(0,  950,  946),  //KCT	DAF YA 4440
        new TransportPair(0,  950,  990),  //	YP-408 PWI
        new TransportPair(0,  950, 1005),  //	UH-14
        new TransportPair(0,  952,  990),  //KORPS MARINIER	YP-408 PWI
        new TransportPair(0,  952,  953),  //	LVT-4
        new TransportPair(0,  952, 1005),  //	UH-14
        new TransportPair(0,  951,  990),  //KORPS MARINIER 95	YP-408 PWI
        new TransportPair(0,  951,  953),  //	LVT-4
        new TransportPair(0,  951, 1005),  //	UH-14
        new TransportPair(0,  973,  946),  //NATRES	DAF YA 4440
        new TransportPair(0,  973,  940),  //	AMX-PRI
        new TransportPair(0,  981,  990),  //STINGER	YP-408 PWI
        new TransportPair(0,  981,  940),  //	AMX-PRI
        new TransportPair(0,  981,  998),  //	AB-204B
        new TransportPair(0,  983,  990),  //STOOTTROEPEN	YP-408 PWI
        new TransportPair(0,  983,  940),  //	AMX-PRI
        new TransportPair(0,  983,  994),  //	YP-765-50
        new TransportPair(0,  983,  993),  //	YP-765-25
        new TransportPair(0,  983,  998),  //	AB-204B
        new TransportPair(0,  982,  990),  //STOOTTROEPEN 95	YP-408 PWI
        new TransportPair(0,  982,  940),  //	AMX-PRI
        new TransportPair(0,  982,  994),  //	YP-765-50
        new TransportPair(0,  982,  993),  //	YP-765-25
        new TransportPair(0,  982,  998),  //	AB-204B
        new TransportPair(0,  985,  990),  //VUURPLOEG	YP-408 PWI
        new TransportPair(0,  985,  940),  //	AMX-PRI
        new TransportPair(0,  985,  998),  //	AB-204B
        new TransportPair(0,  984,  990),  //VUURPLOEG 95	YP-408 PWI
        new TransportPair(0,  984,  940),  //	AMX-PRI
        new TransportPair(0,  984,  998),  //	AB-204B
		    new TransportPair(1,  619,  332), //#command VELITELSKÇ ÿTÇB	TATRA 148
        new TransportPair(1,  619,  424), //	OT-64A
        new TransportPair(1,  619,  425), //	OT-64C
        new TransportPair(1,  619,  644), //	Mi-4T
        new TransportPair(1,  619,  529), //	Mi-8T
        new TransportPair(1,  619,  706), //	Mi-17
        new TransportPair(1,  662,  424), //GRANATOMET AGS-17	OT-64A
        new TransportPair(1,  662,  425), //	OT-64C
        new TransportPair(1,  662,  421), //	OT-62A
        new TransportPair(1,  662,  422), //	OT-62B
        new TransportPair(1,  662,  202), //	OT-62 VYDRA-I
        new TransportPair(1,  662,  203), //	OT-62 VYDRA-II
        new TransportPair(1,  662,  644), //	Mi-4T
        new TransportPair(1,  662,  529), //	Mi-8T
        new TransportPair(1,  662,  706), //	Mi-17
        new TransportPair(1,  668,  424), //LEHKA PECHOTA	OT-64A
        new TransportPair(1,  668,  425), //	OT-64C
        new TransportPair(1,  668,  644), //	Mi-4T
        new TransportPair(1,  668,  529), //	Mi-8T
        new TransportPair(1,  668,  706), //	Mi-17
        new TransportPair(1,  668,  496), //	Mi-25
        new TransportPair(1,  180,  424), //MOTOST?ELCI	OT-64A
        new TransportPair(1,  180,  425), //	OT-64C
        new TransportPair(1,  180,  421), //	OT-62A
        new TransportPair(1,  180,  422), //	OT-62B
        new TransportPair(1,  180,  202), //	OT-62 VYDRA-I
        new TransportPair(1,  180,  203), //	OT-62 VYDRA-II
        new TransportPair(1,  180,   98), //	BVP-1
        new TransportPair(1,  180,  100), //	BVP-1P
        new TransportPair(1,  180,  101), //	BVP-2
        new TransportPair(1,  180,  658), //	BVP-2 VZ.86
        new TransportPair(1,  226,  424), //PANCÇ??OVNÇCI	OT-64A
        new TransportPair(1,  226,  425), //	OT-64C
        new TransportPair(1,  226,  421), //	OT-62A
        new TransportPair(1,  226,  422), //	OT-62B
        new TransportPair(1,  226,  202), //	OT-62 VYDRA-I
        new TransportPair(1,  226,  203), //	OT-62 VYDRA-II
        new TransportPair(1,  226,   98), //	BVP-1
        new TransportPair(1,  226,  100), //	BVP-1P
        new TransportPair(1,  226,  101), //	BVP-2
        new TransportPair(1,  226,  658), //	BVP-2 VZ.86
        new TransportPair(1,  226,  644), //	Mi-4T
        new TransportPair(1,  226,  529), //	Mi-8T
        new TransportPair(1,  226,  706), //	Mi-17
        new TransportPair(1,  273,  424), //PLRK STRELA-2	OT-64A
        new TransportPair(1,  273,  425), //	OT-64C
        new TransportPair(1,  273,  421), //	OT-62A
        new TransportPair(1,  273,  422), //	OT-62B
        new TransportPair(1,  273,  202), //	OT-62 VYDRA-I
        new TransportPair(1,  273,  203), //	OT-62 VYDRA-II
        new TransportPair(1,  273,  644), //	Mi-4T
        new TransportPair(1,  273,  529), //	Mi-8T
        new TransportPair(1,  273,  706), //	Mi-17
        new TransportPair(1,  636,  424), //PLRK STRELA-3	OT-64A
        new TransportPair(1,  636,  425), //	OT-64C
        new TransportPair(1,  636,  421), //	OT-62A
        new TransportPair(1,  636,  422), //	OT-62B
        new TransportPair(1,  636,  202), //	OT-62 VYDRA-I
        new TransportPair(1,  636,  203), //	OT-62 VYDRA-II
        new TransportPair(1,  636,  644), //	Mi-4T
        new TransportPair(1,  636,  529), //	Mi-8T
        new TransportPair(1,  636,  706), //	Mi-17
        new TransportPair(1,  262,  332), //PR©ZKUMNÇCI #reco2	TATRA 148
        new TransportPair(1,  262,  424), //	OT-64A
        new TransportPair(1,  262,  425), //	OT-64C
        new TransportPair(1,  262,  644), //	Mi-4T
        new TransportPair(1,  262,  529), //	Mi-8T
        new TransportPair(1,  262,  706), //	Mi-17
        new TransportPair(1,  262,  496), //	Mi-25
        new TransportPair(1,  134,  424), //PT?S FAGOT	OT-64A
        new TransportPair(1,  134,  425), //	OT-64C
        new TransportPair(1,  134,  421), //	OT-62A
        new TransportPair(1,  134,  422), //	OT-62B
        new TransportPair(1,  134,  202), //	OT-62 VYDRA-I
        new TransportPair(1,  134,  203), //	OT-62 VYDRA-II
        new TransportPair(1,  134,  644), //	Mi-4T
        new TransportPair(1,  134,  529), //	Mi-8T
        new TransportPair(1,  134,  706), //	Mi-17
        new TransportPair(1,  633,  424), //PT?S KONKURS	OT-64A
        new TransportPair(1,  633,  425), //	OT-64C
        new TransportPair(1,  633,  421), //	OT-62A
        new TransportPair(1,  633,  422), //	OT-62B
        new TransportPair(1,  633,  202), //	OT-62 VYDRA-I
        new TransportPair(1,  633,  203), //	OT-62 VYDRA-II
        new TransportPair(1,  633,  644), //	Mi-4T
        new TransportPair(1,  633,  529), //	Mi-8T
        new TransportPair(1,  633,  706), //	Mi-17
        new TransportPair(1,  664,  424), //PT?S KONKURS-M	OT-64A
        new TransportPair(1,  664,  425), //	OT-64C
        new TransportPair(1,  664,  421), //	OT-62A
        new TransportPair(1,  664,  422), //	OT-62B
        new TransportPair(1,  664,  202), //	OT-62 VYDRA-I
        new TransportPair(1,  664,  203), //	OT-62 VYDRA-II
        new TransportPair(1,  664,  644), //	Mi-4T
        new TransportPair(1,  664,  529), //	Mi-8T
        new TransportPair(1,  664,  706), //	Mi-17
        new TransportPair(1,  400,  332), //SPECIÇLNÇ JEDNOTKY #reco2	TATRA 148
        new TransportPair(1,  400,  424), //	OT-64A
        new TransportPair(1,  400,  425), //	OT-64C
        new TransportPair(1,  400,  644), //	Mi-4T
        new TransportPair(1,  400,  529), //	Mi-8T
        new TransportPair(1,  400,  706), //	Mi-17
        new TransportPair(1,  400,  496), //	Mi-25
        new TransportPair(1,  690,  332), //SPECIÇLNÇ JEDNOTKY 90 #reco2	TATRA 148
        new TransportPair(1,  690,  424), //	OT-64A
        new TransportPair(1,  690,  425), //	OT-64C
        new TransportPair(1,  690,  644), //	Mi-4T
        new TransportPair(1,  690,  529), //	Mi-8T
        new TransportPair(1,  690,  706), //	Mi-17
        new TransportPair(1,  690,  496), //	Mi-25
        new TransportPair(1,  399,  424), //VÇSADKÇ?I	OT-64A
        new TransportPair(1,  399,  425), //	OT-64C
        new TransportPair(1,  399,  644), //	Mi-4T
        new TransportPair(1,  399,  529), //	Mi-8T
        new TransportPair(1,  399,  706), //	Mi-17
        new TransportPair(1,  702,  424), //VÇSADKÇ?I 90	OT-64A
        new TransportPair(1,  702,  425), //	OT-64C
        new TransportPair(1,  702,  644), //	Mi-4T
        new TransportPair(1,  702,  529), //	Mi-8T
        new TransportPair(1,  702,  706), //	Mi-17
        new TransportPair(1,  705,  674), //ZALOZNICI	OT-810
        new TransportPair(1,  258,  424), //«ENISTÇ?	OT-64A
        new TransportPair(1,  258,  425), //	OT-64C
        new TransportPair(1,  258,  421), //	OT-62A
        new TransportPair(1,  258,  422), //	OT-62B
        new TransportPair(1,  258,  202), //	OT-62 VYDRA-I
        new TransportPair(1,  258,  203), //	OT-62 VYDRA-II
        new TransportPair(1,  258,  644), //	Mi-4T
        new TransportPair(1,  258,  529), //	Mi-8T
        new TransportPair(1,  258,  706), //	Mi-17
        new TransportPair(1,  621,  441), //#command FÇ?HRUNGSTRUPP	LKV URAL
        new TransportPair(1,  621,  250), //	SPW-60PB
        new TransportPair(1,  621,  251), //	SPW-70
        new TransportPair(1,  621,  685), //	SPW-80
        new TransportPair(1,  621,  509), //	THS Mi-8T
        new TransportPair(1,  621,  508), //	THS Mi-8TV
        new TransportPair(1,  135,  250), //FJB-40	SPW-60PB
        new TransportPair(1,  135,  251), //	SPW-70
        new TransportPair(1,  135,  685), //	SPW-80
        new TransportPair(1,  135,  509), //	THS Mi-8T
        new TransportPair(1,  135,  508), //	THS Mi-8TV
        new TransportPair(1,  135,  488), //	THS Mi-24A
        new TransportPair(1,  135,  490), //	THS Mi-24D
        new TransportPair(1,  659,  250), //Fla-Kom IGLA-1	SPW-60PB
        new TransportPair(1,  659,  251), //	SPW-70
        new TransportPair(1,  659,  685), //	SPW-80
        new TransportPair(1,  659,  247), //	SPW-50PK
        new TransportPair(1,  659,  670), //	MZTM MT-LB
        new TransportPair(1,  659,  509), //	THS Mi-8T
        new TransportPair(1,  659,  508), //	THS Mi-8TV
        new TransportPair(1,  138,  250), //Fla-Kom STRELA-2	SPW-60PB
        new TransportPair(1,  138,  251), //	SPW-70
        new TransportPair(1,  138,  685), //	SPW-80
        new TransportPair(1,  138,  247), //	SPW-50PK
        new TransportPair(1,  138,  670), //	MZTM MT-LB
        new TransportPair(1,  138,  509), //	THS Mi-8T
        new TransportPair(1,  138,  508), //	THS Mi-8TV
        new TransportPair(1,  146,  441), //GRENZER #reco2	LKV URAL
        new TransportPair(1,  146,  247), //	SPW-50PK
        new TransportPair(1,  146,  670), //	MZTM MT-LB
        new TransportPair(1,  146,  240), //	SPW-152K
        new TransportPair(1,  146,  250), //	SPW-60PB
        new TransportPair(1,  146,  251), //	SPW-70
        new TransportPair(1,  146,  685), //	SPW-80
        new TransportPair(1,  146,  488), //	THS Mi-24A
        new TransportPair(1,  146,  490), //	THS Mi-24D
        new TransportPair(1,  663,  441), //KAMPFSCHWIMMER	LKV URAL
        new TransportPair(1,  663,  250), //	SPW-60PB
        new TransportPair(1,  663,  251), //	SPW-70
        new TransportPair(1,  663,  685), //	SPW-80
        new TransportPair(1,  663,  509), //	THS Mi-8T
        new TransportPair(1,  663,  508), //	THS Mi-8TV
        new TransportPair(1,  663,  488), //	THS Mi-24A
        new TransportPair(1,  663,  490), //	THS Mi-24D
        new TransportPair(1,  634,  240), //LEICHTE SCHÇ?TZEN	SPW-152K
        new TransportPair(1,  634,  250), //	SPW-60PB
        new TransportPair(1,  634,  251), //	SPW-70
        new TransportPair(1,  634,  685), //	SPW-80
        new TransportPair(1,  634,  488), //	THS Mi-24A
        new TransportPair(1,  634,  490), //	THS Mi-24D
        new TransportPair(1,  667,  250), //LstR-40	SPW-60PB
        new TransportPair(1,  667,  251), //	SPW-70
        new TransportPair(1,  667,  685), //	SPW-80
        new TransportPair(1,  667,  509), //	THS Mi-8T
        new TransportPair(1,  667,  508), //	THS Mi-8TV
        new TransportPair(1,  667,  488), //	THS Mi-24A
        new TransportPair(1,  667,  490), //	THS Mi-24D
        new TransportPair(1,  261,  250), //MOT.-SCHÇ?TZEN	SPW-60PB
        new TransportPair(1,  261,  251), //	SPW-70
        new TransportPair(1,  261,  685), //	SPW-80
        new TransportPair(1,  261,  247), //	SPW-50PK
        new TransportPair(1,  261,  670), //	MZTM MT-LB
        new TransportPair(1,  261,  252), //	SPz BMP-1 P/c
        new TransportPair(1,  261,   41), //	SPz BMP-1 SP-1
        new TransportPair(1,  261,   42), //	SPz BMP-1 SP-2
        new TransportPair(1,  261,   46), //	SPz BMP-2
        new TransportPair(1,  261,  253), //	SPz BMP-2/c
        new TransportPair(1,  687,  250), //MOT.-SCHÇ?TZEN 90	SPW-60PB
        new TransportPair(1,  687,  251), //	SPW-70
        new TransportPair(1,  687,  685), //	SPW-80
        new TransportPair(1,  687,  247), //	SPW-50PK
        new TransportPair(1,  687,  670), //	MZTM MT-LB
        new TransportPair(1,  687,  252), //	SPz BMP-1 P/c
        new TransportPair(1,  687,   41), //	SPz BMP-1 SP-1
        new TransportPair(1,  687,   42), //	SPz BMP-1 SP-2
        new TransportPair(1,  687,   46), //	SPz BMP-2
        new TransportPair(1,  687,  253), //	SPz BMP-2/c
        new TransportPair(1,  208,  250), //PALR FAGOT	SPW-60PB
        new TransportPair(1,  208,  251), //	SPW-70
        new TransportPair(1,  208,  685), //	SPW-80
        new TransportPair(1,  208,  247), //	SPW-50PK
        new TransportPair(1,  208,  670), //	MZTM MT-LB
        new TransportPair(1,  208,  509), //	THS Mi-8T
        new TransportPair(1,  208,  508), //	THS Mi-8TV
        new TransportPair(1,  676,  250), //PALR KONKURS	SPW-60PB
        new TransportPair(1,  676,  251), //	SPW-70
        new TransportPair(1,  676,  685), //	SPW-80
        new TransportPair(1,  676,  247), //	SPW-50PK
        new TransportPair(1,  676,  670), //	MZTM MT-LB
        new TransportPair(1,  676,  509), //	THS Mi-8T
        new TransportPair(1,  676,  508), //	THS Mi-8TV
        new TransportPair(1,  227,  250), //PANZERJAGER	SPW-60PB
        new TransportPair(1,  227,  251), //	SPW-70
        new TransportPair(1,  227,  685), //	SPW-80
        new TransportPair(1,  227,  247), //	SPW-50PK
        new TransportPair(1,  227,  670), //	MZTM MT-LB
        new TransportPair(1,  227,  509), //	THS Mi-8T
        new TransportPair(1,  227,  508), //	THS Mi-8TV
        new TransportPair(1,  232,  240), //RESERVESCHÇ?TZEN	SPW-152K
        new TransportPair(1,  159,  441), //SPEZIALAUFKLÇ?RER #reco2	LKV URAL
        new TransportPair(1,  159,  250), //	SPW-60PB
        new TransportPair(1,  159,  251), //	SPW-70
        new TransportPair(1,  159,  685), //	SPW-80
        new TransportPair(1,  159,  488), //	THS Mi-24A
        new TransportPair(1,  159,  490), //	THS Mi-24D
        new TransportPair(1,  228,  250), //STURMPIONIER	SPW-60PB
        new TransportPair(1,  228,  251), //	SPW-70
        new TransportPair(1,  228,  685), //	SPW-80
        new TransportPair(1,  228,  247), //	SPW-50PK
        new TransportPair(1,  228,  670), //	MZTM MT-LB
        new TransportPair(1,  228,  252), //	SPz BMP-1 P/c
        new TransportPair(1,  228,   41), //	SPz BMP-1 SP-1
        new TransportPair(1,  228,   42), //	SPz BMP-1 SP-2
        new TransportPair(1,  228,  509), //	THS Mi-8T
        new TransportPair(1,  228,  508), //	THS Mi-8TV
        new TransportPair(1,  704,  250), //WACHTREGIMENT	SPW-60PB
        new TransportPair(1,  704,  251), //	SPW-70
        new TransportPair(1,  704,  685), //	SPW-80
        new TransportPair(1,  704,  509), //	THS Mi-8T
        new TransportPair(1,  704,  508), //	THS Mi-8TV
        new TransportPair(1,  704,  488), //	THS Mi-24A
        new TransportPair(1,  704,  490), //	THS Mi-24D
        new TransportPair(1,  182,  407), //#command JIHWI-BAN	ZIL-130
        new TransportPair(1,  182,   94), //	BTR-60P
        new TransportPair(1,  182,   93), //	BTR-60PB
        new TransportPair(1,  182,  513), //	Mi-8
        new TransportPair(1,  183,   94), //BAN-TANK FAGOT	BTR-60P
        new TransportPair(1,  183,   93), //	BTR-60PB
        new TransportPair(1,  183,   92), //	BTR-50PK
        new TransportPair(1,  183,  153), //	ZSD-531A
        new TransportPair(1,  183,  513), //	Mi-8
        new TransportPair(1,  195,   94), //BIBANCHUNGPO	BTR-60P
        new TransportPair(1,  195,   93), //	BTR-60PB
        new TransportPair(1,  195,   92), //	BTR-50PK
        new TransportPair(1,  195,  153), //	ZSD-531A
        new TransportPair(1,  195,  513), //	Mi-8
        new TransportPair(1,  190,   92), //BOCHONGSU	BTR-50PK
        new TransportPair(1,  190,  153), //	ZSD-531A
        new TransportPair(1,  190,   94), //	BTR-60P
        new TransportPair(1,  190,   93), //	BTR-60PB
        new TransportPair(1,  190,  397), //	VTT-323
        new TransportPair(1,  190,  398), //	VTT-323 HWASUNG-CHONG
        new TransportPair(1,  190,  396), //	VTT-323 SUSONG-POL
        new TransportPair(1,  190,   51), //	KORSHUN
        new TransportPair(1,  186,   94), //GONGBOBYONG	BTR-60P
        new TransportPair(1,  186,   93), //	BTR-60PB
        new TransportPair(1,  186,  503), //	Mi-4
        new TransportPair(1,  186,  513), //	Mi-8
        new TransportPair(1,  192,   94), //GONGBYONG	BTR-60P
        new TransportPair(1,  192,   93), //	BTR-60PB
        new TransportPair(1,  192,   92), //	BTR-50PK
        new TransportPair(1,  192,  153), //	ZSD-531A
        new TransportPair(1,  192,  513), //	Mi-8
        new TransportPair(1,  184,   94), //IGLA	BTR-60P
        new TransportPair(1,  184,   93), //	BTR-60PB
        new TransportPair(1,  184,   92), //	BTR-50PK
        new TransportPair(1,  184,  153), //	ZSD-531A
        new TransportPair(1,  184,  513), //	Mi-8
        new TransportPair(1,  188,   94), //JEOGOCKDAE	BTR-60P
        new TransportPair(1,  188,   93), //	BTR-60PB
        new TransportPair(1,  188,   92), //	BTR-50PK
        new TransportPair(1,  188,  153), //	ZSD-531A
        new TransportPair(1,  188,  513), //	Mi-8
        new TransportPair(1,  625,   94), //JEOGOCKDAE '90	BTR-60P
        new TransportPair(1,  625,   93), //	BTR-60PB
        new TransportPair(1,  625,   84), //	BTR-80A
        new TransportPair(1,  625,   51), //	KORSHUN
        new TransportPair(1,  625,  513), //	Mi-8
        new TransportPair(1,  193,  407), //JEONGCHALDAE #reco2	ZIL-130
        new TransportPair(1,  193,   94), //	BTR-60P
        new TransportPair(1,  193,   93), //	BTR-60PB
        new TransportPair(1,  193,  503), //	Mi-4
        new TransportPair(1,  189,   90), //JUCKWIDAE	BTR-152
        new TransportPair(1,  194,   94), //STRELA-2	BTR-60P
        new TransportPair(1,  194,   93), //	BTR-60PB
        new TransportPair(1,  194,   92), //	BTR-50PK
        new TransportPair(1,  194,  153), //	ZSD-531A
        new TransportPair(1,  194,  513), //	Mi-8
        new TransportPair(1,  627,   94), //YUCKJEONDAE	BTR-60P
        new TransportPair(1,  627,   93), //	BTR-60PB
        new TransportPair(1,  627,  503), //	Mi-4
        new TransportPair(1,  627,  513), //	Mi-8
        new TransportPair(1,  626,   94), //YUCKJEONDAE '90	BTR-60P
        new TransportPair(1,  626,   93), //	BTR-60PB
        new TransportPair(1,  626,   84), //	BTR-80A
        new TransportPair(1,  626,  503), //	Mi-4
        new TransportPair(1,  626,  513), //	Mi-8
        new TransportPair(1,  620,  272), //#command SZTAB DOWODZENIA	STAR 266
        new TransportPair(1,  620,  236), //	SKOT-2
        new TransportPair(1,  620,  237), //	SKOT-2A
        new TransportPair(1,  620,  238), //	SKOT-2AM
        new TransportPair(1,  620,  683), //	SKOT-2AP
        new TransportPair(1,  620,  531), //	Mi-8T
        new TransportPair(1,  620,  707), //	Mi-17
        new TransportPair(1,  620,  643), //	Mi-2T
        new TransportPair(1,  620,  713), //	W-3T SOKÇ"
        new TransportPair(1,  660,  272), //FORMOZA	STAR 266
        new TransportPair(1,  660,  236), //	SKOT-2
        new TransportPair(1,  660,  237), //	SKOT-2A
        new TransportPair(1,  660,  238), //	SKOT-2AM
        new TransportPair(1,  660,  683), //	SKOT-2AP
        new TransportPair(1,  660,  643), //	Mi-2T
        new TransportPair(1,  660,  713), //	W-3T SOKÇ"
        new TransportPair(1,  660,  531), //	Mi-8T
        new TransportPair(1,  660,  707), //	Mi-17
        new TransportPair(1,  660,  530), //	Mi-24D
        new TransportPair(1,  632,  236), //KOMANDOSI	SKOT-2
        new TransportPair(1,  632,  237), //	SKOT-2A
        new TransportPair(1,  632,  238), //	SKOT-2AM
        new TransportPair(1,  632,  683), //	SKOT-2AP
        new TransportPair(1,  632,  643), //	Mi-2T
        new TransportPair(1,  632,  713), //	W-3T SOKÇ"
        new TransportPair(1,  632,  531), //	Mi-8T
        new TransportPair(1,  632,  707), //	Mi-17
        new TransportPair(1,  632,  530), //	Mi-24D
        new TransportPair(1,  196,  199), //NIEBIESKIE BERETY	TOPAS
        new TransportPair(1,  196,  200), //	TOPAS-2A
        new TransportPair(1,  196,  201), //	TOPAS-2AP
        new TransportPair(1,  196,  531), //	Mi-8T
        new TransportPair(1,  196,  707), //	Mi-17
        new TransportPair(1,  673,  199), //NIEBIESKIE BERETY 90	TOPAS
        new TransportPair(1,  673,  200), //	TOPAS-2A
        new TransportPair(1,  673,  201), //	TOPAS-2AP
        new TransportPair(1,  673,  531), //	Mi-8T
        new TransportPair(1,  673,  707), //	Mi-17
        new TransportPair(1,  277,  236), //PIECHOTA ZMECH.	SKOT-2
        new TransportPair(1,  277,  237), //	SKOT-2A
        new TransportPair(1,  277,  238), //	SKOT-2AM
        new TransportPair(1,  277,  683), //	SKOT-2AP
        new TransportPair(1,  277,  199), //	TOPAS
        new TransportPair(1,  277,  200), //	TOPAS-2A
        new TransportPair(1,  277,  201), //	TOPAS-2AP
        new TransportPair(1,  277,  102), //	BWP-1
        new TransportPair(1,  277,  103), //	BWP-2
        new TransportPair(1,  277,  104), //	BWP-2D
        new TransportPair(1,  210,  236), //PPK FAGOT	SKOT-2
        new TransportPair(1,  210,  237), //	SKOT-2A
        new TransportPair(1,  210,  238), //	SKOT-2AM
        new TransportPair(1,  210,  683), //	SKOT-2AP
        new TransportPair(1,  210,  199), //	TOPAS
        new TransportPair(1,  210,  200), //	TOPAS-2A
        new TransportPair(1,  210,  201), //	TOPAS-2AP
        new TransportPair(1,  210,  531), //	Mi-8T
        new TransportPair(1,  210,  707), //	Mi-17
        new TransportPair(1,  665,  236), //PPK KONKURS	SKOT-2
        new TransportPair(1,  665,  237), //	SKOT-2A
        new TransportPair(1,  665,  238), //	SKOT-2AM
        new TransportPair(1,  665,  683), //	SKOT-2AP
        new TransportPair(1,  665,  199), //	TOPAS
        new TransportPair(1,  665,  200), //	TOPAS-2A
        new TransportPair(1,  665,  201), //	TOPAS-2AP
        new TransportPair(1,  665,  531), //	Mi-8T
        new TransportPair(1,  665,  707), //	Mi-17
        new TransportPair(1,  661,  236), //PPZR GROM	SKOT-2
        new TransportPair(1,  661,  237), //	SKOT-2A
        new TransportPair(1,  661,  238), //	SKOT-2AM
        new TransportPair(1,  661,  683), //	SKOT-2AP
        new TransportPair(1,  661,  199), //	TOPAS
        new TransportPair(1,  661,  200), //	TOPAS-2A
        new TransportPair(1,  661,  201), //	TOPAS-2AP
        new TransportPair(1,  661,  229), //	PROMET
        new TransportPair(1,  661,  531), //	Mi-8T
        new TransportPair(1,  661,  707), //	Mi-17
        new TransportPair(1,  276,  236), //PPZR STRZAA-2¶	SKOT-2
        new TransportPair(1,  276,  237), //	SKOT-2A
        new TransportPair(1,  276,  238), //	SKOT-2AM
        new TransportPair(1,  276,  683), //	SKOT-2AP
        new TransportPair(1,  276,  199), //	TOPAS
        new TransportPair(1,  276,  200), //	TOPAS-2A
        new TransportPair(1,  276,  201), //	TOPAS-2AP
        new TransportPair(1,  276,  229), //	PROMET
        new TransportPair(1,  276,  531), //	Mi-8T
        new TransportPair(1,  276,  707), //	Mi-17
        new TransportPair(1,  260,  236), //SAPERZY	SKOT-2
        new TransportPair(1,  260,  237), //	SKOT-2A
        new TransportPair(1,  260,  238), //	SKOT-2AM
        new TransportPair(1,  260,  683), //	SKOT-2AP
        new TransportPair(1,  260,  199), //	TOPAS
        new TransportPair(1,  260,  200), //	TOPAS-2A
        new TransportPair(1,  260,  201), //	TOPAS-2AP
        new TransportPair(1,  260,  174), //	MT-LB 23M KRAK
        new TransportPair(1,  132,  236), //SAPERZY SZTURMOWI	SKOT-2
        new TransportPair(1,  132,  237), //	SKOT-2A
        new TransportPair(1,  132,  238), //	SKOT-2AM
        new TransportPair(1,  132,  683), //	SKOT-2AP
        new TransportPair(1,  132,  643), //	Mi-2T
        new TransportPair(1,  132,  713), //	W-3T SOKÇ"
        new TransportPair(1,  132,  531), //	Mi-8T
        new TransportPair(1,  132,  707), //	Mi-17
        new TransportPair(1,  131,  236), //SPADOCHRONIARZE	SKOT-2
        new TransportPair(1,  131,  237), //	SKOT-2A
        new TransportPair(1,  131,  238), //	SKOT-2AM
        new TransportPair(1,  131,  683), //	SKOT-2AP
        new TransportPair(1,  131,  643), //	Mi-2T
        new TransportPair(1,  131,  713), //	W-3T SOKÇ"
        new TransportPair(1,  131,  531), //	Mi-8T
        new TransportPair(1,  131,  707), //	Mi-17
        new TransportPair(1,  689,  236), //SPADOCHRONIARZE 90	SKOT-2
        new TransportPair(1,  689,  237), //	SKOT-2A
        new TransportPair(1,  689,  238), //	SKOT-2AM
        new TransportPair(1,  689,  683), //	SKOT-2AP
        new TransportPair(1,  689,  643), //	Mi-2T
        new TransportPair(1,  689,  713), //	W-3T SOKÇ"
        new TransportPair(1,  689,  531), //	Mi-8T
        new TransportPair(1,  689,  707), //	Mi-17
        new TransportPair(1,  684,  236), //SPG9-D	SKOT-2
        new TransportPair(1,  684,  237), //	SKOT-2A
        new TransportPair(1,  684,  238), //	SKOT-2AM
        new TransportPair(1,  684,  683), //	SKOT-2AP
        new TransportPair(1,  684,  643), //	Mi-2T
        new TransportPair(1,  684,  713), //	W-3T SOKÇ"
        new TransportPair(1,  684,  531), //	Mi-8T
        new TransportPair(1,  684,  707), //	Mi-17
        new TransportPair(1,  178,  236), //STRZELCY POLDHALAŸSCY	SKOT-2
        new TransportPair(1,  178,  237), //	SKOT-2A
        new TransportPair(1,  178,  238), //	SKOT-2AM
        new TransportPair(1,  178,  683), //	SKOT-2AP
        new TransportPair(1,  178,  643), //	Mi-2T
        new TransportPair(1,  178,  713), //	W-3T SOKÇ"
        new TransportPair(1,  178,  531), //	Mi-8T
        new TransportPair(1,  178,  707), //	Mi-17
        new TransportPair(1,  178,  530), //	Mi-24D
        new TransportPair(1,  133,  272), //ZWIADOWCY #reco2	STAR 266
        new TransportPair(1,  133,  236), //	SKOT-2
        new TransportPair(1,  133,  237), //	SKOT-2A
        new TransportPair(1,  133,  238), //	SKOT-2AM
        new TransportPair(1,  133,  683), //	SKOT-2AP
        new TransportPair(1,  133,  643), //	Mi-2T
        new TransportPair(1,  133,  713), //	W-3T SOKÇ"
        new TransportPair(1,  133,  530), //	Mi-24D
        new TransportPair(1,  107,  256), //#command ZHIHUIBAN	SX250
        new TransportPair(1,  107,  339), //	ZSL-56
        new TransportPair(1,  107,  511), //	Mi-8T
        new TransportPair(1,  115,  339), //FÇNG HUÇ\[Euro] BŽ¦NG	ZSL-56
        new TransportPair(1,  115,  349), //	ZSD-63A
        new TransportPair(1,  115,  337), //	ZSD-63C
        new TransportPair(1,  115,  511), //	Mi-8T
        new TransportPair(1,  108,  339), //HN-5A	ZSL-56
        new TransportPair(1,  108,  349), //	ZSD-63A
        new TransportPair(1,  108,  337), //	ZSD-63C
        new TransportPair(1,  108,  511), //	Mi-8T
        new TransportPair(1,  109,  339), //HN-5B	ZSL-56
        new TransportPair(1,  109,  349), //	ZSD-63A
        new TransportPair(1,  109,  337), //	ZSD-63C
        new TransportPair(1,  109,  511), //	Mi-8T
        new TransportPair(1,  112,  256), //LIÇ? RÇ?N #reco2	SX250
        new TransportPair(1,  112,  339), //	ZSL-56
        new TransportPair(1,  112,  651), //	WZ-551
        new TransportPair(1,  112,  525), //	Z-5
        new TransportPair(1,  112,  527), //	Z-9A
        new TransportPair(1,  116,  339), //LÇ? JIÇ\[Euro]N	ZSL-56
        new TransportPair(1,  116,  525), //	Z-5
        new TransportPair(1,  624,  339), //li jian 90	ZSL-56
        new TransportPair(1,  624,  651), //	WZ-551
        new TransportPair(1,  624,  525), //	Z-5
        new TransportPair(1,  624,  527), //	Z-9A
        new TransportPair(1,  110,  349), //LÇ\[Trademark] ZHÇ\[Euro]NDUÇ?	ZSD-63A
        new TransportPair(1,  110,  337), //	ZSD-63C
        new TransportPair(1,  110,  358), //	ZBD-86
        new TransportPair(1,  110,  511), //	Mi-8T
        new TransportPair(1,  623,  349), //lu zhandui 90	ZSD-63A
        new TransportPair(1,  623,  337), //	ZSD-63C
        new TransportPair(1,  623,  358), //	ZBD-86
        new TransportPair(1,  623,  409), //	ZSD-90
        new TransportPair(1,  623,  511), //	Mi-8T
        new TransportPair(1,  111,  339), //QW-1	ZSL-56
        new TransportPair(1,  111,  349), //	ZSD-63A
        new TransportPair(1,  111,  337), //	ZSD-63C
        new TransportPair(1,  111,  511), //	Mi-8T
        new TransportPair(1,  117,  339), //TÇNKÇ? SHŽ\[Euro]SH€'U	ZSL-56
        new TransportPair(1,  117,  349), //	ZSD-63A
        new TransportPair(1,  117,  337), //	ZSD-63C
        new TransportPair(1,  117,  511), //	Mi-8T
        new TransportPair(1,  650,  339), //TÇNKÇ? SHŽ\[Euro]SH€'U '85	ZSL-56
        new TransportPair(1,  650,  651), //	WZ-551
        new TransportPair(1,  650,  349), //	ZSD-63A
        new TransportPair(1,  650,  337), //	ZSD-63C
        new TransportPair(1,  650,  511), //	Mi-8T
        new TransportPair(1,  113,  339), //Y¦BÇ?IYÇ?	ZSL-56
        new TransportPair(1,  114,  339), //ZHÇ\[Euro]NSHÇ?	ZSL-56
        new TransportPair(1,  114,  349), //	ZSD-63A
        new TransportPair(1,  114,  337), //	ZSD-63C
        new TransportPair(1,  114,  511), //	Mi-8T
        new TransportPair(1,  622,  339), //zhanshi 85	ZSL-56
        new TransportPair(1,  622,  349), //	ZSD-63A
        new TransportPair(1,  622,  337), //	ZSD-63C
        new TransportPair(1,  622,  358), //	ZBD-86
        new TransportPair(1,  622,  409), //	ZSD-90
        new TransportPair(1,  622,  511), //	Mi-8T
        new TransportPair(1,  385,  389), //#command KOMANDNOE OTDELENIE	URAL-375D
        new TransportPair(1,  385,   79), //	BTR-60PB
        new TransportPair(1,  385,   80), //	BTR-70
        new TransportPair(1,  385,  506), //	Mi-8T
        new TransportPair(1,  385,  507), //	Mi-8TV
        new TransportPair(1,  385,  486), //	Mi-8MTV
        new TransportPair(1,  385,  464), //	Ka-29TB
        new TransportPair(1,  386,   79), //GORNOSTRELKI	BTR-60PB
        new TransportPair(1,  386,   80), //	BTR-70
        new TransportPair(1,  386,  506), //	Mi-8T
        new TransportPair(1,  386,  507), //	Mi-8TV
        new TransportPair(1,  386,  486), //	Mi-8MTV
        new TransportPair(1,  386,  487), //	Mi-24A
        new TransportPair(1,  386,  489), //	Mi-24D
        new TransportPair(1,  629,  506), //GORNOSTRELKI '90	Mi-8T
        new TransportPair(1,  629,  507), //	Mi-8TV
        new TransportPair(1,  629,  486), //	Mi-8MTV
        new TransportPair(1,  629,  487), //	Mi-24A
        new TransportPair(1,  629,  489), //	Mi-24D
        new TransportPair(1,  179,   79), //MORSKAYA PEKHOTA	BTR-60PB
        new TransportPair(1,  179,   80), //	BTR-70
        new TransportPair(1,  179,  172), //	MT-LBV
        new TransportPair(1,  179,  464), //	Ka-29TB
        new TransportPair(1,  630,   83), //MORSKAYA PEKHOTA '90	BTR-80
        new TransportPair(1,  630,   85), //	BTR-80A
        new TransportPair(1,  630,   86), //	BTR-90
        new TransportPair(1,  630,  172), //	MT-LBV
        new TransportPair(1,  630,  464), //	Ka-29TB
        new TransportPair(1,  181,   79), //MOTOSTRELKI	BTR-60PB
        new TransportPair(1,  181,   80), //	BTR-70
        new TransportPair(1,  181,  172), //	MT-LBV
        new TransportPair(1,  181,   38), //	BMP-1
        new TransportPair(1,  181,   39), //	BMP-1D
        new TransportPair(1,  181,   40), //	BMP-1P
        new TransportPair(1,  181,   45), //	BMP-2
        new TransportPair(1,  181,   47), //	BMP-2D
        new TransportPair(1,  181,   48), //	BMP- 2 Obr. 1986
        new TransportPair(1,  635,  172), //MOTOSTRELKI '90	MT-LBV
        new TransportPair(1,  635,   83), //	BTR-80
        new TransportPair(1,  635,   85), //	BTR-80A
        new TransportPair(1,  635,   86), //	BTR-90
        new TransportPair(1,  635,   38), //	BMP-1
        new TransportPair(1,  635,   39), //	BMP-1D
        new TransportPair(1,  635,   40), //	BMP-1P
        new TransportPair(1,  635,   45), //	BMP-2
        new TransportPair(1,  635,   47), //	BMP-2D
        new TransportPair(1,  635,   48), //	BMP- 2 Obr. 1986
        new TransportPair(1,  635,   49), //	BMP-3
        new TransportPair(1,  268,   79), //PTUR FAKTORIYA	BTR-60PB
        new TransportPair(1,  268,   80), //	BTR-70
        new TransportPair(1,  268,  172), //	MT-LBV
        new TransportPair(1,  268,   95), //	BTR-D
        new TransportPair(1,  268,   96), //	BTR-RD ROBOT
        new TransportPair(1,  268,   97), //	BTR-ZD SKREZHET
        new TransportPair(1,  268,  506), //	Mi-8T
        new TransportPair(1,  268,  507), //	Mi-8TV
        new TransportPair(1,  268,  486), //	Mi-8MTV
        new TransportPair(1,  215,   79), //PTUR KONKURS	BTR-60PB
        new TransportPair(1,  215,   80), //	BTR-70
        new TransportPair(1,  215,  172), //	MT-LBV
        new TransportPair(1,  215,   95), //	BTR-D
        new TransportPair(1,  215,   96), //	BTR-RD ROBOT
        new TransportPair(1,  215,   97), //	BTR-ZD SKREZHET
        new TransportPair(1,  215,  506), //	Mi-8T
        new TransportPair(1,  215,  507), //	Mi-8TV
        new TransportPair(1,  215,  486), //	Mi-8MTV
        new TransportPair(1,  388,   79), //PTUR KONKURS-M	BTR-60PB
        new TransportPair(1,  388,   80), //	BTR-70
        new TransportPair(1,  388,  172), //	MT-LBV
        new TransportPair(1,  388,   95), //	BTR-D
        new TransportPair(1,  388,   96), //	BTR-RD ROBOT
        new TransportPair(1,  388,   97), //	BTR-ZD SKREZHET
        new TransportPair(1,  388,  506), //	Mi-8T
        new TransportPair(1,  388,  507), //	Mi-8TV
        new TransportPair(1,  388,  486), //	Mi-8MTV
        new TransportPair(1,  223,   79), //PZRK IGLA	BTR-60PB
        new TransportPair(1,  223,   80), //	BTR-70
        new TransportPair(1,  223,  172), //	MT-LBV
        new TransportPair(1,  223,   95), //	BTR-D
        new TransportPair(1,  223,   96), //	BTR-RD ROBOT
        new TransportPair(1,  223,   97), //	BTR-ZD SKREZHET
        new TransportPair(1,  223,  506), //	Mi-8T
        new TransportPair(1,  223,  507), //	Mi-8TV
        new TransportPair(1,  223,  486), //	Mi-8MTV
        new TransportPair(1,  387,   79), //PZRK IGLA-N	BTR-60PB
        new TransportPair(1,  387,   80), //	BTR-70
        new TransportPair(1,  387,  172), //	MT-LBV
        new TransportPair(1,  387,   95), //	BTR-D
        new TransportPair(1,  387,   96), //	BTR-RD ROBOT
        new TransportPair(1,  387,   97), //	BTR-ZD SKREZHET
        new TransportPair(1,  387,  506), //	Mi-8T
        new TransportPair(1,  387,  507), //	Mi-8TV
        new TransportPair(1,  387,  486), //	Mi-8MTV
        new TransportPair(1,  225,   79), //PZRK STRELA-3	BTR-60PB
        new TransportPair(1,  225,   80), //	BTR-70
        new TransportPair(1,  225,  172), //	MT-LBV
        new TransportPair(1,  225,   95), //	BTR-D
        new TransportPair(1,  225,   96), //	BTR-RD ROBOT
        new TransportPair(1,  225,   97), //	BTR-ZD SKREZHET
        new TransportPair(1,  225,  506), //	Mi-8T
        new TransportPair(1,  225,  507), //	Mi-8TV
        new TransportPair(1,  225,  486), //	Mi-8MTV
        new TransportPair(1,  231,  389), //RAZVEDKA #reco2	URAL-375D
        new TransportPair(1,  231,   79), //	BTR-60PB
        new TransportPair(1,  231,   80), //	BTR-70
        new TransportPair(1,  231,  172), //	MT-LBV
        new TransportPair(1,  231,  506), //	Mi-8T
        new TransportPair(1,  231,  507), //	Mi-8TV
        new TransportPair(1,  231,  486), //	Mi-8MTV
        new TransportPair(1,  231,  487), //	Mi-24A
        new TransportPair(1,  231,  489), //	Mi-24D
        new TransportPair(1,  259,   79), //SAPERY	BTR-60PB
        new TransportPair(1,  259,   80), //	BTR-70
        new TransportPair(1,  259,  172), //	MT-LBV
        new TransportPair(1,  259,   95), //	BTR-D
        new TransportPair(1,  259,   96), //	BTR-RD ROBOT
        new TransportPair(1,  259,   97), //	BTR-ZD SKREZHET
        new TransportPair(1,  259,   87), //	BTR-T
        new TransportPair(1,  259,  506), //	Mi-8T
        new TransportPair(1,  259,  507), //	Mi-8TV
        new TransportPair(1,  259,  486), //	Mi-8MTV
        new TransportPair(1,  628,   79), //SAPERY '85	BTR-60PB
        new TransportPair(1,  628,   80), //	BTR-70
        new TransportPair(1,  628,  172), //	MT-LBV
        new TransportPair(1,  628,   95), //	BTR-D
        new TransportPair(1,  628,   96), //	BTR-RD ROBOT
        new TransportPair(1,  628,   97), //	BTR-ZD SKREZHET
        new TransportPair(1,  628,   87), //	BTR-T
        new TransportPair(1,  628,  506), //	Mi-8T
        new TransportPair(1,  628,  507), //	Mi-8TV
        new TransportPair(1,  628,  486), //	Mi-8MTV
        new TransportPair(1,  269,   79), //SPETSNAZ	BTR-60PB
        new TransportPair(1,  269,   80), //	BTR-70
        new TransportPair(1,  269,   83), //	BTR-80
        new TransportPair(1,  269,   85), //	BTR-80A
        new TransportPair(1,  269,   86), //	BTR-90
        new TransportPair(1,  269,   95), //	BTR-D
        new TransportPair(1,  269,   96), //	BTR-RD ROBOT
        new TransportPair(1,  269,   97), //	BTR-ZD SKREZHET
        new TransportPair(1,  269,  506), //	Mi-8T
        new TransportPair(1,  269,  507), //	Mi-8TV
        new TransportPair(1,  269,  486), //	Mi-8MTV
        new TransportPair(1,  269,  487), //	Mi-24A
        new TransportPair(1,  269,  489), //	Mi-24D
        new TransportPair(1,  723,  389), //SPETSNAZ GRU #reco2	URAL-375D
        new TransportPair(1,  723,  172), //	MT-LBV
        new TransportPair(1,  723,   79), //	BTR-60PB
        new TransportPair(1,  723,   80), //	BTR-70
        new TransportPair(1,  723,   83), //	BTR-80
        new TransportPair(1,  723,   85), //	BTR-80A
        new TransportPair(1,  723,   86), //	BTR-90
        new TransportPair(1,  723,  487), //	Mi-24A
        new TransportPair(1,  723,  489), //	Mi-24D
        new TransportPair(1,  270,  389), //SPETSNAZ VMF #reco2	URAL-375D
        new TransportPair(1,  270,   79), //	BTR-60PB
        new TransportPair(1,  270,   80), //	BTR-70
        new TransportPair(1,  270,   83), //	BTR-80
        new TransportPair(1,  270,   85), //	BTR-80A
        new TransportPair(1,  270,   86), //	BTR-90
        new TransportPair(1,  270,  464), //	Ka-29TB
        new TransportPair(1,  270,  487), //	Mi-24A
        new TransportPair(1,  270,  489), //	Mi-24D
        new TransportPair(1,  392,   95), //VDV	BTR-D
        new TransportPair(1,  392,   96), //	BTR-RD ROBOT
        new TransportPair(1,  392,   97), //	BTR-ZD SKREZHET
        new TransportPair(1,  392,  506), //	Mi-8T
        new TransportPair(1,  392,  507), //	Mi-8TV
        new TransportPair(1,  392,  486), //	Mi-8MTV
        new TransportPair(1,  392,   34), //	BMD-1
        new TransportPair(1,  392,   33), //	BMD-1P
        new TransportPair(1,  392,   36), //	BMD-2
        new TransportPair(1,  392,   37), //	BMD-3
        new TransportPair(1,  631,   95), //VDV '90	BTR-D
        new TransportPair(1,  631,   96), //	BTR-RD ROBOT
        new TransportPair(1,  631,   97), //	BTR-ZD SKREZHET
        new TransportPair(1,  631,  506), //	Mi-8T
        new TransportPair(1,  631,  507), //	Mi-8TV
        new TransportPair(1,  631,  486), //	Mi-8MTV
        new TransportPair(1,  631,   34), //	BMD-1
        new TransportPair(1,  631,   33), //	BMD-1P
        new TransportPair(1,  631,   36), //	BMD-2
        new TransportPair(1,  631,   37)	//	BMD-3
    ]
