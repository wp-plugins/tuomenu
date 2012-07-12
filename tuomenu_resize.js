jQuery(document).ready(function(e) {
   jQuery.ajax({
		 url:"http://www.tuomenu.com/include.php?url="+jQuery('#tuomenuUrlInfo').val(),
		 dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
		 success:function(json){
			 var ending = '';
			 // do stuff with json (in this case an array)
			 
			 if(json['error']!=''){jQuery('#tuomenuFrameContent').html('Tuomenu Plugin : '+json['error']); exit();}
			 
			 jQuery('#tuomenuFrameContent').html('<div id="homeRotatorDiv"> <div id="homeRotatorDivContent"> <div id="schedaRistorante"> <div class="searchResultLink"> <a href="#" onClick="parent.window.location.href=\'http://www.tuomenu.com/r/'+json['url']+'\';"><div class="searchResultBox"><table cellpadding="0" cellspacing="3px" border="none"><tr><td style="width:110px;"><img src="http://www.tuomenu.com'+json['logoImg']+'" style="margin:6px 2px 2px 2px;height:50px;width:100px;" /></td><td><h3><strong>'+json['nome']+'</strong></h3><p>'+json['indirizzo']+' , '+json['cap']+' - '+json['citta']+'</p></td><td></td></tr></table></div></a></div> </div></div>');
		
		
		var topMenuBtns='<input id="activeMenuType" type="hidden" readonly="readonly" value="menu"><input type="hidden" readonly="readonly" id="activeElement" value="menu'+json['id']+'"><div id="ristoMenuSelectSection" style=""><ul><li class="activeMainMenu" id="menu'+json['id']+'"><a onClick="loadDifferentMenu(\'menu\' , \''+json['id']+'\')" style="cursor:pointer;"><strong>Menu Base</strong> / <i>Basic Menu</i></a><br>&nbsp;</li>';
		
		
		if(json['menuxtra1']!=''){topMenuBtns=topMenuBtns+'<li id="submenu'+json['subid1']+'"><a onClick="loadDifferentMenu(\'submenu\' , \''+json['subid1']+'\')" style="cursor:pointer;">'+json['menuxtra1']+'</a></li>';}
		if(json['menuxtra2']!=''){topMenuBtns=topMenuBtns+'<li id="submenu'+json['subid2']+'"><a onClick="loadDifferentMenu(\'submenu\' , \''+json['subid1']+'\')" style="cursor:pointer;">'+json['menuxtra2']+'</a></li>';}
		if(json['menuxtra3']!=''){topMenuBtns=topMenuBtns+'<li id="submenu'+json['subid3']+'"><a onClick="loadDifferentMenu(\'submenu\' , \''+json['subid1']+'\')" style="cursor:pointer;">'+json['menuxtra3']+'</a></li>';}
		if(json['menuvino']!=''){topMenuBtns=topMenuBtns+'<li id="vino'+json['id']+'"><a onClick="loadDifferentMenu(\'vino\' , \''+json['id']+'\')" style="cursor:pointer;">'+json['menuvino']+'</a><br>&nbsp;</li>';}
		
		topMenuBtns=topMenuBtns+'</ul></div><div id="ristoMenuBigBox" style=""><p style="clear:both;padding:0;margin:0;">&nbsp;</p><div id="ristoMenuTableSection"><table id="ristoMenuTable" cellpadding="0" cellspacing=""><colgroup><col id="ristoMenuTableIcon" /><col id="ristoMenuTableName" /><col id="ristoMenuTablePrice" /></colgroup>';
		
		
				
			if(json['cat1']!=''){topMenuBtns = topMenuBtns + '<tr><td colspan="3" style="text-align:left;">'+json['valcat1']+'</td></tr>' + json['cat1'];}
			if(json['cat2']!=''){topMenuBtns = topMenuBtns + '<tr><td colspan="3" style="text-align:left;">'+json['valcat2']+'</td></tr>' + json['cat2'];}
			if(json['cat3']!=''){topMenuBtns = topMenuBtns + '<tr><td colspan="3" style="text-align:left;">'+json['valcat3']+'</td></tr>' + json['cat3'];}
			if(json['cat4']!=''){topMenuBtns = topMenuBtns + '<tr><td colspan="3" style="text-align:left;">'+json['valcat4']+'</td></tr>' + json['cat4'];}
			if(json['cat5']!=''){topMenuBtns = topMenuBtns + '<tr><td colspan="3" style="text-align:left;">'+json['valcat5']+'</td></tr>' + json['cat5'];}
			if(json['cat6']!=''){topMenuBtns = topMenuBtns + '<tr><td colspan="3" style="text-align:left;">'+json['valcat6']+'</td></tr>' + json['cat6'];}
			if(json['cat7']!=''){topMenuBtns = topMenuBtns + '<tr><td colspan="3" style="text-align:left;">'+json['valcat7']+'</td></tr>' + json['cat7'];}
			if(json['cat8']!=''){topMenuBtns = topMenuBtns + '<tr><td colspan="3" style="text-align:left;">'+json['valcat8']+'</td></tr>' + json['cat8'];}
			if(json['cat9']!=''){topMenuBtns = topMenuBtns + '<tr><td colspan="3" style="text-align:left;">'+json['valcat9']+'</td></tr>' + json['cat9'];}
			if(json['cat10']!=''){topMenuBtns = topMenuBtns + '<tr><td colspan="3" style="text-align:left;">'+json['valcat10']+'</td></tr>' + json['cat10'];}
			
		
		topMenuBtns = topMenuBtns + '</table></div><p style="clear:both;">&nbsp;</p></div></div></div></div></div>';
		jQuery('#tuomenuFrameContent').append(topMenuBtns);
		Cufon.replace('h1');

		 },
		 error:function(){
			 alert("Errore di connessione con il server tuomenu.com");
		 }
	});

});


