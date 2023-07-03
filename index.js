function fromJSON(proto, json) {
  const res = Object.create(proto, JSON.parse(json));
  return res;
  // throw new Error('Not implemented');
}

const Circle = function Circle(radius) {
  this.radius = radius;
};

Circle.prototype.getCircumference = function getCircumference() {
  return 2 * Math.PI * this.radius;
};

const r = fromJSON(Circle.prototype, '{"radius":10}');

console.log(r);
