// Sticks element in viewport for screen width larger than provided

var StickyContainer = function(){
  var DOM = {};
  var options = {};
  var isStuck = false;

  function _cacheDom(element) {
    DOM.$el = $(element);
  }

  function _bindEvents(element) {
    $(window).resize(function(){
      _stickReleaseContainer();
    });
  }

  function _stickReleaseContainer(){
    if (_checkNeedsSticky()){
      DOM.$el.stick_in_parent();
    } else {
      // DOM.$el.trigger("sticky_kit:detach");
    }
  }

  function _checkNeedsSticky(){
    if (Helpers.getViewportSize().width >= options.viewportThreshold){
      return true;
    }
    return false;
  }

  function _render(){
    _stickReleaseContainer();
  }

  function init(element) {
    if (element) {
      options = $.extend(options, $(element).data());
      _cacheDom(element);
      _bindEvents();
      _render();
    }
  }

  return {
    init: init
  };
};
