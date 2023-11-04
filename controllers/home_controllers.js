//This below function is know as Action.
module.exports.home=function(req,res){
    return res.send("<h1> THis is home! </h1>");
}

module.exports.sidebar=function(req,res){
    return res.send('<h1> THis is sidebar in Home <h1>');
}