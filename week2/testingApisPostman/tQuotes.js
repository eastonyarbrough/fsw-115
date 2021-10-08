let apiData = {
    "non_personalized": [
        "An 'extremely credible source' has called my office and told me that Barack Obama's birth certificate is a fraud",
        "In many respects, you know, they honor President Obama. He's the founder of ISIS. He's the founder of ISIS. He's the founder. He founded ISIS.",
        "If she gets to pick her judges, nothing you can do, folks. Although, the Second Amendment people, maybe there is, I don't know.",
        "The people of Crimea, from what I've heard, would rather be with Russia than where they were",
        "Russia, if you're listening, I hope you're able to find the 30,000 emails that are missing",
        "Justice Ginsburg of the U.S. Supreme Court has embarrassed all by making very dumb political statements about me. Her mind is shot - resign!",
        "Today, Iraq is Harvard for terrorism.",
        "Saddam was a bad guy — really bad guy. But you know what he did well? He killed terrorists. He did that so good",
        "That could be a Mexican plane up there — they're getting ready to attack",
        "Appreciate the congrats for being right on radical Islamic terrorism, I don't want congrats, I want toughness & vigilance. We must be smart!",
        "I was the one that really broke the glass ceiling on behalf of women, more than anybody in the construction industry",
        "Pregnancy is a wonderful thing for the woman, it’s a wonderful thing for the husband, it’s certainly an inconvenience for a business.",
        "My whole life is about winning. I don't lose often. I almost never lose.",
        "You know the funny thing? I don't get along with rich people.",
        "I have an attention span that's as long as it has to be.",
        "Private jets cost a lot of money.",
        "Bing bing, bong bong bong, bing bing.",
        "No, I meant [Obama is] the founder of ISIS, I do. He was the most valuable player. I give him the most valuable player award. I give her, too, by the way, Hillary Clinton.",
        "Do you mind if I sit back a little? Because your breath is very bad.",
        "Why can’t we use nuclear weapons?",
        "I think I've made a lot of sacrifices. I work very, very hard. I've created thousands and thousands of jobs, tens of thousands of jobs, built great structures. I've had tremendous success. I think I've done a lot.",
        "[Putin] is not going into Ukraine, OK, just so you understand. He’s not gonna go into Ukraine, all right? You can mark it down. You can put it down.",
        "I was gonna hit one guy in particular, a very little guy. I was gonna hit this guy so hard his head would spin and he wouldn’t know what the hell happened",
        "I’ve been treated very unfairly by this judge. Now, this judge is of Mexican heritage. I'm building a wall, OK?",
        "I could stand in the middle of Fifth Avenue and shoot somebody, and I wouldn't lose any voters",
        "I love the poorly educated.",
        "I've had a beautiful, I've had a flawless campaign. You'll be writing books about this campaign.",
        "He’s a war hero because he was captured. I like people that weren’t captured.",
        "You know what I hate? There's a guy totally disruptive, throwing punches, we're not allowed punch back anymore. ... I'd like to punch him in the face, I'll tell ya.",
        "If you see somebody getting ready to throw a tomato, knock the crap out of them, would you? Seriously. ",
        "There were people that were cheering on the other side of New Jersey, where you have large Arab populations. They were cheering as the World Trade Center came down.",
        "You could see there was blood coming out of her eyes. Blood coming out of her wherever.",
        "I've said if Ivanka weren't my daughter, perhaps I'd be dating her.",
        "You know, it really doesn`t matter what [the media] write as long as you`ve got a young and beautiful piece of ass.",
        "If Hillary Clinton were a man, I don't think she would get 5% of the vote. And the beautiful thing is women don't like her",
        "When Mexico sends its people, they're not sending their best. They're sending people that have lots of problems...they're bringing drugs, they're bringing crime. They're rapists.",
        "Happy Cinco de Mayo! The best taco bowls are made in Trump Tower Grill. I love Hispanics!",
        "We're gonna have businesses that used to be in New Hampshire, that are now in Mexico, come back to New Hampshire, and you can tell them to go fuck themselves.",
        "I'd like to use really foul language. I won't do it. I was going to say they're really full of s**t, but I won't say that.",
        "The LGBT community, the gay community, the lesbian community — they are so much in favor of what I’ve been saying over the last three or four days.",
        "Can you imagine that, the face of our next president? I mean, she's a woman, and I'm not supposed to say bad things, but really, folks, come on. Are we serious?",
        "I think the only difference between me and the other candidates is that I'm more honest and my women are more beautiful",
        "The beauty of me is that I'm very rich.",
        "I like kids. I mean, I won’t do anything to take care of them. I’ll supply funds, and she’ll take care of the kids.",
        "I have a great relationship with the blacks.",
        "If Hillary Clinton can't satisfy her husband what makes her think she can satisfy America.",
        "I will be the greatest jobs president that God ever created.",
        "I don’t think I’ve made mistakes. Every time somebody said I made a mistake, they do the polls and my numbers go up, so I guess I haven't made any mistakes."
    ]
};

let quoteList = document.querySelector("#quoteList");

for (i=0; i<apiData.non_personalized.length; i++)
{
    let newEntry = document.createElement("li");
    newEntry.textContent = apiData.non_personalized[i];
    quoteList.appendChild(newEntry);
}