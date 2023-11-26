export type TStates =
  | 'AC'
  | 'AL'
  | 'AM'
  | 'AP'
  | 'BA'
  | 'CE'
  | 'DF'
  | 'ES'
  | 'GO'
  | 'MA'
  | 'MG'
  | 'MS'
  | 'MT'
  | 'PA'
  | 'PB'
  | 'PE'
  | 'PI'
  | 'PR'
  | 'RJ'
  | 'RN'
  | 'RO'
  | 'RR'
  | 'RS'
  | 'SC'
  | 'SE'
  | 'SP'
  | 'TO';

export const citiesByUFMock = {
  AC: [
    {
      id: 3698,
      ibgeId: 1200401,
      name: 'Rio Branco',
    },
    {
      id: 3699,
      ibgeId: 1200450,
      name: 'Senador Guiomard',
    },
    {
      id: 3700,
      ibgeId: 1200138,
      name: 'Bujari',
    },
    {
      id: 3701,
      ibgeId: 1200807,
      name: 'Porto Acre',
    },
    {
      id: 3702,
      ibgeId: 1200385,
      name: 'Plácido de Castro',
    },
    {
      id: 3703,
      ibgeId: 1200708,
      name: 'Xapuri',
    },
    {
      id: 3704,
      ibgeId: 1200179,
      name: 'Capixaba',
    },
    {
      id: 3705,
      ibgeId: 1200104,
      name: 'Brasiléia',
    },
    {
      id: 3706,
      ibgeId: 1200252,
      name: 'Epitaciolândia',
    },
    {
      id: 3707,
      ibgeId: 1200054,
      name: 'Assis Brasil',
    },
    {
      id: 3708,
      ibgeId: 1200500,
      name: 'Sena Madureira',
    },
    {
      id: 3709,
      ibgeId: 1200013,
      name: 'Acrelândia',
    },
    {
      id: 3710,
      ibgeId: 1200344,
      name: 'Manoel Urbano',
    },
    {
      id: 3711,
      ibgeId: 1200435,
      name: 'Santa Rosa do Purus',
    },
    {
      id: 3712,
      ibgeId: 1200302,
      name: 'Feijó',
    },
    {
      id: 3713,
      ibgeId: 1200609,
      name: 'Tarauacá',
    },
    {
      id: 3714,
      ibgeId: 1200328,
      name: 'Jordão',
    },
    {
      id: 3715,
      ibgeId: 1200203,
      name: 'Cruzeiro do Sul',
    },
    {
      id: 3716,
      ibgeId: 1200393,
      name: 'Porto Walter',
    },
    {
      id: 3717,
      ibgeId: 1200351,
      name: 'Marechal Thaumaturgo',
    },
    {
      id: 3718,
      ibgeId: 1200427,
      name: 'Rodrigues Alves',
    },
    {
      id: 3719,
      ibgeId: 1200336,
      name: 'Mâncio Lima',
    },
  ],
  AL: [
    {
      id: 2347,
      ibgeId: 2704302,
      name: 'Maceió',
    },
    {
      id: 2348,
      ibgeId: 2707701,
      name: 'Rio Largo',
    },
    {
      id: 2349,
      ibgeId: 2708907,
      name: 'Satuba',
    },
    {
      id: 2350,
      ibgeId: 2702207,
      name: 'Coqueiro Seco',
    },
    {
      id: 2351,
      ibgeId: 2706901,
      name: 'Pilar',
    },
    {
      id: 2352,
      ibgeId: 2704708,
      name: 'Marechal Deodoro',
    },
    {
      id: 2353,
      ibgeId: 2700607,
      name: 'Barra de São Miguel',
    },
    {
      id: 2354,
      ibgeId: 2706703,
      name: 'Penedo',
    },
    {
      id: 2355,
      ibgeId: 2706802,
      name: 'Piaçabuçu',
    },
    {
      id: 2356,
      ibgeId: 2702702,
      name: 'Feliz Deserto',
    },
    {
      id: 2357,
      ibgeId: 2702306,
      name: 'Coruripe',
    },
    {
      id: 2358,
      ibgeId: 2708600,
      name: 'São Miguel dos Campos',
    },
    {
      id: 2359,
      ibgeId: 2701407,
      name: 'Campo Alegre',
    },
    {
      id: 2360,
      ibgeId: 2703759,
      name: 'Jequiá da Praia',
    },
    {
      id: 2361,
      ibgeId: 2707800,
      name: 'Roteiro',
    },
    {
      id: 2362,
      ibgeId: 2704203,
      name: 'Limoeiro de Anadia',
    },
    {
      id: 2363,
      ibgeId: 2709152,
      name: 'Teotônio Vilela',
    },
    {
      id: 2364,
      ibgeId: 2704005,
      name: 'Junqueiro',
    },
    {
      id: 2365,
      ibgeId: 2708808,
      name: 'São Sebastião',
    },
    {
      id: 2366,
      ibgeId: 2703205,
      name: 'Igreja Nova',
    },
    {
      id: 2367,
      ibgeId: 2707503,
      name: 'Porto Real do Colégio',
    },
    {
      id: 2368,
      ibgeId: 2700300,
      name: 'Arapiraca',
    },
    {
      id: 2369,
      ibgeId: 2702355,
      name: 'Craíbas',
    },
    {
      id: 2370,
      ibgeId: 2702009,
      name: 'Coité do Nóia',
    },
    {
      id: 2371,
      ibgeId: 2704104,
      name: 'Lagoa da Canoa',
    },
    {
      id: 2372,
      ibgeId: 2702603,
      name: 'Feira Grande',
    },
    {
      id: 2373,
      ibgeId: 2701506,
      name: 'Campo Grande',
    },
    {
      id: 2374,
      ibgeId: 2702900,
      name: 'Girau do Ponciano',
    },
    {
      id: 2375,
      ibgeId: 2709202,
      name: 'Traipu',
    },
    {
      id: 2376,
      ibgeId: 2708204,
      name: 'São Brás',
    },
    {
      id: 2377,
      ibgeId: 2705903,
      name: "Olho D'Água Grande",
    },
    {
      id: 2378,
      ibgeId: 2706406,
      name: 'Pão de Açúcar',
    },
    {
      id: 2379,
      ibgeId: 2706208,
      name: 'Palestina',
    },
    {
      id: 2380,
      ibgeId: 2700706,
      name: 'Batalha',
    },
    {
      id: 2381,
      ibgeId: 2703700,
      name: 'Jaramataia',
    },
    {
      id: 2382,
      ibgeId: 2703403,
      name: 'Jacaré dos Homens',
    },
    {
      id: 2383,
      ibgeId: 2700904,
      name: 'Belo Monte',
    },
    {
      id: 2384,
      ibgeId: 2705408,
      name: 'Monteirópolis',
    },
    {
      id: 2385,
      ibgeId: 2705705,
      name: "Olho D'Água das Flores",
    },
    {
      id: 2386,
      ibgeId: 2708402,
      name: 'São José da Tapera',
    },
    {
      id: 2387,
      ibgeId: 2707107,
      name: 'Piranhas',
    },
    {
      id: 2388,
      ibgeId: 2705804,
      name: "Olho D'Água do Casado",
    },
    {
      id: 2389,
      ibgeId: 2706422,
      name: 'Pariconha',
    },
    {
      id: 2390,
      ibgeId: 2702405,
      name: 'Delmiro Gouveia',
    },
    {
      id: 2391,
      ibgeId: 2700102,
      name: 'Água Branca',
    },
    {
      id: 2392,
      ibgeId: 2708006,
      name: 'Santana do Ipanema',
    },
    {
      id: 2393,
      ibgeId: 2707206,
      name: 'Poço das Trincheiras',
    },
    {
      id: 2394,
      ibgeId: 2708956,
      name: 'Senador Rui Palmeira',
    },
    {
      id: 2395,
      ibgeId: 2704609,
      name: 'Maravilha',
    },
    {
      id: 2396,
      ibgeId: 2706109,
      name: 'Ouro Branco',
    },
    {
      id: 2397,
      ibgeId: 2701605,
      name: 'Canapi',
    },
    {
      id: 2398,
      ibgeId: 2701803,
      name: 'Carneiros',
    },
    {
      id: 2399,
      ibgeId: 2705002,
      name: 'Mata Grande',
    },
    {
      id: 2400,
      ibgeId: 2703304,
      name: 'Inhapi',
    },
    {
      id: 2401,
      ibgeId: 2706000,
      name: 'Olivença',
    },
    {
      id: 2402,
      ibgeId: 2702504,
      name: 'Dois Riachos',
    },
    {
      id: 2403,
      ibgeId: 2701209,
      name: 'Cacimbinhas',
    },
    {
      id: 2404,
      ibgeId: 2704401,
      name: 'Major Isidoro',
    },
    {
      id: 2405,
      ibgeId: 2706307,
      name: 'Palmeira dos Índios',
    },
    {
      id: 2406,
      ibgeId: 2705309,
      name: 'Minador do Negrão',
    },
    {
      id: 2407,
      ibgeId: 2703106,
      name: 'Igaci',
    },
    {
      id: 2408,
      ibgeId: 2702553,
      name: 'Estrela de Alagoas',
    },
    {
      id: 2409,
      ibgeId: 2700805,
      name: 'Belém',
    },
    {
      id: 2410,
      ibgeId: 2709004,
      name: "Tanque D'Arca",
    },
    {
      id: 2411,
      ibgeId: 2709103,
      name: 'Taquarana',
    },
    {
      id: 2412,
      ibgeId: 2700201,
      name: 'Anadia',
    },
    {
      id: 2413,
      ibgeId: 2704807,
      name: 'Maribondo',
    },
    {
      id: 2414,
      ibgeId: 2701001,
      name: 'Boca da Mata',
    },
    {
      id: 2415,
      ibgeId: 2700409,
      name: 'Atalaia',
    },
    {
      id: 2416,
      ibgeId: 2709400,
      name: 'Viçosa',
    },
    {
      id: 2417,
      ibgeId: 2707008,
      name: 'Pindoba',
    },
    {
      id: 2418,
      ibgeId: 2704906,
      name: 'Mar Vermelho',
    },
    {
      id: 2419,
      ibgeId: 2706604,
      name: 'Paulo Jacinto',
    },
    {
      id: 2420,
      ibgeId: 2707602,
      name: 'Quebrangulo',
    },
    {
      id: 2421,
      ibgeId: 2701902,
      name: 'Chã Preta',
    },
    {
      id: 2422,
      ibgeId: 2701308,
      name: 'Cajueiro',
    },
    {
      id: 2423,
      ibgeId: 2701704,
      name: 'Capela',
    },
    {
      id: 2424,
      ibgeId: 2709301,
      name: 'União dos Palmares',
    },
    {
      id: 2425,
      ibgeId: 2705507,
      name: 'Murici',
    },
    {
      id: 2426,
      ibgeId: 2701100,
      name: 'Branquinha',
    },
    {
      id: 2427,
      ibgeId: 2708105,
      name: 'Santana do Mundaú',
    },
    {
      id: 2428,
      ibgeId: 2708303,
      name: 'São José da Laje',
    },
    {
      id: 2429,
      ibgeId: 2703007,
      name: 'Ibateguara',
    },
    {
      id: 2430,
      ibgeId: 2707305,
      name: 'Porto Calvo',
    },
    {
      id: 2431,
      ibgeId: 2705101,
      name: 'Matriz de Camaragibe',
    },
    {
      id: 2432,
      ibgeId: 2708501,
      name: 'São Luís do Quitunde',
    },
    {
      id: 2433,
      ibgeId: 2700508,
      name: 'Barra de Santo Antônio',
    },
    {
      id: 2434,
      ibgeId: 2706505,
      name: 'Passo de Camaragibe',
    },
    {
      id: 2435,
      ibgeId: 2706448,
      name: 'Paripueira',
    },
    {
      id: 2436,
      ibgeId: 2708709,
      name: 'São Miguel dos Milagres',
    },
    {
      id: 2437,
      ibgeId: 2707404,
      name: 'Porto de Pedras',
    },
    {
      id: 2438,
      ibgeId: 2703601,
      name: 'Japaratinga',
    },
    {
      id: 2439,
      ibgeId: 2704500,
      name: 'Maragogi',
    },
    {
      id: 2440,
      ibgeId: 2703502,
      name: 'Jacuípe',
    },
    {
      id: 2441,
      ibgeId: 2703908,
      name: 'Jundiá',
    },
    {
      id: 2442,
      ibgeId: 2701357,
      name: 'Campestre',
    },
    {
      id: 2443,
      ibgeId: 2705606,
      name: 'Novo Lino',
    },
    {
      id: 2444,
      ibgeId: 2702108,
      name: 'Colônia Leopoldina',
    },
    {
      id: 2445,
      ibgeId: 2703809,
      name: 'Joaquim Gomes',
    },
    {
      id: 2446,
      ibgeId: 2705200,
      name: 'Messias',
    },
    {
      id: 2447,
      ibgeId: 2702801,
      name: 'Flexeiras',
    },
    {
      id: 5073,
      ibgeId: 2707909,
      name: 'Santa Luzia do Norte',
    },
  ],
  AM: [
    {
      id: 3621,
      ibgeId: 1302603,
      name: 'Manaus',
    },
    {
      id: 3622,
      ibgeId: 1301902,
      name: 'Itacoatiara',
    },
    {
      id: 3623,
      ibgeId: 1304005,
      name: 'Silves',
    },
    {
      id: 3624,
      ibgeId: 1303569,
      name: 'Rio Preto da Eva',
    },
    {
      id: 3625,
      ibgeId: 1302009,
      name: 'Itapiranga',
    },
    {
      id: 3626,
      ibgeId: 1304302,
      name: 'Urucará',
    },
    {
      id: 3627,
      ibgeId: 1303957,
      name: 'São Sebastião do Uatumã',
    },
    {
      id: 3628,
      ibgeId: 1303007,
      name: 'Nhamundá',
    },
    {
      id: 3629,
      ibgeId: 1303403,
      name: 'Parintins',
    },
    {
      id: 3630,
      ibgeId: 1300508,
      name: 'Barreirinha',
    },
    {
      id: 3631,
      ibgeId: 1304401,
      name: 'Urucurituba',
    },
    {
      id: 3632,
      ibgeId: 1302900,
      name: 'Maués',
    },
    {
      id: 3633,
      ibgeId: 1300680,
      name: 'Boa Vista do Ramos',
    },
    {
      id: 3634,
      ibgeId: 1300805,
      name: 'Borba',
    },
    {
      id: 3635,
      ibgeId: 1303106,
      name: 'Nova Olinda do Norte',
    },
    {
      id: 3636,
      ibgeId: 1300300,
      name: 'Autazes',
    },
    {
      id: 3637,
      ibgeId: 1301100,
      name: 'Careiro',
    },
    {
      id: 3638,
      ibgeId: 1301159,
      name: 'Careiro da Várzea',
    },
    {
      id: 3639,
      ibgeId: 1303304,
      name: 'Novo Aripuanã',
    },
    {
      id: 3640,
      ibgeId: 1300144,
      name: 'Apuí',
    },
    {
      id: 3641,
      ibgeId: 1302702,
      name: 'Manicoré',
    },
    {
      id: 3657,
      ibgeId: 1302504,
      name: 'Manacapuru',
    },
    {
      id: 3658,
      ibgeId: 1301852,
      name: 'Iranduba',
    },
    {
      id: 3659,
      ibgeId: 1300839,
      name: 'Caapiranga',
    },
    {
      id: 3660,
      ibgeId: 1300631,
      name: 'Beruri',
    },
    {
      id: 3661,
      ibgeId: 1302553,
      name: 'Manaquiri',
    },
    {
      id: 3662,
      ibgeId: 1300102,
      name: 'Anori',
    },
    {
      id: 3663,
      ibgeId: 1300086,
      name: 'Anamã',
    },
    {
      id: 3664,
      ibgeId: 1301308,
      name: 'Codajás',
    },
    {
      id: 3665,
      ibgeId: 1301209,
      name: 'Coari',
    },
    {
      id: 3666,
      ibgeId: 1304104,
      name: 'Tapauá',
    },
    {
      id: 3667,
      ibgeId: 1302801,
      name: 'Maraã',
    },
    {
      id: 3668,
      ibgeId: 1302108,
      name: 'Japurá',
    },
    {
      id: 3669,
      ibgeId: 1301001,
      name: 'Carauari',
    },
    {
      id: 3670,
      ibgeId: 1301951,
      name: 'Itamarati',
    },
    {
      id: 3671,
      ibgeId: 1302207,
      name: 'Juruá',
    },
    {
      id: 3672,
      ibgeId: 1304260,
      name: 'Uarini',
    },
    {
      id: 3673,
      ibgeId: 1300029,
      name: 'Alvarães',
    },
    {
      id: 3674,
      ibgeId: 1304203,
      name: 'Tefé',
    },
    {
      id: 3675,
      ibgeId: 1303908,
      name: 'São Paulo de Olivença',
    },
    {
      id: 3676,
      ibgeId: 1300060,
      name: 'Amaturá',
    },
    {
      id: 3677,
      ibgeId: 1300607,
      name: 'Benjamin Constant',
    },
    {
      id: 3678,
      ibgeId: 1304062,
      name: 'Tabatinga',
    },
    {
      id: 3679,
      ibgeId: 1300201,
      name: 'Atalaia do Norte',
    },
    {
      id: 3680,
      ibgeId: 1302306,
      name: 'Jutaí',
    },
    {
      id: 3681,
      ibgeId: 1301605,
      name: 'Fonte Boa',
    },
    {
      id: 3682,
      ibgeId: 1303700,
      name: 'Santo Antônio do Içá',
    },
    {
      id: 3683,
      ibgeId: 1304237,
      name: 'Tonantins',
    },
    {
      id: 3684,
      ibgeId: 1300409,
      name: 'Barcelos',
    },
    {
      id: 3685,
      ibgeId: 1303205,
      name: 'Novo Airão',
    },
    {
      id: 3686,
      ibgeId: 1303536,
      name: 'Presidente Figueiredo',
    },
    {
      id: 3687,
      ibgeId: 1303601,
      name: 'Santa Isabel do Rio Negro',
    },
    {
      id: 3688,
      ibgeId: 1303809,
      name: 'São Gabriel da Cachoeira',
    },
    {
      id: 3689,
      ibgeId: 1301704,
      name: 'Humaitá',
    },
    {
      id: 3690,
      ibgeId: 1300904,
      name: 'Canutama',
    },
    {
      id: 3691,
      ibgeId: 1302405,
      name: 'Lábrea',
    },
    {
      id: 3692,
      ibgeId: 1300706,
      name: 'Boca do Acre',
    },
    {
      id: 3693,
      ibgeId: 1303502,
      name: 'Pauini',
    },
    {
      id: 3694,
      ibgeId: 1301506,
      name: 'Envira',
    },
    {
      id: 3695,
      ibgeId: 1301407,
      name: 'Eirunepé',
    },
    {
      id: 3696,
      ibgeId: 1301803,
      name: 'Ipixuna',
    },
    {
      id: 3697,
      ibgeId: 1301654,
      name: 'Guajará',
    },
  ],
  AP: [
    {
      id: 3605,
      ibgeId: 1600303,
      name: 'Macapá',
    },
    {
      id: 3606,
      ibgeId: 1600238,
      name: 'Ferreira Gomes',
    },
    {
      id: 3607,
      ibgeId: 1600550,
      name: 'Pracuúba',
    },
    {
      id: 3608,
      ibgeId: 1600279,
      name: 'Laranjal do Jari',
    },
    {
      id: 3609,
      ibgeId: 1600808,
      name: 'Vitória do Jari',
    },
    {
      id: 3610,
      ibgeId: 1600600,
      name: 'Santana',
    },
    {
      id: 3611,
      ibgeId: 1600402,
      name: 'Mazagão',
    },
    {
      id: 3612,
      ibgeId: 1600154,
      name: 'Pedra Branca do Amaparí',
    },
    {
      id: 3613,
      ibgeId: 1600055,
      name: 'Serra do Navio',
    },
    {
      id: 3614,
      ibgeId: 1600105,
      name: 'Amapá',
    },
    {
      id: 3615,
      ibgeId: 1600204,
      name: 'Calçoene',
    },
    {
      id: 3616,
      ibgeId: 1600212,
      name: 'Cutias',
    },
    {
      id: 3617,
      ibgeId: 1600253,
      name: 'Itaubal',
    },
    {
      id: 3618,
      ibgeId: 1600501,
      name: 'Oiapoque',
    },
    {
      id: 3619,
      ibgeId: 1600709,
      name: 'Tartarugalzinho',
    },
    {
      id: 3620,
      ibgeId: 1600535,
      name: 'Porto Grande',
    },
  ],
  BA: [
    {
      id: 1670,
      ibgeId: 2927408,
      name: 'Salvador',
    },
    {
      id: 1671,
      ibgeId: 2919926,
      name: 'Madre de Deus',
    },
    {
      id: 1672,
      ibgeId: 2919207,
      name: 'Lauro de Freitas',
    },
    {
      id: 1673,
      ibgeId: 2905701,
      name: 'Camaçari',
    },
    {
      id: 1674,
      ibgeId: 2910057,
      name: "Dias D'Ávila",
    },
    {
      id: 1675,
      ibgeId: 2930709,
      name: 'Simões Filho',
    },
    {
      id: 1676,
      ibgeId: 2906501,
      name: 'Candeias',
    },
    {
      id: 1677,
      ibgeId: 2929503,
      name: 'São Sebastião do Passé',
    },
    {
      id: 1678,
      ibgeId: 2929206,
      name: 'São Francisco do Conde',
    },
    {
      id: 1679,
      ibgeId: 2910800,
      name: 'Feira de Santana',
    },
    {
      id: 1680,
      ibgeId: 2927507,
      name: 'Santa Bárbara',
    },
    {
      id: 1681,
      ibgeId: 2931103,
      name: 'Tanquinho',
    },
    {
      id: 1682,
      ibgeId: 2901700,
      name: 'Antônio Cardoso',
    },
    {
      id: 1683,
      ibgeId: 2928802,
      name: 'Santo Estêvão',
    },
    {
      id: 1684,
      ibgeId: 2928604,
      name: 'Santo Amaro',
    },
    {
      id: 1685,
      ibgeId: 2929750,
      name: 'Saubara',
    },
    {
      id: 1686,
      ibgeId: 2901106,
      name: 'Amélia Rodrigues',
    },
    {
      id: 1687,
      ibgeId: 2908507,
      name: 'Conceição do Jacuípe',
    },
    {
      id: 1688,
      ibgeId: 2908903,
      name: 'Coração de Maria',
    },
    {
      id: 1689,
      ibgeId: 2914505,
      name: 'Irará',
    },
    {
      id: 1690,
      ibgeId: 2928307,
      name: 'Santanópolis',
    },
    {
      id: 1691,
      ibgeId: 2931707,
      name: 'Terra Nova',
    },
    {
      id: 1692,
      ibgeId: 2931400,
      name: 'Teodoro Sampaio',
    },
    {
      id: 1693,
      ibgeId: 2904902,
      name: 'Cachoeira',
    },
    {
      id: 1694,
      ibgeId: 2908200,
      name: 'Conceição da Feira',
    },
    {
      id: 1695,
      ibgeId: 2929305,
      name: 'São Gonçalo dos Campos',
    },
    {
      id: 1696,
      ibgeId: 2922300,
      name: 'Muritiba',
    },
    {
      id: 1697,
      ibgeId: 2904852,
      name: 'Cabaceiras do Paraguaçu',
    },
    {
      id: 1698,
      ibgeId: 2911600,
      name: 'Governador Mangabeira',
    },
    {
      id: 1699,
      ibgeId: 2925931,
      name: 'Quixabeira',
    },
    {
      id: 1700,
      ibgeId: 2929008,
      name: 'São Félix',
    },
    {
      id: 1701,
      ibgeId: 2909802,
      name: 'Cruz das Almas',
    },
    {
      id: 1702,
      ibgeId: 2922508,
      name: 'Nazaré',
    },
    {
      id: 1703,
      ibgeId: 2920601,
      name: 'Maragogipe',
    },
    {
      id: 1704,
      ibgeId: 2928703,
      name: 'Santo Antônio de Jesus',
    },
    {
      id: 1705,
      ibgeId: 2927309,
      name: 'Salinas da Margarida',
    },
    {
      id: 1706,
      ibgeId: 2916104,
      name: 'Itaparica',
    },
    {
      id: 1707,
      ibgeId: 2933208,
      name: 'Vera Cruz',
    },
    {
      id: 1708,
      ibgeId: 2917805,
      name: 'Jaguaripe',
    },
    {
      id: 1709,
      ibgeId: 2902302,
      name: 'Aratuípe',
    },
    {
      id: 1710,
      ibgeId: 2907301,
      name: 'Castro Alves',
    },
    {
      id: 1711,
      ibgeId: 2925956,
      name: 'Rafael Jambeiro',
    },
    {
      id: 1712,
      ibgeId: 2929602,
      name: 'Sapeaçu',
    },
    {
      id: 1713,
      ibgeId: 2908309,
      name: 'Conceição do Almeida',
    },
    {
      id: 1714,
      ibgeId: 2929107,
      name: 'São Felipe',
    },
    {
      id: 1715,
      ibgeId: 2910206,
      name: 'Dom Macedo Costa',
    },
    {
      id: 1716,
      ibgeId: 2933174,
      name: 'Varzedo',
    },
    {
      id: 1717,
      ibgeId: 2922201,
      name: 'Muniz Ferreira',
    },
    {
      id: 1718,
      ibgeId: 2929404,
      name: 'São Miguel das Matas',
    },
    {
      id: 1719,
      ibgeId: 2928505,
      name: 'Santa Teresinha',
    },
    {
      id: 1720,
      ibgeId: 2914000,
      name: 'Ipirá',
    },
    {
      id: 1721,
      ibgeId: 2924652,
      name: 'Pintadas',
    },
    {
      id: 1722,
      ibgeId: 2902609,
      name: 'Baixa Grande',
    },
    {
      id: 1723,
      ibgeId: 2920106,
      name: 'Mairi',
    },
    {
      id: 1724,
      ibgeId: 2933059,
      name: 'Várzea da Roça',
    },
    {
      id: 1725,
      ibgeId: 2926301,
      name: 'Riachão do Jacuípe',
    },
    {
      id: 1726,
      ibgeId: 2922730,
      name: 'Nova Fátima',
    },
    {
      id: 1727,
      ibgeId: 2906857,
      name: 'Capela do Alto Alegre',
    },
    {
      id: 1728,
      ibgeId: 2911253,
      name: 'Gavião',
    },
    {
      id: 1729,
      ibgeId: 2924058,
      name: 'Pé de Serra',
    },
    {
      id: 1730,
      ibgeId: 2930402,
      name: 'Serra Preta',
    },
    {
      id: 1731,
      ibgeId: 2901502,
      name: 'Anguera',
    },
    {
      id: 1732,
      ibgeId: 2913804,
      name: 'Ipecaetá',
    },
    {
      id: 1733,
      ibgeId: 2933158,
      name: 'Várzea Nova',
    },
    {
      id: 1734,
      ibgeId: 2906873,
      name: 'Capim Grosso',
    },
    {
      id: 1735,
      ibgeId: 2929370,
      name: 'São José do Jacuípe',
    },
    {
      id: 1736,
      ibgeId: 2917508,
      name: 'Jacobina',
    },
    {
      id: 1737,
      ibgeId: 2930600,
      name: 'Serrolândia',
    },
    {
      id: 1738,
      ibgeId: 2933109,
      name: 'Várzea do Poço',
    },
    {
      id: 1739,
      ibgeId: 2923357,
      name: 'Ourolândia',
    },
    {
      id: 1740,
      ibgeId: 2921203,
      name: 'Miguel Calmon',
    },
    {
      id: 1741,
      ibgeId: 2905107,
      name: 'Caém',
    },
    {
      id: 1742,
      ibgeId: 2929800,
      name: 'Saúde',
    },
    {
      id: 1743,
      ibgeId: 2921401,
      name: 'Mirangaba',
    },
    {
      id: 1744,
      ibgeId: 2905503,
      name: 'Caldeirão Grande',
    },
    {
      id: 1745,
      ibgeId: 2925253,
      name: 'Ponto Novo',
    },
    {
      id: 1746,
      ibgeId: 2924603,
      name: 'Pindobaçu',
    },
    {
      id: 1747,
      ibgeId: 2910859,
      name: 'Filadélfia',
    },
    {
      id: 1748,
      ibgeId: 2901809,
      name: 'Antônio Gonçalves',
    },
    {
      id: 1749,
      ibgeId: 2906006,
      name: 'Campo Formoso',
    },
    {
      id: 1750,
      ibgeId: 2932457,
      name: 'Umburanas',
    },
    {
      id: 1751,
      ibgeId: 2922102,
      name: 'Mundo Novo',
    },
    {
      id: 1752,
      ibgeId: 2924801,
      name: 'Piritiba',
    },
    {
      id: 1753,
      ibgeId: 2931301,
      name: 'Tapiramutá',
    },
    {
      id: 1754,
      ibgeId: 2921708,
      name: 'Morro do Chapéu',
    },
    {
      id: 1755,
      ibgeId: 2905305,
      name: 'Cafarnaum',
    },
    {
      id: 1756,
      ibgeId: 2922052,
      name: 'Mulungu do Morro',
    },
    {
      id: 1757,
      ibgeId: 2906204,
      name: 'Canarana',
    },
    {
      id: 1758,
      ibgeId: 2903235,
      name: 'Barro Alto',
    },
    {
      id: 1759,
      ibgeId: 2914604,
      name: 'Irecê',
    },
    {
      id: 1760,
      ibgeId: 2916500,
      name: 'Itapicuru',
    },
    {
      id: 1761,
      ibgeId: 2919157,
      name: 'Lapão',
    },
    {
      id: 1762,
      ibgeId: 2901155,
      name: 'América Dourada',
    },
    {
      id: 1763,
      ibgeId: 2903508,
      name: 'Belo Campo',
    },
    {
      id: 1764,
      ibgeId: 2929255,
      name: 'São Gabriel',
    },
    {
      id: 1765,
      ibgeId: 2918357,
      name: 'João Dourado',
    },
    {
      id: 1766,
      ibgeId: 2918506,
      name: 'Jussara',
    },
    {
      id: 1767,
      ibgeId: 2925600,
      name: 'Presidente Dutra',
    },
    {
      id: 1768,
      ibgeId: 2907608,
      name: 'Central',
    },
    {
      id: 1769,
      ibgeId: 2932408,
      name: 'Uibaí',
    },
    {
      id: 1770,
      ibgeId: 2913101,
      name: 'Ibititá',
    },
    {
      id: 1771,
      ibgeId: 2912400,
      name: 'Ibipeba',
    },
    {
      id: 1772,
      ibgeId: 2903003,
      name: 'Barra do Mendes',
    },
    {
      id: 1773,
      ibgeId: 2933307,
      name: 'Vitória da Conquista',
    },
    {
      id: 1774,
      ibgeId: 2902906,
      name: 'Barra do Choça',
    },
    {
      id: 1775,
      ibgeId: 2904803,
      name: 'Caatiba',
    },
    {
      id: 1776,
      ibgeId: 2915809,
      name: 'Itambé',
    },
    {
      id: 1777,
      ibgeId: 2910404,
      name: 'Encruzilhada',
    },
    {
      id: 1778,
      ibgeId: 2926657,
      name: 'Ribeirão do Largo',
    },
    {
      id: 1779,
      ibgeId: 2906709,
      name: 'Cândido Sales',
    },
    {
      id: 1780,
      ibgeId: 2931806,
      name: 'Tremedal',
    },
    {
      id: 1781,
      ibgeId: 2906899,
      name: 'Caraíbas',
    },
    {
      id: 1782,
      ibgeId: 2901205,
      name: 'Anagé',
    },
    {
      id: 1783,
      ibgeId: 2925006,
      name: 'Planalto',
    },
    {
      id: 1784,
      ibgeId: 2918001,
      name: 'Jequié',
    },
    {
      id: 1785,
      ibgeId: 2918704,
      name: 'Lafaiete Coutinho',
    },
    {
      id: 1786,
      ibgeId: 2900603,
      name: 'Aiquara',
    },
    {
      id: 1787,
      ibgeId: 2918308,
      name: 'Jitaúna',
    },
    {
      id: 1788,
      ibgeId: 2915106,
      name: 'Itagi',
    },
    {
      id: 1789,
      ibgeId: 2920403,
      name: 'Manoel Vitorino',
    },
    {
      id: 1790,
      ibgeId: 2903706,
      name: 'Boa Nova',
    },
    {
      id: 1791,
      ibgeId: 2921450,
      name: 'Mirante',
    },
    {
      id: 1792,
      ibgeId: 2925105,
      name: 'Poções',
    },
    {
      id: 1793,
      ibgeId: 2903953,
      name: 'Bom Jesus da Serra',
    },
    {
      id: 1794,
      ibgeId: 2905156,
      name: 'Caetanos',
    },
    {
      id: 1795,
      ibgeId: 2922706,
      name: 'Nova Canaã',
    },
    {
      id: 1796,
      ibgeId: 2913507,
      name: 'Iguaí',
    },
    {
      id: 1797,
      ibgeId: 2912301,
      name: 'Ibicuí',
    },
    {
      id: 1798,
      ibgeId: 2901007,
      name: 'Amargosa',
    },
    {
      id: 1799,
      ibgeId: 2910305,
      name: 'Elísio Medrado',
    },
    {
      id: 1800,
      ibgeId: 2932101,
      name: 'Ubaíra',
    },
    {
      id: 1801,
      ibgeId: 2921302,
      name: 'Milagres',
    },
    {
      id: 1802,
      ibgeId: 2927903,
      name: 'Santa Inês',
    },
    {
      id: 1803,
      ibgeId: 2904308,
      name: 'Brejões',
    },
    {
      id: 1804,
      ibgeId: 2909505,
      name: 'Cravolândia',
    },
    {
      id: 1805,
      ibgeId: 2916708,
      name: 'Itaquara',
    },
    {
      id: 1806,
      ibgeId: 2917607,
      name: 'Jaguaquara',
    },
    {
      id: 1807,
      ibgeId: 2916906,
      name: 'Itiruçu',
    },
    {
      id: 1808,
      ibgeId: 2901957,
      name: 'Apuarema',
    },
    {
      id: 1809,
      ibgeId: 2920502,
      name: 'Maracás',
    },
    {
      id: 1810,
      ibgeId: 2919058,
      name: 'Lajedo do Tabocal',
    },
    {
      id: 1811,
      ibgeId: 2914208,
      name: 'Irajuba',
    },
    {
      id: 1812,
      ibgeId: 2924900,
      name: 'Planaltino',
    },
    {
      id: 1813,
      ibgeId: 2922805,
      name: 'Nova Itarana',
    },
    {
      id: 1814,
      ibgeId: 2932903,
      name: 'Valença',
    },
    {
      id: 1815,
      ibgeId: 2925758,
      name: 'Presidente Tancredo Neves',
    },
    {
      id: 1816,
      ibgeId: 2905404,
      name: 'Cairu',
    },
    {
      id: 1817,
      ibgeId: 2931202,
      name: 'Taperoá',
    },
    {
      id: 1818,
      ibgeId: 2917300,
      name: 'Ituberá',
    },
    {
      id: 1819,
      ibgeId: 2924678,
      name: 'Piraí do Norte',
    },
    {
      id: 1820,
      ibgeId: 2922607,
      name: 'Nilo Peçanha',
    },
    {
      id: 1821,
      ibgeId: 2913457,
      name: 'Igrapiúna',
    },
    {
      id: 1822,
      ibgeId: 2905800,
      name: 'Camamu',
    },
    {
      id: 1823,
      ibgeId: 2911204,
      name: 'Gandu',
    },
    {
      id: 1824,
      ibgeId: 2922755,
      name: 'Nova Ibiá',
    },
    {
      id: 1825,
      ibgeId: 2915700,
      name: 'Itamari',
    },
    {
      id: 1826,
      ibgeId: 2933505,
      name: 'Wenceslau Guimarães',
    },
    {
      id: 1827,
      ibgeId: 2931608,
      name: 'Teolândia',
    },
    {
      id: 1828,
      ibgeId: 2918209,
      name: 'Jiquiriçá',
    },
    {
      id: 1829,
      ibgeId: 2922409,
      name: 'Mutuípe',
    },
    {
      id: 1830,
      ibgeId: 2918803,
      name: 'Laje',
    },
    {
      id: 1831,
      ibgeId: 2912707,
      name: 'Ibirapitanga',
    },
    {
      id: 1832,
      ibgeId: 2920700,
      name: 'Maraú',
    },
    {
      id: 1833,
      ibgeId: 2914901,
      name: 'Itacaré',
    },
    {
      id: 1834,
      ibgeId: 2911501,
      name: 'Gongogi',
    },
    {
      id: 1835,
      ibgeId: 2932200,
      name: 'Ubaitaba',
    },
    {
      id: 1836,
      ibgeId: 2932309,
      name: 'Ubatã',
    },
    {
      id: 1837,
      ibgeId: 2903102,
      name: 'Barra do Rocha',
    },
    {
      id: 1838,
      ibgeId: 2913903,
      name: 'Ipiaú',
    },
    {
      id: 1839,
      ibgeId: 2912905,
      name: 'Ibirataia',
    },
    {
      id: 1840,
      ibgeId: 2915205,
      name: 'Itagibá',
    },
    {
      id: 1841,
      ibgeId: 2910008,
      name: 'Dário Meira',
    },
    {
      id: 1842,
      ibgeId: 2914802,
      name: 'Itabuna',
    },
    {
      id: 1843,
      ibgeId: 2904704,
      name: 'Buerarema',
    },
    {
      id: 1844,
      ibgeId: 2929354,
      name: 'São José da Vitória',
    },
    {
      id: 1845,
      ibgeId: 2918555,
      name: 'Jussari',
    },
    {
      id: 1846,
      ibgeId: 2903300,
      name: 'Barro Preto',
    },
    {
      id: 1847,
      ibgeId: 2915502,
      name: 'Itajuípe',
    },
    {
      id: 1848,
      ibgeId: 2908002,
      name: 'Coaraci',
    },
    {
      id: 1849,
      ibgeId: 2900900,
      name: 'Almadina',
    },
    {
      id: 1850,
      ibgeId: 2916609,
      name: 'Itapitanga',
    },
    {
      id: 1851,
      ibgeId: 2913606,
      name: 'Ilhéus',
    },
    {
      id: 1852,
      ibgeId: 2902401,
      name: 'Aurelino Leal',
    },
    {
      id: 1853,
      ibgeId: 2932705,
      name: 'Uruçuca',
    },
    {
      id: 1854,
      ibgeId: 2932507,
      name: 'Una',
    },
    {
      id: 1855,
      ibgeId: 2902252,
      name: 'Arataca',
    },
    {
      id: 1856,
      ibgeId: 2916401,
      name: 'Itapetinga',
    },
    {
      id: 1857,
      ibgeId: 2917102,
      name: 'Itororó',
    },
    {
      id: 1858,
      ibgeId: 2910909,
      name: 'Firmino Alves',
    },
    {
      id: 1859,
      ibgeId: 2927804,
      name: 'Santa Cruz da Vitória',
    },
    {
      id: 1860,
      ibgeId: 2915403,
      name: 'Itaju do Colônia',
    },
    {
      id: 1861,
      ibgeId: 2911006,
      name: 'Floresta Azul',
    },
    {
      id: 1862,
      ibgeId: 2912103,
      name: 'Ibicaraí',
    },
    {
      id: 1863,
      ibgeId: 2916203,
      name: 'Itapé',
    },
    {
      id: 1864,
      ibgeId: 2919702,
      name: 'Macarani',
    },
    {
      id: 1865,
      ibgeId: 2920007,
      name: 'Maiquinique',
    },
    {
      id: 1866,
      ibgeId: 2916807,
      name: 'Itarantim',
    },
    {
      id: 1867,
      ibgeId: 2925402,
      name: 'Potiraguá',
    },
    {
      id: 1868,
      ibgeId: 2903409,
      name: 'Belmonte',
    },
    {
      id: 1869,
      ibgeId: 2927705,
      name: 'Santa Cruz Cabrália',
    },
    {
      id: 1870,
      ibgeId: 2925303,
      name: 'Porto Seguro',
    },
    {
      id: 1871,
      ibgeId: 2910727,
      name: 'Eunápolis',
    },
    {
      id: 1872,
      ibgeId: 2918456,
      name: 'Jucuruçu',
    },
    {
      id: 1873,
      ibgeId: 2915601,
      name: 'Itamaraju',
    },
    {
      id: 1874,
      ibgeId: 2911808,
      name: 'Guaratinga',
    },
    {
      id: 1875,
      ibgeId: 2914653,
      name: 'Itabela',
    },
    {
      id: 1876,
      ibgeId: 2915304,
      name: 'Itagimirim',
    },
    {
      id: 1877,
      ibgeId: 2916302,
      name: 'Itapebi',
    },
    {
      id: 1878,
      ibgeId: 2906303,
      name: 'Canavieiras',
    },
    {
      id: 1879,
      ibgeId: 2928059,
      name: 'Santa Luzia',
    },
    {
      id: 1880,
      ibgeId: 2920908,
      name: 'Mascote',
    },
    {
      id: 1881,
      ibgeId: 2905602,
      name: 'Camacan',
    },
    {
      id: 1882,
      ibgeId: 2923902,
      name: 'Pau Brasil',
    },
    {
      id: 1883,
      ibgeId: 2906907,
      name: 'Caravelas',
    },
    {
      id: 1884,
      ibgeId: 2900801,
      name: 'Alcobaça',
    },
    {
      id: 1885,
      ibgeId: 2923001,
      name: 'Nova Viçosa',
    },
    {
      id: 1886,
      ibgeId: 2922003,
      name: 'Mucuri',
    },
    {
      id: 1887,
      ibgeId: 2912806,
      name: 'Ibirapuã',
    },
    {
      id: 1888,
      ibgeId: 2918902,
      name: 'Lajedão',
    },
    {
      id: 1889,
      ibgeId: 2933257,
      name: 'Vereda',
    },
    {
      id: 1890,
      ibgeId: 2921104,
      name: 'Medeiros Neto',
    },
    {
      id: 1891,
      ibgeId: 2916005,
      name: 'Itanhém',
    },
    {
      id: 1892,
      ibgeId: 2925501,
      name: 'Prado',
    },
    {
      id: 1893,
      ibgeId: 2931350,
      name: 'Teixeira de Freitas',
    },
    {
      id: 1894,
      ibgeId: 2904605,
      name: 'Brumado',
    },
    {
      id: 1895,
      ibgeId: 2920304,
      name: 'Malhada de Pedras',
    },
    {
      id: 1896,
      ibgeId: 2902005,
      name: 'Aracatu',
    },
    {
      id: 1897,
      ibgeId: 2919504,
      name: 'Livramento de Nossa Senhora',
    },
    {
      id: 1898,
      ibgeId: 2910107,
      name: 'Dom Basílio',
    },
    {
      id: 1899,
      ibgeId: 2926707,
      name: 'Rio de Contas',
    },
    {
      id: 1900,
      ibgeId: 2900504,
      name: 'Érico Cardoso',
    },
    {
      id: 1901,
      ibgeId: 2923605,
      name: 'Paramirim',
    },
    {
      id: 1902,
      ibgeId: 2908705,
      name: 'Condeúba',
    },
    {
      id: 1903,
      ibgeId: 2911659,
      name: 'Guajeru',
    },
    {
      id: 1904,
      ibgeId: 2926806,
      name: 'Rio do Antônio',
    },
    {
      id: 1905,
      ibgeId: 2925709,
      name: 'Presidente Jânio Quadros',
    },
    {
      id: 1906,
      ibgeId: 2919959,
      name: 'Maetinga',
    },
    {
      id: 1907,
      ibgeId: 2924702,
      name: 'Piripá',
    },
    {
      id: 1908,
      ibgeId: 2909000,
      name: 'Cordeiros',
    },
    {
      id: 1909,
      ibgeId: 2921807,
      name: 'Mortugaba',
    },
    {
      id: 1910,
      ibgeId: 2905008,
      name: 'Caculé',
    },
    {
      id: 1911,
      ibgeId: 2917409,
      name: 'Jacaraci',
    },
    {
      id: 1912,
      ibgeId: 2919405,
      name: 'Licínio de Almeida',
    },
    {
      id: 1913,
      ibgeId: 2932606,
      name: 'Urandi',
    },
    {
      id: 1914,
      ibgeId: 2924504,
      name: 'Pindaí',
    },
    {
      id: 1915,
      ibgeId: 2906600,
      name: 'Candiba',
    },
    {
      id: 1916,
      ibgeId: 2912004,
      name: 'Ibiassucê',
    },
    {
      id: 1917,
      ibgeId: 2905206,
      name: 'Caetité',
    },
    {
      id: 1918,
      ibgeId: 2918753,
      name: 'Lagoa Real',
    },
    {
      id: 1919,
      ibgeId: 2911709,
      name: 'Guanambi',
    },
    {
      id: 1920,
      ibgeId: 2917334,
      name: 'Iuiu',
    },
    {
      id: 1921,
      ibgeId: 2920205,
      name: 'Malhada',
    },
    {
      id: 1922,
      ibgeId: 2907103,
      name: 'Carinhanha',
    },
    {
      id: 1923,
      ibgeId: 2910776,
      name: 'Feira da Mata',
    },
    {
      id: 1924,
      ibgeId: 2930006,
      name: 'Sebastião Laranjeiras',
    },
    {
      id: 1925,
      ibgeId: 2923407,
      name: 'Palmas de Monte Alto',
    },
    {
      id: 1926,
      ibgeId: 2926400,
      name: 'Riacho de Santana',
    },
    {
      id: 1927,
      ibgeId: 2921054,
      name: 'Matina',
    },
    {
      id: 1928,
      ibgeId: 2913408,
      name: 'Igaporã',
    },
    {
      id: 1929,
      ibgeId: 2919801,
      name: 'Macaúbas',
    },
    {
      id: 1930,
      ibgeId: 2904100,
      name: 'Boquira',
    },
    {
      id: 1931,
      ibgeId: 2912509,
      name: 'Ibipitanga',
    },
    {
      id: 1932,
      ibgeId: 2926905,
      name: 'Rio do Pires',
    },
    {
      id: 1933,
      ibgeId: 2904209,
      name: 'Botuporã',
    },
    {
      id: 1934,
      ibgeId: 2907558,
      name: 'Caturama',
    },
    {
      id: 1935,
      ibgeId: 2931053,
      name: 'Tanque Novo',
    },
    {
      id: 1936,
      ibgeId: 2931004,
      name: 'Tanhaçu',
    },
    {
      id: 1937,
      ibgeId: 2908804,
      name: 'Contendas do Sincorá',
    },
    {
      id: 1938,
      ibgeId: 2917201,
      name: 'Ituaçu',
    },
    {
      id: 1939,
      ibgeId: 2902807,
      name: 'Barra da Estiva',
    },
    {
      id: 1940,
      ibgeId: 2918605,
      name: 'Jussiape',
    },
    {
      id: 1941,
      ibgeId: 2900108,
      name: 'Abaíra',
    },
    {
      id: 1942,
      ibgeId: 2913002,
      name: 'Ibitiara',
    },
    {
      id: 1943,
      ibgeId: 2923035,
      name: 'Novo Horizonte',
    },
    {
      id: 1944,
      ibgeId: 2904001,
      name: 'Boninal',
    },
    {
      id: 1945,
      ibgeId: 2921906,
      name: 'Mucugê',
    },
    {
      id: 1946,
      ibgeId: 2912202,
      name: 'Ibicoara',
    },
    {
      id: 1947,
      ibgeId: 2924306,
      name: 'Piatã',
    },
    {
      id: 1948,
      ibgeId: 2914307,
      name: 'Iramaia',
    },
    {
      id: 1949,
      ibgeId: 2920809,
      name: 'Marcionílio Souza',
    },
    {
      id: 1950,
      ibgeId: 2915007,
      name: 'Itaeté',
    },
    {
      id: 1951,
      ibgeId: 2927200,
      name: 'Ruy Barbosa',
    },
    {
      id: 1952,
      ibgeId: 2919603,
      name: 'Macajuba',
    },
    {
      id: 1953,
      ibgeId: 2932804,
      name: 'Utinga',
    },
    {
      id: 1954,
      ibgeId: 2904050,
      name: 'Bonito',
    },
    {
      id: 1955,
      ibgeId: 2919009,
      name: 'Lajedinho',
    },
    {
      id: 1956,
      ibgeId: 2901304,
      name: 'Andaraí',
    },
    {
      id: 1957,
      ibgeId: 2922854,
      name: 'Nova Redenção',
    },
    {
      id: 1958,
      ibgeId: 2912608,
      name: 'Ibiquera',
    },
    {
      id: 1959,
      ibgeId: 2903805,
      name: 'Boa Vista do Tupim',
    },
    {
      id: 1960,
      ibgeId: 2911907,
      name: 'Iaçu',
    },
    {
      id: 1961,
      ibgeId: 2916856,
      name: 'Itatim',
    },
    {
      id: 1962,
      ibgeId: 2914703,
      name: 'Itaberaba',
    },
    {
      id: 1963,
      ibgeId: 2929909,
      name: 'Seabra',
    },
    {
      id: 1964,
      ibgeId: 2923506,
      name: 'Palmeiras',
    },
    {
      id: 1965,
      ibgeId: 2919306,
      name: 'Lençóis',
    },
    {
      id: 1966,
      ibgeId: 2933406,
      name: 'Wagner',
    },
    {
      id: 1967,
      ibgeId: 2914406,
      name: 'Iraquara',
    },
    {
      id: 1968,
      ibgeId: 2930808,
      name: 'Souto Soares',
    },
    {
      id: 1969,
      ibgeId: 2902708,
      name: 'Barra',
    },
    {
      id: 1970,
      ibgeId: 2922250,
      name: 'Muquém de São Francisco',
    },
    {
      id: 1971,
      ibgeId: 2904753,
      name: 'Buritirama',
    },
    {
      id: 1972,
      ibgeId: 2928406,
      name: 'Santa Rita de Cássia',
    },
    {
      id: 1973,
      ibgeId: 2920452,
      name: 'Mansidão',
    },
    {
      id: 1974,
      ibgeId: 2926004,
      name: 'Remanso',
    },
    {
      id: 1975,
      ibgeId: 2905909,
      name: 'Campo Alegre de Lourdes',
    },
    {
      id: 1976,
      ibgeId: 2924405,
      name: 'Pilão Arcado',
    },
    {
      id: 1977,
      ibgeId: 2907202,
      name: 'Casa Nova',
    },
    {
      id: 1978,
      ibgeId: 2930204,
      name: 'Sento Sé',
    },
    {
      id: 1979,
      ibgeId: 2933604,
      name: 'Xique-Xique',
    },
    {
      id: 1980,
      ibgeId: 2915353,
      name: 'Itaguaçu da Bahia',
    },
    {
      id: 1981,
      ibgeId: 2911303,
      name: 'Gentio do Ouro',
    },
    {
      id: 1982,
      ibgeId: 2923704,
      name: 'Paratinga',
    },
    {
      id: 1983,
      ibgeId: 2913200,
      name: 'Ibotirama',
    },
    {
      id: 1984,
      ibgeId: 2923209,
      name: 'Oliveira dos Brejinhos',
    },
    {
      id: 1985,
      ibgeId: 2904506,
      name: 'Brotas de Macaúbas',
    },
    {
      id: 1986,
      ibgeId: 2921609,
      name: 'Morpará',
    },
    {
      id: 1987,
      ibgeId: 2914109,
      name: 'Ipupiara',
    },
    {
      id: 1988,
      ibgeId: 2903904,
      name: 'Bom Jesus da Lapa',
    },
    {
      id: 1989,
      ibgeId: 2930758,
      name: 'Sítio do Mato',
    },
    {
      id: 1990,
      ibgeId: 2930154,
      name: 'Serra do Ramalho',
    },
    {
      id: 1991,
      ibgeId: 2928109,
      name: 'Santa Maria da Vitória',
    },
    {
      id: 1992,
      ibgeId: 2909307,
      name: 'Correntina',
    },
    {
      id: 1993,
      ibgeId: 2917359,
      name: 'Jaborandi',
    },
    {
      id: 1994,
      ibgeId: 2929057,
      name: 'São Félix do Coribe',
    },
    {
      id: 1995,
      ibgeId: 2908101,
      name: 'Cocos',
    },
    {
      id: 1996,
      ibgeId: 2909109,
      name: 'Coribe',
    },
    {
      id: 1997,
      ibgeId: 2928208,
      name: 'Santana',
    },
    {
      id: 1998,
      ibgeId: 2906105,
      name: 'Canápolis',
    },
    {
      id: 1999,
      ibgeId: 2930303,
      name: 'Serra Dourada',
    },
    {
      id: 2000,
      ibgeId: 2904407,
      name: 'Brejolândia',
    },
    {
      id: 2001,
      ibgeId: 2930907,
      name: 'Tabocas do Brejo Velho',
    },
    {
      id: 2002,
      ibgeId: 2903201,
      name: 'Barreiras',
    },
    {
      id: 2003,
      ibgeId: 2928901,
      name: 'São Desidério',
    },
    {
      id: 2004,
      ibgeId: 2902500,
      name: 'Baianópolis',
    },
    {
      id: 2005,
      ibgeId: 2907400,
      name: 'Catolândia',
    },
    {
      id: 2006,
      ibgeId: 2919553,
      name: 'Luís Eduardo Magalhães',
    },
    {
      id: 2007,
      ibgeId: 2909406,
      name: 'Cotegipe',
    },
    {
      id: 2008,
      ibgeId: 2933455,
      name: 'Wanderley',
    },
    {
      id: 2009,
      ibgeId: 2909703,
      name: 'Cristópolis',
    },
    {
      id: 2010,
      ibgeId: 2901403,
      name: 'Angical',
    },
    {
      id: 2011,
      ibgeId: 2926202,
      name: 'Riachão das Neves',
    },
    {
      id: 2012,
      ibgeId: 2911105,
      name: 'Formosa do Rio Preto',
    },
    {
      id: 2013,
      ibgeId: 2900702,
      name: 'Alagoinhas',
    },
    {
      id: 2014,
      ibgeId: 2902054,
      name: 'Araçás',
    },
    {
      id: 2015,
      ibgeId: 2907509,
      name: 'Catu',
    },
    {
      id: 2016,
      ibgeId: 2925204,
      name: 'Pojuca',
    },
    {
      id: 2017,
      ibgeId: 2902203,
      name: 'Aramari',
    },
    {
      id: 2018,
      ibgeId: 2924108,
      name: 'Pedrão',
    },
    {
      id: 2019,
      ibgeId: 2923308,
      name: 'Ouriçangas',
    },
    {
      id: 2020,
      ibgeId: 2900405,
      name: 'Água Fria',
    },
    {
      id: 2021,
      ibgeId: 2910503,
      name: 'Entre Rios',
    },
    {
      id: 2022,
      ibgeId: 2921005,
      name: 'Mata de São João',
    },
    {
      id: 2023,
      ibgeId: 2915908,
      name: 'Itanagra',
    },
    {
      id: 2024,
      ibgeId: 2908606,
      name: 'Conde',
    },
    {
      id: 2025,
      ibgeId: 2917904,
      name: 'Jandaíra',
    },
    {
      id: 2026,
      ibgeId: 2927002,
      name: 'Rio Real',
    },
    {
      id: 2027,
      ibgeId: 2901908,
      name: 'Aporá',
    },
    {
      id: 2028,
      ibgeId: 2900306,
      name: 'Acajutiba',
    },
    {
      id: 2029,
      ibgeId: 2910602,
      name: 'Esplanada',
    },
    {
      id: 2030,
      ibgeId: 2907004,
      name: 'Cardeal da Silva',
    },
    {
      id: 2031,
      ibgeId: 2926608,
      name: 'Ribeira do Pombal',
    },
    {
      id: 2032,
      ibgeId: 2902658,
      name: 'Banzaê',
    },
    {
      id: 2033,
      ibgeId: 2907806,
      name: 'Cícero Dantas',
    },
    {
      id: 2034,
      ibgeId: 2910750,
      name: 'Fátima',
    },
    {
      id: 2035,
      ibgeId: 2901601,
      name: 'Antas',
    },
    {
      id: 2036,
      ibgeId: 2923803,
      name: 'Paripiranga',
    },
    {
      id: 2037,
      ibgeId: 2900355,
      name: 'Adustina',
    },
    {
      id: 2038,
      ibgeId: 2926509,
      name: 'Ribeira do Amparo',
    },
    {
      id: 2039,
      ibgeId: 2911857,
      name: 'Heliópolis',
    },
    {
      id: 2040,
      ibgeId: 2907905,
      name: 'Cipó',
    },
    {
      id: 2041,
      ibgeId: 2923050,
      name: 'Novo Triunfo',
    },
    {
      id: 2042,
      ibgeId: 2922904,
      name: 'Nova Soure',
    },
    {
      id: 2043,
      ibgeId: 2923100,
      name: 'Olindina',
    },
    {
      id: 2044,
      ibgeId: 2909604,
      name: 'Crisópolis',
    },
    {
      id: 2045,
      ibgeId: 2929701,
      name: 'Sátiro Dias',
    },
    {
      id: 2046,
      ibgeId: 2913705,
      name: 'Inhambupe',
    },
    {
      id: 2047,
      ibgeId: 2910701,
      name: 'Euclides da Cunha',
    },
    {
      id: 2048,
      ibgeId: 2906824,
      name: 'Canudos',
    },
    {
      id: 2049,
      ibgeId: 2918100,
      name: 'Jeremoabo',
    },
    {
      id: 2050,
      ibgeId: 2930766,
      name: 'Sítio do Quinto',
    },
    {
      id: 2051,
      ibgeId: 2927606,
      name: 'Santa Brígida',
    },
    {
      id: 2052,
      ibgeId: 2924207,
      name: 'Pedro Alexandre',
    },
    {
      id: 2053,
      ibgeId: 2909208,
      name: 'Coronel João Sá',
    },
    {
      id: 2054,
      ibgeId: 2924009,
      name: 'Paulo Afonso',
    },
    {
      id: 2055,
      ibgeId: 2911402,
      name: 'Glória',
    },
    {
      id: 2056,
      ibgeId: 2927101,
      name: 'Rodelas',
    },
    {
      id: 2057,
      ibgeId: 2919900,
      name: 'Macururé',
    },
    {
      id: 2058,
      ibgeId: 2907707,
      name: 'Chorrochó',
    },
    {
      id: 2059,
      ibgeId: 2900207,
      name: 'Abaré',
    },
    {
      id: 2060,
      ibgeId: 2930501,
      name: 'Serrinha',
    },
    {
      id: 2061,
      ibgeId: 2903276,
      name: 'Barrocas',
    },
    {
      id: 2062,
      ibgeId: 2906402,
      name: 'Candeal',
    },
    {
      id: 2063,
      ibgeId: 2919108,
      name: 'Lamarão',
    },
    {
      id: 2064,
      ibgeId: 2913309,
      name: 'Ichu',
    },
    {
      id: 2065,
      ibgeId: 2908408,
      name: 'Conceição do Coité',
    },
    {
      id: 2066,
      ibgeId: 2926103,
      name: 'Retirolândia',
    },
    {
      id: 2067,
      ibgeId: 2902104,
      name: 'Araci',
    },
    {
      id: 2068,
      ibgeId: 2931509,
      name: 'Teofilândia',
    },
    {
      id: 2069,
      ibgeId: 2903607,
      name: 'Biritinga',
    },
    {
      id: 2070,
      ibgeId: 2931905,
      name: 'Tucano',
    },
    {
      id: 2071,
      ibgeId: 2921500,
      name: 'Monte Santo',
    },
    {
      id: 2072,
      ibgeId: 2925907,
      name: 'Quijingue',
    },
    {
      id: 2073,
      ibgeId: 2906808,
      name: 'Cansanção',
    },
    {
      id: 2074,
      ibgeId: 2917003,
      name: 'Itiúba',
    },
    {
      id: 2075,
      ibgeId: 2925808,
      name: 'Queimadas',
    },
    {
      id: 2076,
      ibgeId: 2922656,
      name: 'Nordestina',
    },
    {
      id: 2077,
      ibgeId: 2928000,
      name: 'Santaluz',
    },
    {
      id: 2078,
      ibgeId: 2933000,
      name: 'Valente',
    },
    {
      id: 2079,
      ibgeId: 2928950,
      name: 'São Domingos',
    },
    {
      id: 2080,
      ibgeId: 2918407,
      name: 'Juazeiro',
    },
    {
      id: 2081,
      ibgeId: 2930774,
      name: 'Sobradinho',
    },
    {
      id: 2082,
      ibgeId: 2909901,
      name: 'Curaçá',
    },
    {
      id: 2083,
      ibgeId: 2932002,
      name: 'Uauá',
    },
    {
      id: 2084,
      ibgeId: 2917706,
      name: 'Jaguarari',
    },
    {
      id: 2085,
      ibgeId: 2930105,
      name: 'Senhor do Bonfim',
    },
    {
      id: 2086,
      ibgeId: 2901353,
      name: 'Andorinha',
    },
  ],
  CE: [
    {
      id: 2838,
      ibgeId: 2304400,
      name: 'Fortaleza',
    },
    {
      id: 2839,
      ibgeId: 2303709,
      name: 'Caucaia',
    },
    {
      id: 2840,
      ibgeId: 2301000,
      name: 'Aquiraz',
    },
    {
      id: 2841,
      ibgeId: 2304285,
      name: 'Eusébio',
    },
    {
      id: 2842,
      ibgeId: 2309706,
      name: 'Pacatuba',
    },
    {
      id: 2843,
      ibgeId: 2306256,
      name: 'Itaitinga',
    },
    {
      id: 2844,
      ibgeId: 2304954,
      name: 'Guaiúba',
    },
    {
      id: 2845,
      ibgeId: 2307650,
      name: 'Maracanaú',
    },
    {
      id: 2846,
      ibgeId: 2307700,
      name: 'Maranguape',
    },
    {
      id: 2847,
      ibgeId: 2312908,
      name: 'Sobral',
    },
    {
      id: 2848,
      ibgeId: 2304350,
      name: 'Forquilha',
    },
    {
      id: 2849,
      ibgeId: 2300507,
      name: 'Alcântaras',
    },
    {
      id: 2850,
      ibgeId: 2308203,
      name: 'Meruoca',
    },
    {
      id: 2851,
      ibgeId: 2308005,
      name: 'Massapê',
    },
    {
      id: 2852,
      ibgeId: 2312007,
      name: 'Santana do Acaraú',
    },
    {
      id: 2853,
      ibgeId: 2304004,
      name: 'Coreaú',
    },
    {
      id: 2854,
      ibgeId: 2309003,
      name: 'Mucambo',
    },
    {
      id: 2855,
      ibgeId: 2309904,
      name: 'Pacujá',
    },
    {
      id: 2856,
      ibgeId: 2303105,
      name: 'Cariré',
    },
    {
      id: 2857,
      ibgeId: 2304905,
      name: 'Groairas',
    },
    {
      id: 2858,
      ibgeId: 2309300,
      name: 'Nova Russas',
    },
    {
      id: 2859,
      ibgeId: 2301257,
      name: 'Ararendá',
    },
    {
      id: 2860,
      ibgeId: 2305654,
      name: 'Ipaporanga',
    },
    {
      id: 2861,
      ibgeId: 2311009,
      name: 'Poranga',
    },
    {
      id: 2862,
      ibgeId: 2305902,
      name: 'Ipueiras',
    },
    {
      id: 2863,
      ibgeId: 2305803,
      name: 'Ipu',
    },
    {
      id: 2864,
      ibgeId: 2310951,
      name: 'Pires Ferreira',
    },
    {
      id: 2865,
      ibgeId: 2311702,
      name: 'Reriutaba',
    },
    {
      id: 2866,
      ibgeId: 2313955,
      name: 'Varjota',
    },
    {
      id: 2867,
      ibgeId: 2304236,
      name: 'Croatá',
    },
    {
      id: 2868,
      ibgeId: 2305209,
      name: 'Hidrolândia',
    },
    {
      id: 2869,
      ibgeId: 2312205,
      name: 'Santa Quitéria',
    },
    {
      id: 2870,
      ibgeId: 2303659,
      name: 'Catunda',
    },
    {
      id: 2871,
      ibgeId: 2314102,
      name: 'Viçosa do Ceará',
    },
    {
      id: 2872,
      ibgeId: 2313401,
      name: 'Tianguá',
    },
    {
      id: 2873,
      ibgeId: 2304509,
      name: 'Frecheirinha',
    },
    {
      id: 2874,
      ibgeId: 2313609,
      name: 'Ubajara',
    },
    {
      id: 2875,
      ibgeId: 2305308,
      name: 'Ibiapina',
    },
    {
      id: 2876,
      ibgeId: 2304657,
      name: 'Graça',
    },
    {
      id: 2877,
      ibgeId: 2312304,
      name: 'São Benedito',
    },
    {
      id: 2878,
      ibgeId: 2303402,
      name: 'Carnaubal',
    },
    {
      id: 2879,
      ibgeId: 2305001,
      name: 'Guaraciaba do Norte',
    },
    {
      id: 2880,
      ibgeId: 2302602,
      name: 'Camocim',
    },
    {
      id: 2881,
      ibgeId: 2302057,
      name: 'Barroquinha',
    },
    {
      id: 2882,
      ibgeId: 2303907,
      name: 'Chaval',
    },
    {
      id: 2883,
      ibgeId: 2304707,
      name: 'Granja',
    },
    {
      id: 2884,
      ibgeId: 2307908,
      name: 'Martinópole',
    },
    {
      id: 2885,
      ibgeId: 2313906,
      name: 'Uruoca',
    },
    {
      id: 2886,
      ibgeId: 2312809,
      name: 'Senador Sá',
    },
    {
      id: 2887,
      ibgeId: 2308807,
      name: 'Moraújo',
    },
    {
      id: 2888,
      ibgeId: 2306405,
      name: 'Itapipoca',
    },
    {
      id: 2889,
      ibgeId: 2308377,
      name: 'Miraíma',
    },
    {
      id: 2890,
      ibgeId: 2300754,
      name: 'Amontada',
    },
    {
      id: 2891,
      ibgeId: 2308906,
      name: 'Morrinhos',
    },
    {
      id: 2892,
      ibgeId: 2307809,
      name: 'Marco',
    },
    {
      id: 2893,
      ibgeId: 2302305,
      name: 'Bela Cruz',
    },
    {
      id: 2894,
      ibgeId: 2300200,
      name: 'Acaraú',
    },
    {
      id: 2895,
      ibgeId: 2306553,
      name: 'Itarema',
    },
    {
      id: 2896,
      ibgeId: 2304251,
      name: 'Cruz',
    },
    {
      id: 2897,
      ibgeId: 2307254,
      name: 'Jijoca de Jericoacoara',
    },
    {
      id: 2898,
      ibgeId: 2306306,
      name: 'Itapajé',
    },
    {
      id: 2899,
      ibgeId: 2313351,
      name: 'Tejuçuoca',
    },
    {
      id: 2900,
      ibgeId: 2306108,
      name: 'Irauçuba',
    },
    {
      id: 2901,
      ibgeId: 2300903,
      name: 'Apuiarés',
    },
    {
      id: 2902,
      ibgeId: 2310704,
      name: 'Pentecoste',
    },
    {
      id: 2903,
      ibgeId: 2313807,
      name: 'Uruburetama',
    },
    {
      id: 2904,
      ibgeId: 2313559,
      name: 'Tururu',
    },
    {
      id: 2905,
      ibgeId: 2313757,
      name: 'Umirim',
    },
    {
      id: 2906,
      ibgeId: 2312601,
      name: 'São Luís do Curu',
    },
    {
      id: 2907,
      ibgeId: 2312403,
      name: 'São Gonçalo do Amarante',
    },
    {
      id: 2908,
      ibgeId: 2310209,
      name: 'Paracuru',
    },
    {
      id: 2909,
      ibgeId: 2307106,
      name: 'Jardim',
    },
    {
      id: 2910,
      ibgeId: 2310258,
      name: 'Paraipaba',
    },
    {
      id: 2911,
      ibgeId: 2313500,
      name: 'Trairi',
    },
    {
      id: 2912,
      ibgeId: 2302800,
      name: 'Canindé',
    },
    {
      id: 2913,
      ibgeId: 2311959,
      name: 'Salitre',
    },
    {
      id: 2914,
      ibgeId: 2306603,
      name: 'Itatira',
    },
    {
      id: 2915,
      ibgeId: 2303006,
      name: 'Caridade',
    },
    {
      id: 2916,
      ibgeId: 2310407,
      name: 'Paramoti',
    },
    {
      id: 2917,
      ibgeId: 2304608,
      name: 'General Sampaio',
    },
    {
      id: 2918,
      ibgeId: 2306504,
      name: 'Itapiúna',
    },
    {
      id: 2919,
      ibgeId: 2302909,
      name: 'Capistrano',
    },
    {
      id: 2920,
      ibgeId: 2301208,
      name: 'Aracoiaba',
    },
    {
      id: 2921,
      ibgeId: 2310506,
      name: 'Pedra Branca',
    },
    {
      id: 2922,
      ibgeId: 2309458,
      name: 'Ocara',
    },
    {
      id: 2923,
      ibgeId: 2302107,
      name: 'Baturité',
    },
    {
      id: 2924,
      ibgeId: 2301406,
      name: 'Aratuba',
    },
    {
      id: 2925,
      ibgeId: 2309102,
      name: 'Mulungu',
    },
    {
      id: 2926,
      ibgeId: 2305100,
      name: 'Guaramiranga',
    },
    {
      id: 2927,
      ibgeId: 2309805,
      name: 'Pacoti',
    },
    {
      id: 2928,
      ibgeId: 2310100,
      name: 'Palmácia',
    },
    {
      id: 2929,
      ibgeId: 2300150,
      name: 'Acarape',
    },
    {
      id: 2930,
      ibgeId: 2311603,
      name: 'Redenção',
    },
    {
      id: 2931,
      ibgeId: 2301950,
      name: 'Barreira',
    },
    {
      id: 2932,
      ibgeId: 2301109,
      name: 'Aracati',
    },
    {
      id: 2933,
      ibgeId: 2305357,
      name: 'Icapuí',
    },
    {
      id: 2934,
      ibgeId: 2304459,
      name: 'Fortim',
    },
    {
      id: 2935,
      ibgeId: 2306207,
      name: 'Itaiçaba',
    },
    {
      id: 2936,
      ibgeId: 2307007,
      name: 'Jaguaruana',
    },
    {
      id: 2937,
      ibgeId: 2302206,
      name: 'Beberibe',
    },
    {
      id: 2938,
      ibgeId: 2303501,
      name: 'Cascavel',
    },
    {
      id: 2939,
      ibgeId: 2310852,
      name: 'Pindoretama',
    },
    {
      id: 2940,
      ibgeId: 2309607,
      name: 'Pacajus',
    },
    {
      id: 2941,
      ibgeId: 2303956,
      name: 'Chorozinho',
    },
    {
      id: 2942,
      ibgeId: 2303808,
      name: 'Cedro',
    },
    {
      id: 2943,
      ibgeId: 2305233,
      name: 'Horizonte',
    },
    {
      id: 2944,
      ibgeId: 2311801,
      name: 'Russas',
    },
    {
      id: 2945,
      ibgeId: 2310001,
      name: 'Palhano',
    },
    {
      id: 2946,
      ibgeId: 2311504,
      name: 'Quixeré',
    },
    {
      id: 2947,
      ibgeId: 2307601,
      name: 'Limoeiro do Norte',
    },
    {
      id: 2948,
      ibgeId: 2308708,
      name: 'Morada Nova',
    },
    {
      id: 2949,
      ibgeId: 2305332,
      name: 'Ibicuitinga',
    },
    {
      id: 2950,
      ibgeId: 2313104,
      name: 'Tabuleiro do Norte',
    },
    {
      id: 2951,
      ibgeId: 2312502,
      name: 'São João do Jaguaribe',
    },
    {
      id: 2952,
      ibgeId: 2300705,
      name: 'Alto Santo',
    },
    {
      id: 2953,
      ibgeId: 2306009,
      name: 'Iracema',
    },
    {
      id: 2954,
      ibgeId: 2311231,
      name: 'Potiretama',
    },
    {
      id: 2955,
      ibgeId: 2307304,
      name: 'Juazeiro do Norte',
    },
    {
      id: 2956,
      ibgeId: 2304202,
      name: 'Crato',
    },
    {
      id: 2957,
      ibgeId: 2301604,
      name: 'Assaré',
    },
    {
      id: 2958,
      ibgeId: 2313252,
      name: 'Tarrafas',
    },
    {
      id: 2959,
      ibgeId: 2302701,
      name: 'Campos Sales',
    },
    {
      id: 2960,
      ibgeId: 2311207,
      name: 'Potengi',
    },
    {
      id: 2961,
      ibgeId: 2309201,
      name: 'Nova Olinda',
    },
    {
      id: 2962,
      ibgeId: 2301307,
      name: 'Araripe',
    },
    {
      id: 2963,
      ibgeId: 2301901,
      name: 'Barbalha',
    },
    {
      id: 2964,
      ibgeId: 2304301,
      name: 'Farias Brito',
    },
    {
      id: 2965,
      ibgeId: 2312106,
      name: 'Santana do Cariri',
    },
    {
      id: 2966,
      ibgeId: 2300606,
      name: 'Altaneira',
    },
    {
      id: 2967,
      ibgeId: 2308401,
      name: 'Missão Velha',
    },
    {
      id: 2968,
      ibgeId: 2308104,
      name: 'Mauriti',
    },
    {
      id: 2969,
      ibgeId: 2303204,
      name: 'Caririaçu',
    },
    {
      id: 2970,
      ibgeId: 2304806,
      name: 'Granjeiro',
    },
    {
      id: 2971,
      ibgeId: 2300101,
      name: 'Abaiara',
    },
    {
      id: 2972,
      ibgeId: 2308302,
      name: 'Milagres',
    },
    {
      id: 2973,
      ibgeId: 2302503,
      name: 'Brejo Santo',
    },
    {
      id: 2974,
      ibgeId: 2311108,
      name: 'Porteiras',
    },
    {
      id: 2975,
      ibgeId: 2307205,
      name: 'Jati',
    },
    {
      id: 2976,
      ibgeId: 2310605,
      name: 'Penaforte',
    },
    {
      id: 2977,
      ibgeId: 2307502,
      name: 'Lavras da Mangabeira',
    },
    {
      id: 2978,
      ibgeId: 2313708,
      name: 'Umari',
    },
    {
      id: 2979,
      ibgeId: 2301802,
      name: 'Baixio',
    },
    {
      id: 2980,
      ibgeId: 2305704,
      name: 'Ipaumirim',
    },
    {
      id: 2981,
      ibgeId: 2301703,
      name: 'Aurora',
    },
    {
      id: 2982,
      ibgeId: 2302008,
      name: 'Barro',
    },
    {
      id: 2983,
      ibgeId: 2305407,
      name: 'Icó',
    },
    {
      id: 2984,
      ibgeId: 2310803,
      name: 'Pereiro',
    },
    {
      id: 2985,
      ibgeId: 2304277,
      name: 'Ererê',
    },
    {
      id: 2986,
      ibgeId: 2306900,
      name: 'Jaguaribe',
    },
    {
      id: 2987,
      ibgeId: 2306702,
      name: 'Jaguaretama',
    },
    {
      id: 2988,
      ibgeId: 2306801,
      name: 'Jaguaribara',
    },
    {
      id: 2989,
      ibgeId: 2305506,
      name: 'Iguatu',
    },
    {
      id: 2990,
      ibgeId: 2311355,
      name: 'Quixelô',
    },
    {
      id: 2991,
      ibgeId: 2309508,
      name: 'Orós',
    },
    {
      id: 2992,
      ibgeId: 2303303,
      name: 'Cariús',
    },
    {
      id: 2993,
      ibgeId: 2314003,
      name: 'Várzea Alegre',
    },
    {
      id: 2994,
      ibgeId: 2300309,
      name: 'Acopiara',
    },
    {
      id: 2995,
      ibgeId: 2300804,
      name: 'Antonina do Norte',
    },
    {
      id: 2996,
      ibgeId: 2300408,
      name: 'Aiuaba',
    },
    {
      id: 2997,
      ibgeId: 2307403,
      name: 'Jucás',
    },
    {
      id: 2998,
      ibgeId: 2311900,
      name: 'Saboeiro',
    },
    {
      id: 2999,
      ibgeId: 2303600,
      name: 'Catarina',
    },
    {
      id: 3000,
      ibgeId: 2312700,
      name: 'Senador Pompeu',
    },
    {
      id: 3001,
      ibgeId: 2310902,
      name: 'Piquet Carneiro',
    },
    {
      id: 3002,
      ibgeId: 2308500,
      name: 'Mombaça',
    },
    {
      id: 3003,
      ibgeId: 2313005,
      name: 'Solonópole',
    },
    {
      id: 3004,
      ibgeId: 2308351,
      name: 'Milhã',
    },
    {
      id: 3005,
      ibgeId: 2305605,
      name: 'Independência',
    },
    {
      id: 3006,
      ibgeId: 2304269,
      name: 'Deputado Irapuan Pinheiro',
    },
    {
      id: 3007,
      ibgeId: 2311264,
      name: 'Quiterianópolis',
    },
    {
      id: 3008,
      ibgeId: 2313302,
      name: 'Tauá',
    },
    {
      id: 3009,
      ibgeId: 2301505,
      name: 'Arneiroz',
    },
    {
      id: 3010,
      ibgeId: 2310308,
      name: 'Parambu',
    },
    {
      id: 3011,
      ibgeId: 2304103,
      name: 'Crateús',
    },
    {
      id: 3012,
      ibgeId: 2309409,
      name: 'Novo Oriente',
    },
    {
      id: 3013,
      ibgeId: 2313203,
      name: 'Tamboril',
    },
    {
      id: 3014,
      ibgeId: 2308609,
      name: 'Monsenhor Tabosa',
    },
    {
      id: 3015,
      ibgeId: 2311405,
      name: 'Quixeramobim',
    },
    {
      id: 3016,
      ibgeId: 2307635,
      name: 'Madalena',
    },
    {
      id: 3017,
      ibgeId: 2302404,
      name: 'Boa Viagem',
    },
    {
      id: 3018,
      ibgeId: 2311306,
      name: 'Quixadá',
    },
    {
      id: 3019,
      ibgeId: 2303931,
      name: 'Choró',
    },
    {
      id: 3020,
      ibgeId: 2301851,
      name: 'Banabuiú',
    },
    {
      id: 3021,
      ibgeId: 2305266,
      name: 'Ibaretama',
    },
  ],
  DF: [
    {
      id: 3720,
      ibgeId: 5300108,
      name: 'Brasília',
    },
  ],
  ES: [
    {
      id: 738,
      ibgeId: 3205309,
      name: 'Vitória',
    },
    {
      id: 739,
      ibgeId: 3205200,
      name: 'Vila Velha',
    },
    {
      id: 740,
      ibgeId: 3205101,
      name: 'Viana',
    },
    {
      id: 741,
      ibgeId: 3201308,
      name: 'Cariacica',
    },
    {
      id: 742,
      ibgeId: 3205002,
      name: 'Serra',
    },
    {
      id: 743,
      ibgeId: 3202207,
      name: 'Fundão',
    },
    {
      id: 744,
      ibgeId: 3200607,
      name: 'Aracruz',
    },
    {
      id: 745,
      ibgeId: 3202405,
      name: 'Guarapari',
    },
    {
      id: 746,
      ibgeId: 3200409,
      name: 'Anchieta',
    },
    {
      id: 747,
      ibgeId: 3200300,
      name: 'Alfredo Chaves',
    },
    {
      id: 748,
      ibgeId: 3203346,
      name: 'Marechal Floriano',
    },
    {
      id: 749,
      ibgeId: 3201902,
      name: 'Domingos Martins',
    },
    {
      id: 750,
      ibgeId: 3202603,
      name: 'Iconha',
    },
    {
      id: 751,
      ibgeId: 3204203,
      name: 'Piúma',
    },
    {
      id: 752,
      ibgeId: 3204401,
      name: 'Rio Novo do Sul',
    },
    {
      id: 753,
      ibgeId: 3205036,
      name: 'Vargem Alta',
    },
    {
      id: 754,
      ibgeId: 3201209,
      name: 'Cachoeiro de Itapemirim',
    },
    {
      id: 755,
      ibgeId: 3202801,
      name: 'Itapemirim',
    },
    {
      id: 756,
      ibgeId: 3203320,
      name: 'Marataízes',
    },
    {
      id: 757,
      ibgeId: 3204302,
      name: 'Presidente Kennedy',
    },
    {
      id: 758,
      ibgeId: 3201407,
      name: 'Castelo',
    },
    {
      id: 759,
      ibgeId: 3201704,
      name: 'Conceição do Castelo',
    },
    {
      id: 760,
      ibgeId: 3205069,
      name: 'Venda Nova do Imigrante',
    },
    {
      id: 761,
      ibgeId: 3203700,
      name: 'Muniz Freire',
    },
    {
      id: 762,
      ibgeId: 3203007,
      name: 'Iúna',
    },
    {
      id: 763,
      ibgeId: 3202454,
      name: 'Ibatiba',
    },
    {
      id: 764,
      ibgeId: 3202652,
      name: 'Irupi',
    },
    {
      id: 765,
      ibgeId: 3203403,
      name: 'Mimoso do Sul',
    },
    {
      id: 766,
      ibgeId: 3200508,
      name: 'Apiacá',
    },
    {
      id: 767,
      ibgeId: 3201100,
      name: 'Bom Jesus do Norte',
    },
    {
      id: 768,
      ibgeId: 3204807,
      name: 'São José do Calçado',
    },
    {
      id: 769,
      ibgeId: 3203809,
      name: 'Muqui',
    },
    {
      id: 770,
      ibgeId: 3200706,
      name: 'Atílio Vivácqua',
    },
    {
      id: 771,
      ibgeId: 3200201,
      name: 'Alegre',
    },
    {
      id: 772,
      ibgeId: 3202553,
      name: 'Ibitirama',
    },
    {
      id: 773,
      ibgeId: 3203106,
      name: 'Jerônimo Monteiro',
    },
    {
      id: 774,
      ibgeId: 3202306,
      name: 'Guaçuí',
    },
    {
      id: 775,
      ibgeId: 3202009,
      name: 'Dores do Rio Preto',
    },
    {
      id: 776,
      ibgeId: 3201803,
      name: 'Divino de São Lourenço',
    },
    {
      id: 777,
      ibgeId: 3200102,
      name: 'Afonso Cláudio',
    },
    {
      id: 778,
      ibgeId: 3203163,
      name: 'Laranja da Terra',
    },
    {
      id: 779,
      ibgeId: 3202900,
      name: 'Itarana',
    },
    {
      id: 780,
      ibgeId: 3201159,
      name: 'Brejetuba',
    },
    {
      id: 781,
      ibgeId: 3204500,
      name: 'Santa Leopoldina',
    },
    {
      id: 782,
      ibgeId: 3204559,
      name: 'Santa Maria de Jetibá',
    },
    {
      id: 783,
      ibgeId: 3204609,
      name: 'Santa Teresa',
    },
    {
      id: 784,
      ibgeId: 3204955,
      name: 'São Roque do Canaã',
    },
    {
      id: 785,
      ibgeId: 3202504,
      name: 'Ibiraçu',
    },
    {
      id: 786,
      ibgeId: 3203130,
      name: 'João Neiva',
    },
    {
      id: 787,
      ibgeId: 3202702,
      name: 'Itaguaçu',
    },
    {
      id: 788,
      ibgeId: 3201506,
      name: 'Colatina',
    },
    {
      id: 789,
      ibgeId: 3202256,
      name: 'Governador Lindenberg',
    },
    {
      id: 790,
      ibgeId: 3203353,
      name: 'Marilândia',
    },
    {
      id: 791,
      ibgeId: 3200805,
      name: 'Baixo Guandu',
    },
    {
      id: 792,
      ibgeId: 3204658,
      name: 'São Domingos do Norte',
    },
    {
      id: 793,
      ibgeId: 3204005,
      name: 'Pancas',
    },
    {
      id: 794,
      ibgeId: 3200359,
      name: 'Alto Rio Novo',
    },
    {
      id: 795,
      ibgeId: 3203304,
      name: 'Mantenópolis',
    },
    {
      id: 796,
      ibgeId: 3204708,
      name: 'São Gabriel da Palha',
    },
    {
      id: 797,
      ibgeId: 3205176,
      name: 'Vila Valério',
    },
    {
      id: 798,
      ibgeId: 3200136,
      name: 'Águia Branca',
    },
    {
      id: 799,
      ibgeId: 3200904,
      name: 'Barra de São Francisco',
    },
    {
      id: 800,
      ibgeId: 3200169,
      name: 'Água Doce do Norte',
    },
    {
      id: 801,
      ibgeId: 3203908,
      name: 'Nova Venécia',
    },
    {
      id: 802,
      ibgeId: 3205150,
      name: 'Vila Pavão',
    },
    {
      id: 803,
      ibgeId: 3201001,
      name: 'Boa Esperança',
    },
    {
      id: 804,
      ibgeId: 3202108,
      name: 'Ecoporanga',
    },
    {
      id: 805,
      ibgeId: 3203601,
      name: 'Mucurici',
    },
    {
      id: 806,
      ibgeId: 3204252,
      name: 'Ponto Belo',
    },
    {
      id: 807,
      ibgeId: 3203502,
      name: 'Montanha',
    },
    {
      id: 808,
      ibgeId: 3203205,
      name: 'Linhares',
    },
    {
      id: 809,
      ibgeId: 3204351,
      name: 'Rio Bananal',
    },
    {
      id: 810,
      ibgeId: 3205010,
      name: 'Sooretama',
    },
    {
      id: 811,
      ibgeId: 3204906,
      name: 'São Mateus',
    },
    {
      id: 812,
      ibgeId: 3203056,
      name: 'Jaguaré',
    },
    {
      id: 813,
      ibgeId: 3201605,
      name: 'Conceição da Barra',
    },
    {
      id: 814,
      ibgeId: 3204054,
      name: 'Pedro Canário',
    },
    {
      id: 815,
      ibgeId: 3204104,
      name: 'Pinheiros',
    },
  ],
  GO: [
    {
      id: 3721,
      ibgeId: 5212501,
      name: 'Luziânia',
    },
    {
      id: 3722,
      ibgeId: 5215231,
      name: 'Novo Gama',
    },
    {
      id: 3723,
      ibgeId: 5221858,
      name: 'Valparaíso de Goiás',
    },
    {
      id: 3724,
      ibgeId: 5205497,
      name: 'Cidade Ocidental',
    },
    {
      id: 3725,
      ibgeId: 5219753,
      name: 'Santo Antônio do Descoberto',
    },
    {
      id: 3726,
      ibgeId: 5200258,
      name: 'Águas Lindas de Goiás',
    },
    {
      id: 3727,
      ibgeId: 5200308,
      name: 'Alexânia',
    },
    {
      id: 3728,
      ibgeId: 5200100,
      name: 'Abadiânia',
    },
    {
      id: 3729,
      ibgeId: 5205802,
      name: 'Corumbá de Goiás',
    },
    {
      id: 3730,
      ibgeId: 5205513,
      name: 'Cocalzinho de Goiás',
    },
    {
      id: 3731,
      ibgeId: 5217302,
      name: 'Pirenópolis',
    },
    {
      id: 3732,
      ibgeId: 5215603,
      name: 'Padre Bernardo',
    },
    {
      id: 3733,
      ibgeId: 5213053,
      name: 'Mimoso de Goiás',
    },
    {
      id: 3734,
      ibgeId: 5205521,
      name: 'Colinas do Sul',
    },
    {
      id: 3735,
      ibgeId: 5217609,
      name: 'Planaltina',
    },
    {
      id: 3736,
      ibgeId: 5220009,
      name: "São João D'Aliança",
    },
    {
      id: 3737,
      ibgeId: 5200605,
      name: 'Alto Paraíso de Goiás',
    },
    {
      id: 3738,
      ibgeId: 5200175,
      name: 'Água Fria de Goiás',
    },
    {
      id: 3739,
      ibgeId: 5205307,
      name: 'Cavalcante',
    },
    {
      id: 3740,
      ibgeId: 5221080,
      name: 'Teresina de Goiás',
    },
    {
      id: 3741,
      ibgeId: 5208004,
      name: 'Formosa',
    },
    {
      id: 3742,
      ibgeId: 5214903,
      name: 'Nova Roma',
    },
    {
      id: 3743,
      ibgeId: 5222203,
      name: 'Vila Boa',
    },
    {
      id: 3744,
      ibgeId: 5213509,
      name: 'Monte Alegre de Goiás',
    },
    {
      id: 3745,
      ibgeId: 5204904,
      name: 'Campos Belos',
    },
    {
      id: 3746,
      ibgeId: 5206206,
      name: 'Cristalina',
    },
    {
      id: 3747,
      ibgeId: 5219803,
      name: 'São Domingos',
    },
    {
      id: 3748,
      ibgeId: 5208301,
      name: 'Divinópolis de Goiás',
    },
    {
      id: 3749,
      ibgeId: 5204003,
      name: 'Cabeceiras',
    },
    {
      id: 3750,
      ibgeId: 5207907,
      name: 'Flores de Goiás',
    },
    {
      id: 3751,
      ibgeId: 5218300,
      name: 'Posse',
    },
    {
      id: 3752,
      ibgeId: 5209408,
      name: 'Guarani de Goiás',
    },
    {
      id: 3753,
      ibgeId: 5209903,
      name: 'Iaciara',
    },
    {
      id: 3754,
      ibgeId: 5220686,
      name: 'Simolândia',
    },
    {
      id: 3755,
      ibgeId: 5200803,
      name: 'Alvorada do Norte',
    },
    {
      id: 3756,
      ibgeId: 5212709,
      name: 'Mambaí',
    },
    {
      id: 3757,
      ibgeId: 5203962,
      name: 'Buritinópolis',
    },
    {
      id: 3758,
      ibgeId: 5206701,
      name: 'Damianópolis',
    },
    {
      id: 3759,
      ibgeId: 5220702,
      name: "Sítio D'Abadia",
    },
    {
      id: 3760,
      ibgeId: 5208707,
      name: 'Goiânia',
    },
    {
      id: 3761,
      ibgeId: 5201405,
      name: 'Aparecida de Goiânia',
    },
    {
      id: 3762,
      ibgeId: 5201108,
      name: 'Anápolis',
    },
    {
      id: 3763,
      ibgeId: 5204854,
      name: 'Campo Limpo de Goiás',
    },
    {
      id: 3764,
      ibgeId: 5215405,
      name: 'Ouro Verde de Goiás',
    },
    {
      id: 3765,
      ibgeId: 5208400,
      name: 'Goianápolis',
    },
    {
      id: 3766,
      ibgeId: 5221197,
      name: 'Terezópolis de Goiás',
    },
    {
      id: 3767,
      ibgeId: 5220603,
      name: 'Silvânia',
    },
    {
      id: 3768,
      ibgeId: 5208152,
      name: 'Gameleira de Goiás',
    },
    {
      id: 3769,
      ibgeId: 5220264,
      name: 'São Miguel do Passa Quatro',
    },
    {
      id: 3770,
      ibgeId: 5212303,
      name: 'Leopoldo de Bulhões',
    },
    {
      id: 3771,
      ibgeId: 5203559,
      name: 'Bonfinópolis',
    },
    {
      id: 3772,
      ibgeId: 5217401,
      name: 'Pires do Rio',
    },
    {
      id: 3773,
      ibgeId: 5215801,
      name: 'Palmelo',
    },
    {
      id: 3774,
      ibgeId: 5219209,
      name: 'Santa Cruz de Goiás',
    },
    {
      id: 3775,
      ibgeId: 5206305,
      name: 'Cristianópolis',
    },
    {
      id: 3776,
      ibgeId: 5203302,
      name: 'Bela Vista de Goiás',
    },
    {
      id: 3777,
      ibgeId: 5204557,
      name: 'Caldazinha',
    },
    {
      id: 3778,
      ibgeId: 5220454,
      name: 'Senador Canedo',
    },
    {
      id: 3779,
      ibgeId: 5222005,
      name: 'Vianópolis',
    },
    {
      id: 3780,
      ibgeId: 5215306,
      name: 'Orizona',
    },
    {
      id: 3781,
      ibgeId: 5201801,
      name: 'Aragoiânia',
    },
    {
      id: 3782,
      ibgeId: 5209705,
      name: 'Hidrolândia',
    },
    {
      id: 3783,
      ibgeId: 5200050,
      name: 'Abadia de Goiás',
    },
    {
      id: 3784,
      ibgeId: 5209200,
      name: 'Guapó',
    },
    {
      id: 3785,
      ibgeId: 5221908,
      name: 'Varjão',
    },
    {
      id: 3786,
      ibgeId: 5208806,
      name: 'Goianira',
    },
    {
      id: 3787,
      ibgeId: 5219738,
      name: 'Santo Antônio de Goiás',
    },
    {
      id: 3788,
      ibgeId: 5221403,
      name: 'Trindade',
    },
    {
      id: 3789,
      ibgeId: 5202809,
      name: 'Avelinópolis',
    },
    {
      id: 3790,
      ibgeId: 5204607,
      name: 'Campestre de Goiás',
    },
    {
      id: 3791,
      ibgeId: 5219100,
      name: 'Santa Bárbara de Goiás',
    },
    {
      id: 3792,
      ibgeId: 5210000,
      name: 'Inhumas',
    },
    {
      id: 3793,
      ibgeId: 5201603,
      name: 'Araçu',
    },
    {
      id: 3794,
      ibgeId: 5206800,
      name: 'Damolândia',
    },
    {
      id: 3795,
      ibgeId: 5205208,
      name: 'Caturaí',
    },
    {
      id: 3796,
      ibgeId: 5203609,
      name: 'Brazabrantes',
    },
    {
      id: 3797,
      ibgeId: 5211404,
      name: 'Itauçu',
    },
    {
      id: 3798,
      ibgeId: 5219506,
      name: 'Santa Rosa de Goiás',
    },
    {
      id: 3799,
      ibgeId: 5214507,
      name: 'Nerópolis',
    },
    {
      id: 3800,
      ibgeId: 5215009,
      name: 'Nova Veneza',
    },
    {
      id: 3801,
      ibgeId: 5216809,
      name: 'Petrolina de Goiás',
    },
    {
      id: 3802,
      ibgeId: 5219902,
      name: 'São Francisco de Goiás',
    },
    {
      id: 3803,
      ibgeId: 5212055,
      name: 'Jesúpolis',
    },
    {
      id: 3804,
      ibgeId: 5211503,
      name: 'Itumbiara',
    },
    {
      id: 3805,
      ibgeId: 5209937,
      name: 'Inaciolândia',
    },
    {
      id: 3806,
      ibgeId: 5222054,
      name: 'Vicentinópolis',
    },
    {
      id: 3807,
      ibgeId: 5204250,
      name: 'Cachoeira Dourada',
    },
    {
      id: 3808,
      ibgeId: 5203500,
      name: 'Bom Jesus',
    },
    {
      id: 3809,
      ibgeId: 5216007,
      name: 'Panamá',
    },
    {
      id: 3810,
      ibgeId: 5209101,
      name: 'Goiatuba',
    },
    {
      id: 3811,
      ibgeId: 5218052,
      name: 'Porteirão',
    },
    {
      id: 3812,
      ibgeId: 5212105,
      name: 'Joviânia',
    },
    {
      id: 3813,
      ibgeId: 5200506,
      name: 'Aloândia',
    },
    {
      id: 3814,
      ibgeId: 5217708,
      name: 'Pontalina',
    },
    {
      id: 3815,
      ibgeId: 5212600,
      name: 'Mairipotaba',
    },
    {
      id: 3816,
      ibgeId: 5206503,
      name: 'Cromínia',
    },
    {
      id: 3817,
      ibgeId: 5217104,
      name: 'Piracanjuba',
    },
    {
      id: 3818,
      ibgeId: 5218391,
      name: 'Professor Jamil',
    },
    {
      id: 3819,
      ibgeId: 5213806,
      name: 'Morrinhos',
    },
    {
      id: 3820,
      ibgeId: 5203906,
      name: 'Buriti Alegre',
    },
    {
      id: 3821,
      ibgeId: 5200209,
      name: 'Água Limpa',
    },
    {
      id: 3822,
      ibgeId: 5218789,
      name: 'Rio Quente',
    },
    {
      id: 3823,
      ibgeId: 5212907,
      name: 'Marzagão',
    },
    {
      id: 3824,
      ibgeId: 5205901,
      name: 'Corumbaíba',
    },
    {
      id: 3825,
      ibgeId: 5204508,
      name: 'Caldas Novas',
    },
    {
      id: 3826,
      ibgeId: 5205109,
      name: 'Catalão',
    },
    {
      id: 3827,
      ibgeId: 5215504,
      name: 'Ouvidor',
    },
    {
      id: 3828,
      ibgeId: 5221304,
      name: 'Três Ranchos',
    },
    {
      id: 3829,
      ibgeId: 5206909,
      name: 'Davinópolis',
    },
    {
      id: 3830,
      ibgeId: 5208509,
      name: 'Goiandira',
    },
    {
      id: 3831,
      ibgeId: 5214804,
      name: 'Nova Aurora',
    },
    {
      id: 3832,
      ibgeId: 5206602,
      name: 'Cumari',
    },
    {
      id: 3833,
      ibgeId: 5201207,
      name: 'Anhangüera',
    },
    {
      id: 3834,
      ibgeId: 5210109,
      name: 'Ipameri',
    },
    {
      id: 3835,
      ibgeId: 5221809,
      name: 'Urutaí',
    },
    {
      id: 3836,
      ibgeId: 5204805,
      name: 'Campo Alegre de Goiás',
    },
    {
      id: 3837,
      ibgeId: 5211909,
      name: 'Jataí',
    },
    {
      id: 3838,
      ibgeId: 5211305,
      name: 'Itarumã',
    },
    {
      id: 3839,
      ibgeId: 5204300,
      name: 'Caçu',
    },
    {
      id: 3840,
      ibgeId: 5210802,
      name: 'Itajá',
    },
    {
      id: 3841,
      ibgeId: 5212253,
      name: 'Lagoa Santa',
    },
    {
      id: 3842,
      ibgeId: 5220504,
      name: 'Serranópolis',
    },
    {
      id: 3843,
      ibgeId: 5216452,
      name: 'Perolândia',
    },
    {
      id: 3844,
      ibgeId: 5201504,
      name: 'Aporé',
    },
    {
      id: 3845,
      ibgeId: 5201454,
      name: 'Aparecida do Rio Doce',
    },
    {
      id: 3846,
      ibgeId: 5205471,
      name: 'Chapadão do Céu',
    },
    {
      id: 3847,
      ibgeId: 5213103,
      name: 'Mineiros',
    },
    {
      id: 3848,
      ibgeId: 5219407,
      name: 'Santa Rita do Araguaia',
    },
    {
      id: 3849,
      ibgeId: 5218102,
      name: 'Portelândia',
    },
    {
      id: 3850,
      ibgeId: 5215652,
      name: 'Palestina de Goiás',
    },
    {
      id: 3851,
      ibgeId: 5204409,
      name: 'Caiapônia',
    },
    {
      id: 3852,
      ibgeId: 5207253,
      name: 'Doverlândia',
    },
    {
      id: 3853,
      ibgeId: 5218508,
      name: 'Quirinópolis',
    },
    {
      id: 3854,
      ibgeId: 5209150,
      name: 'Gouvelândia',
    },
    {
      id: 3855,
      ibgeId: 5204102,
      name: 'Cachoeira Alta',
    },
    {
      id: 3856,
      ibgeId: 5216304,
      name: 'Paranaiguara',
    },
    {
      id: 3857,
      ibgeId: 5220405,
      name: 'São Simão',
    },
    {
      id: 3858,
      ibgeId: 5218805,
      name: 'Rio Verde',
    },
    {
      id: 3859,
      ibgeId: 5213756,
      name: 'Montividiu',
    },
    {
      id: 3860,
      ibgeId: 5219308,
      name: 'Santa Helena de Goiás',
    },
    {
      id: 3861,
      ibgeId: 5205059,
      name: 'Castelândia',
    },
    {
      id: 3862,
      ibgeId: 5213004,
      name: 'Maurilândia',
    },
    {
      id: 3863,
      ibgeId: 5219712,
      name: 'Santo Antônio da Barra',
    },
    {
      id: 3864,
      ibgeId: 5207402,
      name: 'Edéia',
    },
    {
      id: 3865,
      ibgeId: 5207352,
      name: 'Edealina',
    },
    {
      id: 3866,
      ibgeId: 5211701,
      name: 'Jandaia',
    },
    {
      id: 3867,
      ibgeId: 5209952,
      name: 'Indiara',
    },
    {
      id: 3868,
      ibgeId: 5200134,
      name: 'Acreúna',
    },
    {
      id: 3869,
      ibgeId: 5221551,
      name: 'Turvelândia',
    },
    {
      id: 3870,
      ibgeId: 5216403,
      name: 'Paraúna',
    },
    {
      id: 3871,
      ibgeId: 5220058,
      name: 'São João da Paraúna',
    },
    {
      id: 3872,
      ibgeId: 5215900,
      name: 'Palminópolis',
    },
    {
      id: 3873,
      ibgeId: 5220108,
      name: 'São Luís de Montes Belos',
    },
    {
      id: 3874,
      ibgeId: 5207808,
      name: 'Firminópolis',
    },
    {
      id: 3875,
      ibgeId: 5221502,
      name: 'Turvânia',
    },
    {
      id: 3876,
      ibgeId: 5202601,
      name: 'Aurilândia',
    },
    {
      id: 3877,
      ibgeId: 5204201,
      name: 'Cachoeira de Goiás',
    },
    {
      id: 3878,
      ibgeId: 5211602,
      name: 'Ivolândia',
    },
    {
      id: 3879,
      ibgeId: 5213400,
      name: 'Moiporá',
    },
    {
      id: 3880,
      ibgeId: 5200902,
      name: 'Amorinópolis',
    },
    {
      id: 3881,
      ibgeId: 5205703,
      name: 'Córrego do Ouro',
    },
    {
      id: 3882,
      ibgeId: 5213905,
      name: 'Mossâmedes',
    },
    {
      id: 3883,
      ibgeId: 5203939,
      name: 'Buriti de Goiás',
    },
    {
      id: 3884,
      ibgeId: 5200159,
      name: 'Adelândia',
    },
    {
      id: 3885,
      ibgeId: 5219001,
      name: 'Sanclerlândia',
    },
    {
      id: 3886,
      ibgeId: 5200852,
      name: 'Americano do Brasil',
    },
    {
      id: 3887,
      ibgeId: 5201306,
      name: 'Anicuns',
    },
    {
      id: 3888,
      ibgeId: 5214408,
      name: 'Nazário',
    },
    {
      id: 3889,
      ibgeId: 5215702,
      name: 'Palmeiras de Goiás',
    },
    {
      id: 3890,
      ibgeId: 5205455,
      name: 'Cezarina',
    },
    {
      id: 3891,
      ibgeId: 5210208,
      name: 'Iporá',
    },
    {
      id: 3892,
      ibgeId: 5210307,
      name: 'Israelândia',
    },
    {
      id: 3893,
      ibgeId: 5212006,
      name: 'Jaupaci',
    },
    {
      id: 3894,
      ibgeId: 5207600,
      name: 'Fazenda Nova',
    },
    {
      id: 3895,
      ibgeId: 5217203,
      name: 'Piranhas',
    },
    {
      id: 3896,
      ibgeId: 5202353,
      name: 'Arenópolis',
    },
    {
      id: 3897,
      ibgeId: 5201702,
      name: 'Aragarças',
    },
    {
      id: 3898,
      ibgeId: 5203401,
      name: 'Bom Jardim de Goiás',
    },
    {
      id: 3899,
      ibgeId: 5203104,
      name: 'Baliza',
    },
    {
      id: 3900,
      ibgeId: 5213707,
      name: 'Montes Claros de Goiás',
    },
    {
      id: 3901,
      ibgeId: 5207105,
      name: 'Diorama',
    },
    {
      id: 3902,
      ibgeId: 5219258,
      name: 'Santa Fé de Goiás',
    },
    {
      id: 3903,
      ibgeId: 5212204,
      name: 'Jussara',
    },
    {
      id: 3904,
      ibgeId: 5203807,
      name: 'Britânia',
    },
    {
      id: 3905,
      ibgeId: 5215207,
      name: 'Novo Brasil',
    },
    {
      id: 3906,
      ibgeId: 5211008,
      name: 'Itapirapuã',
    },
    {
      id: 3907,
      ibgeId: 5205406,
      name: 'Ceres',
    },
    {
      id: 3908,
      ibgeId: 5210158,
      name: 'Ipiranga de Goiás',
    },
    {
      id: 3909,
      ibgeId: 5214861,
      name: 'Nova Glória',
    },
    {
      id: 3910,
      ibgeId: 5218607,
      name: 'Rialma',
    },
    {
      id: 3911,
      ibgeId: 5218706,
      name: 'Rianápolis',
    },
    {
      id: 3912,
      ibgeId: 5219357,
      name: 'Santa Isabel',
    },
    {
      id: 3913,
      ibgeId: 5211800,
      name: 'Jaraguá',
    },
    {
      id: 3914,
      ibgeId: 5221700,
      name: 'Uruana',
    },
    {
      id: 3915,
      ibgeId: 5205000,
      name: 'Carmo do Rio Verde',
    },
    {
      id: 3916,
      ibgeId: 5220280,
      name: 'São Patrício',
    },
    {
      id: 3917,
      ibgeId: 5214705,
      name: 'Nova América',
    },
    {
      id: 3918,
      ibgeId: 5218904,
      name: 'Rubiataba',
    },
    {
      id: 3919,
      ibgeId: 5213855,
      name: 'Morro Agudo de Goiás',
    },
    {
      id: 3920,
      ibgeId: 5210901,
      name: 'Itapaci',
    },
    {
      id: 3921,
      ibgeId: 5220157,
      name: 'São Luiz do Norte',
    },
    {
      id: 3922,
      ibgeId: 5216908,
      name: 'Pilar de Goiás',
    },
    {
      id: 3923,
      ibgeId: 5209457,
      name: 'Guarinos',
    },
    {
      id: 3924,
      ibgeId: 5209804,
      name: 'Hidrolina',
    },
    {
      id: 3925,
      ibgeId: 5208608,
      name: 'Goianésia',
    },
    {
      id: 3926,
      ibgeId: 5203203,
      name: 'Barro Alto',
    },
    {
      id: 3927,
      ibgeId: 5222302,
      name: 'Vila Propício',
    },
    {
      id: 3928,
      ibgeId: 5219456,
      name: 'Santa Rita do Novo Destino',
    },
    {
      id: 3929,
      ibgeId: 5221601,
      name: 'Uruaçu',
    },
    {
      id: 3930,
      ibgeId: 5204706,
      name: 'Campinorte',
    },
    {
      id: 3931,
      ibgeId: 5214606,
      name: 'Niquelândia',
    },
    {
      id: 3932,
      ibgeId: 5204656,
      name: 'Campinaçu',
    },
    {
      id: 3933,
      ibgeId: 5213087,
      name: 'Minaçu',
    },
    {
      id: 3934,
      ibgeId: 5221452,
      name: 'Trombas',
    },
    {
      id: 3935,
      ibgeId: 5213772,
      name: 'Montividiu do Norte',
    },
    {
      id: 3936,
      ibgeId: 5208103,
      name: 'Formoso',
    },
    {
      id: 3937,
      ibgeId: 5219605,
      name: 'Santa Tereza de Goiás',
    },
    {
      id: 3938,
      ibgeId: 5207501,
      name: 'Estrela do Norte',
    },
    {
      id: 3939,
      ibgeId: 5212808,
      name: 'Mara Rosa',
    },
    {
      id: 3940,
      ibgeId: 5200829,
      name: 'Amaralina',
    },
    {
      id: 3941,
      ibgeId: 5214879,
      name: 'Nova Iguaçu de Goiás',
    },
    {
      id: 3942,
      ibgeId: 5219704,
      name: 'Santa Terezinha de Goiás',
    },
    {
      id: 3943,
      ibgeId: 5206404,
      name: 'Crixás',
    },
    {
      id: 3944,
      ibgeId: 5204953,
      name: 'Campos Verdes',
    },
    {
      id: 3945,
      ibgeId: 5214838,
      name: 'Nova Crixás',
    },
    {
      id: 3946,
      ibgeId: 5221577,
      name: 'Uirapuru',
    },
    {
      id: 3947,
      ibgeId: 5214051,
      name: 'Mundo Novo',
    },
    {
      id: 3948,
      ibgeId: 5214101,
      name: 'Mutunópolis',
    },
    {
      id: 3949,
      ibgeId: 5218003,
      name: 'Porangatu',
    },
    {
      id: 3950,
      ibgeId: 5203575,
      name: 'Bonópolis',
    },
    {
      id: 3951,
      ibgeId: 5200555,
      name: 'Alto Horizonte',
    },
    {
      id: 3952,
      ibgeId: 5215256,
      name: 'Novo Planalto',
    },
    {
      id: 3953,
      ibgeId: 5220207,
      name: 'São Miguel do Araguaia',
    },
    {
      id: 3954,
      ibgeId: 5208905,
      name: 'Goiás',
    },
    {
      id: 3955,
      ibgeId: 5210406,
      name: 'Itaberaí',
    },
    {
      id: 3956,
      ibgeId: 5221007,
      name: 'Taquaral de Goiás',
    },
    {
      id: 3957,
      ibgeId: 5210562,
      name: 'Itaguari',
    },
    {
      id: 3958,
      ibgeId: 5210604,
      name: 'Itaguaru',
    },
    {
      id: 3959,
      ibgeId: 5209606,
      name: 'Heitoraí',
    },
    {
      id: 3960,
      ibgeId: 5211206,
      name: 'Itapuranga',
    },
    {
      id: 3961,
      ibgeId: 5209291,
      name: 'Guaraíta',
    },
    {
      id: 3962,
      ibgeId: 5214002,
      name: 'Mozarlândia',
    },
    {
      id: 3963,
      ibgeId: 5202502,
      name: 'Aruanã',
    },
    {
      id: 3964,
      ibgeId: 5202155,
      name: 'Araguapaz',
    },
    {
      id: 3965,
      ibgeId: 5212956,
      name: 'Matrinchã',
    },
    {
      id: 3966,
      ibgeId: 5207535,
      name: 'Faina',
    },
  ],
  MA: [
    {
      id: 3245,
      ibgeId: 2111300,
      name: 'São Luís',
    },
    {
      id: 3246,
      ibgeId: 2111201,
      name: 'São José de Ribamar',
    },
    {
      id: 3247,
      ibgeId: 2107506,
      name: 'Paço do Lumiar',
    },
    {
      id: 3248,
      ibgeId: 2109452,
      name: 'Raposa',
    },
    {
      id: 3249,
      ibgeId: 2109205,
      name: 'Presidente Juscelino',
    },
    {
      id: 3250,
      ibgeId: 2101251,
      name: 'Bacabeira',
    },
    {
      id: 3251,
      ibgeId: 2110203,
      name: 'Santa Rita',
    },
    {
      id: 3252,
      ibgeId: 2101103,
      name: 'Axixá',
    },
    {
      id: 3253,
      ibgeId: 2109601,
      name: 'Rosário',
    },
    {
      id: 3254,
      ibgeId: 2107100,
      name: 'Morros',
    },
    {
      id: 3255,
      ibgeId: 2102374,
      name: 'Cachoeira Grande',
    },
    {
      id: 3256,
      ibgeId: 2105104,
      name: 'Icatu',
    },
    {
      id: 3257,
      ibgeId: 2105005,
      name: 'Humberto de Campos',
    },
    {
      id: 3258,
      ibgeId: 2109403,
      name: 'Primeira Cruz',
    },
    {
      id: 3259,
      ibgeId: 2110278,
      name: 'Santo Amaro do Maranhão',
    },
    {
      id: 3260,
      ibgeId: 2108603,
      name: 'Pinheiro',
    },
    {
      id: 3261,
      ibgeId: 2109270,
      name: 'Presidente Sarney',
    },
    {
      id: 3262,
      ibgeId: 2108256,
      name: 'Pedro do Rosário',
    },
    {
      id: 3263,
      ibgeId: 2109809,
      name: 'Santa Helena',
    },
    {
      id: 3264,
      ibgeId: 2102507,
      name: 'Cajari',
    },
    {
      id: 3265,
      ibgeId: 2108306,
      name: 'Penalva',
    },
    {
      id: 3266,
      ibgeId: 2112803,
      name: 'Viana',
    },
    {
      id: 3267,
      ibgeId: 2106508,
      name: 'Matinha',
    },
    {
      id: 3268,
      ibgeId: 2111706,
      name: 'São Vicente Ferrer',
    },
    {
      id: 3269,
      ibgeId: 2107456,
      name: 'Olinda Nova do Maranhão',
    },
    {
      id: 3270,
      ibgeId: 2111003,
      name: 'São João Batista',
    },
    {
      id: 3271,
      ibgeId: 2102408,
      name: 'Cajapió',
    },
    {
      id: 3272,
      ibgeId: 2101350,
      name: 'Bacurituba',
    },
    {
      id: 3273,
      ibgeId: 2110500,
      name: 'São Bento',
    },
    {
      id: 3274,
      ibgeId: 2107605,
      name: 'Palmeirândia',
    },
    {
      id: 3275,
      ibgeId: 2108405,
      name: 'Peri Mirim',
    },
    {
      id: 3276,
      ibgeId: 2101905,
      name: 'Bequimão',
    },
    {
      id: 3277,
      ibgeId: 2100204,
      name: 'Alcântara',
    },
    {
      id: 3278,
      ibgeId: 2104909,
      name: 'Guimarães',
    },
    {
      id: 3279,
      ibgeId: 2103109,
      name: 'Cedral',
    },
    {
      id: 3280,
      ibgeId: 2109056,
      name: 'Porto Rico do Maranhão',
    },
    {
      id: 3281,
      ibgeId: 2106805,
      name: 'Mirinzal',
    },
    {
      id: 3282,
      ibgeId: 2103125,
      name: 'Central do Maranhão',
    },
    {
      id: 3283,
      ibgeId: 2103703,
      name: 'Cururupu',
    },
    {
      id: 3284,
      ibgeId: 2111789,
      name: 'Serrano do Maranhão',
    },
    {
      id: 3285,
      ibgeId: 2101301,
      name: 'Bacuri',
    },
    {
      id: 3286,
      ibgeId: 2110039,
      name: 'Santa Luzia do Paruá',
    },
    {
      id: 3287,
      ibgeId: 2107357,
      name: 'Nova Olinda do Maranhão',
    },
    {
      id: 3288,
      ibgeId: 2100832,
      name: 'Apicum-Açu',
    },
    {
      id: 3289,
      ibgeId: 2112456,
      name: 'Turilândia',
    },
    {
      id: 3290,
      ibgeId: 2112407,
      name: 'Turiaçu',
    },
    {
      id: 3291,
      ibgeId: 2109239,
      name: 'Presidente Médici',
    },
    {
      id: 3292,
      ibgeId: 2102606,
      name: 'Cândido Mendes',
    },
    {
      id: 3293,
      ibgeId: 2106375,
      name: 'Maranhãozinho',
    },
    {
      id: 3294,
      ibgeId: 2104677,
      name: 'Governador Nunes Freire',
    },
    {
      id: 3295,
      ibgeId: 2104305,
      name: 'Godofredo Viana',
    },
    {
      id: 3296,
      ibgeId: 2103158,
      name: 'Centro do Guilherme',
    },
    {
      id: 3297,
      ibgeId: 2106326,
      name: 'Maracaçumé',
    },
    {
      id: 3298,
      ibgeId: 2106201,
      name: 'Luís Domingues',
    },
    {
      id: 3299,
      ibgeId: 2101970,
      name: 'Boa Vista do Gurupi',
    },
    {
      id: 3300,
      ibgeId: 2100550,
      name: 'Amapá do Maranhão',
    },
    {
      id: 3301,
      ibgeId: 2105658,
      name: 'Junco do Maranhão',
    },
    {
      id: 3302,
      ibgeId: 2102903,
      name: 'Carutapera',
    },
    {
      id: 3303,
      ibgeId: 2103174,
      name: 'Centro Novo do Maranhão',
    },
    {
      id: 3304,
      ibgeId: 2109908,
      name: 'Santa Inês',
    },
    {
      id: 3305,
      ibgeId: 2100402,
      name: 'Altamira do Maranhão',
    },
    {
      id: 3306,
      ibgeId: 2102150,
      name: 'Brejo de Areia',
    },
    {
      id: 3307,
      ibgeId: 2113009,
      name: 'Vitorino Freire',
    },
    {
      id: 3308,
      ibgeId: 2101772,
      name: 'Bela Vista do Maranhão',
    },
    {
      id: 3309,
      ibgeId: 2103554,
      name: 'Conceição do Lago-Açu',
    },
    {
      id: 3310,
      ibgeId: 2105153,
      name: 'Igarapé do Meio',
    },
    {
      id: 3311,
      ibgeId: 2112902,
      name: 'Vitória do Mearim',
    },
    {
      id: 3312,
      ibgeId: 2106904,
      name: 'Monção',
    },
    {
      id: 3313,
      ibgeId: 2104651,
      name: 'Governador Newton Bello',
    },
    {
      id: 3314,
      ibgeId: 2114007,
      name: 'Zé Doca',
    },
    {
      id: 3315,
      ibgeId: 2100873,
      name: 'Araguanã',
    },
    {
      id: 3316,
      ibgeId: 2108504,
      name: 'Pindaré Mirim',
    },
    {
      id: 3317,
      ibgeId: 2112274,
      name: 'Tufilândia',
    },
    {
      id: 3318,
      ibgeId: 2102002,
      name: 'Bom Jardim',
    },
    {
      id: 3319,
      ibgeId: 2111029,
      name: 'São João do Carú',
    },
    {
      id: 3320,
      ibgeId: 2110005,
      name: 'Santa Luzia',
    },
    {
      id: 3321,
      ibgeId: 2102325,
      name: 'Buriticupu',
    },
    {
      id: 3322,
      ibgeId: 2102036,
      name: 'Bom Jesus das Selvas',
    },
    {
      id: 3323,
      ibgeId: 2100477,
      name: 'Alto Alegre do Pindaré',
    },
    {
      id: 3324,
      ibgeId: 2103307,
      name: 'Codó',
    },
    {
      id: 3325,
      ibgeId: 2100436,
      name: 'Alto Alegre do Maranhão',
    },
    {
      id: 3326,
      ibgeId: 2103604,
      name: 'Coroatá',
    },
    {
      id: 3327,
      ibgeId: 2108454,
      name: 'Peritoró',
    },
    {
      id: 3328,
      ibgeId: 2112100,
      name: 'Timbiras',
    },
    {
      id: 3329,
      ibgeId: 2112704,
      name: 'Vargem Grande',
    },
    {
      id: 3330,
      ibgeId: 2110401,
      name: 'São Benedito do Rio Preto',
    },
    {
      id: 3331,
      ibgeId: 2107209,
      name: 'Nina Rodrigues',
    },
    {
      id: 3332,
      ibgeId: 2109304,
      name: 'Presidente Vargas',
    },
    {
      id: 3333,
      ibgeId: 2108801,
      name: 'Pirapemas',
    },
    {
      id: 3334,
      ibgeId: 2102705,
      name: 'Cantanhede',
    },
    {
      id: 3335,
      ibgeId: 2106631,
      name: 'Matões do Norte',
    },
    {
      id: 3336,
      ibgeId: 2111508,
      name: 'São Mateus do Maranhão',
    },
    {
      id: 3337,
      ibgeId: 2101004,
      name: 'Arari',
    },
    {
      id: 3338,
      ibgeId: 2105401,
      name: 'Itapecuru Mirim',
    },
    {
      id: 3339,
      ibgeId: 2100709,
      name: 'Anajatuba',
    },
    {
      id: 3340,
      ibgeId: 2106755,
      name: 'Miranda do Norte',
    },
    {
      id: 3341,
      ibgeId: 2103208,
      name: 'Chapadinha',
    },
    {
      id: 3342,
      ibgeId: 2100105,
      name: 'Afonso Cunha',
    },
    {
      id: 3343,
      ibgeId: 2106409,
      name: 'Mata Roma',
    },
    {
      id: 3344,
      ibgeId: 2102200,
      name: 'Buriti',
    },
    {
      id: 3345,
      ibgeId: 2102101,
      name: 'Brejo',
    },
    {
      id: 3346,
      ibgeId: 2100808,
      name: 'Anapurus',
    },
    {
      id: 3347,
      ibgeId: 2112605,
      name: 'Urbano Santos',
    },
    {
      id: 3348,
      ibgeId: 2101731,
      name: 'Belágua',
    },
    {
      id: 3349,
      ibgeId: 2110104,
      name: 'Santa Quitéria do Maranhão',
    },
    {
      id: 3350,
      ibgeId: 2106672,
      name: 'Milagres do Maranhão',
    },
    {
      id: 3351,
      ibgeId: 2110609,
      name: 'São Bernardo',
    },
    {
      id: 3352,
      ibgeId: 2110237,
      name: 'Santana do Maranhão',
    },
    {
      id: 3353,
      ibgeId: 2106300,
      name: 'Magalhães de Almeida',
    },
    {
      id: 3354,
      ibgeId: 2100907,
      name: 'Araioses',
    },
    {
      id: 3355,
      ibgeId: 2100154,
      name: 'Água Doce do Maranhão',
    },
    {
      id: 3356,
      ibgeId: 2112506,
      name: 'Tutóia',
    },
    {
      id: 3357,
      ibgeId: 2108058,
      name: 'Paulino Neves',
    },
    {
      id: 3358,
      ibgeId: 2101707,
      name: 'Barreirinhas',
    },
    {
      id: 3359,
      ibgeId: 2103000,
      name: 'Caxias',
    },
    {
      id: 3360,
      ibgeId: 2100303,
      name: 'Aldeias Altas',
    },
    {
      id: 3361,
      ibgeId: 2111078,
      name: 'São João do Soter',
    },
    {
      id: 3362,
      ibgeId: 2103406,
      name: 'Coelho Neto',
    },
    {
      id: 3363,
      ibgeId: 2103901,
      name: 'Duque Bacelar',
    },
    {
      id: 3364,
      ibgeId: 2112209,
      name: 'Timon',
    },
    {
      id: 3365,
      ibgeId: 2107803,
      name: 'Parnarama',
    },
    {
      id: 3366,
      ibgeId: 2106607,
      name: 'Matões',
    },
    {
      id: 3367,
      ibgeId: 2110906,
      name: 'São Francisco do Maranhão',
    },
    {
      id: 3368,
      ibgeId: 2101509,
      name: 'Barão de Grajaú',
    },
    {
      id: 3369,
      ibgeId: 2111102,
      name: 'São João dos Patos',
    },
    {
      id: 3370,
      ibgeId: 2111953,
      name: 'Sucupira do Riachão',
    },
    {
      id: 3371,
      ibgeId: 2107704,
      name: 'Paraibano',
    },
    {
      id: 3372,
      ibgeId: 2107902,
      name: 'Passagem Franca',
    },
    {
      id: 3373,
      ibgeId: 2105922,
      name: 'Lagoa do Mato',
    },
    {
      id: 3374,
      ibgeId: 2102309,
      name: 'Buriti Bravo',
    },
    {
      id: 3375,
      ibgeId: 2103505,
      name: 'Colinas',
    },
    {
      id: 3376,
      ibgeId: 2104206,
      name: 'Fortuna',
    },
    {
      id: 3377,
      ibgeId: 2101202,
      name: 'Bacabal',
    },
    {
      id: 3378,
      ibgeId: 2102077,
      name: 'Bom Lugar',
    },
    {
      id: 3379,
      ibgeId: 2105906,
      name: 'Lago Verde',
    },
    {
      id: 3380,
      ibgeId: 2107407,
      name: "Olho D'Água das Cunhãs",
    },
    {
      id: 3381,
      ibgeId: 2108702,
      name: 'Pio XII',
    },
    {
      id: 3382,
      ibgeId: 2111409,
      name: 'São Luís Gonzaga do Maranhão',
    },
    {
      id: 3383,
      ibgeId: 2111722,
      name: 'Satubinha',
    },
    {
      id: 3384,
      ibgeId: 2105807,
      name: 'Lago do Junco',
    },
    {
      id: 3385,
      ibgeId: 2105948,
      name: 'Lago dos Rodrigues',
    },
    {
      id: 3386,
      ibgeId: 2106359,
      name: 'Marajá do Sena',
    },
    {
      id: 3387,
      ibgeId: 2105708,
      name: 'Lago da Pedra',
    },
    {
      id: 3388,
      ibgeId: 2108108,
      name: 'Paulo Ramos',
    },
    {
      id: 3389,
      ibgeId: 2105963,
      name: 'Lagoa Grande do Maranhão',
    },
    {
      id: 3390,
      ibgeId: 2105203,
      name: 'Igarapé Grande',
    },
    {
      id: 3391,
      ibgeId: 2101939,
      name: 'Bernardo do Mearim',
    },
    {
      id: 3392,
      ibgeId: 2108207,
      name: 'Pedreiras',
    },
    {
      id: 3393,
      ibgeId: 2112233,
      name: 'Trizidela do Vale',
    },
    {
      id: 3394,
      ibgeId: 2106003,
      name: 'Lima Campos',
    },
    {
      id: 3395,
      ibgeId: 2110302,
      name: 'Santo Antônio dos Lopes',
    },
    {
      id: 3396,
      ibgeId: 2102754,
      name: 'Capinzal do Norte',
    },
    {
      id: 3397,
      ibgeId: 2108900,
      name: 'Poção de Pedras',
    },
    {
      id: 3398,
      ibgeId: 2104008,
      name: 'Esperantinópolis',
    },
    {
      id: 3399,
      ibgeId: 2111631,
      name: 'São Raimundo do Doca Bezerra',
    },
    {
      id: 3400,
      ibgeId: 2105609,
      name: 'Joselândia',
    },
    {
      id: 3401,
      ibgeId: 2111672,
      name: 'São Roberto',
    },
    {
      id: 3402,
      ibgeId: 2109106,
      name: 'Presidente Dutra',
    },
    {
      id: 3403,
      ibgeId: 2111250,
      name: 'São José dos Basílios',
    },
    {
      id: 3404,
      ibgeId: 2112308,
      name: 'Tuntum',
    },
    {
      id: 3405,
      ibgeId: 2103802,
      name: 'Dom Pedro',
    },
    {
      id: 3406,
      ibgeId: 2109759,
      name: 'Santa Filomena do Maranhão',
    },
    {
      id: 3407,
      ibgeId: 2104503,
      name: 'Governador Archer',
    },
    {
      id: 3408,
      ibgeId: 2104404,
      name: 'Gonçalves Dias',
    },
    {
      id: 3409,
      ibgeId: 2104602,
      name: 'Governador Eugênio Barros',
    },
    {
      id: 3410,
      ibgeId: 2111748,
      name: 'Senador Alexandre Costa',
    },
    {
      id: 3411,
      ibgeId: 2104701,
      name: 'Graça Aranha',
    },
    {
      id: 3412,
      ibgeId: 2110708,
      name: 'São Domingos do Maranhão',
    },
    {
      id: 3413,
      ibgeId: 2104628,
      name: 'Governador Luiz Rocha',
    },
    {
      id: 3414,
      ibgeId: 2101400,
      name: 'Balsas',
    },
    {
      id: 3415,
      ibgeId: 2104107,
      name: 'Fortaleza dos Nogueiras',
    },
    {
      id: 3416,
      ibgeId: 2107258,
      name: 'Nova Colinas',
    },
    {
      id: 3417,
      ibgeId: 2100501,
      name: 'Alto Parnaíba',
    },
    {
      id: 3418,
      ibgeId: 2112001,
      name: 'Tasso Fragoso',
    },
    {
      id: 3419,
      ibgeId: 2109700,
      name: 'Sambaíba',
    },
    {
      id: 3420,
      ibgeId: 2111607,
      name: 'São Raimundo das Mangabeiras',
    },
    {
      id: 3421,
      ibgeId: 2106706,
      name: 'Mirador',
    },
    {
      id: 3422,
      ibgeId: 2111904,
      name: 'Sucupira do Norte',
    },
    {
      id: 3423,
      ibgeId: 2108009,
      name: 'Pastos Bons',
    },
    {
      id: 3424,
      ibgeId: 2107308,
      name: 'Nova Iorque',
    },
    {
      id: 3425,
      ibgeId: 2101806,
      name: 'Benedito Leite',
    },
    {
      id: 3426,
      ibgeId: 2110658,
      name: 'São Domingos do Azeitão',
    },
    {
      id: 3427,
      ibgeId: 2110807,
      name: 'São Félix de Balsas',
    },
    {
      id: 3428,
      ibgeId: 2106102,
      name: 'Loreto',
    },
    {
      id: 3429,
      ibgeId: 2105302,
      name: 'Imperatriz',
    },
    {
      id: 3430,
      ibgeId: 2111532,
      name: 'São Pedro da Água Branca',
    },
    {
      id: 3431,
      ibgeId: 2103257,
      name: 'Cidelândia',
    },
    {
      id: 3432,
      ibgeId: 2105500,
      name: 'João Lisboa',
    },
    {
      id: 3433,
      ibgeId: 2100600,
      name: 'Amarante do Maranhão',
    },
    {
      id: 3434,
      ibgeId: 2112852,
      name: 'Vila Nova dos Martírios',
    },
    {
      id: 3435,
      ibgeId: 2111805,
      name: 'Sítio Novo',
    },
    {
      id: 3436,
      ibgeId: 2103752,
      name: 'Davinópolis',
    },
    {
      id: 3437,
      ibgeId: 2104552,
      name: 'Governador Edison Lobão',
    },
    {
      id: 3438,
      ibgeId: 2110856,
      name: 'São Francisco do Brejão',
    },
    {
      id: 3439,
      ibgeId: 2100055,
      name: 'Açailândia',
    },
    {
      id: 3440,
      ibgeId: 2102358,
      name: 'Buritirana',
    },
    {
      id: 3441,
      ibgeId: 2111763,
      name: 'Senador La Rocque',
    },
    {
      id: 3442,
      ibgeId: 2107001,
      name: 'Montes Altos',
    },
    {
      id: 3443,
      ibgeId: 2105989,
      name: 'Lajeado Novo',
    },
    {
      id: 3444,
      ibgeId: 2109551,
      name: 'Ribamar Fiquene',
    },
    {
      id: 3445,
      ibgeId: 2105427,
      name: 'Itinga do Maranhão',
    },
    {
      id: 3446,
      ibgeId: 2104800,
      name: 'Grajaú',
    },
    {
      id: 3447,
      ibgeId: 2104099,
      name: 'Formosa da Serra Negra',
    },
    {
      id: 3448,
      ibgeId: 2100956,
      name: 'Arame',
    },
    {
      id: 3449,
      ibgeId: 2105351,
      name: 'Itaipava do Grajaú',
    },
    {
      id: 3450,
      ibgeId: 2101608,
      name: 'Barra do Corda',
    },
    {
      id: 3451,
      ibgeId: 2105476,
      name: 'Jenipapo dos Vieiras',
    },
    {
      id: 3452,
      ibgeId: 2104081,
      name: 'Fernando Falcão',
    },
    {
      id: 3453,
      ibgeId: 2102556,
      name: 'Campestre do Maranhão',
    },
    {
      id: 3454,
      ibgeId: 2109007,
      name: 'Porto Franco',
    },
    {
      id: 3455,
      ibgeId: 2111052,
      name: 'São João do Paraíso',
    },
    {
      id: 3456,
      ibgeId: 2104057,
      name: 'Estreito',
    },
    {
      id: 3457,
      ibgeId: 2111573,
      name: 'São Pedro dos Crentes',
    },
    {
      id: 3458,
      ibgeId: 2102804,
      name: 'Carolina',
    },
    {
      id: 3459,
      ibgeId: 2109502,
      name: 'Riachão',
    },
    {
      id: 3460,
      ibgeId: 2104073,
      name: 'Feira Nova do Maranhão',
    },
    {
      id: 5075,
      ibgeId: 2105450,
      name: 'Jatobá',
    },
  ],
  MG: [
    {
      id: 816,
      ibgeId: 3106200,
      name: 'Belo Horizonte',
    },
    {
      id: 817,
      ibgeId: 3118601,
      name: 'Contagem',
    },
    {
      id: 818,
      ibgeId: 3129806,
      name: 'Ibirité',
    },
    {
      id: 819,
      ibgeId: 3165537,
      name: 'Sarzedo',
    },
    {
      id: 820,
      ibgeId: 3140159,
      name: 'Mário Campos',
    },
    {
      id: 821,
      ibgeId: 3106705,
      name: 'Betim',
    },
    {
      id: 822,
      ibgeId: 3124104,
      name: 'Esmeraldas',
    },
    {
      id: 823,
      ibgeId: 3130101,
      name: 'Igarapé',
    },
    {
      id: 824,
      ibgeId: 3162922,
      name: 'São Joaquim de Bicas',
    },
    {
      id: 825,
      ibgeId: 3157807,
      name: 'Santa Luzia',
    },
    {
      id: 826,
      ibgeId: 3171204,
      name: 'Vespasiano',
    },
    {
      id: 827,
      ibgeId: 3137601,
      name: 'Lagoa Santa',
    },
    {
      id: 828,
      ibgeId: 3162955,
      name: 'São José da Lapa',
    },
    {
      id: 829,
      ibgeId: 3117876,
      name: 'Confins',
    },
    {
      id: 830,
      ibgeId: 3149309,
      name: 'Pedro Leopoldo',
    },
    {
      id: 831,
      ibgeId: 3154606,
      name: 'Ribeirão das Neves',
    },
    {
      id: 832,
      ibgeId: 3168309,
      name: 'Taquaraçu de Minas',
    },
    {
      id: 833,
      ibgeId: 3144805,
      name: 'Nova Lima',
    },
    {
      id: 834,
      ibgeId: 3154804,
      name: 'Rio Acima',
    },
    {
      id: 835,
      ibgeId: 3153905,
      name: 'Raposos',
    },
    {
      id: 836,
      ibgeId: 3156700,
      name: 'Sabará',
    },
    {
      id: 837,
      ibgeId: 3110004,
      name: 'Caeté',
    },
    {
      id: 838,
      ibgeId: 3136603,
      name: 'Nova União',
    },
    {
      id: 839,
      ibgeId: 3127701,
      name: 'Governador Valadares',
    },
    {
      id: 840,
      ibgeId: 3171501,
      name: 'Mathias Lobato',
    },
    {
      id: 841,
      ibgeId: 3126901,
      name: 'Frei Inocêncio',
    },
    {
      id: 842,
      ibgeId: 3144904,
      name: 'Nova Módica',
    },
    {
      id: 843,
      ibgeId: 3150000,
      name: 'Pescador',
    },
    {
      id: 844,
      ibgeId: 3140100,
      name: 'Marilac',
    },
    {
      id: 845,
      ibgeId: 3141702,
      name: 'Mesquita',
    },
    {
      id: 846,
      ibgeId: 3144359,
      name: 'Naque',
    },
    {
      id: 847,
      ibgeId: 3149952,
      name: 'Periquito',
    },
    {
      id: 848,
      ibgeId: 3133204,
      name: 'Itanhomi',
    },
    {
      id: 849,
      ibgeId: 3112653,
      name: 'Capitão Andrade',
    },
    {
      id: 850,
      ibgeId: 3169505,
      name: 'Tumiritinga',
    },
    {
      id: 851,
      ibgeId: 3123700,
      name: 'Engenheiro Caldas',
    },
    {
      id: 852,
      ibgeId: 3125804,
      name: 'Fernandes Tourinho',
    },
    {
      id: 853,
      ibgeId: 3101805,
      name: 'Alpercata',
    },
    {
      id: 854,
      ibgeId: 3168408,
      name: 'Tarumirim',
    },
    {
      id: 855,
      ibgeId: 3167707,
      name: 'Sobrália',
    },
    {
      id: 856,
      ibgeId: 3162609,
      name: 'São João do Oriente',
    },
    {
      id: 857,
      ibgeId: 3100500,
      name: 'Açucena',
    },
    {
      id: 858,
      ibgeId: 3122504,
      name: 'Dom Cavati',
    },
    {
      id: 859,
      ibgeId: 3131307,
      name: 'Ipatinga',
    },
    {
      id: 860,
      ibgeId: 3119401,
      name: 'Coronel Fabriciano',
    },
    {
      id: 861,
      ibgeId: 3103009,
      name: 'Antônio Dias',
    },
    {
      id: 862,
      ibgeId: 3158953,
      name: 'Santana do Paraíso',
    },
    {
      id: 863,
      ibgeId: 3168705,
      name: 'Timóteo',
    },
    {
      id: 864,
      ibgeId: 3140308,
      name: 'Marliéria',
    },
    {
      id: 865,
      ibgeId: 3135001,
      name: 'Jaguaraçu',
    },
    {
      id: 866,
      ibgeId: 3108800,
      name: 'Braúnas',
    },
    {
      id: 867,
      ibgeId: 3129301,
      name: 'Iapu',
    },
    {
      id: 868,
      ibgeId: 3109253,
      name: 'Bugre',
    },
    {
      id: 869,
      ibgeId: 3136108,
      name: 'Joanésia',
    },
    {
      id: 870,
      ibgeId: 3106309,
      name: 'Belo Oriente',
    },
    {
      id: 871,
      ibgeId: 3131158,
      name: 'Ipaba',
    },
    {
      id: 872,
      ibgeId: 3170578,
      name: 'Vargem Alegre',
    },
    {
      id: 873,
      ibgeId: 3101102,
      name: 'Aimorés',
    },
    {
      id: 874,
      ibgeId: 3134103,
      name: 'Itueta',
    },
    {
      id: 875,
      ibgeId: 3159506,
      name: 'Santa Rita do Itueto',
    },
    {
      id: 876,
      ibgeId: 3154309,
      name: 'Resplendor',
    },
    {
      id: 877,
      ibgeId: 3118403,
      name: 'Conselheiro Pena',
    },
    {
      id: 878,
      ibgeId: 3120839,
      name: 'Cuparaque',
    },
    {
      id: 879,
      ibgeId: 3127370,
      name: 'Goiabeira',
    },
    {
      id: 880,
      ibgeId: 3102209,
      name: 'Alvarenga',
    },
    {
      id: 881,
      ibgeId: 3127305,
      name: 'Galiléia',
    },
    {
      id: 882,
      ibgeId: 3161650,
      name: 'São Geraldo do Baixio',
    },
    {
      id: 883,
      ibgeId: 3115706,
      name: 'Central de Minas',
    },
    {
      id: 884,
      ibgeId: 3122108,
      name: 'Divino das Laranjeiras',
    },
    {
      id: 885,
      ibgeId: 3141504,
      name: 'Mendes Pimentel',
    },
    {
      id: 886,
      ibgeId: 3161056,
      name: 'São Félix de Minas',
    },
    {
      id: 887,
      ibgeId: 3162575,
      name: 'São João do Manteninha',
    },
    {
      id: 888,
      ibgeId: 3131802,
      name: 'Itabirinha',
    },
    {
      id: 889,
      ibgeId: 3139607,
      name: 'Mantena',
    },
    {
      id: 890,
      ibgeId: 3144672,
      name: 'Nova Belém',
    },
    {
      id: 891,
      ibgeId: 3113404,
      name: 'Caratinga',
    },
    {
      id: 892,
      ibgeId: 3130556,
      name: 'Imbé de Minas',
    },
    {
      id: 893,
      ibgeId: 3123858,
      name: 'Entre Folhas',
    },
    {
      id: 894,
      ibgeId: 3150158,
      name: 'Piedade de Caratinga',
    },
    {
      id: 895,
      ibgeId: 3159357,
      name: 'Santa Rita de Minas',
    },
    {
      id: 896,
      ibgeId: 3157252,
      name: 'Santa Bárbara do Leste',
    },
    {
      id: 897,
      ibgeId: 3130903,
      name: 'Inhapim',
    },
    {
      id: 898,
      ibgeId: 3164472,
      name: 'São Sebastião do Anta',
    },
    {
      id: 899,
      ibgeId: 3160959,
      name: 'São Domingos das Dores',
    },
    {
      id: 900,
      ibgeId: 3170057,
      name: 'Ubaporanga',
    },
    {
      id: 901,
      ibgeId: 3107802,
      name: 'Bom Jesus do Galho',
    },
    {
      id: 902,
      ibgeId: 3120003,
      name: 'Córrego Novo',
    },
    {
      id: 903,
      ibgeId: 3150539,
      name: "Pingo-D'Água",
    },
    {
      id: 904,
      ibgeId: 3154002,
      name: 'Raul Soares',
    },
    {
      id: 905,
      ibgeId: 3171154,
      name: 'Vermelho Novo',
    },
    {
      id: 906,
      ibgeId: 3164001,
      name: 'São Pedro dos Ferros',
    },
    {
      id: 907,
      ibgeId: 3148756,
      name: 'Pedra Bonita',
    },
    {
      id: 908,
      ibgeId: 3100302,
      name: 'Abre Campo',
    },
    {
      id: 909,
      ibgeId: 3140902,
      name: 'Matipó',
    },
    {
      id: 910,
      ibgeId: 3166303,
      name: 'Sericita',
    },
    {
      id: 911,
      ibgeId: 3154903,
      name: 'Rio Casca',
    },
    {
      id: 912,
      ibgeId: 3170503,
      name: 'Urucânia',
    },
    {
      id: 913,
      ibgeId: 3150208,
      name: 'Piedade de Ponte Nova',
    },
    {
      id: 914,
      ibgeId: 3157401,
      name: 'Santa Cruz do Escalvado',
    },
    {
      id: 915,
      ibgeId: 3160108,
      name: 'Santo Antônio do Grama',
    },
    {
      id: 916,
      ibgeId: 3135506,
      name: 'Jequeri',
    },
    {
      id: 917,
      ibgeId: 3146107,
      name: 'Ouro Preto',
    },
    {
      id: 918,
      ibgeId: 3140001,
      name: 'Mariana',
    },
    {
      id: 919,
      ibgeId: 3152105,
      name: 'Ponte Nova',
    },
    {
      id: 920,
      ibgeId: 3128204,
      name: 'Guaraciaba',
    },
    {
      id: 921,
      ibgeId: 3121704,
      name: 'Diogo de Vasconcelos',
    },
    {
      id: 922,
      ibgeId: 3100401,
      name: 'Acaiaca',
    },
    {
      id: 923,
      ibgeId: 3145851,
      name: 'Oratórios',
    },
    {
      id: 924,
      ibgeId: 3122702,
      name: 'Dom Silvério',
    },
    {
      id: 925,
      ibgeId: 3165560,
      name: 'Sem Peixe',
    },
    {
      id: 926,
      ibgeId: 3155009,
      name: 'Rio Doce',
    },
    {
      id: 927,
      ibgeId: 3102506,
      name: 'Amparo da Serra',
    },
    {
      id: 928,
      ibgeId: 3105707,
      name: 'Barra Longa',
    },
    {
      id: 929,
      ibgeId: 3131901,
      name: 'Itabirito',
    },
    {
      id: 930,
      ibgeId: 3109006,
      name: 'Brumadinho',
    },
    {
      id: 931,
      ibgeId: 3142304,
      name: 'Moeda',
    },
    {
      id: 932,
      ibgeId: 3106408,
      name: 'Belo Vale',
    },
    {
      id: 933,
      ibgeId: 3150406,
      name: 'Piedade dos Gerais',
    },
    {
      id: 934,
      ibgeId: 3120607,
      name: 'Crucilândia',
    },
    {
      id: 935,
      ibgeId: 3108107,
      name: 'Bonfim',
    },
    {
      id: 936,
      ibgeId: 3155306,
      name: 'Rio Manso',
    },
    {
      id: 937,
      ibgeId: 3132206,
      name: 'Itaguara',
    },
    {
      id: 938,
      ibgeId: 3123908,
      name: 'Entre Rios de Minas',
    },
    {
      id: 939,
      ibgeId: 3121407,
      name: 'Desterro de Entre Rios',
    },
    {
      id: 940,
      ibgeId: 3160900,
      name: 'São Brás do Suaçuí',
    },
    {
      id: 941,
      ibgeId: 3135407,
      name: 'Jeceaba',
    },
    {
      id: 942,
      ibgeId: 3122306,
      name: 'Divinópolis',
    },
    {
      id: 943,
      ibgeId: 3145208,
      name: 'Nova Serrana',
    },
    {
      id: 944,
      ibgeId: 3116605,
      name: 'Cláudio',
    },
    {
      id: 945,
      ibgeId: 3114501,
      name: 'Carmópolis de Minas',
    },
    {
      id: 946,
      ibgeId: 3150604,
      name: 'Piracema',
    },
    {
      id: 947,
      ibgeId: 3147709,
      name: 'Passa Tempo',
    },
    {
      id: 948,
      ibgeId: 3145604,
      name: 'Oliveira',
    },
    {
      id: 949,
      ibgeId: 3161205,
      name: 'São Francisco de Paula',
    },
    {
      id: 950,
      ibgeId: 3161809,
      name: 'São Gonçalo do Pará',
    },
    {
      id: 951,
      ibgeId: 3149705,
      name: 'Perdigão',
    },
    {
      id: 952,
      ibgeId: 3114006,
      name: 'Carmo da Mata',
    },
    {
      id: 953,
      ibgeId: 3133501,
      name: 'Itapecerica',
    },
    {
      id: 954,
      ibgeId: 3110400,
      name: 'Camacho',
    },
    {
      id: 955,
      ibgeId: 3114204,
      name: 'Carmo do Cajuru',
    },
    {
      id: 956,
      ibgeId: 3160405,
      name: 'Santo Antônio do Monte',
    },
    {
      id: 957,
      ibgeId: 3148905,
      name: 'Pedra do Indaiá',
    },
    {
      id: 958,
      ibgeId: 3164605,
      name: 'São Sebastião do Oeste',
    },
    {
      id: 959,
      ibgeId: 3119955,
      name: 'Córrego Fundo',
    },
    {
      id: 960,
      ibgeId: 3126109,
      name: 'Formiga',
    },
    {
      id: 961,
      ibgeId: 3107109,
      name: 'Boa Esperança',
    },
    {
      id: 962,
      ibgeId: 3135308,
      name: 'Japaraíba',
    },
    {
      id: 963,
      ibgeId: 3146503,
      name: 'Pains',
    },
    {
      id: 964,
      ibgeId: 3150505,
      name: 'Pimenta',
    },
    {
      id: 965,
      ibgeId: 3104205,
      name: 'Arcos',
    },
    {
      id: 966,
      ibgeId: 3137205,
      name: 'Lagoa da Prata',
    },
    {
      id: 967,
      ibgeId: 3138807,
      name: 'Luz',
    },
    {
      id: 968,
      ibgeId: 3107406,
      name: 'Bom Despacho',
    },
    {
      id: 969,
      ibgeId: 3103900,
      name: 'Araújos',
    },
    {
      id: 970,
      ibgeId: 3142403,
      name: 'Moema',
    },
    {
      id: 971,
      ibgeId: 3140506,
      name: 'Martinho Campos',
    },
    {
      id: 972,
      ibgeId: 3123205,
      name: 'Dores do Indaiá',
    },
    {
      id: 973,
      ibgeId: 3124708,
      name: 'Estrela do Indaiá',
    },
    {
      id: 974,
      ibgeId: 3166600,
      name: 'Serra da Saudade',
    },
    {
      id: 975,
      ibgeId: 3100203,
      name: 'Abaeté',
    },
    {
      id: 976,
      ibgeId: 3107000,
      name: 'Biquinhas',
    },
    {
      id: 977,
      ibgeId: 3146404,
      name: 'Paineiras',
    },
    {
      id: 978,
      ibgeId: 3115607,
      name: 'Cedro do Abaeté',
    },
    {
      id: 979,
      ibgeId: 3153707,
      name: 'Quartel Geral',
    },
    {
      id: 980,
      ibgeId: 3143500,
      name: 'Morada Nova de Minas',
    },
    {
      id: 981,
      ibgeId: 3152006,
      name: 'Pompéu',
    },
    {
      id: 982,
      ibgeId: 3151404,
      name: 'Pitangui',
    },
    {
      id: 983,
      ibgeId: 3145802,
      name: 'Onça de Pitangui',
    },
    {
      id: 984,
      ibgeId: 3138302,
      name: 'Leandro Ferreira',
    },
    {
      id: 985,
      ibgeId: 3147105,
      name: 'Pará de Minas',
    },
    {
      id: 986,
      ibgeId: 3139706,
      name: 'Maravilhas',
    },
    {
      id: 987,
      ibgeId: 3149606,
      name: 'Pequi',
    },
    {
      id: 988,
      ibgeId: 3117603,
      name: 'Conceição do Pará',
    },
    {
      id: 989,
      ibgeId: 3146909,
      name: 'Papagaios',
    },
    {
      id: 990,
      ibgeId: 3140704,
      name: 'Mateus Leme',
    },
    {
      id: 991,
      ibgeId: 3136652,
      name: 'Juatuba',
    },
    {
      id: 992,
      ibgeId: 3133808,
      name: 'Itaúna',
    },
    {
      id: 993,
      ibgeId: 3133709,
      name: 'Itatiaiuçu',
    },
    {
      id: 994,
      ibgeId: 3126000,
      name: 'Florestal',
    },
    {
      id: 995,
      ibgeId: 3163102,
      name: 'São José da Varginha',
    },
    {
      id: 996,
      ibgeId: 3130200,
      name: 'Igaratinga',
    },
    {
      id: 997,
      ibgeId: 3167202,
      name: 'Sete Lagoas',
    },
    {
      id: 998,
      ibgeId: 3141108,
      name: 'Matozinhos',
    },
    {
      id: 999,
      ibgeId: 3112505,
      name: 'Capim Branco',
    },
    {
      id: 1000,
      ibgeId: 3105004,
      name: 'Baldim',
    },
    {
      id: 1001,
      ibgeId: 3127206,
      name: 'Funilândia',
    },
    {
      id: 1002,
      ibgeId: 3153608,
      name: 'Prudente de Morais',
    },
    {
      id: 1003,
      ibgeId: 3126406,
      name: 'Fortuna de Minas',
    },
    {
      id: 1004,
      ibgeId: 3131000,
      name: 'Inhaúma',
    },
    {
      id: 1005,
      ibgeId: 3109600,
      name: 'Cachoeira da Prata',
    },
    {
      id: 1006,
      ibgeId: 3135704,
      name: 'Jequitibá',
    },
    {
      id: 1007,
      ibgeId: 3109907,
      name: 'Caetanópolis',
    },
    {
      id: 1008,
      ibgeId: 3147402,
      name: 'Paraopeba',
    },
    {
      id: 1009,
      ibgeId: 3103207,
      name: 'Araçaí',
    },
    {
      id: 1010,
      ibgeId: 3118908,
      name: 'Cordisburgo',
    },
    {
      id: 1011,
      ibgeId: 3158508,
      name: 'Santana de Pirapama',
    },
    {
      id: 1012,
      ibgeId: 3120904,
      name: 'Curvelo',
    },
    {
      id: 1013,
      ibgeId: 3125903,
      name: 'Ferros',
    },
    {
      id: 1014,
      ibgeId: 3147501,
      name: 'Passabém',
    },
    {
      id: 1015,
      ibgeId: 3164803,
      name: 'São Sebastião do Rio Preto',
    },
    {
      id: 1016,
      ibgeId: 3132800,
      name: 'Itambé do Mato Dentro',
    },
    {
      id: 1017,
      ibgeId: 3134608,
      name: 'Jaboticatubas',
    },
    {
      id: 1018,
      ibgeId: 3159001,
      name: 'Santana do Riacho',
    },
    {
      id: 1019,
      ibgeId: 3118106,
      name: 'Congonhas do Norte',
    },
    {
      id: 1020,
      ibgeId: 3117504,
      name: 'Conceição do Mato Dentro',
    },
    {
      id: 1021,
      ibgeId: 3122603,
      name: 'Dom Joaquim',
    },
    {
      id: 1022,
      ibgeId: 3143708,
      name: 'Morro do Pilar',
    },
    {
      id: 1023,
      ibgeId: 3113800,
      name: 'Carmésia',
    },
    {
      id: 1024,
      ibgeId: 3160504,
      name: 'Santo Antônio do Rio Abaixo',
    },
    {
      id: 1025,
      ibgeId: 3123106,
      name: 'Dores de Guanhães',
    },
    {
      id: 1026,
      ibgeId: 3131703,
      name: 'Itabira',
    },
    {
      id: 1027,
      ibgeId: 3107703,
      name: 'Bom Jesus do Amparo',
    },
    {
      id: 1028,
      ibgeId: 3158003,
      name: 'Santa Maria de Itabira',
    },
    {
      id: 1029,
      ibgeId: 3144706,
      name: 'Nova Era',
    },
    {
      id: 1030,
      ibgeId: 3136207,
      name: 'João Monlevade',
    },
    {
      id: 1031,
      ibgeId: 3161908,
      name: 'São Gonçalo do Rio Abaixo',
    },
    {
      id: 1032,
      ibgeId: 3106002,
      name: 'Bela Vista de Minas',
    },
    {
      id: 1033,
      ibgeId: 3155702,
      name: 'Rio Piracicaba',
    },
    {
      id: 1034,
      ibgeId: 3102308,
      name: 'Alvinópolis',
    },
    {
      id: 1035,
      ibgeId: 3157203,
      name: 'Santa Bárbara',
    },
    {
      id: 1036,
      ibgeId: 3115359,
      name: 'Catas Altas',
    },
    {
      id: 1037,
      ibgeId: 3105400,
      name: 'Barão de Cocais',
    },
    {
      id: 1038,
      ibgeId: 3121803,
      name: 'Dionísio',
    },
    {
      id: 1039,
      ibgeId: 3163409,
      name: 'São José do Goiabal',
    },
    {
      id: 1040,
      ibgeId: 3161007,
      name: 'São Domingos do Prata',
    },
    {
      id: 1041,
      ibgeId: 3136702,
      name: 'Juiz de Fora',
    },
    {
      id: 1042,
      ibgeId: 3125002,
      name: 'Ewbank da Câmara',
    },
    {
      id: 1043,
      ibgeId: 3115904,
      name: 'Chácara',
    },
    {
      id: 1044,
      ibgeId: 3140803,
      name: 'Matias Barbosa',
    },
    {
      id: 1045,
      ibgeId: 3167509,
      name: 'Simão Pereira',
    },
    {
      id: 1046,
      ibgeId: 3106101,
      name: 'Belmiro Braga',
    },
    {
      id: 1047,
      ibgeId: 3155900,
      name: 'Rio Preto',
    },
    {
      id: 1048,
      ibgeId: 3157278,
      name: 'Santa Bárbara do Monte Verde',
    },
    {
      id: 1049,
      ibgeId: 3159308,
      name: 'Santa Rita de Jacutinga',
    },
    {
      id: 1050,
      ibgeId: 3138609,
      name: 'Lima Duarte',
    },
    {
      id: 1051,
      ibgeId: 3145406,
      name: 'Olaria',
    },
    {
      id: 1052,
      ibgeId: 3158706,
      name: 'Santana do Garambéu',
    },
    {
      id: 1053,
      ibgeId: 3149408,
      name: 'Pedro Teixeira',
    },
    {
      id: 1054,
      ibgeId: 3155405,
      name: 'Rio Novo',
    },
    {
      id: 1055,
      ibgeId: 3127388,
      name: 'Goianá',
    },
    {
      id: 1056,
      ibgeId: 3119609,
      name: 'Coronel Pacheco',
    },
    {
      id: 1057,
      ibgeId: 3150109,
      name: 'Piau',
    },
    {
      id: 1058,
      ibgeId: 3128402,
      name: 'Guarani',
    },
    {
      id: 1059,
      ibgeId: 3167905,
      name: 'Tabuleiro',
    },
    {
      id: 1060,
      ibgeId: 3151305,
      name: 'Piraúba',
    },
    {
      id: 1061,
      ibgeId: 3155801,
      name: 'Rio Pomba',
    },
    {
      id: 1062,
      ibgeId: 3167301,
      name: 'Silverânia',
    },
    {
      id: 1063,
      ibgeId: 3167301,
      name: 'Silveirânia',
    },
    {
      id: 1064,
      ibgeId: 3141603,
      name: 'Mercês',
    },
    {
      id: 1065,
      ibgeId: 3146602,
      name: 'Paiva',
    },
    {
      id: 1066,
      ibgeId: 3105608,
      name: 'Barbacena',
    },
    {
      id: 1067,
      ibgeId: 3121506,
      name: 'Desterro do Melo',
    },
    {
      id: 1068,
      ibgeId: 3105905,
      name: 'Barroso',
    },
    {
      id: 1069,
      ibgeId: 3123007,
      name: 'Dores de Campos',
    },
    {
      id: 1070,
      ibgeId: 3157302,
      name: 'Santa Bárbara do Tugúrio',
    },
    {
      id: 1071,
      ibgeId: 3102902,
      name: 'Antônio Carlos',
    },
    {
      id: 1072,
      ibgeId: 3129400,
      name: 'Ibertioga',
    },
    {
      id: 1073,
      ibgeId: 3150307,
      name: 'Piedade do Rio Grande',
    },
    {
      id: 1074,
      ibgeId: 3106804,
      name: 'Bias Fortes',
    },
    {
      id: 1075,
      ibgeId: 3159407,
      name: 'Santa Rita do Ibitipoca',
    },
    {
      id: 1076,
      ibgeId: 3160702,
      name: 'Santos Dumont',
    },
    {
      id: 1077,
      ibgeId: 3145703,
      name: 'Oliveira Fortes',
    },
    {
      id: 1078,
      ibgeId: 3103306,
      name: 'Aracitaba',
    },
    {
      id: 1079,
      ibgeId: 3102100,
      name: 'Alto Rio Doce',
    },
    {
      id: 1080,
      ibgeId: 3116308,
      name: 'Cipotânea',
    },
    {
      id: 1081,
      ibgeId: 3154408,
      name: 'Ressaquinha',
    },
    {
      id: 1082,
      ibgeId: 3101631,
      name: 'Alfredo Vasconcelos',
    },
    {
      id: 1083,
      ibgeId: 3166204,
      name: 'Senhora dos Remédios',
    },
    {
      id: 1084,
      ibgeId: 3113206,
      name: 'Carandaí',
    },
    {
      id: 1085,
      ibgeId: 3112208,
      name: 'Capela Nova',
    },
    {
      id: 1086,
      ibgeId: 3162500,
      name: 'São João Del Rei',
    },
    {
      id: 1087,
      ibgeId: 3152709,
      name: 'Prados',
    },
    {
      id: 1088,
      ibgeId: 3168804,
      name: 'Tiradentes',
    },
    {
      id: 1089,
      ibgeId: 3157336,
      name: 'Santa Cruz de Minas',
    },
    {
      id: 1090,
      ibgeId: 3119708,
      name: 'Coronel Xavier Chaves',
    },
    {
      id: 1091,
      ibgeId: 3156106,
      name: 'Ritápolis',
    },
    {
      id: 1092,
      ibgeId: 3154200,
      name: 'Resende Costa',
    },
    {
      id: 1093,
      ibgeId: 3137403,
      name: 'Lagoa Dourada',
    },
    {
      id: 1094,
      ibgeId: 3165008,
      name: 'São Tiago',
    },
    {
      id: 1095,
      ibgeId: 3115201,
      name: 'Conceição da Barra de Minas',
    },
    {
      id: 1096,
      ibgeId: 3144508,
      name: 'Nazareno',
    },
    {
      id: 1097,
      ibgeId: 3134509,
      name: 'Itutinga',
    },
    {
      id: 1098,
      ibgeId: 3118304,
      name: 'Conselheiro Lafaiete',
    },
    {
      id: 1099,
      ibgeId: 3118007,
      name: 'Congonhas',
    },
    {
      id: 1100,
      ibgeId: 3145901,
      name: 'Ouro Branco',
    },
    {
      id: 1101,
      ibgeId: 3114907,
      name: 'Casa Grande',
    },
    {
      id: 1102,
      ibgeId: 3153806,
      name: 'Queluzito',
    },
    {
      id: 1103,
      ibgeId: 3120409,
      name: 'Cristiano Otoni',
    },
    {
      id: 1104,
      ibgeId: 3113107,
      name: 'Caranaíba',
    },
    {
      id: 1105,
      ibgeId: 3159100,
      name: 'Santana dos Montes',
    },
    {
      id: 1106,
      ibgeId: 3133907,
      name: 'Itaverava',
    },
    {
      id: 1107,
      ibgeId: 3115409,
      name: 'Catas Altas da Noruega',
    },
    {
      id: 1108,
      ibgeId: 3137908,
      name: 'Lamim',
    },
    {
      id: 1109,
      ibgeId: 3155207,
      name: 'Rio Espera',
    },
    {
      id: 1110,
      ibgeId: 3166006,
      name: 'Senhora de Oliveira',
    },
    {
      id: 1111,
      ibgeId: 3153103,
      name: 'Presidente Bernardes',
    },
    {
      id: 1112,
      ibgeId: 3150802,
      name: 'Piranga',
    },
    {
      id: 1113,
      ibgeId: 3169901,
      name: 'Ubá',
    },
    {
      id: 1114,
      ibgeId: 3156304,
      name: 'Rodeiro',
    },
    {
      id: 1115,
      ibgeId: 3169000,
      name: 'Tocantins',
    },
    {
      id: 1116,
      ibgeId: 3123304,
      name: 'Dores do Turvo',
    },
    {
      id: 1117,
      ibgeId: 3128808,
      name: 'Guidoval',
    },
    {
      id: 1118,
      ibgeId: 3172004,
      name: 'Visconde do Rio Branco',
    },
    {
      id: 1119,
      ibgeId: 3129004,
      name: 'Guiricema',
    },
    {
      id: 1120,
      ibgeId: 3161502,
      name: 'São Geraldo',
    },
    {
      id: 1121,
      ibgeId: 3165701,
      name: 'Senador Firmino',
    },
    {
      id: 1122,
      ibgeId: 3108701,
      name: 'Brás Pires',
    },
    {
      id: 1123,
      ibgeId: 3148301,
      name: 'Paula Cândido',
    },
    {
      id: 1124,
      ibgeId: 3121902,
      name: 'Divinésia',
    },
    {
      id: 1125,
      ibgeId: 3116704,
      name: 'Coimbra',
    },
    {
      id: 1126,
      ibgeId: 3124005,
      name: 'Ervália',
    },
    {
      id: 1127,
      ibgeId: 3110202,
      name: 'Cajuri',
    },
    {
      id: 1128,
      ibgeId: 3152303,
      name: 'Porto Firme',
    },
    {
      id: 1129,
      ibgeId: 3171303,
      name: 'Viçosa',
    },
    {
      id: 1130,
      ibgeId: 3168507,
      name: 'Teixeiras',
    },
    {
      id: 1131,
      ibgeId: 3148806,
      name: 'Pedra do Anta',
    },
    {
      id: 1132,
      ibgeId: 3163805,
      name: 'São Miguel do Anta',
    },
    {
      id: 1133,
      ibgeId: 3111705,
      name: 'Canaã',
    },
    {
      id: 1134,
      ibgeId: 3103702,
      name: 'Araponga',
    },
    {
      id: 1135,
      ibgeId: 3106903,
      name: 'Bicas',
    },
    {
      id: 1136,
      ibgeId: 3156205,
      name: 'Rochedo de Minas',
    },
    {
      id: 1137,
      ibgeId: 3128501,
      name: 'Guarará',
    },
    {
      id: 1138,
      ibgeId: 3140209,
      name: 'Maripá de Minas',
    },
    {
      id: 1139,
      ibgeId: 3149507,
      name: 'Pequeri',
    },
    {
      id: 1140,
      ibgeId: 3158607,
      name: 'Santana do Deserto',
    },
    {
      id: 1141,
      ibgeId: 3116209,
      name: 'Chiador',
    },
    {
      id: 1142,
      ibgeId: 3139805,
      name: 'Mar de Espanha',
    },
    {
      id: 1143,
      ibgeId: 3165602,
      name: 'Senador Cortes',
    },
    {
      id: 1144,
      ibgeId: 3101508,
      name: 'Além Paraíba',
    },
    {
      id: 1145,
      ibgeId: 3160009,
      name: 'Santo Antônio do Aventureiro',
    },
    {
      id: 1146,
      ibgeId: 3162906,
      name: 'São João Nepomuceno',
    },
    {
      id: 1147,
      ibgeId: 3121308,
      name: 'Descoberto',
    },
    {
      id: 1148,
      ibgeId: 3138401,
      name: 'Leopoldina',
    },
    {
      id: 1149,
      ibgeId: 3104403,
      name: 'Argirita',
    },
    {
      id: 1150,
      ibgeId: 3172103,
      name: 'Volta Grande',
    },
    {
      id: 1151,
      ibgeId: 3124609,
      name: 'Estrela Dalva',
    },
    {
      id: 1152,
      ibgeId: 3151107,
      name: 'Pirapetinga',
    },
    {
      id: 1153,
      ibgeId: 3154101,
      name: 'Recreio',
    },
    {
      id: 1154,
      ibgeId: 3146701,
      name: 'Palma',
    },
    {
      id: 1155,
      ibgeId: 3138005,
      name: 'Laranjal',
    },
    {
      id: 1156,
      ibgeId: 3115300,
      name: 'Cataguases',
    },
    {
      id: 1157,
      ibgeId: 3104601,
      name: 'Astolfo Dutra',
    },
    {
      id: 1158,
      ibgeId: 3122900,
      name: 'Dona Euzébia',
    },
    {
      id: 1159,
      ibgeId: 3132602,
      name: 'Itamarati de Minas',
    },
    {
      id: 1160,
      ibgeId: 3142205,
      name: 'Miraí',
    },
    {
      id: 1161,
      ibgeId: 3164431,
      name: 'São Sebastião da Vargem Alegre',
    },
    {
      id: 1162,
      ibgeId: 3158409,
      name: 'Santana de Cataguases',
    },
    {
      id: 1163,
      ibgeId: 3113305,
      name: 'Carangola',
    },
    {
      id: 1164,
      ibgeId: 3161403,
      name: 'São Francisco do Glória',
    },
    {
      id: 1165,
      ibgeId: 3125952,
      name: 'Fervedouro',
    },
    {
      id: 1166,
      ibgeId: 3122009,
      name: 'Divino',
    },
    {
      id: 1167,
      ibgeId: 3145877,
      name: 'Orizânia',
    },
    {
      id: 1168,
      ibgeId: 3124203,
      name: 'Espera Feliz',
    },
    {
      id: 1169,
      ibgeId: 3110103,
      name: 'Caiana',
    },
    {
      id: 1170,
      ibgeId: 3112109,
      name: 'Caparaó',
    },
    {
      id: 1171,
      ibgeId: 3125309,
      name: 'Faria Lemos',
    },
    {
      id: 1172,
      ibgeId: 3169208,
      name: 'Tombos',
    },
    {
      id: 1173,
      ibgeId: 3149002,
      name: 'Pedra Dourada',
    },
    {
      id: 1174,
      ibgeId: 3103108,
      name: 'Antônio Prado de Minas',
    },
    {
      id: 1175,
      ibgeId: 3124906,
      name: 'Eugenópolis',
    },
    {
      id: 1176,
      ibgeId: 3148202,
      name: 'Patrocínio do Muriaé',
    },
    {
      id: 1177,
      ibgeId: 3105509,
      name: 'Barão de Monte Alto',
    },
    {
      id: 1178,
      ibgeId: 3156452,
      name: 'Rosário da Limeira',
    },
    {
      id: 1179,
      ibgeId: 3143906,
      name: 'Muriaé',
    },
    {
      id: 1180,
      ibgeId: 3142106,
      name: 'Miradouro',
    },
    {
      id: 1181,
      ibgeId: 3171402,
      name: 'Vieiras',
    },
    {
      id: 1182,
      ibgeId: 3139409,
      name: 'Manhuaçu',
    },
    {
      id: 1183,
      ibgeId: 3157906,
      name: 'Santa Margarida',
    },
    {
      id: 1184,
      ibgeId: 3162559,
      name: 'São João do Manhuaçu',
    },
    {
      id: 1185,
      ibgeId: 3154150,
      name: 'Reduto',
    },
    {
      id: 1186,
      ibgeId: 3138674,
      name: 'Luisburgo',
    },
    {
      id: 1187,
      ibgeId: 3112901,
      name: 'Caputira',
    },
    {
      id: 1188,
      ibgeId: 3167608,
      name: 'Simonésia',
    },
    {
      id: 1189,
      ibgeId: 3158904,
      name: 'Santana do Manhuaçu',
    },
    {
      id: 1190,
      ibgeId: 3117405,
      name: 'Conceição de Ipanema',
    },
    {
      id: 1191,
      ibgeId: 3131208,
      name: 'Ipanema',
    },
    {
      id: 1192,
      ibgeId: 3168051,
      name: 'Taparuba',
    },
    {
      id: 1193,
      ibgeId: 3144003,
      name: 'Mutum',
    },
    {
      id: 1194,
      ibgeId: 3151909,
      name: 'Pocrane',
    },
    {
      id: 1195,
      ibgeId: 3139508,
      name: 'Manhumirim',
    },
    {
      id: 1196,
      ibgeId: 3140530,
      name: 'Martins Soares',
    },
    {
      id: 1197,
      ibgeId: 3123528,
      name: 'Durandé',
    },
    {
      id: 1198,
      ibgeId: 3153509,
      name: 'Alto Jequitibá',
    },
    {
      id: 1199,
      ibgeId: 3102050,
      name: 'Alto Caparaó',
    },
    {
      id: 1200,
      ibgeId: 3137700,
      name: 'Lajinha',
    },
    {
      id: 1201,
      ibgeId: 3116001,
      name: 'Chalé',
    },
    {
      id: 1202,
      ibgeId: 3163607,
      name: 'São José do Mantimento',
    },
    {
      id: 1203,
      ibgeId: 3170701,
      name: 'Varginha',
    },
    {
      id: 1204,
      ibgeId: 3123601,
      name: 'Elói Mendes',
    },
    {
      id: 1205,
      ibgeId: 3143005,
      name: 'Monte Belo',
    },
    {
      id: 1206,
      ibgeId: 3147204,
      name: 'Paraguaçu',
    },
    {
      id: 1207,
      ibgeId: 3101607,
      name: 'Alfenas',
    },
    {
      id: 1208,
      ibgeId: 3104304,
      name: 'Areado',
    },
    {
      id: 1209,
      ibgeId: 3122405,
      name: 'Divisa Nova',
    },
    {
      id: 1210,
      ibgeId: 3166907,
      name: 'Serrania',
    },
    {
      id: 1211,
      ibgeId: 3125200,
      name: 'Fama',
    },
    {
      id: 1212,
      ibgeId: 3102001,
      name: 'Alterosa',
    },
    {
      id: 1213,
      ibgeId: 3117108,
      name: 'Conceição da Aparecida',
    },
    {
      id: 1214,
      ibgeId: 3114402,
      name: 'Carmo do Rio Claro',
    },
    {
      id: 1215,
      ibgeId: 3111606,
      name: 'Campos Gerais',
    },
    {
      id: 1216,
      ibgeId: 3111309,
      name: 'Campo do Meio',
    },
    {
      id: 1217,
      ibgeId: 3130507,
      name: 'Ilicínea',
    },
    {
      id: 1218,
      ibgeId: 3128105,
      name: 'Guapé',
    },
    {
      id: 1219,
      ibgeId: 3169406,
      name: 'Três Pontas',
    },
    {
      id: 1220,
      ibgeId: 3158300,
      name: 'Santana da Vargem',
    },
    {
      id: 1221,
      ibgeId: 3138203,
      name: 'Lavras',
    },
    {
      id: 1222,
      ibgeId: 3134301,
      name: 'Itumirim',
    },
    {
      id: 1223,
      ibgeId: 3130804,
      name: 'Ingaí',
    },
    {
      id: 1224,
      ibgeId: 3130408,
      name: 'Ijaci',
    },
    {
      id: 1225,
      ibgeId: 3108008,
      name: 'Bom Sucesso',
    },
    {
      id: 1226,
      ibgeId: 3130002,
      name: 'Ibituruna',
    },
    {
      id: 1227,
      ibgeId: 3113909,
      name: 'Carmo da Cachoeira',
    },
    {
      id: 1228,
      ibgeId: 3118700,
      name: 'Coqueiral',
    },
    {
      id: 1229,
      ibgeId: 3138708,
      name: 'Luminárias',
    },
    {
      id: 1230,
      ibgeId: 3114600,
      name: 'Carrancas',
    },
    {
      id: 1231,
      ibgeId: 3144607,
      name: 'Nepomuceno',
    },
    {
      id: 1232,
      ibgeId: 3149903,
      name: 'Perdões',
    },
    {
      id: 1233,
      ibgeId: 3159902,
      name: 'Santo Antônio do Amparo',
    },
    {
      id: 1234,
      ibgeId: 3154705,
      name: 'Ribeirão Vermelho',
    },
    {
      id: 1235,
      ibgeId: 3111903,
      name: 'Cana Verde',
    },
    {
      id: 1236,
      ibgeId: 3111200,
      name: 'Campo Belo',
    },
    {
      id: 1237,
      ibgeId: 3100807,
      name: 'Aguanil',
    },
    {
      id: 1238,
      ibgeId: 3120201,
      name: 'Cristais',
    },
    {
      id: 1239,
      ibgeId: 3158805,
      name: 'Santana do Jacaré',
    },
    {
      id: 1240,
      ibgeId: 3112000,
      name: 'Candeias',
    },
    {
      id: 1241,
      ibgeId: 3102803,
      name: 'Andrelândia',
    },
    {
      id: 1242,
      ibgeId: 3139102,
      name: 'Madre de Deus de Minas',
    },
    {
      id: 1243,
      ibgeId: 3107505,
      name: 'Bom Jardim de Minas',
    },
    {
      id: 1244,
      ibgeId: 3147808,
      name: 'Passa Vinte',
    },
    {
      id: 1245,
      ibgeId: 3107208,
      name: 'Bocaina de Minas',
    },
    {
      id: 1246,
      ibgeId: 3138500,
      name: 'Liberdade',
    },
    {
      id: 1247,
      ibgeId: 3103603,
      name: 'Arantina',
    },
    {
      id: 1248,
      ibgeId: 3165305,
      name: 'São Vicente de Minas',
    },
    {
      id: 1249,
      ibgeId: 3110905,
      name: 'Campanha',
    },
    {
      id: 1250,
      ibgeId: 3142601,
      name: 'Monsenhor Paulo',
    },
    {
      id: 1251,
      ibgeId: 3160801,
      name: 'São Bento Abade',
    },
    {
      id: 1252,
      ibgeId: 3165206,
      name: 'São Thomé das Letras',
    },
    {
      id: 1253,
      ibgeId: 3169307,
      name: 'Três Corações',
    },
    {
      id: 1254,
      ibgeId: 3110707,
      name: 'Cambuquira',
    },
    {
      id: 1255,
      ibgeId: 3117702,
      name: 'Conceição do Rio Verde',
    },
    {
      id: 1256,
      ibgeId: 3115508,
      name: 'Caxambu',
    },
    {
      id: 1257,
      ibgeId: 3104908,
      name: 'Baependi',
    },
    {
      id: 1258,
      ibgeId: 3120805,
      name: 'Cruzília',
    },
    {
      id: 1259,
      ibgeId: 3141900,
      name: 'Minduri',
    },
    {
      id: 1260,
      ibgeId: 3101201,
      name: 'Aiuruoca',
    },
    {
      id: 1261,
      ibgeId: 3167004,
      name: 'Serranos',
    },
    {
      id: 1262,
      ibgeId: 3166402,
      name: 'Seritinga',
    },
    {
      id: 1263,
      ibgeId: 3114808,
      name: 'Carvalhos',
    },
    {
      id: 1264,
      ibgeId: 3101300,
      name: 'Alagoa',
    },
    {
      id: 1265,
      ibgeId: 3147600,
      name: 'Passa Quatro',
    },
    {
      id: 1266,
      ibgeId: 3133105,
      name: 'Itanhandu',
    },
    {
      id: 1267,
      ibgeId: 3171709,
      name: 'Virgínia',
    },
    {
      id: 1268,
      ibgeId: 3133006,
      name: 'Itamonte',
    },
    {
      id: 1269,
      ibgeId: 3164902,
      name: 'São Sebastião do Rio Verde',
    },
    {
      id: 1270,
      ibgeId: 3152600,
      name: 'Pouso Alto',
    },
    {
      id: 1271,
      ibgeId: 3163706,
      name: 'São Lourenço',
    },
    {
      id: 1272,
      ibgeId: 3114105,
      name: 'Carmo de Minas',
    },
    {
      id: 1273,
      ibgeId: 3122801,
      name: 'Dom Viçoso',
    },
    {
      id: 1274,
      ibgeId: 3120508,
      name: 'Cristina',
    },
    {
      id: 1275,
      ibgeId: 3167806,
      name: 'Soledade de Minas',
    },
    {
      id: 1276,
      ibgeId: 3137809,
      name: 'Lambari',
    },
    {
      id: 1277,
      ibgeId: 3129202,
      name: 'Heliodora',
    },
    {
      id: 1278,
      ibgeId: 3135902,
      name: 'Jesuânia',
    },
    {
      id: 1279,
      ibgeId: 3145505,
      name: 'Olímpio Noronha',
    },
    {
      id: 1280,
      ibgeId: 3162005,
      name: 'São Gonçalo do Sapucaí',
    },
    {
      id: 1281,
      ibgeId: 3169802,
      name: 'Turvolândia',
    },
    {
      id: 1282,
      ibgeId: 3119005,
      name: 'Cordislândia',
    },
    {
      id: 1283,
      ibgeId: 3132404,
      name: 'Itajubá',
    },
    {
      id: 1284,
      ibgeId: 3151008,
      name: 'Piranguinho',
    },
    {
      id: 1285,
      ibgeId: 3163201,
      name: 'São José do Alegre',
    },
    {
      id: 1286,
      ibgeId: 3150901,
      name: 'Piranguçu',
    },
    {
      id: 1287,
      ibgeId: 3172202,
      name: 'Wenceslau Braz',
    },
    {
      id: 1288,
      ibgeId: 3121100,
      name: 'Delfim Moreira',
    },
    {
      id: 1289,
      ibgeId: 3140407,
      name: 'Marmelópolis',
    },
    {
      id: 1290,
      ibgeId: 3139904,
      name: 'Maria da Fé',
    },
    {
      id: 1291,
      ibgeId: 3149101,
      name: 'Pedralva',
    },
    {
      id: 1292,
      ibgeId: 3144409,
      name: 'Natércia',
    },
    {
      id: 1293,
      ibgeId: 3117207,
      name: 'Conceição das Pedras',
    },
    {
      id: 1294,
      ibgeId: 3108909,
      name: 'Brazópolis',
    },
    {
      id: 1295,
      ibgeId: 3159605,
      name: 'Santa Rita do Sapucaí',
    },
    {
      id: 1296,
      ibgeId: 3124500,
      name: 'Estiva',
    },
    {
      id: 1297,
      ibgeId: 3109709,
      name: 'Cachoeira de Minas',
    },
    {
      id: 1298,
      ibgeId: 3117801,
      name: 'Conceição dos Ouros',
    },
    {
      id: 1299,
      ibgeId: 3152501,
      name: 'Pouso Alegre',
    },
    {
      id: 1300,
      ibgeId: 3169059,
      name: 'Tocos do Moji',
    },
    {
      id: 1301,
      ibgeId: 3108305,
      name: 'Borda da Mata',
    },
    {
      id: 1302,
      ibgeId: 3124401,
      name: 'Espírito Santo do Dourado',
    },
    {
      id: 1303,
      ibgeId: 3164407,
      name: 'São Sebastião da Bela Vista',
    },
    {
      id: 1304,
      ibgeId: 3162302,
      name: 'São João da Mata',
    },
    {
      id: 1305,
      ibgeId: 3146008,
      name: 'Ouro Fino',
    },
    {
      id: 1306,
      ibgeId: 3130606,
      name: 'Inconfidentes',
    },
    {
      id: 1307,
      ibgeId: 3109105,
      name: 'Bueno Brandão',
    },
    {
      id: 1308,
      ibgeId: 3143401,
      name: 'Monte Sião',
    },
    {
      id: 1309,
      ibgeId: 3113602,
      name: 'Careaçu',
    },
    {
      id: 1310,
      ibgeId: 3117900,
      name: 'Congonhal',
    },
    {
      id: 1311,
      ibgeId: 3165800,
      name: 'Senador José Bento',
    },
    {
      id: 1312,
      ibgeId: 3131505,
      name: 'Ipuiúna',
    },
    {
      id: 1313,
      ibgeId: 3167400,
      name: 'Silvianópolis',
    },
    {
      id: 1314,
      ibgeId: 3134905,
      name: 'Jacutinga',
    },
    {
      id: 1315,
      ibgeId: 3101409,
      name: 'Albertina',
    },
    {
      id: 1316,
      ibgeId: 3110608,
      name: 'Cambuí',
    },
    {
      id: 1317,
      ibgeId: 3119906,
      name: 'Córrego do Bom Jesus',
    },
    {
      id: 1318,
      ibgeId: 3107901,
      name: 'Bom Repouso',
    },
    {
      id: 1319,
      ibgeId: 3165578,
      name: 'Senador Amaral',
    },
    {
      id: 1320,
      ibgeId: 3143807,
      name: 'Munhoz',
    },
    {
      id: 1321,
      ibgeId: 3169109,
      name: 'Toledo',
    },
    {
      id: 1322,
      ibgeId: 3125101,
      name: 'Extrema',
    },
    {
      id: 1323,
      ibgeId: 3110509,
      name: 'Camanducaia',
    },
    {
      id: 1324,
      ibgeId: 3133600,
      name: 'Itapeva',
    },
    {
      id: 1325,
      ibgeId: 3147303,
      name: 'Paraisópolis',
    },
    {
      id: 1326,
      ibgeId: 3118502,
      name: 'Consolação',
    },
    {
      id: 1327,
      ibgeId: 3127404,
      name: 'Gonçalves',
    },
    {
      id: 1328,
      ibgeId: 3165404,
      name: 'Sapucaí-Mirim',
    },
    {
      id: 1329,
      ibgeId: 3151800,
      name: 'Poços de Caldas',
    },
    {
      id: 1330,
      ibgeId: 3108404,
      name: 'Botelhos',
    },
    {
      id: 1331,
      ibgeId: 3111002,
      name: 'Campestre',
    },
    {
      id: 1332,
      ibgeId: 3105301,
      name: 'Bandeira do Sul',
    },
    {
      id: 1333,
      ibgeId: 3139003,
      name: 'Machado',
    },
    {
      id: 1334,
      ibgeId: 3151701,
      name: 'Poço Fundo',
    },
    {
      id: 1335,
      ibgeId: 3114709,
      name: 'Carvalhópolis',
    },
    {
      id: 1336,
      ibgeId: 3159209,
      name: 'Santa Rita de Caldas',
    },
    {
      id: 1337,
      ibgeId: 3110301,
      name: 'Caldas',
    },
    {
      id: 1338,
      ibgeId: 3129905,
      name: 'Ibitiúra de Minas',
    },
    {
      id: 1339,
      ibgeId: 3102605,
      name: 'Andradas',
    },
    {
      id: 1340,
      ibgeId: 3128709,
      name: 'Guaxupé',
    },
    {
      id: 1341,
      ibgeId: 3136900,
      name: 'Juruaia',
    },
    {
      id: 1342,
      ibgeId: 3128303,
      name: 'Guaranésia',
    },
    {
      id: 1343,
      ibgeId: 3104106,
      name: 'Arceburgo',
    },
    {
      id: 1344,
      ibgeId: 3163904,
      name: 'São Pedro da União',
    },
    {
      id: 1345,
      ibgeId: 3145109,
      name: 'Nova Resende',
    },
    {
      id: 1346,
      ibgeId: 3109501,
      name: 'Cabo Verde',
    },
    {
      id: 1347,
      ibgeId: 3144102,
      name: 'Muzambinho',
    },
    {
      id: 1348,
      ibgeId: 3147907,
      name: 'Passos',
    },
    {
      id: 1349,
      ibgeId: 3126307,
      name: 'Fortaleza de Minas',
    },
    {
      id: 1350,
      ibgeId: 3121209,
      name: 'Delfinópolis',
    },
    {
      id: 1351,
      ibgeId: 3162203,
      name: 'São João Batista do Glória',
    },
    {
      id: 1352,
      ibgeId: 3170602,
      name: 'Vargem Bonita',
    },
    {
      id: 1353,
      ibgeId: 3151503,
      name: 'Piumhi',
    },
    {
      id: 1354,
      ibgeId: 3123403,
      name: 'Doresópolis',
    },
    {
      id: 1355,
      ibgeId: 3164308,
      name: 'São Roque de Minas',
    },
    {
      id: 1356,
      ibgeId: 3112802,
      name: 'Capitólio',
    },
    {
      id: 1357,
      ibgeId: 3101904,
      name: 'Alpinópolis',
    },
    {
      id: 1358,
      ibgeId: 3162948,
      name: 'São José da Barra',
    },
    {
      id: 1359,
      ibgeId: 3107604,
      name: 'Bom Jesus da Penha',
    },
    {
      id: 1360,
      ibgeId: 3164704,
      name: 'São Sebastião do Paraíso',
    },
    {
      id: 1361,
      ibgeId: 3165107,
      name: 'São Tomás de Aquino',
    },
    {
      id: 1362,
      ibgeId: 3134806,
      name: 'Jacuí',
    },
    {
      id: 1363,
      ibgeId: 3143203,
      name: 'Monte Santo de Minas',
    },
    {
      id: 1364,
      ibgeId: 3152907,
      name: 'Pratápolis',
    },
    {
      id: 1365,
      ibgeId: 3132909,
      name: 'Itamogi',
    },
    {
      id: 1366,
      ibgeId: 3133758,
      name: 'Itaú de Minas',
    },
    {
      id: 1367,
      ibgeId: 3115102,
      name: 'Cássia',
    },
    {
      id: 1368,
      ibgeId: 3129707,
      name: 'Ibiraci',
    },
    {
      id: 1369,
      ibgeId: 3112406,
      name: 'Capetinga',
    },
    {
      id: 1370,
      ibgeId: 3116407,
      name: 'Claraval',
    },
    {
      id: 1371,
      ibgeId: 3170107,
      name: 'Uberaba',
    },
    {
      id: 1372,
      ibgeId: 3121258,
      name: 'Delta',
    },
    {
      id: 1373,
      ibgeId: 3100708,
      name: 'Água Comprida',
    },
    {
      id: 1374,
      ibgeId: 3117306,
      name: 'Conceição das Alagoas',
    },
    {
      id: 1375,
      ibgeId: 3111408,
      name: 'Campo Florido',
    },
    {
      id: 1376,
      ibgeId: 3152808,
      name: 'Prata',
    },
    {
      id: 1377,
      ibgeId: 3171105,
      name: 'Veríssimo',
    },
    {
      id: 1378,
      ibgeId: 3145000,
      name: 'Nova Ponte',
    },
    {
      id: 1379,
      ibgeId: 3149804,
      name: 'Perdizes',
    },
    {
      id: 1380,
      ibgeId: 3157708,
      name: 'Santa Juliana',
    },
    {
      id: 1381,
      ibgeId: 3149200,
      name: 'Pedrinópolis',
    },
    {
      id: 1382,
      ibgeId: 3104007,
      name: 'Araxá',
    },
    {
      id: 1383,
      ibgeId: 3168101,
      name: 'Tapira',
    },
    {
      id: 1384,
      ibgeId: 3156908,
      name: 'Sacramento',
    },
    {
      id: 1385,
      ibgeId: 3118205,
      name: 'Conquista',
    },
    {
      id: 1386,
      ibgeId: 3127107,
      name: 'Frutal',
    },
    {
      id: 1387,
      ibgeId: 3150703,
      name: 'Pirajuba',
    },
    {
      id: 1388,
      ibgeId: 3151602,
      name: 'Planura',
    },
    {
      id: 1389,
      ibgeId: 3127008,
      name: 'Fronteira',
    },
    {
      id: 1390,
      ibgeId: 3133402,
      name: 'Itapagipe',
    },
    {
      id: 1391,
      ibgeId: 3116902,
      name: 'Comendador Gomes',
    },
    {
      id: 1392,
      ibgeId: 3161304,
      name: 'São Francisco de Sales',
    },
    {
      id: 1393,
      ibgeId: 3111101,
      name: 'Campina Verde',
    },
    {
      id: 1394,
      ibgeId: 3134400,
      name: 'Iturama',
    },
    {
      id: 1395,
      ibgeId: 3170438,
      name: 'União de Minas',
    },
    {
      id: 1396,
      ibgeId: 3114550,
      name: 'Carneirinho',
    },
    {
      id: 1397,
      ibgeId: 3138625,
      name: 'Limeira do Oeste',
    },
    {
      id: 1398,
      ibgeId: 3134202,
      name: 'Ituiutaba',
    },
    {
      id: 1399,
      ibgeId: 3129103,
      name: 'Gurinhatã',
    },
    {
      id: 1400,
      ibgeId: 3159803,
      name: 'Santa Vitória',
    },
    {
      id: 1401,
      ibgeId: 3131406,
      name: 'Ipiaçu',
    },
    {
      id: 1402,
      ibgeId: 3112604,
      name: 'Capinópolis',
    },
    {
      id: 1403,
      ibgeId: 3109808,
      name: 'Cachoeira Dourada',
    },
    {
      id: 1404,
      ibgeId: 3111804,
      name: 'Canápolis',
    },
    {
      id: 1405,
      ibgeId: 3115805,
      name: 'Centralina',
    },
    {
      id: 1406,
      ibgeId: 3170206,
      name: 'Uberlândia',
    },
    {
      id: 1407,
      ibgeId: 3103504,
      name: 'Araguari',
    },
    {
      id: 1408,
      ibgeId: 3115003,
      name: 'Cascalho Rico',
    },
    {
      id: 1409,
      ibgeId: 3103751,
      name: 'Araporã',
    },
    {
      id: 1410,
      ibgeId: 3127909,
      name: 'Grupiara',
    },
    {
      id: 1411,
      ibgeId: 3142809,
      name: 'Monte Alegre de Minas',
    },
    {
      id: 1412,
      ibgeId: 3169604,
      name: 'Tupaciguara',
    },
    {
      id: 1413,
      ibgeId: 3130705,
      name: 'Indianópolis',
    },
    {
      id: 1414,
      ibgeId: 3143104,
      name: 'Monte Carmelo',
    },
    {
      id: 1415,
      ibgeId: 3131604,
      name: 'Iraí de Minas',
    },
    {
      id: 1416,
      ibgeId: 3156403,
      name: 'Romaria',
    },
    {
      id: 1417,
      ibgeId: 3124807,
      name: 'Estrela do Sul',
    },
    {
      id: 1418,
      ibgeId: 3123502,
      name: 'Douradoquara',
    },
    {
      id: 1419,
      ibgeId: 3100104,
      name: 'Abadia dos Dourados',
    },
    {
      id: 1420,
      ibgeId: 3119302,
      name: 'Coromandel',
    },
    {
      id: 1421,
      ibgeId: 3128600,
      name: 'Guarda-Mor',
    },
    {
      id: 1422,
      ibgeId: 3147006,
      name: 'Paracatu',
    },
    {
      id: 1423,
      ibgeId: 3170404,
      name: 'Unaí',
    },
    {
      id: 1424,
      ibgeId: 3109451,
      name: 'Cabeceira Grande',
    },
    {
      id: 1425,
      ibgeId: 3170479,
      name: 'Uruana de Minas',
    },
    {
      id: 1426,
      ibgeId: 3154457,
      name: 'Riachinho',
    },
    {
      id: 1427,
      ibgeId: 3170529,
      name: 'Urucuia',
    },
    {
      id: 1428,
      ibgeId: 3108206,
      name: 'Bonfinópolis de Minas',
    },
    {
      id: 1429,
      ibgeId: 3122470,
      name: 'Dom Bosco',
    },
    {
      id: 1430,
      ibgeId: 3144375,
      name: 'Natalândia',
    },
    {
      id: 1431,
      ibgeId: 3109303,
      name: 'Buritis',
    },
    {
      id: 1432,
      ibgeId: 3104502,
      name: 'Arinos',
    },
    {
      id: 1433,
      ibgeId: 3116159,
      name: 'Chapada Gaúcha',
    },
    {
      id: 1434,
      ibgeId: 3126208,
      name: 'Formoso',
    },
    {
      id: 1435,
      ibgeId: 3148004,
      name: 'Patos de Minas',
    },
    {
      id: 1436,
      ibgeId: 3137502,
      name: 'Lagoa Formosa',
    },
    {
      id: 1437,
      ibgeId: 3128907,
      name: 'Guimarânia',
    },
    {
      id: 1438,
      ibgeId: 3120706,
      name: 'Cruzeiro da Fortaleza',
    },
    {
      id: 1439,
      ibgeId: 3148103,
      name: 'Patrocínio',
    },
    {
      id: 1440,
      ibgeId: 3153400,
      name: 'Presidente Olegário',
    },
    {
      id: 1441,
      ibgeId: 3137536,
      name: 'Lagoa Grande',
    },
    {
      id: 1442,
      ibgeId: 3166808,
      name: 'Serra do Salitre',
    },
    {
      id: 1443,
      ibgeId: 3136306,
      name: 'João Pinheiro',
    },
    {
      id: 1444,
      ibgeId: 3108552,
      name: 'Brasilândia de Minas',
    },
    {
      id: 1445,
      ibgeId: 3171006,
      name: 'Vazante',
    },
    {
      id: 1446,
      ibgeId: 3137106,
      name: 'Lagamar',
    },
    {
      id: 1447,
      ibgeId: 3161700,
      name: 'São Gonçalo do Abaeté',
    },
    {
      id: 1448,
      ibgeId: 3170750,
      name: 'Varjão de Minas',
    },
    {
      id: 1449,
      ibgeId: 3162104,
      name: 'São Gotardo',
    },
    {
      id: 1450,
      ibgeId: 3159704,
      name: 'Santa Rosa da Serra',
    },
    {
      id: 1451,
      ibgeId: 3155504,
      name: 'Rio Paranaíba',
    },
    {
      id: 1452,
      ibgeId: 3114303,
      name: 'Carmo do Paranaíba',
    },
    {
      id: 1453,
      ibgeId: 3103801,
      name: 'Arapuá',
    },
    {
      id: 1454,
      ibgeId: 3141207,
      name: 'Matutina',
    },
    {
      id: 1455,
      ibgeId: 3168903,
      name: 'Tiros',
    },
    {
      id: 1456,
      ibgeId: 3105103,
      name: 'Bambuí',
    },
    {
      id: 1457,
      ibgeId: 3130309,
      name: 'Iguatama',
    },
    {
      id: 1458,
      ibgeId: 3141306,
      name: 'Medeiros',
    },
    {
      id: 1459,
      ibgeId: 3129509,
      name: 'Ibiá',
    },
    {
      id: 1460,
      ibgeId: 3153004,
      name: 'Pratinha',
    },
    {
      id: 1461,
      ibgeId: 3111507,
      name: 'Campos Altos',
    },
    {
      id: 1462,
      ibgeId: 3168200,
      name: 'Tapiraí',
    },
    {
      id: 1463,
      ibgeId: 3119807,
      name: 'Córrego Danta',
    },
    {
      id: 1464,
      ibgeId: 3121605,
      name: 'Diamantina',
    },
    {
      id: 1465,
      ibgeId: 3127602,
      name: 'Gouveia',
    },
    {
      id: 1466,
      ibgeId: 3121001,
      name: 'Datas',
    },
    {
      id: 1467,
      ibgeId: 3153301,
      name: 'Presidente Kubitschek',
    },
    {
      id: 1468,
      ibgeId: 3102407,
      name: 'Alvorada de Minas',
    },
    {
      id: 1469,
      ibgeId: 3167103,
      name: 'Serro',
    },
    {
      id: 1470,
      ibgeId: 3160207,
      name: 'Santo Antônio do Itambé',
    },
    {
      id: 1471,
      ibgeId: 3166501,
      name: 'Serra Azul de Minas',
    },
    {
      id: 1472,
      ibgeId: 3156007,
      name: 'Rio Vermelho',
    },
    {
      id: 1473,
      ibgeId: 3125408,
      name: 'Felício dos Santos',
    },
    {
      id: 1474,
      ibgeId: 3125507,
      name: 'São Gonçalo do Rio Preto',
    },
    {
      id: 1475,
      ibgeId: 3120102,
      name: 'Couto de Magalhães de Minas',
    },
    {
      id: 1476,
      ibgeId: 3165909,
      name: 'Senador Modestino Gonçalves',
    },
    {
      id: 1477,
      ibgeId: 3119104,
      name: 'Corinto',
    },
    {
      id: 1478,
      ibgeId: 3169356,
      name: 'Três Marias',
    },
    {
      id: 1479,
      ibgeId: 3160603,
      name: 'Santo Hipólito',
    },
    {
      id: 1480,
      ibgeId: 3142502,
      name: 'Monjolos',
    },
    {
      id: 1481,
      ibgeId: 3104809,
      name: 'Augusto de Lima',
    },
    {
      id: 1482,
      ibgeId: 3109204,
      name: 'Buenópolis',
    },
    {
      id: 1483,
      ibgeId: 3125705,
      name: 'Felixlândia',
    },
    {
      id: 1484,
      ibgeId: 3136405,
      name: 'Joaquim Felício',
    },
    {
      id: 1485,
      ibgeId: 3131109,
      name: 'Inimutaba',
    },
    {
      id: 1486,
      ibgeId: 3153202,
      name: 'Presidente Juscelino',
    },
    {
      id: 1487,
      ibgeId: 3143609,
      name: 'Morro da Garça',
    },
    {
      id: 1488,
      ibgeId: 3138104,
      name: 'Lassance',
    },
    {
      id: 1489,
      ibgeId: 3170800,
      name: 'Várzea da Palma',
    },
    {
      id: 1490,
      ibgeId: 3151206,
      name: 'Pirapora',
    },
    {
      id: 1491,
      ibgeId: 3109402,
      name: 'Buritizeiro',
    },
    {
      id: 1492,
      ibgeId: 3164209,
      name: 'São Romão',
    },
    {
      id: 1493,
      ibgeId: 3157609,
      name: 'Santa Fé de Minas',
    },
    {
      id: 1494,
      ibgeId: 3161106,
      name: 'São Francisco',
    },
    {
      id: 1495,
      ibgeId: 3150570,
      name: 'Pintópolis',
    },
    {
      id: 1496,
      ibgeId: 3130051,
      name: 'Icaraí de Minas',
    },
    {
      id: 1497,
      ibgeId: 3170008,
      name: 'Ubaí',
    },
    {
      id: 1498,
      ibgeId: 3152131,
      name: 'Ponto Chique',
    },
    {
      id: 1499,
      ibgeId: 3108602,
      name: 'Brasília de Minas',
    },
    {
      id: 1500,
      ibgeId: 3135357,
      name: 'Japonvar',
    },
    {
      id: 1501,
      ibgeId: 3138682,
      name: 'Luislândia',
    },
    {
      id: 1502,
      ibgeId: 3111150,
      name: 'Campo Azul',
    },
    {
      id: 1503,
      ibgeId: 3118809,
      name: 'Coração de Jesus',
    },
    {
      id: 1504,
      ibgeId: 3129608,
      name: 'Ibiaí',
    },
    {
      id: 1505,
      ibgeId: 3162252,
      name: 'São João da Lagoa',
    },
    {
      id: 1506,
      ibgeId: 3137304,
      name: 'Lagoa dos Patos',
    },
    {
      id: 1507,
      ibgeId: 3123809,
      name: 'Engenheiro Navarro',
    },
    {
      id: 1508,
      ibgeId: 3162658,
      name: 'São João do Pacuí',
    },
    {
      id: 1509,
      ibgeId: 3135605,
      name: 'Jequitaí',
    },
    {
      id: 1510,
      ibgeId: 3142007,
      name: 'Mirabela',
    },
    {
      id: 1511,
      ibgeId: 3147956,
      name: 'Patis',
    },
    {
      id: 1512,
      ibgeId: 3116506,
      name: 'Claro dos Poções',
    },
    {
      id: 1513,
      ibgeId: 3126604,
      name: 'Francisco Dumont',
    },
    {
      id: 1514,
      ibgeId: 3107307,
      name: 'Bocaiúva',
    },
    {
      id: 1515,
      ibgeId: 3128253,
      name: 'Guaraciama',
    },
    {
      id: 1516,
      ibgeId: 3145455,
      name: "Olhos D'Água",
    },
    {
      id: 1517,
      ibgeId: 3143302,
      name: 'Montes Claros',
    },
    {
      id: 1518,
      ibgeId: 3162401,
      name: 'São João da Ponte',
    },
    {
      id: 1519,
      ibgeId: 3138658,
      name: 'Lontra',
    },
    {
      id: 1520,
      ibgeId: 3135100,
      name: 'Janaúba',
    },
    {
      id: 1521,
      ibgeId: 3170909,
      name: 'Varzelândia',
    },
    {
      id: 1522,
      ibgeId: 3129657,
      name: 'Ibiracatu',
    },
    {
      id: 1523,
      ibgeId: 3171030,
      name: 'Verdelândia',
    },
    {
      id: 1524,
      ibgeId: 3139300,
      name: 'Manga',
    },
    {
      id: 1525,
      ibgeId: 3142254,
      name: 'Miravânia',
    },
    {
      id: 1526,
      ibgeId: 3136959,
      name: 'Juvenília',
    },
    {
      id: 1527,
      ibgeId: 3132107,
      name: 'Itacarambi',
    },
    {
      id: 1528,
      ibgeId: 3112703,
      name: 'Capitão Enéas',
    },
    {
      id: 1529,
      ibgeId: 3162450,
      name: 'São João das Missões',
    },
    {
      id: 1530,
      ibgeId: 3140852,
      name: 'Matias Cardoso',
    },
    {
      id: 1531,
      ibgeId: 3135209,
      name: 'Januária',
    },
    {
      id: 1532,
      ibgeId: 3117836,
      name: 'Cônego Marinho',
    },
    {
      id: 1533,
      ibgeId: 3108255,
      name: 'Bonito de Minas',
    },
    {
      id: 1534,
      ibgeId: 3149150,
      name: 'Pedras de Maria da Cruz',
    },
    {
      id: 1535,
      ibgeId: 3142700,
      name: 'Montalvânia',
    },
    {
      id: 1536,
      ibgeId: 3142908,
      name: 'Monte Azul',
    },
    {
      id: 1537,
      ibgeId: 3127339,
      name: 'Gameleiras',
    },
    {
      id: 1538,
      ibgeId: 3135050,
      name: 'Jaíba',
    },
    {
      id: 1539,
      ibgeId: 3124302,
      name: 'Espinosa',
    },
    {
      id: 1540,
      ibgeId: 3139250,
      name: 'Mamonas',
    },
    {
      id: 1541,
      ibgeId: 3146552,
      name: 'Pai Pedro',
    },
    {
      id: 1542,
      ibgeId: 3166956,
      name: 'Serranópolis de Minas',
    },
    {
      id: 1543,
      ibgeId: 3152204,
      name: 'Porteirinha',
    },
    {
      id: 1544,
      ibgeId: 3145059,
      name: 'Nova Porteirinha',
    },
    {
      id: 1545,
      ibgeId: 3115474,
      name: 'Catuti',
    },
    {
      id: 1546,
      ibgeId: 3141009,
      name: 'Mato Verde',
    },
    {
      id: 1547,
      ibgeId: 3154507,
      name: 'Riacho dos Machados',
    },
    {
      id: 1548,
      ibgeId: 3155603,
      name: 'Rio Pardo de Minas',
    },
    {
      id: 1549,
      ibgeId: 3170651,
      name: 'Vargem Grande do Rio Pardo',
    },
    {
      id: 1550,
      ibgeId: 3130655,
      name: 'Indaiabira',
    },
    {
      id: 1551,
      ibgeId: 3160454,
      name: 'Santo Antônio do Retiro',
    },
    {
      id: 1552,
      ibgeId: 3162708,
      name: 'São João do Paraíso',
    },
    {
      id: 1553,
      ibgeId: 3143450,
      name: 'Montezuma',
    },
    {
      id: 1554,
      ibgeId: 3168002,
      name: 'Taiobeiras',
    },
    {
      id: 1555,
      ibgeId: 3144656,
      name: 'Ninheira',
    },
    {
      id: 1556,
      ibgeId: 3106655,
      name: 'Berizal',
    },
    {
      id: 1557,
      ibgeId: 3127073,
      name: 'Fruta de Leite',
    },
    {
      id: 1558,
      ibgeId: 3157005,
      name: 'Salinas',
    },
    {
      id: 1559,
      ibgeId: 3157377,
      name: 'Santa Cruz de Salinas',
    },
    {
      id: 1560,
      ibgeId: 3156502,
      name: 'Rubelita',
    },
    {
      id: 1561,
      ibgeId: 3145372,
      name: 'Novorizonte',
    },
    {
      id: 1562,
      ibgeId: 3120870,
      name: 'Curral de Dentro',
    },
    {
      id: 1563,
      ibgeId: 3127800,
      name: 'Grão Mogol',
    },
    {
      id: 1564,
      ibgeId: 3146255,
      name: 'Padre Carvalho',
    },
    {
      id: 1565,
      ibgeId: 3136579,
      name: 'Josenópolis',
    },
    {
      id: 1566,
      ibgeId: 3126703,
      name: 'Francisco Sá',
    },
    {
      id: 1567,
      ibgeId: 3136801,
      name: 'Juramento',
    },
    {
      id: 1568,
      ibgeId: 3127354,
      name: 'Glaucilândia',
    },
    {
      id: 1569,
      ibgeId: 3132008,
      name: 'Itacambira',
    },
    {
      id: 1570,
      ibgeId: 3108503,
      name: 'Botumirim',
    },
    {
      id: 1571,
      ibgeId: 3120300,
      name: 'Cristália',
    },
    {
      id: 1572,
      ibgeId: 3103405,
      name: 'Araçuaí',
    },
    {
      id: 1573,
      ibgeId: 3134004,
      name: 'Itinga',
    },
    {
      id: 1574,
      ibgeId: 3152170,
      name: 'Ponto dos Volantes',
    },
    {
      id: 1575,
      ibgeId: 3141405,
      name: 'Medina',
    },
    {
      id: 1576,
      ibgeId: 3133303,
      name: 'Itaobim',
    },
    {
      id: 1577,
      ibgeId: 3117009,
      name: 'Comercinho',
    },
    {
      id: 1578,
      ibgeId: 3171600,
      name: 'Virgem da Lapa',
    },
    {
      id: 1579,
      ibgeId: 3119500,
      name: 'Coronel Murta',
    },
    {
      id: 1580,
      ibgeId: 3106507,
      name: 'Berilo',
    },
    {
      id: 1581,
      ibgeId: 3136520,
      name: 'José Gonçalves de Minas',
    },
    {
      id: 1582,
      ibgeId: 3126505,
      name: 'Francisco Badaró',
    },
    {
      id: 1583,
      ibgeId: 3135456,
      name: 'Jenipapo de Minas',
    },
    {
      id: 1584,
      ibgeId: 3116100,
      name: 'Chapada do Norte',
    },
    {
      id: 1585,
      ibgeId: 3141801,
      name: 'Minas Novas',
    },
    {
      id: 1586,
      ibgeId: 3138351,
      name: 'Leme do Prado',
    },
    {
      id: 1587,
      ibgeId: 3169703,
      name: 'Turmalina',
    },
    {
      id: 1588,
      ibgeId: 3171071,
      name: 'Veredinha',
    },
    {
      id: 1589,
      ibgeId: 3113503,
      name: 'Carbonita',
    },
    {
      id: 1590,
      ibgeId: 3132503,
      name: 'Itamarandiba',
    },
    {
      id: 1591,
      ibgeId: 3104452,
      name: 'Aricanduva',
    },
    {
      id: 1592,
      ibgeId: 3112307,
      name: 'Capelinha',
    },
    {
      id: 1593,
      ibgeId: 3102852,
      name: 'Angelândia',
    },
    {
      id: 1594,
      ibgeId: 3165552,
      name: 'Setubinha',
    },
    {
      id: 1595,
      ibgeId: 3139201,
      name: 'Malacacheta',
    },
    {
      id: 1596,
      ibgeId: 3126752,
      name: 'Franciscópolis',
    },
    {
      id: 1597,
      ibgeId: 3148608,
      name: 'Peçanha',
    },
    {
      id: 1598,
      ibgeId: 3112059,
      name: 'Cantagalo',
    },
    {
      id: 1599,
      ibgeId: 3162807,
      name: 'São João Evangelista',
    },
    {
      id: 1600,
      ibgeId: 3163508,
      name: 'São José do Jacuri',
    },
    {
      id: 1601,
      ibgeId: 3126950,
      name: 'Frei Lagonegro',
    },
    {
      id: 1602,
      ibgeId: 3119203,
      name: 'Coroaci',
    },
    {
      id: 1603,
      ibgeId: 3171907,
      name: 'Virgolândia',
    },
    {
      id: 1604,
      ibgeId: 3144201,
      name: 'Nacip Raydan',
    },
    {
      id: 1605,
      ibgeId: 3127503,
      name: 'Gonzaga',
    },
    {
      id: 1606,
      ibgeId: 3161601,
      name: 'São Geraldo da Piedade',
    },
    {
      id: 1607,
      ibgeId: 3157500,
      name: 'Santa Efigênia de Minas',
    },
    {
      id: 1608,
      ibgeId: 3165503,
      name: 'Sardoá',
    },
    {
      id: 1609,
      ibgeId: 3171808,
      name: 'Virginópolis',
    },
    {
      id: 1610,
      ibgeId: 3122207,
      name: 'Divinolândia de Minas',
    },
    {
      id: 1611,
      ibgeId: 3128006,
      name: 'Guanhães',
    },
    {
      id: 1612,
      ibgeId: 3166105,
      name: 'Senhora do Porto',
    },
    {
      id: 1613,
      ibgeId: 3156809,
      name: 'Sabinópolis',
    },
    {
      id: 1614,
      ibgeId: 3140605,
      name: 'Materlândia',
    },
    {
      id: 1615,
      ibgeId: 3148400,
      name: 'Paulistas',
    },
    {
      id: 1616,
      ibgeId: 3116803,
      name: 'Coluna',
    },
    {
      id: 1617,
      ibgeId: 3136553,
      name: 'José Raydan',
    },
    {
      id: 1618,
      ibgeId: 3158201,
      name: 'Santa Maria do Suaçuí',
    },
    {
      id: 1619,
      ibgeId: 3164100,
      name: 'São Pedro do Suaçuí',
    },
    {
      id: 1620,
      ibgeId: 3163003,
      name: 'São José da Safira',
    },
    {
      id: 1621,
      ibgeId: 3100609,
      name: 'Água Boa',
    },
    {
      id: 1622,
      ibgeId: 3164506,
      name: 'São Sebastião do Maranhão',
    },
    {
      id: 1623,
      ibgeId: 3168606,
      name: 'Teófilo Otoni',
    },
    {
      id: 1624,
      ibgeId: 3113008,
      name: 'Caraí',
    },
    {
      id: 1625,
      ibgeId: 3148509,
      name: 'Pavão',
    },
    {
      id: 1626,
      ibgeId: 3132305,
      name: 'Itaipé',
    },
    {
      id: 1627,
      ibgeId: 3115458,
      name: 'Catuji',
    },
    {
      id: 1628,
      ibgeId: 3145356,
      name: 'Novo Oriente de Minas',
    },
    {
      id: 1629,
      ibgeId: 3146305,
      name: 'Padre Paraíso',
    },
    {
      id: 1630,
      ibgeId: 3145307,
      name: 'Novo Cruzeiro',
    },
    {
      id: 1631,
      ibgeId: 3137007,
      name: 'Ladainha',
    },
    {
      id: 1632,
      ibgeId: 3152402,
      name: 'Poté',
    },
    {
      id: 1633,
      ibgeId: 3132701,
      name: 'Itambacuri',
    },
    {
      id: 1634,
      ibgeId: 3110806,
      name: 'Campanário',
    },
    {
      id: 1635,
      ibgeId: 3135076,
      name: 'Jampruca',
    },
    {
      id: 1636,
      ibgeId: 3126802,
      name: 'Frei Gaspar',
    },
    {
      id: 1637,
      ibgeId: 3163300,
      name: 'São José do Divino',
    },
    {
      id: 1638,
      ibgeId: 3104700,
      name: 'Ataléia',
    },
    {
      id: 1639,
      ibgeId: 3146206,
      name: 'Ouro Verde de Minas',
    },
    {
      id: 1640,
      ibgeId: 3144300,
      name: 'Nanuque',
    },
    {
      id: 1641,
      ibgeId: 3113701,
      name: 'Carlos Chagas',
    },
    {
      id: 1642,
      ibgeId: 3166709,
      name: 'Serra dos Aimorés',
    },
    {
      id: 1643,
      ibgeId: 3127057,
      name: 'Fronteira dos Vales',
    },
    {
      id: 1644,
      ibgeId: 3138906,
      name: 'Machacalis',
    },
    {
      id: 1645,
      ibgeId: 3157658,
      name: 'Santa Helena de Minas',
    },
    {
      id: 1646,
      ibgeId: 3106606,
      name: 'Bertópolis',
    },
    {
      id: 1647,
      ibgeId: 3170305,
      name: 'Umburatiba',
    },
    {
      id: 1648,
      ibgeId: 3100906,
      name: 'Águas Formosas',
    },
    {
      id: 1649,
      ibgeId: 3120151,
      name: 'Crisólita',
    },
    {
      id: 1650,
      ibgeId: 3136009,
      name: 'Joaíma',
    },
    {
      id: 1651,
      ibgeId: 3143153,
      name: 'Monte Formoso',
    },
    {
      id: 1652,
      ibgeId: 3125606,
      name: 'Felisburgo',
    },
    {
      id: 1653,
      ibgeId: 3101706,
      name: 'Almenara',
    },
    {
      id: 1654,
      ibgeId: 3122454,
      name: 'Divisópolis',
    },
    {
      id: 1655,
      ibgeId: 3140555,
      name: 'Mata Verde',
    },
    {
      id: 1656,
      ibgeId: 3105202,
      name: 'Bandeira',
    },
    {
      id: 1657,
      ibgeId: 3136504,
      name: 'Jordânia',
    },
    {
      id: 1658,
      ibgeId: 3157104,
      name: 'Salto da Divisa',
    },
    {
      id: 1659,
      ibgeId: 3158102,
      name: 'Santa Maria do Salto',
    },
    {
      id: 1660,
      ibgeId: 3134707,
      name: 'Jacinto',
    },
    {
      id: 1661,
      ibgeId: 3160306,
      name: 'Santo Antônio do Jacinto',
    },
    {
      id: 1662,
      ibgeId: 3155108,
      name: 'Rio do Prado',
    },
    {
      id: 1663,
      ibgeId: 3146750,
      name: 'Palmópolis',
    },
    {
      id: 1664,
      ibgeId: 3156601,
      name: 'Rubim',
    },
    {
      id: 1665,
      ibgeId: 3135803,
      name: 'Jequitinhonha',
    },
    {
      id: 1666,
      ibgeId: 3148707,
      name: 'Pedra Azul',
    },
    {
      id: 1667,
      ibgeId: 3102704,
      name: 'Cachoeira de Pajeú',
    },
    {
      id: 1668,
      ibgeId: 3101003,
      name: 'Águas Vermelhas',
    },
    {
      id: 1669,
      ibgeId: 3122355,
      name: 'Divisa Alegre',
    },
  ],
  MS: [
    {
      id: 4299,
      ibgeId: 5002704,
      name: 'Campo Grande',
    },
    {
      id: 4300,
      ibgeId: 5007208,
      name: 'Rio Brilhante',
    },
    {
      id: 4301,
      ibgeId: 5006002,
      name: 'Nova Alvorada do Sul',
    },
    {
      id: 4302,
      ibgeId: 5005400,
      name: 'Maracaju',
    },
    {
      id: 4303,
      ibgeId: 5007901,
      name: 'Sidrolândia',
    },
    {
      id: 4304,
      ibgeId: 5007109,
      name: 'Ribas do Rio Pardo',
    },
    {
      id: 4305,
      ibgeId: 5008008,
      name: 'Terenos',
    },
    {
      id: 4306,
      ibgeId: 5001102,
      name: 'Aquidauana',
    },
    {
      id: 4307,
      ibgeId: 5000708,
      name: 'Anastácio',
    },
    {
      id: 4308,
      ibgeId: 5003488,
      name: 'Dois Irmãos do Buriti',
    },
    {
      id: 4309,
      ibgeId: 5005806,
      name: 'Nioaque',
    },
    {
      id: 4310,
      ibgeId: 5004106,
      name: 'Guia Lopes da Laguna',
    },
    {
      id: 4311,
      ibgeId: 5005004,
      name: 'Jardim',
    },
    {
      id: 4312,
      ibgeId: 5002100,
      name: 'Bela Vista',
    },
    {
      id: 4313,
      ibgeId: 5002803,
      name: 'Caracol',
    },
    {
      id: 4314,
      ibgeId: 5006903,
      name: 'Porto Murtinho',
    },
    {
      id: 4315,
      ibgeId: 5002209,
      name: 'Bonito',
    },
    {
      id: 4316,
      ibgeId: 5003207,
      name: 'Corumbá',
    },
    {
      id: 4317,
      ibgeId: 5005202,
      name: 'Ladário',
    },
    {
      id: 4318,
      ibgeId: 5005608,
      name: 'Miranda',
    },
    {
      id: 4319,
      ibgeId: 5002159,
      name: 'Bodoquena',
    },
    {
      id: 4320,
      ibgeId: 5003306,
      name: 'Coxim',
    },
    {
      id: 4321,
      ibgeId: 5006408,
      name: 'Pedro Gomes',
    },
    {
      id: 4322,
      ibgeId: 5007935,
      name: 'Sonora',
    },
    {
      id: 4323,
      ibgeId: 5002605,
      name: 'Camapuã',
    },
    {
      id: 4324,
      ibgeId: 5003900,
      name: 'Figueirão',
    },
    {
      id: 4325,
      ibgeId: 5001508,
      name: 'Bandeirantes',
    },
    {
      id: 4326,
      ibgeId: 5004908,
      name: 'Jaraguari',
    },
    {
      id: 4327,
      ibgeId: 5007505,
      name: 'Rochedo',
    },
    {
      id: 4328,
      ibgeId: 5003108,
      name: 'Corguinho',
    },
    {
      id: 4329,
      ibgeId: 5007307,
      name: 'Rio Negro',
    },
    {
      id: 4330,
      ibgeId: 5007406,
      name: 'Rio Verde de Mato Grosso',
    },
    {
      id: 4331,
      ibgeId: 5007695,
      name: 'São Gabriel do Oeste',
    },
    {
      id: 4332,
      ibgeId: 5006309,
      name: 'Paranaíba',
    },
    {
      id: 4333,
      ibgeId: 5000252,
      name: 'Alcinópolis',
    },
    {
      id: 4334,
      ibgeId: 5002902,
      name: 'Cassilândia',
    },
    {
      id: 4335,
      ibgeId: 5003256,
      name: 'Costa Rica',
    },
    {
      id: 4336,
      ibgeId: 5006275,
      name: 'Paraíso das Águas',
    },
    {
      id: 4337,
      ibgeId: 5002951,
      name: 'Chapadão do Sul',
    },
    {
      id: 4338,
      ibgeId: 5001003,
      name: 'Aparecida do Taboado',
    },
    {
      id: 4339,
      ibgeId: 5004403,
      name: 'Inocência',
    },
    {
      id: 4340,
      ibgeId: 5007802,
      name: 'Selvíria',
    },
    {
      id: 4341,
      ibgeId: 5008305,
      name: 'Três Lagoas',
    },
    {
      id: 4342,
      ibgeId: 5002308,
      name: 'Brasilândia',
    },
    {
      id: 4343,
      ibgeId: 5000203,
      name: 'Água Clara',
    },
    {
      id: 4344,
      ibgeId: 5007554,
      name: 'Santa Rita do Pardo',
    },
    {
      id: 4345,
      ibgeId: 5003801,
      name: 'Fátima do Sul',
    },
    {
      id: 4346,
      ibgeId: 5008404,
      name: 'Vicentina',
    },
    {
      id: 4347,
      ibgeId: 5005103,
      name: 'Jateí',
    },
    {
      id: 4348,
      ibgeId: 5004007,
      name: 'Glória de Dourados',
    },
    {
      id: 4349,
      ibgeId: 5004700,
      name: 'Ivinhema',
    },
    {
      id: 4350,
      ibgeId: 5006259,
      name: 'Novo Horizonte do Sul',
    },
    {
      id: 4351,
      ibgeId: 5006200,
      name: 'Nova Andradina',
    },
    {
      id: 4352,
      ibgeId: 5002001,
      name: 'Batayporã',
    },
    {
      id: 4353,
      ibgeId: 5007976,
      name: 'Taquarussu',
    },
    {
      id: 4354,
      ibgeId: 5000807,
      name: 'Anaurilândia',
    },
    {
      id: 4355,
      ibgeId: 5001904,
      name: 'Bataguassu',
    },
    {
      id: 4356,
      ibgeId: 5000856,
      name: 'Angélica',
    },
    {
      id: 4357,
      ibgeId: 5003454,
      name: 'Deodápolis',
    },
    {
      id: 4358,
      ibgeId: 5003702,
      name: 'Dourados',
    },
    {
      id: 4359,
      ibgeId: 5003504,
      name: 'Douradina',
    },
    {
      id: 4360,
      ibgeId: 5004502,
      name: 'Itaporã',
    },
    {
      id: 4361,
      ibgeId: 5006606,
      name: 'Ponta Porã',
    },
    {
      id: 4362,
      ibgeId: 5000906,
      name: 'Antônio João',
    },
    {
      id: 4363,
      ibgeId: 5005251,
      name: 'Laguna Carapã',
    },
    {
      id: 4364,
      ibgeId: 5006358,
      name: 'Paranhos',
    },
    {
      id: 4365,
      ibgeId: 5001243,
      name: 'Aral Moreira',
    },
    {
      id: 4366,
      ibgeId: 5007703,
      name: 'Sete Quedas',
    },
    {
      id: 4367,
      ibgeId: 5002407,
      name: 'Caarapó',
    },
    {
      id: 4368,
      ibgeId: 5005707,
      name: 'Naviraí',
    },
    {
      id: 4369,
      ibgeId: 5005152,
      name: 'Jutí',
    },
    {
      id: 4370,
      ibgeId: 5004304,
      name: 'Iguatemi',
    },
    {
      id: 4371,
      ibgeId: 5004601,
      name: 'Itaquiraí',
    },
    {
      id: 4372,
      ibgeId: 5003751,
      name: 'Eldorado',
    },
    {
      id: 4373,
      ibgeId: 5007950,
      name: 'Tacuru',
    },
    {
      id: 4374,
      ibgeId: 5005681,
      name: 'Mundo Novo',
    },
    {
      id: 4375,
      ibgeId: 5004809,
      name: 'Japorã',
    },
    {
      id: 4376,
      ibgeId: 5000609,
      name: 'Amambaí',
    },
    {
      id: 4377,
      ibgeId: 5003157,
      name: 'Coronel Sapucaia',
    },
  ],
  MT: [
    {
      id: 4158,
      ibgeId: 5103403,
      name: 'Cuiabá',
    },
    {
      id: 4159,
      ibgeId: 5108402,
      name: 'Várzea Grande',
    },
    {
      id: 4160,
      ibgeId: 5106109,
      name: 'Nossa Senhora do Livramento',
    },
    {
      id: 4161,
      ibgeId: 5106505,
      name: 'Poconé',
    },
    {
      id: 4162,
      ibgeId: 5107800,
      name: 'Santo Antônio do Leverger',
    },
    {
      id: 4163,
      ibgeId: 5101605,
      name: 'Barão de Melgaço',
    },
    {
      id: 4164,
      ibgeId: 5103007,
      name: 'Chapada dos Guimarães',
    },
    {
      id: 4165,
      ibgeId: 5102504,
      name: 'Cáceres',
    },
    {
      id: 4166,
      ibgeId: 5103437,
      name: 'Curvelândia',
    },
    {
      id: 4167,
      ibgeId: 5106828,
      name: 'Porto Esperidião',
    },
    {
      id: 4168,
      ibgeId: 5106182,
      name: 'Nova Lacerda',
    },
    {
      id: 4169,
      ibgeId: 5105507,
      name: 'Vila Bela da Santíssima Trindade',
    },
    {
      id: 4170,
      ibgeId: 5106752,
      name: 'Pontes e Lacerda',
    },
    {
      id: 4171,
      ibgeId: 5108352,
      name: 'Vale de São Domingos',
    },
    {
      id: 4172,
      ibgeId: 5103361,
      name: "Conquista D'Oeste",
    },
    {
      id: 4173,
      ibgeId: 5105002,
      name: 'Jauru',
    },
    {
      id: 4174,
      ibgeId: 5101258,
      name: 'Araputanga',
    },
    {
      id: 4175,
      ibgeId: 5107156,
      name: 'Reserva do Cabaçal',
    },
    {
      id: 4176,
      ibgeId: 5107750,
      name: 'Salto do Céu',
    },
    {
      id: 4177,
      ibgeId: 5107206,
      name: 'Rio Branco',
    },
    {
      id: 4178,
      ibgeId: 5105234,
      name: "Lambari D'Oeste",
    },
    {
      id: 4179,
      ibgeId: 5105622,
      name: "Mirassol D'Oeste",
    },
    {
      id: 4180,
      ibgeId: 5107107,
      name: 'São José dos Quatro Marcos',
    },
    {
      id: 4181,
      ibgeId: 5103809,
      name: "Figueirópolis D'Oeste",
    },
    {
      id: 4182,
      ibgeId: 5103957,
      name: "Glória D'Oeste",
    },
    {
      id: 4183,
      ibgeId: 5104500,
      name: 'Indiavaí',
    },
    {
      id: 4184,
      ibgeId: 5107958,
      name: 'Tangará da Serra',
    },
    {
      id: 4185,
      ibgeId: 5102686,
      name: 'Campos de Júlio',
    },
    {
      id: 4186,
      ibgeId: 5103304,
      name: 'Comodoro',
    },
    {
      id: 4187,
      ibgeId: 5105150,
      name: 'Juína',
    },
    {
      id: 4188,
      ibgeId: 5101407,
      name: 'Aripuanã',
    },
    {
      id: 4189,
      ibgeId: 5103379,
      name: 'Cotriguaçu',
    },
    {
      id: 4190,
      ibgeId: 5103254,
      name: 'Colniza',
    },
    {
      id: 4191,
      ibgeId: 5107578,
      name: 'Rondolândia',
    },
    {
      id: 4192,
      ibgeId: 5105176,
      name: 'Juruena',
    },
    {
      id: 4193,
      ibgeId: 5102850,
      name: 'Castanheira',
    },
    {
      id: 4194,
      ibgeId: 5101902,
      name: 'Brasnorte',
    },
    {
      id: 4195,
      ibgeId: 5102637,
      name: 'Campo Novo do Parecis',
    },
    {
      id: 4196,
      ibgeId: 5107875,
      name: 'Sapezal',
    },
    {
      id: 4197,
      ibgeId: 5106232,
      name: 'Nova Olímpia',
    },
    {
      id: 4198,
      ibgeId: 5103452,
      name: 'Denise',
    },
    {
      id: 4199,
      ibgeId: 5101704,
      name: 'Barra do Bugres',
    },
    {
      id: 4200,
      ibgeId: 5106851,
      name: 'Porto Estrela',
    },
    {
      id: 4201,
      ibgeId: 5103502,
      name: 'Diamantino',
    },
    {
      id: 4202,
      ibgeId: 5100508,
      name: 'Alto Paraguai',
    },
    {
      id: 4203,
      ibgeId: 5108857,
      name: 'Nova Marilândia',
    },
    {
      id: 4204,
      ibgeId: 5101308,
      name: 'Arenápolis',
    },
    {
      id: 4205,
      ibgeId: 5107263,
      name: 'Santo Afonso',
    },
    {
      id: 4206,
      ibgeId: 5106000,
      name: 'Nortelândia',
    },
    {
      id: 4207,
      ibgeId: 5107305,
      name: 'São José do Rio Claro',
    },
    {
      id: 4208,
      ibgeId: 5108907,
      name: 'Nova Maringá',
    },
    {
      id: 4209,
      ibgeId: 5106224,
      name: 'Nova Mutum',
    },
    {
      id: 4210,
      ibgeId: 5107768,
      name: 'Santa Rita do Trivelato',
    },
    {
      id: 4211,
      ibgeId: 5105259,
      name: 'Lucas do Rio Verde',
    },
    {
      id: 4212,
      ibgeId: 5105903,
      name: 'Nobres',
    },
    {
      id: 4213,
      ibgeId: 5107701,
      name: 'Rosário Oeste',
    },
    {
      id: 4214,
      ibgeId: 5100102,
      name: 'Acorizal',
    },
    {
      id: 4215,
      ibgeId: 5104906,
      name: 'Jangada',
    },
    {
      id: 4216,
      ibgeId: 5103205,
      name: 'Colíder',
    },
    {
      id: 4217,
      ibgeId: 5108055,
      name: 'Terra Nova do Norte',
    },
    {
      id: 4218,
      ibgeId: 5108808,
      name: 'Nova Guarita',
    },
    {
      id: 4219,
      ibgeId: 5104559,
      name: 'Itaúba',
    },
    {
      id: 4220,
      ibgeId: 5106216,
      name: 'Nova Canaã do Norte',
    },
    {
      id: 4221,
      ibgeId: 5104104,
      name: 'Guarantã do Norte',
    },
    {
      id: 4222,
      ibgeId: 5105606,
      name: 'Matupá',
    },
    {
      id: 4223,
      ibgeId: 5106265,
      name: 'Novo Mundo',
    },
    {
      id: 4224,
      ibgeId: 5106422,
      name: 'Peixoto de Azevedo',
    },
    {
      id: 4225,
      ibgeId: 5105580,
      name: 'Marcelândia',
    },
    {
      id: 4226,
      ibgeId: 5103056,
      name: 'Cláudia',
    },
    {
      id: 4227,
      ibgeId: 5108303,
      name: 'União do Sul',
    },
    {
      id: 4228,
      ibgeId: 5107248,
      name: 'Santa Carmem',
    },
    {
      id: 4229,
      ibgeId: 5106190,
      name: 'Nova Santa Helena',
    },
    {
      id: 4230,
      ibgeId: 5107909,
      name: 'Sinop',
    },
    {
      id: 4231,
      ibgeId: 5106802,
      name: 'Porto dos Gaúchos',
    },
    {
      id: 4232,
      ibgeId: 5107941,
      name: 'Tabaporã',
    },
    {
      id: 4233,
      ibgeId: 5106158,
      name: 'Nova Bandeirantes',
    },
    {
      id: 4234,
      ibgeId: 5106273,
      name: 'Novo Horizonte do Norte',
    },
    {
      id: 4235,
      ibgeId: 5108006,
      name: 'Tapurah',
    },
    {
      id: 4236,
      ibgeId: 5105101,
      name: 'Juara',
    },
    {
      id: 4237,
      ibgeId: 5104526,
      name: 'Ipiranga do Norte',
    },
    {
      id: 4238,
      ibgeId: 5104542,
      name: 'Itanhangá',
    },
    {
      id: 4239,
      ibgeId: 5100250,
      name: 'Alta Floresta',
    },
    {
      id: 4240,
      ibgeId: 5102793,
      name: 'Carlinda',
    },
    {
      id: 4241,
      ibgeId: 5106299,
      name: 'Paranaíta',
    },
    {
      id: 4242,
      ibgeId: 5108956,
      name: 'Nova Monte Verde',
    },
    {
      id: 4243,
      ibgeId: 5100805,
      name: 'Apiacás',
    },
    {
      id: 4244,
      ibgeId: 5101803,
      name: 'Barra do Garças',
    },
    {
      id: 4245,
      ibgeId: 5106703,
      name: 'Ponte Branca',
    },
    {
      id: 4246,
      ibgeId: 5107198,
      name: 'Ribeirãozinho',
    },
    {
      id: 4247,
      ibgeId: 5101209,
      name: 'Araguainha',
    },
    {
      id: 4248,
      ibgeId: 5103908,
      name: 'General Carneiro',
    },
    {
      id: 4249,
      ibgeId: 5106281,
      name: 'Novo São Joaquim',
    },
    {
      id: 4250,
      ibgeId: 5107792,
      name: 'Santo Antônio do Leste',
    },
    {
      id: 4251,
      ibgeId: 5102603,
      name: 'Campinápolis',
    },
    {
      id: 4252,
      ibgeId: 5100201,
      name: 'Água Boa',
    },
    {
      id: 4253,
      ibgeId: 5106174,
      name: 'Nova Nazaré',
    },
    {
      id: 4254,
      ibgeId: 5102702,
      name: 'Canarana',
    },
    {
      id: 4255,
      ibgeId: 5107065,
      name: 'Querência',
    },
    {
      id: 4256,
      ibgeId: 5108600,
      name: 'Vila Rica',
    },
    {
      id: 4257,
      ibgeId: 5107776,
      name: 'Santa Terezinha',
    },
    {
      id: 4258,
      ibgeId: 5103353,
      name: 'Confresa',
    },
    {
      id: 4259,
      ibgeId: 5106778,
      name: 'Porto Alegre do Norte',
    },
    {
      id: 4260,
      ibgeId: 5102694,
      name: 'Canabrava do Norte',
    },
    {
      id: 4261,
      ibgeId: 5105309,
      name: 'Luciara',
    },
    {
      id: 4262,
      ibgeId: 5107354,
      name: 'São José do Xingu',
    },
    {
      id: 4263,
      ibgeId: 5107743,
      name: 'Santa Cruz do Xingu',
    },
    {
      id: 4264,
      ibgeId: 5100359,
      name: 'Alto Boa Vista',
    },
    {
      id: 4265,
      ibgeId: 5107883,
      name: 'Serra Nova Dourada',
    },
    {
      id: 4266,
      ibgeId: 5107859,
      name: 'São Félix do Araguaia',
    },
    {
      id: 4267,
      ibgeId: 5106315,
      name: 'Novo Santo Antônio',
    },
    {
      id: 4268,
      ibgeId: 5107180,
      name: 'Ribeirão Cascalheira',
    },
    {
      id: 4269,
      ibgeId: 5101852,
      name: 'Bom Jesus do Araguaia',
    },
    {
      id: 4270,
      ibgeId: 5103106,
      name: 'Cocalinho',
    },
    {
      id: 4271,
      ibgeId: 5101001,
      name: 'Araguaiana',
    },
    {
      id: 4272,
      ibgeId: 5106257,
      name: 'Nova Xavantina',
    },
    {
      id: 4273,
      ibgeId: 5108204,
      name: 'Torixoréu',
    },
    {
      id: 4274,
      ibgeId: 5106653,
      name: 'Pontal do Araguaia',
    },
    {
      id: 4275,
      ibgeId: 5107602,
      name: 'Rondonópolis',
    },
    {
      id: 4276,
      ibgeId: 5104203,
      name: 'Guiratinga',
    },
    {
      id: 4277,
      ibgeId: 5100409,
      name: 'Alto Garças',
    },
    {
      id: 4278,
      ibgeId: 5107297,
      name: 'São José do Povo',
    },
    {
      id: 4279,
      ibgeId: 5108105,
      name: 'Tesouro',
    },
    {
      id: 4280,
      ibgeId: 5100300,
      name: 'Alto Araguaia',
    },
    {
      id: 4281,
      ibgeId: 5100607,
      name: 'Alto Taquari',
    },
    {
      id: 4282,
      ibgeId: 5104609,
      name: 'Itiquira',
    },
    {
      id: 4283,
      ibgeId: 5106372,
      name: 'Pedra Preta',
    },
    {
      id: 4284,
      ibgeId: 5107008,
      name: 'Poxoréu',
    },
    {
      id: 4285,
      ibgeId: 5105200,
      name: 'Juscimeira',
    },
    {
      id: 4286,
      ibgeId: 5104807,
      name: 'Jaciara',
    },
    {
      id: 4287,
      ibgeId: 5103601,
      name: 'Dom Aquino',
    },
    {
      id: 4288,
      ibgeId: 5107404,
      name: 'São Pedro da Cipa',
    },
    {
      id: 4289,
      ibgeId: 5102678,
      name: 'Campo Verde',
    },
    {
      id: 4290,
      ibgeId: 5107040,
      name: 'Primavera do Leste',
    },
    {
      id: 4291,
      ibgeId: 5106455,
      name: 'Planalto da Serra',
    },
    {
      id: 4292,
      ibgeId: 5106208,
      name: 'Nova Brasilândia',
    },
    {
      id: 4293,
      ibgeId: 5106307,
      name: 'Paranatinga',
    },
    {
      id: 4294,
      ibgeId: 5103858,
      name: 'Gaúcha do Norte',
    },
    {
      id: 4295,
      ibgeId: 5108501,
      name: 'Vera',
    },
    {
      id: 4296,
      ibgeId: 5103700,
      name: 'Feliz Natal',
    },
    {
      id: 4297,
      ibgeId: 5106240,
      name: 'Nova Ubiratã',
    },
    {
      id: 4298,
      ibgeId: 5107925,
      name: 'Sorriso',
    },
  ],
  PA: [
    {
      id: 3461,
      ibgeId: 1501402,
      name: 'Belém',
    },
    {
      id: 3462,
      ibgeId: 1500800,
      name: 'Ananindeua',
    },
    {
      id: 3463,
      ibgeId: 1504422,
      name: 'Marituba',
    },
    {
      id: 3464,
      ibgeId: 1506807,
      name: 'Santarém',
    },
    {
      id: 3465,
      ibgeId: 1504752,
      name: 'Mojuí dos Campos',
    },
    {
      id: 3466,
      ibgeId: 1506005,
      name: 'Prainha',
    },
    {
      id: 3467,
      ibgeId: 1505650,
      name: 'Placas',
    },
    {
      id: 3468,
      ibgeId: 1508159,
      name: 'Uruará',
    },
    {
      id: 3469,
      ibgeId: 1501451,
      name: 'Belterra',
    },
    {
      id: 3470,
      ibgeId: 1504455,
      name: 'Medicilândia',
    },
    {
      id: 3471,
      ibgeId: 1501725,
      name: 'Brasil Novo',
    },
    {
      id: 3472,
      ibgeId: 1501006,
      name: 'Aveiro',
    },
    {
      id: 3473,
      ibgeId: 1506195,
      name: 'Rurópolis',
    },
    {
      id: 3474,
      ibgeId: 1503903,
      name: 'Juruti',
    },
    {
      id: 3475,
      ibgeId: 1503606,
      name: 'Itaituba',
    },
    {
      id: 3476,
      ibgeId: 1505031,
      name: 'Novo Progresso',
    },
    {
      id: 3477,
      ibgeId: 1503754,
      name: 'Jacareacanga',
    },
    {
      id: 3478,
      ibgeId: 1508050,
      name: 'Trairão',
    },
    {
      id: 3479,
      ibgeId: 1500404,
      name: 'Alenquer',
    },
    {
      id: 3480,
      ibgeId: 1502855,
      name: 'Curuá',
    },
    {
      id: 3481,
      ibgeId: 1504802,
      name: 'Monte Alegre',
    },
    {
      id: 3482,
      ibgeId: 1500503,
      name: 'Almeirim',
    },
    {
      id: 3483,
      ibgeId: 1505106,
      name: 'Óbidos',
    },
    {
      id: 3484,
      ibgeId: 1505304,
      name: 'Oriximiná',
    },
    {
      id: 3485,
      ibgeId: 1503002,
      name: 'Faro',
    },
    {
      id: 3486,
      ibgeId: 1507979,
      name: 'Terra Santa',
    },
    {
      id: 3487,
      ibgeId: 1503101,
      name: 'Gurupá',
    },
    {
      id: 3488,
      ibgeId: 1505908,
      name: 'Porto de Moz',
    },
    {
      id: 3489,
      ibgeId: 1507805,
      name: 'Senador José Porfírio',
    },
    {
      id: 3490,
      ibgeId: 1500859,
      name: 'Anapu',
    },
    {
      id: 3491,
      ibgeId: 1500602,
      name: 'Altamira',
    },
    {
      id: 3492,
      ibgeId: 1507300,
      name: 'São Félix do Xingu',
    },
    {
      id: 3493,
      ibgeId: 1508357,
      name: 'Vitória do Xingu',
    },
    {
      id: 3494,
      ibgeId: 1508084,
      name: 'Tucumã',
    },
    {
      id: 3495,
      ibgeId: 1501253,
      name: 'Bannach',
    },
    {
      id: 3496,
      ibgeId: 1505437,
      name: 'Ourilândia do Norte',
    },
    {
      id: 3497,
      ibgeId: 1502764,
      name: 'Cumaru do Norte',
    },
    {
      id: 3498,
      ibgeId: 1502103,
      name: 'Cametá',
    },
    {
      id: 3499,
      ibgeId: 1504000,
      name: 'Limoeiro do Ajuru',
    },
    {
      id: 3500,
      ibgeId: 1504604,
      name: 'Mocajuba',
    },
    {
      id: 3501,
      ibgeId: 1503309,
      name: 'Igarapé-Miri',
    },
    {
      id: 3502,
      ibgeId: 1500107,
      name: 'Abaetetuba',
    },
    {
      id: 3503,
      ibgeId: 1501303,
      name: 'Barcarena',
    },
    {
      id: 3504,
      ibgeId: 1504703,
      name: 'Moju',
    },
    {
      id: 3505,
      ibgeId: 1508100,
      name: 'Tucuruí',
    },
    {
      id: 3506,
      ibgeId: 1501204,
      name: 'Baião',
    },
    {
      id: 3507,
      ibgeId: 1505205,
      name: 'Oeiras do Pará',
    },
    {
      id: 3508,
      ibgeId: 1505064,
      name: 'Novo Repartimento',
    },
    {
      id: 3509,
      ibgeId: 1501105,
      name: 'Bagre',
    },
    {
      id: 3510,
      ibgeId: 1505809,
      name: 'Portel',
    },
    {
      id: 3511,
      ibgeId: 1505486,
      name: 'Pacajá',
    },
    {
      id: 3512,
      ibgeId: 1501782,
      name: 'Breu Branco',
    },
    {
      id: 3513,
      ibgeId: 1504505,
      name: 'Melgaço',
    },
    {
      id: 3514,
      ibgeId: 1504208,
      name: 'Marabá',
    },
    {
      id: 3515,
      ibgeId: 1505536,
      name: 'Parauapebas',
    },
    {
      id: 3516,
      ibgeId: 1507508,
      name: 'São João do Araguaia',
    },
    {
      id: 3517,
      ibgeId: 1507151,
      name: 'São Domingos do Araguaia',
    },
    {
      id: 3518,
      ibgeId: 1501758,
      name: 'Brejo Grande do Araguaia',
    },
    {
      id: 3519,
      ibgeId: 1502772,
      name: 'Curionópolis',
    },
    {
      id: 3520,
      ibgeId: 1502954,
      name: 'Eldorado dos Carajás',
    },
    {
      id: 3521,
      ibgeId: 1501576,
      name: 'Bom Jesus do Tocantins',
    },
    {
      id: 3522,
      ibgeId: 1500131,
      name: 'Abel Figueiredo',
    },
    {
      id: 3523,
      ibgeId: 1506161,
      name: 'Rio Maria',
    },
    {
      id: 3524,
      ibgeId: 1500347,
      name: 'Água Azul do Norte',
    },
    {
      id: 3525,
      ibgeId: 1505494,
      name: 'Palestina do Pará',
    },
    {
      id: 3526,
      ibgeId: 1502152,
      name: 'Canaã dos Carajás',
    },
    {
      id: 3527,
      ibgeId: 1502707,
      name: 'Conceição do Araguaia',
    },
    {
      id: 3528,
      ibgeId: 1503044,
      name: 'Floresta do Araguaia',
    },
    {
      id: 3529,
      ibgeId: 1505551,
      name: "Pau D'Arco",
    },
    {
      id: 3530,
      ibgeId: 1507755,
      name: 'Sapucaia',
    },
    {
      id: 3531,
      ibgeId: 1506138,
      name: 'Redenção',
    },
    {
      id: 3532,
      ibgeId: 1508407,
      name: 'Xinguara',
    },
    {
      id: 3533,
      ibgeId: 1506708,
      name: 'Santana do Araguaia',
    },
    {
      id: 3534,
      ibgeId: 1506583,
      name: 'Santa Maria das Barreiras',
    },
    {
      id: 3535,
      ibgeId: 1507458,
      name: 'São Geraldo do Araguaia',
    },
    {
      id: 3536,
      ibgeId: 1505635,
      name: 'Piçarra',
    },
    {
      id: 3537,
      ibgeId: 1503705,
      name: 'Itupiranga',
    },
    {
      id: 3538,
      ibgeId: 1504976,
      name: 'Nova Ipixuna',
    },
    {
      id: 3539,
      ibgeId: 1503804,
      name: 'Jacundá',
    },
    {
      id: 3540,
      ibgeId: 1501709,
      name: 'Bragança',
    },
    {
      id: 3541,
      ibgeId: 1500909,
      name: 'Augusto Corrêa',
    },
    {
      id: 3542,
      ibgeId: 1501956,
      name: 'Cachoeira do Piriá',
    },
    {
      id: 3543,
      ibgeId: 1504950,
      name: 'Nova Esperança do Piriá',
    },
    {
      id: 3544,
      ibgeId: 1508308,
      name: 'Viseu',
    },
    {
      id: 3545,
      ibgeId: 1505502,
      name: 'Paragominas',
    },
    {
      id: 3546,
      ibgeId: 1508126,
      name: 'Ulianópolis',
    },
    {
      id: 3547,
      ibgeId: 1502939,
      name: 'Dom Eliseu',
    },
    {
      id: 3548,
      ibgeId: 1507201,
      name: 'São Domingos do Capim',
    },
    {
      id: 3549,
      ibgeId: 1503457,
      name: 'Ipixuna do Pará',
    },
    {
      id: 3550,
      ibgeId: 1506187,
      name: 'Rondon do Pará',
    },
    {
      id: 3551,
      ibgeId: 1503093,
      name: 'Goianésia do Pará',
    },
    {
      id: 3552,
      ibgeId: 1505403,
      name: 'Ourém',
    },
    {
      id: 3553,
      ibgeId: 1506559,
      name: 'Santa Luzia do Pará',
    },
    {
      id: 3554,
      ibgeId: 1501600,
      name: 'Bonito',
    },
    {
      id: 3555,
      ibgeId: 1508035,
      name: 'Tracuateua',
    },
    {
      id: 3556,
      ibgeId: 1502301,
      name: 'Capitão Poço',
    },
    {
      id: 3557,
      ibgeId: 1503507,
      name: 'Irituia',
    },
    {
      id: 3558,
      ibgeId: 1500958,
      name: 'Aurora do Pará',
    },
    {
      id: 3559,
      ibgeId: 1507607,
      name: 'São Miguel do Guamá',
    },
    {
      id: 3560,
      ibgeId: 1503077,
      name: 'Garrafão do Norte',
    },
    {
      id: 3561,
      ibgeId: 1501907,
      name: 'Bujaru',
    },
    {
      id: 3562,
      ibgeId: 1504059,
      name: 'Mãe do Rio',
    },
    {
      id: 3563,
      ibgeId: 1508001,
      name: 'Tomé-Açu',
    },
    {
      id: 3564,
      ibgeId: 1502756,
      name: 'Concórdia do Pará',
    },
    {
      id: 3565,
      ibgeId: 1500206,
      name: 'Acará',
    },
    {
      id: 3566,
      ibgeId: 1507953,
      name: 'Tailândia',
    },
    {
      id: 3567,
      ibgeId: 1502202,
      name: 'Capanema',
    },
    {
      id: 3568,
      ibgeId: 1506104,
      name: 'Primavera',
    },
    {
      id: 3569,
      ibgeId: 1506112,
      name: 'Quatipuru',
    },
    {
      id: 3570,
      ibgeId: 1504307,
      name: 'Maracanã',
    },
    {
      id: 3571,
      ibgeId: 1507474,
      name: 'São João de Pirabas',
    },
    {
      id: 3572,
      ibgeId: 1506906,
      name: 'Santarém Novo',
    },
    {
      id: 3573,
      ibgeId: 1506203,
      name: 'Salinópolis',
    },
    {
      id: 3574,
      ibgeId: 1504109,
      name: 'Magalhães Barata',
    },
    {
      id: 3575,
      ibgeId: 1503200,
      name: 'Igarapé-Açu',
    },
    {
      id: 3576,
      ibgeId: 1505007,
      name: 'Nova Timboteua',
    },
    {
      id: 3577,
      ibgeId: 1505601,
      name: 'Peixe-Boi',
    },
    {
      id: 3578,
      ibgeId: 1506609,
      name: 'Santa Maria do Pará',
    },
    {
      id: 3579,
      ibgeId: 1502400,
      name: 'Castanhal',
    },
    {
      id: 3580,
      ibgeId: 1507409,
      name: 'São Francisco do Pará',
    },
    {
      id: 3581,
      ibgeId: 1502905,
      name: 'Curuçá',
    },
    {
      id: 3582,
      ibgeId: 1504406,
      name: 'Marapanim',
    },
    {
      id: 3583,
      ibgeId: 1503408,
      name: 'Inhangapi',
    },
    {
      id: 3584,
      ibgeId: 1507961,
      name: 'Terra Alta',
    },
    {
      id: 3585,
      ibgeId: 1507466,
      name: 'São João da Ponta',
    },
    {
      id: 3586,
      ibgeId: 1507102,
      name: 'São Caetano de Odivelas',
    },
    {
      id: 3587,
      ibgeId: 1508209,
      name: 'Vigia',
    },
    {
      id: 3588,
      ibgeId: 1502608,
      name: 'Colares',
    },
    {
      id: 3589,
      ibgeId: 1507003,
      name: 'Santo Antônio do Tauá',
    },
    {
      id: 3590,
      ibgeId: 1506500,
      name: 'Santa Isabel do Pará',
    },
    {
      id: 3591,
      ibgeId: 1501501,
      name: 'Benevides',
    },
    {
      id: 3592,
      ibgeId: 1506351,
      name: 'Santa Bárbara do Pará',
    },
    {
      id: 3593,
      ibgeId: 1501808,
      name: 'Breves',
    },
    {
      id: 3594,
      ibgeId: 1500701,
      name: 'Anajás',
    },
    {
      id: 3595,
      ibgeId: 1502806,
      name: 'Curralinho',
    },
    {
      id: 3596,
      ibgeId: 1507706,
      name: 'São Sebastião da Boa Vista',
    },
    {
      id: 3597,
      ibgeId: 1504901,
      name: 'Muaná',
    },
    {
      id: 3598,
      ibgeId: 1505700,
      name: 'Ponta de Pedras',
    },
    {
      id: 3599,
      ibgeId: 1502004,
      name: 'Cachoeira do Arari',
    },
    {
      id: 3600,
      ibgeId: 1506401,
      name: 'Santa Cruz do Arari',
    },
    {
      id: 3601,
      ibgeId: 1506302,
      name: 'Salvaterra',
    },
    {
      id: 3602,
      ibgeId: 1507904,
      name: 'Soure',
    },
    {
      id: 3603,
      ibgeId: 1502509,
      name: 'Chaves',
    },
    {
      id: 3604,
      ibgeId: 1500305,
      name: 'Afuá',
    },
  ],
  PB: [
    {
      id: 2448,
      ibgeId: 2507507,
      name: 'João Pessoa',
    },
    {
      id: 2449,
      ibgeId: 2503209,
      name: 'Cabedelo',
    },
    {
      id: 2450,
      ibgeId: 2501807,
      name: 'Bayeux',
    },
    {
      id: 2451,
      ibgeId: 2512408,
      name: 'Puxinanã',
    },
    {
      id: 2452,
      ibgeId: 2508307,
      name: 'Lagoa Seca',
    },
    {
      id: 2453,
      ibgeId: 2515104,
      name: 'São Sebastião de Lagoa de Roça',
    },
    {
      id: 2454,
      ibgeId: 2509206,
      name: 'Massaranduba',
    },
    {
      id: 2455,
      ibgeId: 2502151,
      name: 'Boa Vista',
    },
    {
      id: 2456,
      ibgeId: 2500403,
      name: 'Alagoa Nova',
    },
    {
      id: 2457,
      ibgeId: 2509339,
      name: 'Matinhas',
    },
    {
      id: 2458,
      ibgeId: 2506004,
      name: 'Esperança',
    },
    {
      id: 2459,
      ibgeId: 2501203,
      name: 'Areial',
    },
    {
      id: 2460,
      ibgeId: 2509503,
      name: 'Montadas',
    },
    {
      id: 2461,
      ibgeId: 2512002,
      name: 'Pocinhos',
    },
    {
      id: 2462,
      ibgeId: 2516102,
      name: 'Soledade',
    },
    {
      id: 2463,
      ibgeId: 2502300,
      name: 'Bom Sucesso',
    },
    {
      id: 2464,
      ibgeId: 2515401,
      name: 'São Vicente do Seridó',
    },
    {
      id: 2465,
      ibgeId: 2510501,
      name: 'Olivedos',
    },
    {
      id: 2466,
      ibgeId: 2505006,
      name: 'Cubati',
    },
    {
      id: 2467,
      ibgeId: 2501609,
      name: 'Barra de Santa Rosa',
    },
    {
      id: 2468,
      ibgeId: 2505352,
      name: 'Damião',
    },
    {
      id: 2469,
      ibgeId: 2505105,
      name: 'Cuité',
    },
    {
      id: 2470,
      ibgeId: 2516151,
      name: 'Sossego',
    },
    {
      id: 2471,
      ibgeId: 2510105,
      name: 'Nova Floresta',
    },
    {
      id: 2472,
      ibgeId: 2511103,
      name: 'Pedra Lavrada',
    },
    {
      id: 2473,
      ibgeId: 2510303,
      name: 'Nova Palmeira',
    },
    {
      id: 2474,
      ibgeId: 2511400,
      name: 'Picuí',
    },
    {
      id: 2475,
      ibgeId: 2501534,
      name: 'Baraúna',
    },
    {
      id: 2476,
      ibgeId: 2506202,
      name: 'Frei Martinho',
    },
    {
      id: 2477,
      ibgeId: 2506301,
      name: 'Guarabira',
    },
    {
      id: 2478,
      ibgeId: 2505204,
      name: 'Cuitegi',
    },
    {
      id: 2479,
      ibgeId: 2511707,
      name: 'Pilõezinhos',
    },
    {
      id: 2480,
      ibgeId: 2511806,
      name: 'Pirpirituba',
    },
    {
      id: 2481,
      ibgeId: 2501500,
      name: 'Bananeiras',
    },
    {
      id: 2482,
      ibgeId: 2516003,
      name: 'Solânea',
    },
    {
      id: 2483,
      ibgeId: 2505709,
      name: 'Dona Inês',
    },
    {
      id: 2484,
      ibgeId: 2503506,
      name: 'Cacimba de Dentro',
    },
    {
      id: 2485,
      ibgeId: 2501005,
      name: 'Araruna',
    },
    {
      id: 2486,
      ibgeId: 2512747,
      name: 'Riachão',
    },
    {
      id: 2487,
      ibgeId: 2504157,
      name: 'Casserengue',
    },
    {
      id: 2488,
      ibgeId: 2516409,
      name: 'Tacima',
    },
    {
      id: 2489,
      ibgeId: 2508208,
      name: 'Lagoa de Dentro',
    },
    {
      id: 2490,
      ibgeId: 2503605,
      name: 'Caiçara',
    },
    {
      id: 2491,
      ibgeId: 2508554,
      name: 'Logradouro',
    },
    {
      id: 2492,
      ibgeId: 2501906,
      name: 'Belém',
    },
    {
      id: 2493,
      ibgeId: 2515609,
      name: 'Serra da Raiz',
    },
    {
      id: 2494,
      ibgeId: 2505808,
      name: 'Duas Estradas',
    },
    {
      id: 2495,
      ibgeId: 2515930,
      name: 'Sertãozinho',
    },
    {
      id: 2496,
      ibgeId: 2500809,
      name: 'Araçagi',
    },
    {
      id: 2497,
      ibgeId: 2512721,
      name: 'Pedro Régis',
    },
    {
      id: 2498,
      ibgeId: 2507101,
      name: 'Itapororoca',
    },
    {
      id: 2499,
      ibgeId: 2507309,
      name: 'Jacaraú',
    },
    {
      id: 2500,
      ibgeId: 2508901,
      name: 'Mamanguape',
    },
    {
      id: 2501,
      ibgeId: 2504033,
      name: 'Capim',
    },
    {
      id: 2502,
      ibgeId: 2505238,
      name: 'Cuité de Mamanguape',
    },
    {
      id: 2503,
      ibgeId: 2505279,
      name: 'Curral de Cima',
    },
    {
      id: 2504,
      ibgeId: 2509305,
      name: 'Mataraca',
    },
    {
      id: 2505,
      ibgeId: 2509057,
      name: 'Marcação',
    },
    {
      id: 2506,
      ibgeId: 2501401,
      name: 'Baía da Traição',
    },
    {
      id: 2507,
      ibgeId: 2512903,
      name: 'Rio Tinto',
    },
    {
      id: 2508,
      ibgeId: 2513703,
      name: 'Santa Rita',
    },
    {
      id: 2509,
      ibgeId: 2508604,
      name: 'Lucena',
    },
    {
      id: 2510,
      ibgeId: 2500601,
      name: 'Alhandra',
    },
    {
      id: 2511,
      ibgeId: 2504603,
      name: 'Conde',
    },
    {
      id: 2512,
      ibgeId: 2511905,
      name: 'Pitimbu',
    },
    {
      id: 2513,
      ibgeId: 2503001,
      name: 'Caaporã',
    },
    {
      id: 2514,
      ibgeId: 2511202,
      name: 'Pedras de Fogo',
    },
    {
      id: 2515,
      ibgeId: 2507903,
      name: 'Juripiranga',
    },
    {
      id: 2516,
      ibgeId: 2515005,
      name: 'São Miguel de Taipu',
    },
    {
      id: 2517,
      ibgeId: 2504900,
      name: 'Cruz do Espírito Santo',
    },
    {
      id: 2518,
      ibgeId: 2511509,
      name: 'Pilar',
    },
    {
      id: 2519,
      ibgeId: 2514453,
      name: 'São José dos Ramos',
    },
    {
      id: 2520,
      ibgeId: 2515302,
      name: 'Sapé',
    },
    {
      id: 2521,
      ibgeId: 2515971,
      name: 'Sobrado',
    },
    {
      id: 2522,
      ibgeId: 2509107,
      name: 'Mari',
    },
    {
      id: 2523,
      ibgeId: 2512762,
      name: 'Riachão do Poço',
    },
    {
      id: 2524,
      ibgeId: 2503803,
      name: 'Caldas Brandão',
    },
    {
      id: 2525,
      ibgeId: 2509800,
      name: 'Mulungu',
    },
    {
      id: 2526,
      ibgeId: 2506400,
      name: 'Gurinhém',
    },
    {
      id: 2527,
      ibgeId: 2506905,
      name: 'Itabaiana',
    },
    {
      id: 2528,
      ibgeId: 2513109,
      name: 'Salgado de São Félix',
    },
    {
      id: 2529,
      ibgeId: 2509404,
      name: 'Mogeiro',
    },
    {
      id: 2530,
      ibgeId: 2507200,
      name: 'Itatuba',
    },
    {
      id: 2531,
      ibgeId: 2506806,
      name: 'Ingá',
    },
    {
      id: 2532,
      ibgeId: 2512754,
      name: 'Riachão do Bacamarte',
    },
    {
      id: 2533,
      ibgeId: 2515807,
      name: 'Serra Redonda',
    },
    {
      id: 2534,
      ibgeId: 2507606,
      name: 'Juarez Távora',
    },
    {
      id: 2535,
      ibgeId: 2500304,
      name: 'Alagoa Grande',
    },
    {
      id: 2536,
      ibgeId: 2500502,
      name: 'Alagoinha',
    },
    {
      id: 2537,
      ibgeId: 2511608,
      name: 'Pilões',
    },
    {
      id: 2538,
      ibgeId: 2502706,
      name: 'Borborema',
    },
    {
      id: 2539,
      ibgeId: 2515906,
      name: 'Serraria',
    },
    {
      id: 2540,
      ibgeId: 2500908,
      name: 'Arara',
    },
    {
      id: 2541,
      ibgeId: 2501104,
      name: 'Areia',
    },
    {
      id: 2542,
      ibgeId: 2512705,
      name: 'Remígio',
    },
    {
      id: 2543,
      ibgeId: 2500577,
      name: 'Algodão de Jandaíra',
    },
    {
      id: 2544,
      ibgeId: 2504009,
      name: 'Campina Grande',
    },
    {
      id: 2545,
      ibgeId: 2502508,
      name: 'Boqueirão',
    },
    {
      id: 2546,
      ibgeId: 2504355,
      name: 'Caturité',
    },
    {
      id: 2547,
      ibgeId: 2501575,
      name: 'Barra de Santana',
    },
    {
      id: 2548,
      ibgeId: 2500536,
      name: 'Alcantil',
    },
    {
      id: 2549,
      ibgeId: 2513158,
      name: 'Santa Cecília',
    },
    {
      id: 2550,
      ibgeId: 2512788,
      name: 'Riacho de Santo Antônio',
    },
    {
      id: 2551,
      ibgeId: 2512507,
      name: 'Queimadas',
    },
    {
      id: 2552,
      ibgeId: 2503100,
      name: 'Cabaceiras',
    },
    {
      id: 2553,
      ibgeId: 2501708,
      name: 'Barra de São Miguel',
    },
    {
      id: 2554,
      ibgeId: 2513943,
      name: 'São Domingos do Cariri',
    },
    {
      id: 2555,
      ibgeId: 2506103,
      name: 'Fagundes',
    },
    {
      id: 2556,
      ibgeId: 2501302,
      name: 'Aroeiras',
    },
    {
      id: 2557,
      ibgeId: 2506251,
      name: 'Gado Bravo',
    },
    {
      id: 2558,
      ibgeId: 2509909,
      name: 'Natuba',
    },
    {
      id: 2559,
      ibgeId: 2517001,
      name: 'Umbuzeiro',
    },
    {
      id: 2560,
      ibgeId: 2509701,
      name: 'Monteiro',
    },
    {
      id: 2561,
      ibgeId: 2515203,
      name: 'São Sebastião do Umbuzeiro',
    },
    {
      id: 2562,
      ibgeId: 2517407,
      name: 'Zabelê',
    },
    {
      id: 2563,
      ibgeId: 2514107,
      name: 'São João do Tigre',
    },
    {
      id: 2564,
      ibgeId: 2503902,
      name: 'Camalaú',
    },
    {
      id: 2565,
      ibgeId: 2504702,
      name: 'Congo',
    },
    {
      id: 2566,
      ibgeId: 2516300,
      name: 'Sumé',
    },
    {
      id: 2567,
      ibgeId: 2500734,
      name: 'Amparo',
    },
    {
      id: 2568,
      ibgeId: 2512200,
      name: 'Prata',
    },
    {
      id: 2569,
      ibgeId: 2510600,
      name: 'Ouro Velho',
    },
    {
      id: 2570,
      ibgeId: 2514800,
      name: 'São José dos Cordeiros',
    },
    {
      id: 2571,
      ibgeId: 2510659,
      name: 'Parari',
    },
    {
      id: 2572,
      ibgeId: 2515500,
      name: 'Serra Branca',
    },
    {
      id: 2573,
      ibgeId: 2504850,
      name: 'Coxixola',
    },
    {
      id: 2574,
      ibgeId: 2514008,
      name: 'São João do Cariri',
    },
    {
      id: 2575,
      ibgeId: 2504074,
      name: 'Caraúbas',
    },
    {
      id: 2576,
      ibgeId: 2513406,
      name: 'Santa Luzia',
    },
    {
      id: 2577,
      ibgeId: 2514701,
      name: 'São José do Sabugi',
    },
    {
      id: 2578,
      ibgeId: 2517100,
      name: 'Várzea',
    },
    {
      id: 2579,
      ibgeId: 2514909,
      name: 'São Mamede',
    },
    {
      id: 2580,
      ibgeId: 2507804,
      name: 'Junco do Seridó',
    },
    {
      id: 2581,
      ibgeId: 2513000,
      name: 'Salgadinho',
    },
    {
      id: 2582,
      ibgeId: 2507705,
      name: 'Juazeirinho',
    },
    {
      id: 2583,
      ibgeId: 2516755,
      name: 'Tenório',
    },
    {
      id: 2584,
      ibgeId: 2506509,
      name: 'Gurjão',
    },
    {
      id: 2585,
      ibgeId: 2513851,
      name: 'Santo André',
    },
    {
      id: 2586,
      ibgeId: 2516508,
      name: 'Taperoá',
    },
    {
      id: 2587,
      ibgeId: 2501351,
      name: 'Assunção',
    },
    {
      id: 2588,
      ibgeId: 2508505,
      name: 'Livramento',
    },
    {
      id: 2589,
      ibgeId: 2505402,
      name: 'Desterro',
    },
    {
      id: 2590,
      ibgeId: 2503555,
      name: 'Cacimbas',
    },
    {
      id: 2591,
      ibgeId: 2510808,
      name: 'Patos',
    },
    {
      id: 2592,
      ibgeId: 2505501,
      name: 'Vista Serrana',
    },
    {
      id: 2593,
      ibgeId: 2508802,
      name: 'Malta',
    },
    {
      id: 2594,
      ibgeId: 2504504,
      name: 'Condado',
    },
    {
      id: 2595,
      ibgeId: 2504207,
      name: 'Catingueira',
    },
    {
      id: 2596,
      ibgeId: 2513802,
      name: 'Santa Teresinha',
    },
    {
      id: 2597,
      ibgeId: 2514404,
      name: 'São José de Espinharas',
    },
    {
      id: 2598,
      ibgeId: 2514602,
      name: 'São José do Bonfim',
    },
    {
      id: 2599,
      ibgeId: 2503407,
      name: 'Cacimba de Areia',
    },
    {
      id: 2600,
      ibgeId: 2501153,
      name: 'Areia de Baraúnas',
    },
    {
      id: 2601,
      ibgeId: 2512606,
      name: 'Quixabá',
    },
    {
      id: 2602,
      ibgeId: 2510709,
      name: 'Passagem',
    },
    {
      id: 2603,
      ibgeId: 2516706,
      name: 'Teixeira',
    },
    {
      id: 2604,
      ibgeId: 2509396,
      name: 'Maturéia',
    },
    {
      id: 2605,
      ibgeId: 2508703,
      name: "Mãe D'Água",
    },
    {
      id: 2606,
      ibgeId: 2506707,
      name: 'Imaculada',
    },
    {
      id: 2607,
      ibgeId: 2500106,
      name: 'Água Branca',
    },
    {
      id: 2608,
      ibgeId: 2508000,
      name: 'Juru',
    },
    {
      id: 2609,
      ibgeId: 2516607,
      name: 'Tavares',
    },
    {
      id: 2610,
      ibgeId: 2512309,
      name: 'Princesa Isabel',
    },
    {
      id: 2611,
      ibgeId: 2514552,
      name: 'São José de Princesa',
    },
    {
      id: 2612,
      ibgeId: 2510402,
      name: "Olho D'Água",
    },
    {
      id: 2613,
      ibgeId: 2505907,
      name: 'Emas',
    },
    {
      id: 2614,
      ibgeId: 2511301,
      name: 'Piancó',
    },
    {
      id: 2615,
      ibgeId: 2504801,
      name: 'Coremas',
    },
    {
      id: 2616,
      ibgeId: 2502607,
      name: 'Igaracy',
    },
    {
      id: 2617,
      ibgeId: 2500205,
      name: 'Aguiar',
    },
    {
      id: 2618,
      ibgeId: 2507002,
      name: 'Itaporanga',
    },
    {
      id: 2619,
      ibgeId: 2514305,
      name: 'São José de Caiana',
    },
    {
      id: 2620,
      ibgeId: 2511004,
      name: 'Pedra Branca',
    },
    {
      id: 2621,
      ibgeId: 2513604,
      name: 'Santana dos Garrotes',
    },
    {
      id: 2622,
      ibgeId: 2510204,
      name: 'Nova Olinda',
    },
    {
      id: 2623,
      ibgeId: 2516201,
      name: 'Sousa',
    },
    {
      id: 2624,
      ibgeId: 2514206,
      name: 'São José da Lagoa Tapada',
    },
    {
      id: 2625,
      ibgeId: 2510006,
      name: 'Nazarezinho',
    },
    {
      id: 2626,
      ibgeId: 2513984,
      name: 'São Francisco',
    },
    {
      id: 2627,
      ibgeId: 2509156,
      name: 'Marizópolis',
    },
    {
      id: 2628,
      ibgeId: 2508406,
      name: 'Lastro',
    },
    {
      id: 2629,
      ibgeId: 2517209,
      name: 'Vieirópolis',
    },
    {
      id: 2630,
      ibgeId: 2500775,
      name: 'Aparecida',
    },
    {
      id: 2631,
      ibgeId: 2513208,
      name: 'Santa Cruz',
    },
    {
      id: 2632,
      ibgeId: 2507408,
      name: 'Jericó',
    },
    {
      id: 2633,
      ibgeId: 2509370,
      name: 'Mato Grosso',
    },
    {
      id: 2634,
      ibgeId: 2508109,
      name: 'Lagoa',
    },
    {
      id: 2635,
      ibgeId: 2512101,
      name: 'Pombal',
    },
    {
      id: 2636,
      ibgeId: 2513968,
      name: 'São Domingos',
    },
    {
      id: 2637,
      ibgeId: 2503753,
      name: 'Cajazeirinhas',
    },
    {
      id: 2638,
      ibgeId: 2513927,
      name: 'São Bentinho',
    },
    {
      id: 2639,
      ibgeId: 2510907,
      name: 'Paulista',
    },
    {
      id: 2640,
      ibgeId: 2513901,
      name: 'São Bento',
    },
    {
      id: 2641,
      ibgeId: 2512804,
      name: 'Riacho dos Cavalos',
    },
    {
      id: 2642,
      ibgeId: 2502904,
      name: 'Brejo dos Santos',
    },
    {
      id: 2643,
      ibgeId: 2504306,
      name: 'Catolé do Rocha',
    },
    {
      id: 2644,
      ibgeId: 2502805,
      name: 'Brejo do Cruz',
    },
    {
      id: 2645,
      ibgeId: 2514651,
      name: 'São José do Brejo do Cruz',
    },
    {
      id: 2646,
      ibgeId: 2502003,
      name: 'Belém do Brejo do Cruz',
    },
    {
      id: 2647,
      ibgeId: 2503704,
      name: 'Cajazeiras',
    },
    {
      id: 2648,
      ibgeId: 2512077,
      name: 'Poço de José de Moura',
    },
    {
      id: 2649,
      ibgeId: 2500700,
      name: 'São João do Rio do Peixe',
    },
    {
      id: 2650,
      ibgeId: 2516904,
      name: 'Uiraúna',
    },
    {
      id: 2651,
      ibgeId: 2516805,
      name: 'Triunfo',
    },
    {
      id: 2652,
      ibgeId: 2502052,
      name: 'Bernardino Batista',
    },
    {
      id: 2653,
      ibgeId: 2513307,
      name: 'Santa Helena',
    },
    {
      id: 2654,
      ibgeId: 2513653,
      name: 'Joca Claudino',
    },
    {
      id: 2655,
      ibgeId: 2502201,
      name: 'Bom Jesus',
    },
    {
      id: 2656,
      ibgeId: 2512036,
      name: 'Poço Dantas',
    },
    {
      id: 2657,
      ibgeId: 2503308,
      name: 'Cachoeira dos Índios',
    },
    {
      id: 2658,
      ibgeId: 2514503,
      name: 'São José de Piranhas',
    },
    {
      id: 2659,
      ibgeId: 2504108,
      name: 'Carrapateira',
    },
    {
      id: 2660,
      ibgeId: 2509602,
      name: 'Monte Horebe',
    },
    {
      id: 2661,
      ibgeId: 2515708,
      name: 'Serra Grande',
    },
    {
      id: 2662,
      ibgeId: 2502409,
      name: 'Bonito de Santa Fé',
    },
    {
      id: 2663,
      ibgeId: 2504405,
      name: 'Conceição',
    },
    {
      id: 2664,
      ibgeId: 2513356,
      name: 'Santa Inês',
    },
    {
      id: 2665,
      ibgeId: 2506608,
      name: 'Ibiara',
    },
    {
      id: 2666,
      ibgeId: 2513505,
      name: 'Santana de Mangueira',
    },
    {
      id: 2667,
      ibgeId: 2505303,
      name: 'Curral Velho',
    },
    {
      id: 2668,
      ibgeId: 2502102,
      name: 'Boa Ventura',
    },
    {
      id: 2669,
      ibgeId: 2505600,
      name: 'Diamante',
    },
    {
      id: 2670,
      ibgeId: 2509008,
      name: 'Manaíra',
    },
  ],
  PE: [
    {
      id: 2162,
      ibgeId: 2611606,
      name: 'Recife',
    },
    {
      id: 2163,
      ibgeId: 2609600,
      name: 'Olinda',
    },
    {
      id: 2164,
      ibgeId: 2610707,
      name: 'Paulista',
    },
    {
      id: 2165,
      ibgeId: 2600054,
      name: 'Abreu e Lima',
    },
    {
      id: 2166,
      ibgeId: 2606804,
      name: 'Igarassu',
    },
    {
      id: 2167,
      ibgeId: 2601052,
      name: 'Araçoiaba',
    },
    {
      id: 2168,
      ibgeId: 2607752,
      name: 'Itapissuma',
    },
    {
      id: 2169,
      ibgeId: 2607604,
      name: 'Ilha de Itamaracá',
    },
    {
      id: 2170,
      ibgeId: 2605459,
      name: 'Fernando de Noronha',
    },
    {
      id: 2171,
      ibgeId: 2607901,
      name: 'Jaboatão dos Guararapes',
    },
    {
      id: 2172,
      ibgeId: 2602902,
      name: 'Cabo de Santo Agostinho',
    },
    {
      id: 2173,
      ibgeId: 2613701,
      name: 'São Lourenço da Mata',
    },
    {
      id: 2174,
      ibgeId: 2603454,
      name: 'Camaragibe',
    },
    {
      id: 2175,
      ibgeId: 2609402,
      name: 'Moreno',
    },
    {
      id: 2176,
      ibgeId: 2604106,
      name: 'Caruaru',
    },
    {
      id: 2177,
      ibgeId: 2611705,
      name: 'Riacho das Almas',
    },
    {
      id: 2178,
      ibgeId: 2615409,
      name: 'Toritama',
    },
    {
      id: 2179,
      ibgeId: 2613107,
      name: 'São Caitano',
    },
    {
      id: 2180,
      ibgeId: 2614709,
      name: 'Tacaimbó',
    },
    {
      id: 2181,
      ibgeId: 2601706,
      name: 'Belo Jardim',
    },
    {
      id: 2182,
      ibgeId: 2602605,
      name: 'Brejo da Madre de Deus',
    },
    {
      id: 2183,
      ibgeId: 2608008,
      name: 'Jataúba',
    },
    {
      id: 2184,
      ibgeId: 2612505,
      name: 'Santa Cruz do Capibaribe',
    },
    {
      id: 2185,
      ibgeId: 2610905,
      name: 'Pesqueira',
    },
    {
      id: 2186,
      ibgeId: 2611200,
      name: 'Poção',
    },
    {
      id: 2187,
      ibgeId: 2612406,
      name: 'Sanharó',
    },
    {
      id: 2188,
      ibgeId: 2600609,
      name: 'Alagoinha',
    },
    {
      id: 2189,
      ibgeId: 2616001,
      name: 'Venturosa',
    },
    {
      id: 2190,
      ibgeId: 2610806,
      name: 'Pedra',
    },
    {
      id: 2191,
      ibgeId: 2606002,
      name: 'Garanhuns',
    },
    {
      id: 2192,
      ibgeId: 2615102,
      name: 'Terezinha',
    },
    {
      id: 2193,
      ibgeId: 2610103,
      name: 'Palmeirina',
    },
    {
      id: 2194,
      ibgeId: 2604700,
      name: 'Correntes',
    },
    {
      id: 2195,
      ibgeId: 2608602,
      name: 'Lagoa do Ouro',
    },
    {
      id: 2196,
      ibgeId: 2602407,
      name: 'Brejão',
    },
    {
      id: 2197,
      ibgeId: 2602100,
      name: 'Bom Conselho',
    },
    {
      id: 2198,
      ibgeId: 2600500,
      name: 'Águas Belas',
    },
    {
      id: 2199,
      ibgeId: 2606507,
      name: 'Iati',
    },
    {
      id: 2200,
      ibgeId: 2612307,
      name: 'Saloá',
    },
    {
      id: 2201,
      ibgeId: 2610301,
      name: 'Paranatama',
    },
    {
      id: 2202,
      ibgeId: 2603207,
      name: 'Caetés',
    },
    {
      id: 2203,
      ibgeId: 2603801,
      name: 'Capoeiras',
    },
    {
      id: 2204,
      ibgeId: 2613008,
      name: 'São Bento do Una',
    },
    {
      id: 2205,
      ibgeId: 2603306,
      name: 'Calçado',
    },
    {
      id: 2206,
      ibgeId: 2603108,
      name: 'Cachoeirinha',
    },
    {
      id: 2207,
      ibgeId: 2608800,
      name: 'Lajedo',
    },
    {
      id: 2208,
      ibgeId: 2606705,
      name: 'Ibirajuba',
    },
    {
      id: 2209,
      ibgeId: 2608305,
      name: 'Jupi',
    },
    {
      id: 2210,
      ibgeId: 2608255,
      name: 'Jucati',
    },
    {
      id: 2211,
      ibgeId: 2604205,
      name: 'Catende',
    },
    {
      id: 2212,
      ibgeId: 2609204,
      name: 'Maraial',
    },
    {
      id: 2213,
      ibgeId: 2607950,
      name: 'Jaqueira',
    },
    {
      id: 2214,
      ibgeId: 2612901,
      name: 'São Benedito do Sul',
    },
    {
      id: 2215,
      ibgeId: 2611507,
      name: 'Quipapá',
    },
    {
      id: 2216,
      ibgeId: 2603702,
      name: 'Canhotinho',
    },
    {
      id: 2217,
      ibgeId: 2601003,
      name: 'Angelim',
    },
    {
      id: 2218,
      ibgeId: 2613206,
      name: 'São João',
    },
    {
      id: 2219,
      ibgeId: 2601508,
      name: 'Belém de Maria',
    },
    {
      id: 2220,
      ibgeId: 2608701,
      name: 'Lagoa dos Gatos',
    },
    {
      id: 2221,
      ibgeId: 2605004,
      name: 'Cupira',
    },
    {
      id: 2222,
      ibgeId: 2610202,
      name: 'Panelas',
    },
    {
      id: 2223,
      ibgeId: 2608404,
      name: 'Jurema',
    },
    {
      id: 2224,
      ibgeId: 2600807,
      name: 'Altinho',
    },
    {
      id: 2225,
      ibgeId: 2600302,
      name: 'Agrestina',
    },
    {
      id: 2226,
      ibgeId: 2605202,
      name: 'Escada',
    },
    {
      id: 2227,
      ibgeId: 2611408,
      name: 'Primavera',
    },
    {
      id: 2228,
      ibgeId: 2600906,
      name: 'Amaraji',
    },
    {
      id: 2229,
      ibgeId: 2611804,
      name: 'Ribeirão',
    },
    {
      id: 2230,
      ibgeId: 2604809,
      name: 'Cortês',
    },
    {
      id: 2231,
      ibgeId: 2605905,
      name: 'Gameleira',
    },
    {
      id: 2232,
      ibgeId: 2608206,
      name: 'Joaquim Nabuco',
    },
    {
      id: 2233,
      ibgeId: 2610004,
      name: 'Palmares',
    },
    {
      id: 2234,
      ibgeId: 2600401,
      name: 'Água Preta',
    },
    {
      id: 2235,
      ibgeId: 2616506,
      name: 'Xexéu',
    },
    {
      id: 2236,
      ibgeId: 2601409,
      name: 'Barreiros',
    },
    {
      id: 2237,
      ibgeId: 2613404,
      name: 'São José da Coroa Grande',
    },
    {
      id: 2238,
      ibgeId: 2611903,
      name: 'Rio Formoso',
    },
    {
      id: 2239,
      ibgeId: 2614857,
      name: 'Tamandaré',
    },
    {
      id: 2240,
      ibgeId: 2614204,
      name: 'Sirinhaém',
    },
    {
      id: 2241,
      ibgeId: 2607208,
      name: 'Ipojuca',
    },
    {
      id: 2242,
      ibgeId: 2616407,
      name: 'Vitória de Santo Antão',
    },
    {
      id: 2243,
      ibgeId: 2606101,
      name: 'Glória do Goitá',
    },
    {
      id: 2244,
      ibgeId: 2611309,
      name: 'Pombos',
    },
    {
      id: 2245,
      ibgeId: 2604502,
      name: 'Chã Grande',
    },
    {
      id: 2246,
      ibgeId: 2606408,
      name: 'Gravatá',
    },
    {
      id: 2247,
      ibgeId: 2610509,
      name: 'Passira',
    },
    {
      id: 2248,
      ibgeId: 2604908,
      name: 'Cumaru',
    },
    {
      id: 2249,
      ibgeId: 2601904,
      name: 'Bezerros',
    },
    {
      id: 2250,
      ibgeId: 2603504,
      name: 'Camocim de São Félix',
    },
    {
      id: 2251,
      ibgeId: 2613305,
      name: 'São Joaquim do Monte',
    },
    {
      id: 2252,
      ibgeId: 2612109,
      name: 'Salgadinho',
    },
    {
      id: 2253,
      ibgeId: 2602308,
      name: 'Bonito',
    },
    {
      id: 2254,
      ibgeId: 2601300,
      name: 'Barra de Guabiraba',
    },
    {
      id: 2255,
      ibgeId: 2612000,
      name: 'Sairé',
    },
    {
      id: 2256,
      ibgeId: 2608909,
      name: 'Limoeiro',
    },
    {
      id: 2257,
      ibgeId: 2605400,
      name: 'Feira Nova',
    },
    {
      id: 2258,
      ibgeId: 2608107,
      name: 'João Alfredo',
    },
    {
      id: 2259,
      ibgeId: 2602209,
      name: 'Bom Jardim',
    },
    {
      id: 2260,
      ibgeId: 2609105,
      name: 'Machados',
    },
    {
      id: 2261,
      ibgeId: 2609709,
      name: 'Orobó',
    },
    {
      id: 2262,
      ibgeId: 2614501,
      name: 'Surubim',
    },
    {
      id: 2263,
      ibgeId: 2604155,
      name: 'Casinhas',
    },
    {
      id: 2264,
      ibgeId: 2616183,
      name: 'Vertente do Lério',
    },
    {
      id: 2265,
      ibgeId: 2612703,
      name: 'Santa Maria do Cambucá',
    },
    {
      id: 2266,
      ibgeId: 2616209,
      name: 'Vertentes',
    },
    {
      id: 2267,
      ibgeId: 2605806,
      name: 'Frei Miguelinho',
    },
    {
      id: 2268,
      ibgeId: 2615003,
      name: 'Taquaritinga do Norte',
    },
    {
      id: 2269,
      ibgeId: 2609501,
      name: 'Nazaré da Mata',
    },
    {
      id: 2270,
      ibgeId: 2615508,
      name: 'Tracunhaém',
    },
    {
      id: 2271,
      ibgeId: 2604007,
      name: 'Carpina',
    },
    {
      id: 2272,
      ibgeId: 2608453,
      name: 'Lagoa do Carro',
    },
    {
      id: 2273,
      ibgeId: 2610608,
      name: 'Paudalho',
    },
    {
      id: 2274,
      ibgeId: 2604403,
      name: 'Chã de Alegria',
    },
    {
      id: 2275,
      ibgeId: 2608503,
      name: 'Lagoa do Itaenga',
    },
    {
      id: 2276,
      ibgeId: 2602704,
      name: 'Buenos Aires',
    },
    {
      id: 2277,
      ibgeId: 2616308,
      name: 'Vicência',
    },
    {
      id: 2278,
      ibgeId: 2613800,
      name: 'São Vicente Ferrer',
    },
    {
      id: 2279,
      ibgeId: 2609006,
      name: 'Macaparana',
    },
    {
      id: 2280,
      ibgeId: 2615300,
      name: 'Timbaúba',
    },
    {
      id: 2281,
      ibgeId: 2605509,
      name: 'Ferreiros',
    },
    {
      id: 2282,
      ibgeId: 2600708,
      name: 'Aliança',
    },
    {
      id: 2283,
      ibgeId: 2606200,
      name: 'Goiana',
    },
    {
      id: 2284,
      ibgeId: 2607653,
      name: 'Itambé',
    },
    {
      id: 2285,
      ibgeId: 2603603,
      name: 'Camutanga',
    },
    {
      id: 2286,
      ibgeId: 2604601,
      name: 'Condado',
    },
    {
      id: 2287,
      ibgeId: 2607802,
      name: 'Itaquitinga',
    },
    {
      id: 2288,
      ibgeId: 2612208,
      name: 'Salgueiro',
    },
    {
      id: 2289,
      ibgeId: 2616100,
      name: 'Verdejante',
    },
    {
      id: 2290,
      ibgeId: 2604304,
      name: 'Cedro',
    },
    {
      id: 2291,
      ibgeId: 2614006,
      name: 'Serrita',
    },
    {
      id: 2292,
      ibgeId: 2614303,
      name: 'Moreilândia',
    },
    {
      id: 2293,
      ibgeId: 2606309,
      name: 'Granito',
    },
    {
      id: 2294,
      ibgeId: 2610400,
      name: 'Parnamirim',
    },
    {
      id: 2295,
      ibgeId: 2609808,
      name: 'Orocó',
    },
    {
      id: 2296,
      ibgeId: 2603009,
      name: 'Cabrobó',
    },
    {
      id: 2297,
      ibgeId: 2615201,
      name: 'Terra Nova',
    },
    {
      id: 2298,
      ibgeId: 2609907,
      name: 'Ouricuri',
    },
    {
      id: 2299,
      ibgeId: 2612554,
      name: 'Santa Filomena',
    },
    {
      id: 2300,
      ibgeId: 2612455,
      name: 'Santa Cruz',
    },
    {
      id: 2301,
      ibgeId: 2602001,
      name: 'Bodocó',
    },
    {
      id: 2302,
      ibgeId: 2605301,
      name: 'Exu',
    },
    {
      id: 2303,
      ibgeId: 2615607,
      name: 'Trindade',
    },
    {
      id: 2304,
      ibgeId: 2607307,
      name: 'Ipubi',
    },
    {
      id: 2305,
      ibgeId: 2601102,
      name: 'Araripina',
    },
    {
      id: 2306,
      ibgeId: 2611101,
      name: 'Petrolina',
    },
    {
      id: 2307,
      ibgeId: 2605152,
      name: 'Dormentes',
    },
    {
      id: 2308,
      ibgeId: 2600203,
      name: 'Afrânio',
    },
    {
      id: 2309,
      ibgeId: 2612604,
      name: 'Santa Maria da Boa Vista',
    },
    {
      id: 2310,
      ibgeId: 2608750,
      name: 'Lagoa Grande',
    },
    {
      id: 2311,
      ibgeId: 2605707,
      name: 'Floresta',
    },
    {
      id: 2312,
      ibgeId: 2603926,
      name: 'Carnaubeira da Penha',
    },
    {
      id: 2313,
      ibgeId: 2607406,
      name: 'Itacuruba',
    },
    {
      id: 2314,
      ibgeId: 2601607,
      name: 'Belém do São Francisco',
    },
    {
      id: 2315,
      ibgeId: 2611002,
      name: 'Petrolândia',
    },
    {
      id: 2316,
      ibgeId: 2608057,
      name: 'Jatobá',
    },
    {
      id: 2317,
      ibgeId: 2614808,
      name: 'Tacaratu',
    },
    {
      id: 2318,
      ibgeId: 2601201,
      name: 'Arcoverde',
    },
    {
      id: 2319,
      ibgeId: 2602803,
      name: 'Buíque',
    },
    {
      id: 2320,
      ibgeId: 2615805,
      name: 'Tupanatinga',
    },
    {
      id: 2321,
      ibgeId: 2607505,
      name: 'Itaíba',
    },
    {
      id: 2322,
      ibgeId: 2607000,
      name: 'Inajá',
    },
    {
      id: 2323,
      ibgeId: 2609154,
      name: 'Manari',
    },
    {
      id: 2324,
      ibgeId: 2606606,
      name: 'Ibimirim',
    },
    {
      id: 2325,
      ibgeId: 2614105,
      name: 'Sertânia',
    },
    {
      id: 2326,
      ibgeId: 2605103,
      name: 'Custódia',
    },
    {
      id: 2327,
      ibgeId: 2601805,
      name: 'Betânia',
    },
    {
      id: 2328,
      ibgeId: 2613602,
      name: 'São José do Egito',
    },
    {
      id: 2329,
      ibgeId: 2607703,
      name: 'Itapetim',
    },
    {
      id: 2330,
      ibgeId: 2602506,
      name: 'Brejinho',
    },
    {
      id: 2331,
      ibgeId: 2612802,
      name: 'Santa Terezinha',
    },
    {
      id: 2332,
      ibgeId: 2615904,
      name: 'Tuparetama',
    },
    {
      id: 2333,
      ibgeId: 2614600,
      name: 'Tabira',
    },
    {
      id: 2334,
      ibgeId: 2614402,
      name: 'Solidão',
    },
    {
      id: 2335,
      ibgeId: 2600104,
      name: 'Afogados da Ingazeira',
    },
    {
      id: 2336,
      ibgeId: 2603900,
      name: 'Carnaíba',
    },
    {
      id: 2337,
      ibgeId: 2611533,
      name: 'Quixabá',
    },
    {
      id: 2338,
      ibgeId: 2607109,
      name: 'Ingazeira',
    },
    {
      id: 2339,
      ibgeId: 2606903,
      name: 'Iguaraci',
    },
    {
      id: 2340,
      ibgeId: 2605608,
      name: 'Flores',
    },
    {
      id: 2341,
      ibgeId: 2615706,
      name: 'Triunfo',
    },
    {
      id: 2342,
      ibgeId: 2612471,
      name: 'Santa Cruz da Baixa Verde',
    },
    {
      id: 2343,
      ibgeId: 2613909,
      name: 'Serra Talhada',
    },
    {
      id: 2344,
      ibgeId: 2603405,
      name: 'Calumbi',
    },
    {
      id: 2345,
      ibgeId: 2613503,
      name: 'São José do Belmonte',
    },
    {
      id: 2346,
      ibgeId: 2609303,
      name: 'Mirandiba',
    },
  ],
  PI: [
    {
      id: 3022,
      ibgeId: 2211001,
      name: 'Teresina',
    },
    {
      id: 3023,
      ibgeId: 2201200,
      name: 'Barras',
    },
    {
      id: 3024,
      ibgeId: 2202059,
      name: 'Cabeceiras do Piauí',
    },
    {
      id: 3025,
      ibgeId: 2201770,
      name: 'Boa Hora',
    },
    {
      id: 3026,
      ibgeId: 2205508,
      name: 'José de Freitas',
    },
    {
      id: 3027,
      ibgeId: 2211100,
      name: 'União',
    },
    {
      id: 3028,
      ibgeId: 2206209,
      name: 'Miguel Alves',
    },
    {
      id: 3029,
      ibgeId: 2205557,
      name: 'Lagoa Alegre',
    },
    {
      id: 3030,
      ibgeId: 2206803,
      name: 'Nossa Senhora dos Remédios',
    },
    {
      id: 3031,
      ibgeId: 2208502,
      name: 'Porto',
    },
    {
      id: 3032,
      ibgeId: 2202174,
      name: 'Campo Largo do Piauí',
    },
    {
      id: 3033,
      ibgeId: 2206100,
      name: 'Matias Olímpio',
    },
    {
      id: 3034,
      ibgeId: 2209971,
      name: 'São João do Arraial',
    },
    {
      id: 3035,
      ibgeId: 2205805,
      name: 'Luzilândia',
    },
    {
      id: 3036,
      ibgeId: 2205458,
      name: 'Joca Marques',
    },
    {
      id: 3037,
      ibgeId: 2205854,
      name: 'Madeiro',
    },
    {
      id: 3038,
      ibgeId: 2205409,
      name: 'Joaquim Pires',
    },
    {
      id: 3039,
      ibgeId: 2206696,
      name: 'Murici dos Portelas',
    },
    {
      id: 3040,
      ibgeId: 2206670,
      name: 'Morro do Chapéu do Piauí',
    },
    {
      id: 3041,
      ibgeId: 2203701,
      name: 'Esperantina',
    },
    {
      id: 3042,
      ibgeId: 2201507,
      name: 'Batalha',
    },
    {
      id: 3043,
      ibgeId: 2207702,
      name: 'Parnaíba',
    },
    {
      id: 3044,
      ibgeId: 2205706,
      name: 'Luís Correia',
    },
    {
      id: 3045,
      ibgeId: 2202083,
      name: 'Cajueiro da Praia',
    },
    {
      id: 3046,
      ibgeId: 2201919,
      name: 'Bom Princípio do Piauí',
    },
    {
      id: 3047,
      ibgeId: 2202653,
      name: 'Caxingó',
    },
    {
      id: 3048,
      ibgeId: 2202000,
      name: 'Buriti dos Lopes',
    },
    {
      id: 3049,
      ibgeId: 2202539,
      name: 'Caraúbas do Piauí',
    },
    {
      id: 3050,
      ibgeId: 2202703,
      name: 'Cocal',
    },
    {
      id: 3051,
      ibgeId: 2202729,
      name: 'Cocal dos Alves',
    },
    {
      id: 3052,
      ibgeId: 2208304,
      name: 'Piracuruca',
    },
    {
      id: 3053,
      ibgeId: 2209872,
      name: 'São João da Fronteira',
    },
    {
      id: 3054,
      ibgeId: 2210052,
      name: 'São José do Divino',
    },
    {
      id: 3055,
      ibgeId: 2203420,
      name: 'Domingos Mourão',
    },
    {
      id: 3056,
      ibgeId: 2206357,
      name: 'Milton Brandão',
    },
    {
      id: 3057,
      ibgeId: 2207900,
      name: 'Pedro II',
    },
    {
      id: 3058,
      ibgeId: 2205573,
      name: 'Lagoa de São Francisco',
    },
    {
      id: 3059,
      ibgeId: 2208403,
      name: 'Piripiri',
    },
    {
      id: 3060,
      ibgeId: 2201960,
      name: 'Brasileira',
    },
    {
      id: 3061,
      ibgeId: 2202406,
      name: 'Capitão de Campos',
    },
    {
      id: 3062,
      ibgeId: 2205276,
      name: 'Jatobá do Piauí',
    },
    {
      id: 3063,
      ibgeId: 2202711,
      name: 'Cocal de Telha',
    },
    {
      id: 3064,
      ibgeId: 2202208,
      name: 'Campo Maior',
    },
    {
      id: 3065,
      ibgeId: 2201945,
      name: 'Boqueirão do Piauí',
    },
    {
      id: 3066,
      ibgeId: 2210656,
      name: 'Sigefredo Pacheco',
    },
    {
      id: 3067,
      ibgeId: 2206753,
      name: 'Nossa Senhora de Nazaré',
    },
    {
      id: 3068,
      ibgeId: 2200400,
      name: 'Altos',
    },
    {
      id: 3069,
      ibgeId: 2207793,
      name: "Pau D'Arco do Piauí",
    },
    {
      id: 3070,
      ibgeId: 2211308,
      name: 'Valença do Piauí',
    },
    {
      id: 3071,
      ibgeId: 2205599,
      name: 'Lagoa do Sítio',
    },
    {
      id: 3072,
      ibgeId: 2200905,
      name: 'Aroazes',
    },
    {
      id: 3073,
      ibgeId: 2209153,
      name: 'Santa Cruz dos Milagres',
    },
    {
      id: 3074,
      ibgeId: 2208106,
      name: 'Pimenteiras',
    },
    {
      id: 3075,
      ibgeId: 2203503,
      name: 'Elesbão Veloso',
    },
    {
      id: 3076,
      ibgeId: 2210409,
      name: 'São Miguel do Tapuio',
    },
    {
      id: 3077,
      ibgeId: 2201051,
      name: 'Assunção do Piauí',
    },
    {
      id: 3078,
      ibgeId: 2202737,
      name: 'Coivaras',
    },
    {
      id: 3079,
      ibgeId: 2202604,
      name: 'Castelo do Piauí',
    },
    {
      id: 3080,
      ibgeId: 2205516,
      name: 'Juazeiro do Piauí',
    },
    {
      id: 3081,
      ibgeId: 2202026,
      name: 'Buriti dos Montes',
    },
    {
      id: 3082,
      ibgeId: 2209906,
      name: 'São João da Serra',
    },
    {
      id: 3083,
      ibgeId: 2200301,
      name: 'Alto Longá',
    },
    {
      id: 3084,
      ibgeId: 2206951,
      name: 'Novo Santo Antônio',
    },
    {
      id: 3085,
      ibgeId: 2208601,
      name: 'Prata do Piauí',
    },
    {
      id: 3086,
      ibgeId: 2209609,
      name: 'São Félix do Piauí',
    },
    {
      id: 3087,
      ibgeId: 2210383,
      name: 'São Miguel da Baixa Grande',
    },
    {
      id: 3088,
      ibgeId: 2201606,
      name: 'Beneditinos',
    },
    {
      id: 3089,
      ibgeId: 2205581,
      name: 'Lagoa do Piauí',
    },
    {
      id: 3090,
      ibgeId: 2203305,
      name: 'Demerval Lobão',
    },
    {
      id: 3091,
      ibgeId: 2207751,
      name: 'Passagem Franca do Piauí',
    },
    {
      id: 3092,
      ibgeId: 2200509,
      name: 'Amarante',
    },
    {
      id: 3093,
      ibgeId: 2200608,
      name: 'Angical do Piauí',
    },
    {
      id: 3094,
      ibgeId: 2206720,
      name: 'Nazária',
    },
    {
      id: 3095,
      ibgeId: 2207504,
      name: 'Palmeirais',
    },
    {
      id: 3096,
      ibgeId: 2210508,
      name: 'São Pedro do Piauí',
    },
    {
      id: 3097,
      ibgeId: 2209807,
      name: 'São Gonçalo do Piauí',
    },
    {
      id: 3098,
      ibgeId: 2209450,
      name: 'Santo Antônio dos Milagres',
    },
    {
      id: 3099,
      ibgeId: 2200103,
      name: 'Agricolândia',
    },
    {
      id: 3100,
      ibgeId: 2206308,
      name: 'Miguel Leão',
    },
    {
      id: 3101,
      ibgeId: 2206407,
      name: 'Monsenhor Gil',
    },
    {
      id: 3102,
      ibgeId: 2203255,
      name: 'Curralinhos',
    },
    {
      id: 3103,
      ibgeId: 2201408,
      name: 'Barro Duro',
    },
    {
      id: 3104,
      ibgeId: 2200202,
      name: 'Água Branca',
    },
    {
      id: 3105,
      ibgeId: 2205540,
      name: 'Lagoinha do Piauí',
    },
    {
      id: 3106,
      ibgeId: 2207108,
      name: "Olho D'Água do Piauí",
    },
    {
      id: 3107,
      ibgeId: 2204600,
      name: 'Hugo Napoleão',
    },
    {
      id: 3108,
      ibgeId: 2204105,
      name: 'Francisco Ayres',
    },
    {
      id: 3109,
      ibgeId: 2201002,
      name: 'Arraial',
    },
    {
      id: 3110,
      ibgeId: 2208809,
      name: 'Regeneração',
    },
    {
      id: 3111,
      ibgeId: 2205250,
      name: 'Jardim do Mulato',
    },
    {
      id: 3112,
      ibgeId: 2207009,
      name: 'Oeiras',
    },
    {
      id: 3113,
      ibgeId: 2209955,
      name: 'São João da Varjota',
    },
    {
      id: 3114,
      ibgeId: 2210979,
      name: 'Tanque do Piauí',
    },
    {
      id: 3115,
      ibgeId: 2202075,
      name: 'Cajazeiras do Piauí',
    },
    {
      id: 3116,
      ibgeId: 2202778,
      name: 'Colônia do Piauí',
    },
    {
      id: 3117,
      ibgeId: 2209377,
      name: 'Santa Rosa do Piauí',
    },
    {
      id: 3118,
      ibgeId: 2204006,
      name: 'Francinópolis',
    },
    {
      id: 3119,
      ibgeId: 2211407,
      name: 'Várzea Grande',
    },
    {
      id: 3120,
      ibgeId: 2201176,
      name: "Barra D'Alcântara",
    },
    {
      id: 3121,
      ibgeId: 2206902,
      name: 'Novo Oriente do Piauí',
    },
    {
      id: 3122,
      ibgeId: 2204709,
      name: 'Inhuma',
    },
    {
      id: 3123,
      ibgeId: 2204808,
      name: 'Ipiranga do Piauí',
    },
    {
      id: 3124,
      ibgeId: 2209104,
      name: 'Santa Cruz do Piauí',
    },
    {
      id: 3125,
      ibgeId: 2211704,
      name: 'Wall Ferraz',
    },
    {
      id: 3126,
      ibgeId: 2209708,
      name: 'São Francisco do Piauí',
    },
    {
      id: 3127,
      ibgeId: 2210102,
      name: 'São José do Peixe',
    },
    {
      id: 3128,
      ibgeId: 2210391,
      name: 'São Miguel do Fidalgo',
    },
    {
      id: 3129,
      ibgeId: 2209500,
      name: 'Santo Inácio do Piauí',
    },
    {
      id: 3130,
      ibgeId: 2203859,
      name: 'Floresta do Piauí',
    },
    {
      id: 3131,
      ibgeId: 2205003,
      name: 'Itainópolis',
    },
    {
      id: 3132,
      ibgeId: 2211506,
      name: 'Vera Mendes',
    },
    {
      id: 3133,
      ibgeId: 2204907,
      name: 'Isaías Coelho',
    },
    {
      id: 3134,
      ibgeId: 2206050,
      name: 'Massapê do Piauí',
    },
    {
      id: 3135,
      ibgeId: 2205201,
      name: 'Jaicós',
    },
    {
      id: 3136,
      ibgeId: 2202133,
      name: 'Campo Grande do Piauí',
    },
    {
      id: 3137,
      ibgeId: 2207777,
      name: 'Patos do Piauí',
    },
    {
      id: 3138,
      ibgeId: 2210706,
      name: 'Simões',
    },
    {
      id: 3139,
      ibgeId: 2202554,
      name: 'Caridade do Piauí',
    },
    {
      id: 3140,
      ibgeId: 2203271,
      name: 'Curral Novo do Piauí',
    },
    {
      id: 3141,
      ibgeId: 2208007,
      name: 'Picos',
    },
    {
      id: 3142,
      ibgeId: 2210938,
      name: 'Sussuapara',
    },
    {
      id: 3143,
      ibgeId: 2200954,
      name: 'Aroeiras do Itaim',
    },
    {
      id: 3144,
      ibgeId: 2204352,
      name: 'Geminiano',
    },
    {
      id: 3145,
      ibgeId: 2209351,
      name: 'Santana do Piauí',
    },
    {
      id: 3146,
      ibgeId: 2207553,
      name: 'Paquetá',
    },
    {
      id: 3147,
      ibgeId: 2203404,
      name: 'Dom Expedito Lopes',
    },
    {
      id: 3148,
      ibgeId: 2210201,
      name: 'São José do Piauí',
    },
    {
      id: 3149,
      ibgeId: 2201804,
      name: 'Bocaina',
    },
    {
      id: 3150,
      ibgeId: 2209856,
      name: 'São João da Canabrava',
    },
    {
      id: 3151,
      ibgeId: 2210375,
      name: 'São Luís do Piauí',
    },
    {
      id: 3152,
      ibgeId: 2209401,
      name: 'Santo Antônio de Lisboa',
    },
    {
      id: 3153,
      ibgeId: 2204204,
      name: 'Francisco Santos',
    },
    {
      id: 3154,
      ibgeId: 2206506,
      name: 'Monsenhor Hipólito',
    },
    {
      id: 3155,
      ibgeId: 2200251,
      name: 'Alagoinha do Piauí',
    },
    {
      id: 3156,
      ibgeId: 2208205,
      name: 'Pio IX',
    },
    {
      id: 3157,
      ibgeId: 2210300,
      name: 'São Julião',
    },
    {
      id: 3158,
      ibgeId: 2200277,
      name: 'Alegrete do Piauí',
    },
    {
      id: 3159,
      ibgeId: 2201572,
      name: 'Belém do Piauí',
    },
    {
      id: 3160,
      ibgeId: 2207207,
      name: 'Padre Marcos',
    },
    {
      id: 3161,
      ibgeId: 2204154,
      name: 'Francisco Macedo',
    },
    {
      id: 3162,
      ibgeId: 2205953,
      name: 'Marcolândia',
    },
    {
      id: 3163,
      ibgeId: 2211605,
      name: 'Vila Nova do Piauí',
    },
    {
      id: 3164,
      ibgeId: 2204303,
      name: 'Fronteiras',
    },
    {
      id: 3165,
      ibgeId: 2202091,
      name: 'Caldeirão Grande do Piauí',
    },
    {
      id: 3166,
      ibgeId: 2210805,
      name: 'Simplício Mendes',
    },
    {
      id: 3167,
      ibgeId: 2201556,
      name: 'Bela Vista do Piauí',
    },
    {
      id: 3168,
      ibgeId: 2207306,
      name: 'Paes Landim',
    },
    {
      id: 3169,
      ibgeId: 2210904,
      name: 'Socorro do Piauí',
    },
    {
      id: 3170,
      ibgeId: 2208874,
      name: 'Ribeira do Piauí',
    },
    {
      id: 3171,
      ibgeId: 2207934,
      name: 'Pedro Laurentino',
    },
    {
      id: 3172,
      ibgeId: 2202109,
      name: 'Campinas do Piauí',
    },
    {
      id: 3173,
      ibgeId: 2202802,
      name: 'Conceição do Canindé',
    },
    {
      id: 3174,
      ibgeId: 2209658,
      name: 'São Francisco de Assis do Piauí',
    },
    {
      id: 3175,
      ibgeId: 2200053,
      name: 'Acauã',
    },
    {
      id: 3176,
      ibgeId: 2207801,
      name: 'Paulistana',
    },
    {
      id: 3177,
      ibgeId: 2201739,
      name: 'Betânia do Piauí',
    },
    {
      id: 3178,
      ibgeId: 2205151,
      name: 'Jacobina do Piauí',
    },
    {
      id: 3179,
      ibgeId: 2208650,
      name: 'Queimada Nova',
    },
    {
      id: 3180,
      ibgeId: 2210003,
      name: 'São João do Piauí',
    },
    {
      id: 3181,
      ibgeId: 2202455,
      name: 'Capitão Gervásio Oliveira',
    },
    {
      id: 3182,
      ibgeId: 2207959,
      name: 'Nova Santa Rita',
    },
    {
      id: 3183,
      ibgeId: 2205359,
      name: 'João Costa',
    },
    {
      id: 3184,
      ibgeId: 2202117,
      name: 'Campo Alegre do Fidalgo',
    },
    {
      id: 3185,
      ibgeId: 2205565,
      name: 'Lagoa do Barro do Piauí',
    },
    {
      id: 3186,
      ibgeId: 2210607,
      name: 'São Raimundo Nonato',
    },
    {
      id: 3187,
      ibgeId: 2211357,
      name: 'Várzea Branca',
    },
    {
      id: 3188,
      ibgeId: 2201929,
      name: 'Bonfim do Piauí',
    },
    {
      id: 3189,
      ibgeId: 2210359,
      name: 'São Lourenço do Piauí',
    },
    {
      id: 3190,
      ibgeId: 2200707,
      name: 'Anísio de Abreu',
    },
    {
      id: 3191,
      ibgeId: 2205532,
      name: 'Jurema',
    },
    {
      id: 3192,
      ibgeId: 2209559,
      name: 'São Braz do Piauí',
    },
    {
      id: 3193,
      ibgeId: 2203354,
      name: 'Dirceu Arcoverde',
    },
    {
      id: 3194,
      ibgeId: 2203750,
      name: 'Fartura do Piauí',
    },
    {
      id: 3195,
      ibgeId: 2203453,
      name: 'Dom Inocêncio',
    },
    {
      id: 3196,
      ibgeId: 2202851,
      name: 'Coronel José Dias',
    },
    {
      id: 3197,
      ibgeId: 2202505,
      name: 'Caracol',
    },
    {
      id: 3198,
      ibgeId: 2204550,
      name: 'Guaribas',
    },
    {
      id: 3199,
      ibgeId: 2203909,
      name: 'Floriano',
    },
    {
      id: 3200,
      ibgeId: 2203800,
      name: 'Flores do Piauí',
    },
    {
      id: 3201,
      ibgeId: 2205102,
      name: 'Itaueira',
    },
    {
      id: 3202,
      ibgeId: 2206704,
      name: 'Nazaré do Piauí',
    },
    {
      id: 3203,
      ibgeId: 2205300,
      name: 'Jerumenha',
    },
    {
      id: 3204,
      ibgeId: 2202251,
      name: 'Canavieira',
    },
    {
      id: 3205,
      ibgeId: 2209005,
      name: 'Rio Grande do Piauí',
    },
    {
      id: 3206,
      ibgeId: 2207850,
      name: 'Pavussu',
    },
    {
      id: 3207,
      ibgeId: 2204501,
      name: 'Guadalupe',
    },
    {
      id: 3208,
      ibgeId: 2206001,
      name: 'Marcos Parente',
    },
    {
      id: 3209,
      ibgeId: 2205607,
      name: 'Landri Sales',
    },
    {
      id: 3210,
      ibgeId: 2200806,
      name: 'Antônio Almeida',
    },
    {
      id: 3211,
      ibgeId: 2208551,
      name: 'Porto Alegre do Piauí',
    },
    {
      id: 3212,
      ibgeId: 2211209,
      name: 'Uruçuí',
    },
    {
      id: 3213,
      ibgeId: 2208908,
      name: 'Ribeiro Gonçalves',
    },
    {
      id: 3214,
      ibgeId: 2201150,
      name: 'Baixa Grande do Ribeiro',
    },
    {
      id: 3215,
      ibgeId: 2201705,
      name: 'Bertolínia',
    },
    {
      id: 3216,
      ibgeId: 2210631,
      name: 'Sebastião Leal',
    },
    {
      id: 3217,
      ibgeId: 2205904,
      name: 'Manoel Emídio',
    },
    {
      id: 3218,
      ibgeId: 2203602,
      name: 'Eliseu Martins',
    },
    {
      id: 3219,
      ibgeId: 2202752,
      name: 'Colônia do Gurguéia',
    },
    {
      id: 3220,
      ibgeId: 2202307,
      name: 'Canto do Buriti',
    },
    {
      id: 3221,
      ibgeId: 2210953,
      name: 'Tamboril do Piauí',
    },
    {
      id: 3222,
      ibgeId: 2201988,
      name: 'Brejo do Piauí',
    },
    {
      id: 3223,
      ibgeId: 2207355,
      name: 'Pajeú do Piauí',
    },
    {
      id: 3224,
      ibgeId: 2201903,
      name: 'Bom Jesus',
    },
    {
      id: 3225,
      ibgeId: 2203230,
      name: 'Currais',
    },
    {
      id: 3226,
      ibgeId: 2209302,
      name: 'Santa Luz',
    },
    {
      id: 3227,
      ibgeId: 2208700,
      name: 'Redenção do Gurguéia',
    },
    {
      id: 3228,
      ibgeId: 2203107,
      name: 'Cristino Castro',
    },
    {
      id: 3229,
      ibgeId: 2200459,
      name: 'Alvorada do Gurguéia',
    },
    {
      id: 3230,
      ibgeId: 2207405,
      name: 'Palmeira do Piauí',
    },
    {
      id: 3231,
      ibgeId: 2204402,
      name: 'Gilbués',
    },
    {
      id: 3232,
      ibgeId: 2206605,
      name: 'Monte Alegre do Piauí',
    },
    {
      id: 3233,
      ibgeId: 2209203,
      name: 'Santa Filomena',
    },
    {
      id: 3234,
      ibgeId: 2203206,
      name: 'Curimatá',
    },
    {
      id: 3235,
      ibgeId: 2205524,
      name: 'Júlio Borges',
    },
    {
      id: 3236,
      ibgeId: 2201101,
      name: 'Avelino Lopes',
    },
    {
      id: 3237,
      ibgeId: 2206654,
      name: 'Morro Cabeça no Tempo',
    },
    {
      id: 3238,
      ibgeId: 2207603,
      name: 'Parnaguá',
    },
    {
      id: 3239,
      ibgeId: 2208858,
      name: 'Riacho Frio',
    },
    {
      id: 3240,
      ibgeId: 2202901,
      name: 'Corrente',
    },
    {
      id: 3241,
      ibgeId: 2210623,
      name: 'Sebastião Barros',
    },
    {
      id: 3242,
      ibgeId: 2201309,
      name: 'Barreiras do Piauí',
    },
    {
      id: 3243,
      ibgeId: 2209757,
      name: 'São Gonçalo do Gurguéia',
    },
    {
      id: 3244,
      ibgeId: 2203008,
      name: 'Cristalândia do Piauí',
    },
    {
      id: 5074,
      ibgeId: 2204659,
      name: 'Ilha Grande',
    },
  ],
  PR: [
    {
      id: 4378,
      ibgeId: 4106902,
      name: 'Curitiba',
    },
    {
      id: 4379,
      ibgeId: 4125506,
      name: 'São José dos Pinhais',
    },
    {
      id: 4380,
      ibgeId: 4127601,
      name: 'Tijucas do Sul',
    },
    {
      id: 4381,
      ibgeId: 4118204,
      name: 'Paranaguá',
    },
    {
      id: 4382,
      ibgeId: 4119954,
      name: 'Pontal do Paraná',
    },
    {
      id: 4383,
      ibgeId: 4115705,
      name: 'Matinhos',
    },
    {
      id: 4384,
      ibgeId: 4109609,
      name: 'Guaratuba',
    },
    {
      id: 4385,
      ibgeId: 4119509,
      name: 'Piraquara',
    },
    {
      id: 4386,
      ibgeId: 4119152,
      name: 'Pinhais',
    },
    {
      id: 4387,
      ibgeId: 4116208,
      name: 'Morretes',
    },
    {
      id: 4388,
      ibgeId: 4101200,
      name: 'Antonina',
    },
    {
      id: 4389,
      ibgeId: 4109500,
      name: 'Guaraqueçaba',
    },
    {
      id: 4390,
      ibgeId: 4105805,
      name: 'Colombo',
    },
    {
      id: 4391,
      ibgeId: 4120804,
      name: 'Quatro Barras',
    },
    {
      id: 4392,
      ibgeId: 4104006,
      name: 'Campina Grande do Sul',
    },
    {
      id: 4393,
      ibgeId: 4103107,
      name: 'Bocaiúva do Sul',
    },
    {
      id: 4394,
      ibgeId: 4127882,
      name: 'Tunas do Paraná',
    },
    {
      id: 4395,
      ibgeId: 4100202,
      name: 'Adrianópolis',
    },
    {
      id: 4396,
      ibgeId: 4100400,
      name: 'Almirante Tamandaré',
    },
    {
      id: 4397,
      ibgeId: 4104253,
      name: 'Campo Magro',
    },
    {
      id: 4398,
      ibgeId: 4122206,
      name: 'Rio Branco do Sul',
    },
    {
      id: 4399,
      ibgeId: 4111258,
      name: 'Itaperuçu',
    },
    {
      id: 4400,
      ibgeId: 4105201,
      name: 'Cerro Azul',
    },
    {
      id: 4401,
      ibgeId: 4128633,
      name: 'Doutor Ulysses',
    },
    {
      id: 4402,
      ibgeId: 4104204,
      name: 'Campo Largo',
    },
    {
      id: 4403,
      ibgeId: 4102307,
      name: 'Balsa Nova',
    },
    {
      id: 4404,
      ibgeId: 4101804,
      name: 'Araucária',
    },
    {
      id: 4405,
      ibgeId: 4106209,
      name: 'Contenda',
    },
    {
      id: 4406,
      ibgeId: 4113205,
      name: 'Lapa',
    },
    {
      id: 4407,
      ibgeId: 4114302,
      name: 'Mandirituba',
    },
    {
      id: 4408,
      ibgeId: 4107652,
      name: 'Fazenda Rio Grande',
    },
    {
      id: 4409,
      ibgeId: 4121208,
      name: 'Quitandinha',
    },
    {
      id: 4410,
      ibgeId: 4100301,
      name: 'Agudos do Sul',
    },
    {
      id: 4411,
      ibgeId: 4119103,
      name: 'Piên',
    },
    {
      id: 4412,
      ibgeId: 4104105,
      name: 'Campo do Tenente',
    },
    {
      id: 4413,
      ibgeId: 4122305,
      name: 'Rio Negro',
    },
    {
      id: 4414,
      ibgeId: 4125605,
      name: 'São Mateus do Sul',
    },
    {
      id: 4415,
      ibgeId: 4101309,
      name: 'Antônio Olinto',
    },
    {
      id: 4416,
      ibgeId: 4119905,
      name: 'Ponta Grossa',
    },
    {
      id: 4417,
      ibgeId: 4117701,
      name: 'Palmeira',
    },
    {
      id: 4418,
      ibgeId: 4120101,
      name: 'Porto Amazonas',
    },
    {
      id: 4419,
      ibgeId: 4104659,
      name: 'Carambeí',
    },
    {
      id: 4420,
      ibgeId: 4125100,
      name: 'São João do Triunfo',
    },
    {
      id: 4421,
      ibgeId: 4104907,
      name: 'Castro',
    },
    {
      id: 4422,
      ibgeId: 4112009,
      name: 'Jaguariaíva',
    },
    {
      id: 4423,
      ibgeId: 4126306,
      name: 'Sengés',
    },
    {
      id: 4424,
      ibgeId: 4119400,
      name: 'Piraí do Sul',
    },
    {
      id: 4425,
      ibgeId: 4110078,
      name: 'Imbaú',
    },
    {
      id: 4426,
      ibgeId: 4127106,
      name: 'Telêmaco Borba',
    },
    {
      id: 4427,
      ibgeId: 4107009,
      name: 'Curiúva',
    },
    {
      id: 4428,
      ibgeId: 4107751,
      name: 'Figueira',
    },
    {
      id: 4429,
      ibgeId: 4126207,
      name: 'Sapopema',
    },
    {
      id: 4430,
      ibgeId: 4127502,
      name: 'Tibagi',
    },
    {
      id: 4431,
      ibgeId: 4121703,
      name: 'Reserva',
    },
    {
      id: 4432,
      ibgeId: 4128534,
      name: 'Ventania',
    },
    {
      id: 4433,
      ibgeId: 4117305,
      name: 'Ortigueira',
    },
    {
      id: 4434,
      ibgeId: 4120606,
      name: 'Prudentópolis',
    },
    {
      id: 4435,
      ibgeId: 4110102,
      name: 'Imbituva',
    },
    {
      id: 4436,
      ibgeId: 4108957,
      name: 'Guamiranga',
    },
    {
      id: 4437,
      ibgeId: 4110508,
      name: 'Ipiranga',
    },
    {
      id: 4438,
      ibgeId: 4111407,
      name: 'Ivaí',
    },
    {
      id: 4439,
      ibgeId: 4104402,
      name: 'Cândido de Abreu',
    },
    {
      id: 4440,
      ibgeId: 4110706,
      name: 'Irati',
    },
    {
      id: 4441,
      ibgeId: 4127007,
      name: 'Teixeira Soares',
    },
    {
      id: 4442,
      ibgeId: 4107736,
      name: 'Fernandes Pinheiro',
    },
    {
      id: 4443,
      ibgeId: 4121505,
      name: 'Rebouças',
    },
    {
      id: 4444,
      ibgeId: 4122008,
      name: 'Rio Azul',
    },
    {
      id: 4445,
      ibgeId: 4113908,
      name: 'Mallet',
    },
    {
      id: 4446,
      ibgeId: 4128203,
      name: 'União da Vitória',
    },
    {
      id: 4447,
      ibgeId: 4120309,
      name: 'Porto Vitória',
    },
    {
      id: 4448,
      ibgeId: 4106803,
      name: 'Cruz Machado',
    },
    {
      id: 4449,
      ibgeId: 4118600,
      name: 'Paula Freitas',
    },
    {
      id: 4450,
      ibgeId: 4118709,
      name: 'Paulo Frontin',
    },
    {
      id: 4451,
      ibgeId: 4102901,
      name: 'Bituruna',
    },
    {
      id: 4452,
      ibgeId: 4108502,
      name: 'General Carneiro',
    },
    {
      id: 4453,
      ibgeId: 4109708,
      name: 'Ibaiti',
    },
    {
      id: 4454,
      ibgeId: 4112306,
      name: 'Japira',
    },
    {
      id: 4455,
      ibgeId: 4119202,
      name: 'Pinhalão',
    },
    {
      id: 4456,
      ibgeId: 4111704,
      name: 'Jaboti',
    },
    {
      id: 4457,
      ibgeId: 4127809,
      name: 'Tomazina',
    },
    {
      id: 4458,
      ibgeId: 4126603,
      name: 'Siqueira Campos',
    },
    {
      id: 4459,
      ibgeId: 4122909,
      name: 'Salto do Itararé',
    },
    {
      id: 4460,
      ibgeId: 4128500,
      name: 'Wenceslau Braz',
    },
    {
      id: 4461,
      ibgeId: 4124004,
      name: 'Santana do Itararé',
    },
    {
      id: 4462,
      ibgeId: 4125407,
      name: 'São José da Boa Vista',
    },
    {
      id: 4463,
      ibgeId: 4101606,
      name: 'Arapoti',
    },
    {
      id: 4464,
      ibgeId: 4109401,
      name: 'Guarapuava',
    },
    {
      id: 4465,
      ibgeId: 4108908,
      name: 'Guairaçá',
    },
    {
      id: 4466,
      ibgeId: 4104428,
      name: 'Candói',
    },
    {
      id: 4467,
      ibgeId: 4108452,
      name: 'Foz do Jordão',
    },
    {
      id: 4468,
      ibgeId: 4103958,
      name: 'Campina do Simão',
    },
    {
      id: 4469,
      ibgeId: 4127965,
      name: 'Turvo',
    },
    {
      id: 4470,
      ibgeId: 4110201,
      name: 'Inácio Martins',
    },
    {
      id: 4471,
      ibgeId: 4104451,
      name: 'Cantagalo',
    },
    {
      id: 4472,
      ibgeId: 4108650,
      name: 'Goioxim',
    },
    {
      id: 4473,
      ibgeId: 4115457,
      name: 'Marquinho',
    },
    {
      id: 4474,
      ibgeId: 4119301,
      name: 'Pinhão',
    },
    {
      id: 4475,
      ibgeId: 4121752,
      name: 'Reserva do Iguaçu',
    },
    {
      id: 4476,
      ibgeId: 4119608,
      name: 'Pitanga',
    },
    {
      id: 4477,
      ibgeId: 4103040,
      name: 'Boa Ventura de São Roque',
    },
    {
      id: 4478,
      ibgeId: 4123857,
      name: 'Santa Maria do Oeste',
    },
    {
      id: 4479,
      ibgeId: 4115739,
      name: 'Mato Rico',
    },
    {
      id: 4480,
      ibgeId: 4117271,
      name: 'Nova Tebas',
    },
    {
      id: 4481,
      ibgeId: 4114500,
      name: 'Manoel Ribas',
    },
    {
      id: 4482,
      ibgeId: 4117800,
      name: 'Palmital',
    },
    {
      id: 4483,
      ibgeId: 4113254,
      name: 'Laranjal',
    },
    {
      id: 4484,
      ibgeId: 4100459,
      name: 'Altamira do Paraná',
    },
    {
      id: 4485,
      ibgeId: 4113304,
      name: 'Laranjeiras do Sul',
    },
    {
      id: 4486,
      ibgeId: 4122156,
      name: 'Rio Bonito do Iguaçu',
    },
    {
      id: 4487,
      ibgeId: 4120150,
      name: 'Porto Barreiro',
    },
    {
      id: 4488,
      ibgeId: 4117057,
      name: 'Nova Laranjeiras',
    },
    {
      id: 4489,
      ibgeId: 4128658,
      name: 'Virmond',
    },
    {
      id: 4490,
      ibgeId: 4109302,
      name: 'Guaraniaçu',
    },
    {
      id: 4491,
      ibgeId: 4107124,
      name: 'Diamante do Sul',
    },
    {
      id: 4492,
      ibgeId: 4116703,
      name: 'Nova Aurora',
    },
    {
      id: 4493,
      ibgeId: 4103453,
      name: 'Cafelândia',
    },
    {
      id: 4494,
      ibgeId: 4106308,
      name: 'Corbélia',
    },
    {
      id: 4495,
      ibgeId: 4110052,
      name: 'Iguatu',
    },
    {
      id: 4496,
      ibgeId: 4101051,
      name: 'Anahy',
    },
    {
      id: 4497,
      ibgeId: 4103354,
      name: 'Braganey',
    },
    {
      id: 4498,
      ibgeId: 4128005,
      name: 'Ubiratã',
    },
    {
      id: 4499,
      ibgeId: 4104055,
      name: 'Campo Bonito',
    },
    {
      id: 4500,
      ibgeId: 4120903,
      name: 'Quedas do Iguaçu',
    },
    {
      id: 4501,
      ibgeId: 4107546,
      name: 'Espigão Alto do Iguaçu',
    },
    {
      id: 4502,
      ibgeId: 4105003,
      name: 'Catanduvas',
    },
    {
      id: 4503,
      ibgeId: 4109757,
      name: 'Ibema',
    },
    {
      id: 4504,
      ibgeId: 4127858,
      name: 'Três Barras do Paraná',
    },
    {
      id: 4505,
      ibgeId: 4118501,
      name: 'Pato Branco',
    },
    {
      id: 4506,
      ibgeId: 4103222,
      name: 'Bom Sucesso do Sul',
    },
    {
      id: 4507,
      ibgeId: 4128708,
      name: 'Vitorino',
    },
    {
      id: 4508,
      ibgeId: 4115309,
      name: 'Mariópolis',
    },
    {
      id: 4509,
      ibgeId: 4105706,
      name: 'Clevelândia',
    },
    {
      id: 4510,
      ibgeId: 4114401,
      name: 'Mangueirinha',
    },
    {
      id: 4511,
      ibgeId: 4109658,
      name: 'Honório Serpa',
    },
    {
      id: 4512,
      ibgeId: 4106506,
      name: 'Coronel Vivida',
    },
    {
      id: 4513,
      ibgeId: 4117602,
      name: 'Palmas',
    },
    {
      id: 4514,
      ibgeId: 4106456,
      name: 'Coronel Domingos Soares',
    },
    {
      id: 4515,
      ibgeId: 4105409,
      name: 'Chopinzinho',
    },
    {
      id: 4516,
      ibgeId: 4126652,
      name: 'Sulina',
    },
    {
      id: 4517,
      ibgeId: 4126272,
      name: 'Saudade do Iguaçu',
    },
    {
      id: 4518,
      ibgeId: 4124806,
      name: 'São João',
    },
    {
      id: 4519,
      ibgeId: 4125209,
      name: "São Jorge D'Oeste",
    },
    {
      id: 4520,
      ibgeId: 4111209,
      name: "Itapejara d'Oeste",
    },
    {
      id: 4521,
      ibgeId: 4128609,
      name: 'Verê',
    },
    {
      id: 4522,
      ibgeId: 4106571,
      name: 'Cruzeiro do Iguaçu',
    },
    {
      id: 4523,
      ibgeId: 4108403,
      name: 'Francisco Beltrão',
    },
    {
      id: 4524,
      ibgeId: 4121604,
      name: 'Renascença',
    },
    {
      id: 4525,
      ibgeId: 4115408,
      name: 'Marmeleiro',
    },
    {
      id: 4526,
      ibgeId: 4107850,
      name: 'Flor da Serra do Sul',
    },
    {
      id: 4527,
      ibgeId: 4122800,
      name: 'Salgado Filho',
    },
    {
      id: 4528,
      ibgeId: 4114351,
      name: 'Manfrinópolis',
    },
    {
      id: 4529,
      ibgeId: 4107405,
      name: 'Enéas Marques',
    },
    {
      id: 4530,
      ibgeId: 4116950,
      name: 'Nova Esperança do Sudoeste',
    },
    {
      id: 4531,
      ibgeId: 4101002,
      name: 'Ampére',
    },
    {
      id: 4532,
      ibgeId: 4123808,
      name: 'Santa Izabel do Oeste',
    },
    {
      id: 4533,
      ibgeId: 4107207,
      name: 'Dois Vizinhos',
    },
    {
      id: 4534,
      ibgeId: 4123006,
      name: 'Salto do Lontra',
    },
    {
      id: 4535,
      ibgeId: 4103024,
      name: 'Boa Esperança do Iguaçu',
    },
    {
      id: 4536,
      ibgeId: 4117255,
      name: 'Nova Prata do Iguaçu',
    },
    {
      id: 4537,
      ibgeId: 4102604,
      name: 'Barracão',
    },
    {
      id: 4538,
      ibgeId: 4103156,
      name: 'Bom Jesus do Sul',
    },
    {
      id: 4539,
      ibgeId: 4124400,
      name: 'Santo Antônio do Sudoeste',
    },
    {
      id: 4540,
      ibgeId: 4119251,
      name: 'Pinhal de São Bento',
    },
    {
      id: 4541,
      ibgeId: 4120358,
      name: 'Pranchita',
    },
    {
      id: 4542,
      ibgeId: 4119004,
      name: "Pérola d'Oeste",
    },
    {
      id: 4543,
      ibgeId: 4102752,
      name: 'Bela Vista da Caroba',
    },
    {
      id: 4544,
      ibgeId: 4119806,
      name: 'Planalto',
    },
    {
      id: 4545,
      ibgeId: 4104501,
      name: 'Capanema',
    },
    {
      id: 4546,
      ibgeId: 4121406,
      name: 'Realeza',
    },
    {
      id: 4547,
      ibgeId: 4103057,
      name: 'Boa Vista da Aparecida',
    },
    {
      id: 4548,
      ibgeId: 4104600,
      name: 'Capitão Leônidas Marques',
    },
    {
      id: 4549,
      ibgeId: 4123824,
      name: 'Santa Lúcia',
    },
    {
      id: 4550,
      ibgeId: 4104808,
      name: 'Cascavel',
    },
    {
      id: 4551,
      ibgeId: 4124020,
      name: 'Santa Tereza do Oeste',
    },
    {
      id: 4552,
      ibgeId: 4113452,
      name: 'Lindoeste',
    },
    {
      id: 4553,
      ibgeId: 4108205,
      name: 'Formosa do Oeste',
    },
    {
      id: 4554,
      ibgeId: 4110656,
      name: 'Iracema do Oeste',
    },
    {
      id: 4555,
      ibgeId: 4112751,
      name: 'Jesuítas',
    },
    {
      id: 4556,
      ibgeId: 4105300,
      name: 'Céu Azul',
    },
    {
      id: 4557,
      ibgeId: 4128559,
      name: 'Vera Cruz do Oeste',
    },
    {
      id: 4558,
      ibgeId: 4108304,
      name: 'Foz do Iguaçu',
    },
    {
      id: 4559,
      ibgeId: 4124053,
      name: 'Santa Terezinha de Itaipu',
    },
    {
      id: 4560,
      ibgeId: 4125704,
      name: 'São Miguel do Iguaçu',
    },
    {
      id: 4561,
      ibgeId: 4110953,
      name: 'Itaipulândia',
    },
    {
      id: 4562,
      ibgeId: 4115804,
      name: 'Medianeira',
    },
    {
      id: 4563,
      ibgeId: 4126355,
      name: 'Serranópolis do Iguaçu',
    },
    {
      id: 4564,
      ibgeId: 4115606,
      name: 'Matelândia',
    },
    {
      id: 4565,
      ibgeId: 4121257,
      name: 'Ramilândia',
    },
    {
      id: 4566,
      ibgeId: 4116059,
      name: 'Missal',
    },
    {
      id: 4567,
      ibgeId: 4123501,
      name: 'Santa Helena',
    },
    {
      id: 4568,
      ibgeId: 4107157,
      name: "Diamante d'Oeste",
    },
    {
      id: 4569,
      ibgeId: 4125456,
      name: 'São José das Palmeiras',
    },
    {
      id: 4570,
      ibgeId: 4127700,
      name: 'Toledo',
    },
    {
      id: 4571,
      ibgeId: 4125753,
      name: 'São Pedro do Iguaçu',
    },
    {
      id: 4572,
      ibgeId: 4117222,
      name: 'Nova Santa Rosa',
    },
    {
      id: 4573,
      ibgeId: 4117453,
      name: 'Ouro Verde do Oeste',
    },
    {
      id: 4574,
      ibgeId: 4102000,
      name: 'Assis Chateaubriand',
    },
    {
      id: 4575,
      ibgeId: 4120853,
      name: 'Quatro Pontes',
    },
    {
      id: 4576,
      ibgeId: 4127957,
      name: 'Tupãssi',
    },
    {
      id: 4577,
      ibgeId: 4118451,
      name: 'Pato Bragado',
    },
    {
      id: 4578,
      ibgeId: 4117909,
      name: 'Palotina',
    },
    {
      id: 4579,
      ibgeId: 4115358,
      name: 'Maripá',
    },
    {
      id: 4580,
      ibgeId: 4114609,
      name: 'Marechal Cândido Rondon',
    },
    {
      id: 4581,
      ibgeId: 4108809,
      name: 'Guaíra',
    },
    {
      id: 4582,
      ibgeId: 4107538,
      name: 'Entre Rios do Oeste',
    },
    {
      id: 4583,
      ibgeId: 4127403,
      name: 'Terra Roxa',
    },
    {
      id: 4584,
      ibgeId: 4115853,
      name: 'Mercedes',
    },
    {
      id: 4585,
      ibgeId: 4113700,
      name: 'Londrina',
    },
    {
      id: 4586,
      ibgeId: 4126678,
      name: 'Tamarana',
    },
    {
      id: 4587,
      ibgeId: 4102802,
      name: 'Bela Vista do Paraíso',
    },
    {
      id: 4588,
      ibgeId: 4120507,
      name: 'Primeiro de Maio',
    },
    {
      id: 4589,
      ibgeId: 4100806,
      name: 'Alvorada do Sul',
    },
    {
      id: 4590,
      ibgeId: 4120002,
      name: 'Porecatu',
    },
    {
      id: 4591,
      ibgeId: 4108007,
      name: 'Florestópolis',
    },
    {
      id: 4592,
      ibgeId: 4126504,
      name: 'Sertanópolis',
    },
    {
      id: 4593,
      ibgeId: 4103701,
      name: 'Cambé',
    },
    {
      id: 4594,
      ibgeId: 4109807,
      name: 'Ibiporã',
    },
    {
      id: 4595,
      ibgeId: 4112702,
      name: 'Jataizinho',
    },
    {
      id: 4596,
      ibgeId: 4101903,
      name: 'Assaí',
    },
    {
      id: 4597,
      ibgeId: 4123204,
      name: 'Santa Cecília do Pavão',
    },
    {
      id: 4598,
      ibgeId: 4116604,
      name: 'Nova América da Colina',
    },
    {
      id: 4599,
      ibgeId: 4126009,
      name: 'São Sebastião da Amoreira',
    },
    {
      id: 4600,
      ibgeId: 4117214,
      name: 'Nova Santa Bárbara',
    },
    {
      id: 4601,
      ibgeId: 4124707,
      name: 'São Jerônimo da Serra',
    },
    {
      id: 4602,
      ibgeId: 4128401,
      name: 'Uraí',
    },
    {
      id: 4603,
      ibgeId: 4121307,
      name: 'Rancho Alegre',
    },
    {
      id: 4604,
      ibgeId: 4106407,
      name: 'Cornélio Procópio',
    },
    {
      id: 4605,
      ibgeId: 4117008,
      name: 'Nova Fátima',
    },
    {
      id: 4606,
      ibgeId: 4124301,
      name: 'Santo Antônio do Paraíso',
    },
    {
      id: 4607,
      ibgeId: 4106001,
      name: 'Congonhinhas',
    },
    {
      id: 4608,
      ibgeId: 4113403,
      name: 'Leópolis',
    },
    {
      id: 4609,
      ibgeId: 4126405,
      name: 'Sertaneja',
    },
    {
      id: 4610,
      ibgeId: 4123907,
      name: 'Santa Mariana',
    },
    {
      id: 4611,
      ibgeId: 4102406,
      name: 'Bandeirantes',
    },
    {
      id: 4612,
      ibgeId: 4123105,
      name: 'Santa Amélia',
    },
    {
      id: 4613,
      ibgeId: 4111001,
      name: 'Itambaracá',
    },
    {
      id: 4614,
      ibgeId: 4101101,
      name: 'Andirá',
    },
    {
      id: 4615,
      ibgeId: 4102703,
      name: 'Barra do Jacaré',
    },
    {
      id: 4616,
      ibgeId: 4103602,
      name: 'Cambará',
    },
    {
      id: 4617,
      ibgeId: 4111803,
      name: 'Jacarezinho',
    },
    {
      id: 4618,
      ibgeId: 4121802,
      name: 'Ribeirão Claro',
    },
    {
      id: 4619,
      ibgeId: 4104709,
      name: 'Carlópolis',
    },
    {
      id: 4620,
      ibgeId: 4124103,
      name: 'Santo Antônio da Platina',
    },
    {
      id: 4621,
      ibgeId: 4120705,
      name: 'Quatiguá',
    },
    {
      id: 4622,
      ibgeId: 4112801,
      name: 'Joaquim Távora',
    },
    {
      id: 4623,
      ibgeId: 4100103,
      name: 'Abatiá',
    },
    {
      id: 4624,
      ibgeId: 4109005,
      name: 'Guapirama',
    },
    {
      id: 4625,
      ibgeId: 4112900,
      name: 'Jundiaí do Sul',
    },
    {
      id: 4626,
      ibgeId: 4106100,
      name: 'Conselheiro Mairinck',
    },
    {
      id: 4627,
      ibgeId: 4121901,
      name: 'Ribeirão do Pinhal',
    },
    {
      id: 4628,
      ibgeId: 4122404,
      name: 'Rolândia',
    },
    {
      id: 4629,
      ibgeId: 4111902,
      name: 'Jaguapitã',
    },
    {
      id: 4630,
      ibgeId: 4119657,
      name: 'Pitangueiras',
    },
    {
      id: 4631,
      ibgeId: 4116000,
      name: 'Miraselva',
    },
    {
      id: 4632,
      ibgeId: 4120333,
      name: 'Prado Ferreira',
    },
    {
      id: 4633,
      ibgeId: 4109203,
      name: 'Guaraci',
    },
    {
      id: 4634,
      ibgeId: 4105102,
      name: 'Centenário do Sul',
    },
    {
      id: 4635,
      ibgeId: 4113809,
      name: 'Lupionópolis',
    },
    {
      id: 4636,
      ibgeId: 4103404,
      name: 'Cafeara',
    },
    {
      id: 4637,
      ibgeId: 4124509,
      name: 'Santo Inácio',
    },
    {
      id: 4638,
      ibgeId: 4123600,
      name: 'Santa Inês',
    },
    {
      id: 4639,
      ibgeId: 4110904,
      name: 'Itaguajé',
    },
    {
      id: 4640,
      ibgeId: 4116406,
      name: 'Nossa Senhora das Graças',
    },
    {
      id: 4641,
      ibgeId: 4105904,
      name: 'Colorado',
    },
    {
      id: 4642,
      ibgeId: 4101507,
      name: 'Arapongas',
    },
    {
      id: 4643,
      ibgeId: 4122701,
      name: 'Sabáudia',
    },
    {
      id: 4644,
      ibgeId: 4102109,
      name: 'Astorga',
    },
    {
      id: 4645,
      ibgeId: 4110003,
      name: 'Iguaraçu',
    },
    {
      id: 4646,
      ibgeId: 4101150,
      name: 'Ângulo',
    },
    {
      id: 4647,
      ibgeId: 4116307,
      name: 'Munhoz de Melo',
    },
    {
      id: 4648,
      ibgeId: 4123402,
      name: 'Santa Fé',
    },
    {
      id: 4649,
      ibgeId: 4108106,
      name: 'Flórida',
    },
    {
      id: 4650,
      ibgeId: 4113601,
      name: 'Lobato',
    },
    {
      id: 4651,
      ibgeId: 4101408,
      name: 'Apucarana',
    },
    {
      id: 4652,
      ibgeId: 4103503,
      name: 'Califórnia',
    },
    {
      id: 4653,
      ibgeId: 4114906,
      name: 'Marilândia do Sul',
    },
    {
      id: 4654,
      ibgeId: 4115754,
      name: 'Mauá da Serra',
    },
    {
      id: 4655,
      ibgeId: 4122107,
      name: 'Rio Bom',
    },
    {
      id: 4656,
      ibgeId: 4107603,
      name: 'Faxinal',
    },
    {
      id: 4657,
      ibgeId: 4108700,
      name: 'Grandes Rios',
    },
    {
      id: 4658,
      ibgeId: 4122172,
      name: 'Rio Branco do Ivaí',
    },
    {
      id: 4659,
      ibgeId: 4122651,
      name: 'Rosário do Ivaí',
    },
    {
      id: 4660,
      ibgeId: 4106852,
      name: 'Cruzmaltina',
    },
    {
      id: 4661,
      ibgeId: 4112504,
      name: 'Jardim Alegre',
    },
    {
      id: 4662,
      ibgeId: 4113429,
      name: 'Lidianópolis',
    },
    {
      id: 4663,
      ibgeId: 4111506,
      name: 'Ivaiporã',
    },
    {
      id: 4664,
      ibgeId: 4101853,
      name: 'Ariranha do Ivaí',
    },
    {
      id: 4665,
      ibgeId: 4101655,
      name: 'Arapuã',
    },
    {
      id: 4666,
      ibgeId: 4103800,
      name: 'Cambira',
    },
    {
      id: 4667,
      ibgeId: 4117297,
      name: 'Novo Itacolomi',
    },
    {
      id: 4668,
      ibgeId: 4112108,
      name: 'Jandaia do Sul',
    },
    {
      id: 4669,
      ibgeId: 4115507,
      name: 'Marumbi',
    },
    {
      id: 4670,
      ibgeId: 4113106,
      name: 'Kaloré',
    },
    {
      id: 4671,
      ibgeId: 4103305,
      name: 'Borrazópolis',
    },
    {
      id: 4672,
      ibgeId: 4125001,
      name: 'São João do Ivaí',
    },
    {
      id: 4673,
      ibgeId: 4113759,
      name: 'Lunardelli',
    },
    {
      id: 4674,
      ibgeId: 4108551,
      name: 'Godoy Moreira',
    },
    {
      id: 4675,
      ibgeId: 4103206,
      name: 'Bom Sucesso',
    },
    {
      id: 4676,
      ibgeId: 4125803,
      name: 'São Pedro do Ivaí',
    },
    {
      id: 4677,
      ibgeId: 4107702,
      name: 'Fênix',
    },
    {
      id: 4678,
      ibgeId: 4102505,
      name: 'Barbosa Ferraz',
    },
    {
      id: 4679,
      ibgeId: 4106555,
      name: 'Corumbataí do Sul',
    },
    {
      id: 4680,
      ibgeId: 4114203,
      name: 'Mandaguari',
    },
    {
      id: 4681,
      ibgeId: 4114807,
      name: 'Marialva',
    },
    {
      id: 4682,
      ibgeId: 4115200,
      name: 'Maringá',
    },
    {
      id: 4683,
      ibgeId: 4126256,
      name: 'Sarandi',
    },
    {
      id: 4684,
      ibgeId: 4107900,
      name: 'Floresta',
    },
    {
      id: 4685,
      ibgeId: 4111605,
      name: 'Ivatuba',
    },
    {
      id: 4686,
      ibgeId: 4117503,
      name: 'Paiçandu',
    },
    {
      id: 4687,
      ibgeId: 4107306,
      name: 'Doutor Camargo',
    },
    {
      id: 4688,
      ibgeId: 4114104,
      name: 'Mandaguaçu',
    },
    {
      id: 4689,
      ibgeId: 4117404,
      name: 'Ourizona',
    },
    {
      id: 4690,
      ibgeId: 4111100,
      name: 'Itambé',
    },
    {
      id: 4691,
      ibgeId: 4120408,
      name: 'Presidente Castelo Branco',
    },
    {
      id: 4692,
      ibgeId: 4107801,
      name: 'Floraí',
    },
    {
      id: 4693,
      ibgeId: 4125308,
      name: 'São Jorge do Ivaí',
    },
    {
      id: 4694,
      ibgeId: 4105508,
      name: 'Cianorte',
    },
    {
      id: 4695,
      ibgeId: 4125555,
      name: 'São Manoel do Paraná',
    },
    {
      id: 4696,
      ibgeId: 4126108,
      name: 'São Tomé',
    },
    {
      id: 4697,
      ibgeId: 4112405,
      name: 'Japurá',
    },
    {
      id: 4698,
      ibgeId: 4113007,
      name: 'Jussara',
    },
    {
      id: 4699,
      ibgeId: 4110409,
      name: 'Indianópolis',
    },
    {
      id: 4700,
      ibgeId: 4127205,
      name: 'Terra Boa',
    },
    {
      id: 4701,
      ibgeId: 4118808,
      name: 'Peabiru',
    },
    {
      id: 4702,
      ibgeId: 4101705,
      name: 'Araruna',
    },
    {
      id: 4703,
      ibgeId: 4121109,
      name: 'Quinta do Sol',
    },
    {
      id: 4704,
      ibgeId: 4107504,
      name: 'Engenheiro Beltrão',
    },
    {
      id: 4705,
      ibgeId: 4110805,
      name: 'Iretama',
    },
    {
      id: 4706,
      ibgeId: 4113734,
      name: 'Luiziana',
    },
    {
      id: 4707,
      ibgeId: 4104303,
      name: 'Campo Mourão',
    },
    {
      id: 4708,
      ibgeId: 4122503,
      name: 'Roncador',
    },
    {
      id: 4709,
      ibgeId: 4107553,
      name: 'Farol',
    },
    {
      id: 4710,
      ibgeId: 4116802,
      name: 'Nova Cantu',
    },
    {
      id: 4711,
      ibgeId: 4114005,
      name: 'Mamborê',
    },
    {
      id: 4712,
      ibgeId: 4103909,
      name: 'Campina da Lagoa',
    },
    {
      id: 4713,
      ibgeId: 4112959,
      name: 'Juranda',
    },
    {
      id: 4714,
      ibgeId: 4108601,
      name: 'Goioerê',
    },
    {
      id: 4715,
      ibgeId: 4120655,
      name: 'Quarto Centenário',
    },
    {
      id: 4716,
      ibgeId: 4116109,
      name: 'Moreira Sales',
    },
    {
      id: 4717,
      ibgeId: 4112207,
      name: 'Janiópolis',
    },
    {
      id: 4718,
      ibgeId: 4103008,
      name: 'Boa Esperança',
    },
    {
      id: 4719,
      ibgeId: 4121356,
      name: "Rancho Alegre d'Oeste",
    },
    {
      id: 4720,
      ibgeId: 4106605,
      name: 'Cruzeiro do Oeste',
    },
    {
      id: 4721,
      ibgeId: 4126801,
      name: 'Tapejara',
    },
    {
      id: 4722,
      ibgeId: 4127908,
      name: 'Tuneiras do Oeste',
    },
    {
      id: 4723,
      ibgeId: 4115101,
      name: 'Mariluz',
    },
    {
      id: 4724,
      ibgeId: 4114708,
      name: 'Maria Helena',
    },
    {
      id: 4725,
      ibgeId: 4107256,
      name: 'Douradina',
    },
    {
      id: 4726,
      ibgeId: 4117206,
      name: 'Nova Olímpia',
    },
    {
      id: 4727,
      ibgeId: 4128104,
      name: 'Umuarama',
    },
    {
      id: 4728,
      ibgeId: 4111555,
      name: 'Ivaté',
    },
    {
      id: 4729,
      ibgeId: 4128625,
      name: 'Alto Paraíso',
    },
    {
      id: 4730,
      ibgeId: 4109906,
      name: 'Icaraíma',
    },
    {
      id: 4731,
      ibgeId: 4128807,
      name: 'Xambrê',
    },
    {
      id: 4732,
      ibgeId: 4118857,
      name: 'Perobal',
    },
    {
      id: 4733,
      ibgeId: 4118907,
      name: 'Pérola',
    },
    {
      id: 4734,
      ibgeId: 4107520,
      name: 'Esperança Nova',
    },
    {
      id: 4735,
      ibgeId: 4100509,
      name: 'Altônia',
    },
    {
      id: 4736,
      ibgeId: 4125357,
      name: 'São Jorge do Patrocínio',
    },
    {
      id: 4737,
      ibgeId: 4110607,
      name: 'Iporã',
    },
    {
      id: 4738,
      ibgeId: 4103479,
      name: 'Cafezal do Sul',
    },
    {
      id: 4739,
      ibgeId: 4108320,
      name: 'Francisco Alves',
    },
    {
      id: 4740,
      ibgeId: 4100707,
      name: 'Alto Piquiri',
    },
    {
      id: 4741,
      ibgeId: 4103370,
      name: 'Brasilândia do Sul',
    },
    {
      id: 4742,
      ibgeId: 4116901,
      name: 'Nova Esperança',
    },
    {
      id: 4743,
      ibgeId: 4102208,
      name: 'Atalaia',
    },
    {
      id: 4744,
      ibgeId: 4128302,
      name: 'Uniflor',
    },
    {
      id: 4745,
      ibgeId: 4106704,
      name: 'Cruzeiro do Sul',
    },
    {
      id: 4746,
      ibgeId: 4118105,
      name: 'Paranacity',
    },
    {
      id: 4747,
      ibgeId: 4110300,
      name: 'Inajá',
    },
    {
      id: 4748,
      ibgeId: 4118303,
      name: 'Paranapoema',
    },
    {
      id: 4749,
      ibgeId: 4112603,
      name: 'Jardim Olinda',
    },
    {
      id: 4750,
      ibgeId: 4118402,
      name: 'Paranavaí',
    },
    {
      id: 4751,
      ibgeId: 4124202,
      name: 'Santo Antônio do Caiuá',
    },
    {
      id: 4752,
      ibgeId: 4124905,
      name: 'São João do Caiuá',
    },
    {
      id: 4753,
      ibgeId: 4100608,
      name: 'Alto Paraná',
    },
    {
      id: 4754,
      ibgeId: 4126702,
      name: 'Tamboara',
    },
    {
      id: 4755,
      ibgeId: 4124608,
      name: 'São Carlos do Ivaí',
    },
    {
      id: 4756,
      ibgeId: 4118006,
      name: 'Paraíso do Norte',
    },
    {
      id: 4757,
      ibgeId: 4116505,
      name: 'Nova Aliança do Ivaí',
    },
    {
      id: 4758,
      ibgeId: 4122602,
      name: 'Rondon',
    },
    {
      id: 4759,
      ibgeId: 4109104,
      name: 'Guaporema',
    },
    {
      id: 4760,
      ibgeId: 4105607,
      name: 'Cidade Gaúcha',
    },
    {
      id: 4761,
      ibgeId: 4126900,
      name: 'Tapira',
    },
    {
      id: 4762,
      ibgeId: 4115903,
      name: 'Mirador',
    },
    {
      id: 4763,
      ibgeId: 4100905,
      name: 'Amaporã',
    },
    {
      id: 4764,
      ibgeId: 4119707,
      name: 'Planaltina do Paraná',
    },
    {
      id: 4765,
      ibgeId: 4127304,
      name: 'Terra Rica',
    },
    {
      id: 4766,
      ibgeId: 4113502,
      name: 'Loanda',
    },
    {
      id: 4767,
      ibgeId: 4123709,
      name: 'Santa Isabel do Ivaí',
    },
    {
      id: 4768,
      ibgeId: 4123956,
      name: 'Santa Mônica',
    },
    {
      id: 4769,
      ibgeId: 4123303,
      name: 'Santa Cruz de Monte Castelo',
    },
    {
      id: 4770,
      ibgeId: 4121000,
      name: 'Querência do Norte',
    },
    {
      id: 4771,
      ibgeId: 4120200,
      name: 'Porto Rico',
    },
    {
      id: 4772,
      ibgeId: 4125902,
      name: 'São Pedro do Paraná',
    },
    {
      id: 4773,
      ibgeId: 4115002,
      name: 'Marilena',
    },
    {
      id: 4774,
      ibgeId: 4117107,
      name: 'Nova Londrina',
    },
    {
      id: 4775,
      ibgeId: 4111308,
      name: 'Itaúna do Sul',
    },
    {
      id: 4776,
      ibgeId: 4107108,
      name: 'Diamante do Norte',
    },
  ],
  RJ: [
    {
      id: 646,
      ibgeId: 3304557,
      name: 'Rio de Janeiro',
    },
    {
      id: 647,
      ibgeId: 3302007,
      name: 'Itaguaí',
    },
    {
      id: 648,
      ibgeId: 3302601,
      name: 'Mangaratiba',
    },
    {
      id: 649,
      ibgeId: 3305554,
      name: 'Seropédica',
    },
    {
      id: 650,
      ibgeId: 3300100,
      name: 'Angra dos Reis',
    },
    {
      id: 651,
      ibgeId: 3303807,
      name: 'Paraty',
    },
    {
      id: 652,
      ibgeId: 3303302,
      name: 'Niterói',
    },
    {
      id: 653,
      ibgeId: 3304904,
      name: 'São Gonçalo',
    },
    {
      id: 654,
      ibgeId: 3301900,
      name: 'Itaboraí',
    },
    {
      id: 655,
      ibgeId: 3305752,
      name: 'Tanguá',
    },
    {
      id: 656,
      ibgeId: 3302700,
      name: 'Maricá',
    },
    {
      id: 657,
      ibgeId: 3301702,
      name: 'Duque de Caxias',
    },
    {
      id: 658,
      ibgeId: 3305109,
      name: 'São João de Meriti',
    },
    {
      id: 659,
      ibgeId: 3303906,
      name: 'Petrópolis',
    },
    {
      id: 660,
      ibgeId: 3305158,
      name: 'São José do Vale do Rio Preto',
    },
    {
      id: 661,
      ibgeId: 3306008,
      name: 'Três Rios',
    },
    {
      id: 662,
      ibgeId: 3300225,
      name: 'Areal',
    },
    {
      id: 663,
      ibgeId: 3303708,
      name: 'Paraíba do Sul',
    },
    {
      id: 664,
      ibgeId: 3300951,
      name: 'Comendador Levy Gasparian',
    },
    {
      id: 665,
      ibgeId: 3305406,
      name: 'Sapucaia',
    },
    {
      id: 666,
      ibgeId: 3302502,
      name: 'Magé',
    },
    {
      id: 667,
      ibgeId: 3301850,
      name: 'Guapimirim',
    },
    {
      id: 668,
      ibgeId: 3305802,
      name: 'Teresópolis',
    },
    {
      id: 669,
      ibgeId: 3303500,
      name: 'Nova Iguaçu',
    },
    {
      id: 670,
      ibgeId: 3300456,
      name: 'Belford Roxo',
    },
    {
      id: 671,
      ibgeId: 3304144,
      name: 'Queimados',
    },
    {
      id: 672,
      ibgeId: 3302270,
      name: 'Japeri',
    },
    {
      id: 673,
      ibgeId: 3303203,
      name: 'Nilópolis',
    },
    {
      id: 674,
      ibgeId: 3302858,
      name: 'Mesquita',
    },
    {
      id: 675,
      ibgeId: 3303609,
      name: 'Paracambi',
    },
    {
      id: 676,
      ibgeId: 3301801,
      name: 'Engenheiro Paulo de Frontin',
    },
    {
      id: 677,
      ibgeId: 3302809,
      name: 'Mendes',
    },
    {
      id: 678,
      ibgeId: 3302908,
      name: 'Miguel Pereira',
    },
    {
      id: 679,
      ibgeId: 3303856,
      name: 'Paty do Alferes',
    },
    {
      id: 680,
      ibgeId: 3300308,
      name: 'Barra do Piraí',
    },
    {
      id: 681,
      ibgeId: 3304003,
      name: 'Piraí',
    },
    {
      id: 682,
      ibgeId: 3303955,
      name: 'Pinheiral',
    },
    {
      id: 683,
      ibgeId: 3306305,
      name: 'Volta Redonda',
    },
    {
      id: 684,
      ibgeId: 3300407,
      name: 'Barra Mansa',
    },
    {
      id: 685,
      ibgeId: 3304128,
      name: 'Quatis',
    },
    {
      id: 686,
      ibgeId: 3304409,
      name: 'Rio Claro',
    },
    {
      id: 687,
      ibgeId: 3304201,
      name: 'Resende',
    },
    {
      id: 688,
      ibgeId: 3304110,
      name: 'Porto Real',
    },
    {
      id: 689,
      ibgeId: 3302254,
      name: 'Itatiaia',
    },
    {
      id: 690,
      ibgeId: 3306107,
      name: 'Valença',
    },
    {
      id: 691,
      ibgeId: 3304508,
      name: 'Rio das Flores',
    },
    {
      id: 692,
      ibgeId: 3306206,
      name: 'Vassouras',
    },
    {
      id: 693,
      ibgeId: 3302403,
      name: 'Macaé',
    },
    {
      id: 694,
      ibgeId: 3300936,
      name: 'Carapebus',
    },
    {
      id: 695,
      ibgeId: 3301009,
      name: 'Campos dos Goytacazes',
    },
    {
      id: 696,
      ibgeId: 3301157,
      name: 'Cardoso Moreira',
    },
    {
      id: 697,
      ibgeId: 3305000,
      name: 'São João da Barra',
    },
    {
      id: 698,
      ibgeId: 3304755,
      name: 'São Francisco de Itabapoana',
    },
    {
      id: 699,
      ibgeId: 3302056,
      name: 'Italva',
    },
    {
      id: 700,
      ibgeId: 3302205,
      name: 'Itaperuna',
    },
    {
      id: 701,
      ibgeId: 3302304,
      name: 'Laje do Muriaé',
    },
    {
      id: 702,
      ibgeId: 3300605,
      name: 'Bom Jesus do Itabapoana',
    },
    {
      id: 703,
      ibgeId: 3306156,
      name: 'Varre-Sai',
    },
    {
      id: 704,
      ibgeId: 3303104,
      name: 'Natividade',
    },
    {
      id: 705,
      ibgeId: 3304102,
      name: 'Porciúncula',
    },
    {
      id: 706,
      ibgeId: 3304805,
      name: 'São Fidélis',
    },
    {
      id: 707,
      ibgeId: 3300902,
      name: 'Cambuci',
    },
    {
      id: 708,
      ibgeId: 3305133,
      name: 'São José de Ubá',
    },
    {
      id: 709,
      ibgeId: 3303005,
      name: 'Miracema',
    },
    {
      id: 710,
      ibgeId: 3304706,
      name: 'Santo Antônio de Pádua',
    },
    {
      id: 711,
      ibgeId: 3300159,
      name: 'Aperibé',
    },
    {
      id: 712,
      ibgeId: 3301108,
      name: 'Cantagalo',
    },
    {
      id: 713,
      ibgeId: 3301504,
      name: 'Cordeiro',
    },
    {
      id: 714,
      ibgeId: 3302452,
      name: 'Macuco',
    },
    {
      id: 715,
      ibgeId: 3305307,
      name: 'São Sebastião do Alto',
    },
    {
      id: 716,
      ibgeId: 3302106,
      name: 'Itaocara',
    },
    {
      id: 717,
      ibgeId: 3303401,
      name: 'Nova Friburgo',
    },
    {
      id: 718,
      ibgeId: 3305703,
      name: 'Sumidouro',
    },
    {
      id: 719,
      ibgeId: 3301207,
      name: 'Carmo',
    },
    {
      id: 720,
      ibgeId: 3301603,
      name: 'Duas Barras',
    },
    {
      id: 721,
      ibgeId: 3300506,
      name: 'Bom Jardim',
    },
    {
      id: 722,
      ibgeId: 3300803,
      name: 'Cachoeiras de Macacu',
    },
    {
      id: 723,
      ibgeId: 3304151,
      name: 'Quissamã',
    },
    {
      id: 724,
      ibgeId: 3301405,
      name: 'Conceição de Macabu',
    },
    {
      id: 725,
      ibgeId: 3305901,
      name: 'Trajano de Moraes',
    },
    {
      id: 726,
      ibgeId: 3304607,
      name: 'Santa Maria Madalena',
    },
    {
      id: 727,
      ibgeId: 3304300,
      name: 'Rio Bonito',
    },
    {
      id: 728,
      ibgeId: 3305604,
      name: 'Silva Jardim',
    },
    {
      id: 729,
      ibgeId: 3301306,
      name: 'Casimiro de Abreu',
    },
    {
      id: 730,
      ibgeId: 3304524,
      name: 'Rio das Ostras',
    },
    {
      id: 731,
      ibgeId: 3300704,
      name: 'Cabo Frio',
    },
    {
      id: 732,
      ibgeId: 3300258,
      name: 'Arraial do Cabo',
    },
    {
      id: 733,
      ibgeId: 3305208,
      name: 'São Pedro da Aldeia',
    },
    {
      id: 734,
      ibgeId: 3300233,
      name: 'Armação dos Búzios',
    },
    {
      id: 735,
      ibgeId: 3301876,
      name: 'Iguaba Grande',
    },
    {
      id: 736,
      ibgeId: 3300209,
      name: 'Araruama',
    },
    {
      id: 737,
      ibgeId: 3305505,
      name: 'Saquarema',
    },
  ],
  RN: [
    {
      id: 2671,
      ibgeId: 2408102,
      name: 'Natal',
    },
    {
      id: 2672,
      ibgeId: 2403251,
      name: 'Parnamirim',
    },
    {
      id: 2673,
      ibgeId: 2412203,
      name: 'São José de Mipibu',
    },
    {
      id: 2674,
      ibgeId: 2408201,
      name: 'Nísia Floresta',
    },
    {
      id: 2675,
      ibgeId: 2413201,
      name: 'Senador Georgino Avelino',
    },
    {
      id: 2676,
      ibgeId: 2401206,
      name: 'Arez',
    },
    {
      id: 2677,
      ibgeId: 2404200,
      name: 'Goianinha',
    },
    {
      id: 2678,
      ibgeId: 2414209,
      name: 'Tibau do Sul',
    },
    {
      id: 2679,
      ibgeId: 2403509,
      name: 'Espírito Santo',
    },
    {
      id: 2680,
      ibgeId: 2407807,
      name: 'Monte Alegre',
    },
    {
      id: 2681,
      ibgeId: 2414803,
      name: 'Vera Cruz',
    },
    {
      id: 2682,
      ibgeId: 2414704,
      name: 'Várzea',
    },
    {
      id: 2683,
      ibgeId: 2406155,
      name: 'Jundiá',
    },
    {
      id: 2684,
      ibgeId: 2402204,
      name: 'Canguaretama',
    },
    {
      id: 2685,
      ibgeId: 2415008,
      name: 'Vila Flor',
    },
    {
      id: 2686,
      ibgeId: 2401404,
      name: 'Baía Formosa',
    },
    {
      id: 2687,
      ibgeId: 2409803,
      name: 'Pedro Velho',
    },
    {
      id: 2688,
      ibgeId: 2407708,
      name: 'Montanhas',
    },
    {
      id: 2689,
      ibgeId: 2411205,
      name: 'Santa Cruz',
    },
    {
      id: 2690,
      ibgeId: 2411700,
      name: 'São Bento do Trairi',
    },
    {
      id: 2691,
      ibgeId: 2405405,
      name: 'Japi',
    },
    {
      id: 2692,
      ibgeId: 2413300,
      name: 'Serra de São Bento',
    },
    {
      id: 2693,
      ibgeId: 2408300,
      name: 'Nova Cruz',
    },
    {
      id: 2694,
      ibgeId: 2407906,
      name: 'Monte das Gameleiras',
    },
    {
      id: 2695,
      ibgeId: 2409100,
      name: 'Passa e Fica',
    },
    {
      id: 2696,
      ibgeId: 2401800,
      name: 'Brejinho',
    },
    {
      id: 2697,
      ibgeId: 2402808,
      name: 'Coronel Ezequiel',
    },
    {
      id: 2698,
      ibgeId: 2405009,
      name: 'Jaçanã',
    },
    {
      id: 2699,
      ibgeId: 2406205,
      name: "Lagoa D'Anta",
    },
    {
      id: 2700,
      ibgeId: 2402105,
      name: 'Campo Redondo',
    },
    {
      id: 2701,
      ibgeId: 2406809,
      name: 'Lajes Pintadas',
    },
    {
      id: 2702,
      ibgeId: 2414001,
      name: 'Tangará',
    },
    {
      id: 2703,
      ibgeId: 2406304,
      name: 'Lagoa de Pedras',
    },
    {
      id: 2704,
      ibgeId: 2410306,
      name: 'Serra Caiada',
    },
    {
      id: 2705,
      ibgeId: 2406601,
      name: 'Lagoa Salgada',
    },
    {
      id: 2706,
      ibgeId: 2413102,
      name: 'Senador Elói de Souza',
    },
    {
      id: 2707,
      ibgeId: 2411502,
      name: 'Santo Antônio',
    },
    {
      id: 2708,
      ibgeId: 2413508,
      name: 'Serrinha',
    },
    {
      id: 2709,
      ibgeId: 2409209,
      name: 'Passagem',
    },
    {
      id: 2710,
      ibgeId: 2405306,
      name: 'Boa Saúde',
    },
    {
      id: 2711,
      ibgeId: 2401701,
      name: 'Bom Jesus',
    },
    {
      id: 2712,
      ibgeId: 2412302,
      name: 'São José do Campestre',
    },
    {
      id: 2713,
      ibgeId: 2407104,
      name: 'Macaíba',
    },
    {
      id: 2714,
      ibgeId: 2412005,
      name: 'São Gonçalo do Amarante',
    },
    {
      id: 2715,
      ibgeId: 2402006,
      name: 'Caicó',
    },
    {
      id: 2716,
      ibgeId: 2412104,
      name: 'São João do Sabugi',
    },
    {
      id: 2717,
      ibgeId: 2404804,
      name: 'Ipueira',
    },
    {
      id: 2718,
      ibgeId: 2413409,
      name: 'Serra Negra do Norte',
    },
    {
      id: 2719,
      ibgeId: 2414308,
      name: 'Timbaúba dos Batistas',
    },
    {
      id: 2720,
      ibgeId: 2405603,
      name: 'Jardim de Piranhas',
    },
    {
      id: 2721,
      ibgeId: 2411809,
      name: 'São Fernando',
    },
    {
      id: 2722,
      ibgeId: 2406106,
      name: 'Jucurutu',
    },
    {
      id: 2723,
      ibgeId: 2403806,
      name: 'Florânia',
    },
    {
      id: 2724,
      ibgeId: 2414159,
      name: 'Tenente Laurentino Cruz',
    },
    {
      id: 2725,
      ibgeId: 2413003,
      name: 'São Vicente',
    },
    {
      id: 2726,
      ibgeId: 2405702,
      name: 'Jardim do Seridó',
    },
    {
      id: 2727,
      ibgeId: 2408508,
      name: 'Ouro Branco',
    },
    {
      id: 2728,
      ibgeId: 2411429,
      name: 'Santana do Seridó',
    },
    {
      id: 2729,
      ibgeId: 2403400,
      name: 'Equador',
    },
    {
      id: 2730,
      ibgeId: 2408904,
      name: 'Parelhas',
    },
    {
      id: 2731,
      ibgeId: 2400109,
      name: 'Acari',
    },
    {
      id: 2732,
      ibgeId: 2402402,
      name: 'Carnaúba dos Dantas',
    },
    {
      id: 2733,
      ibgeId: 2403004,
      name: 'Cruzeta',
    },
    {
      id: 2734,
      ibgeId: 2412401,
      name: 'São José do Seridó',
    },
    {
      id: 2735,
      ibgeId: 2403103,
      name: 'Currais Novos',
    },
    {
      id: 2736,
      ibgeId: 2406502,
      name: 'Lagoa Nova',
    },
    {
      id: 2737,
      ibgeId: 2402709,
      name: 'Cerro Corá',
    },
    {
      id: 2738,
      ibgeId: 2412906,
      name: 'São Tomé',
    },
    {
      id: 2739,
      ibgeId: 2401503,
      name: 'Barcelona',
    },
    {
      id: 2740,
      ibgeId: 2411106,
      name: 'Ruy Barbosa',
    },
    {
      id: 2741,
      ibgeId: 2406403,
      name: 'Lagoa de Velhos',
    },
    {
      id: 2742,
      ibgeId: 2413706,
      name: 'Sítio Novo',
    },
    {
      id: 2743,
      ibgeId: 2412609,
      name: 'São Paulo do Potengi',
    },
    {
      id: 2744,
      ibgeId: 2409332,
      name: 'Santa Maria',
    },
    {
      id: 2745,
      ibgeId: 2410900,
      name: 'Riachuelo',
    },
    {
      id: 2746,
      ibgeId: 2412708,
      name: 'São Pedro',
    },
    {
      id: 2747,
      ibgeId: 2404606,
      name: 'Ielmo Marinho',
    },
    {
      id: 2748,
      ibgeId: 2407203,
      name: 'Macau',
    },
    {
      id: 2749,
      ibgeId: 2409902,
      name: 'Pendências',
    },
    {
      id: 2750,
      ibgeId: 2400703,
      name: 'Alto do Rodrigues',
    },
    {
      id: 2751,
      ibgeId: 2404705,
      name: 'Ipanguaçu',
    },
    {
      id: 2752,
      ibgeId: 2400307,
      name: 'Afonso Bezerra',
    },
    {
      id: 2753,
      ibgeId: 2404853,
      name: 'Itajá',
    },
    {
      id: 2754,
      ibgeId: 2400802,
      name: 'Angicos',
    },
    {
      id: 2755,
      ibgeId: 2403756,
      name: 'Fernando Pedroza',
    },
    {
      id: 2756,
      ibgeId: 2412807,
      name: 'São Rafael',
    },
    {
      id: 2757,
      ibgeId: 2411403,
      name: 'Santana do Matos',
    },
    {
      id: 2758,
      ibgeId: 2401651,
      name: 'Bodó',
    },
    {
      id: 2759,
      ibgeId: 2409704,
      name: 'Pedro Avelino',
    },
    {
      id: 2760,
      ibgeId: 2406700,
      name: 'Lajes',
    },
    {
      id: 2761,
      ibgeId: 2401909,
      name: 'Caiçara do Rio do Vento',
    },
    {
      id: 2762,
      ibgeId: 2405504,
      name: 'Jardim de Angicos',
    },
    {
      id: 2763,
      ibgeId: 2409605,
      name: 'Pedra Preta',
    },
    {
      id: 2764,
      ibgeId: 2405801,
      name: 'João Câmara',
    },
    {
      id: 2765,
      ibgeId: 2401602,
      name: 'Bento Fernandes',
    },
    {
      id: 2766,
      ibgeId: 2410108,
      name: 'Poço Branco',
    },
    {
      id: 2767,
      ibgeId: 2413904,
      name: 'Taipu',
    },
    {
      id: 2768,
      ibgeId: 2402600,
      name: 'Ceará-Mirim',
    },
    {
      id: 2769,
      ibgeId: 2403608,
      name: 'Extremoz',
    },
    {
      id: 2770,
      ibgeId: 2408953,
      name: 'Rio do Fogo',
    },
    {
      id: 2771,
      ibgeId: 2407500,
      name: 'Maxaranguape',
    },
    {
      id: 2772,
      ibgeId: 2410405,
      name: 'Pureza',
    },
    {
      id: 2773,
      ibgeId: 2414407,
      name: 'Touros',
    },
    {
      id: 2774,
      ibgeId: 2412559,
      name: 'São Miguel do Gostoso',
    },
    {
      id: 2775,
      ibgeId: 2408805,
      name: 'Parazinho',
    },
    {
      id: 2776,
      ibgeId: 2409506,
      name: 'Pedra Grande',
    },
    {
      id: 2777,
      ibgeId: 2411601,
      name: 'São Bento do Norte',
    },
    {
      id: 2778,
      ibgeId: 2401859,
      name: 'Caiçara do Norte',
    },
    {
      id: 2779,
      ibgeId: 2405108,
      name: 'Jandaíra',
    },
    {
      id: 2780,
      ibgeId: 2404101,
      name: 'Galinhos',
    },
    {
      id: 2781,
      ibgeId: 2404507,
      name: 'Guamaré',
    },
    {
      id: 2782,
      ibgeId: 2408003,
      name: 'Mossoró',
    },
    {
      id: 2783,
      ibgeId: 2400208,
      name: 'Açu',
    },
    {
      id: 2784,
      ibgeId: 2401107,
      name: 'Areia Branca',
    },
    {
      id: 2785,
      ibgeId: 2408706,
      name: 'Paraú',
    },
    {
      id: 2786,
      ibgeId: 2413359,
      name: 'Serra do Mel',
    },
    {
      id: 2787,
      ibgeId: 2402501,
      name: 'Carnaubais',
    },
    {
      id: 2788,
      ibgeId: 2410256,
      name: 'Porto do Mangue',
    },
    {
      id: 2789,
      ibgeId: 2414605,
      name: 'Upanema',
    },
    {
      id: 2790,
      ibgeId: 2404408,
      name: 'Grossos',
    },
    {
      id: 2791,
      ibgeId: 2411056,
      name: 'Tibau',
    },
    {
      id: 2792,
      ibgeId: 2401305,
      name: 'Campo Grande',
    },
    {
      id: 2793,
      ibgeId: 2414456,
      name: 'Triunfo Potiguar',
    },
    {
      id: 2794,
      ibgeId: 2405207,
      name: 'Janduís',
    },
    {
      id: 2795,
      ibgeId: 2401453,
      name: 'Baraúna',
    },
    {
      id: 2796,
      ibgeId: 2401008,
      name: 'Apodi',
    },
    {
      id: 2797,
      ibgeId: 2408409,
      name: "Olho-D'Água do Borges",
    },
    {
      id: 2798,
      ibgeId: 2410603,
      name: 'Rafael Godeiro',
    },
    {
      id: 2799,
      ibgeId: 2400604,
      name: 'Almino Afonso',
    },
    {
      id: 2800,
      ibgeId: 2409308,
      name: 'Patu',
    },
    {
      id: 2801,
      ibgeId: 2407609,
      name: 'Messias Targino',
    },
    {
      id: 2802,
      ibgeId: 2402303,
      name: 'Caraúbas',
    },
    {
      id: 2803,
      ibgeId: 2404309,
      name: 'Governador Dix-Sept Rosado',
    },
    {
      id: 2804,
      ibgeId: 2403707,
      name: 'Felipe Guerra',
    },
    {
      id: 2805,
      ibgeId: 2407401,
      name: 'Martins',
    },
    {
      id: 2806,
      ibgeId: 2406908,
      name: 'Lucrécia',
    },
    {
      id: 2807,
      ibgeId: 2413557,
      name: 'Serrinha dos Pintos',
    },
    {
      id: 2808,
      ibgeId: 2410207,
      name: 'Portalegre',
    },
    {
      id: 2809,
      ibgeId: 2414902,
      name: 'Viçosa',
    },
    {
      id: 2810,
      ibgeId: 2410702,
      name: 'Riacho da Cruz',
    },
    {
      id: 2811,
      ibgeId: 2411007,
      name: 'Rodolfo Fernandes',
    },
    {
      id: 2812,
      ibgeId: 2413805,
      name: 'Taboleiro Grande',
    },
    {
      id: 2813,
      ibgeId: 2404903,
      name: 'Itaú',
    },
    {
      id: 2814,
      ibgeId: 2413607,
      name: 'Severiano Melo',
    },
    {
      id: 2815,
      ibgeId: 2414506,
      name: 'Umarizal',
    },
    {
      id: 2816,
      ibgeId: 2400901,
      name: 'Antônio Martins',
    },
    {
      id: 2817,
      ibgeId: 2405900,
      name: 'João Dias',
    },
    {
      id: 2818,
      ibgeId: 2404002,
      name: 'Frutuoso Gomes',
    },
    {
      id: 2819,
      ibgeId: 2409407,
      name: 'Pau dos Ferros',
    },
    {
      id: 2820,
      ibgeId: 2403905,
      name: 'Francisco Dantas',
    },
    {
      id: 2821,
      ibgeId: 2403301,
      name: 'Encanto',
    },
    {
      id: 2822,
      ibgeId: 2411908,
      name: 'São Francisco do Oeste',
    },
    {
      id: 2823,
      ibgeId: 2403202,
      name: 'Doutor Severiano',
    },
    {
      id: 2824,
      ibgeId: 2412500,
      name: 'São Miguel',
    },
    {
      id: 2825,
      ibgeId: 2414753,
      name: 'Venha-Ver',
    },
    {
      id: 2826,
      ibgeId: 2402907,
      name: 'Coronel João Pessoa',
    },
    {
      id: 2827,
      ibgeId: 2407005,
      name: 'Luís Gomes',
    },
    {
      id: 2828,
      ibgeId: 2407252,
      name: 'Major Sales',
    },
    {
      id: 2829,
      ibgeId: 2408607,
      name: 'Paraná',
    },
    {
      id: 2830,
      ibgeId: 2414100,
      name: 'Tenente Ananias',
    },
    {
      id: 2831,
      ibgeId: 2410009,
      name: 'Pilões',
    },
    {
      id: 2832,
      ibgeId: 2400505,
      name: 'Alexandria',
    },
    {
      id: 2833,
      ibgeId: 2407302,
      name: 'Marcelino Vieira',
    },
    {
      id: 2834,
      ibgeId: 2406007,
      name: 'José da Penha',
    },
    {
      id: 2835,
      ibgeId: 2410801,
      name: 'Riacho de Santana',
    },
    {
      id: 2836,
      ibgeId: 2410504,
      name: 'Rafael Fernandes',
    },
    {
      id: 2837,
      ibgeId: 2400406,
      name: 'Água Nova',
    },
  ],
  RO: [
    {
      id: 3967,
      ibgeId: 1100205,
      name: 'Porto Velho',
    },
    {
      id: 3968,
      ibgeId: 1100106,
      name: 'Guajará-Mirim',
    },
    {
      id: 3969,
      ibgeId: 1100338,
      name: 'Nova Mamoré',
    },
    {
      id: 3970,
      ibgeId: 1100809,
      name: 'Candeias do Jamari',
    },
    {
      id: 3971,
      ibgeId: 1101104,
      name: 'Itapuã do Oeste',
    },
    {
      id: 3972,
      ibgeId: 1100403,
      name: 'Alto Paraíso',
    },
    {
      id: 3973,
      ibgeId: 1100262,
      name: 'Rio Crespo',
    },
    {
      id: 3974,
      ibgeId: 1100940,
      name: 'Cujubim',
    },
    {
      id: 3975,
      ibgeId: 1101609,
      name: 'Theobroma',
    },
    {
      id: 3976,
      ibgeId: 1101757,
      name: 'Vale do Anari',
    },
    {
      id: 3977,
      ibgeId: 1100130,
      name: "Machadinho D'Oeste",
    },
    {
      id: 3978,
      ibgeId: 1100023,
      name: 'Ariquemes',
    },
    {
      id: 3979,
      ibgeId: 1100452,
      name: 'Buritis',
    },
    {
      id: 3980,
      ibgeId: 1100700,
      name: 'Campo Novo de Rondônia',
    },
    {
      id: 3981,
      ibgeId: 1101401,
      name: 'Monte Negro',
    },
    {
      id: 3982,
      ibgeId: 1100601,
      name: 'Cacaulândia',
    },
    {
      id: 3983,
      ibgeId: 1100114,
      name: 'Jaru',
    },
    {
      id: 3984,
      ibgeId: 1101005,
      name: 'Governador Jorge Teixeira',
    },
    {
      id: 3985,
      ibgeId: 1100122,
      name: 'Ji-Paraná',
    },
    {
      id: 3986,
      ibgeId: 1100254,
      name: 'Presidente Médici',
    },
    {
      id: 3987,
      ibgeId: 1101203,
      name: 'Ministro Andreazza',
    },
    {
      id: 3988,
      ibgeId: 1100155,
      name: 'Ouro Preto do Oeste',
    },
    {
      id: 3989,
      ibgeId: 1101807,
      name: 'Vale do Paraíso',
    },
    {
      id: 3990,
      ibgeId: 1101435,
      name: 'Nova União',
    },
    {
      id: 3991,
      ibgeId: 1101302,
      name: 'Mirante da Serra',
    },
    {
      id: 3992,
      ibgeId: 1101559,
      name: 'Teixeirópolis',
    },
    {
      id: 3993,
      ibgeId: 1101708,
      name: 'Urupá',
    },
    {
      id: 3994,
      ibgeId: 1100346,
      name: "Alvorada D'Oeste",
    },
    {
      id: 3995,
      ibgeId: 1100320,
      name: 'São Miguel do Guaporé',
    },
    {
      id: 3996,
      ibgeId: 1101500,
      name: 'Seringueiras',
    },
    {
      id: 3997,
      ibgeId: 1101492,
      name: 'São Francisco do Guaporé',
    },
    {
      id: 3998,
      ibgeId: 1100080,
      name: 'Costa Marques',
    },
    {
      id: 3999,
      ibgeId: 1100288,
      name: 'Rolim de Moura',
    },
    {
      id: 4000,
      ibgeId: 1100908,
      name: 'Castanheiras',
    },
    {
      id: 4001,
      ibgeId: 1100296,
      name: "Santa Luzia D'Oeste",
    },
    {
      id: 4002,
      ibgeId: 1100379,
      name: 'Alto Alegre dos Parecis',
    },
    {
      id: 4003,
      ibgeId: 1100015,
      name: "Alta Floresta D'Oeste",
    },
    {
      id: 4004,
      ibgeId: 1100502,
      name: 'Novo Horizonte do Oeste',
    },
    {
      id: 4005,
      ibgeId: 1100148,
      name: "Nova Brasilândia D'Oeste",
    },
    {
      id: 4006,
      ibgeId: 1100049,
      name: 'Cacoal',
    },
    {
      id: 4007,
      ibgeId: 1100189,
      name: 'Pimenta Bueno',
    },
    {
      id: 4008,
      ibgeId: 1100098,
      name: "Espigão D'Oeste",
    },
    {
      id: 4009,
      ibgeId: 1101476,
      name: 'Primavera de Rondônia',
    },
    {
      id: 4010,
      ibgeId: 1101484,
      name: "São Felipe D'Oeste",
    },
    {
      id: 4011,
      ibgeId: 1101450,
      name: 'Parecis',
    },
    {
      id: 4012,
      ibgeId: 1100304,
      name: 'Vilhena',
    },
    {
      id: 4013,
      ibgeId: 1100924,
      name: 'Chupinguaia',
    },
    {
      id: 4014,
      ibgeId: 1100064,
      name: 'Colorado do Oeste',
    },
    {
      id: 4015,
      ibgeId: 1100031,
      name: 'Cabixi',
    },
    {
      id: 4016,
      ibgeId: 1100072,
      name: 'Corumbiara',
    },
    {
      id: 4017,
      ibgeId: 1100056,
      name: 'Cerejeiras',
    },
    {
      id: 4018,
      ibgeId: 1101468,
      name: 'Pimenteiras do Oeste',
    },
  ],
  RR: [
    {
      id: 3642,
      ibgeId: 1400100,
      name: 'Boa Vista',
    },
    {
      id: 3643,
      ibgeId: 1400308,
      name: 'Mucajaí',
    },
    {
      id: 3644,
      ibgeId: 1400027,
      name: 'Amajari',
    },
    {
      id: 3645,
      ibgeId: 1400456,
      name: 'Pacaraima',
    },
    {
      id: 3646,
      ibgeId: 1400282,
      name: 'Iracema',
    },
    {
      id: 3647,
      ibgeId: 1400050,
      name: 'Alto Alegre',
    },
    {
      id: 3648,
      ibgeId: 1400407,
      name: 'Normandia',
    },
    {
      id: 3649,
      ibgeId: 1400704,
      name: 'Uiramutã',
    },
    {
      id: 3650,
      ibgeId: 1400209,
      name: 'Caracaraí',
    },
    {
      id: 3651,
      ibgeId: 1400605,
      name: 'São Luiz',
    },
    {
      id: 3652,
      ibgeId: 1400472,
      name: 'Rorainópolis',
    },
    {
      id: 3653,
      ibgeId: 1400506,
      name: 'São João da Baliza',
    },
    {
      id: 3654,
      ibgeId: 1400233,
      name: 'Caroebe',
    },
    {
      id: 3655,
      ibgeId: 1400159,
      name: 'Bonfim',
    },
    {
      id: 3656,
      ibgeId: 1400175,
      name: 'Cantá',
    },
  ],
  RS: [
    {
      id: 5072,
      ibgeId: 4314902,
      name: 'Porto Alegre',
    },
    {
      id: 5076,
      ibgeId: 4304606,
      name: 'Canoas',
    },
    {
      id: 5077,
      ibgeId: 4313375,
      name: 'Nova Santa Rita',
    },
    {
      id: 5078,
      ibgeId: 4312401,
      name: 'Montenegro',
    },
    {
      id: 5079,
      ibgeId: 4309308,
      name: 'Guaíba',
    },
    {
      id: 5080,
      ibgeId: 4320552,
      name: 'Sertão Santana',
    },
    {
      id: 5081,
      ibgeId: 4301909,
      name: 'Barra do Ribeiro',
    },
    {
      id: 5082,
      ibgeId: 4311981,
      name: 'Mariana Pimentel',
    },
    {
      id: 5083,
      ibgeId: 4306767,
      name: 'Eldorado do Sul',
    },
    {
      id: 5084,
      ibgeId: 4318705,
      name: 'São Leopoldo',
    },
    {
      id: 5085,
      ibgeId: 4314803,
      name: 'Portão',
    },
    {
      id: 5086,
      ibgeId: 4320008,
      name: 'Sapucaia do Sul',
    },
    {
      id: 5087,
      ibgeId: 4307708,
      name: 'Esteio',
    },
    {
      id: 5088,
      ibgeId: 4313409,
      name: 'Novo Hamburgo',
    },
    {
      id: 5089,
      ibgeId: 4307609,
      name: 'Estância Velha',
    },
    {
      id: 5090,
      ibgeId: 4303905,
      name: 'Campo Bom',
    },
    {
      id: 5091,
      ibgeId: 4319901,
      name: 'Sapiranga',
    },
    {
      id: 5092,
      ibgeId: 4300877,
      name: 'Araricá',
    },
    {
      id: 5093,
      ibgeId: 4313060,
      name: 'Nova Hartz',
    },
    {
      id: 5094,
      ibgeId: 4310801,
      name: 'Ivoti',
    },
    {
      id: 5095,
      ibgeId: 4311627,
      name: 'Lindolfo Collor',
    },
    {
      id: 5096,
      ibgeId: 4315149,
      name: 'Presidente Lucena',
    },
    {
      id: 5097,
      ibgeId: 4306403,
      name: 'Dois Irmãos',
    },
    {
      id: 5098,
      ibgeId: 4312476,
      name: 'Morro Reuter',
    },
    {
      id: 5099,
      ibgeId: 4316956,
      name: 'Santa Maria do Herval',
    },
    {
      id: 5100,
      ibgeId: 4309209,
      name: 'Gravataí',
    },
    {
      id: 5101,
      ibgeId: 4309050,
      name: 'Glorinha',
    },
    {
      id: 5102,
      ibgeId: 4323002,
      name: 'Viamão',
    },
    {
      id: 5103,
      ibgeId: 4300604,
      name: 'Alvorada',
    },
    {
      id: 5104,
      ibgeId: 4303103,
      name: 'Cachoeirinha',
    },
    {
      id: 5105,
      ibgeId: 4305108,
      name: 'Caxias do Sul',
    },
    {
      id: 5106,
      ibgeId: 4313201,
      name: 'Nova Petrópolis',
    },
    {
      id: 5107,
      ibgeId: 4314423,
      name: 'Picada Café',
    },
    {
      id: 5108,
      ibgeId: 4307906,
      name: 'Farroupilha',
    },
    {
      id: 5109,
      ibgeId: 4304804,
      name: 'Carlos Barbosa',
    },
    {
      id: 5110,
      ibgeId: 4319000,
      name: 'São Marcos',
    },
    {
      id: 5111,
      ibgeId: 4322509,
      name: 'Vacaria',
    },
    {
      id: 5112,
      ibgeId: 4312617,
      name: 'Muitos Capões',
    },
    {
      id: 5113,
      ibgeId: 4312377,
      name: 'Monte Alegre dos Campos',
    },
    {
      id: 5114,
      ibgeId: 4310439,
      name: 'Ipê',
    },
    {
      id: 5115,
      ibgeId: 4320263,
      name: 'Segredo',
    },
    {
      id: 5116,
      ibgeId: 4300802,
      name: 'Antônio Prado',
    },
    {
      id: 5117,
      ibgeId: 4303673,
      name: 'Campestre da Serra',
    },
    {
      id: 5118,
      ibgeId: 4313359,
      name: 'Nova Roma do Sul',
    },
    {
      id: 5119,
      ibgeId: 4308201,
      name: 'Flores da Cunha',
    },
    {
      id: 5120,
      ibgeId: 4313086,
      name: 'Nova Pádua',
    },
    {
      id: 5121,
      ibgeId: 4318622,
      name: 'São José dos Ausentes',
    },
    {
      id: 5122,
      ibgeId: 4302303,
      name: 'Bom Jesus',
    },
    {
      id: 5123,
      ibgeId: 4311304,
      name: 'Lagoa Vermelha',
    },
    {
      id: 5124,
      ibgeId: 4309902,
      name: 'Ibiraiaras',
    },
    {
      id: 5125,
      ibgeId: 4304622,
      name: 'Capão Bonito do Sul',
    },
    {
      id: 5126,
      ibgeId: 4300661,
      name: 'André da Rocha',
    },
    {
      id: 5127,
      ibgeId: 4304952,
      name: 'Caseiros',
    },
    {
      id: 5128,
      ibgeId: 4313300,
      name: 'Nova Prata',
    },
    {
      id: 5129,
      ibgeId: 4323606,
      name: 'Vista Alegre do Prata',
    },
    {
      id: 5130,
      ibgeId: 4322806,
      name: 'Veranópolis',
    },
    {
      id: 5131,
      ibgeId: 4307864,
      name: 'Fagundes Varela',
    },
    {
      id: 5132,
      ibgeId: 4323309,
      name: 'Vila Flores',
    },
    {
      id: 5133,
      ibgeId: 4305959,
      name: 'Cotiporã',
    },
    {
      id: 5134,
      ibgeId: 4312906,
      name: 'Nova Bassano',
    },
    {
      id: 5135,
      ibgeId: 4315172,
      name: 'Protásio Alves',
    },
    {
      id: 5136,
      ibgeId: 4312807,
      name: 'Nova Araçá',
    },
    {
      id: 5137,
      ibgeId: 4309258,
      name: 'Guabiju',
    },
    {
      id: 5138,
      ibgeId: 4314001,
      name: 'Paraí',
    },
    {
      id: 5139,
      ibgeId: 4318440,
      name: 'São Jorge',
    },
    {
      id: 5140,
      ibgeId: 4301800,
      name: 'Barracão',
    },
    {
      id: 5141,
      ibgeId: 4307401,
      name: 'Esmeralda',
    },
    {
      id: 5142,
      ibgeId: 4314464,
      name: 'Pinhal da Serra',
    },
    {
      id: 5143,
      ibgeId: 4318200,
      name: 'São Francisco de Paula',
    },
    {
      id: 5144,
      ibgeId: 4311122,
      name: 'Jaquirana',
    },
    {
      id: 5145,
      ibgeId: 4305306,
      name: 'Chapada',
    },
    {
      id: 5146,
      ibgeId: 4303608,
      name: 'Cambará do Sul',
    },
    {
      id: 5147,
      ibgeId: 4317608,
      name: 'Santo Antônio da Patrulha',
    },
    {
      id: 5148,
      ibgeId: 4304713,
      name: 'Caraá',
    },
    {
      id: 5149,
      ibgeId: 4313508,
      name: 'Osório',
    },
    {
      id: 5150,
      ibgeId: 4311775,
      name: 'Maquiné',
    },
    {
      id: 5151,
      ibgeId: 4321436,
      name: 'Terra de Areia',
    },
    {
      id: 5152,
      ibgeId: 4310652,
      name: 'Itati',
    },
    {
      id: 5153,
      ibgeId: 4313656,
      name: 'Palmares do Sul',
    },
    {
      id: 5154,
      ibgeId: 4304671,
      name: 'Capivari do Sul',
    },
    {
      id: 5155,
      ibgeId: 4317202,
      name: 'Santa Rosa',
    },
    {
      id: 5156,
      ibgeId: 4304630,
      name: 'Capão da Canoa',
    },
    {
      id: 5157,
      ibgeId: 4321501,
      name: 'Torres',
    },
    {
      id: 5158,
      ibgeId: 4306551,
      name: 'Dom Pedro de Alcântara',
    },
    {
      id: 5159,
      ibgeId: 4311734,
      name: 'Mampituba',
    },
    {
      id: 5160,
      ibgeId: 4321832,
      name: 'Três Forquilhas',
    },
    {
      id: 5161,
      ibgeId: 4312443,
      name: 'Morrinhos do Sul',
    },
    {
      id: 5162,
      ibgeId: 4321667,
      name: 'Três Cachoeiras',
    },
    {
      id: 5163,
      ibgeId: 4301057,
      name: 'Arroio do Sal',
    },
    {
      id: 5164,
      ibgeId: 4323804,
      name: 'Xangri-Lá',
    },
    {
      id: 5165,
      ibgeId: 4321600,
      name: 'Tramandaí',
    },
    {
      id: 5166,
      ibgeId: 4305454,
      name: 'Cidreira',
    },
    {
      id: 5167,
      ibgeId: 4301636,
      name: 'Balneário Pinhal',
    },
    {
      id: 5168,
      ibgeId: 4321204,
      name: 'Taquara',
    },
    {
      id: 5169,
      ibgeId: 4310330,
      name: 'Imbé',
    },
    {
      id: 5170,
      ibgeId: 4314050,
      name: 'Parobé',
    },
    {
      id: 5171,
      ibgeId: 4310108,
      name: 'Igrejinha',
    },
    {
      id: 5172,
      ibgeId: 4321709,
      name: 'Três Coroas',
    },
    {
      id: 5173,
      ibgeId: 4309100,
      name: 'Gramado',
    },
    {
      id: 5174,
      ibgeId: 4304408,
      name: 'Canela',
    },
    {
      id: 5175,
      ibgeId: 4316006,
      name: 'Rolante',
    },
    {
      id: 5176,
      ibgeId: 4315750,
      name: 'Riozinho',
    },
    {
      id: 5177,
      ibgeId: 4302105,
      name: 'Bento Gonçalves',
    },
    {
      id: 5178,
      ibgeId: 4317251,
      name: 'Santa Tereza',
    },
    {
      id: 5179,
      ibgeId: 4314548,
      name: 'Pinto Bandeira',
    },
    {
      id: 5180,
      ibgeId: 4312385,
      name: 'Monte Belo do Sul',
    },
    {
      id: 5181,
      ibgeId: 4308607,
      name: 'Garibaldi',
    },
    {
      id: 5182,
      ibgeId: 4305934,
      name: 'Coronel Pilar',
    },
    {
      id: 5183,
      ibgeId: 4302253,
      name: 'Boa Vista do Sul',
    },
    {
      id: 5184,
      ibgeId: 4301651,
      name: 'Barão',
    },
    {
      id: 5185,
      ibgeId: 4315800,
      name: 'Roca Sales',
    },
    {
      id: 5186,
      ibgeId: 4314753,
      name: 'Poço das Antas',
    },
    {
      id: 5187,
      ibgeId: 4304689,
      name: 'Capela de Santana',
    },
    {
      id: 5188,
      ibgeId: 4318614,
      name: 'São José do Sul',
    },
    {
      id: 5189,
      ibgeId: 4316501,
      name: 'Salvador do Sul',
    },
    {
      id: 5190,
      ibgeId: 4318481,
      name: 'São José do Hortêncio',
    },
    {
      id: 5191,
      ibgeId: 4319356,
      name: 'São Pedro da Serra',
    },
    {
      id: 5192,
      ibgeId: 4319505,
      name: 'São Sebastião do Caí',
    },
    {
      id: 5193,
      ibgeId: 4302352,
      name: 'Bom Princípio',
    },
    {
      id: 5194,
      ibgeId: 4311643,
      name: 'Linha Nova',
    },
    {
      id: 5195,
      ibgeId: 4308102,
      name: 'Feliz',
    },
    {
      id: 5196,
      ibgeId: 4300570,
      name: 'Alto Feliz',
    },
    {
      id: 5197,
      ibgeId: 4322251,
      name: 'Tupandi',
    },
    {
      id: 5198,
      ibgeId: 4322541,
      name: 'Vale Real',
    },
    {
      id: 5199,
      ibgeId: 4314035,
      name: 'Pareci Novo',
    },
    {
      id: 5200,
      ibgeId: 4309555,
      name: 'Harmonia',
    },
    {
      id: 5201,
      ibgeId: 4302659,
      name: 'Brochier',
    },
    {
      id: 5202,
      ibgeId: 4311791,
      name: 'Maratá',
    },
    {
      id: 5203,
      ibgeId: 4319752,
      name: 'São Vendelino',
    },
    {
      id: 5204,
      ibgeId: 4322608,
      name: 'Venâncio Aires',
    },
    {
      id: 5205,
      ibgeId: 4308805,
      name: 'General Câmara',
    },
    {
      id: 5206,
      ibgeId: 4322525,
      name: 'Vale Verde',
    },
    {
      id: 5207,
      ibgeId: 4312153,
      name: 'Mato Leitão',
    },
    {
      id: 5208,
      ibgeId: 4322004,
      name: 'Triunfo',
    },
    {
      id: 5209,
      ibgeId: 4321303,
      name: 'Taquari',
    },
    {
      id: 5210,
      ibgeId: 4320859,
      name: 'Tabaí',
    },
    {
      id: 5211,
      ibgeId: 4314159,
      name: 'Paverama',
    },
    {
      id: 5212,
      ibgeId: 4302402,
      name: 'Bom Retiro do Sul',
    },
    {
      id: 5213,
      ibgeId: 4308078,
      name: 'Fazenda Vilanova',
    },
    {
      id: 5214,
      ibgeId: 4307807,
      name: 'Estrela',
    },
    {
      id: 5215,
      ibgeId: 4310363,
      name: 'Imigrante',
    },
    {
      id: 5216,
      ibgeId: 4321451,
      name: 'Teutônia',
    },
    {
      id: 5217,
      ibgeId: 4323770,
      name: 'Westfalia',
    },
    {
      id: 5218,
      ibgeId: 4305587,
      name: 'Colinas',
    },
    {
      id: 5219,
      ibgeId: 4311403,
      name: 'Lajeado',
    },
    {
      id: 5220,
      ibgeId: 4316758,
      name: 'Santa Clara do Sul',
    },
    {
      id: 5221,
      ibgeId: 4320453,
      name: 'Sério',
    },
    {
      id: 5222,
      ibgeId: 4302451,
      name: 'Boqueirão do Leão',
    },
    {
      id: 5223,
      ibgeId: 4312054,
      name: 'Marques de Souza',
    },
    {
      id: 5224,
      ibgeId: 4315156,
      name: 'Progresso',
    },
    {
      id: 5225,
      ibgeId: 4306205,
      name: 'Cruzeiro do Sul',
    },
    {
      id: 5226,
      ibgeId: 4304614,
      name: 'Canudos do Vale',
    },
    {
      id: 5227,
      ibgeId: 4304697,
      name: 'Capitão',
    },
    {
      id: 5228,
      ibgeId: 4308433,
      name: 'Forquetinha',
    },
    {
      id: 5229,
      ibgeId: 4301008,
      name: 'Arroio do Meio',
    },
    {
      id: 5230,
      ibgeId: 4315131,
      name: 'Pouso Novo',
    },
    {
      id: 5231,
      ibgeId: 4321626,
      name: 'Travesseiro',
    },
    {
      id: 5232,
      ibgeId: 4313003,
      name: 'Nova Bréscia',
    },
    {
      id: 5233,
      ibgeId: 4305835,
      name: 'Coqueiro Baixo',
    },
    {
      id: 5234,
      ibgeId: 4306809,
      name: 'Encantado',
    },
    {
      id: 5235,
      ibgeId: 4315453,
      name: 'Relvado',
    },
    {
      id: 5236,
      ibgeId: 4306759,
      name: 'Doutor Ricardo',
    },
    {
      id: 5237,
      ibgeId: 4312609,
      name: 'Muçum',
    },
    {
      id: 5238,
      ibgeId: 4322855,
      name: 'Vespasiano Correa',
    },
    {
      id: 5239,
      ibgeId: 4315206,
      name: 'Putinga',
    },
    {
      id: 5240,
      ibgeId: 4300703,
      name: 'Anta Gorda',
    },
    {
      id: 5241,
      ibgeId: 4310579,
      name: 'Itapucá',
    },
    {
      id: 5242,
      ibgeId: 4312757,
      name: 'Nova Alvorada',
    },
    {
      id: 5243,
      ibgeId: 4310306,
      name: 'Ilópolis',
    },
    {
      id: 5244,
      ibgeId: 4301404,
      name: 'Arvorezinha',
    },
    {
      id: 5245,
      ibgeId: 4314407,
      name: 'Pelotas',
    },
    {
      id: 5246,
      ibgeId: 4322327,
      name: 'Turuçu',
    },
    {
      id: 5247,
      ibgeId: 4312450,
      name: 'Morro Redondo',
    },
    {
      id: 5248,
      ibgeId: 4301073,
      name: 'Arroio do Padre',
    },
    {
      id: 5249,
      ibgeId: 4304663,
      name: 'Capão do Leão',
    },
    {
      id: 5250,
      ibgeId: 4318804,
      name: 'São Lourenço do Sul',
    },
    {
      id: 5251,
      ibgeId: 4300851,
      name: 'Arambaré',
    },
    {
      id: 5252,
      ibgeId: 4306502,
      name: 'Dom Feliciano',
    },
    {
      id: 5253,
      ibgeId: 4305447,
      name: 'Chuvisca',
    },
    {
      id: 5254,
      ibgeId: 4306056,
      name: 'Cristal',
    },
    {
      id: 5255,
      ibgeId: 4315602,
      name: 'Rio Grande',
    },
    {
      id: 5256,
      ibgeId: 4318507,
      name: 'São José do Norte',
    },
    {
      id: 5257,
      ibgeId: 4317301,
      name: 'Santa Vitória do Palmar',
    },
    {
      id: 5258,
      ibgeId: 4305439,
      name: 'Chuí',
    },
    {
      id: 5259,
      ibgeId: 4312500,
      name: 'Mostardas',
    },
    {
      id: 5260,
      ibgeId: 4321352,
      name: 'Tavares',
    },
    {
      id: 5261,
      ibgeId: 4311007,
      name: 'Jaguarão',
    },
    {
      id: 5262,
      ibgeId: 4307104,
      name: 'Herval',
    },
    {
      id: 5263,
      ibgeId: 4301305,
      name: 'Arroio Grande',
    },
    {
      id: 5264,
      ibgeId: 4314209,
      name: 'Pedro Osório',
    },
    {
      id: 5265,
      ibgeId: 4305124,
      name: 'Cerrito',
    },
    {
      id: 5266,
      ibgeId: 4301602,
      name: 'Bagé',
    },
    {
      id: 5267,
      ibgeId: 4300034,
      name: 'Aceguá',
    },
    {
      id: 5268,
      ibgeId: 4306601,
      name: 'Dom Pedrito',
    },
    {
      id: 5269,
      ibgeId: 4309654,
      name: 'Hulha Negra',
    },
    {
      id: 5270,
      ibgeId: 4314506,
      name: 'Pinheiro Machado',
    },
    {
      id: 5271,
      ibgeId: 4314175,
      name: 'Pedras Altas',
    },
    {
      id: 5272,
      ibgeId: 4314605,
      name: 'Piratini',
    },
    {
      id: 5273,
      ibgeId: 4304358,
      name: 'Candiota',
    },
    {
      id: 5274,
      ibgeId: 4303004,
      name: 'Cachoeira do Sul',
    },
    {
      id: 5275,
      ibgeId: 4314027,
      name: 'Paraíso do Sul',
    },
    {
      id: 5276,
      ibgeId: 4305132,
      name: 'Cerro Branco',
    },
    {
      id: 5277,
      ibgeId: 4300109,
      name: 'Agudo',
    },
    {
      id: 5278,
      ibgeId: 4313391,
      name: 'Novo Cabrais',
    },
    {
      id: 5279,
      ibgeId: 4302808,
      name: 'Caçapava do Sul',
    },
    {
      id: 5280,
      ibgeId: 4317004,
      name: 'Santana da Boa Vista',
    },
    {
      id: 5281,
      ibgeId: 4304507,
      name: 'Canguçu',
    },
    {
      id: 5282,
      ibgeId: 4306908,
      name: 'Encruzilhada do Sul',
    },
    {
      id: 5283,
      ibgeId: 4300638,
      name: 'Amaral Ferrador',
    },
    {
      id: 5284,
      ibgeId: 4315701,
      name: 'Rio Pardo',
    },
    {
      id: 5285,
      ibgeId: 4314076,
      name: 'Passo do Sobrado',
    },
    {
      id: 5286,
      ibgeId: 4313953,
      name: 'Pantano Grande',
    },
    {
      id: 5287,
      ibgeId: 4318408,
      name: 'São Jerônimo',
    },
    {
      id: 5288,
      ibgeId: 4301750,
      name: 'Barão do Triunfo',
    },
    {
      id: 5289,
      ibgeId: 4301107,
      name: 'Arroio dos Ratos',
    },
    {
      id: 5290,
      ibgeId: 4305355,
      name: 'Charqueadas',
    },
    {
      id: 5291,
      ibgeId: 4302709,
      name: 'Butiá',
    },
    {
      id: 5292,
      ibgeId: 4312252,
      name: 'Minas do Leão',
    },
    {
      id: 5293,
      ibgeId: 4321105,
      name: 'Tapes',
    },
    {
      id: 5294,
      ibgeId: 4320354,
      name: 'Sentinela do Sul',
    },
    {
      id: 5295,
      ibgeId: 4305173,
      name: 'Cerro Grande do Sul',
    },
    {
      id: 5296,
      ibgeId: 4303509,
      name: 'Camaquã',
    },
    {
      id: 5297,
      ibgeId: 4316808,
      name: 'Santa Cruz do Sul',
    },
    {
      id: 5298,
      ibgeId: 4319109,
      name: 'São Martinho',
    },
    {
      id: 5299,
      ibgeId: 4309159,
      name: 'Gramado Xavier',
    },
    {
      id: 5300,
      ibgeId: 4322533,
      name: 'Vale do Sol',
    },
    {
      id: 5301,
      ibgeId: 4322707,
      name: 'Vera Cruz',
    },
    {
      id: 5302,
      ibgeId: 4309571,
      name: 'Herveiras',
    },
    {
      id: 5303,
      ibgeId: 4320677,
      name: 'Sinimbu',
    },
    {
      id: 5304,
      ibgeId: 4320701,
      name: 'Sobradinho',
    },
    {
      id: 5305,
      ibgeId: 4314068,
      name: 'Passa Sete',
    },
    {
      id: 5306,
      ibgeId: 4311239,
      name: 'Lagoa Bonita do Sul',
    },
    {
      id: 5307,
      ibgeId: 4309753,
      name: 'Ibarama',
    },
    {
      id: 5308,
      ibgeId: 4304200,
      name: 'Candelária',
    },
    {
      id: 5309,
      ibgeId: 4301206,
      name: 'Arroio do Tigre',
    },
    {
      id: 5310,
      ibgeId: 4307815,
      name: 'Estrela Velha',
    },
    {
      id: 5311,
      ibgeId: 4316907,
      name: 'Santa Maria',
    },
    {
      id: 5312,
      ibgeId: 4306379,
      name: 'Dilermando de Aguiar',
    },
    {
      id: 5313,
      ibgeId: 4310538,
      name: 'Itaara',
    },
    {
      id: 5314,
      ibgeId: 4319125,
      name: 'São Martinho da Serra',
    },
    {
      id: 5315,
      ibgeId: 4320651,
      name: 'Silveira Martins',
    },
    {
      id: 5316,
      ibgeId: 4315503,
      name: 'Restinga Seca',
    },
    {
      id: 5317,
      ibgeId: 4308409,
      name: 'Formigueiro',
    },
    {
      id: 5318,
      ibgeId: 4308003,
      name: 'Faxinal do Soturno',
    },
    {
      id: 5319,
      ibgeId: 4318432,
      name: 'São João do Polêsine',
    },
    {
      id: 5320,
      ibgeId: 4313102,
      name: 'Nova Palma',
    },
    {
      id: 5321,
      ibgeId: 4306700,
      name: 'Dona Francisca',
    },
    {
      id: 5322,
      ibgeId: 4318309,
      name: 'São Gabriel',
    },
    {
      id: 5323,
      ibgeId: 4316972,
      name: 'Santa Margarida do Sul',
    },
    {
      id: 5324,
      ibgeId: 4319604,
      name: 'São Sepé',
    },
    {
      id: 5325,
      ibgeId: 4323457,
      name: 'Vila Nova do Sul',
    },
    {
      id: 5326,
      ibgeId: 4311502,
      name: 'Lavras do Sul',
    },
    {
      id: 5327,
      ibgeId: 4319406,
      name: 'São Pedro do Sul',
    },
    {
      id: 5328,
      ibgeId: 4312104,
      name: 'Mata',
    },
    {
      id: 5329,
      ibgeId: 4321493,
      name: 'Toropi',
    },
    {
      id: 5330,
      ibgeId: 4319802,
      name: 'São Vicente do Sul',
    },
    {
      id: 5331,
      ibgeId: 4302907,
      name: 'Cacequi',
    },
    {
      id: 5332,
      ibgeId: 4322400,
      name: 'Uruguaiana',
    },
    {
      id: 5333,
      ibgeId: 4301875,
      name: 'Barra do Quaraí',
    },
    {
      id: 5334,
      ibgeId: 4300406,
      name: 'Alegrete',
    },
    {
      id: 5335,
      ibgeId: 4315305,
      name: 'Quaraí',
    },
    {
      id: 5336,
      ibgeId: 4317103,
      name: 'Santana do Livramento',
    },
    {
      id: 5337,
      ibgeId: 4316402,
      name: 'Rosário do Sul',
    },
    {
      id: 5338,
      ibgeId: 4318101,
      name: 'São Francisco de Assis',
    },
    {
      id: 5339,
      ibgeId: 4311759,
      name: 'Manoel Viana',
    },
    {
      id: 5340,
      ibgeId: 4311718,
      name: 'Maçambará',
    },
    {
      id: 5341,
      ibgeId: 4310603,
      name: 'Itaqui',
    },
    {
      id: 5342,
      ibgeId: 4318002,
      name: 'São Borja',
    },
    {
      id: 5343,
      ibgeId: 4310553,
      name: 'Itacurubi',
    },
    {
      id: 5344,
      ibgeId: 4308656,
      name: 'Garruchos',
    },
    {
      id: 5345,
      ibgeId: 4317400,
      name: 'Santiago',
    },
    {
      id: 5346,
      ibgeId: 4304655,
      name: 'Capão do Cipó',
    },
    {
      id: 5347,
      ibgeId: 4322376,
      name: 'Unistalda',
    },
    {
      id: 5348,
      ibgeId: 4311106,
      name: 'Jaguari',
    },
    {
      id: 5349,
      ibgeId: 4313037,
      name: 'Nova Esperança do Sul',
    },
    {
      id: 5350,
      ibgeId: 4318903,
      name: 'São Luiz Gonzaga',
    },
    {
      id: 5351,
      ibgeId: 4315958,
      name: 'Rolador',
    },
    {
      id: 5352,
      ibgeId: 4306353,
      name: 'Dezesseis de Novembro',
    },
    {
      id: 5353,
      ibgeId: 4302501,
      name: 'Bossoroca',
    },
    {
      id: 5354,
      ibgeId: 4317707,
      name: 'Santo Antônio das Missões',
    },
    {
      id: 5355,
      ibgeId: 4319208,
      name: 'São Nicolau',
    },
    {
      id: 5356,
      ibgeId: 4314555,
      name: 'Pirapó',
    },
    {
      id: 5357,
      ibgeId: 4305207,
      name: 'Cerro Largo',
    },
    {
      id: 5358,
      ibgeId: 4319372,
      name: 'São Pedro do Butiá',
    },
    {
      id: 5359,
      ibgeId: 4303301,
      name: 'Caibaté',
    },
    {
      id: 5360,
      ibgeId: 4312179,
      name: 'Mato Queimado',
    },
    {
      id: 5361,
      ibgeId: 4316477,
      name: 'Salvador das Missões',
    },
    {
      id: 5362,
      ibgeId: 4309506,
      name: 'Guarani das Missões',
    },
    {
      id: 5363,
      ibgeId: 4320578,
      name: 'Sete de Setembro',
    },
    {
      id: 5364,
      ibgeId: 4316303,
      name: 'Roque Gonzales',
    },
    {
      id: 5365,
      ibgeId: 4319307,
      name: 'São Paulo das Missões',
    },
    {
      id: 5366,
      ibgeId: 4306106,
      name: 'Cruz Alta',
    },
    {
      id: 5367,
      ibgeId: 4302220,
      name: 'Boa Vista do Cadeado',
    },
    {
      id: 5368,
      ibgeId: 4302238,
      name: 'Boa Vista do Incra',
    },
    {
      id: 5369,
      ibgeId: 4308458,
      name: 'Fortaleza dos Valos',
    },
    {
      id: 5370,
      ibgeId: 4311205,
      name: 'Júlio de Castilhos',
    },
    {
      id: 5371,
      ibgeId: 4315321,
      name: 'Quevedos',
    },
    {
      id: 5372,
      ibgeId: 4314472,
      name: 'Pinhal Grande',
    },
    {
      id: 5373,
      ibgeId: 4310751,
      name: 'Ivorá',
    },
    {
      id: 5374,
      ibgeId: 4322202,
      name: 'Tupanciretã',
    },
    {
      id: 5375,
      ibgeId: 4311130,
      name: 'Jari',
    },
    {
      id: 5376,
      ibgeId: 4311155,
      name: 'Jóia',
    },
    {
      id: 5377,
      ibgeId: 4310009,
      name: 'Ibirubá',
    },
    {
      id: 5378,
      ibgeId: 4315354,
      name: 'Quinze de Novembro',
    },
    {
      id: 5379,
      ibgeId: 4316709,
      name: 'Santa Bárbara do Sul',
    },
    {
      id: 5380,
      ibgeId: 4316436,
      name: 'Saldanha Marinho',
    },
    {
      id: 5381,
      ibgeId: 4314308,
      name: 'Pejuçara',
    },
    {
      id: 5382,
      ibgeId: 4313904,
      name: 'Panambi',
    },
    {
      id: 5383,
      ibgeId: 4305702,
      name: 'Condor',
    },
    {
      id: 5384,
      ibgeId: 4313706,
      name: 'Palmeira das Missões',
    },
    {
      id: 5385,
      ibgeId: 4311429,
      name: 'Lajeado do Bugre',
    },
    {
      id: 5386,
      ibgeId: 4319364,
      name: 'São Pedro das Missões',
    },
    {
      id: 5387,
      ibgeId: 4318457,
      name: 'São José das Missões',
    },
    {
      id: 5388,
      ibgeId: 4316428,
      name: 'Sagrada Família',
    },
    {
      id: 5389,
      ibgeId: 4302154,
      name: 'Boa Vista das Missões',
    },
    {
      id: 5390,
      ibgeId: 4313490,
      name: 'Novo Barreiro',
    },
    {
      id: 5391,
      ibgeId: 4305157,
      name: 'Cerro Grande',
    },
    {
      id: 5392,
      ibgeId: 4314456,
      name: 'Pinhal',
    },
    {
      id: 5393,
      ibgeId: 4310850,
      name: 'Jaboticaba',
    },
    {
      id: 5394,
      ibgeId: 4315909,
      name: 'Rodeio Bonito',
    },
    {
      id: 5395,
      ibgeId: 4306072,
      name: 'Cristal do Sul',
    },
    {
      id: 5396,
      ibgeId: 4313441,
      name: 'Novo Tiradentes',
    },
    {
      id: 5397,
      ibgeId: 4320206,
      name: 'Seberi',
    },
    {
      id: 5398,
      ibgeId: 4306429,
      name: 'Dois Irmãos das Missões',
    },
    {
      id: 5399,
      ibgeId: 4307302,
      name: 'Erval Seco',
    },
    {
      id: 5400,
      ibgeId: 4308508,
      name: 'Frederico Westphalen',
    },
    {
      id: 5401,
      ibgeId: 4321329,
      name: 'Taquaruçu do Sul',
    },
    {
      id: 5402,
      ibgeId: 4323507,
      name: 'Vista Alegre',
    },
    {
      id: 5403,
      ibgeId: 4313805,
      name: 'Palmitinho',
    },
    {
      id: 5404,
      ibgeId: 4314498,
      name: 'Pinheirinho do Vale',
    },
    {
      id: 5405,
      ibgeId: 4303400,
      name: 'Caiçara',
    },
    {
      id: 5406,
      ibgeId: 4323101,
      name: 'Vicente Dutra',
    },
    {
      id: 5407,
      ibgeId: 4310504,
      name: 'Iraí',
    },
    {
      id: 5408,
      ibgeId: 4300646,
      name: 'Ametista do Sul',
    },
    {
      id: 5409,
      ibgeId: 4314704,
      name: 'Planalto',
    },
    {
      id: 5410,
      ibgeId: 4300505,
      name: 'Alpestre',
    },
    {
      id: 5411,
      ibgeId: 4321402,
      name: 'Tenente Portela',
    },
    {
      id: 5412,
      ibgeId: 4306320,
      name: 'Derrubadas',
    },
    {
      id: 5413,
      ibgeId: 4301859,
      name: 'Barra do Guarita',
    },
    {
      id: 5414,
      ibgeId: 4323705,
      name: 'Vista Gaúcha',
    },
    {
      id: 5415,
      ibgeId: 4312302,
      name: 'Miraguaí',
    },
    {
      id: 5416,
      ibgeId: 4315404,
      name: 'Redentora',
    },
    {
      id: 5417,
      ibgeId: 4302600,
      name: 'Braga',
    },
    {
      id: 5418,
      ibgeId: 4304002,
      name: 'Campo Novo',
    },
    {
      id: 5419,
      ibgeId: 4302378,
      name: 'Bom Progresso',
    },
    {
      id: 5420,
      ibgeId: 4305900,
      name: 'Coronel Bicaco',
    },
    {
      id: 5421,
      ibgeId: 4317806,
      name: 'Santo Augusto',
    },
    {
      id: 5422,
      ibgeId: 4319737,
      name: 'São Valério do Sul',
    },
    {
      id: 5423,
      ibgeId: 4321907,
      name: 'Três Passos',
    },
    {
      id: 5424,
      ibgeId: 4307450,
      name: 'Esperança do Sul',
    },
    {
      id: 5425,
      ibgeId: 4306007,
      name: 'Crissiumal',
    },
    {
      id: 5426,
      ibgeId: 4309704,
      name: 'Humaitá',
    },
    {
      id: 5427,
      ibgeId: 4320230,
      name: 'Sede Nova',
    },
    {
      id: 5428,
      ibgeId: 4321477,
      name: 'Tiradentes do Sul',
    },
    {
      id: 5429,
      ibgeId: 4310207,
      name: 'Ijuí',
    },
    {
      id: 5430,
      ibgeId: 4302584,
      name: 'Bozano',
    },
    {
      id: 5431,
      ibgeId: 4305871,
      name: 'Coronel Barros',
    },
    {
      id: 5432,
      ibgeId: 4301503,
      name: 'Augusto Pestana',
    },
    {
      id: 5433,
      ibgeId: 4300208,
      name: 'Ajuricaba',
    },
    {
      id: 5434,
      ibgeId: 4313334,
      name: 'Nova Ramada',
    },
    {
      id: 5435,
      ibgeId: 4305405,
      name: 'Chiapetta',
    },
    {
      id: 5436,
      ibgeId: 4310413,
      name: 'Inhacorá',
    },
    {
      id: 5437,
      ibgeId: 4305009,
      name: 'Catuípe',
    },
    {
      id: 5438,
      ibgeId: 4317509,
      name: 'Santo Ângelo',
    },
    {
      id: 5439,
      ibgeId: 4323754,
      name: 'Vitória das Missões',
    },
    {
      id: 5440,
      ibgeId: 4306932,
      name: 'Entre-Ijuís',
    },
    {
      id: 5441,
      ibgeId: 4307831,
      name: 'Eugênio de Castro',
    },
    {
      id: 5442,
      ibgeId: 4319158,
      name: 'São Miguel das Missões',
    },
    {
      id: 5443,
      ibgeId: 4309001,
      name: 'Giruá',
    },
    {
      id: 5444,
      ibgeId: 4320321,
      name: 'Senador Salgado Filho',
    },
    {
      id: 5445,
      ibgeId: 4322343,
      name: 'Ubiretama',
    },
    {
      id: 5446,
      ibgeId: 4300455,
      name: 'Alegria',
    },
    {
      id: 5447,
      ibgeId: 4321808,
      name: 'Três de Maio',
    },
    {
      id: 5448,
      ibgeId: 4310405,
      name: 'Independência',
    },
    {
      id: 5449,
      ibgeId: 4302204,
      name: 'Boa Vista do Buricá',
    },
    {
      id: 5450,
      ibgeId: 4313011,
      name: 'Nova Candelária',
    },
    {
      id: 5451,
      ibgeId: 4309605,
      name: 'Horizontina',
    },
    {
      id: 5452,
      ibgeId: 4306734,
      name: 'Doutor Maurício Cardoso',
    },
    {
      id: 5453,
      ibgeId: 4322103,
      name: 'Tucunduva',
    },
    {
      id: 5454,
      ibgeId: 4322301,
      name: 'Tuparendi',
    },
    {
      id: 5455,
      ibgeId: 4315057,
      name: 'Porto Mauá',
    },
    {
      id: 5456,
      ibgeId: 4300307,
      name: 'Alecrim',
    },
    {
      id: 5457,
      ibgeId: 4313425,
      name: 'Novo Machado',
    },
    {
      id: 5458,
      ibgeId: 4318499,
      name: 'São José do Inhacorá',
    },
    {
      id: 5459,
      ibgeId: 4317905,
      name: 'Santo Cristo',
    },
    {
      id: 5460,
      ibgeId: 4304309,
      name: 'Cândido Godói',
    },
    {
      id: 5461,
      ibgeId: 4303707,
      name: 'Campina das Missões',
    },
    {
      id: 5462,
      ibgeId: 4315008,
      name: 'Porto Lucena',
    },
    {
      id: 5463,
      ibgeId: 4315073,
      name: 'Porto Vera Cruz',
    },
    {
      id: 5464,
      ibgeId: 4315107,
      name: 'Porto Xavier',
    },
    {
      id: 5465,
      ibgeId: 4314100,
      name: 'Passo Fundo',
    },
    {
      id: 5466,
      ibgeId: 4307054,
      name: 'Ernestina',
    },
    {
      id: 5467,
      ibgeId: 4305975,
      name: 'Coxilha',
    },
    {
      id: 5468,
      ibgeId: 4311809,
      name: 'Marau',
    },
    {
      id: 5469,
      ibgeId: 4323408,
      name: 'Vila Maria',
    },
    {
      id: 5470,
      ibgeId: 4308854,
      name: 'Gentil',
    },
    {
      id: 5471,
      ibgeId: 4303558,
      name: 'Camargo',
    },
    {
      id: 5472,
      ibgeId: 4320503,
      name: 'Sertão',
    },
    {
      id: 5473,
      ibgeId: 4312674,
      name: 'Nicolau Vergueiro',
    },
    {
      id: 5474,
      ibgeId: 4312138,
      name: 'Mato Castelhano',
    },
    {
      id: 5475,
      ibgeId: 4314779,
      name: 'Pontão',
    },
    {
      id: 5476,
      ibgeId: 4309407,
      name: 'Guaporé',
    },
    {
      id: 5477,
      ibgeId: 4322350,
      name: 'União da Serra',
    },
    {
      id: 5478,
      ibgeId: 4306452,
      name: 'Dois Lajeados',
    },
    {
      id: 5479,
      ibgeId: 4319711,
      name: 'São Valentim do Sul',
    },
    {
      id: 5480,
      ibgeId: 4320404,
      name: 'Serafina Corrêa',
    },
    {
      id: 5481,
      ibgeId: 4312351,
      name: 'Montauri',
    },
    {
      id: 5482,
      ibgeId: 4304903,
      name: 'Casca',
    },
    {
      id: 5483,
      ibgeId: 4317558,
      name: 'Santo Antônio do Palma',
    },
    {
      id: 5484,
      ibgeId: 4318051,
      name: 'São Domingos do Sul',
    },
    {
      id: 5485,
      ibgeId: 4322558,
      name: 'Vanini',
    },
    {
      id: 5486,
      ibgeId: 4320800,
      name: 'Soledade',
    },
    {
      id: 5487,
      ibgeId: 4312427,
      name: 'Mormaço',
    },
    {
      id: 5488,
      ibgeId: 4309951,
      name: 'Ibirapuitã',
    },
    {
      id: 5489,
      ibgeId: 4322152,
      name: 'Tunas',
    },
    {
      id: 5490,
      ibgeId: 4311254,
      name: 'Lagoão',
    },
    {
      id: 5491,
      ibgeId: 4321469,
      name: 'Tio Hugo',
    },
    {
      id: 5492,
      ibgeId: 4323200,
      name: 'Victor Graeff',
    },
    {
      id: 5493,
      ibgeId: 4302006,
      name: 'Barros Cassal',
    },
    {
      id: 5494,
      ibgeId: 4308300,
      name: 'Fontoura Xavier',
    },
    {
      id: 5495,
      ibgeId: 4318465,
      name: 'São José do Herval',
    },
    {
      id: 5496,
      ibgeId: 4307500,
      name: 'Espumoso',
    },
    {
      id: 5497,
      ibgeId: 4300554,
      name: 'Alto Alegre',
    },
    {
      id: 5498,
      ibgeId: 4304101,
      name: 'Campos Borges',
    },
    {
      id: 5499,
      ibgeId: 4316451,
      name: 'Salto do Jacuí',
    },
    {
      id: 5500,
      ibgeId: 4320305,
      name: 'Selbach',
    },
    {
      id: 5501,
      ibgeId: 4310876,
      name: 'Jacuizinho',
    },
    {
      id: 5502,
      ibgeId: 4305603,
      name: 'Colorado',
    },
    {
      id: 5503,
      ibgeId: 4312658,
      name: 'Não-Me-Toque',
    },
    {
      id: 5504,
      ibgeId: 4321006,
      name: 'Tapera',
    },
    {
      id: 5505,
      ibgeId: 4311270,
      name: 'Lagoa dos Três Cantos',
    },
    {
      id: 5506,
      ibgeId: 4304705,
      name: 'Carazinho',
    },
    {
      id: 5507,
      ibgeId: 4300471,
      name: 'Almirante Tamandaré do Sul',
    },
    {
      id: 5508,
      ibgeId: 4317756,
      name: 'Santo Antônio do Planalto',
    },
    {
      id: 5509,
      ibgeId: 4305850,
      name: 'Coqueiros do Sul',
    },
    {
      id: 5510,
      ibgeId: 4320107,
      name: 'Sarandi',
    },
    {
      id: 5511,
      ibgeId: 4312955,
      name: 'Nova Boa Vista',
    },
    {
      id: 5512,
      ibgeId: 4301958,
      name: 'Barra Funda',
    },
    {
      id: 5513,
      ibgeId: 4316204,
      name: 'Rondinha',
    },
    {
      id: 5514,
      ibgeId: 4312708,
      name: 'Nonoai',
    },
    {
      id: 5515,
      ibgeId: 4309126,
      name: 'Gramado dos Loureiros',
    },
    {
      id: 5516,
      ibgeId: 4315552,
      name: 'Rio dos Índios',
    },
    {
      id: 5517,
      ibgeId: 4321956,
      name: 'Trindade do Sul',
    },
    {
      id: 5518,
      ibgeId: 4319703,
      name: 'São Valentim',
    },
    {
      id: 5519,
      ibgeId: 4306957,
      name: 'Entre Rios do Sul',
    },
    {
      id: 5520,
      ibgeId: 4302055,
      name: 'Benjamin Constant do Sul',
    },
    {
      id: 5521,
      ibgeId: 4308052,
      name: 'Faxinalzinho',
    },
    {
      id: 5522,
      ibgeId: 4303806,
      name: 'Campinas do Sul',
    },
    {
      id: 5523,
      ibgeId: 4306130,
      name: 'Cruzaltense',
    },
    {
      id: 5524,
      ibgeId: 4316105,
      name: 'Ronda Alta',
    },
    {
      id: 5525,
      ibgeId: 4321857,
      name: 'Três Palmeiras',
    },
    {
      id: 5526,
      ibgeId: 4305801,
      name: 'Constantina',
    },
    {
      id: 5527,
      ibgeId: 4313466,
      name: 'Novo Xingu',
    },
    {
      id: 5528,
      ibgeId: 4311601,
      name: 'Liberato Salzano',
    },
    {
      id: 5529,
      ibgeId: 4306924,
      name: 'Engenho Velho',
    },
    {
      id: 5530,
      ibgeId: 4307005,
      name: 'Erechim',
    },
    {
      id: 5531,
      ibgeId: 4314134,
      name: 'Paulo Bento',
    },
    {
      id: 5532,
      ibgeId: 4315313,
      name: 'Quatro Irmãos',
    },
    {
      id: 5533,
      ibgeId: 4321634,
      name: 'Três Arroios',
    },
    {
      id: 5534,
      ibgeId: 4310900,
      name: 'Jacutinga',
    },
    {
      id: 5535,
      ibgeId: 4314787,
      name: 'Ponte Preta',
    },
    {
      id: 5536,
      ibgeId: 4301701,
      name: 'Barão de Cotegipe',
    },
    {
      id: 5537,
      ibgeId: 4307203,
      name: 'Erval Grande',
    },
    {
      id: 5538,
      ibgeId: 4310702,
      name: 'Itatiba do Sul',
    },
    {
      id: 5539,
      ibgeId: 4300901,
      name: 'Aratiba',
    },
    {
      id: 5540,
      ibgeId: 4312005,
      name: 'Mariano Moro',
    },
    {
      id: 5541,
      ibgeId: 4301925,
      name: 'Barra do Rio Azul',
    },
    {
      id: 5542,
      ibgeId: 4311908,
      name: 'Marcelino Ramos',
    },
    {
      id: 5543,
      ibgeId: 4320602,
      name: 'Severiano de Almeida',
    },
    {
      id: 5544,
      ibgeId: 4322905,
      name: 'Viadutos',
    },
    {
      id: 5545,
      ibgeId: 4304853,
      name: 'Carlos Gomes',
    },
    {
      id: 5546,
      ibgeId: 4308706,
      name: 'Gaurama',
    },
    {
      id: 5547,
      ibgeId: 4301552,
      name: 'Áurea',
    },
    {
      id: 5548,
      ibgeId: 4305116,
      name: 'Centenário',
    },
    {
      id: 5549,
      ibgeId: 4316600,
      name: 'Sananduva',
    },
    {
      id: 5550,
      ibgeId: 4313607,
      name: 'Paim Filho',
    },
    {
      id: 5551,
      ibgeId: 4318424,
      name: 'São João da Urtiga',
    },
    {
      id: 5552,
      ibgeId: 4303202,
      name: 'Cacique Doble',
    },
    {
      id: 5553,
      ibgeId: 4318606,
      name: 'São José do Ouro',
    },
    {
      id: 5554,
      ibgeId: 4322186,
      name: 'Tupanci do Sul',
    },
    {
      id: 5555,
      ibgeId: 4311700,
      name: 'Machadinho',
    },
    {
      id: 5556,
      ibgeId: 4312203,
      name: 'Maximiliano de Almeida',
    },
    {
      id: 5557,
      ibgeId: 4317954,
      name: 'Santo Expedito do Sul',
    },
    {
      id: 5558,
      ibgeId: 4308904,
      name: 'Getúlio Vargas',
    },
    {
      id: 5559,
      ibgeId: 4308250,
      name: 'Floriano Peixoto',
    },
    {
      id: 5560,
      ibgeId: 4306973,
      name: 'Erebango',
    },
    {
      id: 5561,
      ibgeId: 4310462,
      name: 'Ipiranga do Sul',
    },
    {
      id: 5562,
      ibgeId: 4307559,
      name: 'Estação',
    },
    {
      id: 5563,
      ibgeId: 4309803,
      name: 'Ibiaçá',
    },
    {
      id: 5564,
      ibgeId: 4320909,
      name: 'Tapejara',
    },
    {
      id: 5565,
      ibgeId: 4316733,
      name: 'Santa Cecília do Sul',
    },
    {
      id: 5566,
      ibgeId: 4323358,
      name: 'Vila Lângaro',
    },
    {
      id: 5567,
      ibgeId: 4305371,
      name: 'Charrua',
    },
    {
      id: 5568,
      ibgeId: 4300059,
      name: 'Água Santa',
    },
    {
      id: 5569,
      ibgeId: 4305504,
      name: 'Ciríaco',
    },
    {
      id: 5570,
      ibgeId: 4306304,
      name: 'David Canabarro',
    },
    {
      id: 5571,
      ibgeId: 4312625,
      name: 'Muliterno',
    },
  ],
  SC: [
    {
      id: 4777,
      ibgeId: 4205407,
      name: 'Florianópolis',
    },
    {
      id: 4778,
      ibgeId: 4216602,
      name: 'São José',
    },
    {
      id: 4779,
      ibgeId: 4217253,
      name: 'São Pedro de Alcântara',
    },
    {
      id: 4780,
      ibgeId: 4211900,
      name: 'Palhoça',
    },
    {
      id: 4781,
      ibgeId: 4215703,
      name: 'Santo Amaro da Imperatriz',
    },
    {
      id: 4782,
      ibgeId: 4200606,
      name: 'Águas Mornas',
    },
    {
      id: 4783,
      ibgeId: 4202305,
      name: 'Biguaçu',
    },
    {
      id: 4784,
      ibgeId: 4201208,
      name: 'Antônio Carlos',
    },
    {
      id: 4785,
      ibgeId: 4206009,
      name: 'Governador Celso Ramos',
    },
    {
      id: 4786,
      ibgeId: 4218004,
      name: 'Tijucas',
    },
    {
      id: 4787,
      ibgeId: 4213500,
      name: 'Porto Belo',
    },
    {
      id: 4788,
      ibgeId: 4202453,
      name: 'Bombinhas',
    },
    {
      id: 4789,
      ibgeId: 4208302,
      name: 'Itapema',
    },
    {
      id: 4790,
      ibgeId: 4203709,
      name: 'Canelinha',
    },
    {
      id: 4791,
      ibgeId: 4216305,
      name: 'São João Batista',
    },
    {
      id: 4792,
      ibgeId: 4210209,
      name: 'Major Gercino',
    },
    {
      id: 4793,
      ibgeId: 4211504,
      name: 'Nova Trento',
    },
    {
      id: 4794,
      ibgeId: 4202701,
      name: 'Botuverá',
    },
    {
      id: 4795,
      ibgeId: 4208203,
      name: 'Itajaí',
    },
    {
      id: 4796,
      ibgeId: 4207106,
      name: 'Ilhota',
    },
    {
      id: 4797,
      ibgeId: 4202008,
      name: 'Balneário Camboriú',
    },
    {
      id: 4798,
      ibgeId: 4203204,
      name: 'Camboriú',
    },
    {
      id: 4799,
      ibgeId: 4202909,
      name: 'Brusque',
    },
    {
      id: 4800,
      ibgeId: 4206306,
      name: 'Guabiruba',
    },
    {
      id: 4801,
      ibgeId: 4211306,
      name: 'Navegantes',
    },
    {
      id: 4802,
      ibgeId: 4212809,
      name: 'Balneário Piçarras',
    },
    {
      id: 4803,
      ibgeId: 4212502,
      name: 'Penha',
    },
    {
      id: 4804,
      ibgeId: 4202107,
      name: 'Barra Velha',
    },
    {
      id: 4805,
      ibgeId: 4216354,
      name: 'São João do Itaperiú',
    },
    {
      id: 4806,
      ibgeId: 4208500,
      name: 'Ituporanga',
    },
    {
      id: 4807,
      ibgeId: 4204194,
      name: 'Chapadão do Lageado',
    },
    {
      id: 4808,
      ibgeId: 4201802,
      name: 'Atalanta',
    },
    {
      id: 4809,
      ibgeId: 4200200,
      name: 'Agrolândia',
    },
    {
      id: 4810,
      ibgeId: 4212700,
      name: 'Petrolândia',
    },
    {
      id: 4811,
      ibgeId: 4207403,
      name: 'Imbuia',
    },
    {
      id: 4812,
      ibgeId: 4219200,
      name: 'Vidal Ramos',
    },
    {
      id: 4813,
      ibgeId: 4209805,
      name: 'Leoberto Leal',
    },
    {
      id: 4814,
      ibgeId: 4200705,
      name: 'Alfredo Wagner',
    },
    {
      id: 4815,
      ibgeId: 4200903,
      name: 'Angelina',
    },
    {
      id: 4816,
      ibgeId: 4214300,
      name: 'Rancho Queimado',
    },
    {
      id: 4817,
      ibgeId: 4201109,
      name: 'Anitápolis',
    },
    {
      id: 4818,
      ibgeId: 4215901,
      name: 'São Bonifácio',
    },
    {
      id: 4819,
      ibgeId: 4212304,
      name: 'Paulo Lopes',
    },
    {
      id: 4820,
      ibgeId: 4205704,
      name: 'Garopaba',
    },
    {
      id: 4821,
      ibgeId: 4209300,
      name: 'Lages',
    },
    {
      id: 4822,
      ibgeId: 4204558,
      name: 'Correia Pinto',
    },
    {
      id: 4823,
      ibgeId: 4202438,
      name: 'Bocaína do Sul',
    },
    {
      id: 4824,
      ibgeId: 4211751,
      name: 'Otacílio Costa',
    },
    {
      id: 4825,
      ibgeId: 4211892,
      name: 'Painel',
    },
    {
      id: 4826,
      ibgeId: 4212056,
      name: 'Palmeira',
    },
    {
      id: 4827,
      ibgeId: 4203253,
      name: 'Capão Alto',
    },
    {
      id: 4828,
      ibgeId: 4213302,
      name: 'Ponte Alta',
    },
    {
      id: 4829,
      ibgeId: 4216800,
      name: 'São José do Cerrito',
    },
    {
      id: 4830,
      ibgeId: 4203402,
      name: 'Campo Belo do Sul',
    },
    {
      id: 4831,
      ibgeId: 4204178,
      name: 'Cerro Negro',
    },
    {
      id: 4832,
      ibgeId: 4201000,
      name: 'Anita Garibaldi',
    },
    {
      id: 4833,
      ibgeId: 4204152,
      name: 'Celso Ramos',
    },
    {
      id: 4834,
      ibgeId: 4216503,
      name: 'São Joaquim',
    },
    {
      id: 4835,
      ibgeId: 4218954,
      name: 'Urupema',
    },
    {
      id: 4836,
      ibgeId: 4202503,
      name: 'Bom Jardim da Serra',
    },
    {
      id: 4837,
      ibgeId: 4218905,
      name: 'Urubici',
    },
    {
      id: 4838,
      ibgeId: 4215059,
      name: 'Rio Rufino',
    },
    {
      id: 4839,
      ibgeId: 4202602,
      name: 'Bom Retiro',
    },
    {
      id: 4840,
      ibgeId: 4218707,
      name: 'Tubarão',
    },
    {
      id: 4841,
      ibgeId: 4218400,
      name: 'Treze de Maio',
    },
    {
      id: 4842,
      ibgeId: 4208807,
      name: 'Jaguaruna',
    },
    {
      id: 4843,
      ibgeId: 4215455,
      name: 'Sangão',
    },
    {
      id: 4844,
      ibgeId: 4212403,
      name: 'Pedras Grandes',
    },
    {
      id: 4845,
      ibgeId: 4217006,
      name: 'São Ludgero',
    },
    {
      id: 4846,
      ibgeId: 4206207,
      name: 'Gravatal',
    },
    {
      id: 4847,
      ibgeId: 4201505,
      name: 'Armazém',
    },
    {
      id: 4848,
      ibgeId: 4203956,
      name: 'Capivari de Baixo',
    },
    {
      id: 4849,
      ibgeId: 4202800,
      name: 'Braço do Norte',
    },
    {
      id: 4850,
      ibgeId: 4214904,
      name: 'Rio Fortuna',
    },
    {
      id: 4851,
      ibgeId: 4215604,
      name: 'Santa Rosa de Lima',
    },
    {
      id: 4852,
      ibgeId: 4217105,
      name: 'São Martinho',
    },
    {
      id: 4853,
      ibgeId: 4207205,
      name: 'Imaruí',
    },
    {
      id: 4854,
      ibgeId: 4207304,
      name: 'Imbituba',
    },
    {
      id: 4855,
      ibgeId: 4209409,
      name: 'Laguna',
    },
    {
      id: 4856,
      ibgeId: 4212650,
      name: 'Pescaria Brava',
    },
    {
      id: 4857,
      ibgeId: 4204608,
      name: 'Criciúma',
    },
    {
      id: 4858,
      ibgeId: 4207007,
      name: 'Içara',
    },
    {
      id: 4859,
      ibgeId: 4220000,
      name: 'Balneário Rincão',
    },
    {
      id: 4860,
      ibgeId: 4211207,
      name: 'Morro da Fumaça',
    },
    {
      id: 4861,
      ibgeId: 4219002,
      name: 'Urussanga',
    },
    {
      id: 4862,
      ibgeId: 4204251,
      name: 'Cocal do Sul',
    },
    {
      id: 4863,
      ibgeId: 4205456,
      name: 'Forquilhinha',
    },
    {
      id: 4864,
      ibgeId: 4217600,
      name: 'Siderópolis',
    },
    {
      id: 4865,
      ibgeId: 4218350,
      name: 'Treviso',
    },
    {
      id: 4866,
      ibgeId: 4211603,
      name: 'Nova Veneza',
    },
    {
      id: 4867,
      ibgeId: 4211702,
      name: 'Orleans',
    },
    {
      id: 4868,
      ibgeId: 4209607,
      name: 'Lauro Müller',
    },
    {
      id: 4869,
      ibgeId: 4206108,
      name: 'Grão Pará',
    },
    {
      id: 4870,
      ibgeId: 4201406,
      name: 'Araranguá',
    },
    {
      id: 4871,
      ibgeId: 4201950,
      name: 'Balneário Arroio do Silva',
    },
    {
      id: 4872,
      ibgeId: 4210407,
      name: 'Maracajá',
    },
    {
      id: 4873,
      ibgeId: 4210803,
      name: 'Meleiro',
    },
    {
      id: 4874,
      ibgeId: 4211256,
      name: 'Morro Grande',
    },
    {
      id: 4875,
      ibgeId: 4218806,
      name: 'Turvo',
    },
    {
      id: 4876,
      ibgeId: 4205191,
      name: 'Ermo',
    },
    {
      id: 4877,
      ibgeId: 4218103,
      name: 'Timbé do Sul',
    },
    {
      id: 4878,
      ibgeId: 4208708,
      name: 'Jacinto Machado',
    },
    {
      id: 4879,
      ibgeId: 4202073,
      name: 'Balneário Gaivota',
    },
    {
      id: 4880,
      ibgeId: 4217709,
      name: 'Sombrio',
    },
    {
      id: 4881,
      ibgeId: 4215653,
      name: 'Santa Rosa do Sul',
    },
    {
      id: 4882,
      ibgeId: 4216404,
      name: 'São João do Sul',
    },
    {
      id: 4883,
      ibgeId: 4212254,
      name: 'Passo de Torres',
    },
    {
      id: 4884,
      ibgeId: 4213807,
      name: 'Praia Grande',
    },
    {
      id: 4885,
      ibgeId: 4202404,
      name: 'Blumenau',
    },
    {
      id: 4886,
      ibgeId: 4207502,
      name: 'Indaial',
    },
    {
      id: 4887,
      ibgeId: 4213203,
      name: 'Pomerode',
    },
    {
      id: 4888,
      ibgeId: 4210605,
      name: 'Massaranduba',
    },
    {
      id: 4889,
      ibgeId: 4205902,
      name: 'Gaspar',
    },
    {
      id: 4890,
      ibgeId: 4218202,
      name: 'Timbó',
    },
    {
      id: 4891,
      ibgeId: 4214706,
      name: 'Rio dos Cedros',
    },
    {
      id: 4892,
      ibgeId: 4202206,
      name: 'Benedito Novo',
    },
    {
      id: 4893,
      ibgeId: 4205159,
      name: 'Doutor Pedrinho',
    },
    {
      id: 4894,
      ibgeId: 4210001,
      name: 'Luiz Alves',
    },
    {
      id: 4895,
      ibgeId: 4201257,
      name: 'Apiúna',
    },
    {
      id: 4896,
      ibgeId: 4215109,
      name: 'Rodeio',
    },
    {
      id: 4897,
      ibgeId: 4201703,
      name: 'Ascurra',
    },
    {
      id: 4898,
      ibgeId: 4206900,
      name: 'Ibirama',
    },
    {
      id: 4899,
      ibgeId: 4209151,
      name: 'José Boiteux',
    },
    {
      id: 4900,
      ibgeId: 4219358,
      name: 'Vitor Meireles',
    },
    {
      id: 4901,
      ibgeId: 4214003,
      name: 'Presidente Getúlio',
    },
    {
      id: 4902,
      ibgeId: 4205100,
      name: 'Dona Emma',
    },
    {
      id: 4903,
      ibgeId: 4219408,
      name: 'Witmarsum',
    },
    {
      id: 4904,
      ibgeId: 4214805,
      name: 'Rio do Sul',
    },
    {
      id: 4905,
      ibgeId: 4209508,
      name: 'Laurentino',
    },
    {
      id: 4906,
      ibgeId: 4213708,
      name: 'Pouso Redondo',
    },
    {
      id: 4907,
      ibgeId: 4218608,
      name: 'Trombudo Central',
    },
    {
      id: 4908,
      ibgeId: 4202859,
      name: 'Braço do Trombudo',
    },
    {
      id: 4909,
      ibgeId: 4214607,
      name: 'Rio do Oeste',
    },
    {
      id: 4910,
      ibgeId: 4209904,
      name: 'Lontras',
    },
    {
      id: 4911,
      ibgeId: 4214102,
      name: 'Presidente Nereu',
    },
    {
      id: 4912,
      ibgeId: 4201901,
      name: 'Aurora',
    },
    {
      id: 4913,
      ibgeId: 4200309,
      name: 'Agronômica',
    },
    {
      id: 4914,
      ibgeId: 4217808,
      name: 'Taió',
    },
    {
      id: 4915,
      ibgeId: 4210852,
      name: 'Mirim Doce',
    },
    {
      id: 4916,
      ibgeId: 4215307,
      name: 'Salete',
    },
    {
      id: 4917,
      ibgeId: 4214508,
      name: 'Rio do Campo',
    },
    {
      id: 4918,
      ibgeId: 4215679,
      name: 'Santa Terezinha',
    },
    {
      id: 4919,
      ibgeId: 4209102,
      name: 'Joinville',
    },
    {
      id: 4920,
      ibgeId: 4216206,
      name: 'São Francisco do Sul',
    },
    {
      id: 4921,
      ibgeId: 4201307,
      name: 'Araquari',
    },
    {
      id: 4922,
      ibgeId: 4202057,
      name: 'Balneário Barra do Sul',
    },
    {
      id: 4923,
      ibgeId: 4205803,
      name: 'Garuva',
    },
    {
      id: 4924,
      ibgeId: 4208450,
      name: 'Itapoá',
    },
    {
      id: 4925,
      ibgeId: 4208906,
      name: 'Jaraguá do Sul',
    },
    {
      id: 4926,
      ibgeId: 4206504,
      name: 'Guaramirim',
    },
    {
      id: 4927,
      ibgeId: 4217402,
      name: 'Schroeder',
    },
    {
      id: 4928,
      ibgeId: 4204509,
      name: 'Corupá',
    },
    {
      id: 4929,
      ibgeId: 4215802,
      name: 'São Bento do Sul',
    },
    {
      id: 4930,
      ibgeId: 4203303,
      name: 'Campo Alegre',
    },
    {
      id: 4931,
      ibgeId: 4215000,
      name: 'Rio Negrinho',
    },
    {
      id: 4932,
      ibgeId: 4210100,
      name: 'Mafra',
    },
    {
      id: 4933,
      ibgeId: 4208104,
      name: 'Itaiópolis',
    },
    {
      id: 4934,
      ibgeId: 4212205,
      name: 'Papanduva',
    },
    {
      id: 4935,
      ibgeId: 4211108,
      name: 'Monte Castelo',
    },
    {
      id: 4936,
      ibgeId: 4213609,
      name: 'Porto União',
    },
    {
      id: 4937,
      ibgeId: 4210704,
      name: 'Matos Costa',
    },
    {
      id: 4938,
      ibgeId: 4203154,
      name: 'Calmon',
    },
    {
      id: 4939,
      ibgeId: 4207908,
      name: 'Irineópolis',
    },
    {
      id: 4940,
      ibgeId: 4203808,
      name: 'Canoinhas',
    },
    {
      id: 4941,
      ibgeId: 4202131,
      name: 'Bela Vista do Toldo',
    },
    {
      id: 4942,
      ibgeId: 4210308,
      name: 'Major Vieira',
    },
    {
      id: 4943,
      ibgeId: 4218301,
      name: 'Três Barras',
    },
    {
      id: 4944,
      ibgeId: 4203006,
      name: 'Caçador',
    },
    {
      id: 4945,
      ibgeId: 4209706,
      name: 'Lebon Régis',
    },
    {
      id: 4946,
      ibgeId: 4210050,
      name: 'Macieira',
    },
    {
      id: 4947,
      ibgeId: 4204806,
      name: 'Curitibanos',
    },
    {
      id: 4948,
      ibgeId: 4205555,
      name: 'Frei Rogério',
    },
    {
      id: 4949,
      ibgeId: 4216057,
      name: 'São Cristóvão do Sul',
    },
    {
      id: 4950,
      ibgeId: 4213351,
      name: 'Ponte Alta do Norte',
    },
    {
      id: 4951,
      ibgeId: 4215505,
      name: 'Santa Cecília',
    },
    {
      id: 4952,
      ibgeId: 4218251,
      name: 'Timbó Grande',
    },
    {
      id: 4953,
      ibgeId: 4214409,
      name: 'Rio das Antas',
    },
    {
      id: 4954,
      ibgeId: 4207577,
      name: 'Iomerê',
    },
    {
      id: 4955,
      ibgeId: 4219309,
      name: 'Videira',
    },
    {
      id: 4956,
      ibgeId: 4213005,
      name: 'Pinheiro Preto',
    },
    {
      id: 4957,
      ibgeId: 4205506,
      name: 'Fraiburgo',
    },
    {
      id: 4958,
      ibgeId: 4201604,
      name: 'Arroio Trinta',
    },
    {
      id: 4959,
      ibgeId: 4215406,
      name: 'Salto Veloso',
    },
    {
      id: 4960,
      ibgeId: 4209003,
      name: 'Joaçaba',
    },
    {
      id: 4961,
      ibgeId: 4215554,
      name: 'Santa Helena',
    },
    {
      id: 4962,
      ibgeId: 4210035,
      name: 'Luzerna',
    },
    {
      id: 4963,
      ibgeId: 4206702,
      name: "Herval D'Oeste",
    },
    {
      id: 4964,
      ibgeId: 4205209,
      name: 'Erval Velho',
    },
    {
      id: 4965,
      ibgeId: 4211058,
      name: 'Monte Carlo',
    },
    {
      id: 4966,
      ibgeId: 4203600,
      name: 'Campos Novos',
    },
    {
      id: 4967,
      ibgeId: 4219853,
      name: 'Zortéa',
    },
    {
      id: 4968,
      ibgeId: 4202875,
      name: 'Brunópolis',
    },
    {
      id: 4969,
      ibgeId: 4200051,
      name: 'Abdon Batista',
    },
    {
      id: 4970,
      ibgeId: 4219150,
      name: 'Vargem',
    },
    {
      id: 4971,
      ibgeId: 4206801,
      name: 'Ibicaré',
    },
    {
      id: 4972,
      ibgeId: 4217907,
      name: 'Tangará',
    },
    {
      id: 4973,
      ibgeId: 4218509,
      name: 'Treze Tílias',
    },
    {
      id: 4974,
      ibgeId: 4206751,
      name: 'Ibiam',
    },
    {
      id: 4975,
      ibgeId: 4200408,
      name: 'Água Doce',
    },
    {
      id: 4976,
      ibgeId: 4209201,
      name: 'Lacerdópolis',
    },
    {
      id: 4977,
      ibgeId: 4211801,
      name: 'Ouro',
    },
    {
      id: 4978,
      ibgeId: 4203907,
      name: 'Capinzal',
    },
    {
      id: 4979,
      ibgeId: 4213104,
      name: 'Piratuba',
    },
    {
      id: 4980,
      ibgeId: 4207601,
      name: 'Ipira',
    },
    {
      id: 4981,
      ibgeId: 4204004,
      name: 'Catanduvas',
    },
    {
      id: 4982,
      ibgeId: 4219176,
      name: 'Vargem Bonita',
    },
    {
      id: 4983,
      ibgeId: 4208609,
      name: 'Jaborá',
    },
    {
      id: 4984,
      ibgeId: 4207809,
      name: 'Irani',
    },
    {
      id: 4985,
      ibgeId: 4213401,
      name: 'Ponte Serrada',
    },
    {
      id: 4986,
      ibgeId: 4212270,
      name: 'Passos Maia',
    },
    {
      id: 4987,
      ibgeId: 4219101,
      name: 'Vargeão',
    },
    {
      id: 4988,
      ibgeId: 4205308,
      name: 'Faxinal dos Guedes',
    },
    {
      id: 4989,
      ibgeId: 4204301,
      name: 'Concórdia',
    },
    {
      id: 4990,
      ibgeId: 4200754,
      name: 'Alto Bela Vista',
    },
    {
      id: 4991,
      ibgeId: 4209854,
      name: 'Lindóia do Sul',
    },
    {
      id: 4992,
      ibgeId: 4201273,
      name: 'Arabutã',
    },
    {
      id: 4993,
      ibgeId: 4213906,
      name: 'Presidente Castello Branco',
    },
    {
      id: 4994,
      ibgeId: 4212601,
      name: 'Peritiba',
    },
    {
      id: 4995,
      ibgeId: 4208005,
      name: 'Itá',
    },
    {
      id: 4996,
      ibgeId: 4211876,
      name: 'Paial',
    },
    {
      id: 4997,
      ibgeId: 4217501,
      name: 'Seara',
    },
    {
      id: 4998,
      ibgeId: 4201653,
      name: 'Arvoredo',
    },
    {
      id: 4999,
      ibgeId: 4219606,
      name: 'Xavantina',
    },
    {
      id: 5000,
      ibgeId: 4207700,
      name: 'Ipumirim',
    },
    {
      id: 5001,
      ibgeId: 4204202,
      name: 'Chapecó',
    },
    {
      id: 5002,
      ibgeId: 4206652,
      name: 'Guatambú',
    },
    {
      id: 5003,
      ibgeId: 4211454,
      name: 'Nova Itaberaba',
    },
    {
      id: 5004,
      ibgeId: 4204350,
      name: 'Cordilheira Alta',
    },
    {
      id: 5005,
      ibgeId: 4219507,
      name: 'Xanxerê',
    },
    {
      id: 5006,
      ibgeId: 4202537,
      name: 'Bom Jesus',
    },
    {
      id: 5007,
      ibgeId: 4219705,
      name: 'Xaxim',
    },
    {
      id: 5008,
      ibgeId: 4209458,
      name: 'Lajeado Grande',
    },
    {
      id: 5009,
      ibgeId: 4200101,
      name: 'Abelardo Luz',
    },
    {
      id: 5010,
      ibgeId: 4207684,
      name: 'Ipuaçu',
    },
    {
      id: 5011,
      ibgeId: 4211850,
      name: 'Ouro Verde',
    },
    {
      id: 5012,
      ibgeId: 4216107,
      name: 'São Domingos',
    },
    {
      id: 5013,
      ibgeId: 4204459,
      name: 'Coronel Martins',
    },
    {
      id: 5014,
      ibgeId: 4205605,
      name: 'Galvão',
    },
    {
      id: 5015,
      ibgeId: 4209177,
      name: 'Jupiá',
    },
    {
      id: 5016,
      ibgeId: 4204400,
      name: 'Coronel Freitas',
    },
    {
      id: 5017,
      ibgeId: 4200556,
      name: 'Águas Frias',
    },
    {
      id: 5018,
      ibgeId: 4218855,
      name: 'União do Oeste',
    },
    {
      id: 5019,
      ibgeId: 4208955,
      name: 'Jardinópolis',
    },
    {
      id: 5020,
      ibgeId: 4214201,
      name: 'Quilombo',
    },
    {
      id: 5021,
      ibgeId: 4215695,
      name: 'Santiago do Sul',
    },
    {
      id: 5022,
      ibgeId: 4217758,
      name: 'Sul Brasil',
    },
    {
      id: 5023,
      ibgeId: 4207858,
      name: 'Irati',
    },
    {
      id: 5024,
      ibgeId: 4205431,
      name: 'Formosa do Sul',
    },
    {
      id: 5025,
      ibgeId: 4210555,
      name: 'Marema',
    },
    {
      id: 5026,
      ibgeId: 4205175,
      name: 'Entre Rios',
    },
    {
      id: 5027,
      ibgeId: 4211405,
      name: 'Nova Erechim',
    },
    {
      id: 5028,
      ibgeId: 4217303,
      name: 'Saudades',
    },
    {
      id: 5029,
      ibgeId: 4212908,
      name: 'Pinhalzinho',
    },
    {
      id: 5030,
      ibgeId: 4217550,
      name: 'Serra Alta',
    },
    {
      id: 5031,
      ibgeId: 4210902,
      name: 'Modelo',
    },
    {
      id: 5032,
      ibgeId: 4202578,
      name: 'Bom Jesus do Oeste',
    },
    {
      id: 5033,
      ibgeId: 4210506,
      name: 'Maravilha',
    },
    {
      id: 5034,
      ibgeId: 4217956,
      name: 'Tigrinhos',
    },
    {
      id: 5035,
      ibgeId: 4205357,
      name: 'Flor do Sertão',
    },
    {
      id: 5036,
      ibgeId: 4217154,
      name: 'São Miguel da Boa Vista',
    },
    {
      id: 5037,
      ibgeId: 4204103,
      name: 'Caxambu do Sul',
    },
    {
      id: 5038,
      ibgeId: 4213153,
      name: 'Planalto Alegre',
    },
    {
      id: 5039,
      ibgeId: 4200507,
      name: 'Águas de Chapecó',
    },
    {
      id: 5040,
      ibgeId: 4216008,
      name: 'São Carlos',
    },
    {
      id: 5041,
      ibgeId: 4204756,
      name: 'Cunhataí',
    },
    {
      id: 5042,
      ibgeId: 4212106,
      name: 'Palmitos',
    },
    {
      id: 5043,
      ibgeId: 4203105,
      name: 'Caibi',
    },
    {
      id: 5044,
      ibgeId: 4204707,
      name: 'Cunha Porã',
    },
    {
      id: 5045,
      ibgeId: 4207759,
      name: 'Iraceminha',
    },
    {
      id: 5046,
      ibgeId: 4211009,
      name: 'Mondaí',
    },
    {
      id: 5047,
      ibgeId: 4215075,
      name: 'Riqueza',
    },
    {
      id: 5048,
      ibgeId: 4208401,
      name: 'Itapiranga',
    },
    {
      id: 5049,
      ibgeId: 4216255,
      name: 'São João do Oeste',
    },
    {
      id: 5050,
      ibgeId: 4218756,
      name: 'Tunápolis',
    },
    {
      id: 5051,
      ibgeId: 4207650,
      name: 'Iporã do Oeste',
    },
    {
      id: 5052,
      ibgeId: 4217204,
      name: 'São Miguel do Oeste',
    },
    {
      id: 5053,
      ibgeId: 4202081,
      name: 'Bandeirante',
    },
    {
      id: 5054,
      ibgeId: 4212239,
      name: 'Paraíso',
    },
    {
      id: 5055,
      ibgeId: 4215208,
      name: 'Romelândia',
    },
    {
      id: 5056,
      ibgeId: 4202099,
      name: 'Barra Bonita',
    },
    {
      id: 5057,
      ibgeId: 4204905,
      name: 'Descanso',
    },
    {
      id: 5058,
      ibgeId: 4206405,
      name: 'Guaraciaba',
    },
    {
      id: 5059,
      ibgeId: 4202156,
      name: 'Belmonte',
    },
    {
      id: 5060,
      ibgeId: 4216701,
      name: 'São José do Cedro',
    },
    {
      id: 5061,
      ibgeId: 4214151,
      name: 'Princesa',
    },
    {
      id: 5062,
      ibgeId: 4206603,
      name: 'Guarujá do Sul',
    },
    {
      id: 5063,
      ibgeId: 4205001,
      name: 'Dionísio Cerqueira',
    },
    {
      id: 5064,
      ibgeId: 4200804,
      name: 'Anchieta',
    },
    {
      id: 5065,
      ibgeId: 4203501,
      name: 'Campo Erê',
    },
    {
      id: 5066,
      ibgeId: 4215356,
      name: 'Saltinho',
    },
    {
      id: 5067,
      ibgeId: 4215752,
      name: 'São Bernardino',
    },
    {
      id: 5068,
      ibgeId: 4215687,
      name: 'Santa Terezinha do Progresso',
    },
    {
      id: 5069,
      ibgeId: 4212007,
      name: 'Palma Sola',
    },
    {
      id: 5070,
      ibgeId: 4216909,
      name: 'São Lourenço do Oeste',
    },
    {
      id: 5071,
      ibgeId: 4211652,
      name: 'Novo Horizonte',
    },
  ],
  SE: [
    {
      id: 2087,
      ibgeId: 2800308,
      name: 'Aracaju',
    },
    {
      id: 2088,
      ibgeId: 2806701,
      name: 'São Cristóvão',
    },
    {
      id: 2089,
      ibgeId: 2803203,
      name: "Itaporanga D'Ajuda",
    },
    {
      id: 2090,
      ibgeId: 2805901,
      name: 'Riachuelo',
    },
    {
      id: 2091,
      ibgeId: 2800605,
      name: 'Barra dos Coqueiros',
    },
    {
      id: 2092,
      ibgeId: 2804805,
      name: 'Nossa Senhora do Socorro',
    },
    {
      id: 2093,
      ibgeId: 2803609,
      name: 'Laranjeiras',
    },
    {
      id: 2094,
      ibgeId: 2806602,
      name: 'Santo Amaro das Brotas',
    },
    {
      id: 2095,
      ibgeId: 2805307,
      name: 'Pirambu',
    },
    {
      id: 2096,
      ibgeId: 2802106,
      name: 'Estância',
    },
    {
      id: 2097,
      ibgeId: 2800407,
      name: 'Arauá',
    },
    {
      id: 2098,
      ibgeId: 2806305,
      name: 'Santa Luzia do Itanhy',
    },
    {
      id: 2099,
      ibgeId: 2802809,
      name: 'Indiaroba',
    },
    {
      id: 2100,
      ibgeId: 2807600,
      name: 'Umbaúba',
    },
    {
      id: 2101,
      ibgeId: 2801702,
      name: 'Cristinápolis',
    },
    {
      id: 2102,
      ibgeId: 2807501,
      name: 'Tomar do Geru',
    },
    {
      id: 2103,
      ibgeId: 2803005,
      name: 'Itabaianinha',
    },
    {
      id: 2104,
      ibgeId: 2807402,
      name: 'Tobias Barreto',
    },
    {
      id: 2105,
      ibgeId: 2805802,
      name: 'Riachão do Dantas',
    },
    {
      id: 2106,
      ibgeId: 2805109,
      name: 'Pedrinhas',
    },
    {
      id: 2107,
      ibgeId: 2800670,
      name: 'Boquim',
    },
    {
      id: 2108,
      ibgeId: 2806206,
      name: 'Salgado',
    },
    {
      id: 2109,
      ibgeId: 2803500,
      name: 'Lagarto',
    },
    {
      id: 2110,
      ibgeId: 2807105,
      name: 'Simão Dias',
    },
    {
      id: 2111,
      ibgeId: 2805505,
      name: 'Poço Verde',
    },
    {
      id: 2112,
      ibgeId: 2802908,
      name: 'Itabaiana',
    },
    {
      id: 2113,
      ibgeId: 2805000,
      name: 'Pedra Mole',
    },
    {
      id: 2114,
      ibgeId: 2802304,
      name: 'Frei Paulo',
    },
    {
      id: 2115,
      ibgeId: 2805208,
      name: 'Pinhão',
    },
    {
      id: 2116,
      ibgeId: 2801009,
      name: 'Campo do Brito',
    },
    {
      id: 2117,
      ibgeId: 2806800,
      name: 'São Domingos',
    },
    {
      id: 2118,
      ibgeId: 2806008,
      name: 'Ribeirópolis',
    },
    {
      id: 2119,
      ibgeId: 2807006,
      name: 'São Miguel do Aleixo',
    },
    {
      id: 2120,
      ibgeId: 2804458,
      name: 'Nossa Senhora Aparecida',
    },
    {
      id: 2121,
      ibgeId: 2801405,
      name: 'Carira',
    },
    {
      id: 2122,
      ibgeId: 2804102,
      name: 'Moita Bonita',
    },
    {
      id: 2123,
      ibgeId: 2803708,
      name: 'Macambira',
    },
    {
      id: 2124,
      ibgeId: 2803906,
      name: 'Malhador',
    },
    {
      id: 2125,
      ibgeId: 2800506,
      name: 'Areia Branca',
    },
    {
      id: 2126,
      ibgeId: 2804607,
      name: 'Nossa Senhora das Dores',
    },
    {
      id: 2127,
      ibgeId: 2807204,
      name: 'Siriri',
    },
    {
      id: 2128,
      ibgeId: 2806503,
      name: 'Santa Rosa de Lima',
    },
    {
      id: 2129,
      ibgeId: 2802007,
      name: 'Divina Pastora',
    },
    {
      id: 2130,
      ibgeId: 2801900,
      name: 'Cumbe',
    },
    {
      id: 2131,
      ibgeId: 2802205,
      name: 'Feira Nova',
    },
    {
      id: 2132,
      ibgeId: 2804508,
      name: 'Nossa Senhora da Glória',
    },
    {
      id: 2133,
      ibgeId: 2804201,
      name: 'Monte Alegre de Sergipe',
    },
    {
      id: 2134,
      ibgeId: 2801306,
      name: 'Capela',
    },
    {
      id: 2135,
      ibgeId: 2801504,
      name: 'Carmópolis',
    },
    {
      id: 2136,
      ibgeId: 2802502,
      name: 'General Maynard',
    },
    {
      id: 2137,
      ibgeId: 2806107,
      name: 'Rosário do Catete',
    },
    {
      id: 2138,
      ibgeId: 2804003,
      name: 'Maruim',
    },
    {
      id: 2139,
      ibgeId: 2804300,
      name: 'Muribeca',
    },
    {
      id: 2140,
      ibgeId: 2800209,
      name: 'Aquidabã',
    },
    {
      id: 2141,
      ibgeId: 2805604,
      name: 'Porto da Folha',
    },
    {
      id: 2142,
      ibgeId: 2805406,
      name: 'Poço Redondo',
    },
    {
      id: 2143,
      ibgeId: 2801207,
      name: 'Canindé de São Francisco',
    },
    {
      id: 2144,
      ibgeId: 2802403,
      name: 'Gararu',
    },
    {
      id: 2145,
      ibgeId: 2802601,
      name: 'Graccho Cardoso',
    },
    {
      id: 2146,
      ibgeId: 2803104,
      name: 'Itabi',
    },
    {
      id: 2147,
      ibgeId: 2801108,
      name: 'Canhoba',
    },
    {
      id: 2148,
      ibgeId: 2804706,
      name: 'Nossa Senhora de Lourdes',
    },
    {
      id: 2149,
      ibgeId: 2805703,
      name: 'Propriá',
    },
    {
      id: 2150,
      ibgeId: 2807303,
      name: 'Telha',
    },
    {
      id: 2151,
      ibgeId: 2800100,
      name: 'Amparo de São Francisco',
    },
    {
      id: 2152,
      ibgeId: 2801603,
      name: 'Cedro de São João',
    },
    {
      id: 2153,
      ibgeId: 2803807,
      name: 'Malhada dos Bois',
    },
    {
      id: 2154,
      ibgeId: 2806909,
      name: 'São Francisco',
    },
    {
      id: 2155,
      ibgeId: 2803401,
      name: 'Japoatã',
    },
    {
      id: 2156,
      ibgeId: 2803302,
      name: 'Japaratuba',
    },
    {
      id: 2157,
      ibgeId: 2804904,
      name: 'Pacatuba',
    },
    {
      id: 2158,
      ibgeId: 2804409,
      name: 'Neópolis',
    },
    {
      id: 2159,
      ibgeId: 2806404,
      name: 'Santana do São Francisco',
    },
    {
      id: 2160,
      ibgeId: 2802700,
      name: 'Ilha das Flores',
    },
    {
      id: 2161,
      ibgeId: 2800704,
      name: 'Brejo Grande',
    },
  ],
  SP: [
    {
      id: 1,
      ibgeId: 3550308,
      name: 'São Paulo',
    },
    {
      id: 2,
      ibgeId: 3534401,
      name: 'Osasco',
    },
    {
      id: 3,
      ibgeId: 3510609,
      name: 'Carapicuíba',
    },
    {
      id: 4,
      ibgeId: 3505708,
      name: 'Barueri',
    },
    {
      id: 5,
      ibgeId: 3547304,
      name: 'Santana de Parnaíba',
    },
    {
      id: 6,
      ibgeId: 3539103,
      name: 'Pirapora do Bom Jesus',
    },
    {
      id: 7,
      ibgeId: 3525003,
      name: 'Jandira',
    },
    {
      id: 8,
      ibgeId: 3522505,
      name: 'Itapevi',
    },
    {
      id: 9,
      ibgeId: 3513009,
      name: 'Cotia',
    },
    {
      id: 10,
      ibgeId: 3556453,
      name: 'Vargem Grande Paulista',
    },
    {
      id: 11,
      ibgeId: 3552809,
      name: 'Taboão da Serra',
    },
    {
      id: 12,
      ibgeId: 3515004,
      name: 'Embu das Artes',
    },
    {
      id: 13,
      ibgeId: 3522208,
      name: 'Itapecerica da Serra',
    },
    {
      id: 14,
      ibgeId: 3549953,
      name: 'São Lourenço da Serra',
    },
    {
      id: 15,
      ibgeId: 3515103,
      name: 'Embu-Guaçu',
    },
    {
      id: 16,
      ibgeId: 3526209,
      name: 'Juquitiba',
    },
    {
      id: 17,
      ibgeId: 3518800,
      name: 'Guarulhos',
    },
    {
      id: 18,
      ibgeId: 3503901,
      name: 'Arujá',
    },
    {
      id: 19,
      ibgeId: 3546801,
      name: 'Santa Isabel',
    },
    {
      id: 20,
      ibgeId: 3528502,
      name: 'Mairiporã',
    },
    {
      id: 21,
      ibgeId: 3509007,
      name: 'Caieiras',
    },
    {
      id: 22,
      ibgeId: 3509205,
      name: 'Cajamar',
    },
    {
      id: 23,
      ibgeId: 3516408,
      name: 'Franco da Rocha',
    },
    {
      id: 24,
      ibgeId: 3516309,
      name: 'Francisco Morato',
    },
    {
      id: 25,
      ibgeId: 3515707,
      name: 'Ferraz de Vasconcelos',
    },
    {
      id: 26,
      ibgeId: 3539806,
      name: 'Poá',
    },
    {
      id: 27,
      ibgeId: 3523107,
      name: 'Itaquaquecetuba',
    },
    {
      id: 28,
      ibgeId: 3552502,
      name: 'Suzano',
    },
    {
      id: 29,
      ibgeId: 3530607,
      name: 'Mogi das Cruzes',
    },
    {
      id: 30,
      ibgeId: 3518305,
      name: 'Guararema',
    },
    {
      id: 31,
      ibgeId: 3506607,
      name: 'Biritiba-Mirim',
    },
    {
      id: 32,
      ibgeId: 3545001,
      name: 'Salesópolis',
    },
    {
      id: 33,
      ibgeId: 3547809,
      name: 'Santo André',
    },
    {
      id: 34,
      ibgeId: 3529401,
      name: 'Mauá',
    },
    {
      id: 35,
      ibgeId: 3543303,
      name: 'Ribeirão Pires',
    },
    {
      id: 36,
      ibgeId: 3544103,
      name: 'Rio Grande da Serra',
    },
    {
      id: 37,
      ibgeId: 3548807,
      name: 'São Caetano do Sul',
    },
    {
      id: 38,
      ibgeId: 3548708,
      name: 'São Bernardo do Campo',
    },
    {
      id: 39,
      ibgeId: 3513801,
      name: 'Diadema',
    },
    {
      id: 40,
      ibgeId: 3548500,
      name: 'Santos',
    },
    {
      id: 41,
      ibgeId: 3506359,
      name: 'Bertioga',
    },
    {
      id: 42,
      ibgeId: 3551009,
      name: 'São Vicente',
    },
    {
      id: 43,
      ibgeId: 3518701,
      name: 'Guarujá',
    },
    {
      id: 44,
      ibgeId: 3513504,
      name: 'Cubatão',
    },
    {
      id: 45,
      ibgeId: 3550704,
      name: 'São Sebastião',
    },
    {
      id: 46,
      ibgeId: 3520400,
      name: 'Ilhabela',
    },
    {
      id: 47,
      ibgeId: 3510500,
      name: 'Caraguatatuba',
    },
    {
      id: 48,
      ibgeId: 3555406,
      name: 'Ubatuba',
    },
    {
      id: 49,
      ibgeId: 3541000,
      name: 'Praia Grande',
    },
    {
      id: 50,
      ibgeId: 3531100,
      name: 'Mongaguá',
    },
    {
      id: 51,
      ibgeId: 3522109,
      name: 'Itanhaém',
    },
    {
      id: 52,
      ibgeId: 3537602,
      name: 'Peruíbe',
    },
    {
      id: 53,
      ibgeId: 3523305,
      name: 'Itariri',
    },
    {
      id: 54,
      ibgeId: 3537206,
      name: 'Pedro de Toledo',
    },
    {
      id: 55,
      ibgeId: 3526100,
      name: 'Juquiá',
    },
    {
      id: 56,
      ibgeId: 3529906,
      name: 'Miracatu',
    },
    {
      id: 57,
      ibgeId: 3542602,
      name: 'Registro',
    },
    {
      id: 58,
      ibgeId: 3551801,
      name: 'Sete Barras',
    },
    {
      id: 59,
      ibgeId: 3520301,
      name: 'Iguape',
    },
    {
      id: 60,
      ibgeId: 3520426,
      name: 'Ilha Comprida',
    },
    {
      id: 61,
      ibgeId: 3536208,
      name: 'Pariquera-Açu',
    },
    {
      id: 62,
      ibgeId: 3524600,
      name: 'Jacupiranga',
    },
    {
      id: 63,
      ibgeId: 3509254,
      name: 'Cajati',
    },
    {
      id: 64,
      ibgeId: 3505401,
      name: 'Barra do Turvo',
    },
    {
      id: 65,
      ibgeId: 3514809,
      name: 'Eldorado',
    },
    {
      id: 66,
      ibgeId: 3509908,
      name: 'Cananéia',
    },
    {
      id: 67,
      ibgeId: 3554102,
      name: 'Taubaté',
    },
    {
      id: 68,
      ibgeId: 3554805,
      name: 'Tremembé',
    },
    {
      id: 69,
      ibgeId: 3526308,
      name: 'Lagoinha',
    },
    {
      id: 70,
      ibgeId: 3550001,
      name: 'São Luiz do Paraitinga',
    },
    {
      id: 71,
      ibgeId: 3542305,
      name: 'Redenção da Serra',
    },
    {
      id: 72,
      ibgeId: 3532306,
      name: 'Natividade da Serra',
    },
    {
      id: 73,
      ibgeId: 3549904,
      name: 'São José dos Campos',
    },
    {
      id: 74,
      ibgeId: 3531704,
      name: 'Monteiro Lobato',
    },
    {
      id: 75,
      ibgeId: 3535606,
      name: 'Paraibuna',
    },
    {
      id: 76,
      ibgeId: 3524907,
      name: 'Jambeiro',
    },
    {
      id: 77,
      ibgeId: 3508504,
      name: 'Caçapava',
    },
    {
      id: 78,
      ibgeId: 3524402,
      name: 'Jacareí',
    },
    {
      id: 79,
      ibgeId: 3520202,
      name: 'Igaratá',
    },
    {
      id: 80,
      ibgeId: 3546009,
      name: 'Santa Branca',
    },
    {
      id: 81,
      ibgeId: 3538006,
      name: 'Pindamonhangaba',
    },
    {
      id: 82,
      ibgeId: 3548203,
      name: 'Santo Antônio do Pinhal',
    },
    {
      id: 83,
      ibgeId: 3509700,
      name: 'Campos do Jordão',
    },
    {
      id: 84,
      ibgeId: 3548609,
      name: 'São Bento do Sapucaí',
    },
    {
      id: 85,
      ibgeId: 3518404,
      name: 'Guaratinguetá',
    },
    {
      id: 86,
      ibgeId: 3540754,
      name: 'Potim',
    },
    {
      id: 87,
      ibgeId: 3513603,
      name: 'Cunha',
    },
    {
      id: 88,
      ibgeId: 3502507,
      name: 'Aparecida',
    },
    {
      id: 89,
      ibgeId: 3544301,
      name: 'Roseira',
    },
    {
      id: 90,
      ibgeId: 3527207,
      name: 'Lorena',
    },
    {
      id: 91,
      ibgeId: 3509957,
      name: 'Canas',
    },
    {
      id: 92,
      ibgeId: 3538501,
      name: 'Piquete',
    },
    {
      id: 93,
      ibgeId: 3508603,
      name: 'Cachoeira Paulista',
    },
    {
      id: 94,
      ibgeId: 3552007,
      name: 'Silveiras',
    },
    {
      id: 95,
      ibgeId: 3513405,
      name: 'Cruzeiro',
    },
    {
      id: 96,
      ibgeId: 3526605,
      name: 'Lavrinhas',
    },
    {
      id: 97,
      ibgeId: 3541901,
      name: 'Queluz',
    },
    {
      id: 98,
      ibgeId: 3503505,
      name: 'Areias',
    },
    {
      id: 99,
      ibgeId: 3549607,
      name: 'São José do Barreiro',
    },
    {
      id: 100,
      ibgeId: 3504909,
      name: 'Bananal',
    },
    {
      id: 101,
      ibgeId: 3503158,
      name: 'Arapeí',
    },
    {
      id: 102,
      ibgeId: 3507605,
      name: 'Bragança Paulista',
    },
    {
      id: 103,
      ibgeId: 3554953,
      name: 'Tuiuti',
    },
    {
      id: 104,
      ibgeId: 3556354,
      name: 'Vargem',
    },
    {
      id: 105,
      ibgeId: 3504107,
      name: 'Atibaia',
    },
    {
      id: 106,
      ibgeId: 3507100,
      name: 'Bom Jesus dos Perdões',
    },
    {
      id: 107,
      ibgeId: 3532405,
      name: 'Nazaré Paulista',
    },
    {
      id: 108,
      ibgeId: 3538600,
      name: 'Piracaia',
    },
    {
      id: 109,
      ibgeId: 3525508,
      name: 'Joanópolis',
    },
    {
      id: 110,
      ibgeId: 3536802,
      name: 'Pedra Bela',
    },
    {
      id: 111,
      ibgeId: 3538204,
      name: 'Pinhalzinho',
    },
    {
      id: 112,
      ibgeId: 3509502,
      name: 'Campinas',
    },
    {
      id: 113,
      ibgeId: 3536505,
      name: 'Paulínia',
    },
    {
      id: 114,
      ibgeId: 3512803,
      name: 'Cosmópolis',
    },
    {
      id: 115,
      ibgeId: 3503802,
      name: 'Artur Nogueira',
    },
    {
      id: 116,
      ibgeId: 3552403,
      name: 'Sumaré',
    },
    {
      id: 117,
      ibgeId: 3519071,
      name: 'Hortolândia',
    },
    {
      id: 118,
      ibgeId: 3531803,
      name: 'Monte Mor',
    },
    {
      id: 119,
      ibgeId: 3525904,
      name: 'Jundiaí',
    },
    {
      id: 120,
      ibgeId: 3556503,
      name: 'Várzea Paulista',
    },
    {
      id: 121,
      ibgeId: 3509601,
      name: 'Campo Limpo Paulista',
    },
    {
      id: 122,
      ibgeId: 3525201,
      name: 'Jarinu',
    },
    {
      id: 123,
      ibgeId: 3523404,
      name: 'Itatiba',
    },
    {
      id: 124,
      ibgeId: 3532009,
      name: 'Morungaba',
    },
    {
      id: 125,
      ibgeId: 3556206,
      name: 'Valinhos',
    },
    {
      id: 126,
      ibgeId: 3556701,
      name: 'Vinhedo',
    },
    {
      id: 127,
      ibgeId: 3527306,
      name: 'Louveira',
    },
    {
      id: 128,
      ibgeId: 3524006,
      name: 'Itupeva',
    },
    {
      id: 129,
      ibgeId: 3523909,
      name: 'Itu',
    },
    {
      id: 130,
      ibgeId: 3508405,
      name: 'Cabreúva',
    },
    {
      id: 131,
      ibgeId: 3545209,
      name: 'Salto',
    },
    {
      id: 132,
      ibgeId: 3520509,
      name: 'Indaiatuba',
    },
    {
      id: 133,
      ibgeId: 3514908,
      name: 'Elias Fausto',
    },
    {
      id: 134,
      ibgeId: 3510401,
      name: 'Capivari',
    },
    {
      id: 135,
      ibgeId: 3542107,
      name: 'Rafard',
    },
    {
      id: 136,
      ibgeId: 3530904,
      name: 'Mombuca',
    },
    {
      id: 137,
      ibgeId: 3533403,
      name: 'Nova Odessa',
    },
    {
      id: 138,
      ibgeId: 3544004,
      name: 'Rio das Pedras',
    },
    {
      id: 139,
      ibgeId: 3538709,
      name: 'Piracicaba',
    },
    {
      id: 140,
      ibgeId: 3545159,
      name: 'Saltinho',
    },
    {
      id: 141,
      ibgeId: 3515152,
      name: 'Engenheiro Coelho',
    },
    {
      id: 142,
      ibgeId: 3545803,
      name: "Santa Bárbara D'Oeste",
    },
    {
      id: 143,
      ibgeId: 3501608,
      name: 'Americana',
    },
    {
      id: 144,
      ibgeId: 3526902,
      name: 'Limeira',
    },
    {
      id: 145,
      ibgeId: 3512407,
      name: 'Cordeirópolis',
    },
    {
      id: 146,
      ibgeId: 3521408,
      name: 'Iracemápolis',
    },
    {
      id: 147,
      ibgeId: 3543907,
      name: 'Rio Claro',
    },
    {
      id: 148,
      ibgeId: 3546702,
      name: 'Santa Gertrudes',
    },
    {
      id: 149,
      ibgeId: 3511706,
      name: 'Charqueada',
    },
    {
      id: 150,
      ibgeId: 3550407,
      name: 'São Pedro',
    },
    {
      id: 151,
      ibgeId: 3500600,
      name: 'Águas de São Pedro',
    },
    {
      id: 152,
      ibgeId: 3523602,
      name: 'Itirapina',
    },
    {
      id: 153,
      ibgeId: 3521101,
      name: 'Ipeúna',
    },
    {
      id: 154,
      ibgeId: 3512704,
      name: 'Corumbataí',
    },
    {
      id: 155,
      ibgeId: 3502002,
      name: 'Analândia',
    },
    {
      id: 156,
      ibgeId: 3548906,
      name: 'São Carlos',
    },
    {
      id: 157,
      ibgeId: 3542909,
      name: 'Ribeirão Bonito',
    },
    {
      id: 158,
      ibgeId: 3514304,
      name: 'Dourado',
    },
    {
      id: 159,
      ibgeId: 3503307,
      name: 'Araras',
    },
    {
      id: 160,
      ibgeId: 3526704,
      name: 'Leme',
    },
    {
      id: 161,
      ibgeId: 3546207,
      name: 'Santa Cruz da Conceição',
    },
    {
      id: 162,
      ibgeId: 3539301,
      name: 'Pirassununga',
    },
    {
      id: 163,
      ibgeId: 3546306,
      name: 'Santa Cruz das Palmeiras',
    },
    {
      id: 164,
      ibgeId: 3540705,
      name: 'Porto Ferreira',
    },
    {
      id: 165,
      ibgeId: 3547502,
      name: 'Santa Rita do Passa Quatro',
    },
    {
      id: 166,
      ibgeId: 3513702,
      name: 'Descalvado',
    },
    {
      id: 167,
      ibgeId: 3510807,
      name: 'Casa Branca',
    },
    {
      id: 168,
      ibgeId: 3553302,
      name: 'Tambaú',
    },
    {
      id: 169,
      ibgeId: 3523800,
      name: 'Itobi',
    },
    {
      id: 170,
      ibgeId: 3549706,
      name: 'São José do Rio Pardo',
    },
    {
      id: 171,
      ibgeId: 3530508,
      name: 'Mococa',
    },
    {
      id: 172,
      ibgeId: 3553609,
      name: 'Tapiratiba',
    },
    {
      id: 173,
      ibgeId: 3508702,
      name: 'Caconde',
    },
    {
      id: 174,
      ibgeId: 3513900,
      name: 'Divinolândia',
    },
    {
      id: 175,
      ibgeId: 3550803,
      name: 'São Sebastião da Grama',
    },
    {
      id: 176,
      ibgeId: 3530805,
      name: 'Mogi Mirim',
    },
    {
      id: 177,
      ibgeId: 3531209,
      name: 'Monte Alegre do Sul',
    },
    {
      id: 178,
      ibgeId: 3519055,
      name: 'Holambra',
    },
    {
      id: 179,
      ibgeId: 3548005,
      name: 'Santo Antônio de Posse',
    },
    {
      id: 180,
      ibgeId: 3512209,
      name: 'Conchal',
    },
    {
      id: 181,
      ibgeId: 3530706,
      name: 'Mogi Guaçu',
    },
    {
      id: 182,
      ibgeId: 3557303,
      name: 'Estiva Gerbi',
    },
    {
      id: 183,
      ibgeId: 3500303,
      name: 'Aguaí',
    },
    {
      id: 184,
      ibgeId: 3549102,
      name: 'São João da Boa Vista',
    },
    {
      id: 185,
      ibgeId: 3556404,
      name: 'Vargem Grande do Sul',
    },
    {
      id: 186,
      ibgeId: 3500402,
      name: 'Águas da Prata',
    },
    {
      id: 187,
      ibgeId: 3501905,
      name: 'Amparo',
    },
    {
      id: 188,
      ibgeId: 3524709,
      name: 'Jaguariúna',
    },
    {
      id: 189,
      ibgeId: 3537107,
      name: 'Pedreira',
    },
    {
      id: 190,
      ibgeId: 3551603,
      name: 'Serra Negra',
    },
    {
      id: 191,
      ibgeId: 3500501,
      name: 'Águas de Lindóia',
    },
    {
      id: 192,
      ibgeId: 3527009,
      name: 'Lindóia',
    },
    {
      id: 193,
      ibgeId: 3552106,
      name: 'Socorro',
    },
    {
      id: 194,
      ibgeId: 3522604,
      name: 'Itapira',
    },
    {
      id: 195,
      ibgeId: 3515186,
      name: 'Espírito Santo do Pinhal',
    },
    {
      id: 196,
      ibgeId: 3548104,
      name: 'Santo Antônio do Jardim',
    },
    {
      id: 197,
      ibgeId: 3543402,
      name: 'Ribeirão Preto',
    },
    {
      id: 198,
      ibgeId: 3518859,
      name: 'Guatapará',
    },
    {
      id: 199,
      ibgeId: 3514601,
      name: 'Dumont',
    },
    {
      id: 200,
      ibgeId: 3513108,
      name: 'Cravinhos',
    },
    {
      id: 201,
      ibgeId: 3551504,
      name: 'Serrana',
    },
    {
      id: 202,
      ibgeId: 3551702,
      name: 'Sertãozinho',
    },
    {
      id: 203,
      ibgeId: 3540200,
      name: 'Pontal',
    },
    {
      id: 204,
      ibgeId: 3550902,
      name: 'São Simão',
    },
    {
      id: 205,
      ibgeId: 3527603,
      name: 'Luís Antônio',
    },
    {
      id: 206,
      ibgeId: 3551405,
      name: 'Serra Azul',
    },
    {
      id: 207,
      ibgeId: 3509403,
      name: 'Cajuru',
    },
    {
      id: 208,
      ibgeId: 3546256,
      name: 'Santa Cruz da Esperança',
    },
    {
      id: 209,
      ibgeId: 3510906,
      name: 'Cássia dos Coqueiros',
    },
    {
      id: 210,
      ibgeId: 3547601,
      name: 'Santa Rosa de Viterbo',
    },
    {
      id: 211,
      ibgeId: 3505906,
      name: 'Batatais',
    },
    {
      id: 212,
      ibgeId: 3507803,
      name: 'Brodowski',
    },
    {
      id: 213,
      ibgeId: 3501004,
      name: 'Altinópolis',
    },
    {
      id: 214,
      ibgeId: 3547908,
      name: 'Santo Antônio da Alegria',
    },
    {
      id: 215,
      ibgeId: 3516200,
      name: 'Franca',
    },
    {
      id: 216,
      ibgeId: 3536307,
      name: 'Patrocínio Paulista',
    },
    {
      id: 217,
      ibgeId: 3523701,
      name: 'Itirapuã',
    },
    {
      id: 218,
      ibgeId: 3542701,
      name: 'Restinga',
    },
    {
      id: 219,
      ibgeId: 3549508,
      name: 'São José da Bela Vista',
    },
    {
      id: 220,
      ibgeId: 3543105,
      name: 'Ribeirão Corrente',
    },
    {
      id: 221,
      ibgeId: 3525409,
      name: 'Jeriquara',
    },
    {
      id: 222,
      ibgeId: 3513207,
      name: 'Cristais Paulista',
    },
    {
      id: 223,
      ibgeId: 3537008,
      name: 'Pedregulho',
    },
    {
      id: 224,
      ibgeId: 3543600,
      name: 'Rifaina',
    },
    {
      id: 225,
      ibgeId: 3524105,
      name: 'Ituverava',
    },
    {
      id: 226,
      ibgeId: 3529708,
      name: 'Miguelópolis',
    },
    {
      id: 227,
      ibgeId: 3520103,
      name: 'Igarapava',
    },
    {
      id: 228,
      ibgeId: 3503000,
      name: 'Aramina',
    },
    {
      id: 229,
      ibgeId: 3508207,
      name: 'Buritizal',
    },
    {
      id: 230,
      ibgeId: 3517703,
      name: 'Guará',
    },
    {
      id: 231,
      ibgeId: 3549409,
      name: 'São Joaquim da Barra',
    },
    {
      id: 232,
      ibgeId: 3521309,
      name: 'Ipuã',
    },
    {
      id: 233,
      ibgeId: 3534302,
      name: 'Orlândia',
    },
    {
      id: 234,
      ibgeId: 3531902,
      name: 'Morro Agudo',
    },
    {
      id: 235,
      ibgeId: 3544905,
      name: 'Sales Oliveira',
    },
    {
      id: 236,
      ibgeId: 3533601,
      name: 'Nuporanga',
    },
    {
      id: 237,
      ibgeId: 3525102,
      name: 'Jardinópolis',
    },
    {
      id: 238,
      ibgeId: 3506102,
      name: 'Bebedouro',
    },
    {
      id: 239,
      ibgeId: 3553203,
      name: 'Taiúva',
    },
    {
      id: 240,
      ibgeId: 3553104,
      name: 'Taiaçu',
    },
    {
      id: 241,
      ibgeId: 3531506,
      name: 'Monte Azul Paulista',
    },
    {
      id: 242,
      ibgeId: 3551900,
      name: 'Severínia',
    },
    {
      id: 243,
      ibgeId: 3556800,
      name: 'Viradouro',
    },
    {
      id: 244,
      ibgeId: 3554409,
      name: 'Terra Roxa',
    },
    {
      id: 245,
      ibgeId: 3539509,
      name: 'Pitangueiras',
    },
    {
      id: 246,
      ibgeId: 3553658,
      name: 'Taquaral',
    },
    {
      id: 247,
      ibgeId: 3512001,
      name: 'Colina',
    },
    {
      id: 248,
      ibgeId: 3524204,
      name: 'Jaborandi',
    },
    {
      id: 249,
      ibgeId: 3505500,
      name: 'Barretos',
    },
    {
      id: 250,
      ibgeId: 3517406,
      name: 'Guaíra',
    },
    {
      id: 251,
      ibgeId: 3512100,
      name: 'Colômbia',
    },
    {
      id: 252,
      ibgeId: 3503208,
      name: 'Araraquara',
    },
    {
      id: 253,
      ibgeId: 3516853,
      name: 'Gavião Peixoto',
    },
    {
      id: 254,
      ibgeId: 3519303,
      name: 'Ibaté',
    },
    {
      id: 255,
      ibgeId: 3501707,
      name: 'Américo Brasiliense',
    },
    {
      id: 256,
      ibgeId: 3546900,
      name: 'Santa Lúcia',
    },
    {
      id: 257,
      ibgeId: 3543709,
      name: 'Rincão',
    },
    {
      id: 258,
      ibgeId: 3532058,
      name: 'Motuca',
    },
    {
      id: 259,
      ibgeId: 3518602,
      name: 'Guariba',
    },
    {
      id: 260,
      ibgeId: 3540903,
      name: 'Pradópolis',
    },
    {
      id: 261,
      ibgeId: 3505609,
      name: 'Barrinha',
    },
    {
      id: 262,
      ibgeId: 3524303,
      name: 'Jaboticabal',
    },
    {
      id: 263,
      ibgeId: 3522703,
      name: 'Itápolis',
    },
    {
      id: 264,
      ibgeId: 3552700,
      name: 'Tabatinga',
    },
    {
      id: 265,
      ibgeId: 3532900,
      name: 'Nova Europa',
    },
    {
      id: 266,
      ibgeId: 3506706,
      name: 'Boa Esperança do Sul',
    },
    {
      id: 267,
      ibgeId: 3554755,
      name: 'Trabiju',
    },
    {
      id: 268,
      ibgeId: 3519600,
      name: 'Ibitinga',
    },
    {
      id: 269,
      ibgeId: 3507407,
      name: 'Borborema',
    },
    {
      id: 270,
      ibgeId: 3533502,
      name: 'Novo Horizonte',
    },
    {
      id: 271,
      ibgeId: 3544806,
      name: 'Sales',
    },
    {
      id: 272,
      ibgeId: 3521507,
      name: 'Irapuã',
    },
    {
      id: 273,
      ibgeId: 3549805,
      name: 'São José do Rio Preto',
    },
    {
      id: 274,
      ibgeId: 3540804,
      name: 'Potirendaba',
    },
    {
      id: 275,
      ibgeId: 3521150,
      name: 'Ipiguá',
    },
    {
      id: 276,
      ibgeId: 3517505,
      name: 'Guapiaçu',
    },
    {
      id: 277,
      ibgeId: 3504602,
      name: 'Bady Bassitt',
    },
    {
      id: 278,
      ibgeId: 3532504,
      name: 'Neves Paulista',
    },
    {
      id: 279,
      ibgeId: 3530300,
      name: 'Mirassol',
    },
    {
      id: 280,
      ibgeId: 3504800,
      name: 'Bálsamo',
    },
    {
      id: 281,
      ibgeId: 3530409,
      name: 'Mirassolândia',
    },
    {
      id: 282,
      ibgeId: 3531407,
      name: 'Monte Aprazível',
    },
    {
      id: 283,
      ibgeId: 3524501,
      name: 'Jaci',
    },
    {
      id: 284,
      ibgeId: 3539905,
      name: 'Poloni',
    },
    {
      id: 285,
      ibgeId: 3553401,
      name: 'Tanabi',
    },
    {
      id: 286,
      ibgeId: 3551306,
      name: 'Sebastianópolis do Sul',
    },
    {
      id: 287,
      ibgeId: 3532603,
      name: 'Nhandeara',
    },
    {
      id: 288,
      ibgeId: 3525706,
      name: 'José Bonifácio',
    },
    {
      id: 289,
      ibgeId: 3532801,
      name: 'Nova Aliança',
    },
    {
      id: 290,
      ibgeId: 3529500,
      name: 'Mendonça',
    },
    {
      id: 291,
      ibgeId: 3555356,
      name: 'Ubarana',
    },
    {
      id: 292,
      ibgeId: 3500204,
      name: 'Adolfo',
    },
    {
      id: 293,
      ibgeId: 3532702,
      name: 'Nipoã',
    },
    {
      id: 294,
      ibgeId: 3555703,
      name: 'União Paulista',
    },
    {
      id: 295,
      ibgeId: 3539608,
      name: 'Planalto',
    },
    {
      id: 296,
      ibgeId: 3557154,
      name: 'Zacarias',
    },
    {
      id: 297,
      ibgeId: 3528106,
      name: 'Macaubal',
    },
    {
      id: 298,
      ibgeId: 3531001,
      name: 'Monções',
    },
    {
      id: 299,
      ibgeId: 3555208,
      name: 'Turiúba',
    },
    {
      id: 300,
      ibgeId: 3527256,
      name: 'Lourdes',
    },
    {
      id: 301,
      ibgeId: 3508108,
      name: 'Buritama',
    },
    {
      id: 302,
      ibgeId: 3516903,
      name: 'General Salgado',
    },
    {
      id: 303,
      ibgeId: 3528304,
      name: 'Magda',
    },
    {
      id: 304,
      ibgeId: 3532868,
      name: 'Nova Castilho',
    },
    {
      id: 305,
      ibgeId: 3549250,
      name: 'São João de Iracema',
    },
    {
      id: 306,
      ibgeId: 3515905,
      name: 'Floreal',
    },
    {
      id: 307,
      ibgeId: 3516804,
      name: 'Gastão Vidigal',
    },
    {
      id: 308,
      ibgeId: 3533304,
      name: 'Nova Luzitânia',
    },
    {
      id: 309,
      ibgeId: 3504206,
      name: 'Auriflama',
    },
    {
      id: 310,
      ibgeId: 3518909,
      name: 'Guzolândia',
    },
    {
      id: 311,
      ibgeId: 3552304,
      name: 'Sud Mennucci',
    },
    {
      id: 312,
      ibgeId: 3537404,
      name: 'Pereira Barreto',
    },
    {
      id: 313,
      ibgeId: 3552551,
      name: 'Suzanápolis',
    },
    {
      id: 314,
      ibgeId: 3520442,
      name: 'Ilha Solteira',
    },
    {
      id: 315,
      ibgeId: 3523008,
      name: 'Itapura',
    },
    {
      id: 316,
      ibgeId: 3533908,
      name: 'Olímpia',
    },
    {
      id: 317,
      ibgeId: 3509304,
      name: 'Cajobi',
    },
    {
      id: 318,
      ibgeId: 3517901,
      name: 'Guaraci',
    },
    {
      id: 319,
      ibgeId: 3514957,
      name: 'Embaúba',
    },
    {
      id: 320,
      ibgeId: 3500907,
      name: 'Altair',
    },
    {
      id: 321,
      ibgeId: 3533007,
      name: 'Nova Granada',
    },
    {
      id: 322,
      ibgeId: 3534005,
      name: 'Onda Verde',
    },
    {
      id: 323,
      ibgeId: 3519808,
      name: 'Icém',
    },
    {
      id: 324,
      ibgeId: 3535002,
      name: 'Palestina',
    },
    {
      id: 325,
      ibgeId: 3534203,
      name: 'Orindiúva',
    },
    {
      id: 326,
      ibgeId: 3536604,
      name: 'Paulo de Faria',
    },
    {
      id: 327,
      ibgeId: 3544202,
      name: 'Riolândia',
    },
    {
      id: 328,
      ibgeId: 3557105,
      name: 'Votuporanga',
    },
    {
      id: 329,
      ibgeId: 3556107,
      name: 'Valentim Gentil',
    },
    {
      id: 330,
      ibgeId: 3536257,
      name: 'Parisi',
    },
    {
      id: 331,
      ibgeId: 3512902,
      name: 'Cosmorama',
    },
    {
      id: 332,
      ibgeId: 3501202,
      name: 'Álvares Florence',
    },
    {
      id: 333,
      ibgeId: 3501806,
      name: 'Américo de Campos',
    },
    {
      id: 334,
      ibgeId: 3540309,
      name: 'Pontes Gestal',
    },
    {
      id: 335,
      ibgeId: 3510708,
      name: 'Cardoso',
    },
    {
      id: 336,
      ibgeId: 3530003,
      name: 'Mira Estrela',
    },
    {
      id: 337,
      ibgeId: 3515509,
      name: 'Fernandópolis',
    },
    {
      id: 338,
      ibgeId: 3528205,
      name: 'Macedônia',
    },
    {
      id: 339,
      ibgeId: 3529609,
      name: 'Meridiano',
    },
    {
      id: 340,
      ibgeId: 3536901,
      name: 'Pedranópolis',
    },
    {
      id: 341,
      ibgeId: 3549201,
      name: 'São João das Duas Pontes',
    },
    {
      id: 342,
      ibgeId: 3515202,
      name: "Estrela D'Oeste",
    },
    {
      id: 343,
      ibgeId: 3540408,
      name: 'Populina',
    },
    {
      id: 344,
      ibgeId: 3518008,
      name: "Guarani D'Oeste",
    },
    {
      id: 345,
      ibgeId: 3534757,
      name: 'Ouroeste',
    },
    {
      id: 346,
      ibgeId: 3520707,
      name: 'Indiaporã',
    },
    {
      id: 347,
      ibgeId: 3524808,
      name: 'Jales',
    },
    {
      id: 348,
      ibgeId: 3549003,
      name: 'São Francisco',
    },
    {
      id: 349,
      ibgeId: 3556958,
      name: 'Vitória Brasil',
    },
    {
      id: 350,
      ibgeId: 3513850,
      name: 'Dirce Reis',
    },
    {
      id: 351,
      ibgeId: 3540259,
      name: 'Pontalinda',
    },
    {
      id: 352,
      ibgeId: 3535200,
      name: "Palmeira D'Oeste",
    },
    {
      id: 353,
      ibgeId: 3529104,
      name: 'Marinópolis',
    },
    {
      id: 354,
      ibgeId: 3502606,
      name: "Aparecida D'Oeste",
    },
    {
      id: 355,
      ibgeId: 3514205,
      name: 'Dolcinópolis',
    },
    {
      id: 356,
      ibgeId: 3535903,
      name: 'Paranapuã',
    },
    {
      id: 357,
      ibgeId: 3529658,
      name: 'Mesópolis',
    },
    {
      id: 358,
      ibgeId: 3545704,
      name: 'Santa Albertina',
    },
    {
      id: 359,
      ibgeId: 3555307,
      name: 'Turmalina',
    },
    {
      id: 360,
      ibgeId: 3555802,
      name: 'Urânia',
    },
    {
      id: 361,
      ibgeId: 3503950,
      name: 'Aspásia',
    },
    {
      id: 362,
      ibgeId: 3547205,
      name: 'Santana da Ponte Pensa',
    },
    {
      id: 363,
      ibgeId: 3547650,
      name: 'Santa Salete',
    },
    {
      id: 364,
      ibgeId: 3554904,
      name: 'Três Fronteiras',
    },
    {
      id: 365,
      ibgeId: 3532843,
      name: 'Nova Canaã Paulista',
    },
    {
      id: 366,
      ibgeId: 3546603,
      name: 'Santa Fé do Sul',
    },
    {
      id: 367,
      ibgeId: 3547403,
      name: "Santa Rita D'Oeste",
    },
    {
      id: 368,
      ibgeId: 3546108,
      name: "Santa Clara D'Oeste",
    },
    {
      id: 369,
      ibgeId: 3544509,
      name: 'Rubinéia',
    },
    {
      id: 370,
      ibgeId: 3511102,
      name: 'Catanduva',
    },
    {
      id: 371,
      ibgeId: 3539004,
      name: 'Pirangi',
    },
    {
      id: 372,
      ibgeId: 3514924,
      name: 'Elisiário',
    },
    {
      id: 373,
      ibgeId: 3535705,
      name: 'Paraíso',
    },
    {
      id: 374,
      ibgeId: 3535101,
      name: 'Palmares Paulista',
    },
    {
      id: 375,
      ibgeId: 3538105,
      name: 'Pindorama',
    },
    {
      id: 376,
      ibgeId: 3521903,
      name: 'Itajobi',
    },
    {
      id: 377,
      ibgeId: 3528858,
      name: 'Marapoama',
    },
    {
      id: 378,
      ibgeId: 3556008,
      name: 'Urupês',
    },
    {
      id: 379,
      ibgeId: 3519402,
      name: 'Ibirá',
    },
    {
      id: 380,
      ibgeId: 3511201,
      name: 'Catiguá',
    },
    {
      id: 381,
      ibgeId: 3552601,
      name: 'Tabapuã',
    },
    {
      id: 382,
      ibgeId: 3533254,
      name: 'Novais',
    },
    {
      id: 383,
      ibgeId: 3555604,
      name: 'Uchoa',
    },
    {
      id: 384,
      ibgeId: 3511300,
      name: 'Cedral',
    },
    {
      id: 385,
      ibgeId: 3553708,
      name: 'Taquaritinga',
    },
    {
      id: 386,
      ibgeId: 3531308,
      name: 'Monte Alto',
    },
    {
      id: 387,
      ibgeId: 3556909,
      name: 'Vista Alegre do Alto',
    },
    {
      id: 388,
      ibgeId: 3510104,
      name: 'Cândido Rodrigues',
    },
    {
      id: 389,
      ibgeId: 3515608,
      name: 'Fernando Prestes',
    },
    {
      id: 390,
      ibgeId: 3545605,
      name: 'Santa Adélia',
    },
    {
      id: 391,
      ibgeId: 3503703,
      name: 'Ariranha',
    },
    {
      id: 392,
      ibgeId: 3546504,
      name: 'Santa Ernestina',
    },
    {
      id: 393,
      ibgeId: 3514007,
      name: 'Dobrada',
    },
    {
      id: 394,
      ibgeId: 3529302,
      name: 'Matão',
    },
    {
      id: 395,
      ibgeId: 3502804,
      name: 'Araçatuba',
    },
    {
      id: 396,
      ibgeId: 3548054,
      name: 'Santo Antônio do Aracanguá',
    },
    {
      id: 397,
      ibgeId: 3506508,
      name: 'Birigüi',
    },
    {
      id: 398,
      ibgeId: 3506409,
      name: 'Bilac',
    },
    {
      id: 399,
      ibgeId: 3516507,
      name: 'Gabriel Monteiro',
    },
    {
      id: 400,
      ibgeId: 3537701,
      name: 'Piacatu',
    },
    {
      id: 401,
      ibgeId: 3548401,
      name: 'Santópolis do Aguapeí',
    },
    {
      id: 402,
      ibgeId: 3511904,
      name: 'Clementina',
    },
    {
      id: 403,
      ibgeId: 3512506,
      name: 'Coroados',
    },
    {
      id: 404,
      ibgeId: 3507753,
      name: 'Brejo Alegre',
    },
    {
      id: 405,
      ibgeId: 3517109,
      name: 'Glicério',
    },
    {
      id: 406,
      ibgeId: 3507704,
      name: 'Braúna',
    },
    {
      id: 407,
      ibgeId: 3537305,
      name: 'Penápolis',
    },
    {
      id: 408,
      ibgeId: 3501103,
      name: 'Alto Alegre',
    },
    {
      id: 409,
      ibgeId: 3527702,
      name: 'Luiziânia',
    },
    {
      id: 410,
      ibgeId: 3505104,
      name: 'Barbosa',
    },
    {
      id: 411,
      ibgeId: 3504404,
      name: 'Avanhandava',
    },
    {
      id: 412,
      ibgeId: 3541604,
      name: 'Promissão',
    },
    {
      id: 413,
      ibgeId: 3527108,
      name: 'Lins',
    },
    {
      id: 414,
      ibgeId: 3517208,
      name: 'Guaiçara',
    },
    {
      id: 415,
      ibgeId: 3544608,
      name: 'Sabino',
    },
    {
      id: 416,
      ibgeId: 3517000,
      name: 'Getulina',
    },
    {
      id: 417,
      ibgeId: 3517307,
      name: 'Guaimbê',
    },
    {
      id: 418,
      ibgeId: 3508801,
      name: 'Cafelândia',
    },
    {
      id: 419,
      ibgeId: 3518107,
      name: 'Guarantã',
    },
    {
      id: 420,
      ibgeId: 3538907,
      name: 'Pirajuí',
    },
    {
      id: 421,
      ibgeId: 3504701,
      name: 'Balbinos',
    },
    {
      id: 422,
      ibgeId: 3555901,
      name: 'Uru',
    },
    {
      id: 423,
      ibgeId: 3540101,
      name: 'Pongaí',
    },
    {
      id: 424,
      ibgeId: 3541109,
      name: 'Presidente Alves',
    },
    {
      id: 425,
      ibgeId: 3504305,
      name: 'Avaí',
    },
    {
      id: 426,
      ibgeId: 3518206,
      name: 'Guararapes',
    },
    {
      id: 427,
      ibgeId: 3544400,
      name: 'Rubiácea',
    },
    {
      id: 428,
      ibgeId: 3506201,
      name: 'Bento de Abreu',
    },
    {
      id: 429,
      ibgeId: 3530102,
      name: 'Mirandópolis',
    },
    {
      id: 430,
      ibgeId: 3526506,
      name: 'Lavínia',
    },
    {
      id: 431,
      ibgeId: 3556305,
      name: 'Valparaíso',
    },
    {
      id: 432,
      ibgeId: 3502101,
      name: 'Andradina',
    },
    {
      id: 433,
      ibgeId: 3511003,
      name: 'Castilho',
    },
    {
      id: 434,
      ibgeId: 3533205,
      name: 'Nova Independência',
    },
    {
      id: 435,
      ibgeId: 3532108,
      name: 'Murutinga do Sul',
    },
    {
      id: 436,
      ibgeId: 3517802,
      name: 'Guaraçaí',
    },
    {
      id: 437,
      ibgeId: 3506003,
      name: 'Bauru',
    },
    {
      id: 438,
      ibgeId: 3500709,
      name: 'Agudos',
    },
    {
      id: 439,
      ibgeId: 3536570,
      name: 'Paulistânia',
    },
    {
      id: 440,
      ibgeId: 3503406,
      name: 'Arealva',
    },
    {
      id: 441,
      ibgeId: 3519105,
      name: 'Iacanga',
    },
    {
      id: 442,
      ibgeId: 3542503,
      name: 'Reginópolis',
    },
    {
      id: 443,
      ibgeId: 3525300,
      name: 'Jaú',
    },
    {
      id: 444,
      ibgeId: 3522901,
      name: 'Itapuí',
    },
    {
      id: 445,
      ibgeId: 3506805,
      name: 'Bocaina',
    },
    {
      id: 446,
      ibgeId: 3505203,
      name: 'Bariri',
    },
    {
      id: 447,
      ibgeId: 3522000,
      name: 'Itaju',
    },
    {
      id: 448,
      ibgeId: 3507308,
      name: 'Boracéia',
    },
    {
      id: 449,
      ibgeId: 3536703,
      name: 'Pederneiras',
    },
    {
      id: 450,
      ibgeId: 3528007,
      name: 'Macatuba',
    },
    {
      id: 451,
      ibgeId: 3514106,
      name: 'Dois Córregos',
    },
    {
      id: 452,
      ibgeId: 3529807,
      name: 'Mineiros do Tietê',
    },
    {
      id: 453,
      ibgeId: 3505302,
      name: 'Barra Bonita',
    },
    {
      id: 454,
      ibgeId: 3520004,
      name: 'Igaraçu do Tietê',
    },
    {
      id: 455,
      ibgeId: 3554706,
      name: 'Torrinha',
    },
    {
      id: 456,
      ibgeId: 3547007,
      name: 'Santa Maria da Serra',
    },
    {
      id: 457,
      ibgeId: 3507902,
      name: 'Brotas',
    },
    {
      id: 458,
      ibgeId: 3516705,
      name: 'Garça',
    },
    {
      id: 459,
      ibgeId: 3501400,
      name: 'Álvaro de Carvalho',
    },
    {
      id: 460,
      ibgeId: 3527801,
      name: 'Lupércio',
    },
    {
      id: 461,
      ibgeId: 3501509,
      name: 'Alvinlândia',
    },
    {
      id: 462,
      ibgeId: 3555505,
      name: 'Ubirajara',
    },
    {
      id: 463,
      ibgeId: 3516606,
      name: 'Gália',
    },
    {
      id: 464,
      ibgeId: 3515657,
      name: 'Fernão',
    },
    {
      id: 465,
      ibgeId: 3514502,
      name: 'Duartina',
    },
    {
      id: 466,
      ibgeId: 3527504,
      name: 'Lucianópolis',
    },
    {
      id: 467,
      ibgeId: 3508306,
      name: 'Cabrália Paulista',
    },
    {
      id: 468,
      ibgeId: 3539400,
      name: 'Piratininga',
    },
    {
      id: 469,
      ibgeId: 3529005,
      name: 'Marília',
    },
    {
      id: 470,
      ibgeId: 3533700,
      name: 'Ocauçu',
    },
    {
      id: 471,
      ibgeId: 3525805,
      name: 'Júlio Mesquita',
    },
    {
      id: 472,
      ibgeId: 3556602,
      name: 'Vera Cruz',
    },
    {
      id: 473,
      ibgeId: 3534104,
      name: 'Oriente',
    },
    {
      id: 474,
      ibgeId: 3540002,
      name: 'Pompéia',
    },
    {
      id: 475,
      ibgeId: 3541802,
      name: 'Queiroz',
    },
    {
      id: 476,
      ibgeId: 3555000,
      name: 'Tupã',
    },
    {
      id: 477,
      ibgeId: 3503356,
      name: 'Arco-Íris',
    },
    {
      id: 478,
      ibgeId: 3519006,
      name: 'Herculândia',
    },
    {
      id: 479,
      ibgeId: 3542008,
      name: 'Quintana',
    },
    {
      id: 480,
      ibgeId: 3519204,
      name: 'Iacri',
    },
    {
      id: 481,
      ibgeId: 3505807,
      name: 'Bastos',
    },
    {
      id: 482,
      ibgeId: 3534609,
      name: 'Osvaldo Cruz',
    },
    {
      id: 483,
      ibgeId: 3544707,
      name: 'Sagres',
    },
    {
      id: 484,
      ibgeId: 3545100,
      name: 'Salmourão',
    },
    {
      id: 485,
      ibgeId: 3536000,
      name: 'Parapuã',
    },
    {
      id: 486,
      ibgeId: 3543808,
      name: 'Rinópolis',
    },
    {
      id: 487,
      ibgeId: 3520806,
      name: 'Inúbia Paulista',
    },
    {
      id: 488,
      ibgeId: 3527405,
      name: 'Lucélia',
    },
    {
      id: 489,
      ibgeId: 3540853,
      name: 'Pracinha',
    },
    {
      id: 490,
      ibgeId: 3500105,
      name: 'Adamantina',
    },
    {
      id: 491,
      ibgeId: 3528908,
      name: 'Mariápolis',
    },
    {
      id: 492,
      ibgeId: 3516002,
      name: 'Flórida Paulista',
    },
    {
      id: 493,
      ibgeId: 3534906,
      name: 'Pacaembu',
    },
    {
      id: 494,
      ibgeId: 3515806,
      name: 'Flora Rica',
    },
    {
      id: 495,
      ibgeId: 3521606,
      name: 'Irapuru',
    },
    {
      id: 496,
      ibgeId: 3526001,
      name: 'Junqueirópolis',
    },
    {
      id: 497,
      ibgeId: 3514403,
      name: 'Dracena',
    },
    {
      id: 498,
      ibgeId: 3534807,
      name: 'Ouro Verde',
    },
    {
      id: 499,
      ibgeId: 3555109,
      name: 'Tupi Paulista',
    },
    {
      id: 500,
      ibgeId: 3547106,
      name: 'Santa Mercedes',
    },
    {
      id: 501,
      ibgeId: 3533106,
      name: 'Nova Guataporanga',
    },
    {
      id: 502,
      ibgeId: 3531605,
      name: 'Monte Castelo',
    },
    {
      id: 503,
      ibgeId: 3549300,
      name: "São João do Pau d'Alho",
    },
    {
      id: 504,
      ibgeId: 3535408,
      name: 'Panorama',
    },
    {
      id: 505,
      ibgeId: 3536406,
      name: 'Paulicéia',
    },
    {
      id: 506,
      ibgeId: 3552205,
      name: 'Sorocaba',
    },
    {
      id: 507,
      ibgeId: 3557006,
      name: 'Votorantim',
    },
    {
      id: 508,
      ibgeId: 3528403,
      name: 'Mairinque',
    },
    {
      id: 509,
      ibgeId: 3501152,
      name: 'Alumínio',
    },
    {
      id: 510,
      ibgeId: 3550605,
      name: 'São Roque',
    },
    {
      id: 511,
      ibgeId: 3502754,
      name: 'Araçariguama',
    },
    {
      id: 512,
      ibgeId: 3519709,
      name: 'Ibiúna',
    },
    {
      id: 513,
      ibgeId: 3545308,
      name: 'Salto de Pirapora',
    },
    {
      id: 514,
      ibgeId: 3537800,
      name: 'Piedade',
    },
    {
      id: 515,
      ibgeId: 3553500,
      name: 'Tapiraí',
    },
    {
      id: 516,
      ibgeId: 3537909,
      name: 'Pilar do Sul',
    },
    {
      id: 517,
      ibgeId: 3502903,
      name: 'Araçoiaba da Serra',
    },
    {
      id: 518,
      ibgeId: 3510302,
      name: 'Capela do Alto',
    },
    {
      id: 519,
      ibgeId: 3522307,
      name: 'Itapetininga',
    },
    {
      id: 520,
      ibgeId: 3500758,
      name: 'Alambari',
    },
    {
      id: 521,
      ibgeId: 3551108,
      name: 'Sarapuí',
    },
    {
      id: 522,
      ibgeId: 3550209,
      name: 'São Miguel Arcanjo',
    },
    {
      id: 523,
      ibgeId: 3502200,
      name: 'Angatuba',
    },
    {
      id: 524,
      ibgeId: 3509452,
      name: 'Campina do Monte Alegre',
    },
    {
      id: 525,
      ibgeId: 3518503,
      name: 'Guareí',
    },
    {
      id: 526,
      ibgeId: 3541653,
      name: 'Quadra',
    },
    {
      id: 527,
      ibgeId: 3540507,
      name: 'Porangaba',
    },
    {
      id: 528,
      ibgeId: 3554656,
      name: 'Torre de Pedra',
    },
    {
      id: 529,
      ibgeId: 3554003,
      name: 'Tatuí',
    },
    {
      id: 530,
      ibgeId: 3511607,
      name: 'Cesário Lange',
    },
    {
      id: 531,
      ibgeId: 3508009,
      name: 'Buri',
    },
    {
      id: 532,
      ibgeId: 3510203,
      name: 'Capão Bonito',
    },
    {
      id: 533,
      ibgeId: 3517604,
      name: 'Guapiara',
    },
    {
      id: 534,
      ibgeId: 3543253,
      name: 'Ribeirão Grande',
    },
    {
      id: 535,
      ibgeId: 3502705,
      name: 'Apiaí',
    },
    {
      id: 536,
      ibgeId: 3505351,
      name: 'Barra do Chapéu',
    },
    {
      id: 537,
      ibgeId: 3521200,
      name: 'Iporanga',
    },
    {
      id: 538,
      ibgeId: 3522158,
      name: 'Itaóca',
    },
    {
      id: 539,
      ibgeId: 3542800,
      name: 'Ribeira',
    },
    {
      id: 540,
      ibgeId: 3522653,
      name: 'Itapirapuã Paulista',
    },
    {
      id: 541,
      ibgeId: 3522406,
      name: 'Itapeva',
    },
    {
      id: 542,
      ibgeId: 3553856,
      name: 'Taquarivaí',
    },
    {
      id: 543,
      ibgeId: 3543006,
      name: 'Ribeirão Branco',
    },
    {
      id: 544,
      ibgeId: 3532827,
      name: 'Nova Campina',
    },
    {
      id: 545,
      ibgeId: 3521705,
      name: 'Itaberá',
    },
    {
      id: 546,
      ibgeId: 3523206,
      name: 'Itararé',
    },
    {
      id: 547,
      ibgeId: 3543501,
      name: 'Riversul',
    },
    {
      id: 548,
      ibgeId: 3507159,
      name: 'Bom Sucesso de Itararé',
    },
    {
      id: 549,
      ibgeId: 3522802,
      name: 'Itaporanga',
    },
    {
      id: 550,
      ibgeId: 3505005,
      name: 'Barão de Antonina',
    },
    {
      id: 551,
      ibgeId: 3526407,
      name: 'Laranjal Paulista',
    },
    {
      id: 552,
      ibgeId: 3511508,
      name: 'Cerquilho',
    },
    {
      id: 553,
      ibgeId: 3554508,
      name: 'Tietê',
    },
    {
      id: 554,
      ibgeId: 3525854,
      name: 'Jumirim',
    },
    {
      id: 555,
      ibgeId: 3540606,
      name: 'Porto Feliz',
    },
    {
      id: 556,
      ibgeId: 3507001,
      name: 'Boituva',
    },
    {
      id: 557,
      ibgeId: 3521002,
      name: 'Iperó',
    },
    {
      id: 558,
      ibgeId: 3512308,
      name: 'Conchas',
    },
    {
      id: 559,
      ibgeId: 3537503,
      name: 'Pereiras',
    },
    {
      id: 560,
      ibgeId: 3506904,
      name: 'Bofete',
    },
    {
      id: 561,
      ibgeId: 3507506,
      name: 'Botucatu',
    },
    {
      id: 562,
      ibgeId: 3502309,
      name: 'Anhembi',
    },
    {
      id: 563,
      ibgeId: 3536109,
      name: 'Pardinho',
    },
    {
      id: 564,
      ibgeId: 3550100,
      name: 'São Manuel',
    },
    {
      id: 565,
      ibgeId: 3541059,
      name: 'Pratânia',
    },
    {
      id: 566,
      ibgeId: 3503604,
      name: 'Areiópolis',
    },
    {
      id: 567,
      ibgeId: 3507456,
      name: 'Borebi',
    },
    {
      id: 568,
      ibgeId: 3526803,
      name: 'Lençóis Paulista',
    },
    {
      id: 569,
      ibgeId: 3523503,
      name: 'Itatinga',
    },
    {
      id: 570,
      ibgeId: 3504503,
      name: 'Avaré',
    },
    {
      id: 571,
      ibgeId: 3503109,
      name: 'Arandu',
    },
    {
      id: 572,
      ibgeId: 3535804,
      name: 'Paranapanema',
    },
    {
      id: 573,
      ibgeId: 3521804,
      name: 'Itaí',
    },
    {
      id: 574,
      ibgeId: 3553807,
      name: 'Taquarituba',
    },
    {
      id: 575,
      ibgeId: 3512605,
      name: 'Coronel Macedo',
    },
    {
      id: 576,
      ibgeId: 3511409,
      name: 'Cerqueira César',
    },
    {
      id: 577,
      ibgeId: 3500550,
      name: 'Águas de Santa Bárbara',
    },
    {
      id: 578,
      ibgeId: 3519253,
      name: 'Iaras',
    },
    {
      id: 579,
      ibgeId: 3528601,
      name: 'Manduri',
    },
    {
      id: 580,
      ibgeId: 3533809,
      name: 'Óleo',
    },
    {
      id: 581,
      ibgeId: 3538808,
      name: 'Piraju',
    },
    {
      id: 582,
      ibgeId: 3554201,
      name: 'Tejupá',
    },
    {
      id: 583,
      ibgeId: 3551207,
      name: 'Sarutaiá',
    },
    {
      id: 584,
      ibgeId: 3554607,
      name: 'Timburi',
    },
    {
      id: 585,
      ibgeId: 3515400,
      name: 'Fartura',
    },
    {
      id: 586,
      ibgeId: 3553005,
      name: 'Taguaí',
    },
    {
      id: 587,
      ibgeId: 3546405,
      name: 'Santa Cruz do Rio Pardo',
    },
    {
      id: 588,
      ibgeId: 3515194,
      name: 'Espírito Santo do Turvo',
    },
    {
      id: 589,
      ibgeId: 3550506,
      name: 'São Pedro do Turvo',
    },
    {
      id: 590,
      ibgeId: 3520905,
      name: 'Ipaussu',
    },
    {
      id: 591,
      ibgeId: 3506300,
      name: 'Bernardino de Campos',
    },
    {
      id: 592,
      ibgeId: 3557204,
      name: 'Chavantes',
    },
    {
      id: 593,
      ibgeId: 3510153,
      name: 'Canitar',
    },
    {
      id: 594,
      ibgeId: 3541406,
      name: 'Presidente Prudente',
    },
    {
      id: 595,
      ibgeId: 3501301,
      name: 'Álvares Machado',
    },
    {
      id: 596,
      ibgeId: 3500808,
      name: 'Alfredo Marcondes',
    },
    {
      id: 597,
      ibgeId: 3548302,
      name: 'Santo Expedito',
    },
    {
      id: 598,
      ibgeId: 3539202,
      name: 'Pirapozinho',
    },
    {
      id: 599,
      ibgeId: 3553906,
      name: 'Tarabai',
    },
    {
      id: 600,
      ibgeId: 3532207,
      name: 'Narandiba',
    },
    {
      id: 601,
      ibgeId: 3515301,
      name: 'Estrela do Norte',
    },
    {
      id: 602,
      ibgeId: 3545506,
      name: 'Sandovalina',
    },
    {
      id: 603,
      ibgeId: 3530201,
      name: 'Mirante do Paranapanema',
    },
    {
      id: 604,
      ibgeId: 3544251,
      name: 'Rosana',
    },
    {
      id: 605,
      ibgeId: 3515350,
      name: 'Euclides da Cunha Paulista',
    },
    {
      id: 606,
      ibgeId: 3554300,
      name: 'Teodoro Sampaio',
    },
    {
      id: 607,
      ibgeId: 3541208,
      name: 'Presidente Bernardes',
    },
    {
      id: 608,
      ibgeId: 3515129,
      name: 'Emilianópolis',
    },
    {
      id: 609,
      ibgeId: 3547700,
      name: 'Santo Anastácio',
    },
    {
      id: 610,
      ibgeId: 3543238,
      name: 'Ribeirão dos Índios',
    },
    {
      id: 611,
      ibgeId: 3541505,
      name: 'Presidente Venceslau',
    },
    {
      id: 612,
      ibgeId: 3538303,
      name: 'Piquerobi',
    },
    {
      id: 613,
      ibgeId: 3528700,
      name: 'Marabá Paulista',
    },
    {
      id: 614,
      ibgeId: 3509106,
      name: 'Caiuá',
    },
    {
      id: 615,
      ibgeId: 3541307,
      name: 'Presidente Epitácio',
    },
    {
      id: 616,
      ibgeId: 3529203,
      name: 'Martinópolis',
    },
    {
      id: 617,
      ibgeId: 3508900,
      name: 'Caiabu',
    },
    {
      id: 618,
      ibgeId: 3520608,
      name: 'Indiana',
    },
    {
      id: 619,
      ibgeId: 3542404,
      name: 'Regente Feijó',
    },
    {
      id: 620,
      ibgeId: 3502408,
      name: 'Anhumas',
    },
    {
      id: 621,
      ibgeId: 3552908,
      name: 'Taciba',
    },
    {
      id: 622,
      ibgeId: 3542206,
      name: 'Rancharia',
    },
    {
      id: 623,
      ibgeId: 3519907,
      name: 'Iepê',
    },
    {
      id: 624,
      ibgeId: 3532157,
      name: 'Nantes',
    },
    {
      id: 625,
      ibgeId: 3525607,
      name: 'João Ramalho',
    },
    {
      id: 626,
      ibgeId: 3535507,
      name: 'Paraguaçu Paulista',
    },
    {
      id: 627,
      ibgeId: 3507209,
      name: 'Borá',
    },
    {
      id: 628,
      ibgeId: 3527900,
      name: 'Lutécia',
    },
    {
      id: 629,
      ibgeId: 3534500,
      name: 'Oscar Bressane',
    },
    {
      id: 630,
      ibgeId: 3541703,
      name: 'Quatá',
    },
    {
      id: 631,
      ibgeId: 3504008,
      name: 'Assis',
    },
    {
      id: 632,
      ibgeId: 3553955,
      name: 'Tarumã',
    },
    {
      id: 633,
      ibgeId: 3514700,
      name: 'Echaporã',
    },
    {
      id: 634,
      ibgeId: 3528809,
      name: 'Maracaí',
    },
    {
      id: 635,
      ibgeId: 3513306,
      name: 'Cruzália',
    },
    {
      id: 636,
      ibgeId: 3537156,
      name: 'Pedrinhas Paulista',
    },
    {
      id: 637,
      ibgeId: 3516101,
      name: 'Florínea',
    },
    {
      id: 638,
      ibgeId: 3510005,
      name: 'Cândido Mota',
    },
    {
      id: 639,
      ibgeId: 3534708,
      name: 'Ourinhos',
    },
    {
      id: 640,
      ibgeId: 3545407,
      name: 'Salto Grande',
    },
    {
      id: 641,
      ibgeId: 3543204,
      name: 'Ribeirão do Sul',
    },
    {
      id: 642,
      ibgeId: 3519501,
      name: 'Ibirarema',
    },
    {
      id: 643,
      ibgeId: 3509809,
      name: 'Campos Novos Paulista',
    },
    {
      id: 644,
      ibgeId: 3535309,
      name: 'Palmital',
    },
    {
      id: 645,
      ibgeId: 3539707,
      name: 'Platina',
    },
  ],
  TO: [
    {
      id: 4019,
      ibgeId: 1721000,
      name: 'Palmas',
    },
    {
      id: 4020,
      ibgeId: 1707009,
      name: 'Dianópolis',
    },
    {
      id: 4021,
      ibgeId: 1718659,
      name: 'Rio da Conceição',
    },
    {
      id: 4022,
      ibgeId: 1705607,
      name: 'Conceição do Tocantins',
    },
    {
      id: 4023,
      ibgeId: 1720937,
      name: 'Taipas do Tocantins',
    },
    {
      id: 4024,
      ibgeId: 1700400,
      name: 'Almas',
    },
    {
      id: 4025,
      ibgeId: 1717800,
      name: 'Ponte Alta do Bom Jesus',
    },
    {
      id: 4026,
      ibgeId: 1715259,
      name: 'Novo Jardim',
    },
    {
      id: 4027,
      ibgeId: 1720903,
      name: 'Taguatinga',
    },
    {
      id: 4028,
      ibgeId: 1702703,
      name: 'Aurora do Tocantins',
    },
    {
      id: 4029,
      ibgeId: 1712157,
      name: 'Lavandeira',
    },
    {
      id: 4030,
      ibgeId: 1702406,
      name: 'Arraias',
    },
    {
      id: 4031,
      ibgeId: 1705557,
      name: 'Combinado',
    },
    {
      id: 4032,
      ibgeId: 1715150,
      name: 'Novo Alegre',
    },
    {
      id: 4033,
      ibgeId: 1716208,
      name: 'Paranã',
    },
    {
      id: 4034,
      ibgeId: 1715754,
      name: 'Palmeirópolis',
    },
    {
      id: 4035,
      ibgeId: 1720259,
      name: 'São Salvador do Tocantins',
    },
    {
      id: 4036,
      ibgeId: 1714203,
      name: 'Natividade',
    },
    {
      id: 4037,
      ibgeId: 1718907,
      name: 'Santa Rosa do Tocantins',
    },
    {
      id: 4038,
      ibgeId: 1705102,
      name: 'Chapada da Natividade',
    },
    {
      id: 4039,
      ibgeId: 1717008,
      name: 'Pindorama do Tocantins',
    },
    {
      id: 4040,
      ibgeId: 1720499,
      name: 'São Valério da Natividade',
    },
    {
      id: 4041,
      ibgeId: 1718006,
      name: 'Porto Alegre do Tocantins',
    },
    {
      id: 4042,
      ibgeId: 1709500,
      name: 'Gurupi',
    },
    {
      id: 4043,
      ibgeId: 1711506,
      name: 'Jaú do Tocantins',
    },
    {
      id: 4044,
      ibgeId: 1703867,
      name: 'Cariri do Tocantins',
    },
    {
      id: 4045,
      ibgeId: 1700350,
      name: 'Aliança do Tocantins',
    },
    {
      id: 4046,
      ibgeId: 1720853,
      name: 'Sucupira',
    },
    {
      id: 4047,
      ibgeId: 1716604,
      name: 'Peixe',
    },
    {
      id: 4048,
      ibgeId: 1706258,
      name: 'Crixás do Tocantins',
    },
    {
      id: 4049,
      ibgeId: 1707652,
      name: 'Figueirópolis',
    },
    {
      id: 4050,
      ibgeId: 1708205,
      name: 'Formoso do Araguaia',
    },
    {
      id: 4051,
      ibgeId: 1702000,
      name: 'Araguaçu',
    },
    {
      id: 4052,
      ibgeId: 1718840,
      name: 'Sandolândia',
    },
    {
      id: 4053,
      ibgeId: 1700707,
      name: 'Alvorada',
    },
    {
      id: 4054,
      ibgeId: 1720978,
      name: 'Talismã',
    },
    {
      id: 4055,
      ibgeId: 1707306,
      name: 'Duerê',
    },
    {
      id: 4056,
      ibgeId: 1706100,
      name: 'Cristalândia',
    },
    {
      id: 4057,
      ibgeId: 1711902,
      name: 'Lagoa da Confusão',
    },
    {
      id: 4058,
      ibgeId: 1715002,
      name: 'Nova Rosalândia',
    },
    {
      id: 4059,
      ibgeId: 1718204,
      name: 'Porto Nacional',
    },
    {
      id: 4060,
      ibgeId: 1709807,
      name: 'Ipueiras',
    },
    {
      id: 4061,
      ibgeId: 1707553,
      name: 'Fátima',
    },
    {
      id: 4062,
      ibgeId: 1715507,
      name: 'Oliveira de Fátima',
    },
    {
      id: 4063,
      ibgeId: 1703701,
      name: 'Brejinho de Nazaré',
    },
    {
      id: 4064,
      ibgeId: 1718899,
      name: 'Santa Rita do Tocantins',
    },
    {
      id: 4065,
      ibgeId: 1717503,
      name: 'Pium',
    },
    {
      id: 4066,
      ibgeId: 1704600,
      name: 'Chapada de Areia',
    },
    {
      id: 4067,
      ibgeId: 1720655,
      name: 'Silvanópolis',
    },
    {
      id: 4068,
      ibgeId: 1713601,
      name: 'Monte do Carmo',
    },
    {
      id: 4069,
      ibgeId: 1717909,
      name: 'Ponte Alta do Tocantins',
    },
    {
      id: 4070,
      ibgeId: 1712702,
      name: 'Mateiros',
    },
    {
      id: 4071,
      ibgeId: 1716109,
      name: 'Paraíso do Tocantins',
    },
    {
      id: 4072,
      ibgeId: 1718451,
      name: 'Pugmil',
    },
    {
      id: 4073,
      ibgeId: 1720150,
      name: 'São Félix do Tocantins',
    },
    {
      id: 4074,
      ibgeId: 1715101,
      name: 'Novo Acordo',
    },
    {
      id: 4075,
      ibgeId: 1711951,
      name: 'Lagoa do Tocantins',
    },
    {
      id: 4076,
      ibgeId: 1719004,
      name: 'Santa Tereza do Tocantins',
    },
    {
      id: 4077,
      ibgeId: 1701101,
      name: 'Aparecida do Rio Negro',
    },
    {
      id: 4078,
      ibgeId: 1712405,
      name: 'Lizarda',
    },
    {
      id: 4079,
      ibgeId: 1718758,
      name: 'Rio Sono',
    },
    {
      id: 4080,
      ibgeId: 1721109,
      name: 'Tocantínia',
    },
    {
      id: 4081,
      ibgeId: 1712009,
      name: 'Lajeado',
    },
    {
      id: 4082,
      ibgeId: 1713205,
      name: 'Miracema do Tocantins',
    },
    {
      id: 4083,
      ibgeId: 1718709,
      name: 'Rio dos Bois',
    },
    {
      id: 4084,
      ibgeId: 1713304,
      name: 'Miranorte',
    },
    {
      id: 4085,
      ibgeId: 1703107,
      name: 'Barrolândia',
    },
    {
      id: 4086,
      ibgeId: 1707108,
      name: 'Divinópolis do Tocantins',
    },
    {
      id: 4087,
      ibgeId: 1713700,
      name: 'Monte Santo do Tocantins',
    },
    {
      id: 4088,
      ibgeId: 1712504,
      name: 'Marianópolis do Tocantins',
    },
    {
      id: 4089,
      ibgeId: 1703909,
      name: 'Caseara',
    },
    {
      id: 4090,
      ibgeId: 1707207,
      name: 'Dois Irmãos do Tocantins',
    },
    {
      id: 4091,
      ibgeId: 1701903,
      name: 'Araguacema',
    },
    {
      id: 4092,
      ibgeId: 1700251,
      name: 'Abreulândia',
    },
    {
      id: 4093,
      ibgeId: 1708304,
      name: 'Goianorte',
    },
    {
      id: 4094,
      ibgeId: 1709302,
      name: 'Guaraí',
    },
    {
      id: 4095,
      ibgeId: 1721257,
      name: 'Tupirama',
    },
    {
      id: 4096,
      ibgeId: 1708254,
      name: 'Tabocão',
    },
    {
      id: 4097,
      ibgeId: 1716505,
      name: 'Pedro Afonso',
    },
    {
      id: 4098,
      ibgeId: 1703305,
      name: 'Bom Jesus do Tocantins',
    },
    {
      id: 4099,
      ibgeId: 1718881,
      name: 'Santa Maria do Tocantins',
    },
    {
      id: 4100,
      ibgeId: 1710904,
      name: 'Itapiratins',
    },
    {
      id: 4101,
      ibgeId: 1710508,
      name: 'Itacajá',
    },
    {
      id: 4102,
      ibgeId: 1704105,
      name: 'Centenário',
    },
    {
      id: 4103,
      ibgeId: 1716703,
      name: 'Colméia',
    },
    {
      id: 4104,
      ibgeId: 1716653,
      name: 'Pequizeiro',
    },
    {
      id: 4105,
      ibgeId: 1718501,
      name: 'Recursolândia',
    },
    {
      id: 4106,
      ibgeId: 1703602,
      name: 'Brasilândia do Tocantins',
    },
    {
      id: 4107,
      ibgeId: 1711100,
      name: 'Itaporã do Tocantins',
    },
    {
      id: 4108,
      ibgeId: 1721307,
      name: 'Tupiratins',
    },
    {
      id: 4109,
      ibgeId: 1718402,
      name: 'Presidente Kennedy',
    },
    {
      id: 4110,
      ibgeId: 1706001,
      name: 'Couto de Magalhães',
    },
    {
      id: 4111,
      ibgeId: 1711803,
      name: 'Juarina',
    },
    {
      id: 4112,
      ibgeId: 1703206,
      name: 'Bernardo Sayão',
    },
    {
      id: 4113,
      ibgeId: 1705508,
      name: 'Colinas do Tocantins',
    },
    {
      id: 4114,
      ibgeId: 1703073,
      name: 'Barra do Ouro',
    },
    {
      id: 4115,
      ibgeId: 1709005,
      name: 'Goiatins',
    },
    {
      id: 4116,
      ibgeId: 1703842,
      name: 'Campos Lindos',
    },
    {
      id: 4117,
      ibgeId: 1702307,
      name: 'Arapoema',
    },
    {
      id: 4118,
      ibgeId: 1703057,
      name: 'Bandeirantes do Tocantins',
    },
    {
      id: 4119,
      ibgeId: 1716307,
      name: "Pau D'Arco",
    },
    {
      id: 4120,
      ibgeId: 1714880,
      name: 'Nova Olinda',
    },
    {
      id: 4121,
      ibgeId: 1707702,
      name: 'Filadélfia',
    },
    {
      id: 4122,
      ibgeId: 1715705,
      name: 'Palmeirante',
    },
    {
      id: 4123,
      ibgeId: 1702109,
      name: 'Araguaína',
    },
    {
      id: 4124,
      ibgeId: 1703883,
      name: 'Carmolândia',
    },
    {
      id: 4125,
      ibgeId: 1701309,
      name: 'Aragominas',
    },
    {
      id: 4126,
      ibgeId: 1718865,
      name: 'Santa Fé do Araguaia',
    },
    {
      id: 4127,
      ibgeId: 1713957,
      name: 'Muricilândia',
    },
    {
      id: 4128,
      ibgeId: 1702158,
      name: 'Araguanã',
    },
    {
      id: 4129,
      ibgeId: 1722081,
      name: 'Wanderlândia',
    },
    {
      id: 4130,
      ibgeId: 1703008,
      name: 'Babaçulândia',
    },
    {
      id: 4131,
      ibgeId: 1722107,
      name: 'Xambioá',
    },
    {
      id: 4132,
      ibgeId: 1720002,
      name: 'Santa Terezinha do Tocantins',
    },
    {
      id: 4133,
      ibgeId: 1717206,
      name: 'Piraquê',
    },
    {
      id: 4134,
      ibgeId: 1701002,
      name: 'Ananás',
    },
    {
      id: 4135,
      ibgeId: 1718550,
      name: 'Riachinho',
    },
    {
      id: 4136,
      ibgeId: 1714302,
      name: 'Nazaré',
    },
    {
      id: 4137,
      ibgeId: 1721208,
      name: 'Tocantinópolis',
    },
    {
      id: 4138,
      ibgeId: 1712454,
      name: 'Luzinópolis',
    },
    {
      id: 4139,
      ibgeId: 1701051,
      name: 'Angico',
    },
    {
      id: 4140,
      ibgeId: 1700301,
      name: 'Aguiarnópolis',
    },
    {
      id: 4141,
      ibgeId: 1706506,
      name: 'Darcinópolis',
    },
    {
      id: 4142,
      ibgeId: 1713809,
      name: 'Palmeiras do Tocantins',
    },
    {
      id: 4143,
      ibgeId: 1703826,
      name: 'Cachoeirinha',
    },
    {
      id: 4144,
      ibgeId: 1712801,
      name: 'Maurilândia do Tocantins',
    },
    {
      id: 4145,
      ibgeId: 1710706,
      name: 'Itaguatins',
    },
    {
      id: 4146,
      ibgeId: 1720200,
      name: 'São Miguel do Tocantins',
    },
    {
      id: 4147,
      ibgeId: 1702901,
      name: 'Axixá do Tocantins',
    },
    {
      id: 4148,
      ibgeId: 1720804,
      name: 'Sítio Novo do Tocantins',
    },
    {
      id: 4149,
      ibgeId: 1702208,
      name: 'Araguatins',
    },
    {
      id: 4150,
      ibgeId: 1720101,
      name: 'São Bento do Tocantins',
    },
    {
      id: 4151,
      ibgeId: 1702554,
      name: 'Augustinópolis',
    },
    {
      id: 4152,
      ibgeId: 1718303,
      name: 'Praia Norte',
    },
    {
      id: 4153,
      ibgeId: 1718808,
      name: 'Sampaio',
    },
    {
      id: 4154,
      ibgeId: 1703891,
      name: 'Carrasco Bonito',
    },
    {
      id: 4155,
      ibgeId: 1720309,
      name: 'São Sebastião do Tocantins',
    },
    {
      id: 4156,
      ibgeId: 1707405,
      name: 'Esperantina',
    },
    {
      id: 4157,
      ibgeId: 1703800,
      name: 'Buriti do Tocantins',
    },
  ],
};
