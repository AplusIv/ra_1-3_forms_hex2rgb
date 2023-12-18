
const Check = ({value, refElement}) => {

  if (value.length >= 7) {
    const re = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i;

    if (re.test(value)) {
      const r = parseInt(value.slice(1, 3), 16);
      const g = parseInt(value.slice(3, 5), 16);
      const b = parseInt(value.slice(5, 7), 16);
      
      refElement.style.backgroundColor = value;
      return `rgb (${r}, ${g}, ${b})`;
    }
    return 'Ошибка!';
  }
  return '';
}

export default Check