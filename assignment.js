//1
function getWords(str) {
    var wordCount = str.match(/(\w+)/g).length;
    console.log("word count : ", wordCount);
}

getWords(`In 1961, producers Albert R. Broccoli and Harry Saltzman purchased the filming rights to Fleming's novels.[3] They founded Eon Productions and, with financial backing by United Artists, produced Dr. No, directed by Terence Young and featuring Connery as Bond.[4] Following its release in 1962, Broccoli and Saltzman created the holding company Danjaq to ensure future productions in the James Bond film series.[5] The series currently has twenty-five films, with the most recent, No Time to Die, released in September 2021. With a combined gross of nearly $7 billion to date, it is the fourth-highest-grossing film series.[6] Accounting for inflation, it has earned over $14 billion at current prices.[a] The films have won five Academy Awards: for Sound Effects (now Sound Editing) in Goldfinger (at the 37th Awards), to John Stears for Visual Effects in Thunderball (at the 38th Awards), to Per Hallberg and Karen Baker Landers for Sound Editing, to Adele and Paul Epworth for Original Song in Skyfall (at the 85th Awards) and to Sam Smith and Jimmy Napes for Original Song in Spectre (at the 88th Awards). Several of the songs produced for the films have been nominated for Academy Awards for Original Song, including Paul McCartney's "Live and Let Die", Carly Simon's "Nobody Does It Better" and Sheena Easton's "For Your Eyes Only". In 1982 Albert R. Broccoli received the Irving G. Thalberg Memorial Award`);

//2
function getBlankSpace(str) {
    var spaceCount = str.split(" ").length - 1;
    console.log("Blank Space Count : ", spaceCount);
}

getBlankSpace(`In 1961, producers Albert R. Broccoli and Harry Saltzman purchased the filming rights to Fleming's novels.[3] They founded Eon Productions and, with financial backing by United Artists, produced Dr. No, directed by Terence Young and featuring Connery as Bond.[4] Following its release in 1962, Broccoli and Saltzman created the holding company Danjaq to ensure future productions in the James Bond film series.[5] The series currently has twenty-five films, with the most recent, No Time to Die, released in September 2021. With a combined gross of nearly $7 billion to date, it is the fourth-highest-grossing film series.[6] Accounting for inflation, it has earned over $14 billion at current prices.[a] The films have won five Academy Awards: for Sound Effects (now Sound Editing) in Goldfinger (at the 37th Awards), to John Stears for Visual Effects in Thunderball (at the 38th Awards), to Per Hallberg and Karen Baker Landers for Sound Editing, to Adele and Paul Epworth for Original Song in Skyfall (at the 85th Awards) and to Sam Smith and Jimmy Napes for Original Song in Spectre (at the 88th Awards). Several of the songs produced for the films have been nominated for Academy Awards for Original Song, including Paul McCartney's "Live and Let Die", Carly Simon's "Nobody Does It Better" and Sheena Easton's "For Your Eyes Only". In 1982 Albert R. Broccoli received the Irving G. Thalberg Memorial Award`)

//3
function getSpecialCharacter(str) {
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var spclCharCount = 0;
    var string = str.split(" ");
    for (let i = 0; i < str.length; i++) {
        if (format.test(str[i])) {
            spclCharCount += 1;
        }

    }
    console.log("Special Character Count :", spclCharCount);
}

getSpecialCharacter(`In 1961, producers Albert R. Broccoli and Harry Saltzman purchased the filming rights to Fleming's novels.[3] They founded Eon Productions and, with financial backing by United Artists, produced Dr. No, directed by Terence Young and featuring Connery as Bond.[4] Following its release in 1962, Broccoli and Saltzman created the holding company Danjaq to ensure future productions in the James Bond film series.[5] The series currently has twenty-five films, with the most recent, No Time to Die, released in September 2021. With a combined gross of nearly $7 billion to date, it is the fourth-highest-grossing film series.[6] Accounting for inflation, it has earned over $14 billion at current prices.[a] The films have won five Academy Awards: for Sound Effects (now Sound Editing) in Goldfinger (at the 37th Awards), to John Stears for Visual Effects in Thunderball (at the 38th Awards), to Per Hallberg and Karen Baker Landers for Sound Editing, to Adele and Paul Epworth for Original Song in Skyfall (at the 85th Awards) and to Sam Smith and Jimmy Napes for Original Song in Spectre (at the 88th Awards). Several of the songs produced for the films have been nominated for Academy Awards for Original Song, including Paul McCartney's "Live and Let Die", Carly Simon's "Nobody Does It Better" and Sheena Easton's "For Your Eyes Only". In 1982 Albert R. Broccoli received the Irving G. Thalberg Memorial Award`)

//4
function getStatement(str) {
    const statmentCount = str.split(". ").length - 1;
    console.log("Total Statement : ", statmentCount);
}

getStatement(`In 1961, producers Albert R. Broccoli and Harry Saltzman purchased the filming rights to Fleming's novels.[3] They founded Eon Productions and, with financial backing by United Artists, produced Dr. No, directed by Terence Young and featuring Connery as Bond.[4] Following its release in 1962, Broccoli and Saltzman created the holding company Danjaq to ensure future productions in the James Bond film series.[5] The series currently has twenty-five films, with the most recent, No Time to Die, released in September 2021. With a combined gross of nearly $7 billion to date, it is the fourth-highest-grossing film series.[6] Accounting for inflation, it has earned over $14 billion at current prices.[a] The films have won five Academy Awards: for Sound Effects (now Sound Editing) in Goldfinger (at the 37th Awards), to John Stears for Visual Effects in Thunderball (at the 38th Awards), to Per Hallberg and Karen Baker Landers for Sound Editing, to Adele and Paul Epworth for Original Song in Skyfall (at the 85th Awards) and to Sam Smith and Jimmy Napes for Original Song in Spectre (at the 88th Awards). Several of the songs produced for the films have been nominated for Academy Awards for Original Song, including Paul McCartney's "Live and Let Die", Carly Simon's "Nobody Does It Better" and Sheena Easton's "For Your Eyes Only". In 1982 Albert R. Broccoli received the Irving G. Thalberg Memorial Award`)


