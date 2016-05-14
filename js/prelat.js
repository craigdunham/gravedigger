      var data = [
        {
          "site": "ED Site 3",
          "systems": "VS-234, VS-238",
          "print": "YES",
          "calibration": "N/A",
          "kiosk": "4.6",
          "updates": "05/02/2016"
        },
        {
          "site": "ED Site 2",
          "systems": "VS-499, VS-345",
          "print": "NO",
          "calibration": "Yes (Focal 83)",
          "kiosk": "4.6",
          "updates": "N/A"
        },
        {
          "site": "ED Site 1",
          "systems": "VS-542, VS-231",
          "print": "YES",
          "calibration": "N/A",
          "kiosk": "4.6",
          "updates": "05/01/2016"          
        }
      ];
      $(function () {
        $("#prelatTable").bootstrapTable({
          data: data,
          exportTypes: ['csv','excel','pdf']
        });
        $(".fixed-table-loading").hide();
      });