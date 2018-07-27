"use strict"

const misc = require('./sMisc');

mp.events.addCommand({
   'setlang' : (player, l) => { 
	   	if(!player.loggedIn) return;
        if (l !== "eng" && l !== "rus" && l !== "ger" && l !== "br" && l !== "zhs" && l !== "zht") {
            return player.outputChatBox("Available languages: eng, rus, ger, br, zhs, zht");
        }
        player.notify(`Current language: ~g~${l}`);
        misc.query(`UPDATE users SET lang = '${l}' WHERE id = '${player.basic.id}'`);
        player.lang = l;
    },
});   

function get(type, string, lang) {
	const result = i18n[type][string];
	if (!result[lang]) return result.eng;
	return result[lang];
}
module.exports.get = get;


const i18n = {
	basic: {
		success: {
			eng: 'Success',
			rus: 'Успешно',
			ger: '',
			br: '', 
			zhs: '成功',
			zht: '成功',
		},

		pressE: {
			eng: 'Press ~b~E ~s~',
			rus: 'Нажмите ~b~E ~s~',
			ger: '',
			br: '', 
			zhs: '按 ~b~E ~s~',
			zht: '按 ~b~E ~s~',
		},

		pressEToOpenMenu: {
			eng: 'Press ~b~E ~s~to open Menu',
			rus: 'Нажмите ~b~E ~s~для входа в меню',
			ger: '',
			br: '', 
			zhs: '按 ~b~E ~s~打开菜单',
			zht: '按 ~b~E ~s~開啟選單',
		},

		workingOnOtherJob: {
			eng: 'You are already working on other job',
			rus: 'Вы уже работаете на другой работе',
			ger: '',
			br: 'Você já está trabalhando em algum trabalho', 
			zhs: '你正在做这个工作了',
			zht: '妳正在做這個工作了',
		},

		earned1: {
			eng: 'You earned',
			rus: 'Вы заработали',
			ger: 'Du hast verdient',
			br: 'Você ganhou', 
			zhs: '你已赚了',
			zht: '妳已賺了',
		},

		earned2: {
			eng: 'Keep it up',
			rus: 'Продолжайте в том же духе',
			ger: 'Mach weiter',
			br: 'Continue assim, bom trabalho', 
			zhs: '继续保持',
			zht: '繼續保持',
		},

		needMoreLoyality1: {
			eng: 'You need at least',
			rus: 'Вам необходимо минимум',
			ger: '',
			br: 'Você precisa de pelo menos', 
			zhs: '你需要至少',
			zht: '妳需要至少',
		},

		needMoreLoyality2: {
			eng: 'loyality points',
			rus: 'очков лояльности',
			ger: '',
			br: '', 
			zhs: '',
			zht: '',
		},

		tooFarAway: {
			eng: 'too far away from you',
			rus: 'слишком далеко от вас',
			ger: '',
			br: '', 
			zhs: '这离你太远了',
			zht: '這離你太遠了',
		},

		wait: {
			eng: 'Wait',
			rus: 'Подождите',
			ger: '',
			br: '', 
			zhs: '等待',
			zht: '等待',
		},

		seconds: {
			eng: 'seconds',
			rus: 'секунд',
			ger: '',
			br: '', 
			zhs: '秒',
			zht: '秒',
		},

		toEnter: {
			eng: 'to enter',
			rus: 'чтобы войти',
			ger: '',
			br: '', 
			zhs: '进入',
			zht: '進入',
		},

		toExit: {
			eng: 'to exit',
			rus: 'чтобы выйти',
			ger: '',
			br: '', 
			zhs: '离开',
			zht: '離開',
		},

		toEnterGarage: {
			eng: 'to enter garage',
			rus: 'чтобы попасть в гараж',
			ger: '',
			br: '', 
			zhs: '进入车库',
			zht: '進入車庫',
		},

		toExitGarage: {
			eng: 'to exit garage',
			rus: 'чтобы покинуть гараж',
			ger: '',
			br: '', 
			zhs: '离开车库',
			zht: '離開車庫',
		},

		toCallLift: {
			eng: 'to call lift',
			rus: 'чтобы вызвать лифт',
			ger: '',
			br: '', 
			zhs: '',
			zht: '',
		},

		someVehicleIsBlocking: {
			eng: 'Some vehicle is blocking the area',
			rus: 'Какое-то ТС блокирует зону',
			ger: '',
			br: '', 
			zhs: '一些载具阻挡了这个区域',
			zht: '一些載具阻擋了這個區域',
		},

		somePlayerIsBlocking: {
			eng: 'Some player is blocking the area',
			rus: 'Какой-то игрок блокирует зону',
			ger: '',
			br: '', 
			zhs: '一些玩家阻挡了这个区域',
			zht: '一些玩家阻擋了這個區域',
		},

		youRejectedOffer: {
			eng: 'You rejected offer by player',
			rus: 'Вы отклонили предложение игрока',
			ger: '',
			br: '', 
			zhs: '',
			zht: '',
		},

		rejectedYourOffer: {
			eng: 'rejected your offer',
			rus: 'отклонил(а) ваше предложение',
			ger: '',
			br: '', 
			zhs: '',
			zht: '',
		},

		confirmedYourOffer: {
			eng: 'confirmed your offer',
			rus: 'принял(а) ваше предложение',
			ger: '',
			br: '', 
			zhs: '',
			zht: '',
		},

		youConfirmedOffer: {
			eng: 'You confirmed offer by player',
			rus: 'Вы приняли предложение игрока',
			ger: '',
			br: '', 
			zhs: '',
			zht: '',
		},


	},

	sMoney: {
		enterATM: {
			eng: 'Press ~b~E ~s~to open ATM Menu',
			rus: 'Нажмите ~b~E ~s~для входа в меню банкомата',
			ger: '',
			br: 'Pressione ~b~E ~s~para abrir o menu do Caixa Eletrônico', 
			zhs: '按 ~b~E ~s~ 键打开ATM菜单',
			zht: '按 ~b~E ~s~ 鍵打開ATM菜單',
		},

		notEnoughCash: {
			eng: 'Not enough cash',
			rus: 'Недостаточно наличных',
			ger: 'Nicht genug Geld',
			br: 'O dinheiro não é suficiente', 
			zhs: '现金不足',
			zht: '現金不足',
		},

		addBankMoney: {
			eng: 'New payment',
			rus: 'Новый чек',
			ger: 'Neue zahlung',
			br: 'Novo pagamento', 
			zhs: '新的支付',
			zht: '新的支付',
		},

		payTaxOffline: {
			eng: 'New tax payment',
			rus: 'Новый налоговый чек',
			ger: 'Neue tax zahlung',
			br: 'Novo pagamento de imposto', 
			zhs: '新的税务支出',
			zht: '新的稅務支出',
		},

		newFine: {
			eng: 'New fine',
			rus: 'Новый штраф',
			ger: '',
			br: 'Nova multa', 
			zhs: '新的惩罚',
			zht: '新的懲罰',
		},
	},

	sLoyality: {
		loyality: {
			eng: 'Loyality',
			rus: 'Лояльность',
			ger: '',
			br: 'Fidelidade', 
			zhs: '忠诚值',
			zht: '忠誠值',
		},
	},

	sChat: {
		someone: {
			eng: 'Someone',
			rus: 'Неизвестный',
			ger: 'Jemand',
			br: 'Alguém', 
			zhs: '某人',
			zht: '某人',
		},
	},

	sBusiness: {
		alreadyHave: {
			eng: 'You cant own more than 1 business',
			rus: 'Вы не можете иметь более 1 бизнеса',
			ger: 'Sie können nicht mehr als 1 Geschäft besitzen',
			br: 'Você não pode possuir mais de 1 negócio', 
			zhs: '你不能建立多于1个商业产业。',
			zht: '妳不能建立多於1個商業產業。',
		},

		sale: {
			eng: 'Business sale',
			rus: 'Продажа бизнеса',
			ger: '',
			br: '', 
			zhs: '商业销售',
			zht: '商業銷售',
		},

	},

	sVehicle: {
		locked: {
			eng: 'locked',
			rus: 'закрыт',
			ger: 'gesperrt',
			br: 'trancado', 
			zhs: '锁住',
			zht: '鎖住',
		},

		unlocked: {
			eng: 'unlocked',
			rus: 'открыт',
			ger: 'entsperrt',
			br: 'destrancado', 
			zhs: '已开锁',
			zht: '已開鎖',
		},
	},

	sOrangeCollector: {
		start: {
			eng: 'You started orange collector job',
			rus: 'Вы устроились сборщиком апельсинов',
			ger: 'Du hast den orangenen Sammlerjob begonnen',
			br: 'Você começou o trabalho coletar laranja', 
			zhs: '你开始了收橙子工作',
			zht: '妳開始了收橙子工作',
		},

		collected1: {
			eng: 'You have',
			rus: 'У вас в корзине',
			ger: 'Du hast',
			br: 'Você tem', 
			zhs: '你有',
			zht: '妳有',
		},

		collected2: {
			eng: 'oranges in your bucket',
			rus: 'апельсинов',
			ger: 'orangen in deinem eimer',
			br: 'laranjas no seu balde', 
			zhs: '个橙子在篮子里',
			zht: '個橙子在籃子裏',
		},

		full: {
			eng: 'Your bucket is full! Take it to the trailer',
			rus: 'Ваша корзина заполнена! Отнесите ее к трейлеру',
			ger: 'Dein Eimer ist voll! Bring es zum Trailer',
			br: 'Seu balde está cheio! Leve para o trailer', 
			zhs: '你的篮子满了，把东西拉到车上吧',
			zht: '妳的籃子滿了，把東西拉到車上吧',
		},

		empty: {
			eng: 'Your bucket is empty',
			rus: 'Ваша корзина пуста',
			ger: 'Dein Eimer ist leer',
			br: 'Seu balde está vazio', 
			zhs: '你的篮子是空的',
			zht: '妳的籃子是空的',
		},		

		finish: {
			eng: 'You finished orange collector job',
			rus: 'Вы уволились с работы',
			ger: 'Du hast den orangenen Sammlerjob beendet',
			br: 'Você encerrou o trabalho de coletar laranjas', 
			zhs: '你完成了收橙子工作',
			zht: '妳完成了收橙子工作',
		},

	},

	sCBDeliveryMen: {
		invite: {
			eng: 'Press ~b~E ~s~to start work as a Delivery Men',
			rus: 'Нажмите ~b~E~s~, чтобы устроиться курьером в Clickin Bell',
			ger: '',
			br: 'Pressione ~b~E~s~, para começar a trabalhar como entregador', 
			zhs: '按~b~E~s~键报名农场工人。',
			zht: '按~b~E~s~鍵報名農場工人。',
		},

		uninvite: {
			eng: 'Press ~b~E ~s~to finish work as a Delivery Men',
			rus: 'Нажмите ~b~E~s~, чтобы уволиться из Clickin Bell',
			ger: '',
			br: 'Pressione ~b~E~s~, para encerrar o trabalho como entregador', 
			zhs: '按~b~E~s~键辞工',
			zht: '按~b~E~s~鍵辭工',
		},

		cantGetNewOrder: {
			eng: 'You cant get new order',
			rus: 'Вы не можете взять другой заказ',
			ger: '',
			br: 'Você não pode conseguir um novo pedido', 
			zhs: '我们无法获取新订单',
			zht: '我們無法獲取新訂單',
		},

		getNewOrder: {
			eng: 'Press ~b~E ~s~to get a new order',
			rus: 'Нажмите ~b~E~s~, чтобы взять новый заказ',
			ger: '',
			br: 'Pressione ~b~E~s~, para pegar um novo pedido', 
			zhs: '按 ~b~E ~s~ 获取新的指示',
			zht: '按 ~b~E ~s~ 獲取新的指示',
		},

		haveUndeliveredOrder: {
			eng: 'You have undelivered order! You will pay $500 finishing right now!',
			rus: 'У вас есть недоставленный заказ! Вам выпишут штраф $500, если вы уволитесь прямо сейчас!',
			ger: '',
			br: 'Você tem ordem não entregue! Você vai pagar $500 terminando agora!', 
			zhs: '你有未派送的订单！ 你需要支付 $500 来马上完成!',
			zht: '妳有未派送的訂單！ 妳需要支付 $500 來馬上完成!',
		},

		started: {
			eng: 'You started Cluckin Bell delivery job! You can get new order in the left side',
			rus: 'Вы устроились курьером в Cluckin Bell! Взять заказ вы можете у двери слева',
			ger: '',
			br: 'Você começou o trabalho de entrega da Cluckin Bell! Você pode obter um novo pedido no lado esquerdo', 
			zhs: '你已经开始了Cluckin Bell派送任务！你可以在左边获取新订单',
			zht: '妳已經開始了Cluckin Bell派送任務！妳可以在左邊獲取新訂單',
		},

		finished: {
			eng: 'You finished Cluckin Bell delivery job',
			rus: 'Вы уволились из Cluckin Bell!',
			ger: '',
			br: 'Você encerrou o trabalho de entrega da Cluckin Bell', 
			zhs: '你完成了 Cluckin Bell派所任务',
			zht: '妳完成了 Cluckin Bell派所任務',
		},

		deliver: {
			eng: 'Deliver your order',
			rus: 'Доставьте ваш заказ',
			ger: '',
			br: 'Entregue seu pedido', 
			zhs: '派送你的订单',
			zht: '派送妳的訂單',
		},

		undelivered: {
			eng: 'Undelivered order',
			rus: 'Недоставленный заказ',
			ger: '',
			br: 'Ordem não entregue', 
			zhs: '取消派送订单',
			zht: '取消派送訂單',
		},

	},

	sGasStation: {
		offEngine: {
			eng: 'Please turn off the engine',
			rus: 'Пожалуйста, заглушите двигатель',
			ger: 'Bitte schalte den Motor ab',
			br: 'Por favor desligue o motor', 
			zhs: '请熄火',
			zht: '請熄火',
		},

		fuelPrice: {
			eng: 'Price for litre',
			rus: 'Цена за литр',
			ger: 'Preis pro Liter',
			br: 'Preço por litro', 
			zhs: '每升油价',
			zht: '每升油價',
		},

		goodJourney: {
			eng: 'Have a good journey',
			rus: 'Счастливого пути',
			ger: 'Gute weiter Reise',
			br: 'Tenha uma boa viagem', 
			zhs: '祝你旅途愉快',
			zht: '祝妳旅途愉快',
		},

	},

	sFaction: {
		changeClothes: {
			eng: 'to change clothes',
			rus: 'чтобы переодеться',
			ger: '',
			br: '', 
			zhs: '',
			zht: '',
		},

		setNewRank: {
			eng: 'You set new rank to player',
			rus: 'Вы установили новый ранг игроку',
			ger: '',
			br: '', 
			zhs: '',
			zht: '',
		},

		changedYourRank: {
			eng: 'changed your rank to',
			rus: 'изменил(а) ваш ранг на',
			ger: '',
			br: '', 
			zhs: '',
			zht: '',
		},

		invited: {
			eng: 'invited you to',
			rus: 'устроил(а) вас в',
			ger: '',
			br: '', 
			zhs: '',
			zht: '',
		},

		leader: {
			eng: 'Now you are leader in',
			rus: 'Теперь вы лидер',
			ger: '',
			br: '', 
			zhs: '',
			zht: '',
		},

		uninvited: {
			eng: 'uninvited you from',
			rus: 'уволил(а) вас из',
			ger: '',
			br: '', 
			zhs: '',
			zht: '',
		},
	},

	sHospital: {
		needHelp: {
			eng: 'You need a medical help',
			rus: 'Вам нужна медицинская помощь',
			ger: '',
			br: '', 
			zhs: '你需要医疗救治',
			zht: '你需要醫療救治',
		},

		toStartHealing: {
			eng: 'to start healing',
			rus: 'чтобы начать лечение',
			ger: '',
			br: '', 
			zhs: '开始救治',
			zht: '開始救治',
		},

		transferTo: {
			eng: 'Transfer to Hospital',
			rus: 'Перевоз к больнице',
			ger: '',
			br: '', 
			zhs: '转送到医院',
			zht: '轉送到醫院',
		},

		startedHealing: {
			eng: 'You started healing process',
			rus: 'Вы начали лечение',
			ger: '',
			br: '', 
			zhs: '你开始治疗了',
			zht: '你開始治療了',
		},

		finishedHealing: {
			eng: 'You finished healing process',
			rus: 'Вы завершили лечение',
			ger: '',
			br: '', 
			zhs: '你结束了治疗过程',
			zht: '你結束了治療過程',
		},

		isntHealing: {
			eng: 'isnt healing right now',
			rus: 'не записан на лечение',
			ger: '',
			br: '', 
			zhs: '不在治疗中',
			zht: '不在治療中',
		},

		youArentHealing: {
			eng: 'Youre not healing right now',
			rus: 'Вы не записаны на лечение',
			ger: '',
			br: '', 
			zhs: '你现在不在治疗中',
			zht: '你現在不在治療中',
		},

		wantsIncreaseHealing: {
			eng: 'Wants increase healing speed',
			rus: 'Предлагает увеличить скорость лечения',
			ger: '',
			br: '', 
			zhs: '希望加快治疗',
			zht: '希望加快治療',
		},

		wantsHeal: {
			eng: 'Wants heal you',
			rus: 'Предлагает вылечить вас',
			ger: '',
			br: '', 
			zhs: '想治疗你',
			zht: '想治療你',
		},

	},

}