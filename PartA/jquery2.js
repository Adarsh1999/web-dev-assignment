
    // console.log(uname);
    uname = window.localStorage.getItem("name");
    // uname = JSON.parse(localStorage.getItem('defaultReportData'));
    // console.log(uname);
    $("#header").append(" " + uname);
    $("#firstNumber").keyup((e) => {
      if ($.isNumeric($("#firstNumber").val()) == false) {
        alert("Please enter a number");
        $("#firstNumber").val("");
      }
    });
    $("#secondNumber").keyup((e) => {
      if ($.isNumeric($("#secondNumber").val()) == false) {
        alert("Please enter a number");
        $("#secondNumber").val("");
      }
    });
    $("#add").click((e) => {
      if ($("#firstNumber").val() == "" || $("#secondNumber").val() == "") {
        alert("Please enter both numbers");
        return;
      }
      let num1 = parseInt($("#firstNumber").val());
      let num2 = parseInt($("#secondNumber").val());
      let result = num1 + num2;
      $("#result").val(result);
    });
    $("#sub").click((e) => {
      if ($("#firstNumber").val() == "" || $("#secondNumber").val() == "") {
        alert("Please enter both numbers");
        return;
      }
      let num1 = parseInt($("#firstNumber").val());
      let num2 = parseInt($("#secondNumber").val());
      let result = num1 - num2;
      $("#result").val(result);
    });
    $("#mult").click((e) => {
      if ($("#firstNumber").val() == "" || $("#secondNumber").val() == "") {
        alert("Please enter both numbers");
        return;
      }
      let num1 = parseInt($("#firstNumber").val());
      let num2 = parseInt($("#secondNumber").val());
      let result = num1 * num2;
      $("#result").val(result);
    });
    $("#divi").click((e) => {
      if ($("#firstNumber").val() == "" || $("#firstNumber").val() == "") {
        alert("Please enter both numbers");
        return;
      }
      let num1 = parseInt($("#firstNumber").val());
      let num2 = parseInt($("#secondNumber").val());
      let result = num1 / num2;
      $("#result").val(result);
    });
  