      var data = [
        {
          "site": "ED Site 3",
          "closed": "Yes",
          "stob": "7:00 PM",
          "payroll": "7:00 PM",
          "closedTime": "6:55 PM"
        },
        {
          "site": "ED Site 2",
          "closed": "Yes",
          "stob": "7:00 PM",
          "payroll": "7:00 PM",
          "closedTime": "6:55 PM"
        },
        {
          "site": "ED Site 1",
          "closed": "Yes",
          "stob": "7:00 PM",
          "payroll": "7:00 PM",
          "closedTime": "6:55 PM"          
        }
      ];
      $(function () {
        $("#closedPollsTable").bootstrapTable({
          data: data,
          exportTypes: ['csv','excel','pdf']
        });
        $(".fixed-table-loading").hide();
        $(".fixed-table-toolbar").addClass("pull-left");
      });
