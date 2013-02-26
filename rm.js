Users = new Meteor.Collection("users"); 



if (Meteor.is_client) {


//---------------------------------------------------

Template.hello.events = {
  'click input': function(){
    amplify.store('user_id', null);
  }
}

if(!amplify.store('user_id')){
  var user = Users.insert({
    name: Meteor.uuid(),
    last_activity: (new Date()).getTime(),

  });
  amplify.store('user_id', user);
  Session.set('user_id', amplify.store('user_id'));

} else {
  Session.set('user_id', amplify.store('user_id'));

}
//---------------------------------------------------


//+++++++++++++++++++++++++++++++++Pregame+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Pregame+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Pregame+++++++++++++++++++++++++++++++++++++++++++++++++++++++


Template.pregame.events({
		'click #weiter0': function () {
			Users.insert({user_id: Session.get("user_id")}); // Sehr Wichtig: Mongodb eröffnen
			amplify.store('status', "pregame");
			Session.set('status', amplify.store('status'));
			document.getElementById('weiter0').disabled = true;
			scrollTo(0,0);
	}	

});


//+++++++++++++++++++++++++++++++++Pregame+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Pregame+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Pregame+++++++++++++++++++++++++++++++++++++++++++++++++++++++






//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Reziprozitaet+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Reziprozitaet+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Reziprozitaet+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++







//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item1@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.reziprozitaet.events({
  'click .item1': function () {




//------- 

   if(document.getElementById('1').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item1': "1"} });
return console.log("Item1: 1")
}

//-------



//------- 

   if(document.getElementById('2').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item1': "2"} });
return console.log("Item1: 2")
}

//-------
//------- 

   if(document.getElementById('3').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item1': "3"} });
return console.log("Item1: 3")
}

//-------
//------- 

   if(document.getElementById('4').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item1': "4"} });
return console.log("Item1: 4")
}

//-------
//------- 

   if(document.getElementById('5').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item1': "5"} });
return console.log("Item1: 5")
}

//-------
//------- 

   if(document.getElementById('6').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item1': "6"} });
return console.log("Item1: 6")
}

//-------
//------- 

   if(document.getElementById('7').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item1': "7"} });
return console.log("Item1: 7")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item1@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item2@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.reziprozitaet.events({
  'click .item2': function () {




//------- 

   if(document.getElementById('8').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item2': "1"} });
return console.log("Item2: 1")
}

//-------



//------- 

   if(document.getElementById('9').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item2': "2"} });
return console.log("Item2: 2")
}

//-------
//------- 

   if(document.getElementById('10').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item2': "3"} });
return console.log("Item2: 3")
}

//-------
//------- 

   if(document.getElementById('11').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item2': "4"} });
return console.log("Item2: 4")
}

//-------
//------- 

   if(document.getElementById('12').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item2': "5"} });
return console.log("Item2: 5")
}

//-------
//------- 

   if(document.getElementById('13').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item2': "6"} });
return console.log("Item2: 6")
}

//-------
//------- 

   if(document.getElementById('14').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item2': "7"} });
return console.log("Item2: 7")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item2@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item3@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.reziprozitaet.events({
  'click .item3': function () {




//------- 

   if(document.getElementById('15').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item3': "1"} });
return console.log("Item3: 1")
}

//-------



//------- 

   if(document.getElementById('16').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item3': "2"} });
return console.log("Item3: 2")
}

//-------
//------- 

   if(document.getElementById('17').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item3': "3"} });
return console.log("Item3: 3")
}

//-------
//------- 

   if(document.getElementById('18').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item3': "4"} });
return console.log("Item3: 4")
}

//-------
//------- 

   if(document.getElementById('19').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item3': "5"} });
return console.log("Item3: 5")
}

//-------
//------- 

   if(document.getElementById('20').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item3': "6"} });
return console.log("Item3: 6")
}

//-------
//------- 

   if(document.getElementById('21').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item3': "7"} });
return console.log("Item3: 7")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item3@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item4@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.reziprozitaet.events({
  'click .item4': function () {




//------- 

   if(document.getElementById('22').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item4': "1"} });
return console.log("Item4: 1")
}

//-------



//------- 

   if(document.getElementById('23').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item4': "2"} });
return console.log("Item4: 2")
}

//-------
//------- 

   if(document.getElementById('24').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item4': "3"} });
return console.log("Item4: 3")
}

//-------
//------- 

   if(document.getElementById('25').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item4': "4"} });
return console.log("Item4: 4")
}

//-------
//------- 

   if(document.getElementById('26').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item4': "5"} });
return console.log("Item4: 5")
}

//-------
//------- 

   if(document.getElementById('27').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item4': "6"} });
return console.log("Item4: 6")
}

//-------
//------- 

   if(document.getElementById('28').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item4': "7"} });
return console.log("Item4: 7")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item4@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item5@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.reziprozitaet.events({
  'click .item5': function () {




//------- 

   if(document.getElementById('29').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item5': "1"} });
return console.log("Item5: 1")
}

//-------



//------- 

   if(document.getElementById('30').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item5': "2"} });
return console.log("Item5: 2")
}

//-------
//------- 

   if(document.getElementById('31').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item5': "3"} });
return console.log("Item5: 3")
}

//-------
//------- 

   if(document.getElementById('32').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item5': "4"} });
return console.log("Item5: 4")
}

//-------
//------- 

   if(document.getElementById('33').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item5': "5"} });
return console.log("Item5: 5")
}

//-------
//------- 

   if(document.getElementById('34').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item5': "6"} });
return console.log("Item5: 6")
}

//-------
//------- 

   if(document.getElementById('35').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item5': "7"} });
return console.log("Item5: 7")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item5@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item6@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.reziprozitaet.events({
  'click .item6': function () {




//------- 

   if(document.getElementById('36').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item6': "1"} });
return console.log("Item6: 1")
}

//-------



//------- 

   if(document.getElementById('37').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item6': "2"} });
return console.log("Item6: 2")
}

//-------
//------- 

   if(document.getElementById('38').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item6': "3"} });
return console.log("Item6: 3")
}

//-------
//------- 

   if(document.getElementById('39').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item6': "4"} });
return console.log("Item6: 4")
}

//-------
//------- 

   if(document.getElementById('40').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item6': "5"} });
return console.log("Item6: 5")
}

//-------
//------- 

   if(document.getElementById('41').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item6': "6"} });
return console.log("Item6: 6")
}

//-------
//------- 

   if(document.getElementById('42').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item6': "7"} });
return console.log("Item6: 7")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item6@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item7@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.reziprozitaet.events({
  'click .item7': function () {




//------- 

   if(document.getElementById('43').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item7': "1"} });
return console.log("Item7: 1")
}

//-------



//------- 

   if(document.getElementById('44').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item7': "2"} });
return console.log("Item7: 2")
}

//-------
//------- 

   if(document.getElementById('45').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item7': "3"} });
return console.log("Item7: 3")
}

//-------
//------- 

   if(document.getElementById('46').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item7': "4"} });
return console.log("Item7: 4")
}

//-------
//------- 

   if(document.getElementById('47').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item7': "5"} });
return console.log("Item7: 5")
}

//-------
//------- 

   if(document.getElementById('48').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item7': "6"} });
return console.log("Item7: 6")
}

//-------
//------- 

   if(document.getElementById('49').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item7': "7"} });
return console.log("Item7: 7")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item7@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item8@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.reziprozitaet.events({
  'click .item8': function () {




//------- 

   if(document.getElementById('50').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item8': "1"} });
return console.log("Item8: 1")
}

//-------



//------- 

   if(document.getElementById('51').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item8': "2"} });
return console.log("Item8: 2")
}

//-------
//------- 

   if(document.getElementById('52').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item8': "3"} });
return console.log("Item8: 3")
}

//-------
//------- 

   if(document.getElementById('53').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item8': "4"} });
return console.log("Item8: 4")
}

//-------
//------- 

   if(document.getElementById('54').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item8': "5"} });
return console.log("Item8: 5")
}

//-------
//------- 

   if(document.getElementById('55').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item8': "6"} });
return console.log("Item8: 6")
}

//-------
//------- 

   if(document.getElementById('56').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item8': "7"} });
return console.log("Item8: 7")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item8@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item9@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.reziprozitaet.events({
  'click .item9': function () {




//------- 

   if(document.getElementById('57').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item9': "1"} });
return console.log("Item9: 1")
}

//-------



//------- 

   if(document.getElementById('58').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item9': "2"} });
return console.log("Item9: 2")
}

//-------
//------- 

   if(document.getElementById('59').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item9': "3"} });
return console.log("Item9: 3")
}

//-------
//------- 

   if(document.getElementById('60').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item9': "4"} });
return console.log("Item9: 4")
}

//-------
//------- 

   if(document.getElementById('61').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item9': "5"} });
return console.log("Item9: 5")
}

//-------
//------- 

   if(document.getElementById('62').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item9': "6"} });
return console.log("Item9: 6")
}

//-------
//------- 

   if(document.getElementById('63').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item9': "7"} });
return console.log("Item9: 7")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item9@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item10@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.reziprozitaet.events({
  'click .item10': function () {




//------- 

   if(document.getElementById('64').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item10': "1"} });
return console.log("Item10: 1")
}

//-------



//------- 

   if(document.getElementById('65').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item10': "2"} });
return console.log("Item10: 2")
}

//-------
//------- 

   if(document.getElementById('66').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item10': "3"} });
return console.log("Item10: 3")
}

//-------
//------- 

   if(document.getElementById('67').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item10': "4"} });
return console.log("Item10: 4")
}

//-------
//------- 

   if(document.getElementById('68').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item10': "5"} });
return console.log("Item10: 5")
}

//-------
//------- 

   if(document.getElementById('69').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item10': "6"} });
return console.log("Item10: 6")
}

//-------
//------- 

   if(document.getElementById('70').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item10': "7"} });
return console.log("Item10: 7")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item10@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@






//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item11@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


Template.reziprozitaet.events({
  'click .item11': function () {




//------- 

   if(document.getElementById('71').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item11': "1"} });
return console.log("Item11: 1")
}

//-------



//------- 

   if(document.getElementById('72').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item11': "2"} });
return console.log("Item11: 2")
}

//-------
//------- 

   if(document.getElementById('73').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item11': "3"} });
return console.log("Item11: 3")
}

//-------
//------- 

   if(document.getElementById('74').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item11': "4"} });
return console.log("Item11: 4")
}

//-------
//------- 

   if(document.getElementById('75').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item11': "5"} });
return console.log("Item11: 5")
}

//-------
//------- 

   if(document.getElementById('76').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item11': "6"} });
return console.log("Item11: 6")
}

//-------
//------- 

   if(document.getElementById('77').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'item11': "7"} });
return console.log("Item11: 7")
}

//-------



 }
});


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//@@@@@@@@@@@@@@@@@@@@@@Item11@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Template.reziprozitaet.events({
		'click #weiter1': function () {
			amplify.store('status', "reziprozitaet");
			Session.set('status', amplify.store('status'));
			document.getElementById('weiter1').disabled = true;
			scrollTo(0,0);
	}	

});


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Reziprozitaet+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Reziprozitaet+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Reziprozitaet+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//+++++++++++++++++++++++++++++++++IRM+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++IRM+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++IRM+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++IRM+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++IRM+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


Template.slider.rendered = function() {


    $( "#slider1" ).slider({
      value:0,
      min: -10,
      max: 10,
      step: 1,
      slide: function( event, ui ) {
        $( "#amount1" ).val(ui.value );
      }
    });
	
    $( "#amount1" ).val( "" + $( "#slider1" ).slider( "value" ) );
	
	//-------------	
	
    $( "#slider2" ).slider({
      value:0,
      min: -10,
      max: 10,
      step: 1,
      slide: function( event, ui ) {
        $( "#amount2" ).val(ui.value );
      }
    });

    $( "#amount2" ).val( "" + $( "#slider2" ).slider( "value" ) );
	
	//-------------

	//-------------
	
	
    $( "#slider3" ).slider({
      value:0,
      min: -10,
      max: 10,
      step: 1,
      slide: function( event, ui ) {
        $( "#amount3" ).val(ui.value );
      }
    });

    $( "#amount3" ).val( "" + $( "#slider3" ).slider( "value" ) );	
	
	//-------------	
	
    $( "#slider4" ).slider({
      value:0,
      min: -10,
      max: 10,
      step: 1,
      slide: function( event, ui ) {
        $( "#amount4" ).val(ui.value );
      }
    });

    $( "#amount4" ).val( "" + $( "#slider4" ).slider( "value" ) );	
	
	//-------------		
	//-------------	
	
    $( "#slider5" ).slider({
      value:0,
      min: -10,
      max: 10,
      step: 1,
      slide: function( event, ui ) {
        $( "#amount5" ).val(ui.value );
      }
    });

    $( "#amount5" ).val( "" + $( "#slider5" ).slider( "value" ) );	
	
	//-------------			
	
	//-------------	
	
    $( "#slider6" ).slider({
      value:0,
      min: -10,
      max: 10,
      step: 1,
      slide: function( event, ui ) {
        $( "#amount6" ).val(ui.value );
      }
    });

    $( "#amount6" ).val( "" + $( "#slider6" ).slider( "value" ) );	
	
	//-------------		
	
	//-------------	
	
    $( "#slider7" ).slider({
      value:0,
      min: -10,
      max: 10,
      step: 1,
      slide: function( event, ui ) {
        $( "#amount7" ).val(ui.value );
      }
    });

    $( "#amount7" ).val( "" + $( "#slider7" ).slider( "value" ) );	
	
	//-------------		
	
	//-------------	
	
    $( "#slider8" ).slider({
      value:0,
      min: -10,
      max: 10,
      step: 1,
      slide: function( event, ui ) {
        $( "#amount8" ).val(ui.value );
      }
    });

    $( "#amount8" ).val( "" + $( "#slider8" ).slider( "value" ) );	
	
	//-------------			
	
	//-------------	
	
    $( "#slider9" ).slider({
      value:0,
      min: -10,
      max: 10,
      step: 1,
      slide: function( event, ui ) {
        $( "#amount9" ).val(ui.value );

      }
    });

    $( "#amount9" ).val( "" + $( "#slider9" ).slider( "value" ) );	
	
	//-------------			
	
	//-------------	
	
    $( "#slider10" ).slider({
      value:0,
      min: -10,
      max: 10,
      step: 1,
      slide: function( event, ui ) {
        $( "#amount10" ).val(ui.value );
      }
    });

    $( "#amount10" ).val( "" + $( "#slider10" ).slider( "value" ) );	
	
	//-------------		
	
	//-------------	
	
    $( "#slider11" ).slider({
      value:0,
      min: -10,
      max: 10,
      step: 1,
      slide: function( event, ui ) {
        $( "#amount11" ).val(ui.value );
      }
    });

    $( "#amount11" ).val( "" + $( "#slider11" ).slider( "value" ) );	
	
	//-------------			
	//-------------	
	
    $( "#slider12" ).slider({
      value:0,
      min: -10,
      max: 10,
      step: 1,
      slide: function( event, ui ) {
        $( "#amount12" ).val(ui.value );
      }
    });

    $( "#amount12" ).val( "" + $( "#slider12" ).slider( "value" ) );	
	
	//-------------			
	
	
	
	
	
	
	
	
	
	
};



Template.slider.events = {
'click button#79': function () {
Session.set("irm1", document.getElementById('amount1').value);
document.getElementById('79').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'irm1': Session.get("irm1")} });
},

'click button#81': function () {
Session.set("irm2", document.getElementById('amount2').value);

document.getElementById('81').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'irm2': Session.get("irm2")} });
},


'click button#83': function () {
Session.set("irm3", document.getElementById('amount3').value);

document.getElementById('83').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'irm3': Session.get("irm3")} });
},


'click button#85': function () {
Session.set("irm4", document.getElementById('amount4').value);

document.getElementById('85').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'irm4': Session.get("irm4")} });
},


'click button#87': function () {
Session.set("irm5", document.getElementById('amount5').value);

document.getElementById('87').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'irm5': Session.get("irm5")} });
},


'click button#89': function () {
Session.set("irm6", document.getElementById('amount6').value);

document.getElementById('89').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'irm6': Session.get("irm6")} });
},


'click button#91': function () {
Session.set("irm7", document.getElementById('amount7').value);

document.getElementById('91').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'irm7': Session.get("irm7")} });
},


'click button#93': function () {
Session.set("irm8", document.getElementById('amount8').value);

document.getElementById('93').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'irm8': Session.get("irm8")} });
},


'click button#95': function () {
Session.set("irm9", document.getElementById('amount9').value);

document.getElementById('95').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'irm9': Session.get("irm9")} });
},


'click button#97': function () {
Session.set("irm10", document.getElementById('amount10').value);

document.getElementById('97').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'irm10': Session.get("irm10")} });
},


'click button#99': function () {
Session.set("irm11", document.getElementById('amount11').value);

document.getElementById('99').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'irm11': Session.get("irm11")} });
},


'click button#101': function () {
Session.set("irm12", document.getElementById('amount12').value);

document.getElementById('101').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'irm12': Session.get("irm12")} });
},


