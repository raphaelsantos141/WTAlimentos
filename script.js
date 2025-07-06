const products = [
        {
          id: 1,
          name: "<strong>Cód 758</strong> - Fritop Salgadinho Cebola e Salsa 24x50g cx c24",
          img: "/media/catalogo/758.png",
          categories: ["alimentos"],
        },
        {
          id: 2,
          name: "<strong>Cód 759</strong> - Fritop Salgadinho Presunto 24x50g cx c24",
          img: "/media/catalogo/759.png",
          categories: ["alimentos"],
        },
        {
          id: 3,
          name: "<strong>Cód 760</strong> - Fritop Salgadinho Queijo 24x50g cx c24",
          img: "/media/catalogo/760.png",
          categories: ["alimentos"],
        },
        {
            id: 4,
            name: "<strong>Cód 761</strong> - Fritop Salgadinho Churrasco 24x50g cx c24",
            img: "/media/catalogo/761.png",
            categories: ["alimentos"],
          },
          {
            id: 5,
            name: "<strong>Cód 3493</strong> - Fritop Salgadinho Requeijão 24x50g cx c24",
            img: "/media/catalogo/3493.png",
            categories: ["alimentos"],
          },
          {
            id: 6,
            name: "<strong>Cód 3494</strong> - Fritop Salgadinho Bacon 24x50g cx c24",
            img: "/media/catalogo/3494.png",
            categories: ["alimentos"],
          },
          {
            id: 7,
            name: "<strong>Cód 3496</strong> - SoftFix Gel S/ Alcool Azul 250g",
            img: "/media/catalogo/3496.png",
            categories: ["higiene"],
          },
          {
            id: 8,
            name: "<strong>Cód 3497</strong> - SoftFix Gel S/ Alcool Pt Incolor 230g",
            img: "/media/catalogo/3497.png",
            categories: ["higiene"],
          },
          {
            id: 9,
            name: "<strong>Cód 3498</strong> - SoftFix Gel S/ Alcool Pt Azul 230g",
            img: "/media/catalogo/3498.png",
            categories: ["higiene"],
          },
          {
            id: 10,
            name: "<strong>Cód 3499</strong> - SoftFix Sabonete Liquido Erva Doce 500ml",
            img: "/media/catalogo/3499.png",
            categories: ["higiene"],
          },
          {
            id: 11,
            name: "<strong>Cód 3500</strong> - SoftFix Sabonete Liquido Pitanga 500ml",
            img: "/media/catalogo/3500.png",
            categories: ["higiene"],
          },
          {
            id: 12,
            name: "<strong>Cód 3501</strong> - SoftFix Sabonete Liquido Lavanda 500ml",
            img: "/media/catalogo/3501.png",
            categories: ["higiene"],
          },
          {
            id: 13,
            name: "<strong>Cód 1711</strong> - Água Desm. 12x1L",
            img: "/media/catalogo/1711.png",
            categories: ["automotivo"],
          },
          {
            id: 14,
            name: "<strong>Cód 1712</strong> - A. Super Rad 12x500ml",
            img: "/media/catalogo/1712.png",
            categories: ["automotivo"],
          },
          {
            id: 15,
            name: "<strong>Cód 2634</strong> - Oleo Protection 20W50 1L c/12",
            img: "/media/catalogo/2634.png",
            categories: ["automotivo"],
          },
          {
            id: 16,
            name: "<strong>Cód 2635</strong> - Oleo Moto 4T 1L c/12",
            img: "/media/catalogo/2635.png",
            categories: ["automotivo"],
          },
          {
            id: 17,
            name: "<strong>Cód 2993</strong> - Oleo Syntetich 5W30 1L c/12",
            img: "/media/catalogo/2993.png",
            categories: ["automotivo"],
          },
          {
            id: 18,
            name: "<strong>Cód 2996</strong> - Oleo ATF Dexron III 1L c/12",
            img: "/media/catalogo/2996.png",
            categories: ["automotivo"],
          },
          {
            id: 19,
            name: "<strong>Cód 246</strong> - Café 50x50ml",
            img: "/media/catalogo/246.png",
            categories: ["embalagem"],
          },
          {
            id: 20,
            name: "<strong>Cód 328</strong> - Àgua 25x180ml",
            img: "/media/catalogo/328.png",
            categories: ["embalagem"],
          },
          {
            id: 21,
            name: "<strong>Cód 1772</strong> - Fundo 50x15cm",
            img: "/media/catalogo/1772.png",
            categories: ["embalagem"],
          },
          {
            id: 22,
            name: "<strong>Cód 2219</strong> - Sobremesa 100x15cm",
            img: "/media/catalogo/2219.png",
            categories: ["embalagem"],
          },
        // Adicione mais itens aqui...
      ];
      
      // Configurações da página
      const itemsPerPage = 21;
      let currentPage = 1;
      let currentFilter = "all";
      
      // Elementos DOM
      const gallery = document.getElementById("gallery");
      const pagination = document.getElementById("pagination");
      const filterSelect = document.getElementById("filter");
      
      // Filtra produtos pela categoria
      function filterProducts() {
        if (currentFilter === "all") return products;
        return products.filter((p) => p.categories.includes(currentFilter));
      }
      
      // Renderiza os cards da galeria
      function renderGallery() {
        const filtered = filterProducts();
        const start = (currentPage - 1) * itemsPerPage;
        const paginatedItems = filtered.slice(start, start + itemsPerPage);
      
        gallery.innerHTML = "";
      
        if (paginatedItems.length === 0) {
          gallery.innerHTML = `<p class="gallery-empty">Nenhum produto encontrado.</p>`;
          return;
        }
      
        paginatedItems.forEach((item) => {
          const card = document.createElement("div");
          card.className = "card";
      
          card.innerHTML = `
            <img src="${item.img}" alt="${item.name}" />
            <p>${item.name}</p>
          `;
      
          gallery.appendChild(card);
        });
      
        setupImageModal(); // Configura clique nas imagens
      }
      
      // Renderiza botões de paginação
      function renderPagination() {
        const filtered = filterProducts();
        const totalPages = Math.ceil(filtered.length / itemsPerPage);
      
        pagination.innerHTML = "";
      
        // Botão anterior
        const prevBtn = document.createElement("button");
        prevBtn.textContent = "«";
        prevBtn.disabled = currentPage === 1;
        prevBtn.onclick = () => {
          currentPage--;
          scrollToGallery();
          update();
        };
        pagination.appendChild(prevBtn);
      
        // Botões de página
        for (let i = 1; i <= totalPages; i++) {
          const btn = document.createElement("button");
          btn.textContent = i;
          btn.className = i === currentPage ? "active" : "";
          btn.onclick = () => {
            currentPage = i;
            scrollToGallery();
            update();
          };
          pagination.appendChild(btn);
        }
      
        // Botão próximo
        const nextBtn = document.createElement("button");
        nextBtn.textContent = "»";
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.onclick = () => {
          currentPage++;
          scrollToGallery();
          update();
        };
        pagination.appendChild(nextBtn);
      }
      
      // Atualiza galeria e paginação
      function update() {
        renderGallery();
        renderPagination();
      }
      
      // Scroll suave para o topo da galeria
      function scrollToGallery() {
        gallery.scrollIntoView({ behavior: "smooth" });
      }
      
      // Evento do filtro
      filterSelect.addEventListener("change", () => {
        currentFilter = filterSelect.value;
        currentPage = 1;
        update();
      });
      
      // Modal para imagem ampliada
      const modal = document.getElementById("imageModal");
      const modalImg = document.getElementById("modalImg");
      const captionText = document.getElementById("caption");
      const closeBtn = modal.querySelector(".close");
      
      // Abre modal com imagem clicada
      function openModal(imgElement) {
        modal.style.display = "block";
        modalImg.src = imgElement.src;
        captionText.textContent = imgElement.alt || "";
      }
      
      // Fecha modal ao clicar no X
      closeBtn.onclick = () => {
        modal.style.display = "none";
      };
      
      // Fecha modal clicando fora da imagem
      modal.onclick = (event) => {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      };
      
      // Configura evento de clique nas imagens
      function setupImageModal() {
        const imgs = document.querySelectorAll(".card img");
        imgs.forEach((img) => {
          img.style.cursor = "pointer";
          img.onclick = () => openModal(img);
        });
      }
      
      // Inicializa a página
      update();
      