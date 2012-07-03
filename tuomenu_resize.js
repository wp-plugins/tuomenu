jQuery(document).ready(function(e) {
   jQuery.ajax({
		 url:"http://www.tuomenu.com/include.php?url="+jQuery('#tuomenuUrlInfo').val(),
		 dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
		 success:function(json){
			 var ending = '';
			 // do stuff with json (in this case an array)
			 
			 if(json['error']!=''){jQuery('#tuomenuFrameContent').html('Tuomenu Plugin : '+json['error']); exit();}
			 
			 jQuery('#tuomenuFrameContent').html('<div id="homeRotatorDiv"> <div id="homeRotatorDivContent"> <div id="schedaRistorante"> <div class="searchResultLink"> <a href="#" onClick="parent.window.location.href=\'http://www.tuomenu.com/r/'+json['url']+'\';"><div class="searchResultBox"><table cellpadding="0" cellspacing="3px" border="none"><tr><td style="width:110px;"><img src="http://www.tuomenu.com'+json['logoImg']+'" style="margin:6px 2px 2px 2px;height:50px;width:100px;" /></td><td><h3><strong>'+json['nome']+'</strong></h3><p>'+json['indirizzo']+' , '+json['cap']+' - '+json['citta']+'</p></td><td></td></tr></table></div></a></div> </div></div>');
		
		
		var topMenuBtns='<div id="ristoMenuSelectSection" style=""><ul><li class="activeMainMenu"><a onClick="parent.window.location.href=\'http://www.tuomenu.com/r/'+json['url']+'\';" style="cursor:pointer;"><strong>Menu Base</strong> / <i>Basic Menu</i></a><br>&nbsp;</li>';
		
		
		if(json['menuxtra1']!=''){topMenuBtns=topMenuBtns+'<li ><a onClick="parent.window.location.href=\'http://www.tuomenu.com/r/'+json['url']+'\';" style="cursor:pointer;">'+json['menuxtra1']+'</a></li>';}
		if(json['menuxtra2']!=''){topMenuBtns=topMenuBtns+'<li ><a onClick="parent.window.location.href=\'http://www.tuomenu.com/r/'+json['url']+'\';" style="cursor:pointer;">'+json['menuxtra2']+'</a></li>';}
		if(json['menuxtra2']!=''){topMenuBtns=topMenuBtns+'<li ><a onClick="parent.window.location.href=\'http://www.tuomenu.com/r/'+json['url']+'\';" style="cursor:pointer;">'+json['menuxtra3']+'</a></li>';}
		
		topMenuBtns=topMenuBtns+'</ul></div><div id="ristoMenuBigBox" style=""><p style="clear:both;">&nbsp;</p><div id="ristoMenuTableSection"><table id="ristoMenuTable" cellpadding="0" cellspacing=""><colgroup><col id="ristoMenuTableIcon" /><col id="ristoMenuTableName" /><col id="ristoMenuTablePrice" /></colgroup>';
		
		
				
			if(json['Antipasto']!=''){topMenuBtns = topMenuBtns + '<tr><td colspan="3" style="text-align:left;"><img style="max-width:100%;" src="http://www.tuomenu.com/areaprivata/images/menuTitles/Antipasto.png"</td></tr>' + json['Antipasto'];}
			if(json['Primo']!=''){topMenuBtns=topMenuBtns+'<tr><td colspan="3" style="text-align:left;"><img src="http://www.tuomenu.com/areaprivata/images/menuTitles/Primo.png"</td></tr>'+json['Primo'];}
			if(json['Carne']!=''){topMenuBtns=topMenuBtns+'<tr><td colspan="3" style="text-align:left;"><img src="http://www.tuomenu.com/areaprivata/images/menuTitles/Carne.png"</td></tr>'+json['Carne'];}
			if(json['Pesce']!=''){topMenuBtns=topMenuBtns+'<tr><td colspan="3" style="text-align:left;"><img src="http://www.tuomenu.com/areaprivata/images/menuTitles/Pesce.png"</td></tr>'+json['Pesce'];}
			if(json['Pizza']!=''){topMenuBtns=topMenuBtns+'<tr><td colspan="3" style="text-align:left;"><img src="http://www.tuomenu.com/areaprivata/images/menuTitles/Pizza.png"</td></tr>'+json['Pizza'];}
			if(json['Panino']!=''){topMenuBtns=topMenuBtns+'<tr><td colspan="3" style="text-align:left;"><img src="http://www.tuomenu.com/areaprivata/images/menuTitles/Panino.png"</td></tr>'+json['Panino'];}
			if(json['Contorno']!=''){topMenuBtns=topMenuBtns+'<tr><td colspan="3" style="text-align:left;"><img src="http://www.tuomenu.com/areaprivata/images/menuTitles/Contorno.png"</td></tr>'+json['Contorno'];}
			if(json['Insalata']!=''){topMenuBtns=topMenuBtns+'<tr><td colspan="3" style="text-align:left;"><img src="http://www.tuomenu.com/areaprivata/images/menuTitles/Insalata.png"</td></tr>'+json['Insalata'];}
			if(json['Dessert']!=''){topMenuBtns=topMenuBtns+'<tr><td colspan="3" style="text-align:left;"><img src="http://www.tuomenu.com/areaprivata/images/menuTitles/Dessert.png"</td></tr>'+json['Dessert'];}
			if(json['Vino']!=''){topMenuBtns=topMenuBtns+'<tr><td colspan="3" style="text-align:left;"><img src="http://www.tuomenu.com/areaprivata/images/menuTitles/Vino.png"</td></tr>'+json['Vino'];}
			if(json['Aperitivo']!=''){topMenuBtns=topMenuBtns+'<tr><td colspan="3" style="text-align:left;"><img src="http://www.tuomenu.com/areaprivata/images/menuTitles/Aperitivo.png"</td></tr>'+json['Aperitivo'];}
			if(json['Bibita']!=''){topMenuBtns=topMenuBtns+'<tr><td colspan="3" style="text-align:left;"><img src="http://www.tuomenu.com/areaprivata/images/menuTitles/Bibita.png"</td></tr>'+json['Bibita'];}
			if(json['Colazione']!=''){topMenuBtns=topMenuBtns+'<tr><td colspan="3" style="text-align:left;"><img src="http://www.tuomenu.com/areaprivata/images/menuTitles/Colazione.png"</td></tr>'+json['Colazione'];}
		
		topMenuBtns = topMenuBtns + '</table></div><p style="clear:both;">&nbsp;</p></div></div></div></div></div>';
		jQuery('#tuomenuFrameContent').append(topMenuBtns);
		
		 },
		 error:function(){
			 alert("Errore di connessione con il server tuomenu.com");
		 }
	});

});