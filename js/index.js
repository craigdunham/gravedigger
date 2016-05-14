var ctxConn = document.getElementById("connectivity-circle");
var dataConn = {
    labels: [
        "Online (300)",
        "Partially Online (100)",
        "Offline (50)"
    ],
    datasets: [
        {
            data: [300, 100, 50],
            backgroundColor: [
                "#39CF2A",
                "#226fbe",
                "#CB4E4E"
            ],
            hoverBackgroundColor: [
                "#1EA314",
                "#0a5daf",
                "#AB3C3C"
            ]
        }]
};
var optionsConn = {};
var ConnectivityChart = new Chart(ctxConn, {
  type: 'doughnut',
  data: dataConn,
  animation:{
      animateScale:true
  },
  options: optionsConn
});
var ctxLH = document.getElementById("live-help-circle");
var dataLH = {
  labels: [
    "Read Messages (200)",
    "Unread Messages (4)",
  ],
  datasets: [
    {
    data: [200, 4],
    backgroundColor: [
      "#39CF2A",
      "#CB4E4E"
    ],
    hoverBackgroundColor: [
      "#1EA314",
      "#AB3C3C"
    ]
  }]
};
var optionsLH = {};
var LHChart = new Chart(ctxLH, {
  type: 'doughnut',
  data: dataLH,
  animation:{
      animateScale:true
  },
  options: optionsLH
});
var ctxEquip = document.getElementById("equipment-circle");
var dataEquip = {
  labels: [
    "Operational (500)",
    "Failing (2)",
  ],
  datasets: [
    {
      data: [500, 2],
      backgroundColor: [
        "#226fbe",
        "#CB4E4E"
      ],
      hoverBackgroundColor: [
        "#0a5daf",
        "#AB3C3C"
      ]
    }
  ]
};
var optionsEquip = {};
var EquipChart = new Chart( ctxEquip, {
  type: 'doughnut',
  data: dataEquip,
  animation:{
    animateScale:true
  },
  options: optionsEquip
});
var ctxPolls = document.getElementById("polls-circle");
var dataPolls = {
  labels: [
    "Open Polls (200)",
    "Closed Polls (10)"
  ],
  datasets: [
    {
    data: [200, 10],
    backgroundColor: [
      "#39CF2A",
      "#CB4E4E"
    ],
    hoverBackgroundColor: [
      "#1EA314",
      "#AB3C3C"
    ]
  }]
};
var optionsPolls = {};
var PollsChart = new Chart(ctxPolls, {
  type: 'doughnut',
  data: dataPolls,
  animation:{
    animateScale:true
  },
  options: optionsPolls
});
var ctxCheckins = document.getElementById("checkinStats");
var dataCheckins = {
  labels: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"],
  datasets: [{
    label: "Voter Check-ins",
    fill: false,
    lineTension: 0.2,
    lineCap: "butt",
    data: [100, 150, 300, 100]
  },
  {
    label: "Provisional Check-ins",
    fill: false,
    lineTension: .1,
    lineCap: "butt",
    backgroundColor: "rgba(75,192,192,0.4)",
    borderColor: "rgba(75,192,192,1)",    
    data: [10, 15, 30, 10]
  },
  ]
};
var options = {      
        scaleLabel : "<%= value + ' + two = ' + (Number(value) + 2)   %>",
        scaleOverride: true,
        scaleSteps: 10,
        scaleStepWidth: Math.ceil(100 / 10),
        scaleStartValue: 0

    };
var CheckinsChart = new Chart(ctxCheckins, {
  type: 'line',
  data: dataCheckins,
  animation: {
    animateScale:true
  }
});
/*var ctxTurnout = document.getElementById("voterturnout");
var dataTurnout = {
  labels: [
    "Checked In",
    "Not Checked In",
  ],
  datasets: [
    {
      data: [500, 20000],
      backgroundColor: [
        "#226fbe"
      ],
      hoverBackgroundColor: [
        "#0a5daf"
      ]
    }
  ]
};
var optionsTurnout = {};
var turnoutChart = new Chart(ctxTurnout, {
  type: 'doughnut',
  data: dataTurnout,
  animation: {
    animateScale: true
  },
  options: optionsTurnout
});*/
            $("#voterturnout").circliful({
            animation: 1,
            animationStep: 5,
            foregroundBorderWidth: 15,
            backgroundBorderWidth: 15,
            percent: 25,
            textSize: 28,
            textStyle: 'font-size: 12px;',
            textColor: '#666',
            multiPercentage: 1,
            percentages: [10, 20, 30]
        });
