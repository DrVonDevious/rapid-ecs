## Using Rapid-ECS

Rapid-ECS is in an experimental phase, and uses experimental node practices.
Because of this any file that imports Rapid-ECS should use the .mjs file extension.

Example:
```
import recs from 'rapid-ecs';

let player = recs.createEntity();

console.log(player);
```
