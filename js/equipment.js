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
    $( document ).ready(function() {
       $(".votec-subpages").hide();
       $(".votec-navpages").removeClass("active");
        switch(GetURLParameter("pg")) {
            case "cam":
                $("#breadcrumbItem").text("Camera");
                $("#subSectionTitle").text("Camera");
                $("#camPage").show();
                $("#cam").addClass("active");
                break;
            case "print":
                $("#breadcrumbItem").text("Printers");
                $("#subSectionTitle").text("Printers");
                $("#printPage").show();
                $("#print").addClass("active");
                break;
            case "bat":
                $("#breadcrumbItem").text("Batteries");
                $("#subSectionTitle").text("Batteries");
                $("#batPage").show();
                $("#bat").addClass("active");
                break;
            case "kiosk":
                $("#breadcrumbItem").text("Kiosk");
                $("#subSectionTitle").text("Kiosk");
                $("#kioskPage").show();
                $("#kiosk").addClass("active");
                break;
            case "mifi":
                $("#breadcrumbItem").text("Mifi");
                $("#subSectionTitle").text("Mifi");
                $("#mifiPage").show();
                $("#mifi").addClass("active");
                break;
            default:
                $("defaultPage").show();
        }
        setInterval(function(){ 
            $('#bat1').toggleClass('magictime swashIn');
        }, 3000 );
    });
    var allData = [];
    $(function() {
        $("#camTable").bootstrapTable({
            data: allData,
            exportTypes: ['csv', 'excel', 'pdf']
        });
        $("#printerTable").bootstrapTable({
            data: allData,
            exportTypes: ['csv', 'excel', 'pdf']
        });
        $("#batTable").bootstrapTable({
            data: allData,
            exportTypes: ['csv', 'excel', 'pdf']
        });
        $("#kioskTable").bootstrapTable({
            data: allData,
            exportTypes: ['csv', 'excel', 'pdf']
        });
        $("#mifiTable").bootstrapTable({
            data: allData,
            exportTypes: ['csv', 'excel', 'pdf']
        });
        $(".fixed-table-loading").hide();
        $(".fixed-table-toolbar").addClass("pull-left");
    });



    
   
