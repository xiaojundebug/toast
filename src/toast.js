import './toast.css';

export default (text, duration = 3000) => {
  try {
    document.body.removeChild(document.querySelector('div.toast'));
  } catch (e) {}

  let toast = document.createElement('DIV');
  let textNode = document.createTextNode(text);

  toast.classList.add('toast');
  toast.appendChild(textNode);

  toast.style.animationDuration = duration / 1000 + 's';
  toast.style['z-index'] = 999;

  document.body.appendChild(toast);

  toast.addEventListener('animationend', function() {
    try {
      document.body.removeChild(toast);
    } catch (e) {}
  });
};
