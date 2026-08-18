const estilos = {
  linkPrincipal:
    "font-mono text-black font-medium text-xl p-3 m-3 min-w-80 bg-emerald-600 border-black border-2 rounded-full shadow-[4px_4px_0px_0px_#000]  hover:bg-green-300 hover:text-black hover:shadow-[4px_4px_0px_0px_#000] text-center",
  
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-style]").forEach(elemento => {
    const nomeDoEstilo = elemento.getAttribute("data-style");
    if (estilos[nomeDoEstilo]) {
      elemento.className = estilos[nomeDoEstilo];
    }
  });
});