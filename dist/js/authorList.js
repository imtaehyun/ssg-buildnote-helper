(function() {
	var globalScope = (typeof global !== 'undefined' && (typeof window === 'undefined' || window === global.window)) ? global : this;
	globalScope.authorList = [
	  // 1102 개발 All
	  {
	    "id": "33",
	    "name": "김우진(112159) 파트너"
	  },
	  {
	    "id": "34",
	    "name": "김현철(122891) 파트너"
	  },
	  {
	    "id": "37",
	    "name": "이은주(110650) 팀장"
	  },
	  {
	    "id": "38",
	    "name": "박남현(117944) 파트너"
	  },
	  {
	    "id": "39",
	    "name": "김하형(117983) 파트너"
	  },
	  {
	    "id": "40",
	    "name": "송기종(072027) 파트너"
	  },
	  {
	    "id": "42",
	    "name": "양호석(129896) 팀장"
	  },
	  {
	    "id": "43",
	    "name": "허준(125379) 팀장"
	  },
	  {
	    "id": "44",
	    "name": "구지영(122890) 주임"
	  },
	  {
	    "id": "45",
	    "name": "이현숙(122883) 파트너"
	  },
	  {
	    "id": "48",
	    "name": "김지영(121955) 파트너"
	  },
	  {
	    "id": "60",
	    "name": "서길분(121790) 파트너"
	  },
	  {
	    "id": "61",
	    "name": "박정환(123063) 파트너"
	  },
	  {
	    "id": "64",
	    "name": "이재진(120737) 파트너"
	  },
	  {
	    "id": "65",
	    "name": "홍지선(123697) 파트너"
	  },
	  {
	    "id": "67",
	    "name": "김상연(127464) 파트너"
	  },
	  {
	    "id": "69",
	    "name": "양영열(127462) 파트너"
	  },
	  {
	    "id": "72",
	    "name": "어승옥(130616) 파트너"
	  },
	  {
	    "id": "77",
	    "name": "배정연(128825) 파트너"
	  },
	  {
	    "id": "88",
	    "name": "김광무(129845) 파트너"
	  },
	  {
	    "id": "99",
	    "name": "김형진(130539) 파트너"
	  },
	  {
	    "id": "103",
	    "name": "신정훈(117622) 과장"
	  },
	  {
	    "id": "121",
	    "name": "정영민(112645) 파트너"
	  },
	  {
	    "id": "127",
	    "name": "강철민(121560) 파트너"
	  },
	  {
	    "id": "184",
	    "name": "김요셉(111232) 파트너"
	  },
	  {
	    "id": "208",
	    "name": "이영민(121787) 파트너"
	  },
	  {
	    "id": "212",
	    "name": "김민석(130041) 파트너"
	  },
	  {
	    "id": "301",
	    "name": "백종혁(131003) 파트너"
	  },
	  {
	    "id": "308",
	    "name": "이경택(131084) 파트너"
	  },
	  {
	    "id": "386",
	    "name": "김환석(131300) 파트너"
	  },
	  {
	    "id": "393",
	    "name": "전영규(131326) 파트너"
	  },
	  {
	    "id": "395",
	    "name": "백승걸(131544) 파트너"
	  },
	  {
	    "id": "429",
	    "name": "남정달(131703) 파트너"
	  },
	  {
	    "id": "430",
	    "name": "정병영(131702) 파트너"
	  },
	  {
	    "id": "458",
	    "name": "정소연(132520) 파트너"
	  },
	  {
	    "id": "467",
	    "name": "이재선(132780) 파트너"
	  },
	  {
	    "id": "479",
	    "name": "이광욱(132894) 파트너"
	  },
	  {
	    "id": "560",
	    "name": "황성철(133363) 파트너"
	  },
	  {
	    "id": "565",
	    "name": "권태진(133410) 파트너"
	  },
	  {
	    "id": "593",
	    "name": "김형진(133987) 파트너"
	  },
	  {
	    "id": "649",
	    "name": "박정용(134390) 파트너"
	  },
	  {
	    "id": "651",
	    "name": "구도현(134388) 파트너"
	  },
	  {
	    "id": "673",
	    "name": "이동수(134586) 파트너"
	  },
	  {
	    "id": "709",
	    "name": "서무교(134924) 파트너"
	  },
	  {
	    "id": "742",
	    "name": "김희창(135087) 파트너"
	  },
	  {
	    "id": "745",
	    "name": "유호연(135127) 파트너"
	  },
	  {
	    "id": "748",
	    "name": "윤승환(135224) 파트너"
	  },
	  {
	    "id": "754",
	    "name": "김도훈(135459) 파트너"
	  },
	  {
	    "id": "806",
	    "name": "김민아(140178) 파트너"
	  },
	  {
	    "id": "807",
	    "name": "김호경(140180) 파트너"
	  },
	  {
	    "id": "808",
	    "name": "강수아(140181) 파트너"
	  },
	  {
	    "id": "809",
	    "name": "임태현(140179) 파트너"
	  },
	  {
	    "id": "817",
	    "name": "김수원(140364) 파트너"
	  },
	  {
	    "id": "818",
	    "name": "박상수(140363) 파트너"
	  },
	  {
	    "id": "855",
	    "name": "김훈(140880) 파트너"
	  },
	  {
	    "id": "856",
	    "name": "김명수(140883) 파트너"
	  },
	  {
	    "id": "857",
	    "name": "박현호(140884) 파트너"
	  },
	  {
	    "id": "859",
	    "name": "최준영(140881) 파트너"
	  },
	  {
	    "id": "1072",
	    "name": "전보솔(142348) 파트너"
	  },
	  {
	    "id": "1086",
	    "name": "조진영(142907) 파트너"
	  },
	  {
	    "id": "1154",
	    "name": "유현재(144187) 파트너"
	  },
	  {
	    "id": "1155",
	    "name": "서정오(144195) 파트너"
	  },
	  {
	    "id": "1163",
	    "name": "최홍기(144112) 파트너"
	  },
	  {
	    "id": "1174",
	    "name": "홍성범(144859) 파트너"
	  },
	  {
	    "id": "1183",
	    "name": "김종호(145472) 파트너"
	  },
	  {
	    "id": "1200",
	    "name": "최시원(145734) 파트너"
	  },
	  {
	    "id": "1268",
	    "name": "이원진(151535) 파트너"
	  },
	  {
	    "id": "1269",
	    "name": "이은미(151588) 파트너"
	  },
	  // 1148 기획 All
	  {
	    "id": "47",
	    "name": "전미미(120354) 대리"
	  },
	  {
	    "id": "52",
	    "name": "한동훈(116948) 담당"
	  },
	  {
	    "id": "53",
	    "name": "방수인(113792) 파트너"
	  },
	  {
	    "id": "57",
	    "name": "양진성(129787) 파트너"
	  },
	  {
	    "id": "58",
	    "name": "구현아(121834) Chief파트너"
	  },
	  {
	    "id": "59",
	    "name": "이훈구(116039) 파트너"
	  },
	  {
	    "id": "84",
	    "name": "조정미(114464) 파트너"
	  },
	  {
	    "id": "86",
	    "name": "박희주(114465) 파트너"
	  },
	  {
	    "id": "87",
	    "name": "김미정(129844) 파트너"
	  },
	  {
	    "id": "100",
	    "name": "양은정(130540) 대리"
	  },
	  {
	    "id": "111",
	    "name": "송금아(110497) 과장"
	  },
	  {
	    "id": "117",
	    "name": "이상희(111234) 파트너"
	  },
	  {
	    "id": "128",
	    "name": "배익(095606) 파트너"
	  },
	  {
	    "id": "136",
	    "name": "김형일(024118) 과장"
	  },
	  {
	    "id": "138",
	    "name": "박경원(083410) 파트너"
	  },
	  {
	    "id": "147",
	    "name": "박영덕(082872) 파트너"
	  },
	  {
	    "id": "151",
	    "name": "이기원(091493) 파트너"
	  },
	  {
	    "id": "154",
	    "name": "정영재(081402) 파트너"
	  },
	  {
	    "id": "160",
	    "name": "김현미(082873) 파트너"
	  },
	  {
	    "id": "161",
	    "name": "송구호(083406) 파트너"
	  },
	  {
	    "id": "190",
	    "name": "길준규(102659) 파트너"
	  },
	  {
	    "id": "192",
	    "name": "임정은(114605) 파트너"
	  },
	  {
	    "id": "196",
	    "name": "박혜민(130088) 파트너"
	  },
	  {
	    "id": "199",
	    "name": "이혜영(123996) 파트너"
	  },
	  {
	    "id": "200",
	    "name": "석태미(123556) Chief파트너"
	  },
	  {
	    "id": "207",
	    "name": "박정혜(121788) 파트너"
	  },
	  {
	    "id": "213",
	    "name": "김영주(130042) 파트너"
	  },
	  {
	    "id": "230",
	    "name": "탁현숙(066588) 파트너"
	  },
	  {
	    "id": "243",
	    "name": "최희준(095594) 파트너"
	  },
	  {
	    "id": "261",
	    "name": "유하리(083358) 파트너"
	  },
	  {
	    "id": "290",
	    "name": "김주영(130759) 파트너"
	  },
	  {
	    "id": "294",
	    "name": "장서윤(130841) 파트너"
	  },
	  {
	    "id": "302",
	    "name": "유설화(131004) 파트너"
	  },
	  {
	    "id": "428",
	    "name": "신진희(131704) 파트너"
	  },
	  {
	    "id": "457",
	    "name": "정은경(132471) 파트너"
	  },
	  {
	    "id": "459",
	    "name": "조혜미(132519) 파트너"
	  },
	  {
	    "id": "583",
	    "name": "강미영(133888) 파트너"
	  },
	  {
	    "id": "666",
	    "name": "박참샘(134508) 파트너"
	  },
	  {
	    "id": "744",
	    "name": "김은호(102701) 파트너"
	  },
	  {
	    "id": "1084",
	    "name": "조민경(142909) 파트너"
	  },
	  {
	    "id": "1085",
	    "name": "양현숙(142924) 파트너"
	  },
	  {
	    "id": "1153",
	    "name": "김병준(121958) 파트너"
	  },
	  {
	    "id": "1171",
	    "name": "변소희(144881) 파트너"
	  },
	  {
	    "id": "1175",
	    "name": "김효경(144864) 파트너"
	  }
	];
})();