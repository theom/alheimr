
// Copyright 2014 Jens Páll Hafsteinsson
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

alheimr.ui_component = function ui_component(world)
{
    three.Object3D.call(this);

    this.world = world;
}

alheimr.extend(alheimr.ui_component, three.Object3D);

alheimr.ui_component.prototype.add = function add(comp)
{
    three.Object3D.prototype.add.call(this, comp);
}

alheimr.ui_component.prototype.run = function run()
{
}