//5
function isVowel(ch) {
    ch = ch.toUpperCase();
    return ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U";
}
function countVowels(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++)
        if (isVowel(str[i]))

            // Check for vowel
            ++count;
    return count;
}

console.log("Total Vowels : ", countVowels(`In 1961, producers Albert R. Broccoli and Harry Saltzman purchased the filming rights to Fleming's novels.[3] They founded Eon Productions and, with financial backing by United Artists, produced Dr. No, directed by Terence Young and featuring Connery as Bond.[4] Following its release in 1962, Broccoli and Saltzman created the holding company Danjaq to ensure future productions in the James Bond film series.[5] The series currently has twenty-five films, with the most recent, No Time to Die, released in September 2021. With a combined gross of nearly $7 billion to date, it is the fourth-highest-grossing film series.[6] Accounting for inflation, it has earned over $14 billion at current prices.[a] The films have won five Academy Awards: for Sound Effects (now Sound Editing) in Goldfinger (at the 37th Awards), to John Stears for Visual Effects in Thunderball (at the 38th Awards), to Per Hallberg and Karen Baker Landers for Sound Editing, to Adele and Paul Epworth for Original Song in Skyfall (at the 85th Awards) and to Sam Smith and Jimmy Napes for Original Song in Spectre (at the 88th Awards). Several of the songs produced for the films have been nominated for Academy Awards for Original Song, including Paul McCartney's "Live and Let Die", Carly Simon's "Nobody Does It Better" and Sheena Easton's "For Your Eyes Only". In 1982 Albert R. Broccoli received the Irving G. Thalberg Memorial Award`))

//6
function getOccurence(str) {
    let char = str.split(" ");
    let thecount = 0;
    let ofcount = 0;
    let andcount = 0;
    for (let i = 0; i < char.length; i++) {
        if ("the" == (char[i])) {
            thecount++;
        } else if ("of" == (char[i])) {
            ofcount++;
        } else if ("and" == (char[i])) {
            andcount++;
        }
    }
    console.log("Occurence of 'of' : ", ofcount);
    console.log("Occurence of 'and' : ", andcount);
    console.log("Occurence of 'the' : ", thecount);
}
getOccurence(`In 1961, producers Albert R. Broccoli and Harry Saltzman purchased the filming rights to Fleming's novels.[3] They founded Eon Productions and, with financial backing by United Artists, produced Dr. No, directed by Terence Young and featuring Connery as Bond.[4] Following its release in 1962, Broccoli and Saltzman created the holding company Danjaq to ensure future productions in the James Bond film series.[5] The series currently has twenty-five films, with the most recent, No Time to Die, released in September 2021. With a combined gross of nearly $7 billion to date, it is the fourth-highest-grossing film series.[6] Accounting for inflation, it has earned over $14 billion at current prices.[a] The films have won five Academy Awards: for Sound Effects (now Sound Editing) in Goldfinger (at the 37th Awards), to John Stears for Visual Effects in Thunderball (at the 38th Awards), to Per Hallberg and Karen Baker Landers for Sound Editing, to Adele and Paul Epworth for Original Song in Skyfall (at the 85th Awards) and to Sam Smith and Jimmy Napes for Original Song in Spectre (at the 88th Awards). Several of the songs produced for the films have been nominated for Academy Awards for Original Song, including Paul McCartney's "Live and Let Die", Carly Simon's "Nobody Does It Better" and Sheena Easton's "For Your Eyes Only". In 1982 Albert R. Broccoli received the Irving G. Thalberg Memorial Award`)


//7
function getEmp() {
    let Employees = [
        { EmpNo: 102, EmpName: 'B', Salary: 22222, DeptName: 'D2' },
        { EmpNo: 103, EmpName: 'C', Salary: 32222, DeptName: 'D3' },
        { EmpNo: 104, EmpName: 'D', Salary: 42222, DeptName: 'D1' },
        { EmpNo: 105, EmpName: 'E', Salary: 52222, DeptName: 'D2' },
        { EmpNo: 106, EmpName: 'F', Salary: 62222, DeptName: 'D3' },
        { EmpNo: 101, EmpName: 'A', Salary: 12222, DeptName: 'D1' }
    ];

    var ed1 = Employees.filter(function (e) {
        return e.DeptName === 'D1';
    });
    console.log("Result Department 'D1': ".concat(JSON.stringify(ed1)));
    var ed2 = Employees.filter(function (e) {
        return e.DeptName === 'D2';
    });
    console.log("Result Department 'D2': ".concat(JSON.stringify(ed2)));
    var ed3 = Employees.filter(function (e) {
        return e.DeptName === 'D3';
    });
    console.log("Result Department 'D3': ".concat(JSON.stringify(ed3)));

    var ed1S = 0;
    ed1.forEach(e => { ed1S = e.Salary + ed1S })
    console.log("Total Salary of Department 'D1' : ", ed1S);

    var ed2S = 0;
    ed2.forEach(e => { ed2S = e.Salary + ed2S })
    console.log("Total Salary of Department 'D2' : ", ed2S);

    var ed3S = 0;
    ed3.forEach(e => { ed3S = e.Salary + ed3S })
    console.log("Total Salary of Department 'D3' : ", ed3S);

}

getEmp()