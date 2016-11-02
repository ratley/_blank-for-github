
  $.each($('#readme a'), function(k,v) {
    if(!$(v).attr('href').includes('#')){
      $(v).attr('target', '_blank')
    }
  })
