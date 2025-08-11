export default function totalFixed (){
 const total = document.getElementById('total');
 const boxTotal = document.getElementById('total-box')
 

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      total.style.position = 'absolute';
      total.style.top = '-5px';
    } else {
      total.style.position = 'fixed';
      total.style.top = '1px';
      total.style.right = '1px';
    }
  });
}, { threshold: 0 });

observer.observe(boxTotal);
};
