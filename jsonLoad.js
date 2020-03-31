var jsonObj = {
    "userName": "Test User",
    "photoLink": "link to file upload or local",
    "description": "This is a test user. Testing obj loading",
    "shopLink": "www.google.com",
    "icons": [
        {
            "title": "first icon title",
            "icon": "icon link",
            "function": "function code"
        },
        {
            "title": "second icon title",
            "icon": "icon link",
            "function": "function code"
        }
    ],
    "photos": [
        {
            "title": "Photo 1",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 1",
            "shopLink": "send to shop link"
        },
        {
            "title": "Photo 2",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 2",
            "shopLink": "send to shop link"
        },
        {
            "title": "Photo 3",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 3",
            "shopLink": "send to shop link"
        },
        {
            "title": "Photo 4",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 4",
            "shopLink": "send to shop link"
        },
        {
            "title": "Photo 5",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 5",
            "shopLink": "send to shop link"
        },
        {
            "title": "Photo 6",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 6",
            "shopLink": "send to shop link"
        },
        {
            "title": "Photo 7",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 7",
            "shopLink": "send to shop link"
        },
        {
            "title": "Photo 8",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 8",
            "shopLink": "send to shop link"
        },
        {
            "title": "Photo 9",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 9",
            "shopLink": "send to shop link"
        },
        {
            "title": "Photo 10",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 10",
            "shopLink": "send to shop link"
        },
        {
            "title": "Photo 11",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 11",
            "shopLink": "send to shop link"
        },
        {
            "title": "Photo 12",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 12",
            "shopLink": "send to shop link"
        },
        {
            "title": "Photo 13",
            "link": "/images/Placeholder.jpg",
            "description": "Sample description: This is photo 13",
            "shopLink": "send to shop link"
        }
    ]
}

window.onload = function main() {
    var numPhotos = jsonObj.photos.length
    var rem = numPhotos % 3
    var rows = Math.floor(numPhotos/3)
    rem > 0 ? rows++ : 0

    console.log("Photos: " + numPhotos)
    console.log("Rows: " + rows)

    var photoDiv = document.getElementById("Photos")

    var containerStr = ""
    var photoStr = ""
    var id = 0;
    for (let r = 0; r < rows; r++) {
        //for each row, make UP TO 3
        //columns
        containerStr += '<div class="row">'
        for (let c = 0; c < 3; c++) {
            containerStr += '<div class="column">'
            if (numPhotos > 0) {
                photoStr = '<img class="image" id="' + r + c +
                '" data-shopLink="' + jsonObj.photos[id].shopLink
                + '"img src="' + 
                jsonObj.photos[id].link + '" alt="' +
                jsonObj.photos[id].description + 
                '" style="width:100%;"></div>'
            } else {
                //if empty, still add img for scaling
                photoStr = '<img src ="/images/empty.png" alt="empty" style="width:100%;"></div>'
            }
            
            containerStr += photoStr
            id++
            numPhotos--
        }
        containerStr += '</div>'
    }
    photoDiv.innerHTML = containerStr

    var allPhotos = document.getElementsByClassName("image")
    
    var modal = document.getElementById("myModal")
    var span = document.getElementsByClassName("close")[0]

    var userName = document.getElementById("mtTxt")
    userName.innerHTML = jsonObj.userName

    span.addEventListener("click", function() {
        modal.style.display = "none"
    })

    Array.from(allPhotos).forEach(photo => {
        photo.addEventListener("click", function() {
            console.log("clicked")
            var element = document.getElementById(photo.id)
            var src = element.src
            var botTxt = element.alt
            var linkTxt = element.getAttribute("data-shopLink")

            //set modal window here!
            modal.style.display = "block"

            var modalImg = document.getElementById("mImg")
            var modalBotTxt = document.getElementById("mbTxt")
            
            modalImg.src = src
            modalBotTxt.innerHTML = '<p>' + botTxt +
                '</p><p>' + linkTxt + '</p>'
        })
    })

}


