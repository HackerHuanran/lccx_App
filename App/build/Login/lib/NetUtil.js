let NetUtil = {
    postJson(url, data, callback){
          alert(JSON.stringify(data))
          var fetchOptions = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              "date": "Wed, 26 Jun 2019 03:43:59 GMT",
              "transfer-encoding": "chunked",
              "content-type": "application/json"
            },
            body:data//这里我参数只有一个data,大家可以还有更多的参数
          };
          
          fetch(url, fetchOptions)
          .then((response) => response.text())
          .then((responseText) => {
            //callback(JSON.parse(responseText));
             callback(responseText);
          }).done();
    },
  }
  export default NetUtil;
  