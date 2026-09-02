const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const products = document.getElementById("products");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let q = input.value.trim();

    if (!q) {
        message.textContent = "Enter product name";
        return;
    }

    message.textContent = "Loading...";

    try {
        let res = await fetch("https://dummyjson.com/products/search?q=" + q);
        let data = await res.json();

        let result = data.products
            .filter(p => p.title.toLowerCase().includes(q.toLowerCase()))
            .map(p => `
                <div class="product">
                    <img src="${p.thumbnail}">
                    <h3>${p.title}</h3>
                    <p>$${p.price}</p>
                </div>
            `);

        products.innerHTML = result.join("");
        message.textContent = result.length ? "" : "No products found";

    } catch {
        message.textContent = "Error!";
    }
});