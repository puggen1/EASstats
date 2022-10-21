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
        let levelDiv = document.createElement("div");
        levelDiv.classList.add("level");
        levelDiv.innerHTML = `
        <h2>Level:</h2>
        <div class="levelCircle">
        <div class="levelPercentage">
            <p>${this.leverPercent}%</p>
        </div>
        </div>
        <h3> ${this.level}</h3>
        `;
        return levelDiv
    }
}