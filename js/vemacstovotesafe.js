      var data = [
        {
          "site": "ED Site 3",
          "voter": "2",
          "absentee": "1000",
          "pollplace": "5% (50)",
          "ballots": "0% (0)",
          "worker": "10% (100)",
          "precinct": "0% (0)",
          "totals": "0% (0)"
        },
        {
          "site": "ED Site 2",
          "voter": "2",
          "absentee": "1000",
          "pollplace": "5% (50)",
          "ballots": "0% (0)",
          "worker": "10% (100)",
          "precinct": "0% (0)",
          "totals": "0% (0)"
        },
        {
          "site": "ED Site 1",
          "voter": "2",
          "absentee": "1000",
          "pollplace": "5% (50)",
          "ballots": "0% (0)",
          "worker": "10% (100)",
          "precinct": "0% (0)",
          "totals": "0% (0)"
        }
      ];
      $(function () {
        $("#updatesTable").bootstrapTable({
          data: data,
          exportTypes: ['csv','excel','pdf']
        });
        $(".fixed-table-loading").hide();
        $(".fixed-table-toolbar").addClass("pull-left");
      });
      function exportTableData() {
        $('#updatesTable').tableExport({type:'csv'});
      }