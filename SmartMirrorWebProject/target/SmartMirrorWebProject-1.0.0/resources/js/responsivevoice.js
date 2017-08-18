function speakText(message){
	var text= message;
	responsiveVoice.setDefaultVoice("Korean Female");
	responsiveVoice.speak(text);
}