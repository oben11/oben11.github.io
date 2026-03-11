// filters.js
document.addEventListener("DOMContentLoaded", () => {
  // Helper: normalize category strings for comparison
  const normalize = (str) =>
    String(str || "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .replace(/[^\w\s]/g, "") // remove punctuation like & , .
      .trim();

  // Find the nearest grid (menu-grid or products-grid) after the filter container
  function findGridFor(container) {
    // Check within same section's next siblings (this matches your structure)
    let section = container.closest("section");
    if (section) {
      let node = section.nextElementSibling;
      while (node) {
        if (
          node.querySelector &&
          (node.querySelector(".menu-grid") ||
            node.querySelector(".products-grid"))
        ) {
          return node.querySelector(".menu-grid, .products-grid");
        }
        node = node.nextElementSibling;
      }
      // fallback: maybe the grid is inside the same section
      if (section.querySelector(".menu-grid, .products-grid")) {
        return section.querySelector(".menu-grid, .products-grid");
      }
    }
    // last-resort fallback to any grid on the page
    return document.querySelector(".menu-grid, .products-grid");
  }

  // Show/hide helpers
  function showItem(el) {
    el.style.display = "";
    el.classList.remove("hidden");
    el.setAttribute("aria-hidden", "false");
  }
  function hideItem(el) {
    el.style.display = "none";
    el.classList.add("hidden");
    el.setAttribute("aria-hidden", "true");
  }

  // Main wireup for each filter container
  document.querySelectorAll(".filter-container").forEach((container) => {
    const grid = findGridFor(container);
    if (!grid) return; // nothing to filter

    // the card selector depends on page
    const itemSelector = ".menu-item, .product-card";
    const items = Array.from(grid.querySelectorAll(itemSelector));

    // Cache normalized category for each item for fast comparison
    const itemData = items.map((item) => {
      const dataCategory = item.getAttribute("data-category");
      const badge = item.querySelector(".category-badge");
      const categoryText = dataCategory || (badge ? badge.textContent : "");
      return {
        el: item,
        categoryRaw: categoryText,
        categoryNorm: normalize(categoryText),
      };
    });

    // Attach event handlers (use event delegation)
    container.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      applyFilter(btn);
    });

    // keyboard support: Enter/Space on focused button
    container.addEventListener("keydown", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        applyFilter(btn);
      }
    });

    function applyFilter(btn) {
      const filterText = btn.textContent || btn.innerText || "";
      const filterNorm = normalize(filterText);

      // update active class
      container
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Filter items
      if (filterNorm === "all" || filterNorm === "") {
        itemData.forEach(({ el }) => showItem(el));
      } else {
        itemData.forEach(({ el, categoryNorm }) => {
          // match if normalized category contains the filter (gives some flexibility)
          if (categoryNorm && categoryNorm.includes(filterNorm)) {
            showItem(el);
          } else {
            hideItem(el);
          }
        });
      }

      // Optional: update aria-live region or visually show no-results state
      const noResultsId = container.getAttribute("data-no-results-id");
      if (noResultsId) {
        const nr = document.getElementById(noResultsId);
        if (nr) {
          const visibleCount = itemData.filter(
            (d) => d.el.style.display !== "none",
          ).length;
          nr.textContent =
            visibleCount === 0 ? "No results for that filter." : "";
        }
      }
    }

    // Initialize: if there's a button with .active already, apply it; otherwise show all.
    const initBtn = container.querySelector(".filter-btn.active");
    if (initBtn) applyFilter(initBtn);
    else itemData.forEach(({ el }) => showItem(el));
  });
});
