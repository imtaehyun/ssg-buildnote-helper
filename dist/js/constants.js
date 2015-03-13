(function() {
	'use strict';

	var authorList = [{"id":"110","name":"강구일(092385) Chief파트너"},{"id":"583","name":"강미영(133888) 파트너"},{"id":"808","name":"강수아(140181) 파트너"},{"id":"231","name":"강지은(066612) 파트너"},{"id":"127","name":"강철민(121560) 파트너"},{"id":"594","name":"강효정(133988) 파트너"},{"id":"106","name":"고영민(081128) 파트너"},{"id":"1169","name":"고효진(144880) 파트너"},{"id":"651","name":"구도현(134388) 파트너"},{"id":"58","name":"구현아(121834) Chief파트너"},{"id":"340","name":"구효정(112495) 파트너"},{"id":"1167","name":"권병원(093153) 파트너"},{"id":"175","name":"권영주(041182) Chief파트너"},{"id":"158","name":"권율(066560) 파트너"},{"id":"565","name":"권태진(133410) 파트너"},{"id":"190","name":"길준규(102659) 파트너"},{"id":"337","name":"김강현(112490) 파트너"},{"id":"702","name":"김경진(114614) 파트너"},{"id":"88","name":"김광무(129845) 파트너"},{"id":"460","name":"김광현(062769) 파트너"},{"id":"222","name":"김기동(024389) 주임"},{"id":"410","name":"김도영(990080) 팀장"},{"id":"754","name":"김도훈(135459) 파트너"},{"id":"1184","name":"김동관(502585) 김동관"},{"id":"1208","name":"김동욱(146665) 파트너"},{"id":"856","name":"김명수(140883) 파트너"},{"id":"810","name":"김문정(061045) 파트너"},{"id":"87","name":"김미정(129844) 파트너"},{"id":"212","name":"김민석(130041) 파트너"},{"id":"455","name":"김민선(132473) 파트너"},{"id":"806","name":"김민아(140178) 파트너"},{"id":"678","name":"김민정(134616) 파트너"},{"id":"254","name":"김민정(982074) 파트너"},{"id":"1197","name":"김민철(145731) 파트너"},{"id":"1153","name":"김병준(121958) 파트너"},{"id":"311","name":"김보라(113381) 파트너"},{"id":"406","name":"김보라(990H12) 팀장"},{"id":"80","name":"김상범(113417) 팀장"},{"id":"67","name":"김상연(127464) 파트너"},{"id":"1218","name":"김상욱(133505) 파트너"},{"id":"104","name":"김성은(124837) 파트너"},{"id":"746","name":"김소라(135227) 파트너"},{"id":"817","name":"김수원(140364) 파트너"},{"id":"687","name":"김승만(041155) 파트너"},{"id":"592","name":"김승아(133986) 파트너"},{"id":"35","name":"김신(118567) 파트너"},{"id":"743","name":"김신원(121974) 파트너"},{"id":"237","name":"김영조(051102) 과장"},{"id":"213","name":"김영주(130042) 파트너"},{"id":"184","name":"김요셉(111232) 파트너"},{"id":"176","name":"김우정(073219) 파트너"},{"id":"33","name":"김우진(112159) 파트너"},{"id":"333","name":"김원민(112480) 파트너"},{"id":"1063","name":"김유린(121972) 파트너"},{"id":"233","name":"김윤미(081887) 파트너"},{"id":"744","name":"김은호(102701) 파트너"},{"id":"1199","name":"김재호(145732) 파트너"},{"id":"720","name":"김정선(135039) 파트너"},{"id":"1183","name":"김종호(145472) 파트너"},{"id":"290","name":"김주영(130759) 파트너"},{"id":"129","name":"김준태(073117) 파트너"},{"id":"206","name":"김지숙(114635) Chief파트너"},{"id":"48","name":"김지영(121955) 파트너"},{"id":"159","name":"김지희(041761) 파트너"},{"id":"163","name":"김진설(001284) 부장"},{"id":"403","name":"김진아(990879) 팀장"},{"id":"679","name":"김진영(134615) 파트너"},{"id":"477","name":"김철민(117784) 파트너"},{"id":"39","name":"김하형(117983) 파트너"},{"id":"160","name":"김현미(082873) 파트너"},{"id":"50","name":"김현정(129830) 파트너"},{"id":"34","name":"김현철(122891) 파트너"},{"id":"36","name":"김형미(126345) 파트너"},{"id":"136","name":"김형일(024118) 과장"},{"id":"99","name":"김형진(130539) 파트너"},{"id":"593","name":"김형진(133987) 파트너"},{"id":"1180","name":"김혜영(144894) 파트너"},{"id":"807","name":"김호경(140180) 파트너"},{"id":"386","name":"김환석(131300) 파트너"},{"id":"1175","name":"김효경(144864) 파트너"},{"id":"855","name":"김훈(140880) 파트너"},{"id":"742","name":"김희창(135087) 파트너"},{"id":"155","name":"나재민(110651) 파트너"},{"id":"164","name":"남궁현(082072) 파트너"},{"id":"429","name":"남정달(131703) 파트너"},{"id":"250","name":"노다은(068635) 파트너"},{"id":"1160","name":"노란선(114585) 파트너"},{"id":"264","name":"명노현(931187) 팀장"},{"id":"137","name":"문명균(071373) 파트너"},{"id":"1161","name":"문형길(114448) 파트너"},{"id":"318","name":"문혜인(112479) 파트너"},{"id":"328","name":"민미홍(112496) 파트너"},{"id":"591","name":"민지희(133989) 파트너"},{"id":"138","name":"박경원(083410) 파트너"},{"id":"404","name":"박경태(990H15) 팀장"},{"id":"413","name":"박경희(990848) 팀장"},{"id":"38","name":"박남현(117944) 파트너"},{"id":"113","name":"박다솜(102696) 파트너"},{"id":"75","name":"박문태(128518) 팀장"},{"id":"85","name":"박미연(114468) 파트너"},{"id":"317","name":"박보람(112503) 파트너"},{"id":"708","name":"박보람(134904) 파트너"},{"id":"818","name":"박상수(140363) 파트너"},{"id":"853","name":"박선욱(081837) 파트너"},{"id":"357","name":"박소진(112481) 파트너"},{"id":"147","name":"박영덕(082872) 파트너"},{"id":"185","name":"박영미(104580) 파트너"},{"id":"367","name":"박옥규(100727) 파트너"},{"id":"114","name":"박용석(062929) 파트너"},{"id":"229","name":"박은진(065475) 파트너"},{"id":"345","name":"박은혜(113090) 파트너"},{"id":"336","name":"박인숙(112486) 파트너"},{"id":"649","name":"박정용(134390) 파트너"},{"id":"207","name":"박정혜(121788) 파트너"},{"id":"61","name":"박정환(123063) 파트너"},{"id":"224","name":"박종선(081542) 파트너"},{"id":"400","name":"박지영(990I01) 팀장"},{"id":"343","name":"박지원(112505) 파트너"},{"id":"1066","name":"박진주(073369) 파트너"},{"id":"401","name":"박진희(990H13) 팀장"},{"id":"666","name":"박참샘(134508) 파트너"},{"id":"347","name":"박현애(932045) 파트너"},{"id":"857","name":"박현호(140884) 파트너"},{"id":"339","name":"박혜림(112494) 파트너"},{"id":"196","name":"박혜민(130088) 파트너"},{"id":"86","name":"박희주(114465) 파트너"},{"id":"53","name":"방수인(113792) 파트너"},{"id":"223","name":"배경욱(931244) 팀장"},{"id":"128","name":"배익(095606) 파트너"},{"id":"77","name":"배정연(128825) 파트너"},{"id":"220","name":"백민성(083343) 파트너"},{"id":"395","name":"백승걸(131544) 파트너"},{"id":"255","name":"백승권(921224) 팀장"},{"id":"394","name":"백영현(990834) 파트너"},{"id":"301","name":"백종혁(131003) 파트너"},{"id":"1171","name":"변소희(144881) 파트너"},{"id":"119","name":"변희경(112182) 파트너"},{"id":"60","name":"서길분(121790) 파트너"},{"id":"709","name":"서무교(134924) 파트너"},{"id":"79","name":"서승희(117820) 파트너"},{"id":"1155","name":"서정오(144195) 파트너"},{"id":"139","name":"서정혜(073848) 파트너"},{"id":"320","name":"서지영(130680) 파트너"},{"id":"319","name":"서형미(112492) 파트너"},{"id":"240","name":"서호준(001987) Chief파트너"},{"id":"200","name":"석태미(123556) Chief파트너"},{"id":"407","name":"선혜란(990A11) 센터장"},{"id":"1166","name":"소정섭(016227) Chief파트너"},{"id":"358","name":"손다희(112485) 파트너"},{"id":"186","name":"손지영(081125) Chief파트너"},{"id":"356","name":"손지혜(112489) 파트너"},{"id":"170","name":"손혜선(092910) 파트너"},{"id":"161","name":"송구호(083406) 파트너"},{"id":"111","name":"송금아(110497) 과장"},{"id":"40","name":"송기종(072027) 파트너"},{"id":"306","name":"송지숙(044607) 파트너"},{"id":"168","name":"송진봉(003047) 과장"},{"id":"219","name":"송호영(083333) 대리"},{"id":"342","name":"신광섭(112498) 파트너"},{"id":"225","name":"신구슬(041905) 파트너"},{"id":"707","name":"신다혜(134908) 파트너"},{"id":"1083","name":"신선호(142923) 파트너"},{"id":"259","name":"신익수(971070) Chief파트너"},{"id":"103","name":"신정훈(117622) 과장"},{"id":"688","name":"신지예(117852) 파트너"},{"id":"428","name":"신진희(131704) 파트너"},{"id":"74","name":"심보현(113603) 파트너"},{"id":"94","name":"양광모(130087) 파트너"},{"id":"69","name":"양영열(127462) 파트너"},{"id":"750","name":"양은혜(135318) 파트너"},{"id":"57","name":"양진성(129787) 파트너"},{"id":"1085","name":"양현숙(142924) 파트너"},{"id":"42","name":"양호석(129896) 팀장"},{"id":"72","name":"어승옥(130616) 파트너"},{"id":"368","name":"오동석(061797) 파트너"},{"id":"551","name":"오정인(133187) 파트너"},{"id":"165","name":"옥경원(041733) 파트너"},{"id":"201","name":"우기영(114443) 파트너"},{"id":"302","name":"유설화(131004) 파트너"},{"id":"312","name":"유제연(113380) 파트너"},{"id":"66","name":"유진석(123698) 파트너"},{"id":"162","name":"유태일(011536) Chief파트너"},{"id":"261","name":"유하리(083358) 파트너"},{"id":"1154","name":"유현재(144187) 파트너"},{"id":"745","name":"유호연(135127) 파트너"},{"id":"630","name":"윤미주(068640) 파트너"},{"id":"391","name":"윤보라(990e57) 파트너"},{"id":"748","name":"윤승환(135224) 파트너"},{"id":"1198","name":"윤예진(145733) 파트너"},{"id":"396","name":"윤주희(131546) 파트너"},{"id":"1271","name":"윤준영(151529) 파트너(수습)"},{"id":"674","name":"윤희윤(134585) 파트너"},{"id":"308","name":"이경택(131084) 파트너"},{"id":"412","name":"이계연(990406) 팀장"},{"id":"479","name":"이광욱(132894) 파트너"},{"id":"1270","name":"이기쁨(151531) 파트너(수습)"},{"id":"151","name":"이기원(091493) 파트너"},{"id":"191","name":"이나영(085497) 주임"},{"id":"364","name":"이나희(105456) 파트너"},{"id":"673","name":"이동수(134586) 파트너"},{"id":"417","name":"이동희(990826) 팀장"},{"id":"63","name":"이미란(115627) 파트너"},{"id":"1092","name":"이민국(502526) 팀장"},{"id":"260","name":"이상욱(072634) 파트너"},{"id":"363","name":"이상주(912125) 파트너"},{"id":"244","name":"이상훈(051109) 파트너"},{"id":"117","name":"이상희(111234) 파트너"},{"id":"468","name":"이석찬(990355) 팀장"},{"id":"586","name":"이수인(133894) 파트너"},{"id":"330","name":"이시은(112504) 파트너"},{"id":"249","name":"이신우(068630) 파트너"},{"id":"208","name":"이영민(121787) 파트너"},{"id":"1065","name":"이예중(116438) 파트너"},{"id":"228","name":"이용석(043076) 파트너"},{"id":"1268","name":"이원진(151535) 파트너"},{"id":"55","name":"이은수(125220) 파트너"},{"id":"37","name":"이은주(110650) 팀장"},{"id":"414","name":"이은주(990887) 팀장"},{"id":"329","name":"이은희(112500) 파트너"},{"id":"140","name":"이장한(072782) 파트너"},{"id":"467","name":"이재선(132780) 파트너"},{"id":"411","name":"이재영(990633) 팀장"},{"id":"166","name":"이재은(052733) 파트너"},{"id":"64","name":"이재진(120737) 파트너"},{"id":"359","name":"이정민(100156) 파트너"},{"id":"124","name":"이정민(111696) 파트너"},{"id":"83","name":"이정아(114466) 파트너"},{"id":"172","name":"이정재(081709) Chief파트너"},{"id":"392","name":"이정훈(062768) 대리"},{"id":"263","name":"이종수(971470) 팀장"},{"id":"46","name":"이종철(032784) 부장"},{"id":"415","name":"이진아(990245) 팀장"},{"id":"681","name":"이진원(021934) 과장"},{"id":"334","name":"이진주(112482) 파트너"},{"id":"625","name":"이진형(117787) 파트너"},{"id":"238","name":"이창준(941452) 팀장"},{"id":"650","name":"이채영(134389) 파트너"},{"id":"221","name":"이현도(991299) 파트너"},{"id":"45","name":"이현숙(122883) 파트너"},{"id":"747","name":"이현지(135225) 파트너"},{"id":"271","name":"이형석(011257) 대리"},{"id":"1240","name":"이형호(990Z54) 팀장"},{"id":"199","name":"이혜영(123996) 파트너"},{"id":"272","name":"이혜진(951479) 팀장"},{"id":"1064","name":"이화현(074349) 대리"},{"id":"59","name":"이훈구(116039) 파트너"},{"id":"1185","name":"인치은(121977) 파트너"},{"id":"251","name":"임유정(068636) 파트너"},{"id":"341","name":"임정선(112497) 파트너"},{"id":"192","name":"임정은(114605) 파트너"},{"id":"150","name":"임춘덕(083408) 주임"},{"id":"809","name":"임태현(140179) 파트너"},{"id":"365","name":"임효진(105459) 파트너"},{"id":"118","name":"장경민(112180) 파트너"},{"id":"1201","name":"장미(145735) 파트너"},{"id":"122","name":"장미정(111695) 파트너"},{"id":"294","name":"장서윤(130841) 파트너"},{"id":"590","name":"장수연(133990) 파트너"},{"id":"142","name":"장영덕(085182) 과장"},{"id":"105","name":"장영복(961062) 파트너"},{"id":"173","name":"장지철(085012) 파트너"},{"id":"346","name":"장진경(113091) 파트너"},{"id":"273","name":"장환(961487) 팀장"},{"id":"1072","name":"전보솔(142348) 파트너"},{"id":"399","name":"전선미(990494) 팀장"},{"id":"393","name":"전영규(131326) 파트너"},{"id":"115","name":"전치운(102703) 파트너"},{"id":"242","name":"전현탁(991708) 과장"},{"id":"188","name":"정동구(102679) 주임"},{"id":"430","name":"정병영(131702) 파트너"},{"id":"1213","name":"정성래(116447) 파트너"},{"id":"458","name":"정소연(132520) 파트너"},{"id":"1090","name":"정숙경(502328) 팀장"},{"id":"125","name":"정승훈(111697) 파트너"},{"id":"270","name":"정연희(972553) 파트너"},{"id":"121","name":"정영민(112645) 파트너"},{"id":"154","name":"정영재(081402) 파트너"},{"id":"267","name":"정원태(001322) 과장"},{"id":"623","name":"정윤연(011236) 파트너"},{"id":"457","name":"정은경(132471) 파트너"},{"id":"1173","name":"정인혁(144858) 파트너"},{"id":"1084","name":"조민경(142909) 파트너"},{"id":"130","name":"조선영(092050) 파트너"},{"id":"76","name":"조선영(117821) 주임"},{"id":"183","name":"조성현(110511) 파트너"},{"id":"418","name":"조승열(990F10) 팀장"},{"id":"572","name":"조윤경(043612) Chief파트너"},{"id":"1244","name":"조은영(117812) 파트너"},{"id":"133","name":"조재광(095000) Chief파트너"},{"id":"84","name":"조정미(114464) 파트너"},{"id":"405","name":"조정아(990609) 팀장"},{"id":"1086","name":"조진영(142907) 파트너"},{"id":"459","name":"조혜미(132519) 파트너"},{"id":"668","name":"지승현(074337) 파트너"},{"id":"1089","name":"지제민(502297) 팀장"},{"id":"236","name":"최덕선(991760) 팀장"},{"id":"174","name":"최성찬(015355) 파트너"},{"id":"1200","name":"최시원(145734) 파트너"},{"id":"1272","name":"최아영(151530) 파트너(수습)"},{"id":"178","name":"최우정(105905) 총괄"},{"id":"227","name":"최익호(023405) 과장"},{"id":"859","name":"최준영(140881) 파트너"},{"id":"143","name":"최지훈(091492) 파트너"},{"id":"41","name":"최태훈(126220) 파트너"},{"id":"1069","name":"최현우(142381) 파트너"},{"id":"331","name":"최호영(025067) 파트너"},{"id":"1163","name":"최홍기(144112) 파트너"},{"id":"144","name":"최희영(062381) Chief파트너"},{"id":"243","name":"최희준(095594) 파트너"},{"id":"230","name":"탁현숙(066588) 파트너"},{"id":"54","name":"표상순(122484) 대리"},{"id":"145","name":"하걸범(093087) 주임"},{"id":"134","name":"하영실(095002) 파트너"},{"id":"258","name":"한건수(991742) 과장"},{"id":"52","name":"한동훈(116948) 담당"},{"id":"146","name":"한명식(066273) Chief파트너"},{"id":"351","name":"한미애(112499) 파트너"},{"id":"248","name":"한혜원(095597) 파트너"},{"id":"43","name":"허준(125379) 팀장"},{"id":"203","name":"허진영(114586) 파트너"},{"id":"1241","name":"홍보람(990C25) 팀장"},{"id":"177","name":"홍상연(068639) 파트너"},{"id":"1174","name":"홍성범(144859) 파트너"},{"id":"338","name":"홍아름(112491) 파트너"},{"id":"116","name":"홍준표(110628) Chief파트너"},{"id":"65","name":"홍지선(123697) 파트너"},{"id":"362","name":"황보소영(112493) 파트너"},{"id":"560","name":"황성철(133363) 파트너"},{"id":"189","name":"황인혁(102684) 파트너"}];
	var systemList = ["ssg-batch-app", "ssg-bo-webapp", "ssg-ecms-webapp", "ssg-pco-webapp", "ssg-pdo-webapp", "ssg-po-webapp", "ssg-cso-webapp", "ssg-eapi-webapp", "ssg-mapi-webapp", "ssg-uapi-webapp", "ssg-capi-webapp", "ssg-event-webapp", "ssg-emart-webapp", "ssg-boons-webapp", "ssg-traders-webapp", "ssg-memall-webapp", "ssg-mtraders-webapp", "ssg-msmall-webapp", "ssg-mlguplus-webapp", "ssg-mssgmall-webapp", "ssg-member-webapp", "ssg-pay-webapp", "ssg-mmember-webapp", "ssg-mpay-webapp", "ssg-department-webapp", "ssg-small-webapp", "ssg-ssgmall-webapp", "ssg-ssgli-webapp", "ssg-redirect-webapp", "pg-api-webapp", "pg-batch", "pg-bo-webapp", "pg-www-webapp", "ssg-bo-library", "ssg-common-library", "ssg-emall-library", "ssg-framework-support", "ssg-instant.win-library", "ssg-member-library", "ssg-mileage-library", "ssg-pay-library", "ssg-pd-library", "ssg-search-library", "ssg-shorturl-library", "ssg-small-library", "ssg-ssgmall-library", "ssg-uapi.client-library", "ssg-media-webapp-image", "ssg-media-webapp-purge"];
	var distSystemList = ["프론트PC ALL", "프론트Mobile ALL", "백엔드 ALL", "SSG", "mSSG", "신세계몰", "신세계백화점", "m신세계몰", "mlguplus", "이마트몰", "트레이더스", "분스", "m이마트몰", "m트레이더스", "SSG - android APP", "신세계몰 - android APP", "이마트몰 - android APP", "SSG - ios phone APP", "신세계몰 - ios phone APP", "이마트몰 - ios phone APP", "SSG - ios pad APP", "신세계몰 - ios pad APP", "이마트몰 - ios pad APP", "가상스토어 - android APP", "가상스토어 - ios phone APP", "가상스토어 - ios pad APP", "SFC - android APP", "SFC - ios phone APP", "SFC - ios pad APP", "이벤트", "member", "mmember", "pay", "mpay", "LI", "BO", "PO", "PDO", "PCO", "CSO", "ECMS", "eAPI", "cAPI", "mAPI", "uAPI", "batch", "media", "purge", "PG_프론트", "PG_BO", "PG_API"];
	
	angular
		.module('buildnote')
		.constant('authorList', authorList)
		.constant('systemList', systemList)
		.constant('distSystemList', distSystemList)
		.constant('store', store);
})();