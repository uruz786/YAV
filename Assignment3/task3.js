var submit = document.getElementById("submit");

var del = document.getElementById("delete");

var update = document.getElementById("update");

var get = document.getElementById("get");

const url = "https://crudcrud.com/api/550eed5624864d20b0314f798bb38d28" ;

submit.addEventListener("click", () => {
    var name_post = document.getElementById("name_post");
    var address_post = document.getElementById("address_post");
    var phone_post = document.getElementById("phone_post");
  
    var post_data = {
      name : name_post.value,
      address: address_post.value,
      phone: phone_post.value
    };
    console.log(post_data);
    axios.post(url + "/POST", post_data).then((response)=>{
        console.log("posted",response.data);
    });
  });
  
  update.addEventListener("click", () => {
    var id_update = document.getElementById("id_update");
    var name_update = document.getElementById("name_update");
    var address_update = document.getElementById("address_update");
    var phone_update = document.getElementById("phone_update");
  
    var update_data = {
      name: name_update.value,
      address: address_update.value,
      phone: phone_update.value,
    };
    console.log(update_data);
    axios.put(url + "/POST/"+id_update.value, update_data).then((response) =>{
        console.log("updated",respone.data)
    });
  });
  
  del.addEventListener("click", () => {
    var id_delete = document.getElementById("id_delete");
    delete_data(url + "/POST/"+id_delete.value);
  });
  
  function delete_data(u) {
    axios.delete(u).then(() => {
      console.log("Successfully Deleted");
    });
  }
  
  get.addEventListener("click", () => {
      axios.get(url+"/POST")
    .then((response) => {
      console.log(response.data[0]);
      var data= response.data;
      var name_get = document.getElementById("name_get");
      var address_get = document.getElementById("address_get");
      var phone_get = document.getElementById("phone_get");
          
      // });
      name_get.value = data[0].name;
      address_get.value = data[0].address;
      phone_get.value = data[0].phone;
    });
    
  });


  