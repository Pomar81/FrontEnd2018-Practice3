
const NORTH = "north",
    EAST = "east",
    SOUTH = "south",
    WEST = "west";

class Rover {
    constructor(x = 0, y = 0, direction = NORTH) {
        if (!Number.isInteger(x) || !Number.isInteger(x)) {
            throw new TypeError();
        }

        this._x = x;
        this._y = y;

        // save direction
        switch (direction) {
            case "north":
                this._dir = 0;
                break;
            case "east":
                this._dir = 1;
                break;
            case "south":
                this._dir = 2;
                break;
            case "west":
                this._dir = 3;
                break;
            default:
                throw new TypeError();
        }


    }
    left() {
        this._dir = (this._dir + 3) % 4;
        return this;
    }

    right() {
        this._dir = (this._dir + 1) % 4;
        return this;
    }

    move(n) {
        if (!Number.isInteger(n)) {
            throw new TypeError();
        }

        switch (this._dir) {
            case 0:
                this._y += n;
                break;
            case 1:
                this._x += n;
                break;
            case 2:
                this._y -= n;
                break;
            case 3:
                this._x -= n;
                break;
            default:
        }
        return this;
    }

    getPosition() {
        return { x: this._x, y: this._y };
    }

    getDirection() {
        switch (this._dir) {
            case 0:
                return NORTH;
            case 1:
                return EAST;
            case 2:
                return SOUTH;
            case 3:
                return WEST;
            default:
                return null;
        }
    }

}

export { NORTH, EAST, SOUTH, WEST, Rover };
