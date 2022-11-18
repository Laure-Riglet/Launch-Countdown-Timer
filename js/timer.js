const timer = {

    // on récupère la date et l'heure visées en secondes écoulées depuis le 1/1/1970
    targetTime: Math.floor(Date.parse('14 Mar 2023 09:00:00 GMT+0100') / 1000),

    init: function () {

        setInterval(timer.updateTimeRemaining, 1000);

        /* setInterval(timer.displayDaysRemaining, 1000);
        setInterval(timer.displayHoursRemaining, 1000);
        setInterval(timer.displayMinutesRemaining, 1000); */
        setInterval(timer.displaySecondsRemaining, 1000);

        setInterval(timer.swapCards, 1000);
        setInterval(timer.waitThenMoveActiveDownCards, 500);
        setInterval(timer.exchangeStartEndDownInactCards, 2000);

    },

    updateTimeRemaining: function () {
        // on recupère la date et l'heure de l'instant T en secondes écoulée depuis le 1/1/1970
        let currentTime = Math.floor(Date.now() / 1000);
        // on retourne les secondes restantes jusqu'à la date et l'heure visées
        return timer.targetTime - currentTime;
    },

    //**********************************************//
    //                   GETTERS                    //
    //**********************************************//

    getDaysRemaining: function () {
        // on retourne le nombre de jours entiers jusqu'à la date et l'heure visées,
        // on divise pour cela le temps restant en secondes par 86400 (nb de secondes
        // par jour) en arrondissant à l'entier inférieur
        let daysToGo = Math.floor(timer.updateTimeRemaining() / 86400);
        return daysToGo;
    },

    getHoursRemaining: function () {
        // on retourne le nombre d'heures entières jusqu'à la date et l'heure visées 
        // en y otant le nombre déjà comptabilisé de jours entiers en secondes, puis on divise 
        // le temps restant en secondes par 3600 (nb de secondes par heure) en arrondissant 
        // à l'entier inférieur.
        let daysToGoInSec = timer.getDaysRemaining() * 86400;
        let hoursToGo = Math.floor((timer.updateTimeRemaining() - daysToGoInSec) / 3600);
        return hoursToGo;
    },

    getMinutesRemaining: function () {
        // on retourne le nombre de minutes entières jusqu'à la date et l'heure visées en y otant
        // le nombre  déjà comptabilisé de jours et d'heures entiers en secondes, puis on divise 
        // le temps restant en secondes par 60 (nb de secondes par minutes) en arrondissant 
        // à l'entier inférieur.
        let daysToGoInSec = timer.getDaysRemaining() * 86400;
        let hoursToGoInSec = timer.getHoursRemaining() * 3600;
        let minutesToGo = Math.floor((timer.updateTimeRemaining() - daysToGoInSec - hoursToGoInSec) / 60);
        return minutesToGo;
    },

    getSecondsRemaining: function () {
        // on retourne le nombre de secondes jusqu'à la date et l'heure visées en y otant
        // le nombre  déjà comptabilisé de jours, d'heures et de minutes entiers en secondes.
        let daysToGoInSec = timer.getDaysRemaining() * 86400;
        let hoursToGoInSec = timer.getHoursRemaining() * 3600;
        let minutesToGoInSec = timer.getMinutesRemaining() * 60;
        let secondsToGo = Math.floor((timer.updateTimeRemaining() - daysToGoInSec - hoursToGoInSec - minutesToGoInSec));
        return secondsToGo;
    },

    //**********************************************//
    //                   SETTERS                    //
    //**********************************************//

    displayDaysRemaining: function () {
        // on crée une variable qui récupère le nombre de jours à afficher
        let daysToDisplay = timer.getDaysRemaining().toString();
        // on selectionne les 2 paragraphes qui contiennent chacun la moitié supérieure
        // ou inférieure du nombre de jours à afficher
        let daysFigure = document.querySelectorAll('.big-number.days');
        // si le nombre déjà affiché dans les 2 paragraphes est différent de celui renvoyé 
        // par la fonction
        if (daysFigure[0].textContent != daysToDisplay) {
            // on met en forme le nombre de jours si celui-ci ne comporte qu'un caractère
            if (daysToDisplay.length < 2) {
                daysToDisplay = '0' + daysToDisplay;
            }
            // on injecte le nombre de jours entiers jusqu'à la date et l'heure visées
            daysFigure[0].textContent = daysToDisplay;
            daysFigure[3].textContent = daysToDisplay;
        }
    },

    displayHoursRemaining: function () {
        // on crée une variable qui récupère le nombre d'heures à afficher
        let hoursToDisplay = timer.getHoursRemaining().toString();
        // on selectionne les 2 paragraphes qui contiennent chacun la moitié supérieure
        // ou inférieure du nombre d'heures à afficher
        let hoursFigure = document.querySelectorAll('.big-number.hours');
        // si le nombre déjà affiché dans les 2 paragraphes est différent de celui renvoyé 
        // par la fonction
        if (hoursFigure[0].textContent != hoursToDisplay) {
            // on met en forme le nombre d'heures si celui-ci ne comporte qu'un caractère
            if (hoursToDisplay.length < 2) {
                hoursToDisplay = '0' + hoursToDisplay;
            }
            // on injecte le nombre d'heures entières jusqu'à la date et l'heure visées
            hoursFigure[0].textContent = hoursToDisplay;
            hoursFigure[3].textContent = hoursToDisplay;
        }
    },

    displayMinutesRemaining: function () {
        // on crée une variable qui récupère le nombre de minutes à afficher
        let minutesToDisplay = timer.getMinutesRemaining().toString();
        // on selectionne les 2 paragraphes qui contiennent chacun la moitié supérieure
        // ou inférieure du nombre de minutes à afficher
        let minutesFigure = document.querySelectorAll('.big-number.minutes');
        // si le nombre déjà affiché dans les 2 paragraphes est différent de celui renvoyé 
        // par la fonction
        if (minutesFigure[0].textContent != minutesToDisplay) {
            // on met en forme le nombre de minutes si celui-ci ne comporte qu'un caractère
            if (minutesToDisplay.length < 2) {
                minutesToDisplay = '0' + minutesToDisplay;
            }
            // on injecte le nombre de minutes entières jusqu'à la date et l'heure visées
            minutesFigure[0].textContent = minutesToDisplay;
            minutesFigure[3].textContent = minutesToDisplay;
        }
    },

    displaySecondsRemaining: function () {
        
        // on crée les variables qui récupèrent le nombre courant de secondes restantes 
        // à afficher sur les différentes demies cartes.

        // la 1ère correspond à la demie carte qui reste fixe en haut et nous servira de base 
        // pour les autres
        let secondsToDisplayUpInact = 1; //timer.getSecondsRemaining();
        
        // la 2ème correspond à la demie carte qui s'en va sur la partie haute         
        let secondsToDisplayUpAct = 0; //secondsToDisplayUpInact - 1;

        // la 3ème correspond à la demie carte qui s'affiche sur la partie basse 
        let secondsToDisplayDownAct = 1; //secondsToDisplayUpInact - 1;

        // la 4ème correspond à la demie carte qui est déjà affichée sur la partie basse
        let secondsToDisplayDownInactStart = 2; //secondsToDisplayUpInact;

        // la 5ème correspond à la demie carte qui devra être affichée sur la partie basse 
        // au tour suivant
        let secondsToDisplayDownInactEnd = 3; //secondsToDisplayUpInact - 1;

        // on les converti en string afin de pouvoir les mettre en forme plus bas
        secondsToDisplayUpAct = secondsToDisplayUpAct.toString();
        secondsToDisplayUpInact = secondsToDisplayUpInact.toString();

        secondsToDisplayDownInactStart = secondsToDisplayDownInactStart.toString();
        secondsToDisplayDownAct =  secondsToDisplayDownAct.toString();
        secondsToDisplayDownInactEnd = secondsToDisplayDownInactEnd.toString();
        
        // on selectionne les emplacements de tous les paragraphes qui vont contenir 
        // les nombres de secondes restantes

        let secondsUpInactFigurePlace = document.querySelector('.up.inactive .big-number.seconds');
        let secondsUpActFigurePlace = document.querySelector('.up.active .big-number.seconds');
        
        let secondsDownInactStartFigurePlace = document.querySelector('.down.inactive.start .big-number.seconds');
        let secondsDownActFigurePlace = document.querySelector('.down.active .big-number.seconds');
        let secondsDownInactEndFigurePlace = document.querySelector('.down.inactive.end .big-number.seconds');

        /* // on selectionne les 2 paragraphes qui contiennent chacun la moitié supérieure
        // ou inférieure du nombre courant de secondes restantes à afficher
        let secondsUpActFigureCurrentPlace = document.querySelector('.up.active .big-number.seconds');
        let secondsDownActFigureCurrentPlace = document.querySelector('.down.inactive .big-number.seconds');

        // on selectionne respectivement les 2 paragraphes qui contiennent pour 
        // la moitié supérieure le nombre à venir de secondes restantes à afficher
        // ou pour l'inférieure le nombre precédant de secondes restantes à afficher
        let secondsUpInactFigurePlace = document.querySelector('.up.inactive .big-number.seconds');
        let secondsDownActMovFigurePlace = document.querySelector('.down.active.moving .big-number.seconds');
 */
        /* // si le nombre déjà affiché dans les 2 paragraphes est différent de celui renvoyé 
        // par la fonction
        if (secondsFigure[0].textContent != secondsToDisplay) {} */
    
        // on met en forme le nombre de secondes si celui-ci ne comporte qu'un caractère
        if (secondsToDisplayUpAct.length < 2) {
            secondsToDisplayUpAct = '0' + secondsToDisplayUpAct;
        }
        if (secondsToDisplayUpInact.length < 2) {
            secondsToDisplayUpInact = '0' + secondsToDisplayUpInact;
        }
        if (secondsToDisplayDownInactStart.length < 2) {
            secondsToDisplayDownInactStart = '0' + secondsToDisplayDownInactStart;
        }
        if (secondsToDisplayDownAct.length < 2) {
            secondsToDisplayDownAct = '0' + secondsToDisplayDownAct;
        }
        if (secondsToDisplayDownInactEnd.length < 2) {
            secondsToDisplayDownInactEnd = '0' + secondsToDisplayDownInactEnd;
        }
        // on injecte le nombre de secondes entières jusqu'à la date et l'heure visées
        secondsUpActFigurePlace.textContent = secondsToDisplayUpAct;
        secondsUpInactFigurePlace.textContent = secondsToDisplayUpInact;

        secondsDownInactStartFigurePlace.textContent = secondsToDisplayDownInactStart;
        secondsDownActFigurePlace.textContent = secondsToDisplayDownAct;
        secondsDownInactEndFigurePlace.textContent = secondsToDisplayDownInactEnd;
    },

    // Flipping cards management

    toggleActiveInactive: function (halfCard, active, inactive) {
        // on active les demies cartes inactives et on inactive les actives
        halfCard.classList.toggle(active);
        halfCard.classList.toggle(inactive);        
    },

    swapCards: function() {
        // on selectionne toutes les demies cartes
        let halfCards = document.querySelectorAll('.part')
        // on boucle la fonction qui active/inactive sur elles
        for (let halfCard of halfCards) {
            timer.toggleActiveInactive(halfCard, 'active', 'inactive');
        }
    },

    toggleMoveActiveDownCard: function(movingDownCard) {
        movingDownCard.classList.toggle('moving');
    },

    waitThenMoveActiveDownCards: function() {
        // on selectionne les demies cartes concernées
        let movingDownCards = document.querySelectorAll('.down.part.active')
        // on boucle la fonction qui active/inactive sur elles
        for (let movingDownCard of movingDownCards) {
            timer.toggleMoveActiveDownCard(movingDownCard);
        }
    },

    toggleStartEnd: function(halfCard, start, end) {
        // on recule les demies cartes en avant et on avance celles de derrière
        halfCard.classList.toggle(start);
        halfCard.classList.toggle(end);
    },

    exchangeStartEndDownInactCards: function() {
        // on selectionne les demies cartes concernées
        let lastHalfCards = document.querySelectorAll('.down.part.inactive');
        // on boucle la fonction qui sart/end sur elles
        for (let lastHalfCard of lastHalfCards) {
            timer.toggleStartEnd(lastHalfCard, 'start', 'end');
        }
    }
}

document.addEventListener('DOMContentLoaded', timer.init);
console.log('JS init OK !');

