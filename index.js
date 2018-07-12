const Message = require('./message.model');
const ImageMessage = require('./image-message.model');
const fs = require('fs')
const path = require('path')

const emptyMessage = new Message()
const emptyPhotoMessage = new ImageMessage()


class MessagesService {
    constructor() {
        let resolvePromise;
        let rejectPromise;
        const filePath = path.join(__dirname, 'messages.json');
        this.messagesPromise = new Promise((resolve, reject) => {        
         resolvePromise = resolve,
         rejectPromise = reject
    });
    fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) => {
        if(err){
            rejectPromise(err)
        }else{
            const dataArray = JSON.parse(data);
            const dataObj = dataArray.map((item) => {
                return new Message(item.text, item.created);
            });
            resolvePromise(JSON.parse(dataObj))
        }
    })
}
 get Message(){
     return this.messagesPromise;
 }
}

const MessageService = new MessagesService();
