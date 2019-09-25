


<script type='text/javascript' language='javascript'>
	
	var imc,indicateur;
    var taille = prompt('Quelle est votre taille en cm ?\nEx: 1,80m=180cm');
		
	if(!isNaN(parseInt(taille)) && taille>120 && taille<250) {
		var poids = prompt('Quel est votre poids en Kg ?');
		if(!isNaN(parseInt(poids)) && poids>20 && poids<500) {
			imc = (poids * 10000) / (taille*taille);
			imc = Math.round(imc);
			indicateur = imc-17;
			document.getElementById('img' + indicateur).style.visibility='visible';
			document.getElementById('res_imc').innerHTML=imc;
		} else {
			alert('Le poids incorrect, Veuillez réactualiser par la touche F5');
		}
	} else {
		alert('La taille incorrecte, Veuillez réactualiser par la touche F5');
	}
	
 
</script>