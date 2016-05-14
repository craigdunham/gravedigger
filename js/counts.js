      var data = [
        {
          "site": "ED Site 3",
          "systems": "2",
          "votes": "1000",
          "provisionals": "5% (50)",
          "suspense": "0% (0)",
          "inactive": "10% (100)",
          "lang": "0% (0)",
          "similar": "0% (0)",
          "sigs": "1000",
          "lhMsgs": "20",
          "ballots": "200 (20%)",
          "elec_paper": "8:2"
        },
        {
          "site": "ED Site 2",
          "systems": "2",
          "votes": "1000",
          "provisionals": "5% (50)",
          "suspense": "0% (0)",
          "inactive": "10% (100)",
          "lang": "0% (0)",
          "similar": "0% (0)",
          "sigs": "1000",
          "lhMsgs": "20",
          "ballots": "200 (20%)",
          "elec_paper": "8:2"
        },
        {
          "site": "ED Site 1",
          "systems": "2",
          "votes": "1000",
          "provisionals": "5% (50)",
          "suspense": "0% (0)",
          "inactive": "10% (100)",
          "lang": "0% (0)",
          "similar": "0% (0)",
          "sigs": "1000",
          "lhMsgs": "20",
          "ballots": "200 (20%)",
          "elec_paper": "8:2"
        }
      ];
      $(function () {
        $("#countsTable").bootstrapTable({
          data: data,
          exportTypes: ['csv','excel','pdf']
        });
        $(".fixed-table-loading").hide();
        $(".fixed-table-toolbar").addClass("pull-left");
     });