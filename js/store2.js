function startStore(){

  // 오브젝트
  const btn = document.querySelectorAll('.anotherStore>li>button')
  const Title = document.querySelector('.explain>dt>dfn');
  const Address = document.querySelector('.explain>dd:nth-child(2)>span');
  const Time = document.querySelector('.explain>dd:nth-child(3)>span');
  const Phone = document.querySelector('.explain>dd:nth-child(4)>span');
  const Img01 = document.querySelector('.explainImg li:first-child');
  const Img02 = document.querySelector('.explainImg li:nth-child(2)');
  const Img03 = document.querySelector('.explainImg li:last-child');
  const Framei = document.querySelector('.bigImg>figcaption');

  // 객체생성
  function Explanation(title,address,time,phone,img01,img02,img03/* ,framei */){
      this.title = title;
      this.address = address;
      this.time = time;
      this.phone = phone;
      this.img01 = img01;
      this.img02 = img02;
      this.img03 = img03;
      /* this.framei = framei; */
  }

  // 매서드
  Explanation.prototype.action = function(){
      Title.innerHTML = this.title;
      Address.innerHTML = this.address;
      Time.innerHTML = this.time;
      Phone.innerHTML = this.phone;
      Img01.innerHTML = `<img src="${this.img01}" alt="${this.title}">`
      Img02.innerHTML = `<img src="${this.img02}" alt="${this.title}">`
      Img03.innerHTML = `<img src="${this.img03}" alt="${this.title}">`
      /* Framei.innerHTML = `<iframe src="${this.framei}" alt="${this.title}"></iframe>` */
  }

  //인스턴스
  let source = [
      new Explanation('신세계 본점',
                      '서울특별시 중구 퇴계로 77 신세계백화점 신관 4F',
                      '11:00~21:00 (주말 22:00까지)',
                      '02-000-0000',
                      './img/store/original_store01.jpg',
                      './img/store/original_store02.jpg',
                      './img/store/original_map.png'/* ,
                      '"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.7772404824486!2d126.97864191564788!3d37.560311732241715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2f402e427b1%3A0x783616d428ac93ad!2z7ISc7Jq47Yq567OE7IucIOykkeq1rCDth7Tqs4TroZwgNzc!5e0!3m2!1sko!2skr!4v1658776289971!5m2!1sko!2skr" width="100%" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" name="iframe"' */),
      new Explanation('강남역점',
                      '서울특별시 서초구 강남대로 441 서산빌딩 (B1F~2F)',
                      '12:00~22:00','02-000-0002',
                      './img/store/gangnam_store01.jpg',
                      './img/store/gangnam_store02.jpg',
                      './img/store/gangnam_map.png'/* ,
                      '"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.2631932970276!2d127.02308361566217!3d37.50171017981003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca158bfe4ccc7%3A0x63cf35007bd20a47!2z7ISc7IKw67mM65Sp!5e0!3m2!1sko!2skr!4v1662491051106!5m2!1sko!2skr" width="100%" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" name="iframe"' */),
      new Explanation('홍대점',
                      '서울특별시 마포구 양화로 147 1F (아일렉스 홍대)',
                      '12:00~23:00','02-000-0003',
                      './img/store/hongdea_store01.jpg',
                      './img/store/hongdea_store02.jpg',
                      './img/store/hongdea_map.png'/* ,
                      '"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.962793072684!2d126.91982911566355!3d37.55594037980005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98c33378e4e1%3A0xfaad637b9d037106!2z7ISc7Jq47Yq567OE7IucIOuniO2PrOq1rCDslpHtmZTroZwgMTQ3!5e0!3m2!1sko!2skr!4v1662491372777!5m2!1sko!2skr" width="100%" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" name="iframe"' */),
      new Explanation('스타필드 고양점',
                      '경기도 고양시 덕양구 고양대로 1955 스타필드고양 2층',
                      '12:00~21:30','02-000-0004',
                      './img/store/goyang_store01.jpg',
                      './img/store/goyang_store02.jpg',
                      './img/store/goyang_map.png'/* ,
                      '"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.076810980711!2d126.89412231566575!3d37.64739817978285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9713f6961e85%3A0x33d53c6fd0151b38!2z7Iqk7YOA7ZWE65OcIOqzoOyWkQ!5e0!3m2!1sko!2skr!4v1662491419698!5m2!1sko!2skr" width="100%" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" name="iframe"' */)
  ]

  // 이벤트함수
  function play(e){
      let num = this.getAttribute('name');
      source[num].action();
  }

  // 이벤트
  console.log(btn)
  btn.forEach(function(btn){
      btn.onclick = play
  })

}