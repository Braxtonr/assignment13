async function showTeams(){
    let response =  await fetch("/api/teams");
    let teamsJson = await response.json();

    let contentDiv = document.getElementById("content");
    let teams;
    for(i in teamsJson){
        teams = teamsJson[i];
        
    }
    for(i in teams){
        contentDiv.append(makeTeamElem(teams[i]));
    }
}

function makeTeamElem(team){
    let teamSection = document.createElement("section");
    teamSection.className = "teams";
    let teamImg = document.createElement("div");
    teamImg.className = "team-content";
    teamSection.append(teamImg);
    let teamDes = document.createElement("div");
    teamDes.className = "team-content";
    teamSection.append(teamDes);


    let teamName = document.createElement("h3");
    teamName.innerText = team.name;
    teamImg.append(createImg(team.img));
    teamDes.append(teamName);
    teamDes.append(createList("<strong>" + "Conference: " + "</strong>" + team.conf));
    teamDes.append(createList("<strong>" + "Wins: " + "</strong>" + team.wins + " "));
    teamDes.append(createList("<strong>" + "Losses: " + "</strong>" + team.loss + " "));

    return teamSection;
}

function createList(text){
    let ulElem = document.createElement("ul");
    let liElem = document.createElement("li");
    liElem.innerHTML = text;
    ulElem.append(liElem);
    return ulElem;
}

function createPara(text){
    let teamP = document.createElement("p");
    teamP.innerHTML = text;
    return teamP;
}

function createImg(path){
    let img = document.createElement("img");
    img.src = path;

    return img;
}
window.onload = function(){
    this.showTeams();
}