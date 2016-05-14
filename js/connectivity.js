    function GetURLParameter(sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for(var i = 0; i < sURLVariables.length; i++) {
            var sParameterName = sURLVariables[i].split("=");
            if(sParameterName[0] == sParam) {
                return sParameterName[1];
            }
        }
    }
    $("document").ready(function() {
       $(".votec-subpages").hide();
       $(".votec-navpages").removeClass("active");
       $(".votec-modalPage").hide();
       switch(GetURLParameter("pg")) {
            case "preElec":
                $("#subSectionTitle").text("Pre Election");
                $("#breadcrumbItem").text("Pre Election");
                $("#preElecPage").show();
                $("#preElecModalPage").show();
                $("#preElec").addClass("active");
                break;
            case "open":
                $("#subSectionTitle").text("Open Polls");
                $("#breadcrumbItem").text("Open Polls");
                $("#openPage").show();
                $("#openModalPage").show();
                $("#open").addClass("active");
                break;
            case "heart":
                $("#subSectionTitle").text("Heartbeat");
                $("#breadcrumbItem").text("Heartbeat");
                $("#heartPage").show();
                $("#heartModalPage").show();
                $("#heart").addClass("active");
                break;
            case "in":
                $("#subSectionTitle").text("Incoming Message");
                $("#breadcrumbItem").text("Incoming Message");
                $("#inPage").show();
                $("#in").addClass("active");
                break;
            case "out":
                $("#subSectionTitle").text("Outgoing Message");
                $("#breadcrumbItem").text("Outgoing Message");
                $("#outPage").show();
                $("#out").addClass("active");
                break;
            case "quick":
                $("#subSectionTitle").text("Quick Look");
                $("#breadcrumbItem").text("Quick Look");
                $("#quickPage").show();
                $("#quick").addClass("active");
                break;
            default:
                $("#defaultPage").show();
       }
    });
var allData = [];
var heartbeatdata = [
{
        "site": "2507-RICHARDSON HEIGHTS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good",
        "labelid": "VS-1209",
        "preelecrate": "0/min",
        "preelecstatus": "Offline",
        "preelectotals": "15625",
        "pbu": "DARTMOUTH ELEM SCHOOL",
        "openstatus": "NO Info Received",
        "hearttime": "35 Minutes"
    },
    {
        "site": "2507-RICHARDSON HEIGHTS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good",
        "labelid": "VS-3381",
        "preelecrate": "0/min",
        "preelecstatus": "Offline",
            "preelectotals": "15625",
        "pbu": "HICKMAN ELEM SCHOOL",
        "openstatus": "NO Info Received",
        "hearttime": "8 Minutes"
    }
    ];

var openpollsdata = [
{
        "site": "2507-RICHARDSON HEIGHTS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good",
        "labelid": "VS-1209",
        "preelecrate": "0/min",
        "preelecstatus": "Offline",
        "preelectotals": "15625",
        "pbu": "DARTMOUTH ELEM SCHOOL",
        "openstatus": "NO Info Received"
    },
    {
        "site": "2507-RICHARDSON HEIGHTS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good",
        "labelid": "VS-3381",
        "preelecrate": "0/min",
        "preelecstatus": "Offline",
            "preelectotals": "15625",
        "pbu": "HICKMAN ELEM SCHOOL",
        "openstatus": "NO Info Received"
    },
    {
        "site": "2507-RICHARDSON HEIGHTS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good",
        "labelid": "VS-102",
        "preelecrate": "50/min",
        "preelecstatus": "Online",
      "preelectotals": "15625",
        "pbu": "PARK SOUTH YMCA",
        "openstatus": "NO Info Received"
    }
];   

