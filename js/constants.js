(function() {
	'use strict';

	var systemList = ["ssg-batch-app", "ssg-bo-webapp", "ssg-ecms-webapp", "ssg-pco-webapp", "ssg-pdo-webapp", "ssg-po-webapp", "ssg-cso-webapp", "ssg-eapi-webapp", "ssg-mapi-webapp", "ssg-uapi-webapp", "ssg-capi-webapp", "ssg-event-webapp", "ssg-emart-webapp", "ssg-boons-webapp", "ssg-traders-webapp", "ssg-memall-webapp", "ssg-mtraders-webapp", "ssg-msmall-webapp", "ssg-mlguplus-webapp", "ssg-mssgmall-webapp", "ssg-member-webapp", "ssg-pay-webapp", "ssg-mmember-webapp", "ssg-mpay-webapp", "ssg-department-webapp", "ssg-small-webapp", "ssg-ssgmall-webapp", "ssg-ssgli-webapp", "ssg-redirect-webapp", "pg-api-webapp", "pg-batch", "pg-bo-webapp", "pg-www-webapp", "ssg-bo-library", "ssg-common-library", "ssg-emall-library", "ssg-framework-support", "ssg-instant.win-library", "ssg-member-library", "ssg-mileage-library", "ssg-pay-library", "ssg-pd-library", "ssg-search-library", "ssg-shorturl-library", "ssg-small-library", "ssg-ssgmall-library", "ssg-uapi.client-library", "ssg-media-webapp-image", "ssg-media-webapp-purge"];
	var distSystemList = ["프론트PC ALL", "프론트Mobile ALL", "백엔드 ALL", "SSG", "mSSG", "신세계몰", "신세계백화점", "m신세계몰", "mlguplus", "이마트몰", "트레이더스", "분스", "m이마트몰", "m트레이더스", "SSG - android APP", "신세계몰 - android APP", "이마트몰 - android APP", "SSG - ios phone APP", "신세계몰 - ios phone APP", "이마트몰 - ios phone APP", "SSG - ios pad APP", "신세계몰 - ios pad APP", "이마트몰 - ios pad APP", "가상스토어 - android APP", "가상스토어 - ios phone APP", "가상스토어 - ios pad APP", "SFC - android APP", "SFC - ios phone APP", "SFC - ios pad APP", "이벤트", "member", "mmember", "pay", "mpay", "LI", "BO", "PO", "PDO", "PCO", "CSO", "ECMS", "eAPI", "cAPI", "mAPI", "uAPI", "batch", "media", "purge", "PG_프론트", "PG_BO", "PG_API"];
	
	angular
		.module('buildnote')
		.constant('authorList', authorList)
		.constant('systemList', systemList)
		.constant('distSystemList', distSystemList)
		.constant('store', store);
})();