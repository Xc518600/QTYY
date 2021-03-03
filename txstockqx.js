if ($.isNode()) {
  Object.keys(userheaderVal).forEach((item) => {
    if (userheaderVal[item]) {
      userheaderArr.push(cashheaderVal[item])
    }
  });
  Object.keys(userkeyVal).forEach((item) => {
    if (userkeyVal[item]) {
      userkeyArr.push(userkeyVal[item])
    }
  });
  Object.keys(cashheaderVal).forEach((item) => {
    if (cashheaderVal[item]) {
      cashheaderArr.push(cashheaderVal[item])
    }
  });
  Object.keys(signheaderVal).forEach((item) => {
    if (signheaderVal[item]) {
      signheaderArr.push(signheaderVal[item])
    }
  });
  Object.keys(signkeyVal).forEach((item) => {
    if (signkeyVal[item]) {
      signkeyArr.push(signkeyVal[item])
    }
  });
  Object.keys(taskheaderVal).forEach((item) => {
    if (taskheaderVal[item]) {
      taskheaderArr.push(taskheaderVal[item])
    }
  });
  Object.keys(taskkeyVal).forEach((item) => {
    if (taskkeyVal[item]) {
      taskkeyArr.push(taskkeyVal[item])
    }
  });
  Object.keys(wxtaskkeyVal).forEach((item) => {
    if (wxtaskkeyVal[item]) {
      wxtaskkeyArr.push(wxtaskkeyVal[item])
    }
  });


} else {
  userheaderArr.push($.getdata('userheader'));
  userkeyArr.push($.getdata('userkey'));
  cashheaderArr.push($.getdata('cashheader'));
  signheaderArr.push($.getdata('signheader'));
  signkeyArr.push($.getdata('signkey'));
  taskheaderArr.push($.getdata('taskheader'));
  taskkeyArr.push($.getdata('taskkey'));
  wxtaskkeyArr.push($.getdata('wxtaskkey'));
}