var dataPreElec = [
    {
        "site": "2507-RICHARDSON HEIGHTS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good",
        "labelid": "VS-1209",
        "preelecrate": "0/min",
        "preelecstatus": "Offline",
        "preelectotals": "15625" 
    },
    {
        "site": "2507-RICHARDSON HEIGHTS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good",
        "labelid": "VS-3381",
        "preelecrate": "0/min",
        "preelecstatus": "Offline",
        "preelectotals": "9345"
    },
    {
        "site": "2507-RICHARDSON HEIGHTS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good",
        "labelid": "VS-102",
        "preelecrate": "50/min",
        "preelecstatus": "Online",
        "preelectotals": "1050"
    },
    {
        "site": "2507-RICHARDSON HEIGHTS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good",
        "labelid": "VS-4200",
        "preelecrate": "50/min",
        "preelecstatus": "Online",
        "preelectotals": "6005"
    },
    {
        "site": "2507-RICHARDSON HEIGHTS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good",
        "labelid": "VS-009",
        "preelecrate": "50/min",
        "preelecstatus": "Online",
        "preelectotals": "5625"
    },
    {
        "site": "2507-RICHARDSON HEIGHTS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good",
        "labelid": "VS-7299",
        "preelecrate": "50/min",
        "preelecstatus": "Online",
        "preelectotals": "5625"
    },
    {
        "site": "2507-RICHARDSON HEIGHTS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good",
        "labelid": "VS-1001",
        "preelecrate": "50/min",
        "preelecstatus": "Online",
        "preelectotals": "5625"
    },
    {
        "site": "2507-RICHARDSON HEIGHTS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good",
        "labelid": "VS-3002",
        "preelecrate": "50/min",
        "preelecstatus": "Online",
        "preelectotals": "12000"
    },
    {
        "site": "2507-RICHARDSON HEIGHTS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good",
        "labelid": "VS-8400",
        "preelecrate": "50/min",
        "preelecstatus": "Online",
        "preelectotals": "4000"
    },
    {
        "site": "2507-RICHARDSON HEIGHTS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good",
        "labelid": "VS-9810",
        "preelecrate": "50/min",
        "preelecstatus": "Online",
        "preelectotals": "2025"
    },
    {
        "site": "2507-RICHARDSON HEIGHTS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good",
        "labelid": "VS-2004",
        "preelecrate": "50/min",
        "preelecstatus": "Online",
        "preelectotals": "350"
    }
];
var DrillUpData = [
{
    "labelid": "VS-1209",
    "preElec_status": "Offline",
    "preElec_rate": "0/min",
    "preElec_updates": "15625",
    "pbu": "DARTMOUTH ELEM SCHOOL",
    "open_status": "NO Info Received",
    "heart_offline": "35 Minutes",
},
{
    "labelid": "VS-4567",
    "preElec_status": "Offline",
    "preElec_rate": "0/min",
    "preElec_updates": "9345",
    "pbu": "DARTMOUTH ELEM SCHOOL",
    "open_status": "NO Info Received",
    "heart_offline": "8 Minutes",
},
{
    "labelid": "VS-999",
    "preElec_status": "Online",
    "preElec_rate": "50/min",
    "preElec_updates": "1050",
    "pbu": "DARTMOUTH ELEM SCHOOL",
    "open_status": "NO Info Received",
    "heart_offline": "2 Minutes",
}
];
var openDrillUpData = [];
var heartDrillUpData = [];
$(function () {
    $('#preElecTable').bootstrapTable({
        data: dataPreElec,
        exportTypes: ['csv', 'excel', 'pdf']
    });
    $("#openTable").bootstrapTable({
        data: openpollsdata,
        onClickRow: function (row, $element) {
          $('#drillUpModalLabel').text("Connectivity - Open Polls - " + row.site)
          $('#drillUpModal').modal('show');
        },
        exportTypes: ['csv', 'excel', 'pdf']
    });
    $("#heartbeatTable").bootstrapTable({
        data: heartbeatdata,
        onClickRow: function (row, $element) {
          $('#drillUpModalLabel').text("Connectivity - Heartbeat - " + row.site)
          $('#drillUpModal').modal('show');
        },
        exportTypes: ['csv', 'excel', 'pdf']
    });
    $("#incomingTable").bootstrapTable({
        data: allData,
        exportTypes: ['csv', 'excel', 'pdf']
    });
    $("#outgoingTable").bootstrapTable({
        data: allData,
        exportTypes: ['csv', 'excel', 'pdf']
    });
    $("#quickTable").bootstrapTable({
        data: allData,
        exportTypes: ['csv', 'excel', 'pdf']
    });
    $("#modalPreElecTable").bootstrapTable({
        data: DrillUpData,
        exportTypes: ['csv', 'excel', 'pdf']
    });
    $("#modalHeartTable").bootstrapTable({
        data: DrillUpData,
        exportTypes: ['csv', 'excel', 'pdf']
    });
    $("#modalOpenTable").bootstrapTable({
        data: DrillUpData,
        exportTypes: ['csv', 'excel', 'pdf']
    });    
    $(".fixed-table-loading").hide();
    $(".fixed-table-toolbar").addClass("pull-left");
 });    

