/* 
 * Efficient storage of attributes example
 */


const ATTR_1 = 1 << 0;
const ATTR_2 = 1 << 1;
const ATTR_3 = 1 << 2;
const ATTR_4 = 1 << 3;

function Item() {
  this.bitfield = 0;
}

Item.prototype = {
  setAttr_1:   function() { this.bitfield |= ATTR_1; }
  unsetAttr_1: function() { this.bitfield &= ATTR_1; }
  hasAttr_1:   function() { return (this.bitfield & ATTR_1) !== 0; }
};

