// 3자리 단위마다 콤마 생성
  function addCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // 모든 콤마 제거
  // function removeCommas(x) {
  //   if (!x || x.length == 0) return "";
  //   else return x.split(",").join("");
  // }

  // 사원수 숫자 입력시 콤마(,) 추가
  $("#numberCommaCheckOne").on("keyup", function () {
    $(this).val(
      addCommas(
        $(this)
          .val()
          .replace(/[^0-9]/g, "")
      )
    );
  });

  // 매출액 숫자 입력시 콤마(,) 추가
  $("#numberCommaCheckTwo").on("keyup", function () {
    $(this).val(
      addCommas(
        $(this)
          .val()
          .replace(/[^0-9]/g, "")
      )
    );
  });

  // $("#numberCommaCheckOne")
  //   .on("focus", function () {
  //     let x = $(this).val();
  //     x = removeCommas(x);
  //     $(this).val(x);
  //   })
  //   .on("focusout", function () {
  //     let x = $(this).val();
  //     if (x && x.length > 0) {
  //       if (!$.isNumeric(x)) {
  //         x = x.replace(/[^0-9]/g, "");
  //       }
  //       x = addCommas(x);
  //       $(this).val(x);
  //     }
  //   })
  //   .on("keyup", function () {
  //     $(this).val(
  //       $(this)
  //         .val()
  //         .replace(/[^0-9]/g, "")
  //     );
  //   });
