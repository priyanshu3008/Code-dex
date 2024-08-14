const departTripTicket = {
    name:"Priyanshu Dumadiya",
    from:"India",
    to:"Germany",
    businessClass:false,
    upgrade() {
  if(this.businessClass==false) {
    this.businessClass = true;
    console.log("Your ticket is already business class!")

    }
}
}

const  returnTripTicket = {
    name:"Priyanshu Dumadiya",
    from:"Germany",
    to:"India",
    businessClass:true,
    upgrade() {
  if(this.businessClass==false) {
    this.businessClass = true;
    console.log("Your ticket is already business class!")

    }
}
}



departTripTicket.upgrade()
returnTripTicket.upgrade()