'click #weiter2': function () {
amplify.store('status', "slider");
Session.set('status', amplify.store('status'));
document.getElementById('weiter2').disabled = true;
scrollTo(0,0);
}	







};








//+++++++++++++++++++++++++++++++++IRM+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++IRM+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++IRM+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++IRM+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++IRM+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++






//+++++++++++++++++++++++++++++++++Demographie+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Demographie+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Demographie+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Demographie+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Demographie+++++++++++++++++++++++++++++++++++++++++++++++++++++++++


Template.demographie.events = {
	

	
	
//@@@@@@@@@@@Geschlecht@@@@@@@@@


'click .item24': function () {




//------- 

   if(document.getElementById('102').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht': "1"} });
return console.log("geschlecht: 1")
}

//-------



//------- 

   if(document.getElementById('103').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'geschlecht': "2"} });
return console.log("geschlecht: 2")
}

//-------
	
	
 },	
	
	
//@@@@@@@@@@@Geschlecht@@@@@@@@@	
	

	
//@@@@@@@@@@@Alter@@@@@@@@@	
	
	'click #105': function () {
		Session.set("jahrgang", document.getElementById('104').value);
		document.getElementById('104').disabled = true; 
		document.getElementById('105').disabled = true;
		Users.update({user_id: Session.get("user_id")}, {'$set': {'jahrgang': Session.get("jahrgang")} });
	},	

	
