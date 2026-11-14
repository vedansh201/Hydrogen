const raw = `
1|H|Hydrogen|1|1|nonmetal|1.008|The lightest element and the most abundant element in the universe.|Fuel cells, ammonia production and rocket fuel.
2|He|Helium|1|18|noble|4.0026|A very unreactive gas with an exceptionally low boiling point.|MRI cooling, balloons and leak detection.
3|Li|Lithium|2|1|alkali|6.94|A soft, light metal that reacts with water.|Rechargeable batteries and ceramics.
4|Be|Beryllium|2|2|alkaline|9.0122|A lightweight, stiff metal.|Aerospace components and X-ray windows.
5|B|Boron|2|13|metalloid|10.81|A metalloid found in borate minerals.|Borosilicate glass and detergents.
6|C|Carbon|2|14|nonmetal|12.011|Forms the backbone of organic chemistry.|Graphite, diamond and carbon fiber.
7|N|Nitrogen|2|15|nonmetal|14.007|Makes up most of Earth's atmosphere.|Fertilizer production and inert atmospheres.
8|O|Oxygen|2|16|nonmetal|15.999|Essential to aerobic respiration and many combustion reactions.|Medical oxygen and steelmaking.
9|F|Fluorine|2|17|halogen|18.998|A highly reactive halogen.|Fluoropolymers and fluoride compounds.
10|Ne|Neon|2|18|noble|20.180|A noble gas that glows reddish-orange in discharge tubes.|Neon signs and indicators.
11|Na|Sodium|3|1|alkali|22.990|A reactive alkali metal.|Sodium-vapor lamps and chemical synthesis.
12|Mg|Magnesium|3|2|alkaline|24.305|A light metal that burns with a bright white flame.|Lightweight alloys and flares.
13|Al|Aluminium|3|13|post|26.982|A lightweight, corrosion-resistant metal.|Cans, aircraft and construction.
14|Si|Silicon|3|14|metalloid|28.085|A semiconductor and a major component of sand.|Computer chips and solar panels.
15|P|Phosphorus|3|15|nonmetal|30.974|A nonmetal important in DNA and energy transfer.|Fertilizers and chemical production.
16|S|Sulfur|3|16|nonmetal|32.06|A yellow nonmetal found in many minerals.|Sulfuric acid and rubber vulcanization.
17|Cl|Chlorine|3|17|halogen|35.45|A reactive halogen used in disinfection.|Water treatment and PVC manufacture.
18|Ar|Argon|3|18|noble|39.948|An unreactive gas found in the atmosphere.|Welding and light bulbs.
19|K|Potassium|4|1|alkali|39.098|A reactive alkali metal essential to living cells.|Fertilizers and chemical manufacture.
20|Ca|Calcium|4|2|alkaline|40.078|An alkaline earth metal important for bones.|Cement manufacture and metal processing.
21|Sc|Scandium|4|3|transition|44.956
22|Ti|Titanium|4|4|transition|47.867
23|V|Vanadium|4|5|transition|50.942
24|Cr|Chromium|4|6|transition|51.996
25|Mn|Manganese|4|7|transition|54.938
26|Fe|Iron|4|8|transition|55.845
27|Co|Cobalt|4|9|transition|58.933
28|Ni|Nickel|4|10|transition|58.693
29|Cu|Copper|4|11|transition|63.546
30|Zn|Zinc|4|12|transition|65.38
31|Ga|Gallium|4|13|post|69.723
32|Ge|Germanium|4|14|metalloid|72.630
33|As|Arsenic|4|15|metalloid|74.922
34|Se|Selenium|4|16|nonmetal|78.971
35|Br|Bromine|4|17|halogen|79.904
36|Kr|Krypton|4|18|noble|83.798
37|Rb|Rubidium|5|1|alkali|85.468
38|Sr|Strontium|5|2|alkaline|87.62
39|Y|Yttrium|5|3|transition|88.906
40|Zr|Zirconium|5|4|transition|91.224
41|Nb|Niobium|5|5|transition|92.906
42|Mo|Molybdenum|5|6|transition|95.95
43|Tc|Technetium|5|7|transition|[98]
44|Ru|Ruthenium|5|8|transition|101.07
45|Rh|Rhodium|5|9|transition|102.91
46|Pd|Palladium|5|10|transition|106.42
47|Ag|Silver|5|11|transition|107.87
48|Cd|Cadmium|5|12|transition|112.41
49|In|Indium|5|13|post|114.82
50|Sn|Tin|5|14|post|118.71
51|Sb|Antimony|5|15|metalloid|121.76
52|Te|Tellurium|5|16|metalloid|127.60
53|I|Iodine|5|17|halogen|126.90
54|Xe|Xenon|5|18|noble|131.29
55|Cs|Caesium|6|1|alkali|132.91
56|Ba|Barium|6|2|alkaline|137.33
57|La|Lanthanum|9|4|lanthanide|138.91
58|Ce|Cerium|9|5|lanthanide|140.12
59|Pr|Praseodymium|9|6|lanthanide|140.91
60|Nd|Neodymium|9|7|lanthanide|144.24
61|Pm|Promethium|9|8|lanthanide|[145]
62|Sm|Samarium|9|9|lanthanide|150.36
63|Eu|Europium|9|10|lanthanide|151.96
64|Gd|Gadolinium|9|11|lanthanide|157.25
65|Tb|Terbium|9|12|lanthanide|158.93
66|Dy|Dysprosium|9|13|lanthanide|162.50
67|Ho|Holmium|9|14|lanthanide|164.93
68|Er|Erbium|9|15|lanthanide|167.26
69|Tm|Thulium|9|16|lanthanide|168.93
70|Yb|Ytterbium|9|17|lanthanide|173.05
71|Lu|Lutetium|9|18|lanthanide|174.97
72|Hf|Hafnium|6|4|transition|178.49
73|Ta|Tantalum|6|5|transition|180.95
74|W|Tungsten|6|6|transition|183.84
75|Re|Rhenium|6|7|transition|186.21
76|Os|Osmium|6|8|transition|190.23
77|Ir|Iridium|6|9|transition|192.22
78|Pt|Platinum|6|10|transition|195.08
79|Au|Gold|6|11|transition|196.97
80|Hg|Mercury|6|12|transition|200.59
81|Tl|Thallium|6|13|post|204.38
82|Pb|Lead|6|14|post|207.2
83|Bi|Bismuth|6|15|post|208.98
84|Po|Polonium|6|16|post|[209]
85|At|Astatine|6|17|halogen|[210]
86|Rn|Radon|6|18|noble|[222]
87|Fr|Francium|7|1|alkali|[223]
88|Ra|Radium|7|2|alkaline|[226]
89|Ac|Actinium|10|4|actinide|[227]
90|Th|Thorium|10|5|actinide|232.04
91|Pa|Protactinium|10|6|actinide|231.04
92|U|Uranium|10|7|actinide|238.03
93|Np|Neptunium|10|8|actinide|[237]
94|Pu|Plutonium|10|9|actinide|[244]
95|Am|Americium|10|10|actinide|[243]
96|Cm|Curium|10|11|actinide|[247]
97|Bk|Berkelium|10|12|actinide|[247]
98|Cf|Californium|10|13|actinide|[251]
99|Es|Einsteinium|10|14|actinide|[252]
100|Fm|Fermium|10|15|actinide|[257]
101|Md|Mendelevium|10|16|actinide|[258]
102|No|Nobelium|10|17|actinide|[259]
103|Lr|Lawrencium|10|18|actinide|[266]
104|Rf|Rutherfordium|7|4|transition|[267]
105|Db|Dubnium|7|5|transition|[268]
106|Sg|Seaborgium|7|6|transition|[269]
107|Bh|Bohrium|7|7|transition|[270]
108|Hs|Hassium|7|8|transition|[277]
109|Mt|Meitnerium|7|9|unknown|[278]
110|Ds|Darmstadtium|7|10|unknown|[281]
111|Rg|Roentgenium|7|11|unknown|[282]
112|Cn|Copernicium|7|12|unknown|[285]
113|Nh|Nihonium|7|13|unknown|[286]
114|Fl|Flerovium|7|14|unknown|[289]
115|Mc|Moscovium|7|15|unknown|[290]
116|Lv|Livermorium|7|16|unknown|[293]
117|Ts|Tennessine|7|17|halogen|[294]
118|Og|Oganesson|7|18|unknown|[294]
`;

export const elements = raw
  .trim()
  .split("\n")
  .map((line) => {
    const [number, symbol, name, row, col, category, mass, description, uses,] = line.split("|");

    return {
      number: Number(number),
      symbol,
      name,
      row: Number(row),
      col: Number(col),
      category,
      mass,
      description: description || null,
      uses: uses || null,
    };
  });

  
export const categories = {
  alkali: "Alkali metals",
  alkaline: "Alkaline earth metals",
  transition: "Transition metals",
  post: "Post-transition metals",
  metalloid: "Metalloids",
  nonmetal: "Reactive nonmetals",
  halogen: "Halogens",
  noble: "Noble gases",
  lanthanide: "Lanthanides",
  actinide: "Actinides",
  unknown: "Unknown properties",
};