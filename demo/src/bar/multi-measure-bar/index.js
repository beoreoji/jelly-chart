jelly.bar().container('#jelly-container')
  .data([
    {category:'AAA', x: 1000, y: 10},{category:'AAA', x: 2000, y: 20},
    {category:'AAA', x: 3000, y: 30},{category:'AAA', x: 4000, y: 40},
    {category:'AAA', x: 1000, y: 50},{category:'AAA', x: 2000, y: 30},
    {category:'AAA', x: 3000, y: 40},{category:'AAA', x: 4000, y: 100},
    {category:'BBB', x: 1000, y: 80},{category:'BBB', x: 2000, y: 60},
    {category:'BBB', x: 3000, y: 50},{category:'BBB', x: 4000, y: 70},
    {category:'BBB', x: 1000, y: 20},{category:'BBB', x: 2000, y: 60},
    {category:'BBB', x: 3000, y: 50},{category:'BBB', x: 4000, y: 60}
  ])
  .measures([
    {field:'x', op:'mean'}, 
    {field:'y', op:'sum'}
  ])
  .axis('x').axis('y')
  .render();