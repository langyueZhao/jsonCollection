let contentGridElement = document.getElementById('outputGrid');

let personalitiesDictionary = [{
  "itemTitle": "ENFP",
  "color":"rgb(0, 162, 100)",
  "category": "explorer",
  "description":"A Campaigner (ENFP) is someone with the Extraverted, Intuitive, Feeling, and Prospecting personality traits. These people tend to embrace big ideas and actions that reflect their sense of hope and goodwill toward others. Their vibrant energy can flow in many directions.",
  "image": "https://static.neris-assets.com/images/personality-types/avatars/enfp-campaigner.png"
},{
  "itemTitle": "ENFJ",
  "color":"rgb(0, 162, 100)",
  "category": "explorer",
  "description":"A Protagonist (ENFJ) is a person with the Extraverted, Intuitive, Feeling, and Judging personality traits. These warm, forthright types love helping others, and they tend to have strong ideas and values. They back their perspective with the creative energy to achieve their goals.",
  "image": "https://static.neris-assets.com/images/personality-types/avatars/enfj-protagonist.png"
},{
  "itemTitle":"INFP",
  "color":"rgb(0, 162, 100)",
  "category":"explorer",
  "description":"A Mediator (INFP) is someone who possesses the Introverted, Intuitive, Feeling, and Prospecting personality traits. These rare personality types tend to be quiet, open-minded, and imaginative, and they apply a caring and creative approach to everything they do.",
  "image":"https://static.neris-assets.com/images/personality-types/avatars/infp-mediator.png"
},{
  "itemTitle":"INFJ",
  "color":"rgb(0, 162, 100)",
  "category":"explorer",
  "description":"An Advocate (INFJ) is someone with the Introverted, Intuitive, Feeling, and Judging personality traits. They tend to approach life with deep thoughtfulness and imagination. Their inner vision, personal values, and a quiet, principled version of humanism guide them in all things.",
  "image":"https://static.neris-assets.com/images/personality-types/avatars/infj-advocate.png"
}
]


document.addEventListener("DOMContentLoaded",function(){
  /* Get page element references */
  pageTitleElement = document.getElementById("pageTitle");
  outputGridElement = document.getElementById("outputGrid");
  projectDisplayElement = document.getElementById("projectDisplay");


  for(let i=0;i<personalitiesDictionary.length;i++){
    createProjectPage(personalitiesDictionary[i])
  }
});

function createProjectPage(incomingJSON){

  let newContentElement = document.createElement("DIV");
  //color
  newContentElement.style.backgroundColor = incomingJSON['color'];
  newContentElement.classList.add('contentItem');
  //title
  let newContentHeading = document.createElement("H3");
  newContentHeading.innerText = incomingJSON['itemTitle'];
  newContentElement.appendChild(newContentHeading);
  //category
  let newContentCategory = document.createElement("p");
  newContentCategory.innerText = "category: " + incomingJSON['category'];
  newContentElement.appendChild(newContentCategory);
  //description
  let newContentDescribe = document.createElement("p");
  newContentDescribe.innerText = "description: " + incomingJSON['description'];
  newContentElement.appendChild(newContentDescribe);
  //image
  let newContentImage = document.createElement("IMG");
  newContentImage.classList.add("introImage");
  newContentImage.src = incomingJSON["image"];
  newContentElement.appendChild(newContentImage);

  contentGridElement.appendChild(newContentElement);
}
