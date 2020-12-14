$("a").click(function() {
  function get_username(){
    var apii = "https://instagram.com/username/?__a=1"
    let b = document.getElementById("namehere").value;
    apii = apii.replace("username", b);
    return apii;
  }
  apii = get_username()

  $.getJSON(apii, function(data){
    var back = document.querySelector(".back")

    var abc = document.createElement("div")
    abc.setAttribute("class", "abc")
    back.appendChild(abc)

    abc.innerHTML += `<img src=${data["graphql"]["user"].profile_pic_url_hd}></img>`;

    var ol = document.createElement("div")
    ol.setAttribute("class", "overlay")
    abc.appendChild(ol)

    ol.innerHTML += `<a href=${data["graphql"]["user"].profile_pic_url_hd}>indir</a>`;

    var user = document.createElement("p")
    user.setAttribute("class", "user")
    back.appendChild(user)

    user.innerHTML += `<a id="user" href="https://instagram.com/${data["graphql"]["user"].username}">@${data["graphql"]["user"].username}</a>`;

    var ii_follow = document.createElement("div")
    ii_follow.setAttribute("class", "i_follow")
    back.appendChild(ii_follow)

    ii_follow.innerHTML += `<p>Takipçi: ${data["graphql"]["user"]["edge_followed_by"].count}</p>`;
    ii_follow.innerHTML += `<span id="line">|</span>`;
    ii_follow.innerHTML += `<p id="following_text">Takip Edilen: ${data["graphql"]["user"]["edge_follow"].count}</p>`;

    back.innerHTML += `<p>İsim: ${data["graphql"]["user"].full_name}</p>`;
    back.innerHTML += `<p>Bio: ${data["graphql"]["user"].biography}</p>`;
    back.innerHTML += `<p id="link">Bio'daki Link:  <a href="${data["graphql"]["user"].external_url}">Link'e Git</a></p>`;
    back.innerHTML += `<button id="goo" onclick="window.location.href='https://instagram.com/${data["graphql"]["user"].username}'"><span>Hesaba Git</span></button>`;


    $(".content").css({'transform': 'rotateY(180deg)', 'transition': 'transform 0.5s'});

    $("#go_back").click(function() {
      $(".content").css({'transform': 'rotateY(360deg)', 'transition': 'transform 0.5s'});
    });
  });
});
