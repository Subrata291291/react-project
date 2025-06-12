import { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel';

export default function useGlobalScripts() {
  useEffect(() => {
    // Modal auto open (Bootstrap required for this)
    setTimeout(() => {
      if ($('#myModal').modal) {
        $('#myModal').modal('show');
      }
    }, 10000);

    // Navbar toggle
    const navbarIcon = document.querySelector('.navbar_icon');
    const toggleNav = () => {
      document.body.classList.toggle('nav-open');
    };
    navbarIcon?.addEventListener('click', toggleNav);

    // Header scroll shrink
    const handleScroll = () => {
      $(".header_area").toggleClass("shrink", $(document).scrollTop() > 270);
    };
    $(window).on('scroll', handleScroll);

    // Tabs
    const tabClickHandler = function () {
      const tab_id = $(this).attr('data-tab');
      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');
      $(this).addClass('current');
      $("#" + tab_id).addClass('current');
    };
    $('ul.tabs li').on('click', tabClickHandler);


    // Cleanup on unmount
    return () => {
      $(window).off('scroll', handleScroll);
      navbarIcon?.removeEventListener('click', toggleNav);
      $('ul.tabs li').off('click', tabClickHandler);
    };
  }, []);
}