function loadDifferentMenu(menuTipo , menuNumero){
	jQuery('#ristoMenuTable').html('<tr><td><p style="text-align:center;"><img src="http://www.tuomenu.com/areaprivata/images/loader_big.gif" /></p></td></tr>');
	
	jQuery('#'+jQuery('#activeElement').val()).removeClass('activeMainMenu');
	jQuery('#'+menuTipo+menuNumero).addClass('activeMainMenu');
	jQuery('#activeElement').val(menuTipo+menuNumero);
	jQuery('#activeMenuType').val(menuTipo);
	
	
	
	   jQuery.ajax({
		 url:"http://www.tuomenu.com/include_list.php?tipo="+menuTipo+"&id="+menuNumero,
		 dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
		 success:function(json){
			 var ending = '';
			 // do stuff with json (in this case an array)
			 
			 if(json['error']!=''){jQuery('#tuomenuFrameContent').html('Tuomenu Plugin : '+json['error']); exit();}
			
			var topMenuBtns='';
				
			if(json['cat1']!=''){topMenuBtns = topMenuBtns + '<tr><td colspan="3" style="text-align:left;">'+json['valcat1']+'</td></tr>' + json['cat1'];}
			if(json['cat2']!=''){topMenuBtns = topMenuBtns + '<tr><td colspan="3" style="text-align:left;">'+json['valcat2']+'</td></tr>' + json['cat2'];}
			if(json['cat3']!=''){topMenuBtns = topMenuBtns + '<tr><td colspan="3" style="text-align:left;">'+json['valcat3']+'</td></tr>' + json['cat3'];}
			if(json['cat4']!=''){topMenuBtns = topMenuBtns + '<tr><td colspan="3" style="text-align:left;">'+json['valcat4']+'</td></tr>' + json['cat4'];}
			if(json['cat5']!=''){topMenuBtns = topMenuBtns + '<tr><td colspan="3" style="text-align:left;">'+json['valcat5']+'</td></tr>' + json['cat5'];}
			if(json['cat6']!=''){topMenuBtns = topMenuBtns + '<tr><td colspan="3" style="text-align:left;">'+json['valcat6']+'</td></tr>' + json['cat6'];}
			if(json['cat7']!=''){topMenuBtns = topMenuBtns + '<tr><td colspan="3" style="text-align:left;">'+json['valcat7']+'</td></tr>' + json['cat7'];}
			if(json['cat8']!=''){topMenuBtns = topMenuBtns + '<tr><td colspan="3" style="text-align:left;">'+json['valcat8']+'</td></tr>' + json['cat8'];}
			if(json['cat9']!=''){topMenuBtns = topMenuBtns + '<tr><td colspan="3" style="text-align:left;">'+json['valcat9']+'</td></tr>' + json['cat9'];}
			if(json['cat10']!=''){topMenuBtns = topMenuBtns + '<tr><td colspan="3" style="text-align:left;">'+json['valcat10']+'</td></tr>' + json['cat10'];}
			
		jQuery('#ristoMenuTable').html(topMenuBtns);
		Cufon.replace('h1');

		 },
		 error:function(){
			 alert("Errore di connessione con il server tuomenu.com");
		 }
	});

	
	
	
	
	
	
	}