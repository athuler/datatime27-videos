
function addColorText(layer, index, color) {
    var animator = layer.property('Text').property('Animators').addProperty('ADBE Text Animator');
    var colorProp = animator.property('Properties').addProperty('ADBE Text Fill Color');
    colorProp.setValue(color);
    var selector = animator.property('Selectors').addProperty('ADBE Text Selector');
    var advanced = selector.property('Advanced');
    advanced.property('Based On').setValue(2); // Characters
    advanced.property('Units').setValue(2); // Index
    var start = selector.property('ADBE Text Index Start').setValue(index)
    var end = selector.property('ADBE Text Index End').setValue(index+1)
}


var font_size = 30;
var tracking = 700;

var positionX = 960;
var positionY = 540;

var width = 1800;
var height = 900;

var letterWidth = 22.2
var letterHeight = 36.0
var wrapLength = 22

var originX = positionX - width/2
var originY = positionY - height/2

var text = "DDRESSEDTOTHEFANCYWHYINREADINGTHEOLDFAIRYTALESOFCENTRALEUROPEDOESTHETALLPALEMANOFTHEHARTZFORESTSWHOSECHANGELESSPALLORUNRESTINGLYGLIDESTHROUGHTHEGREENOFTHEGROVESWHYISTHISPHANTOMMORETERRIBLETHANALLTHEWHOOPINGIMPSOFTHEBLOCKSBURGNORISITALTOGETHERTHEREMEMBRANCEOFHERCATHEDRALTOPPLINGEARTHQUAKESNORTHESTAMPEDOESOFHERFRANTICSEASNORTHETEARLESSNESSOFARIDSKIESTHATNEVERRAINNORTHESIGHTOFHERWIDEFIELDOFLEANINGSPIRESWRENCHEDCOPESTONESANDCROSSESALLADROOPLIKECANTEDYARDSOFANCHOREDFLEETSANDHERSUBURBANAVENUESOFHOUSEWALLSLYINGOVERUPONEACHOTHERASATOSSEDPACKOFCARDSITISNOTTHESETHINGSALONEWHICHMAKETEARLESSLIMATHESTRANGESTSADDESTCITYTHOUCANSTSEEFORLIMAHASTAKENTHEWHITEVEILANDTHEREISAHIGHERHORRORINTHISWHITENESSOFHERWOEOLDASPIZARROTHISWHITENESSKEEPSHERRUINSFOREVERNEWADMITSNOTTHECHEERFULGREENNESSOFCOMPLETEDECAYSPREADSOVERHERBROKENRAMPARTSTHERIGIDPALLOROFANAPOPLEXYTHATFIXESITSOWNDISTORTIONSIKNOWTHATTOTHECOMMONAPPREHENSIONTHISPHENOMENONOFWHITENESSISNOTCONFESSEDTOBETHEPRIMEAGENTINEXAGGERATINGTHETERROROFOBJECTSOTHERWISETERRIBLENORTOTHEUNIMAGINATIVEMINDISTHEREAUGHTOFTERRORINTHOSEAPPEARANCESWHOSEAWFULNESSTOANOTHERMINDALMOSTSOLELYCONSISTSINTHISONEPHENOMENONESPECIALLYWHENEXHIBITEDUNDERANYFORMATALLAPPROACHINGTOMUTENESSORUNIVERSALITYWHATIMEANBYTHESETWOSTATEMENTSMAYPERHAPSBERESPECTIVELYELUCIDATEDBYTHEFOLLOWINGEXAMPLESFIRSTTHEMARINERWHENDRAWINGNIGHTHECOASTSOFFOREIGNLANDSIFBYNIGHTHEHEARTHEROAROFBREAKERSSTARTSTOVIGILANCEANDFEELSJUSTENOUGHOFTREPIDATIONTOSHARPENALLHISFACULTIESBUTUNDERPRECISELYSIMILARCIRCUMSTANCESLETHIMBECALLEDFROMHISHAMMOCKTOVIEWHISSHIPSAILINGTHROUGHAMIDNIGHTSEAOFMILKYWHITENESSASIFFROMENCIRCLINGHEADLANDSSHOALSOFCOMBEDWHITEBEARSWERESWIMMINGROUNDHIMTHENHEFEELSASILENTSUPERSTITIOUSDREADTHESHROUDEDPHANTOMOFTHEWHITENEDWATERSISHORRIBLETOHIMASAREALGHOSTINVAINTHELEADASSURESHIMHEISSTILLOFFSOUNDINGSHEARTANDHELMTHEYBOTHGODOWNHENEVERRESTSTILLBLUEWATERISUNDERHIMAGAINYETWHEREISTHEMARINERWHOWILLTELLTHEESIRITWASNOTSOMUCHTHEFEAROFSTRIKINGHIDDENROCKSASTHEFEAROFTHATHIDEOUSWHITENESSTHATSOSTIRREDMESECONDTOTHENATIVEINDIANOFPERUTHECONTINUALSIGHTOFTHESNOWHOWDAHEDANDESCONVEYSNAUGHTOFDREADEXCEPTPERHAPSINTHEMEREFANCYINGOFTHEETERNALFROSTEDDESOLATENESSREIGNINGATSUCHVASTALTITUDESANDTHENATURALCONCEITOFWHATAFEARFULNESSITWOULDBETOLOSEONESELFINSUCHINHUMANSOLITUDESMUCHTHESAMEISITWITHTHEBACKWOODSMANOFTHEWESTWHOWITHCOMPARATIVEINDIFFERENCEVIEWSANUNBOUNDEDPRAIRIESHEETEDWITHDRIVENSNOWNOSHADOWOFTREEORTWIGTOBREAKTHEFIXEDTRANCEOFWHITENESSNOTSOTHESAILORBEHOLDINGTHESCENERYOFTHEANTARCTICSEASWHEREATTIMESBYSOMEINFERNALTRICKOFLEGERDEMAININTHEPOWERSOFFROSTANDAIRHESHIVERINGANDHALFSHIPWRECKEDINSTEADOFRAINBOWSSPEAKINGHOPEANDSOLACETOHISMISERYVIEWSWHATSEEMSABOUNDLESSCHURCHYARDGRINNINGUPONHIMWITHITSLEANICEMONUMENTSANDSPLINTEREDCROSSESBUTTHOUSAYESTMETHINKSTHISWHITELEADCHAPTERABOUTWHITENESSISBUTAWHITEFLAGHUNGOUTFROMACRAVENSOULTHOUSURRENDERESTTOAHYPOISHMAELTELLMEWHYTHISSTRONGYOUNGCOLTFOALEDINSOMEPEACEFULVALLEYOFVERMONTFARREMOVEDFROMALLBEASTSOFPREYWHYISITTHATUPONTHESUNNIESTDAYIFYOUBUTSHAKEAFRESHBUFFALOROBEBEHINDHIMSOTHATHECANNOTEVENSEEITBUTONLYSMELLSITSWILDANIMALMUSKINESSWHYWILLHESTARTSNORTANDWITHBURSTINGEYESPAWTHEGROUNDINPHRENSIESOFAFFRIGHTTHEREISNOREMEMBRANCEINHIMOFANYGORINGSOFWILDCREATURESINHISGREENNORTHERNHOMESOTHATTHESTRANGEMUSKINESSHESMELLSCANNOTRECALLTOHIMANYTHINGASSOC";

