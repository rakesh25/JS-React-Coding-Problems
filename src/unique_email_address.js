//https://leetcode.com/explore/interview/card/adobe/483/array-and-strings/2504/

/*
Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.
*/

function numUniqueEmails(emails) {
    let uniqueEmails = new Set();

    for(let i=0; i<emails.length; i++) {
        processEmails(emails[i], uniqueEmails);
    }
    console.table(uniqueEmails);
    return uniqueEmails.size;
};

function processEmails(email, uniqueEmails) {
    let parts = email.split('@');
    let domain = parts[1];
    let local = parts[0];

    let findFirstPlusIndex = local.indexOf('+');
    
    if(findFirstPlusIndex !== -1) {
        local = local.split('').splice(0, findFirstPlusIndex).join('');
    }

    local = local.split('.').join('');

    let final = `${local}@${domain}`;

    if(!uniqueEmails.has(final)) {
        uniqueEmails.add(final);
    }
}

const emails = ["test.email+alex@leetcode.com", "test.email@leetcode.com"];
console.log(numUniqueEmails(emails));