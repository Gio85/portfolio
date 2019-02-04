$(() => {

  const $navigationList = $('.navigation__item');
  const $navToggle = $('#navi-toggle');
  
  $navigationList.on('click', () => {
    $navToggle.prop('checked', false);
  });
  
});
