"use strict"

const misc = require('../sMisc');
const moneyAPI = require('../Basic/sMoney');
const loyality = require('../Basic/sLoyality');


let showInviteHRText, showUninviteHRText, alreadyHasJobText, cantGetNewOrderText, canGetNewOrderText, earnedText1, earnedText2,
 haveUndeliveredText, needMoreLoyalityText, startText, finishText, deliverText, undeliveredCommentText;
function updateLanguage(player) {
    showInviteHRText = `Press ~b~E ~s~to start work as a Delivery Men`;
    showUninviteHRText = `Press ~b~E ~s~to finish work as a Delivery Men`;
    alreadyHasJobText = `You are already working on some job!`;
    cantGetNewOrderText = `You can't get new order!`;
    canGetNewOrderText = `Press ~b~E ~s~to get a new order`;
    earnedText1 = `You earned`;
    earnedText2 = `Keep it up!`;
    haveUndeliveredText = `You have undelivered order! You will pay $500 finishing right now!`;
    needMoreLoyalityText = `You need at least 50 loyality points to start this job!`;
    startText = "You started Cluckin' Bell delivery job! You can get new order in the left side";
    finishText = "You finished Cluckin' Bell delivery job!";
    deliverText = "Deliver your order";
    undeliveredCommentText = "Undelivered order";

    const lang = misc.getPlayerLang(player);
	if (lang === "rus") {
        showInviteHRText = `Нажмите ~b~E~s~, чтобы устроиться курьером в Clickin' Bell`;
        showUninviteHRText = `Нажмите ~b~E~s~, чтобы уволиться из Clickin' Bell`;
        alreadyHasJobText = `Вы работаете на другой работе!`;
        cantGetNewOrderText = `Вы не можете взять другой заказ!`;
        canGetNewOrderText = `Нажмите ~b~E~s~, чтобы взять новый заказ!`;
        earnedText1 = `Вы заработали`;
        earnedText2 = `Продолжайте в том же духе!`;
        haveUndeliveredText = `У вас есть недоставленный заказ! Вам выпишут штраф $500, если вы уволитесь прямо сейчас!`;
        needMoreLoyalityText = `Вам необходимо минимум 50 очков лояльности для устройства на работу!`;
        startText = "Вы устроились курьером в  Cluckin' Bell! Взять заказ вы можете у двери слева";
        finishText = "Вы уволились из Cluckin' Bell!";
        deliverText = "Доставьте ваш заказ";
        undeliveredCommentText = "Недоставленный заказ";
       
    }
    
	else if (lang === "br") {
        showInviteHRText = `Pressione ~b~E~s~, para começar a trabalhar como entregador`;
        showUninviteHRText = `Pressione ~b~E~s~, para encerrar o trabalho como entregador`;
        alreadyHasJobText = `Você já está trabalhando em algum trabalho!`;
        cantGetNewOrderText = `Você não pode conseguir um novo pedido!`;
        canGetNewOrderText = `Pressione ~b~E~s~, para pegar um novo pedido!`;
        earnedText1 = `Você ganhou`;
        earnedText2 = `Mantem!`;
        haveUndeliveredText = `Você tem ordem não entregue! Você vai pagar $500 terminando agora!`;
        needMoreLoyalityText = `Você precisa de pelo menos 50 pontos de fidelidade para começar este trabalho!`;
        startText = "Você começou o trabalho de entrega da Cluckin' Bell! Você pode obter um novo pedido no lado esquerdo";
        finishText = "Você encerrou o trabalho de entrega da Cluckin' Bell!";
        deliverText = "Entregue seu pedido";
        undeliveredCommentText = "Ordem não entregue";
       
    }       
    
    	else if (lang === "zh_cn") {
        showInviteHRText = `按 ~b~E~s~ 键报名农场工人。`;
        showUninviteHRText = `按 ~b~E~s~ 键辞工。`;
        alreadyHasJobText = `你已经在干这个活了！`;
        cantGetNewOrderText = `我们无法获取新订单。`;
        canGetNewOrderText = `按 ~b~E ~s~ 获取新的指示。`;
        earnedText1 = `你已赚了`;
        earnedText2 = `继续保持！`;
        haveUndeliveredText = `你有未派送的订单！ 你需要支付 $500 来马上完成!`;
        needMoreLoyalityText = `你需要至少 50 点loyality points来开始这个工作！`;
        startText = "你已经开始了Cluckin' Bell派送任务！你可以在左边获取新订单";
        finishText = "你完成了 Cluckin' Bell派所任务！";
        deliverText = "派送你的订单";
        undeliveredCommentText = "取消派送订单";

       
    }

}


