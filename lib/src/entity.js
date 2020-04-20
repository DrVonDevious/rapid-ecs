
class Entity {

  constructor() {
    this.components = []
  };

  // Adds the referenced component to the entity's component array
  addComponent(component) {
    this.components.push(component);
  };

  // Returns true if a matching component is found
  hasComponent(component) {
    return this.components.find(c => c === component) ? true : false;
  };

  // Removes the referenced component from the entity
  removeComponent(component) {
    this.components = this.components.filter(c => c.id !== component.id);
  };

  // Returns the referenced component
  getComponent(component) {
    return this.components.find(c => c === component);
  };

};

export default Entity;