var ctx = document.getElementById("myChart").getContext("2d");

    var data = {
    labels: ["Kiosk", "Laptop", "Mifi"],
    datasets: [
        {
            label: "Charge Percentage",
            backgroundColor: ["rgba(255,102,102,0.4)","rgba(178,216,178,0.4)","rgba(178,216,178,0.4)"],
            borderColor:["rgba(255,25,25,0.9)","green","green"],          
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [10,90,100],
        }
    ]
};


   
   

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    
    options: { legend: {
    display: false
  }}
});

    var data = [
    {
        "site": "2507-RICHARDSON HEIGHTS ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2508-RICHARDSON TERRACE ELEM SCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2509-RICHARDSON EAST CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2510-YALE ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2511-DARTMOUTH ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2513-SPRINGRIDGE ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2514-JESS HARBEN ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2602-CIMARRON RECREATION CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2700-BIG SPRINGS ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2702-SPRING CREEK ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2705-HICKMAN ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2707-WALLACE ETHRIDGE ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2708-NORTHSIDE BAPTIST CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2709-COOPER ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2710-LISTER ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2712-NORTHLAKE ELEM SCHOOL-GISD",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2805-COPPELL TOWN CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2900-ADDISON FIRE STATION #2",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2902-ADDISON FIRE DEPARTMENT",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2923-HERFURTH ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2924-COYLE MIDDLE SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2927-SCHRADE MIDDLE SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2941-SACHSE CITY HALL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3000-WILLIAM B TRAVIS VANGUARD",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3003-T W BROWNE MIDDLE SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3004-DANIEL WEBSTER ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3008-DALLAS CO. COURTHOUSE -ALLEN",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3009-EXALL PARK RECREATION CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3011-ST. EDWARDS CATHOLIC CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3016-BILL J PRIEST INSTITUTE",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3017-MLK LEARNING CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3018-PARK SOUTH YMCA",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3019-JAMES MADISON HIGH SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3022-IRMA RANGEL WOMENS SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3025-MT. HOREB BAPTIST CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3026-ST. PAUL BAPTIST CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3027-LINCOLN HIGH SCHOOL- CHM",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3029-EVANGELIST TEMPLE CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3032-JAMES BOWIE ELEM SCHOOL-DISD",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3034-GREATER MT PLEASANT BAPTIST",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3035-F D ROOSEVELT HIGH SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3038-THE WAY-TRUTH-LIFE CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3039-OLIVER W HOLMES MIDDLE SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3040-GOOD STREET BAPTIST CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3043-JOHN NEELY BRYAN ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3044-W W BUSHMAN ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3045-GETHSEMANE BAPTIST CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3046-JOHN W. CARPENTER ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3047-CFNI STUDENT CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3048-SOUTH OAK CLIFF  HIGH SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3049-CLARA OLIVER ANNEX",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3050-HOLLAND ELEM SCHOOL AT LISBON",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3051-FOUNTAIN OF LIVING WORD CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3052-ELISHA M PEASE ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3054-W M HAWLEY ATWELL ACADEMY",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3055-ADELLE TURNER ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3056-MARK TWAIN VANGUARD",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3057-T G TERRY ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3058-ST. PAUL LUTHERAN CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3059-ST. LUKE PRESBYTERIAN CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3060-R L THORNTON ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3061-NEW TECH H S @ A MACEO SMITH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3062-J N ERVIN ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3063-RONALD E MCNAIR ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3064-DAVID W CARTER HIGH SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3065-UMPHREY LEE ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3066-MARTIN WEISS ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3068-SINGING HILLS RECREATION CTR",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3069-CORNERSTONE TEMPLE BAPTIST",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3070-TOMMIE ALLEN REC CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3071-HIGHLAND HILLS UN METHODIST",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3077-PARK IN THE WOODS REC CTR",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3081-REVERCHON RECREATION CTR",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3082-W A BLAIR ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3083-KLEBERG RYLIE REC CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3092-THURGOOD MARSHALL REC CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3100-BELT LINE INTERMEDIATE SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3104-BRAY ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3109-LAKERIDGE ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3204-REED MIDDLE SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3207-BYRD MIDDLE SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3211-FAIRMEADOWS ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3301-DUNFORD RECREATION CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3304-POTEET HIGH SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3305-JOHN HANBY ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3307-W L WILKINSON MIDDLE SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3310-MESQUITE HIGH SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3312-PIRRUNG ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3313-J R THOMSPON ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3314-A C NEW MIDDLE SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3404-FLOYD ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3405-HODGES ELEMENTARY SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3408-FLOYD ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3500-SUNNYVALE TOWN CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3601-FAITH BIBLE CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3604-RUBY YOUNG ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3605-NORTHSIDE ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3606-THE MEADOWS ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3607-COCKRELL HILL ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3611-DESOTO EAST MIDDLE SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3615-BELT LINE CONFERENCE CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3616-DESOTO HIGH SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3700-LAKEVIEW CENTENIAL HIGH SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3701-TOLER ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3800-HOUSTON ELEM SCHOOL-LISD",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3805-ELSIE ROBERTSON MIDDLE SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3809-LANCASTER VETERANS MEM. LIB",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3900-MCCOWAN MIDDLE SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3921-SEAGOVILLE CITY HALL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3940-WILMER COMMUNITY CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "3950-HUTCHINS COMMUNITY CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4002-CAILLETT ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4004-MARCUS REC CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4010-STEPHEN FOSTER ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4014-SUDIE WILLIAMS ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4016-K B POLK CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4018-MAPLE LAWN ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4019-ARLINGTON PARK REC CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4022-ESPERANZA MEDRANO ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4024-L G PINKSTON HIGH SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4028-AMEILA EARHART ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4031-C F CARR ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4032-REVERCHON RECREATION CTR",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4033-DALLAS FIRE STATION # 1",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4035-ACADEMY OF DALLAS SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4038-HARRELL BUDD ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4039-BEXAR STREET BAPTIST CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4040-ROGER Q MILLS ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4043-THE UNION CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4046-CLINTON P RUSSELL ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4050-MOUNTAIN CREEK LIBRARY",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4052-BILHARTZ ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4055-LESLIE STEMMONS ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4056-PALABRA DE VIDA",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4057-KIEST REC CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4060-NANCY JANE COCHRAN ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1002-VICKERY BAPTIST CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1003-HAMILTON PARK PACESETTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1004-FOREST MEADOW JR. HIGH SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1005-NEW MOUNT ZION BAPTIST CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1006-MOSS HAVEN ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1008-LEE MCSHANN JR. ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1013-NORTH DALLAS HIGH SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1014-MULTIPLE CAREERS MAGNET CTR",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1019-DALLAS FIRE STATION # 17",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1020-BEN MILAM ELEM SCHOOL-DISD",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1022-OAKLAWN BRANCH LIBRARY",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1023-THE FATHERS CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1027-AUDELIA CREEK ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1029-RICHLAND COLLEGE",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1032-NORTHWOOD HILLS ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1033-SPRING VALLEY ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1036-RISD ACADEMY",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1038-A M AIKIN ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1040-DALLAS FIRE STATION #57",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1043-SKYVIEW ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1044-LAKE HIGHLANDS HIGH SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1045-HIGHLAND MEADOWS ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1048-MARTHA T REILLY ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1049-MERRIMAN PARK ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1052-LOCHWOOD BRANCH LIBRARY",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1054-CASA VIEW ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1056-CHARLES A GILL ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1057-ST. PIUS X CHURCH PARISH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1058-BRYAN ADAMS HIGH SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1059-REINHARDT ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1060-ALEX SANGER ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1061-W H GASTON MIDDLE SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1065-GEORGE TRUETT ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1070-GRACE UNITED METHODIST CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1071-LAKEWOOD BRANCH LIBRARY",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1073-JUNIUS HEIGHTS BAPTIST CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1074-SAMUELL GRAND REC CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1076-EDUARDO MATA ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1078-BAYLES ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1079-S S CONNER ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1081-Owenwood United Methodist",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1083-COLONIAL BAPTIST CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1084-EDNA ROWE ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1085-URBAN PARK ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1087-SKYLINE HIGH SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1089-FORESTER FIELD HOUSE",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1090-SAN JACINTO ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1091-ANNIE WEB BLANTON SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1092-EDWARD TITCHE ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1093-NUEVA VIDA LIFE ASSEMBLY",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1094-JOHN IRELAND ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1095-NATHANIEL HAWTHORNE ELEM",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1097-W W SAMUELL HIGH SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1098-FRED F FLORENCE MIDDLE SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1100-E B COMSTOCK MIDDLE SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1101-PLEASANT GROVE LIBRARY",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1102-B H MACON ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1104-WILLIAM ANDERSON ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1108-H GRADY SPRUCE HIGH SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1109-FIRESIDE DR. RECREATION CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1116-EDWIN J. KIEST ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1118-J W RAY ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1119-ST. LUKE COMMUNITY CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1120-JFK Learning Center",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1121-LIVING WATERS CHURCH OF GOD",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1301-FLORENCE PARK  COMMUNITY CTR",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1310-TOSCH ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1312-GALLOWAY ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1500-DOVER ELEMENTARY SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1501-PROFESSIONAL DEVELOPMENT CTR",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1502-MATH SCIENCE TECH. MAGNET-RISD",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1503-RICHLAND ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1700-LAVON DR BAPTIST CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1701-BUSSEY MIDDLE SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1702-GOLDEN MEADOWS ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1703-A R DAVIS ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1705-O HENRY ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1706-BRADFIELD ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1709-AUSTIN ACADEMY",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1710-KIMBERLIN ACADEMY",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1711-GRANGER COMMUNITY CENTER ANNEX",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1712-WILLIAMS ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1714-MEMORIAL PATHWAY ACADEMY",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1715-WATSON TECHNOLOGY CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1716-CLUB HILL ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1717-CLASSICAL CTR @ BRANDENBURG",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1718-SOUTHGATE ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1719-MONTCLAIR ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1720-O'BANION MIDDLE SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1722-CLASSICAL CENTER AT VIAL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1726-ROUTH ROACH ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "1728-SAM HOUSTON MIDDLE SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2002-HARRY C WITHERS ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2003-W T WHITE HIGH SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2005-DEGOLYER ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2007-JOHN CALVIN PRESBY CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2008-JOHN J PERSHING ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2009-L G CIGARROA ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2010-WALNUT HILL RECREATION CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2013-LOVERS LANE UN METHODIST",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2016-UNITY CHURCH OF DALLAS",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2018-NORTHHAVEN UN METHODIST CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2019-GEORGE B DEALEY VANGUARD",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2020-ARTHUR KRAMER ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2021-PRESTON HOLLOW UN METHODIST",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2024-BENJAMIN FRANKLIN MID SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2026-HILLCREST HIGH SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2027-OUR REDEEMER LUTHERAN CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2029-WESTMINSTER PRESBYTERIAN",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2032-VILLAGE COUNTRY CLUB",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2034-HENRY LONGFELLOW MIDDLE SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2035-STONEWALL JACKSON ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2036-ZION LUTHERAN CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2038-ROBERT E LEE ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2040-ST. ANDREWS PRESBYTERIAN",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2041-PRESBYTERIAN MED. OFFICE NORTH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2043-BRENTFIELD INTERMEDIATE SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2044-TEXAS A&M RESEARCH EXT CTR",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2045-PARKHILL JR. HIGH SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2047-JAMES BOWIE ELEM SCHOOL-RISD",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2048-DALLAS FIRE STATION # 7",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2049-PRESTONWOOD ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2051-SPRINGCREEK ELEM SCHOOL-RISD",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2056-KING OF GLORY LUTHERAN CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2059-WALLACE ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2060-NORTHLAKE ELEM SCHOOL-RISD",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2061-LAKE HIGHLANDS ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2062-LAKE HIGHLANDS JR. HIGH SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2064-BROOKDALE LAKEHIGHLANDS",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2065-VICTOR HEXTER ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2066-WHITE ROCK ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2067-L L HOTCHKISS ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2068-DAN D ROGERS ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2069-RIDGEWOOD RECREATION CTR",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2072-NORTHRIDGE PRESBYTERIAN CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2077-EWELL D WALKER MIDDLE SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2079-ANNE FRANK ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2200-BRADFIELD ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2203-JOHN ARMSTRONG ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2221-ROBERT HYER ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2222-UNIVERSITY PARK ELEM SCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2224-HIGHLAND PARK MIDDLE SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2303-FARMERS BRANCH RECREATION CTR",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2305-WILLIAM L CABELL ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2310-FARMERS BRANCH CITY HALL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2401-KELLY FIELD HOUSE",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2406-KELLER SPRINGS BAPTIST CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2407-JOSEY RANCH LAKE LIBRARY",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2408-CROSBY RECREATION CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2500-GREENWOOD HILLS ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2501-CANYON CREEK ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2502-PRAIRIE CREEK ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2503-MOHAWK ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2504-RICHARDSON NORTH JR. HIGH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2505-NORTHRICH ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "2506-ARAPAHO CLASSICAL MAGNET SCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4061-L O DONALD ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4062-LELIA P COWART ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4063-ELMWOOD-EL BUEN SAMARITANO",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4065-ARCADIA PARK ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4067-GEORGE PEABODY ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4068-LIDA HOOE ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4069-WINNETKA ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4070-JOHN PEELER ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4071-DALLAS COUNTY SUB-COURTHOUSE",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4073-PREPARING THE WAY MINISTRIES",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4074-SUNSET HIGH SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4075-JOHN H REAGAN SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4076-STEVEN PARK ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4077-ROSEMONT ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4078-KIDD SPRINGS REC CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4079-KESSLER PARK UN. METH CHURCH",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4081-ELADIO MARTINEZ LEARNING CTR",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4083-SIDNEY LANIER ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4085-ANITA MARTINEZ REC CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4086-GRAUWYLER PARK REC CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4087-BACHMAN THERAPEUTIC REC CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4094-PARK FOREST BRANCH LIBRARY",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4097-DAVID BURNETT ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4110-BOUDE STOREY MIDDLE SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4300-COCKRELL HILL CITY HALL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4502-BETTY WARMACK LIBRARY",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4507-DANIELS ELEM ACADEMY",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4508-STEM ACADEMY MILAM ELEM",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4509-YWLA AT ARNOLD",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4511-JAMES BOWIE ELEM SCHOOL-GPISD",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4512-CHARLEY TAYLOR REC CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4513-HOUSTON ELEM SCHOOL-GPISD",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4514-CROSSWINDS HS/HOPE ACADEMY",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4515-TRAVIS ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4517-EISENHOWER ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4518-GRAND PRAIRIE FIRE STATION # 8",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4519-RONALD REAGAN MIDDLE SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4520-SAM RAYBURN ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4521-DE ZAVALA ES ACADEMY",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4522-TRUMAN MIDDLE SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4525-JOHNSON (LBJ) DAEP",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4527-GARCIA ELEM SCHOOL -GPISD",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4601-SALLY B ELLIOT ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4602-LEE BRITAIN ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4605-OTIS BROWN ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4607-IRVING HIGH SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4609-J O DAVIS ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4610-L B BARTON ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4616-Oak Haven Un Methodist Church",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4623-A S JOHNSTON ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4625-MACARTHUR HIGH SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4627-IRVING FIRE STATION # 8",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4628-THOMAS HALEY ELEM SCHOOL",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    },
    {
        "site": "4647-MUSTANG PARK REC CENTER",
        "tablet": "Connected",
        "batteries": "Good",
        "printer": "Connected",
        "camera": "Connected",
        "issues": "good"
    }
];

$(function () {
    $('#equipTable').bootstrapTable({
        data: data,
        onClickRow: function (row, $element) {
          $('#gridSystemModalLabel').text(row.site)
          $('#exampleModal').modal('show');
        },
        exportTypes: ['csv', 'excel', 'pdf']
    });

});
function rowStyle(row, index) {
  if(row.issues == "bad") {
    return {
      css: {"color": "#a94442","background-color": "#f2dede","border-color": "#ebccd1"}
    };
  } else if(row.issues == "fair") {
    return {
      css: {"color": "#8a6d3b","background-color": "#fcf8e3","border-color": "#faebcc"}
    };
  } else {
    return {};
  }
}
