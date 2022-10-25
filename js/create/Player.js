import createElement from "./createElement.js";
//this is a class to create everything related to the player
export default class Player {
    constructor(player) {
        this.name = player.global.name;
        this.level = player.global.level;
        this.leverPercent = player.global.toNextLevelPercent;
        this.rank = player.global.rank.rankName;
        this.rankImg = player.global.rank.rankImg;
        this.rankDivision = player.global.rank.rankDiv;
        this.selectedLegend = player.legends.selected.LegendName;
        this.selectedLegendIcon = player.legends.selected.ImgAssets.icon;
    }
    createLevelDiv(){
        let levelDiv = createElement("div", "level");
        levelDiv.innerHTML = `
        <h2>Level:</h2>
        <div class="levelCircle">
        <div class="levelPercentage">
            <p>${this.leverPercent}%</p>
        </div>
        </div>
        <h3> ${this.level}</h3>
        `;
        return levelDiv;
    }
    createRankDiv(){
        let rankDiv = createElement("div", "rank");
        rankDiv.innerHTML = `
        <h2>Rank:</h2>
        <img src="${this.rankImg}">
        <h3>${this.rank} ${this.rankDivision}</h3>
        `;
        return rankDiv;
    }
    createSelectedDiv(){
        let selectedDiv = createElement("div", "selected");
        selectedDiv.innerHTML = `
        <h2> Selected: </h2>
        <img src="${this.selectedLegendIcon}">
        <h3>${this.selectedLegend}</h3>
        `;
        return selectedDiv;
    }
}