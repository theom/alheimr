
// @author theom / https://www.axonehf.com

allteria.frame = function frame()
{
    allteria.ui_component.call(this);

    this.components = [];
    
    this.width = 0;
    this.height = 0;
    this.border = 20;
    var geo = new three.PlaneGeometry(0, 0);
    var mat = new three.MeshBasicMaterial({color: 0xeeeeee});
    this.background = new three.Mesh(geo, mat);
    this.background.translateZ(-0.3);
    this.background.translateY(-this.height/2);
    allteria.ui_component.prototype.add.call(this, this.background);
}

allteria.extend(allteria.frame, allteria.ui_component);

allteria.frame.prototype.set_position = function set_position(pos)
{
    this.position.set(pos.x, pos.y, pos.z);
}

allteria.frame.prototype.get_position = function get_position()
{
    return this.position;
}

allteria.frame.prototype.add = function add(comp)
{
    allteria.ui_component.prototype.add.call(this, comp);

    this.components.push(comp);
}

allteria.frame.prototype.resize = function resize()
{
    var min_x, max_x;
    var min_y, max_y;

    for (var i = 0; i < this.components.length; i++)
    {
        var comp = this.components[i];
        var pos = comp.position;
        var b_box = comp.get_bounding_box();

        if (!min_x)
        {
            min_x = b_box.min.x + pos.x;
        }
        else
        {
            min_x = Math.min(min_x, b_box.min.x + pos.x);
        }

        if (!max_x)
        {
            max_x = b_box.max.x + pos.x;
        }
        else
        {
            max_x = Math.max(max_x, b_box.max.x + pos.x);
        }

        if (!min_y)
        {
            min_y = b_box.min.y + pos.y;
        }
        else
        {
            min_y = Math.min(min_y, b_box.min.y + pos.y);
        }

        if (!max_y)
        {
            max_y = b_box.max.y + pos.y;
        }
        else
        {
            max_y = Math.max(max_y, b_box.max.y + pos.y);
        }
}
    
    min_x -= this.border;
    min_y -= this.border;
    max_x += this.border;
    max_y += this.border;
    
    this.width = max_x - min_x;
    this.height = max_y - min_y;

    this.background.geometry.vertices[0].x = min_x;
    this.background.geometry.vertices[0].y = max_y;
    this.background.geometry.vertices[1].x = max_x;
    this.background.geometry.vertices[1].y = max_y;
    this.background.geometry.vertices[2].x = min_x
    this.background.geometry.vertices[2].y = min_y;
    this.background.geometry.vertices[3].x = max_x;
    this.background.geometry.vertices[3].y = min_y;
    
    this.background.verticesNeedUpdate = true;
}
