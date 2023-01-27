const { kakao } = window;

export default function KakaoMapScript() {
    const container = document.getElementById('myMap');
    const options = {
        center: new kakao.maps.LatLng(36.11763102979829, 128.37329120987263),
        level: 3
    };
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(
        36.11763102979829,
        128.37329120987263
      );
  
      // 마커를 생성
      let marker = new kakao.maps.Marker({
        position: markerPosition,
      });
  
      // 마커를 지도 위에 표시
      marker.setMap(map);
}