var data = [
    {
        "site": "2507-RICHARDSON HEIGHTS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2508-RICHARDSON TERRACE ELEM SCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2509-RICHARDSON EAST CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2510-YALE ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2511-DARTMOUTH ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2513-SPRINGRIDGE ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2514-JESS HARBEN ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2602-CIMARRON RECREATION CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2700-BIG SPRINGS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2702-SPRING CREEK ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2705-HICKMAN ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2707-WALLACE ETHRIDGE ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2708-NORTHSIDE BAPTIST CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2709-COOPER ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2710-LISTER ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2712-NORTHLAKE ELEM SCHOOL-GISD",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2805-COPPELL TOWN CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2900-ADDISON FIRE STATION #2",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2902-ADDISON FIRE DEPARTMENT",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2923-HERFURTH ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2924-COYLE MIDDLE SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2927-SCHRADE MIDDLE SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2941-SACHSE CITY HALL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3000-WILLIAM B TRAVIS VANGUARD",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3003-T W BROWNE MIDDLE SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3004-DANIEL WEBSTER ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3008-DALLAS CO. COURTHOUSE -ALLEN",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3009-EXALL PARK RECREATION CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3011-ST. EDWARDS CATHOLIC CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3016-BILL J PRIEST INSTITUTE",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3017-MLK LEARNING CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3018-PARK SOUTH YMCA",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3019-JAMES MADISON HIGH SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3022-IRMA RANGEL WOMENS SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3025-MT. HOREB BAPTIST CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3026-ST. PAUL BAPTIST CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3027-LINCOLN HIGH SCHOOL- CHM",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3029-EVANGELIST TEMPLE CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3032-JAMES BOWIE ELEM SCHOOL-DISD",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3034-GREATER MT PLEASANT BAPTIST",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3035-F D ROOSEVELT HIGH SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3038-THE WAY-TRUTH-LIFE CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3039-OLIVER W HOLMES MIDDLE SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3040-GOOD STREET BAPTIST CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3043-JOHN NEELY BRYAN ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3044-W W BUSHMAN ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3045-GETHSEMANE BAPTIST CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3046-JOHN W. CARPENTER ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3047-CFNI STUDENT CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3048-SOUTH OAK CLIFF HIGH SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3049-CLARA OLIVER ANNEX",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3050-HOLLAND ELEM SCHOOL AT LISBON",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3051-FOUNTAIN OF LIVING WORD CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3052-ELISHA M PEASE ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3054-W M HAWLEY ATWELL ACADEMY",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3055-ADELLE TURNER ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3056-MARK TWAIN VANGUARD",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3057-T G TERRY ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3058-ST. PAUL LUTHERAN CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3059-ST. LUKE PRESBYTERIAN CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3060-R L THORNTON ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3061-NEW TECH H S @ A MACEO SMITH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3062-J N ERVIN ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3063-RONALD E MCNAIR ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3064-DAVID W CARTER HIGH SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3065-UMPHREY LEE ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3066-MARTIN WEISS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3068-SINGING HILLS RECREATION CTR",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3069-CORNERSTONE TEMPLE BAPTIST",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3070-TOMMIE ALLEN REC CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3071-HIGHLAND HILLS UN METHODIST",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3077-PARK IN THE WOODS REC CTR",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3081-REVERCHON RECREATION CTR",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3082-W A BLAIR ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3083-KLEBERG RYLIE REC CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3092-THURGOOD MARSHALL REC CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3100-BELT LINE INTERMEDIATE SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3104-BRAY ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3109-LAKERIDGE ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3204-REED MIDDLE SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3207-BYRD MIDDLE SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3211-FAIRMEADOWS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3301-DUNFORD RECREATION CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3304-POTEET HIGH SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3305-JOHN HANBY ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3307-W L WILKINSON MIDDLE SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3310-MESQUITE HIGH SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3312-PIRRUNG ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3313-J R THOMSPON ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3314-A C NEW MIDDLE SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3404-FLOYD ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3405-HODGES ELEMENTARY SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3408-FLOYD ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3500-SUNNYVALE TOWN CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3601-FAITH BIBLE CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3604-RUBY YOUNG ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3605-NORTHSIDE ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3606-THE MEADOWS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3607-COCKRELL HILL ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3611-DESOTO EAST MIDDLE SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3615-BELT LINE CONFERENCE CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3616-DESOTO HIGH SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3700-LAKEVIEW CENTENIAL HIGH SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3701-TOLER ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3800-HOUSTON ELEM SCHOOL-LISD",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3805-ELSIE ROBERTSON MIDDLE SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3809-LANCASTER VETERANS MEM. LIB",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3900-MCCOWAN MIDDLE SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3921-SEAGOVILLE CITY HALL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3940-WILMER COMMUNITY CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "3950-HUTCHINS COMMUNITY CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4002-CAILLETT ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4004-MARCUS REC CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4010-STEPHEN FOSTER ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4014-SUDIE WILLIAMS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4016-K B POLK CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4018-MAPLE LAWN ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4019-ARLINGTON PARK REC CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4022-ESPERANZA MEDRANO ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4024-L G PINKSTON HIGH SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4028-AMEILA EARHART ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4031-C F CARR ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4032-REVERCHON RECREATION CTR",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4033-DALLAS FIRE STATION # 1",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4035-ACADEMY OF DALLAS SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4038-HARRELL BUDD ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4039-BEXAR STREET BAPTIST CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4040-ROGER Q MILLS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4043-THE UNION CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4046-CLINTON P RUSSELL ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4050-MOUNTAIN CREEK LIBRARY",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4052-BILHARTZ ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4055-LESLIE STEMMONS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4056-PALABRA DE VIDA",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4057-KIEST REC CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4060-NANCY JANE COCHRAN ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1002-VICKERY BAPTIST CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1003-HAMILTON PARK PACESETTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1004-FOREST MEADOW JR. HIGH SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1005-NEW MOUNT ZION BAPTIST CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1006-MOSS HAVEN ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1008-LEE MCSHANN JR. ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1013-NORTH DALLAS HIGH SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1014-MULTIPLE CAREERS MAGNET CTR",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1019-DALLAS FIRE STATION # 17",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1020-BEN MILAM ELEM SCHOOL-DISD",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1022-OAKLAWN BRANCH LIBRARY",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1023-THE FATHERS CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1027-AUDELIA CREEK ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1029-RICHLAND COLLEGE",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1032-NORTHWOOD HILLS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1033-SPRING VALLEY ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1036-RISD ACADEMY",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1038-A M AIKIN ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1040-DALLAS FIRE STATION #57",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1043-SKYVIEW ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1044-LAKE HIGHLANDS HIGH SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1045-HIGHLAND MEADOWS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1048-MARTHA T REILLY ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1049-MERRIMAN PARK ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1052-LOCHWOOD BRANCH LIBRARY",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1054-CASA VIEW ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1056-CHARLES A GILL ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1057-ST. PIUS X CHURCH PARISH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1058-BRYAN ADAMS HIGH SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1059-REINHARDT ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1060-ALEX SANGER ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1061-W H GASTON MIDDLE SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1065-GEORGE TRUETT ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1070-GRACE UNITED METHODIST CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1071-LAKEWOOD BRANCH LIBRARY",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1073-JUNIUS HEIGHTS BAPTIST CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1074-SAMUELL GRAND REC CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1076-EDUARDO MATA ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1078-BAYLES ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1079-S S CONNER ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1081-Owenwood United Methodist",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1083-COLONIAL BAPTIST CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1084-EDNA ROWE ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1085-URBAN PARK ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1087-SKYLINE HIGH SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1089-FORESTER FIELD HOUSE",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1090-SAN JACINTO ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1091-ANNIE WEB BLANTON SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1092-EDWARD TITCHE ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1093-NUEVA VIDA LIFE ASSEMBLY",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1094-JOHN IRELAND ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1095-NATHANIEL HAWTHORNE ELEM",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1097-W W SAMUELL HIGH SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1098-FRED F FLORENCE MIDDLE SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1100-E B COMSTOCK MIDDLE SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1101-PLEASANT GROVE LIBRARY",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1102-B H MACON ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1104-WILLIAM ANDERSON ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1108-H GRADY SPRUCE HIGH SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1109-FIRESIDE DR. RECREATION CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1116-EDWIN J. KIEST ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1118-J W RAY ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1119-ST. LUKE COMMUNITY CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1120-JFK Learning Center",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1121-LIVING WATERS CHURCH OF GOD",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1301-FLORENCE PARK COMMUNITY CTR",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1310-TOSCH ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1312-GALLOWAY ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1500-DOVER ELEMENTARY SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1501-PROFESSIONAL DEVELOPMENT CTR",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1502-MATH SCIENCE TECH. MAGNET-RISD",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1503-RICHLAND ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1700-LAVON DR BAPTIST CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1701-BUSSEY MIDDLE SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1702-GOLDEN MEADOWS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1703-A R DAVIS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1705-O HENRY ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1706-BRADFIELD ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1709-AUSTIN ACADEMY",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1710-KIMBERLIN ACADEMY",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1711-GRANGER COMMUNITY CENTER ANNEX",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1712-WILLIAMS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1714-MEMORIAL PATHWAY ACADEMY",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1715-WATSON TECHNOLOGY CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1716-CLUB HILL ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1717-CLASSICAL CTR @ BRANDENBURG",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1718-SOUTHGATE ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1719-MONTCLAIR ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1720-O'BANION MIDDLE SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1722-CLASSICAL CENTER AT VIAL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1726-ROUTH ROACH ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "1728-SAM HOUSTON MIDDLE SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2002-HARRY C WITHERS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2003-W T WHITE HIGH SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2005-DEGOLYER ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2007-JOHN CALVIN PRESBY CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2008-JOHN J PERSHING ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2009-L G CIGARROA ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2010-WALNUT HILL RECREATION CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2013-LOVERS LANE UN METHODIST",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2016-UNITY CHURCH OF DALLAS",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2018-NORTHHAVEN UN METHODIST CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2019-GEORGE B DEALEY VANGUARD",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2020-ARTHUR KRAMER ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2021-PRESTON HOLLOW UN METHODIST",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2024-BENJAMIN FRANKLIN MID SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2026-HILLCREST HIGH SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2027-OUR REDEEMER LUTHERAN CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2029-WESTMINSTER PRESBYTERIAN",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2032-VILLAGE COUNTRY CLUB",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2034-HENRY LONGFELLOW MIDDLE SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2035-STONEWALL JACKSON ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2036-ZION LUTHERAN CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2038-ROBERT E LEE ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2040-ST. ANDREWS PRESBYTERIAN",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2041-PRESBYTERIAN MED. OFFICE NORTH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2043-BRENTFIELD INTERMEDIATE SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2044-TEXAS A&M RESEARCH EXT CTR",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2045-PARKHILL JR. HIGH SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2047-JAMES BOWIE ELEM SCHOOL-RISD",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2048-DALLAS FIRE STATION # 7",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2049-PRESTONWOOD ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2051-SPRINGCREEK ELEM SCHOOL-RISD",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2056-KING OF GLORY LUTHERAN CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2059-WALLACE ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2060-NORTHLAKE ELEM SCHOOL-RISD",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2061-LAKE HIGHLANDS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2062-LAKE HIGHLANDS JR. HIGH SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2064-BROOKDALE LAKEHIGHLANDS",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2065-VICTOR HEXTER ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2066-WHITE ROCK ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2067-L L HOTCHKISS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2068-DAN D ROGERS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2069-RIDGEWOOD RECREATION CTR",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2072-NORTHRIDGE PRESBYTERIAN CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2077-EWELL D WALKER MIDDLE SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2079-ANNE FRANK ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2200-BRADFIELD ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2203-JOHN ARMSTRONG ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2221-ROBERT HYER ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2222-UNIVERSITY PARK ELEM SCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2224-HIGHLAND PARK MIDDLE SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2303-FARMERS BRANCH RECREATION CTR",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2305-WILLIAM L CABELL ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2310-FARMERS BRANCH CITY HALL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2401-KELLY FIELD HOUSE",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2406-KELLER SPRINGS BAPTIST CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2407-JOSEY RANCH LAKE LIBRARY",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2408-CROSBY RECREATION CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2500-GREENWOOD HILLS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2501-CANYON CREEK ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2502-PRAIRIE CREEK ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2503-MOHAWK ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2504-RICHARDSON NORTH JR. HIGH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2505-NORTHRICH ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "2506-ARAPAHO CLASSICAL MAGNET SCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4061-L O DONALD ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4062-LELIA P COWART ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4063-ELMWOOD-EL BUEN SAMARITANO",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4065-ARCADIA PARK ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4067-GEORGE PEABODY ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4068-LIDA HOOE ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4069-WINNETKA ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4070-JOHN PEELER ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4071-DALLAS COUNTY SUB-COURTHOUSE",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4073-PREPARING THE WAY MINISTRIES",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4074-SUNSET HIGH SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4075-JOHN H REAGAN SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4076-STEVEN PARK ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4077-ROSEMONT ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4078-KIDD SPRINGS REC CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4079-KESSLER PARK UN. METH CHURCH",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4081-ELADIO MARTINEZ LEARNING CTR",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4083-SIDNEY LANIER ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4085-ANITA MARTINEZ REC CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4086-GRAUWYLER PARK REC CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4087-BACHMAN THERAPEUTIC REC CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4094-PARK FOREST BRANCH LIBRARY",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4097-DAVID BURNETT ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4110-BOUDE STOREY MIDDLE SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4300-COCKRELL HILL CITY HALL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4502-BETTY WARMACK LIBRARY",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4507-DANIELS ELEM ACADEMY",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4508-STEM ACADEMY MILAM ELEM",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4509-YWLA AT ARNOLD",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4511-JAMES BOWIE ELEM SCHOOL-GPISD",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4512-CHARLEY TAYLOR REC CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4513-HOUSTON ELEM SCHOOL-GPISD",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4514-CROSSWINDS HS/HOPE ACADEMY",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4515-TRAVIS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4517-EISENHOWER ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4518-GRAND PRAIRIE FIRE STATION # 8",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4519-RONALD REAGAN MIDDLE SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4520-SAM RAYBURN ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4521-DE ZAVALA ES ACADEMY",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4522-TRUMAN MIDDLE SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4525-JOHNSON (LBJ) DAEP",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4527-GARCIA ELEM SCHOOL -GPISD",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4601-SALLY B ELLIOT ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4602-LEE BRITAIN ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4605-OTIS BROWN ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4607-IRVING HIGH SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4609-J O DAVIS ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4610-L B BARTON ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "good"
    },
    {
        "site": "4616-Oak Haven Un Methodist Church",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "fair"
    },
    {
        "site": "4623-A S JOHNSTON ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "fair"
    },
    {
        "site": "4625-MACARTHUR HIGH SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "fair"
    },
    {
        "site": "4627-IRVING FIRE STATION # 8",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "bad"
    },
    {
        "site": "4628-THOMAS HALEY ELEM SCHOOL",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "bad"
    },
    {
        "site": "4647-MUSTANG PARK REC CENTER",
        "systems": "2",
        "status": "Online",
        "offline": "30 Seconds",
        "pur": "0",
        "gur": "100",
        "queued": "1",
        "signal": "Good",
        "issue_state": "bad"
    }
];
$(function () {
    $('#connTable').bootstrapTable({
        data: data,
        onClickRow: function (row, $element) {
          $('#gridSystemModalLabel').text(row.site)
          $('#exampleModal').modal('show');
        },
        exportTypes: ['csv', 'excel', 'pdf']
    });
    $(".fixed-table-loading").hide();
});

