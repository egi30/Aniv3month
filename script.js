let chimeEnabled = true;

function openLetter(){
    const envelope = document.querySelector(".envelope");
    envelope.classList.toggle("open");
    if (envelope.classList.contains("open")) {
        burstHeartBurst();
        confettiBurst(28);
        if (chimeEnabled) playChime();
    }
}

function burstHeartBurst(){
    for (let i = 0; i < 7; i++) {
        const heart = document.createElement("div");
        const icons = ["💖","💕","💘","💝","💞"];
        const colors = ["#ff5cbf","#ff9cdd","#ffd2f0","#ff7cca","#ffb8e5"];
        heart.classList.add("heart");
        heart.textContent = icons[Math.floor(Math.random() * icons.length)];
        heart.style.left = 48 + Math.random() * 40 - 20 + "%";
        heart.style.top = 36 + Math.random() * 25 - 10 + "%";
        heart.style.fontSize = Math.random() * 16 + 18 + "px";
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.animationDuration = Math.random() * 2 + 4 + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 7000);
    }
}

function confettiBurst(count){
    const colors = ["#ff6bb5","#ffd2f0","#ffb3da","#ffd699","#fff099","#c7a0ff"];
    for (let i = 0; i < count; i++){
        const el = document.createElement('div');
        el.className = 'confetti-piece';
        el.style.background = colors[Math.floor(Math.random()*colors.length)];
        el.style.left = (50 + (Math.random()*80-40)) + 'vw';
        el.style.top = (30 + Math.random()*20) + 'vh';
        const size = Math.random()*10+6;
        el.style.width = size+'px';
        el.style.height = (size*1.2)+'px';
        el.style.opacity = 1;
        const delay = Math.random()*0.15;
        el.style.transition = `transform 6s linear ${delay}s, opacity 6s linear ${delay}s`;
        document.body.appendChild(el);
        // trigger animation using keyframes via setTimeout
        setTimeout(()=>{
            el.style.transform = `translateY(110vh) rotate(${Math.random()*720}deg)`;
            el.style.opacity = 0;
        }, 30);
        setTimeout(()=>el.remove(), 6800);
    }
}

function playChime(){
    try{
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.type = 'sine';
        o.frequency.value = 880;
        o.connect(g);
        g.connect(ctx.destination);
        g.gain.setValueAtTime(0, ctx.currentTime);
        g.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.02);
        o.start();
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.9);
        o.stop(ctx.currentTime + 1);
    }catch(e){console.warn('Audio unavailable', e)}
}

function createHeart(){
    const heart = document.createElement("div");
    const icons = ["💖","💕","🌟","💘","💝"];
    const colors = ["#ff81c0","#ffd5ea","#ff99d6","#ff6ad5","#f9d4ff"];
    heart.classList.add("heart");
    heart.textContent = icons[Math.floor(Math.random() * icons.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 24 + 16 + "px";
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.animationDuration = Math.random() * 3 + 5 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 9000);
}

function createSparkle(){
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    const size = Math.random() * 4 + 4;
    sparkle.style.width = size + "px";
    sparkle.style.height = size + "px";
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1800);
}

function createPetal(){
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = "-10px";
    const size = Math.random() * 8 + 8;
    petal.style.width = size + "px";
    petal.style.height = size + 1 + "px";
    petal.style.background = `rgba(255,255,255,${Math.random() * 0.35 + 0.45})`;
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 7000);
}

// Parallax background following pointer/touch
function setupParallax(){
    const bg = document.querySelector('.background');
    const hero = document.querySelector('.hero');
    if(!bg) return;
    function move(e){
        const x = (e.clientX || (e.touches && e.touches[0].clientX) || window.innerWidth/2) - window.innerWidth/2;
        const y = (e.clientY || (e.touches && e.touches[0].clientY) || window.innerHeight/2) - window.innerHeight/2;
        bg.style.transform = `translate(${x*0.02}px, ${y*0.02}px) rotate(${x*0.002}deg)`;
        if(hero) hero.style.transform = `translate(${x*0.01}px, ${y*0.01}px)`;
    }
    window.addEventListener('mousemove', move);
    window.addEventListener('touchmove', move, {passive:true});
}

