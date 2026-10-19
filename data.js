// All data is local dummy data. Edit these arrays to customize the dashboard.
const services = ["Website Development", "Mobile App", "Cloud Setup", "SEO & Marketing", "IT Consultation"];
const leads = [
 {id:"L-1001",name:"Nancy Singh",company:"BrightPath Ltd",source:"Google Ads",status:"Converted",team:"sales",date:"2026-10-17",quotes:2,deal:185000,priority:"High"},
 {id:"L-1002",name:"Simran Kaur",company:"Northstar Studio",source:"Website",status:"Qualified",team:"sales",date:"2026-10-16",quotes:1,deal:92000,priority:"Medium"},
 {id:"L-1003",name:"Tanu Sharma",company:"GreenLeaf Foods",source:"Referral",status:"New",team:"sales",date:"2026-10-15",quotes:1,deal:0,priority:"Low"},
 {id:"L-1004",name:"Aman Verma",company:"Orbit Retail",source:"Google Ads",status:"Converted",team:"operations",date:"2026-10-14",quotes:3,deal:240000,priority:"High"},
 {id:"L-1005",name:"Priya Mehta",company:"PixelWorks",source:"Just Dial",status:"Unqualified",team:"sales",date:"2026-10-13",quotes:0,deal:0,priority:"Low"},
 {id:"L-1006",name:"Rohan Das",company:"CloudNine Co.",source:"Website",status:"Qualified",team:"operations",date:"2026-10-12",quotes:2,deal:78000,priority:"Medium"},
 {id:"L-1007",name:"Meera Joshi",company:"UrbanNest",source:"Referral",status:"Converted",team:"sales",date:"2026-10-10",quotes:2,deal:156000,priority:"High"},
 {id:"L-1008",name:"Kabir Shah",company:"FinEdge",source:"Google Ads",status:"Qualified",team:"sales",date:"2026-10-08",quotes:1,deal:65000,priority:"Medium"},
 {id:"L-1009",name:"Isha Kapoor",company:"Nova Health",source:"Website",status:"New",team:"operations",date:"2026-10-05",quotes:0,deal:0,priority:"Low"},
 {id:"L-1010",name:"Arjun Rao",company:"Summit Logistics",source:"Just Dial",status:"Converted",team:"operations",date:"2026-09-27",quotes:2,deal:125000,priority:"High"},
 {id:"L-1011",name:"Diya Patel",company:"BlueOak Design",source:"Google Ads",status:"Unqualified",team:"sales",date:"2026-09-22",quotes:1,deal:0,priority:"Low"},
 {id:"L-1012",name:"Vikram Gill",company:"Aster Systems",source:"Referral",status:"Qualified",team:"operations",date:"2026-09-20",quotes:2,deal:86000,priority:"Medium"},
 {id:"L-1013",name:"Sara Khan",company:"Mosaic Learning",source:"Website",status:"Converted",team:"sales",date:"2026-09-18",quotes:1,deal:110000,priority:"High"},
 {id:"L-1014",name:"Dev Malhotra",company:"Pioneer Labs",source:"Google Ads",status:"New",team:"operations",date:"2026-09-11",quotes:0,deal:0,priority:"Medium"},
 {id:"L-1015",name:"Anaya Bose",company:"Silverline Media",source:"Just Dial",status:"Qualified",team:"sales",date:"2026-08-29",quotes:1,deal:52000,priority:"Low"}
];
const quotations = [
 {id:"Q-501",leadId:"L-1001",service:services[0],amount:85000,status:"Accepted"},
 {id:"Q-502",leadId:"L-1001",service:services[3],amount:100000,status:"Accepted"},
 {id:"Q-503",leadId:"L-1002",service:services[1],amount:92000,status:"Pending"},
 {id:"Q-504",leadId:"L-1003",service:services[2],amount:48000,status:"Pending"},
 {id:"Q-505",leadId:"L-1004",service:services[0],amount:140000,status:"Accepted"},
 {id:"Q-506",leadId:"L-1004",service:services[1],amount:100000,status:"Accepted"},
 {id:"Q-507",leadId:"L-1004",service:services[4],amount:35000,status:"Rejected"},
 {id:"Q-508",leadId:"L-1006",service:services[2],amount:78000,status:"Pending"},
 {id:"Q-509",leadId:"L-1006",service:services[4],amount:25000,status:"Accepted"},
 {id:"Q-510",leadId:"L-1007",service:services[0],amount:156000,status:"Accepted"},
 {id:"Q-511",leadId:"L-1008",service:services[3],amount:65000,status:"Pending"},
 {id:"Q-512",leadId:"L-1010",service:services[1],amount:125000,status:"Accepted"},
 {id:"Q-513",leadId:"L-1012",service:services[4],amount:86000,status:"Pending"},
 {id:"Q-514",leadId:"L-1013",service:services[0],amount:110000,status:"Accepted"},
 {id:"Q-515",leadId:"L-1015",service:services[3],amount:52000,status:"Rejected"}
];
const deals = [
 {id:"D-301",leadId:"L-1001",service:services[0],value:185000,collected:92000,progress:75,priority:"High",status:"In progress",date:"2026-10-17"},
 {id:"D-302",leadId:"L-1004",service:services[1],value:240000,collected:180000,progress:85,priority:"High",status:"In progress",date:"2026-10-14"},
 {id:"D-303",leadId:"L-1007",service:services[0],value:156000,collected:156000,progress:100,priority:"High",status:"Completed",date:"2026-10-10"},
 {id:"D-304",leadId:"L-1010",service:services[1],value:125000,collected:75000,progress:60,priority:"High",status:"In progress",date:"2026-09-27"},
 {id:"D-305",leadId:"L-1013",service:services[3],value:110000,collected:65000,progress:55,priority:"Medium",status:"In progress",date:"2026-09-18"},
 {id:"D-306",leadId:"L-1002",service:services[1],value:92000,collected:0,progress:20,priority:"Medium",status:"Pending",date:"2026-10-16"},
 {id:"D-307",leadId:"L-1006",service:services[2],value:78000,collected:30000,progress:45,priority:"Medium",status:"In progress",date:"2026-10-12"},
 {id:"D-308",leadId:"L-1012",service:services[4],value:86000,collected:43000,progress:50,priority:"Low",status:"In progress",date:"2026-09-20"}
];
const orders = [
 {id:"O-701",dealId:"D-301",service:services[0],progress:75,status:"In progress"},
 {id:"O-702",dealId:"D-302",service:services[1],progress:85,status:"In progress"},
 {id:"O-703",dealId:"D-303",service:services[0],progress:100,status:"Completed"},
 {id:"O-704",dealId:"D-304",service:services[1],progress:60,status:"In progress"},
 {id:"O-705",dealId:"D-305",service:services[3],progress:55,status:"Pending"},
 {id:"O-706",dealId:"D-307",service:services[2],progress:45,status:"In progress"},
 {id:"O-707",dealId:"D-308",service:services[4],progress:50,status:"Pending"}
];
const payments = [
 {id:"P-901",dealId:"D-301",date:"2026-10-17",amount:46000,status:"Received"},
 {id:"P-902",dealId:"D-302",date:"2026-10-16",amount:90000,status:"Received"},
 {id:"P-903",dealId:"D-303",date:"2026-10-13",amount:56000,status:"Received"},
 {id:"P-904",dealId:"D-304",date:"2026-10-10",amount:25000,status:"Pending"},
 {id:"P-905",dealId:"D-307",date:"2026-10-08",amount:30000,status:"Received"},
 {id:"P-906",dealId:"D-305",date:"2026-10-05",amount:35000,status:"Received"},
 {id:"P-907",dealId:"D-308",date:"2026-09-25",amount:43000,status:"Pending"}
];