export default function loginAnimation() {
                // css 애니메이션 관련 js
                window.addEventListener('load', function () {
                    const cont = document.querySelector('.cont');
                    cont.classList.remove('no-animation');
                });
                
                document.querySelector('.img__btn').addEventListener('click', function() {
                    document.querySelector('.cont').classList.toggle('s--signup');
                });
            }