//@@@@@@@@@@@Alter@@@@@@@@@		

	
	
//@@@@@@@@@@@Studiengang@@@@@@@@@	
	
	'click #107': function () {
		Session.set("studiengang", document.getElementById('106').value);
		document.getElementById('106').disabled = true; 
		document.getElementById('107').disabled = true;
		Users.update({user_id: Session.get("user_id")}, {'$set': {'studiengang': Session.get("studiengang")} });
	},	

	
//@@@@@@@@@@@Studiengang@@@@@@@@@		



//@@@@@@@@@@@studienstufe@@@@@@@@@


'click .item27': function () {




//------- 

   if(document.getElementById('108').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'studienstufe': "1"} });
return console.log("studienstufe: 1")
}

//-------



//------- 

   if(document.getElementById('109').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'studienstufe': "2"} });
return console.log("studienstufe: 2")
}

//-------
	
	
 },	
	
	
//@@@@@@@@@@@studienstufe@@@@@@@@@	



//@@@@@@@@@@@erfahrung@@@@@@@@@


'click .item28': function () {




//------- 

   if(document.getElementById('110').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'erfahrung': "1"} });
return console.log("erfahrung: 1")
}

//-------



//------- 

   if(document.getElementById('111').checked)
{
Users.update({user_id: Session.get("user_id")}, {'$set': {'erfahrung': "2"} });
return console.log("erfahrung: 2")
}

