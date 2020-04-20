import Entity from './src/entity.js';
import Component from './src/component.js';
import System from './src/system.js';

class _ {

  // Constructs our ECS with arrays so that we will have access to all of the
  // entities and systems that are added to it
  constructor() {
    this.entities = [];
    this.systems = [];
  };

  // Creates a unique entity that can have any components added to it that
  // may be needed
  createEntity() {
    var entity_id = Math.floor((Date.now() * (Math.random() * 100)));
    var entity = new Entity();
    entity["id"] = entity_id

    this.entities.push(entity);

    return entity;
  };

  createComponent(object) {
    var component = new Component(object);
    return component
  };

  deleteEntity(entity) {
    this.entities = this.entities.filter(i => i.id !== entity.id );
    return this.entities
  };

  getEntity(entity) {
    var found = this.entities.find(i => i.id === entity.id );
    return found;
  };

  createSystem() {
    var system = new System();
    this.systems.push(system);

    system.onCreate();
    return system;
  }

  deleteSystem(system) {
    system.onDelete();
    return this.systems = this.systems.filter(s => s !== system);
  };

  updateAll() {
    this.systems.forEach(system => {
      system.update();
    })
  };

};

const ECS = new _();
export default ECS;

