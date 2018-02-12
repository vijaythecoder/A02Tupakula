
$(document).ready(function () {
    $('#sandbox-container .input-daterange').datepicker();
    $('.calculate').on('click', function () {
      let finalPrice = App.calculatePrice($('.start-date').val(), $('.end-date').val(), $('.rooms').val(), false)
      $('.final-price').html('$' + finalPrice)
    })
  })

  var App = {
    calculatePrice: function (startDate, endDate, rooms, test) {
      if (startDate === '') {
        if (test) {
          throw Error('Start Date is required');
        }
        else {
          alert('Start Date is required');
          return;
        }
      }
      
      if (endDate === '') {
        if (test) {
          throw Error('End Date is required');
        }
        else {
          alert('End Date is required');
          return;
        }
      }
      var date1 = new Date(startDate);
      var date2 = new Date(endDate);
      var timeDiff = Math.abs(date2.getTime() - date1.getTime());
      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
      
      if (diffDays === 0) {
        if (test) {
          throw Error('Start date and End date cannot be equal');
        }
        else {
          alert('Start date and End date cannot be equal');
          return;
        }
      }
      $('.rooms-selected').html(rooms)
      $('.days-selected').html(diffDays)
      return rooms * diffDays * 120
    }};