class deliveryJob {
    constructor() {
        this.hrCoord = {x: -136.757, y: 6198.713, z: 32.383};
        this.getOrderCoord = {x: -121.773, y: 6204.851, z: 32.381};
        this.deliveryPoints = [
            {x: -198.063, y: 6234.902, z: 31.5 },
            {x: -298.398, y: 6191.967, z: 31.489 },
            {x: -342.872, y: 6098.942, z: 31.332 },
            {x: -381.071, y: 6061.897, z: 31.5},
            {x: -395.839, y: 6077.874, z: 31.5 },
            {x: -366.815, y: 6101.681, z: 35.44 },
            {x: -414.46, y: 6173.699, z: 31.478 },
            {x: -373.985, y: 6187.07, z: 31.536 },
            {x: -365.139, y: 6206.338, z: 31.573 },
            {x: -346.794, y: 6224.036, z: 31.511 },
            {x: -309.96, y: 6273.621, z: 31.492 },
            {x: -260.763, y: 6291.354, z: 31.484 },
            {x: -213.063, y: 6358.329, z: 31.492 },
            {x: -216.438, y: 6375.306, z: 31.518 },
            {x: -236.293, y: 6421.802, z: 31.204 },
            {x: -218.095, y: 6454.488, z: 31.199 },
            {x: -110.337, y: 6457.95, z: 31.466 },
            {x: -33.145, y: 6455.303, z: 31.476 },           
        ];
        this.deliveryPointsList = [];
    }

    createEntities() {
        const hrColshape = mp.colshapes.newSphere(this.hrCoord.x, this.hrCoord.y, this.hrCoord.z, 0.5);
        this.hrColshape = hrColshape;

        const hrMarker = mp.markers.new(1, new mp.Vector3(this.hrCoord.x, this.hrCoord.y, this.hrCoord.z - 1), 0.75,
        {
            color: [250, 250, 50, 25],
            visible: true,
        });
        this.hrMarker = hrMarker;

        const hrBlip = mp.blips.new(514, new mp.Vector3(this.hrCoord.x, this.hrCoord.y, this.hrCoord.z),
		{	
            name: "Cluckin' Bell Factory",
			shortRange: true,
            scale: 0.7,
            color: 60,
        });
        this.hrBlip = hrBlip;
        
        ///////////////////////////////

        const getOrderColshape = mp.colshapes.newSphere(this.getOrderCoord.x, this.getOrderCoord.y, this.getOrderCoord.z, 0.5);
        this.getOrderColshape = getOrderColshape;

        const getOrderMarker = mp.markers.new(1, new mp.Vector3(this.getOrderCoord.x, this.getOrderCoord.y, this.getOrderCoord.z - 1), 0.75,
        {
            color: [255, 165, 0, 25],
            visible: false,
        });
        this.getOrderMarker = getOrderMarker;

        ///////////////////////////////

        for (let i = 0; i < this.deliveryPoints.length; i++) {
            const pos = this.deliveryPoints[i];

            const marker = mp.markers.new(1, new mp.Vector3(pos.x, pos.y, pos.z - 1), 0.75,
            {
                color: [255, 165, 0, 25],
                visible: false,
            });

            const colshape = mp.colshapes.newSphere(pos.x, pos.y, pos.z, 1);

            const blip = mp.blips.new(1, new mp.Vector3(pos.x, pos.y, pos.z),
            {	
                name: "Delivery Point",
                shortRange: true,
                scale: 0,
                color: 60,
            });

            const obj = {
                blip: blip,
                marker: marker,
                colshape: colshape,
            }
            this.deliveryPointsList.push(obj);
        }

    }
    
    playerEntersHRShape(player) {
        player.info.canOpen.cBDeliveryMan = true;
        updateLanguage(player);
        if (player.info.activeJob.name && player.info.activeJob.name === "CB Delivery Men") {
            player.notify(showUninviteHRText);
            if (typeof player.info.activeJob.currentOrder === "number") {
                player.notify(`~r~${haveUndeliveredText}`);            
            }
        }
        else {
            player.notify(showInviteHRText);
        }
    }

    playerExitsHRShape(player) {
        player.info.canOpen.cBDeliveryMan = false;
    }

    playerPressedKeyOnHRShape(player) {
        updateLanguage(player);
        if (player.info.activeJob.name && player.info.activeJob.name === "CB Delivery Men") {
            this.uninvite(player);
        }
        else if (player.info.activeJob.name) {
            player.notify(alreadyHasJobText);
        }
        else {
            this.invite(player);
        }
    }