//-------
	
	
 },	
	
	
//@@@@@@@@@@@erfahrung@@@@@@@@@	
	
	
	
//@@@@@@@@@@@hhgroesse@@@@@@@@@	
	
	'click #113': function () {
		Session.set("hhgroesse", document.getElementById('112').value);
		document.getElementById('112').disabled = true; 
		document.getElementById('113').disabled = true;
		Users.update({user_id: Session.get("user_id")}, {'$set': {'hhgroesse': Session.get("hhgroesse")} });
	},	

	
//@@@@@@@@@@@hhgroesse@@@@@@@@@		
	
	
	
//@@@@@@@@@@@einkommen@@@@@@@@@	
	
	'click #115': function () {
		Session.set("einkommen", document.getElementById('114').value);
		document.getElementById('114').disabled = true; 
		document.getElementById('115').disabled = true;
		Users.update({user_id: Session.get("user_id")}, {'$set': {'einkommen': Session.get("einkommen")} });
	},	

	
//@@@@@@@@@@@einkommen@@@@@@@@@	



		
	

'click #weiter3': function () {
amplify.store('status', "demographie");
Session.set('status', amplify.store('status'));
document.getElementById('weiter3').disabled = true; 
scrollTo(0,0);
	}	



	
	
};





//+++++++++++++++++++++++++++++++++Demographie+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Demographie+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Demographie+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Demographie+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Demographie+++++++++++++++++++++++++++++++++++++++++++++++++++++++++



