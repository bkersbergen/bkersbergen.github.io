// debug-tree.js
fetch("pruned_labeled_stamboom.json")
  .then(response => response.json())
  .then(data => {
    const svg = d3.select("svg"),
          width = +svg.attr("width"),
          height = +svg.attr("height"),
          radius = width / 2;

    const tree = d3.tree()
        .size([2 * Math.PI, radius - 150])
        .separation((a, b) => (a.parent == b.parent ? 1 : 2) / a.depth);

    const root = d3.hierarchy(data, d => d.advisor_trees);
    tree(root);

    const g = svg.append("g")
        .attr("transform", `translate(${width / 2},${height / 2})`);

    const link = g.append("g")
      .selectAll("path")
      .data(root.links())
      .join("path")
        .attr("fill", "none")
        .attr("stroke", "#aaa")
        .attr("d", d3.linkRadial()
            .angle(d => d.x)
            .radius(d => d.y));

    const node = g.append("g")
      .selectAll("g")
      .data(root.descendants())
      .join("g")
        .attr("transform", d => `
          rotate(${d.x * 180 / Math.PI - 90})
          translate(${d.y},0)
        `);

    node.append("circle")
        .attr("r", 3)
        .attr("fill", d => d.data.label.includes("⭐") ? "#f90" : "#555");

    node.append("text")
        .attr("dy", "0.31em")
        .attr("x", d => d.x < Math.PI === !d.children ? 6 : -6)
        .attr("text-anchor", d => d.x < Math.PI === !d.children ? "start" : "end")
        .attr("transform", d => d.x >= Math.PI ? "rotate(180)" : null)
        .text(d => d.data.label)
        .style("font-size", "12px")
        .clone(true).lower()
        .attr("stroke", "white");
  });