document.addEventListener('DOMContentLoaded', ()=>{
    // controls
    const soundToggle = document.getElementById('soundToggle');
    const fsToggle = document.getElementById('fsToggle');
    soundToggle && soundToggle.addEventListener('click', ()=>{
        chimeEnabled = !chimeEnabled;
        soundToggle.textContent = chimeEnabled ? '🔔' : '🔕';
    });
    fsToggle && fsToggle.addEventListener('click', ()=>{
        if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
        else document.exitFullscreen?.();
    });

    setupParallax();
});

setInterval(createHeart, 260);
setInterval(createSparkle, 450);
setInterval(createPetal, 900);

// ============= FITUR ROMANTIS BARU =============

// Efek cinta yang lebih intens untuk romantis
function createRomanticHeart(){
    const heart = document.createElement("div");
    const icons = ["💖","💕","💘","💝","💞","🌹","💐"];
    const colors = ["#ff5cbf","#ff9cdd","#ffd2f0","#ff7cca","#ffb8e5","#ff6b9d"];
    heart.classList.add("heart");
    heart.textContent = icons[Math.floor(Math.random() * icons.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 28 + 18 + "px";
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.animationDuration = Math.random() * 3 + 6 + "s";
    heart.style.opacity = Math.random() * 0.3 + 0.7;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 9500);
}

// ============= SLIDESHOW FUNCTIONS =============
let currentSlideIndex = 1;
let slideAutoPlayTimeout;

function changeSlide(n){
    clearTimeout(slideAutoPlayTimeout);
    showSlide(currentSlideIndex += n);
    startSlideAutoPlay();
}

function currentSlide(n){
    clearTimeout(slideAutoPlayTimeout);
    showSlide(currentSlideIndex = n);
    startSlideAutoPlay();
}

function showSlide(n){
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    if(n > slides.length) currentSlideIndex = 1;
    if(n < 1) currentSlideIndex = slides.length;
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[currentSlideIndex - 1]?.classList.add('active');
    dots[currentSlideIndex - 1]?.classList.add('active');
}

function startSlideAutoPlay(){
    slideAutoPlayTimeout = setTimeout(() => {
        changeSlide(1);
    }, 5000);
}

// PWA registration
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js').catch(()=>{});
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', ()=>{
    setupParallax();
    
    // Initialize slideshow
    showSlide(currentSlideIndex);
    startSlideAutoPlay();
    
    // Initialize scroll buttons
    initScrollButtons();
});

// ============= SCROLL BUTTONS =============
function initScrollButtons(){
    const scrollUpBtn = document.getElementById('scrollUp');
    const scrollDownBtn = document.getElementById('scrollDown');
    
    if(scrollUpBtn) scrollUpBtn.addEventListener('click', ()=>{
        window.scrollBy({top: -300, behavior: 'smooth'});
    });
    
    if(scrollDownBtn) scrollDownBtn.addEventListener('click', ()=>{
        window.scrollBy({top: 300, behavior: 'smooth'});
    });
    
    // Show/hide buttons based on scroll position
    window.addEventListener('scroll', ()=>{
        const scrollTop = window.scrollY;
        
        if(scrollUpBtn){
            if(scrollTop > 300){
                scrollUpBtn.classList.add('show');
            } else {
                scrollUpBtn.classList.remove('show');
            }
        }
        
        if(scrollDownBtn){
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = window.innerHeight;
            
            if(scrollTop < scrollHeight - clientHeight - 300){
                scrollDownBtn.classList.add('show');
            } else {
                scrollDownBtn.classList.remove('show');
            }
        }
    });
}

// Tingkatkan frekuensi hati untuk efek yang lebih romantis
setInterval(createRomanticHeart, 300);

