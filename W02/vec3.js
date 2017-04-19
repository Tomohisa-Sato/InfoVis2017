Vec3 = function(x,y,z)
{
    this.x = x;
    this.y = y;
    this.z = z;
}

Vec3.prototype.add = function(v)
{
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
}


Vec3.prototype.sum = function()
{
    return this.x + this.y + this.z;
}

Vec3.prototype.min = function()
{
    if((this.x <= this.y) && (this.x <= this.z))
    {
	return this.x;
    }

    if((this.y <= this.x) && (this.y <= this.z))
    {
	return this.y;
    }

    if((this.z <= this.x) && (this.z <= this.y))
    {
	return this.z;
    }
}

Vec3.prototype.mid = function()
{
    if(((this.z <= this.x) && (this.x <= this.y))||((this.y <= this.x) && (this.x <= this.z)))
    {
	return this.x;
    }

    if(((this.z <= this.y) && (this.y <= this.x))||((this.x <= this.y) && (this.y <= this.z)))
    {
	return this.y;
    }

    if(((this.x <= this.z) && (this.z <= this.y))||((this.y <= this.z) && (this.z <= this.x)))
    {
	return this.z;
    }
}


Vec3.prototype.max = function()
{
    if((this.x >= this.y) && (this.x >= this.z))
    {
	return this.x;
    }

    if((this.y >= this.x) && (this.y >= this.z))
    {
	return this.y;
    }

    if((this.z >= this.x) && (this.z >= this.y))
    {
	return this.z;
    }
}

function Area(v0,v1,v2){
    var v10 = new Vec3(v0.x-v1.x,v0.y-v1.y,v0.z-v1.z);
    var v12 = new Vec3(v2.x-v1.x,v2.y-v1.y,v2.z-v1.z);
    var cross =  new Vec3(v10.y*v12.z - v10.z *v12.y,v10.z*v12.x-v10.x*v12.z,v10.x*v12.y-v10.y*v12.x);
    return 0.5*(Math.sqrt(cross.x*cross.x+cross.y*cross.y+cross.z*cross.x));
}