app.beginUndoGroup('bible-code');
var comp = app.project.activeItem;

label = comp.layers.addBoxText([width,height], text);
label.threeDLayer = true

var textProp = label.property("Source Text");
label.position.setValue([positionX, positionY]);
var textDocument = textProp.value;
textDocument.fontSize = font_size;
textDocument.fillColor = [0, 0, 0];
textDocument.tracking = tracking;
textProp.setValue(textDocument);


// "ANIHC": 308994-311786 skip:698 
addColorText(label, 451, [0.6046603, 0.47025454, 0.6645601])  //A
addColorText(label, 1149, [0.6046603, 0.47025454, 0.6645601])  //N
addColorText(label, 1847, [0.6046603, 0.47025454, 0.6645601])  //I
addColorText(label, 2545, [0.6046603, 0.47025454, 0.6645601])  //H
addColorText(label, 3243, [0.6046603, 0.47025454, 0.6645601])  //C

// "VIRUS": 311536-311656 skip:30 
addColorText(label, 2993, [0.4377142, 0.21231875, 0.68682307])  //V
addColorText(label, 3023, [0.4377142, 0.21231875, 0.68682307])  //I
addColorText(label, 3053, [0.4377142, 0.21231875, 0.68682307])  //R
addColorText(label, 3083, [0.4377142, 0.21231875, 0.68682307])  //U
addColorText(label, 3113, [0.4377142, 0.21231875, 0.68682307])  //S

