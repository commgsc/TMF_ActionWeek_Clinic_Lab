$(document).ready(function() {
    javascriptCheck();
    $('#id_contextdump').hide();
    enterbutton();
    invokeAjax ("Hello");
});

// if javascript is enabled on the browser then can remove the warning message
function javascriptCheck() {
    $('#no-script').remove();
}

// creates div for interaction with bot      
function createNewDiv(who, message) {
    var img =  (who === 'Bot') ? 'bot': 'user';
    var msgdiv = '<div><img class='+who+'img src="https://github.com/commgsc/TMF_ActionWeek_Clinic_Lab/blob/master/images/'+img+'.png?raw=true" /><div class="message"><p>'+message+'</p></div></div>';
    var timediv = '<div class="time">' + new Date().toLocaleTimeString() + '</div>';
    return $('<div class='+who+'></div>').append(msgdiv,timediv);
}

// appends latest communication with bot to botchathistory
function chat(person, txt) {
    $('#id_botchathistory').append(createNewDiv(person, txt));
}    

// creates div for interaction with bot      
function createNewTable(who, message, note) {
    var img =  (who === 'Bot') ? 'bot': 'user';
    message = JSON.parse(message);
    var keys = [];
    keys = Object.keys(message[0]);

    var table_body = '<table border="1" id="tickets"><thead><tr>';
    for(k = 0; k<keys.length;k++){
        table_body+= '<th>'+keys[k]+'</th>';
    }
    table_body += '</tr></thead><tbody>';
    
    for(i = 0; i<message.length;i++){
        msg = message[i];
        table_body+='<tr>';
        for(j = 0;j<keys.length;j++){
            table_body +='<td>'+msg[keys[j]]+'</td>';
        }
        table_body+='</tr>';

    }
    table_body+='</tbody></table>';
    var txt = '<div><img class='+who+'img src="https://github.com/commgsc/TMF_ActionWeek_Clinic_Lab/blob/master/images/'+img+'.png?raw=true" /><div class="message"><p>'+note+'</p></div></div>';
    var timediv = '<div class="time">' + new Date().toLocaleTimeString() + '</div>';
    return $('<div class='+who+'></div>').append(txt,table_body,timediv);
}

// appends latest communication with bot to botchathistory
function chatTab(person, txt, note) {
    $('#id_botchathistory').append(createNewTable(person, txt, note));
}  

// sets pressing of enter key to perform same action as send button
function enterbutton(){
    $(function() {
        $("form input").keypress(function (e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
             onChatClick();
             return false;
        } else {
        return true;
        }
     });
    });
}

// User has entered some text.
function onChatClick() {
    var txt = $('#id_chattext').val();
    chat('You', txt); 
    invokeAjax(txt);
    $('#id_chattext').val('');
}

function processOK(response) {
    var mesg = response.botresponse.messageout.output.text;
    console.log('message',mesg);
    var context = response.botresponse.messageout.context.summary;
    if(context == 'from-watson-table'){
        console.log('in table');
        var note = response.botresponse.messageout.output.text[0];
        console.log('note',note)
        var msg = response.botresponse.messageout.output.text[1].result;
        chatTab('Bot', msg, note);
    }
    else{
        console.log('in watson');
        if(mesg.length > 1){
            if(typeof(mesg[1]) === 'string'){
                console.log('1');
                chat('Bot', response.botresponse.messageout.output.text.join('\n'));
            }
            else if(typeof(mesg[1]) === 'object'){
                console.log('2');
                chat('Bot', JSON.stringify(mesg[1].ticket,null,4));
            }
        }
        else{
            console.log('3');
            chat('Bot', response.botresponse.messageout.output.text.join('\n'));
        }
    }
    $('#id_contextdump').data('convContext', response.botresponse.messageout.context);
}
      
function processNotOK() {
    chat('Error', 'Error whilst attempting to talk to Bot');
}
      
function invokeAjax(message) {
    var contextdata = $('#id_contextdump').data('convContext');
    console.log('contextdata',contextdata);
        
    var ajaxData = {};
    ajaxData.msgdata = message;
    if (contextdata) {
        ajaxData.context = contextdata;    
    }
    else{
        ajaxData.context = {"private":""}
    }

    $.ajax({
        type: 'POST',
        url: 'botchat',
        data: ajaxData,
        success: processOK,
        error: processNotOK
    });
}