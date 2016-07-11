/*
* This is a JavaScript library that can handle different languages (internationalization) in your web applications.
* 
* Author  :  Salim A. Castellanos R.
* Company :  Quipux Innova.
* Version :  0.0.1
*
*/

var $UTIL.I18N = {};


$UTIL.I18N.config = function(locale){
    return{
        getMessage : function(key) {
            
            var configNodes = {
                nodes: [
                    {
                        url: "http://localhost:9091",
                        weight : 2
                    }
                ],
                algoritm: "round_robin",
                serviceStatus: "none"
            }

            var url = "/CoreWeb/i18n/messages_"+location+".json";
            
            var resources = [
                {
                    name   : "getMessages",
                    url    : url,
                    method : "GET",
                    async  : false,
                    cache  : true
                }
            ];
            
            
            var servicio = $UTIL.AJAX.BALANCING(resources, configNodes);
            
            var mensajes = "";
            
            servicios.resources.getComents({},
                    function(result){
                        mensajes = JSON.parse(result);
                    },
                    function(err){
                        alert("entro error: "+err);
                    }
                  );
            
            return mensajes[key];
		
		}
    
    }
}