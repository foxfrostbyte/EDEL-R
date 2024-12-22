// Viser "overlay" når meny-knapp blir trykket
document.querySelector(".enterNavigasjon").addEventListener("click", () => {
    document.querySelector(".navigasjon").style.display="flex";
});

// Fjerner "overlay" og går tilbake til hjemmeside
document.querySelector(".exitNavigasjon").addEventListener("click", () => {
   document.querySelector(".navigasjon").style.display="none";
});