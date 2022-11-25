import toastr from 'toastr';

const toastTopRight = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: 'toast-top-center',
  preventDuplicates: false,
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '3000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'slideDown',
  hideMethod: 'slideUp',
};

export default function showToast(type, message) {
  toastr.options = toastTopRight;
  if (type === 'success') return toastr.success(message);
  if (type === 'error') return toastr.error(message);
  return false;
}
