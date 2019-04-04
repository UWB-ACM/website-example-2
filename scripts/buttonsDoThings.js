// here we define a variable to hold the current filename
var index = -1;

// here we statically enumerate the files we are interested in using
var memeFiles = ["images/adulthood_nsaid.jpeg", 
                "images/anish_richie.png",
                "images/bees_run_computers.jpg",
                "images/better_website.jpg",
                "images/c++_is_easy.jpg",
                "images/data.jpg",
                "images/javascript_for_kids.jpg",
                "images/judgment.png",
                "images/linux_is_scary.jpeg",
                "images/optical_drive.jpeg",
                "images/sudo.png",
                "images/vim.png",
                "images/wanna_buy_a_distro.png",
                "images/what_is_a_computer.jpg",
                "images/windows_update.jpg",
                ]

// here we define a function
function getNextMeme() {
    // get a variable reference to the div we want to manipulate
    var imgDiv = document.getElementById("memes");
    // get a random index (that is not equal to our current index!)
    var newIdx = index;
    while (newIdx === index) {
        newIdx = Math.floor(Math.random() * memeFiles.length);
        console.log("selected idx: " + newIdx);
    }
    index = newIdx;
    // now we set the image div's source to the filename at new index
    imgDiv.src = memeFiles[index];
}
