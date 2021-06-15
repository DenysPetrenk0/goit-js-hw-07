const ref = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};

ref.input.addEventListener('input', evant => ref.span.style.fontSize = ref.input.value + 'px');