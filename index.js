// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
};

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
};

function wrapAdjective(p1="*"){
    return function(p2="special"){
        return `You are ${p1}${p2}${p1}!`;
    };
};