function rowStyle(row, index) {
  if(row.issue_state == "bad") {
    return {
      css: {"color": "#a94442","background-color": "#f2dede","border-color": "#ebccd1"}
    };
  } else if(row.issue_state == "fair") {
    return {
      css: {"color": "#8a6d3b","background-color": "#fcf8e3","border-color": "#faebcc"}
    };
  } else {
    return {};
  }
}
$(function () {
    $('#fieldsystem1_history').bootstrapTable({
      data: data,
      exportTypes: ['csv', 'excel', 'pdf']
    });
});
function exportTableData() {
  $('#fieldsystem1_history').tableExport({type:'csv'});
}
    var ctxCheckins2 = document.getElementById("heartModalLineChart");
    var ctxCheckins1 = document.getElementById("heartModalLineChart1");
    var ctxCheckins3 = document.getElementById("heartModalLineChart2");
    var dataCheckins2 = {
      labels: ["10:00 AM", "10:05 AM", "10:10 AM", "10:15 AM", "10:20 AM", "10:25 AM", "10:30 AM","10:35 AM", "10:40 AM", "10:45 AM", "11:00 AM"],
      datasets: [
          {
            label: "VS-1209",
            fill: true,
            lineTension: 0.2,
            lineCap: "butt",
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",    
            data: [1, 1, 1, 0,0,0,0,0,0,0,0]
          },
      ]
    };
    var dataCheckins3 = {
      labels: ["10:00 AM", "10:05 AM", "10:10 AM", "10:15 AM", "10:20 AM", "10:25 AM", "10:30 AM","10:35 AM", "10:40 AM", "10:45 AM", "11:00 AM"],
      datasets: [
          {
            label: "VS-4567",
            fill: true,
            lineTension: 0.2,
            lineCap: "butt",
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",    
            data: [1, 1, 1, 1,1,1,1,1,1,0,0]
          },
       ]
    };
    var dataCheckins1 = {
      labels: ["10:00 AM", "10:05 AM", "10:10 AM", "10:15 AM", "10:20 AM", "10:25 AM", "10:30 AM","10:35 AM", "10:40 AM", "10:45 AM", "11:00 AM"],
      datasets: [
          {
            label: "VS-999",
            fill: true,
            lineTension: 0.2,
            lineCap: "butt",
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",    
            data: [1, 1, 1, 0,0,0,0,1,1,1,1]
          }
      ]
    };
    var CheckinsChart2 = new Chart(ctxCheckins2, {
      type: 'line',
      data: dataCheckins2,
      animation: {
        animateScale:true
      },
      options: {
          title: {
            display: true,
            text: "VS-1209"
          },
          legend: {
            display: false
          }
      }
    });
    var CheckinsChart3 = new Chart(ctxCheckins3, {
      type: 'line',
      data: dataCheckins3,
      animation: {
        animateScale:true
      },
      options: {
          title: {
            display: true,
            text: "VS-4567"
          },
          legend: {
            display: false
          }
      }
    });
    var CheckinsChart1 = new Chart(ctxCheckins1, {
      type: 'line',
      data: dataCheckins1,
      animation: {
        animateScale:true
      },
      options: {
          title: {
            display: true,
            text: "VS-999"
          },
          legend: {
            display: false
          }
      }
    });
