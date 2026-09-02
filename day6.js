async function getData() {
    try {
        let res = await fetch("https://dummyjson.com/products");
        let data = await res.json();

        document.getElementById("result").innerHTML =
            data.products.map(p => p.title).join("<br>");
    } catch {
        document.getElementById("result").textContent = "Error!";
    }
}

getData();