    uninvite(player) {
        if (typeof player.info.activeJob.currentOrder === "number") {
            updateLanguage(player);
            moneyAPI.addPenaltyOffline(player.name, 500, `Cluckin' Bell - ${undeliveredCommentText}`);
            loyality.removeLoyality(player, 10);
        }
        player.info.activeJob = {
            name: false,
        };
        player.notify(finishText);
        this.getOrderMarker.hideFor(player);
        misc.log.debug(`${player.name} finished Cluckin Bell delivery job`);
    }

    invite(player) {
        if (player.info.loyality < 50) {
            player.notify(`~r~${needMoreLoyalityText}`);
            return;
        }
        player.info.activeJob = {
            name: "CB Delivery Men",
            currentOrder: false,
            canGetNewOrder: true,
        };
        player.notify(startText);
        this.getOrderMarker.showFor(player);
        misc.log.debug(`${player.name} started Cluckin Bell delivery job`);
    }

    generateNewOrder(player) {
        const i = misc.getRandomInt(0, this.deliveryPointsList.length - 1)
        if (i === player.info.activeJob.currentOrder) {
            return generateNewOrder(player);
        }
        this.cancelCurrentOrder(player);
        this.deliveryPointsList[i].marker.showFor(player);
        this.deliveryPointsList[i].blip.scale = 0.7;
        this.deliveryPointsList[i].blip.routeFor(player, 60, 0.7);
        player.info.activeJob.currentOrder = i
        return i;
    }

    cancelCurrentOrder(player) {
        if (typeof player.info.activeJob.currentOrder !== "number") return;
        const i = player.info.activeJob.currentOrder;
        this.deliveryPointsList[i].marker.hideFor(player);
        this.deliveryPointsList[i].blip.unrouteFor(player);
        this.deliveryPointsList[i].blip.scale = 0;
        player.info.activeJob.currentOrder = false;
    }

    playerEntersGetOrderShape(player) {
        if (!player.info.activeJob.name && player.info.activeJob.name !== "CB Delivery Men") return;
        updateLanguage(player);
        if (typeof player.info.activeJob.currentOrder === "number") {
            return player.notify(cantGetNewOrderText);
        }
        player.info.activeJob.canGetNewOrder = true;
        player.notify(canGetNewOrderText);
    }

    playerExitsGetOrderShape(player) {
        player.info.activeJob.canGetNewOrder = false;
    }

    playerPressedKeyOnNewOrderShape(player) {
        player.notify(deliverText);
        this.generateNewOrder(player);
    }

    successDeliver(player) {
        const prize = misc.getRandomInt(0, 100);
        const earnedMoney = 10 + prize;
        moneyAPI.changeMoney(player, earnedMoney);

        updateLanguage(player);
        player.notify(`${earnedText1} ~g~${earnedMoney}$! ~w~${earnedText2}`);
        if (player.info.loyality < 150) {
            loyality.addLoyality(player, 1);
        }
        this.cancelCurrentOrder(player);
        misc.log.debug(`${player.name} earned $${earnedMoney}`);
    }
}

const job = new deliveryJob();
job.createEntities();



mp.events.add(
{
    "playerEnterColshape" : (player, shape) => {
        if (player.vehicle || !misc.isPlayerLoggedIn(player)) return;
        if (shape === job.hrColshape) {
            job.playerEntersHRShape(player);
        }
        else if (shape === job.getOrderColshape) {
            job.playerEntersGetOrderShape(player);
        }
        else if (!player.vehicle && typeof player.info.activeJob.currentOrder === "number" && shape === job.deliveryPointsList[player.info.activeJob.currentOrder].colshape) {
           job.successDeliver(player);
        }
        
    },


    "playerExitColshape" : (player, shape) => {
        if (!misc.isPlayerLoggedIn(player)) return;
        if (shape === job.hrColshape) {
            job.playerExitsHRShape(player);
        }
        else if (shape === job.getOrderColshape) {
            job.playerExitsGetOrderShape(player);
        }
    },


    "sKeys-E" : (player) => {
        if (!misc.isPlayerLoggedIn(player)) return;
        if (player.info.canOpen.cBDeliveryMan) {
            job.playerPressedKeyOnHRShape(player);
        }
        else if (player.info.activeJob.canGetNewOrder) {
            job.playerPressedKeyOnNewOrderShape(player);
        }

    },

    "playerQuit" : (player, exitType, reason) => {
        if (!misc.isPlayerLoggedIn(player)) return;
        if (player.info.activeJob.name && player.info.activeJob.name === "CB Delivery Men") {
            job.uninvite(player);
        }
    },


});
    