function initMap() {
    let map1 = new google.maps.Map(document.getElementById("map1"), {
      center: { lat: 37.545442, lng: 127.224100 },
      zoom: 17,
    });
    var marker1 = new google.maps.Marker({
        map: map1,
        position: {lat: 37.545442, lng: 127.224100},
        title: '젠틀몬스터 스타필드 하남',
        label: {
          text: "젠틀몬스터 스타필드 하남",
          color: "red", 
          fontWeight: "bold", 
          className: "custom-label",
        },
      
    });
    

    let map2 = new google.maps.Map(document.getElementById("map2"), {
        center: { lat: 37.200826, lng: 127.097741 },
        zoom: 17,
      });
      var marker2 = new google.maps.Marker({
          map: map2,
          position: {lat: 37.200826, lng: 127.097741},
          title: '젠틀몬스터 롯데 동탄점',
          label: {
            text: "젠틀몬스터 롯데 동탄점",
            color: "red", 
            fontWeight: "bold", 
            className: "custom-label",
          },
      });


      let map3 = new google.maps.Map(document.getElementById("map3"), {
        center: { lat: 37.525388, lng: 127.035740 },
        zoom: 19,
      });
      var marker3 = new google.maps.Marker({
          map: map3,
          position: {lat: 37.525388, lng: 127.035740},
          title: '젠틀몬스터 하우스 도산',
          label: {
            text: "젠틀몬스터 하우스 도산",
            color: "red", 
            fontWeight: "bold", 
            className: "custom-label",
          },
      });

      let map4 = new google.maps.Map(document.getElementById("map4"), {
        center: { lat: 37.511304, lng: 127.090704 },
        zoom: 17,
      });
      var marker4 = new google.maps.Marker({
          map: map4,
          position: {lat: 37.511304, lng: 127.090704},
          title: '젠틀몬스터 롯데타워',
          label: {
            text: "젠틀몬스터 롯데타워",
            color: "red", 
            fontWeight: "bold", 
            className: "custom-label",
          },
      });

      let map5 = new google.maps.Map(document.getElementById("map5"), {
        center: { lat: 37.522191, lng: 127.021790 },
        zoom: 18,
      });
      var marker5 = new google.maps.Marker({
          map: map5,
          position: {lat: 37.522191, lng: 127.021790},
          title: '젠틀몬스터 서울 신사',
          label: {
            text: "젠틀몬스터 서울 신사",
            color: "red", 
            fontWeight: "bold", 
            className: "custom-label",
          },
      });

      let map6 = new google.maps.Map(document.getElementById("map6"), {
        center: { lat: 37.550074, lng: 126.920085 },
        zoom: 18,
      });
      var marker6 = new google.maps.Marker({
          map: map6,
          position: {lat: 37.550074, lng: 126.920085},
          title: '젠틀몬스터 서울 홍대',
          label: {
            text: "젠틀몬스터 서울 홍대",
            color: "red", 
            fontWeight: "bold", 
            className: "custom-label",
          },
      });
  };
 



document.addEventListener('DOMContentLoaded', function() {
    initMap();
    var toggleMenu = document.getElementById("toggleMenu");
    var menuContent = document.querySelector(".menuContent");

    toggleMenu.checked=false;
    menuContent.style.display = "none";
    
    toggleMenu.addEventListener("change", function () {
          if (toggleMenu.checked) {
                menuContent.style.display = "block";
          } else {
                menuContent.style.display = "none";
          }
      });
    
      
    console.log("test");
});

  