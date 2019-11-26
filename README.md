# code-quiz

# PURPOSE

Allow a hypothetical user to test their JS knowledge by taking a quiz. It'll be a series of multiple choice questions 
presented one at a time. Each answer will have a button so the user can choose. It'll be a timed test. Wrong answers will
result in a time penalty. The page will gather the user's score and write it to localStorage. There will be an ability to 
view high scores. 

Should I allow multiple scores by each user? 
Do I only let each user see his or her own scores? 
If it's only high scores, i.e., one entry per user, when I store, I'll to detect if the current score doesn't exceed
    the stored high value, and not write the new one 

I'm horrible with visuals. I like burlywood, so I used the w3Schools color picker to find matches. If I haven't gotten rid of the ugly 
yellow right in the middle, it's 'cause I forgot. 

The purpose of the exercise is to demonstrate that I can: 

    store and access data in localStorage
    traverse the DOM using either JS or JQuery 
    dynamically add elements to the page
    respond to user input 
    use the timer
    
# PSEUDOCODE

on page open, 

    display buttons, default time string. 
    no question displayed 

on click VIEW HIGH SCORES

    get scores string from localStorage. 
    convert to object or array
    open a modal (?)
    display the list of initials/scores

    when the user chooses, closes the modal 

on click START QUIZ

    set timer to default max (=60)
    start timer
    update time remaining text
    load 1st question

on each timer ... update

    update time remanining text

on click OK (answer) button

    which answer is it? 
    check answer
    give right/wrong message
    accumulate right ct, wrong ct, score, whatever
    if wrong, time penalty 
    load next question

on end timer

    delete question and answers
    display score
    ask user for initials 
    store initials/score in array/object
    stringify 
    store in localStorage

