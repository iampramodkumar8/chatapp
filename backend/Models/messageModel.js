const mongoose=require("mongoose");
const messageModel=mongoose.Schema({
    sender:{type:mongoose.Schema.Types.ObjectId,
    ref:"user"},
    content:{type:String,trime:true},
    chat:{type:mongoose.Schema.Types.ObjectId,
    ref:"chats"},
},
{
    timestamps:true,
});
const Message=mongoose.model("Message",messageModel);
module.exports=Message;