// "NAHUW": 310753-310897 skip:36 
addColorText(label, 2210, [0.9, 0.078259625, 0.09696952])  //N
addColorText(label, 2246, [0.9, 0.078259625, 0.09696952])  //A
addColorText(label, 2282, [0.9, 0.078259625, 0.09696952])  //H
addColorText(label, 2318, [0.9, 0.078259625, 0.09696952])  //U
addColorText(label, 2354, [0.9, 0.078259625, 0.09696952])  //W

// "SICK": 309075-309414 skip:113 
addColorText(label, 532, [0.30091187, 0.25760633, 0.9])  //S
addColorText(label, 645, [0.30091187, 0.25760633, 0.9])  //I
addColorText(label, 758, [0.30091187, 0.25760633, 0.9])  //C
addColorText(label, 871, [0.30091187, 0.25760633, 0.9])  //K

// "SICK": 310750-311119 skip:123 
addColorText(label, 2207, [0.21426387, 0.9, 0.9])  //S
addColorText(label, 2330, [0.21426387, 0.9, 0.9])  //I
addColorText(label, 2453, [0.21426387, 0.9, 0.9])  //C
addColorText(label, 2576, [0.21426387, 0.9, 0.9])  //K

// "KCIS": 310475-310958 skip:161 
addColorText(label, 1932, [0.9, 0.9, 0.29310185])  //K
addColorText(label, 2093, [0.9, 0.9, 0.29310185])  //C
addColorText(label, 2254, [0.9, 0.9, 0.29310185])  //I
addColorText(label, 2415, [0.9, 0.9, 0.29310185])  //S

// "DIVOC": 308543-310023 skip:370 
addColorText(label, 0, [0.9, 0.109276526, 0.9])  //D
addColorText(label, 370, [0.9, 0.109276526, 0.9])  //I
addColorText(label, 740, [0.9, 0.109276526, 0.9])  //V
addColorText(label, 1110, [0.9, 0.109276526, 0.9])  //O
addColorText(label, 1480, [0.9, 0.109276526, 0.9])  //C

// "CORONA": 308950-311280 skip:466 
addColorText(label, 407, [0.3608714, 0.9, 0.0])  //C
addColorText(label, 873, [0.3608714, 0.9, 0.0])  //O
addColorText(label, 1339, [0.3608714, 0.9, 0.0])  //R
addColorText(label, 1805, [0.3608714, 0.9, 0.0])  //O
addColorText(label, 2271, [0.3608714, 0.9, 0.0])  //N
addColorText(label, 2737, [0.3608714, 0.9, 0.0])  //A

// "KCIS": 308829-310302 skip:491 
addColorText(label, 286, [0.5, 0.14854129, 0.9])  //K
addColorText(label, 777, [0.5, 0.14854129, 0.9])  //C
addColorText(label, 1268, [0.5, 0.14854129, 0.9])  //I
addColorText(label, 1759, [0.5, 0.14854129, 0.9])  //S

// "ANIHC": 308616-310712 skip:524 
addColorText(label, 73, [0.20658267, 0.0, 0.69671917])  //A
addColorText(label, 597, [0.20658267, 0.0, 0.69671917])  //N
addColorText(label, 1121, [0.20658267, 0.0, 0.69671917])  //I
addColorText(label, 1645, [0.20658267, 0.0, 0.69671917])  //H
addColorText(label, 2169, [0.20658267, 0.0, 0.69671917])  //C

app.endUndoGroup();