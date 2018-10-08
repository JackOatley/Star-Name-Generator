var StarNameGenerator = (function() {

	var uniqueNames = ["Here Be Dragons", "Valhalla"];

	var firstNames = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Eta", "Theta", "Zeta", "Iota", "Kappa", "Lambda", "Omicron", "Sigma", "Upsilon", "Omega", "Cygnus", "Aiasu", "Scorpio", "Gemini", "Anatu", "Apollon", "Balder", "Ceres", "Conall", "Concordia", "Cupid", "Dagda", "Deimos", "Demeter", "Erebus", "Eudora", "Eunomia", "Elpis", "Epona", "Erato", "Europa", "Fiachra", "Fionn", "Flora", "Freyr", "Frigg", "Gaia", "Gauri", "Glaucus", "Grid", "Hades", "Gunther", "Harmonia", "Hestia", "Hyperion", "Iacchus", "Ianphe", "Iapetos", "Inanna", "Indira", "Iphigenia", "Ismene", "Janus", "Juventas", "Kali", "Kallisto", "Khurshid", "Kleio", "Klotho", "Kreios", "Kronos", "Chronos", "Kumara", "Laima", "Liber", "Lorelei", "Luna", "Mabon", "Mahesha", "Maia", "Marama", "Medusa", "Menthor", "Milda", "Mohana", "Morpheus", "Nanda", "Nemesis", "Nephele", "Nereus", "Nuada", "Oceanus", "Oscar", "Ourania", "Pandora", "Pegasus", "Peredur", "Perseus", "Phaedra", "Phobos", "Phrixus", "Pomona", "Praxis", "Psyche", "Romulus", "Rukmini", "Sundara", "Svarog", "Taranis", "Terminus", "Thalia", "Urania", "Uranus", "Vastana", "Venua", "Vesta", "Vulcan"];

	var lastNames: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI", "XXII", "XXIII", "XXIV", "XXV", "XXVI", "XXVII", "XXVIII", "XXIX", "XXX", "Adonis", "Amon", "Aton", "Electra", "Centauri", "Bastet", "Calypso", "Cardea", "Castor", "Charon", "Dagon", "Daire", "Dalia", "Damon", "Devi", "Dido", "Echo", "Eros", "Faunus", "Gerd", "Golpala", "Govad", "Hebe", "Hecate", "Helios", "Hera", "Heros", "Iah", "Icarus", "Ione", "Irene", "Iris", "Jimmu", "Kanti", "Kapila", "Karna", "Krishna", "Leto", "Lilith", "Lucina", "Major", "Minor", "Madhava", "Mani", "Manu", "Maya", "Mot", "Naenia", "Nananea", "Nestor", "Nyx", "Orion", "Ouranos", "Padma", "Pan", "Papa", "Pax", "Perun", "Pullox", "Saga", "Tane", "Thanatos", "Thor", "Tol", "Leo", "Usha", "Vasu", "Volos", "Zed"];

	function generateName() {
		var a = Math.floor(Math.random() * firstNames.length);
		var b = Math.floor(Math.random() * lastNames.length);
		return a + " " + b;
	}

})();
