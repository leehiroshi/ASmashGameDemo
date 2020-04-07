

export default class SpatialHashGrid {
    TAG = "SpatialHashGrid";
    staticCells: cc.Node[][] = new Array<Array<cc.Node>>();
    cellsPerRow: number;
    cellsPerCol: number;
    cellSize: number;
    cellIds: number[] = new Array(4);//left-bottom,right-up
    foundObjects: cc.Node[][] = new Array<Array<cc.Node>>();

    public SpatialHashGrid(zoneWidth: number, zoneHeight: number, cellSize: number) {
        this.cellSize = cellSize;
        this.cellsPerCol = Math.ceil(zoneHeight / cellSize);
        this.cellsPerRow = Math.ceil(zoneWidth / cellSize);
        let numCells = this.cellsPerRow * this.cellsPerCol;

    }

}