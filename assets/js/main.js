function navMenuToggle() {
    var hamburger = document.getElementById("hamburger");
    var menu = document.getElementsByClassName("hbg-menu")[0];
    hamburger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
}




// Blog Search - GhostContentAPI
// Copyright (c) 2021 by dbauzus-glx (https://codepen.io/dbauszus-glx/pen/oNNVMxx)
/*
let ghostAPI = new GhostContentAPI({
    url: "http://site.url",
    key: "ContentAPIkey",
    version: "v3"
});

ghostAPI.posts
    .browse({
        limit: "all",
        fields: ["title", "html", "url"]
    })
    .then(data => initSearch(data))
    .catch(err => {
        console.error(err);
    });

function initSearch(data) {
    const input_drop = document.getElementById("search");
    input_drop.querySelector("input").addEventListener("keyup", async e => {
        input_drop.classList.remove("active");

        input_drop.querySelector("ul").innerHTML = "";

        const list = data
            .map(record => {
                var regex = new RegExp(
                    `(${e.target.value
              .split(" ")
              .map(term => `(${term})`)
              .join("|")})`,
                    "gim"
                );

                record.counts = 0;

                record.html.replace(regex, function (_, matched) {
                    matched = matched.toLowerCase();
                    record.counts++;
                });

                return record;
            })
            .filter(record => record.counts > 0)
            .sort((a, b) => {
                if (a.counts > b.counts) {
                    return -1;
                }
                if (a.counts < b.counts) {
                    return 1;
                }
                return 0;
            });

        const items = list.slice(0, 5);

        items.forEach(async item => {
            const li = document.createElement("li");

            li.innerHTML = `<a href="${item.url}" target="_blank">${item.title}</a>`;

            input_drop.querySelector("ul").appendChild(li);
        });

        setTimeout(() => {
            if (!input_drop.querySelector("input").value.length) {
                input_drop.classList.remove("active");
                input_drop.querySelector("ul").innerHTML = "";
            }
        }, 500);

        input_drop.classList.add("active");
    });
}

*/