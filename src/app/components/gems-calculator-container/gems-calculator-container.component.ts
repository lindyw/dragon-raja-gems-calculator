import { Component, OnInit } from '@angular/core';

interface Gem {
  level: number;
  amount: number;
}

interface Result {
  gem: number;
  fusion: number;
  diamond: number;
}
@Component({
  selector: 'app-gems-calculator-container',
  templateUrl: './gems-calculator-container.component.html',
  styleUrls: ['./gems-calculator-container.component.scss']
})
export class GemsCalculatorContainerComponent implements OnInit {
  currentLevel = 1;
  combineLevel = 5;
  materials: Gem[] = [];
  fusionOwned = 0;
  selectedGem = undefined;
  selectedFusion = undefined;
  gemLevelOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  result: Result = { gem: 0, fusion: 0, diamond: 0 };
  calculated = false;
  filterSelection = '0';
  constructor() { }

  ngOnInit() {
  }

  getGemImage(level): string {
    switch (level) {
      case 1:
      case 2:
        return '../../../assets/fire_1-2.JPG';
      case 3:
      case 4:
        return '../../../assets/fire_3-4.JPG';
      case 5:
      case 6:
      case 7:
        return '../../../assets/fire_5-7.JPG';
      case 8:
      case 9:
      case 10:
      case 11:
        return '../../../assets/fire_8-11.JPG';
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
        return '../../../assets/fire_12-17.JPG';
    }

  }

  levelup(type: string) {
    if (type === 'current') {
      if (this.currentLevel < 16) {
        this.currentLevel += 1;
      }
    } else {
      if (this.combineLevel < 17) {
        this.combineLevel += 1;
      }
    }

  }
  leveldown(type: string) {
    if (type === 'current') {
      if (this.currentLevel > 1) {
        this.currentLevel -= 1;
      }
    } else {
      if (this.combineLevel > 5) {
        this.combineLevel -= 1;
      }
    }
  }

  selectedLevel(level: number) {
    this.selectedGem = level;
    console.log(level);
  }

  selectedFusionAmount(n: number) {
    this.selectedFusion = n;
  }

  counter(i: number) {
    return new Array(i);
  }
  addMaterial() {
    if (this.selectedGem !== undefined) {
      this.materials.push({ level: this.selectedGem, amount: 1 });
      this.gemLevelOptions = this.gemLevelOptions.filter(option => {
        return !this.materials.map(material => material.level).some(level => option === level);
      });
      this.selectedGem = undefined;
    }
  }

  gemAmountChange(amount: number, m: Gem) {
    const found = this.materials.indexOf(m);
    if (found !== -1) {
      this.materials[found].amount = amount;
    }
  }
  removeMaterial(m: Gem) {
    const found = this.materials.indexOf(m);
    if (found !== -1) {
      this.materials.splice(found, 1);
    }
  }
  addFusion() {
    this.fusionOwned = this.selectedFusion;
  }
  removeFusion() {
    this.fusionOwned = 0;
  }
  calculate() {
    this.calculated = false;
    //set result gem,fusion,diamond
    this.result.gem = (Math.pow(2, this.combineLevel - 1) - this.currentTotalGems() - Math.pow(2, this.currentLevel - 1)) / 16;
    console.log('gem', Math.pow(2, this.combineLevel - 1), this.result.gem);
    this.result.fusion = this.combineLevel > 10 ?
      Math.pow(2, this.combineLevel - 9) - Math.pow(2, this.currentLevel - 9) - this.fusionOwned : this.combineLevel === 10 ? 1 : 0;
    this.result.diamond = this.result.gem * 48 + this.result.fusion * 247;
    this.calculated = true;
  }

  currentTotalGems(): number {
    let total = 0;
    this.materials.forEach(gem => {
      total += Math.pow(2, gem.level - 1) * gem.amount;
      console.log(gem.amount);
    });
    console.log(total);
    return total;
  }

  radioChange(option: number) {
    this.calculated = false;
    console.log(option);
    switch (+option) {
      case 0: this.result.diamond = this.result.gem * 48 + this.result.fusion * 247; console.log('all', this.result.diamond); break;
      case 1: this.result.diamond = this.result.gem * 48; console.log('gem', this.result.diamond); break;
      case 2: this.result.diamond = this.result.fusion * 247; console.log('fusion', this.result.diamond); break;
    }
    console.log('diamond', this.result.diamond);
    this.calculated = true;
  }
  reset() {
    this.currentLevel = 1;
    this.combineLevel = 5;
    this.selectedGem = undefined;
    this.selectedFusion = undefined;
    this.gemLevelOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    this.materials = [];
    this.fusionOwned = 0;
    this.result = { gem: 0, fusion: 0, diamond: 0 };
    this.calculated = false;
  }

}
