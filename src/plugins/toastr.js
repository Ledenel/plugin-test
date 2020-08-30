import toastr from "toastr";
import "toastr/build/toastr.css";

toastr.options.closeButton = true;

const Toastr = {
  install: function (Vue, options) {
    Vue.toastr = toastr;
    Object.defineProperties(Vue.prototype, {
      toastr: {
        get() {
          return toastr;
        },
      },
      $toastr: {
        get() {
          return toastr;
        },
      },
    });
  },
};

export default Toastr;
