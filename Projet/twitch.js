let clientId = "skvkc1c2djff3m3n2tgfuysw85rrdo";
let clientSecret = "5wm4kt7gyunbi2iw9n8dfuwxesx5l8";
const login_id = ["45098797", "133058629", "614928965", "175831187"];
const pseudo = ["cdawgva", "raisindeloup", "manonmergnat", "ironmouse"];
var x = 0;
var y = 0;



function getTwitchAuthorization() {
    let url = `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`;

    return fetch(url, {
        method: "POST",
        })
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
    }
    login_id.forEach( (id) => {
   
    
    async function getStreams() {
        const endpoint = "https://api.twitch.tv/helix/streams?user_id="+id+"";
        
    
        let authorizationObject = await getTwitchAuthorization();
        let { access_token, expires_in, token_type } = authorizationObject;
    
        token_type =
        token_type.substring(0, 1).toUpperCase() +
        token_type.substring(1, token_type.length);
    
        let authorization = `${token_type} ${access_token}`;
    
        let headers = {
        authorization,
        "Client-Id": clientId,
        };
    

    
        fetch(endpoint, {
        headers,
        })
        .then((res) => res.json())
        .then((data) => renderStreams(data));
    }
    
    function renderStreams(data) {
        let { data: streams } = data;
        let streamsContainer = document.querySelector("div.streams");
        

        if (JSON.stringify(data) === '{"data":[],"pagination":{}}'){
           document.getElementById("offline").innerHTML += "<a href='https://www.twitch.tv/" + pseudo[x] + "'><img src='" + login_id[y] + ".jpg'></a>";
           console.log(x);    
           x ++;    
           y ++;
        }
        
        else if (JSON.stringify(data) !== '{"data":[],"pagination":{}}'){
            console.log(x);    
            document.getElementById("onstreams").innerHTML += "<div><img src='" + login_id[y] + ".jpg'></div>";
            x ++;   
            y ++;
        }
              
    }
    
    getStreams();

});