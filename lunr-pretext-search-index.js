var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-pol_cord",
  "level": "1",
  "url": "sec-pol_cord.html",
  "type": "Section",
  "number": "1.1",
  "title": "Polar Coordinates",
  "body": " Polar Coordinates    Here,    and Now  is perpendicular on   Therefore, we call   Also,   and,   Now,     Again,    "
},
{
  "id": "sec-kepI_law",
  "level": "1",
  "url": "sec-kepI_law.html",
  "type": "Section",
  "number": "1.2",
  "title": "Derivation of Kepler’s I Law",
  "body": " Derivation of Kepler's I Law     From Newton's Law of Gravitation and Newton's II law of motion.    Using   From principle of conservation of angular momentum: using and and  For convenience let's say Also to solve we need to change the variable to its inverse, and then change the variable to . This mathematical trick was adopted by Bernaulli to solve differential equation of variable coefficient such as here . In  as power of   Hence, differentiate with respect to   from , and , we have Differentiate w.r. t. again, we get -    From   assume  Again say,  This is homogeneous second order linear differential equation with constant coefficient. The solution of which can be given as where is an arbitrary constant whose value can be determined by initial condition. There are other possible solution to this equation as well such as or simply     The is equation of conic section, where represents circle, represents ellipse, is parabola, and represents hyperbola. In  and   If is an equation of ellipse then So let's prove it.   In ellipse semi-major axis is the arithmatic mean of and . At and from . also semi-minor axis is a geometric mean of and .         Total Energy of Orbit  Planetory orbits are closed so the total energy of orbit must be negative. Hence total energy, along the orbit. Here  using and . at perihelion position. you may try from apehelion position energy.     This is quadratic equation in (1+e). Here  Solving this equation, we get Hence, E is negative for    "
},
{
  "id": "sec-kepI_law-2-7",
  "level": "2",
  "url": "sec-kepI_law.html#sec-kepI_law-2-7",
  "type": "Proof",
  "number": "1",
  "title": "",
  "body": " In ellipse semi-major axis is the arithmatic mean of and . At and from . also semi-minor axis is a geometric mean of and .      "
},
{
  "id": "sec-kepI_law-3",
  "level": "2",
  "url": "sec-kepI_law.html#sec-kepI_law-3",
  "type": "Remark",
  "number": "1.2.1",
  "title": "Total Energy of Orbit.",
  "body": " Total Energy of Orbit  Planetory orbits are closed so the total energy of orbit must be negative. Hence total energy, along the orbit. Here  using and . at perihelion position. you may try from apehelion position energy.     This is quadratic equation in (1+e). Here  Solving this equation, we get Hence, E is negative for   "
},
{
  "id": "sec-kepII_law",
  "level": "1",
  "url": "sec-kepII_law.html",
  "type": "Section",
  "number": "1.3",
  "title": "Derivation of Kepler’s II Law",
  "body": " Derivation of Kepler's II Law    The small area of a given triangle   Proof of area of a triangle    From a given triangle Also, Therefore, from and , we have - Hence, and  using or, .   But from angular momentum, we have Therefore can be written as and by using and , also . Again, by using or . Therefore we can say That is areal velocity of planet is constant.  "
},
{
  "id": "sec-kepII_law-3-2",
  "level": "2",
  "url": "sec-kepII_law.html#sec-kepII_law-3-2",
  "type": "Remark",
  "number": "1.3.1",
  "title": "Proof of area of a triangle.",
  "body": " Proof of area of a triangle    From a given triangle Also, Therefore, from and , we have - Hence, and  using or, .  "
},
{
  "id": "sec-kepIII_law",
  "level": "1",
  "url": "sec-kepIII_law.html",
  "type": "Section",
  "number": "1.4",
  "title": "Derivation of Kepler’s III Law",
  "body": " Derivation of Kepler's III Law  The total area of an ellipse is given by Where a and b are semi-major and semi-mionor axes, respectively. Also from , we have - Since the direction of areal velocity is same as direction of angular momentum. using .  using  on using     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