//+++++++++++++++++++++++++++++++++Spiel+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Spiel+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Spiel+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Spiel+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


Template.spiel.zweiodersieben = function(){
  	
  	var zufallsvariable = Math.floor(Math.random() * (1 - 0 + 1))
	
	return zufallsvariable == 0;

};







Template.spiel.events = {

'click button#117': function () {
Session.set("self2", document.getElementById('116').value);
document.getElementById('116').disabled = true; 
document.getElementById('117').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'self2': Session.get("self2")} });
},

'click button#119': function () {
Session.set("other2", document.getElementById('118').value);
document.getElementById('118').disabled = true; 
document.getElementById('119').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'other2': Session.get("other2")} });
},
	
	
'click button#121': function () {
Session.set("self7", document.getElementById('120').value);
document.getElementById('120').disabled = true; 
document.getElementById('121').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'self7': Session.get("self7")} });
},

'click button#123': function () {
Session.set("other7", document.getElementById('122').value);
document.getElementById('122').disabled = true; 
document.getElementById('123').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'other7': Session.get("other7")} });
},	

			'click #weiter4': function () {
			amplify.store('status', "spiel");
			Session.set('status', amplify.store('status'));
			document.getElementById('weiter4').disabled = true;
			scrollTo(0,0);
	}	
		
		
};



