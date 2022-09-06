const denomination = [
    { label: 'Adventist' },
    { label: "Anglican" },
    { label: "Apostolic" },
    { label: "Assembly of God" },
    { label: "Baptist" },
    { label: "Bible Church" },
    { label: "Brethren" },
    { label: "Calvary Chapel" },
    { label: "Catholic" },
    { label: "Charismatic" },
    { label: "Christian Missionary Alliance" },
    { label: "Christian/Church of Christ" },
    { label: "Church of God" },
    { label: "Congregational" },
    { label: "Disciples of Christ" },
    { label: "Episcopal" },
    { label: "Evangelical Free" },
    { label: "Evangelical/Non-denominational" },
    { label: "Foursquare" },
    { label: "Free Methodist" },
    { label: "Friends" },
    { label: "Grace Brethren" },
    { label: "Holiness" },
    { label: "Independent/Bible" },
    { label: "Lutheran" },
    { label: "Mennonite" },
    { label: "Methodist" },
    { label: "Nazarene" },
    { label: "Orthodox" },
    { label: "Other" },
    { label: "Pentecostal" },
    { label: "Presbyterian/Reformed" },
    { label: "Salvation Army" },
    { label: "Seventh-Day Adventist" },
    { label: "United Methodist" },
    { label: "Vineyard" },
    { label: "Wesleyan" },
    { label: "Others" }
]


const setDenomination = denomination.map(den => {
    return {
        label: den.label,
        value: den.label
    }
})

export default setDenomination;
