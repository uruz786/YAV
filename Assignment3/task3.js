var submit = document.getElementById("submit");

var del = document.getElementById("delete");

var update = document.getElementById("update");

var get = document.getElementById("get");

const url = "https://crudcrud.com/api/0e26887e05f042baab2540c9eaa16eb1" ;

submit.addEventListener("click", () => {
    var name_post = document.getElementById("name_post");
    var email_post = document.getElementById("email_post");
    var phone_post = document.getElementById("phone_post");
  
    var post_data = {
      name: name_post.value,
      email: email_post.value,
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
    var email_update = document.getElementById("email_update");
    var phone_update = document.getElementById("phone_update");
  
    var update_data = {
      name: name_update.value,
      email: email_update.value,
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
      console.log("Successfully Delete");
    });
  }
  
  get.addEventListener("click", () => {
      axios.get(url+"/POST")
    .then((response) => {
      console.log(response.data[0]);
      var data= response.data;
      var name_get = document.getElementById("name_get");
      var email_get = document.getElementById("email_get");
      var phone_get = document.getElementById("phone_get");
      // data.forEach(element => {
          
      // });
      name_get.value = data[0].name;
      email_get.value = data[0].email;
      phone_get.value = data[0].phone;
    });
    
  });
  