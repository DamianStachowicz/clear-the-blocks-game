import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tank',
  templateUrl: './tank.component.html',
  styleUrls: ['./tank.component.scss'],
})
export class TankComponent implements OnInit {
  private grid: string[][] = [];
  private width: number = 10;
  private height: number = 20;
  private backgroundColor: string = 'white';
  private borderColor: string = 'black';
  private gridColor: string = '#ccc';
  private activeShape: boolean[][] = [];

  constructor() {}

  public ngOnInit(): void {
    this.initGrid();
  }

  private initGrid(): void {
    for (let row = 0; row < this.height; row++) {
      this.grid.push([]);
      for (let column = 0; column < this.width; column++) {
        this.grid[row].push(this.backgroundColor);
      }
    }
  }

  public getGrid(): string[][] {
    return this.grid;
  }

  public getGridWidth(): number {
    return this.width;
  }

  public getGridHeight(): number {
    return this.height;
  }

  public getGridBackgroundColor(): string {
    return this.backgroundColor;
  }

  public getGridBorderColor(): string {
    return this.borderColor;
  }

  public getGridColor(): string {
    return this.gridColor;
  }
}
