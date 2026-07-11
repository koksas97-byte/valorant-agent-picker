const agents = {
    Ascent: ["Jett", "Sova", "Omen", "Killjoy"],
    Haven: ["Jett", "Omen", "Sova", "Cypher"],
    Split: ["Raze", "Omen", "Cypher", "Sage"],
    Lotus: ["Raze", "Fade", "Omen", "Viper"],
    Sunset: ["Neon", "Omen", "Sova", "Cypher"],
    Breeze: ["Jett", "Viper", "Sova", "Yoru"],
    Summit: ["Jett", "Omen", "Sova", "Killjoy"]
};

function pickAgent() {
    const map = document.getElementById("map").value;

    const agentList = agents[map];

    const randomAgent =
        agentList[Math.floor(Math.random() * agentList.length)];

    document.getElementById("result").innerHTML =
        "Your agent: " + randomAgent;
}
