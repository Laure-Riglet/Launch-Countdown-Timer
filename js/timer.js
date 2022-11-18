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
        
        // on crée une variable qui récupère le nombre courant de secondes restantes 
        // à afficher
        let secondsToDisplayUpInact = timer.getSecondsRemaining();
        
        // on cree également les variables des cartes qui seront en attente 
        // sur la partie haute et qui subsisteront sur la partie basse
        let secondsToDisplayUpAct = secondsToDisplayUpInact - 1;
        let secondsToDisplayDownAct = secondsToDisplayUpInact; // + 10 aucune influence...
        let secondsToDisplayDownActMove = secondsToDisplayUpInact - 2;

        // on les converti en string afin de pouvoir les mettre en forme plus bas
        secondsToDisplayUpAct = secondsToDisplayUpAct.toString();
        secondsToDisplayUpInact = secondsToDisplayUpInact.toString();
        secondsToDisplayDownAct =  secondsToDisplayDownAct.toString();
        secondsToDisplayDownActMove = secondsToDisplayDownActMove.toString();
        
        // on selectionne les 2 paragraphes qui contiennent chacun la moitié supérieure
        // ou inférieure du nombre courant de secondes restantes à afficher
        let secondsUpActFigureCurrentPlace = document.querySelector('.up.active .big-number.seconds');
        let secondsDownActFigureCurrentPlace = document.querySelector('.down.active :not(.moving) .big-number.seconds');

        // on selectionne respectivement les 2 paragraphes qui contiennent pour 
        // la moitié supérieure le nombre à venir de secondes restantes à afficher
        // ou pour l'inférieure le nombre precédant de secondes restantes à afficher
        let secondsUpInactFigurePlace = document.querySelector('.up.inactive .big-number.seconds');
        let secondsDownActMovFigurePlace = document.querySelector('.down.active.moving .big-number.seconds');

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
        if (secondsToDisplayDownAct.length < 2) {
            secondsToDisplayDownAct = '0' + secondsToDisplayDownAct;
        }
        if (secondsToDisplayDownActMove.length < 2) {
            secondsToDisplayDownActMove = '0' + secondsToDisplayDownActMove;
        }
        // on injecte le nombre de secondes entières jusqu'à la date et l'heure visées
        secondsUpActFigureCurrentPlace.textContent = secondsToDisplayUpAct;
        secondsDownActFigureCurrentPlace.textContent = 'x'; // secondsToDisplayDownAct;
        secondsUpInactFigurePlace.textContent = secondsToDisplayUpInact;
        secondsDownActMovFigurePlace.textContent = secondsToDisplayDownActMove;
        
    },

    displayTimeUnitsRemaining: function(unit, upOrDown, activeOrInactive) {

    },

    // Flipping cards management

    toggleActiveInactive: function (halfcard, active, inactive) {
        // on active les demies cartes inactives et on inactive les actives
        halfcard.classList.toggle(active);
        halfcard.classList.toggle(inactive);        
    },

    swapCards: function() {
        // on selectionne toutes les demies cartes
        let halfCards = document.querySelectorAll('.part')
        // on boucle la fonction qui active/inactive sur elles
        for (let halfcard of halfCards) {
            timer.toggleActiveInactive(halfcard, 'active', 'inactive');
        }
    },

    toggleMoveActiveDownCard: function(movingDownCard) {
        movingDownCard.classList.toggle('moving');
    },

    waitThenMoveActiveDownCards: function() {
        // on selectionne toutes les demies cartes
        let movingDownCards = document.querySelectorAll('.down.part.active')
        // on boucle la fonction qui active/inactive sur elles
        for (let movingDownCard of movingDownCards) {
            timer.toggleMoveActiveDownCard(movingDownCard);
        }
    }

}

document.addEventListener('DOMContentLoaded', timer.init);
console.log('JS init OK !');

