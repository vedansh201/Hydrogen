const raw = `
1|H|Hydrogen|1|1|nonmetal|1.008|The lightest element and most abundant element in the universe.|Fuel cells, ammonia producion and rocket fuel.
2|He|Helium|1|18|noble|4.0026|A very unreactive gas with an exceptionally low boiling point.|MRI cooling, callons and leak detection.
3|Li|Lithium|2|1|alkali|6.94|A soft, light metal that reacts with water.|Rechargeable batteries and ceramics.
4|Be|Beryllium|2|2|alkaline|9.0122|A lightweight stiff metal.|Aerospace compnents and X=ray windows.
5|B|Boron|2|13|metalloid|10.81|A metalloid found in borate minerals.|borosillicate glass and detergents.
6|C|Carbon|2|14|nometal|12.011|Forms the backbone of organic chemistry.|Grahite, diamond and carbon fiber.
7|N|Nitrogen|2|15|nonmetal|14.007|Makes up most of Earth's atmosphere.|Fertilizer production and inert atmospheres.
8|O|Oxygen|2|16|nonmetal|15.999|Essential to aerobic respiration and many combustion reactions.|Medical oxygen and steelmaking.
9|F|Fluorine|2|17|halogen|18.998|A highly reactive halogen|Fluropolymers and fluoride compounds.
10|Ne|Neon|2|18|noble|20.180|A noble gas that glows reddish-orange in discharge tubes.|Neon signs and indicators.
11|Na|Sodium|3|1|alkali|22.999|A reactive alskali metal.|Sodium-vapor lamps and chemical synthesis.
12|Mg|Magnesium|3|2|alkaline|24.305|A light metal that burns with a bright white flame.|Lightweight alloys and flares.
13|Al|Aluminium|3|13|post|26.982|A lightweight, corrosion-resistant metal.|Cans, aircraft and construction.
14|Si|Sillicon|3|14|metalloid|28.085|A semiconductor and a major component of sand.|Computer chips and solar panels.
15|P|Phosphorus|3|15|nonmetal|30.974|A nonmetal important in DNA and engergy transfer.|Fertilizers and chemical production.
16|S|Sulfur|3|16|nonmetal|32.06|A yellow nonmetal found in many minerals.|Sulfuric acid and rubber vulcanization.
17|Cl|Chlorine|3|17|halogen|35.45|A reactive hologen used in disinfection.|Water treatment and PVC manufacture.
18|Ar|Argon|3|18|noble|39.948|An unreactive gas found in the atmosphere.|Welding and light bulbs.
19|K|Potassium|4|1|alkali|39.098|A reactive alkali metal essential to living cells.|Fertilizers and chemical manufacture.
20|Ca|Calcium|4|2|alkaline|40.078|An alkaline earth metal important for bones.|Cement manufacture and metal processing.
21|Sc|Scandium|4|3|transhition|44.956
22|Ti|Titanium|4|4|transition|47.867
23|V|Vanadium|4|5|transition|50.942
24|Cr|Chromiun|4|6|transition|51.996
25|Mn|Manganese|4|7|transition|54.938
26|FE|Iron|4|8|transition|55.845
27|Co|Cobalt|4|9|transition|58.933
28|Ni|Nickel|4|10|transition|58.693
29|Cu|Copper|4|11|transition|63.546
30|Zn|Zinc|4|12|transition|65.38
31|Ga|Gallium|4|13|post|69.723
32|Ge|Germanium|4|14|metalloid|72.63
33|As|Arsenic|4|15|metlloid|74.922
34|Se|Selenium|4|16|nonmetal|78.971
35|Br|Bromine|4|17|halogen|79.904
36|Kr|krypton|4|18|noble|83.798
37|Rb|Rubidium|5|1|alkali|85.468
38|Sr|Strontium|5|2|alkaline|87.62
39|Y|Yttrium|5|3|transition|88.906
40|Zr|Zirconium|5|4|transition|91.224
41|Nb|Niobium|5|5|transition|92.906
42|Mo|Molybdenum|5|6|transition|95.95
43|Tc|Technetium|5|7|transition|98
44|Ru|Ruthenium|5|8|transition|101.07
45|Rh|Rhodium|5|9|transition|102.91
46|Pd|Palladium|5|10|transition|106.42
47|Ag|Silver|5|11|transition|107.87
48|Cd|Cadmium|5|12|transition|112.41
49|In|Indium|5|13|post|114.82
50|Sn|Tin|5|14|post|118.71
51|Sb|Antimony|5|15|metalliod|121.76
52|Te|Tellurium|5|16|metalloid|127.6
53|I|Iodine|5|17|halogen|126.9
54Xe|Xenon|5|18|noble|131.29
55|Cs|Cesium|6|1|alkali|132.91
56|Ba|Barium|6|2|alkaline|137.33
57|La|Lanthanum|6|3|Lanthanoid|138.91
58|Ce|Cerium|6|4|Lanthanoid|140.12
59|Pr|Praseodymium|6|5|Lanthonoid|140.91
60|Nd|Neodymium|6|6|Lanthanoid|144.24
61|Pm|Promethium|6|7|Lanthanoid|145
62|Sm|Samarium|6|8|Lanthanoid|150.36
63|Eu|Europium|6|9|Lanthanoid|151.96
64|Gd|Gadolinium|6|10|Lanthanoid|157.25
65|Tb|Terbium|6|11|Lanthanoid|158.93
66|Dy|Dysprosium|6|12|Lanthanoid|162.5
67|Ho|Holmiun|6|13|Lanthanoid|164.93
68|Er|Erbium|6|14|Lanthanoid|167.26
69|Tm|Thulium|6|15|Lanthanoid|168.93
70|Yb|Ytterbium|6|16|Lanthanoid|173.05
71|Lu|Lutetium|6|17|Lanthanoid|174.97
72|Hf|Hafnium|6|4|transition|178.49
73|Ta|Tantalum|6|5|transition|180.95
74|w|Tungsten|6|6|transition|183.84
75|Re|Rhenium|6|7|transition|186.21
76|Os|Osmium|6|8|transition|190.23
77|Ir|Iridium|6|9|transition|192.22
78|Pt|Platinum|6|10|transition|195.08
79|Au|Gold|6|11|transition|196.97
80|Hg|Mercury|6|12|transition|200.59
81|Tl|Thallium|6|13|post|204.38
82|Pb|Lead|6|14|post|207.2
83|Bi|Bismuth|6|15|post|208.98
84|Po|Polonium|6|16|metalloid|209
85|At|Astatine|6|17|halogen|210
86|Rn|Radon|6|18|noble|222
87|Fr|Francium|7|1|alkali|223
88|Ra|Radium|7|2|alkaline|226
89|Ac|Actinium|7|3|actinoid|227
90|Th|Thorium|7|4|actinoid|232
91|Pa|Protactinium|7|5|actinoid|231.04
92|U|Uranium|7|6|actinoid|238.03
93|Np|Neptunium|7|7|actinoid|237
94|Pu|Plutonium|7|8|actinoid|244
95|Am|Americium|7|9|actinoid|243
96|Cm|Curium|7|10|actinoid|247
97|Bk|Berkelium|7|11|actinoid|247
98|Cf|Californium|7|12|actinoid|251
99|Es|Einsteinium|7|13|actinoid|252
100|Fm|Fermiun|7|14|actinoid|257
101|Md|Mendelevium|7|15|actinoid|258
102|No|Nobelium|7|16|actinoid|259
103|Lr|Lawrencium|7|17|actinoid|262
104|RF|Rutherfordium|7|4|transition|267
105|Db|Dubnium|7|5|transition|270
106|Sg|Seaborgium|7|6|transition|271
107|Bh|Bohrium|7|7|transition|270
108|Hs|Hassium|7|8|transition|277
109|Mt|Meitnerium|7|9|tranisition|276
110|Ds|Darmstadtium|7|10|transition|281
11|Rg|Roentgenium|7|11|transition|282
112|Cn|Copernicium|7|12|transition|285
113|Nh|Nihonium|7|13|post|286
114|Fl|Flerovium|7|14|post|289
115|Mc|Moscovium|7|15|post|288
116|Lv|Livermorium|7|16|post|293
117|Ts|Tennessine|7|17|halogen|294
118|Og|Oganesson|7|18|noble|294
`;
