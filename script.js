window.onload = () => {
  
  const item = document.querySelector('.item');
  const input = document.querySelector('.input');
  const inputRange = document.querySelectorAll('.input-range');
  inputRange.forEach(input => input.addEventListener('input', setValue));
  
  function setValue() {
    const range1 = document.querySelector('#range1').value;
    const range2 = document.querySelector('#range2').value;
    const range3 = document.querySelector('#range3').value;
    const range4 = document.querySelector('#range4').value;
    
    item.style.borderRadius = putValue(range1, range2, range3, range4);
    input.value = putValue(range1, range2, range3, range4, true);
  }
  
  function putValue(range1, range2, range3, range4, show = false) {
    return `${(show == true) ? 'border-radius:' : ''} ${range1}% ${100 - range1}% ${100 - range2}% ${range2}% / ${100 - range3}% ${range3}% ${range4}% ${100 - range4}%`;
  }
  
  function sweetalert(text) {
    return swal.fire ({
      icon: 'success',
      title: 'success',
      text: text
    });
  }
  
  function copy() {
    const copyButton = document.querySelector('.copy');
    copyButton.addEventListener('click', () => {
      input.select();
      document.execCommand("copy");
      sweetalert('code has been copied!');
    })
  }
  
  copy();
  
}