//+++++++++++++++++++++++++++++++++Spiel+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Spiel+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Spiel+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Spiel+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




//+++++++++++++++++++++++++++++++++Postgame+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Postgame+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Postgame+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



Template.postgame.events = {

'click button#interesseb': function () {
Session.set("resultate", document.getElementById('interessea').value);
document.getElementById('interessea').disabled = true; 
document.getElementById('interesseb').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'resultate': Session.get("resultate")} });
},

'click button#interessed': function () {
Session.set("experimente", document.getElementById('interessec').value);
document.getElementById('interessec').disabled = true; 
document.getElementById('interessed').disabled = true;
Users.update({user_id: Session.get("user_id")}, {'$set': {'experimente': Session.get("experimente")} });
}


};


//+++++++++++++++++++++++++++++++++Postgame+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Postgame+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Postgame+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++






//+++++++++++++++++++++++++++++++++Wann, was+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Wann, was+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Wann, was+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Wann, was+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


Template.pregame.show = function(){
 
 
	if(		amplify.store("status") == null && 
			Session.get("status") == null

				
				
	)
	
	
				{var zeigen5 = "ja"}

	else

				{var zeigen5 = "nein"}


	return zeigen5 == "ja";

};




Template.reziprozitaet.show = function(){
 
 
	if(		Session.get("status") == "slider" ||  //Achtung: Reihenfolge spielt eine Rolle
			amplify.store("status") == "slider"  //Achtung: Reihenfolge spielt eine Rolle

				
				
	)
	
	
				{var zeigen4 = "ja"}

	else

				{var zeigen4 = "nein"}


	return zeigen4 == "ja";

};



Template.slider.show = function(){
 
 
	if(		Session.get("status") == "spiel" ||		  //Achtung: Reihenfolge spielt eine Rolle	
			amplify.store("status") == "spiel"  		//Achtung: Reihenfolge spielt eine Rolle
				
	)
	
	
				{var zeigen1 = "ja"}

	else

				{var zeigen1 = "nein"}


	return zeigen1 == "ja";

};


Template.demographie.show = function(){
 
 
	if(		Session.get("status") == "reziprozitaet" ||    //Achtung: Reihenfolge spielt eine Rolle
			amplify.store("status") == "reziprozitaet"   //Achtung: Reihenfolge spielt eine Rolle
				
	)
	
	
				{var zeigen2 = "ja"}

	else

				{var zeigen2 = "nein"}


	return zeigen2 == "ja";

};


Template.spiel.show = function(){
 
 
	if(		Session.get("status") == "pregame" ||
			amplify.store("status") == "pregame"	
				
	)
	
	
				{var zeigen3 = "ja"}

	else

				{var zeigen3 = "nein"}


	return zeigen3 == "ja";

};


Template.postgame.show = function(){
 
 
	if(		Session.get("status") == "demographie" ||   //Achtung: Reihenfolge spielt eine Rolle
			amplify.store("status") == "dempgrphie"	  //Achtung: Reihenfolge spielt eine Rolle	
				
	)
	
	
				{var zeigen6 = "ja"}

	else

				{var zeigen6 = "nein"}


	return zeigen6 == "ja";

};








//+++++++++++++++++++++++++++++++++Wann, was+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Wann, was+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Wann, was+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+++++++++++++++++++++++++++++++++Wann, was+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++






}










if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
