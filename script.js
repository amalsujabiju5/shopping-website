const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');




if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.add('active');
        
    })
}

if (close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    })
}




//this is for the product details scrolling image


//these are some desc i had given to the pictures
const description1 = "Step into the spotlight with our enchanting evening gown. This dress exudes timeless elegance, featuring a flowing silhouette and delicate lace detailing. The sweetheart neckline and subtle mermaid cut create a flattering and sophisticated look, perfect for special occasions. Whether you're attending a gala or a romantic dinner, this gown promises to make you the center of attention with its grace and charm.";
const description2 = "Embrace carefree style with our bohemian-inspired maxi dress. Crafted from lightweight, airy fabric, this dress effortlessly captures the essence of laid-back elegance. The flowing silhouette is adorned with vibrant floral patterns, and the adjustable tie-waist allows you to customize the fit. Ideal for beach outings or summer soirees, this maxi dress combines comfort and fashion for a relaxed, yet stylish, look.";
const description3 = "Meet your new wardrobe staple – the versatile wrap dress. This timeless piece is a true multitasker, easily transitioning from day to night. The wrap-around design cinches at the waist, creating a flattering silhouette for all body types. With its classic V-neckline and playful hemline, this dress is equally suitable for the office or a weekend brunch. Effortlessly chic and endlessly adaptable, the wrap dress is a must-have for any fashion-forward wardrobe.";
const description4 = "Elevate your evening ensemble with our chic cocktail dress, a perfect blend of sophistication and style. The form-fitting silhouette accentuates your curves, while the knee-length hem strikes the ideal balance between classic and contemporary. Adorned with subtle embellishments and a graceful neckline, this dress is a statement piece for cocktail parties and semi-formal gatherings. The rich color palette adds an extra touch of glamour, making you the epitome of modern elegance. With its timeless design, this cocktail dress ensures you stand out with confidence and flair on every glamorous occasion.";



//selecting the contents by if
var MainImg = document.getElementById('MainImg');
var smallImg = document.getElementsByClassName('small-img');
var desc = document.getElementById("description");

// the working is , when some one clicks the image then the image and the des will change accordingly

// when the small img is clicked , it will chage th url of big picture and the description also
smallImg[0].onclick = function(){
    MainImg.src = smallImg[0].src;
    //this will change the description
    desc.innerHTML = description4;
   
}



smallImg[1].onclick = function(){
    MainImg.src = smallImg[1].src;
     desc.innerHTML = description1;
}



smallImg[2].onclick = function(){
    MainImg.src = smallImg[2].src;
     desc.innerHTML = description2;
}


smallImg[3].onclick = function(){
    MainImg.src = smallImg[3].src;
     desc.innerHTML = description3;
}




