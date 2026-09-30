const nav=document.getElementById("nav");
const toggle=document.getElementById("menuToggle");
toggle.addEventListener("click",()=>{nav.classList.toggle("open");toggle.textContent=nav.classList.contains("open")?"×":"☰"});
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");toggle.textContent="☰"}));

const dateInput=document.getElementById("guestDate");
const today=new Date();
const localDate=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().split("T")[0];
dateInput.min=localDate;

document.getElementById("reservationForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  const name=document.getElementById("guestName").value.trim();
  const guests=document.getElementById("guestCount").value;
  const date=document.getElementById("guestDate").value;
  const time=document.getElementById("guestTime").value;
  const note=document.getElementById("guestNote").value.trim() || "No special request";
  const msg=`Hello The Irish Courtyard,%0A%0AI would like to request a table reservation.%0A%0AName: ${encodeURIComponent(name)}%0AGuests: ${encodeURIComponent(guests)}%0ADate: ${encodeURIComponent(date)}%0ATime: ${encodeURIComponent(time)}%0ASpecial request: ${encodeURIComponent(note)}%0A%0APlease confirm availability.`;
  window.open(`https://wa.me/919929590008?text=${msg}`,"_blank");
});

document.getElementById("year").textContent=new Date().getFullYear();
