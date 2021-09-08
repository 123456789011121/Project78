var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg"];
var names = ["Sharath Simha", "Parul Rajdev", "Aadvik Simha"];
var i = 1;
var j = 0
function activate() {
document.getElementById("family_member_image").src = images[0];
}

function update() {
    if(i == 4)
      {
          i = 1;
      }
      document.getElementById("family_member_image").src = images[i];
      i++;

      if(j == 3)
      {
        j = 0
      }
      document.getElementById("family_member_name").innerHTML = names[j];
      j++
}
