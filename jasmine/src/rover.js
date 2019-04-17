var Rover = function(x, y, faceTo){
    this.x = x;
    this.y = y;
    this.faceTo = faceTo;
}

Rover.dirMap = {
    'North' : {
        'Left' : 'West',
        'Right' : 'East'
    },
    'South' : {
        'Left' : 'East',
        'Right' : 'West'
    },
    'East' : {
        'Left' : 'North',
        'Right' : 'South'
    },
    'West' : {
        'Left' : 'South',
        'Right' : 'North'
    }
}

Rover.prototype.turn = function(dir){
    this.faceTo = Rover.dirMap[this.faceTo][dir];
}

Rover.prototype.getFaceTo = function(){
    return this.faceTo;
}

Rover.prototype.getPosition = function(){
    return {'x' : this.x, 'y' : this.y}
}

Rover.prototype.move = function(){
    switch(this.faceTo){
        case 'North' : 
            this.x += 1;
            break;
        case 'South' : 
            this.x -= 1;
            break;
        case 'East' :
            this.y += 1;
            break;
        case 'West' : 
            this.y -= 1;
            break;
    }
}

