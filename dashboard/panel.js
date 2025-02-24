if (document.querySelector('.button-hide')) {
    document.querySelector('.button-hide').addEventListener('click', () => {
        nodecg.sendMessage('visible-score', false)
        nodecg.sendMessage('visible-matchup', false)
        nodecg.sendMessage('visible-anchors', false)
        nodecg.sendMessage('visible-interview', false)
        nodecg.sendMessage('visible-keys', -1)
        nodecg.sendMessage('visible-matchup-slate', false)
        nodecg.sendMessage('visible-replay', false)
    })
}

if (document.querySelector('.button-show-score')) {
    document.querySelector('.button-show-score').addEventListener('click', () => {
        nodecg.sendMessage('visible-matchup', false)
        nodecg.sendMessage('visible-anchors', false)
        nodecg.sendMessage('visible-interview', false)
        nodecg.sendMessage('visible-keys', -1)
        nodecg.sendMessage('visible-matchup-slate', false)
        nodecg.sendMessage('visible-replay', false)

        nodecg.sendMessage('visible-score', true)
    })
}

if (document.querySelector('.button-show-replay')) {
    document.querySelector('.button-show-replay').addEventListener('click', () => {
        nodecg.sendMessage('visible-score', false)
        nodecg.sendMessage('visible-matchup', false)
        nodecg.sendMessage('visible-anchors', false)
        nodecg.sendMessage('visible-interview', false)
        nodecg.sendMessage('visible-keys', -1)
        nodecg.sendMessage('visible-matchup-slate', false)

        nodecg.sendMessage('visible-replay', true)
    })
}

if (document.querySelector('.button-show-matchup')) {
    document.querySelector('.button-show-matchup').addEventListener('click', () => {
        nodecg.sendMessage('visible-score', false)
        nodecg.sendMessage('visible-anchors', false)
        nodecg.sendMessage('visible-interview', false)
        nodecg.sendMessage('visible-keys', -1)
        nodecg.sendMessage('visible-matchup-slate', false)
        nodecg.sendMessage('visible-replay', false)


        nodecg.sendMessage('visible-matchup', true)
    })
}

if (document.querySelector('.button-show-anchors')) {
    document.querySelector('.button-show-anchors').addEventListener('click', () => {
        nodecg.sendMessage('visible-score', false)
        nodecg.sendMessage('visible-matchup', false)
        nodecg.sendMessage('visible-interview', false)
        nodecg.sendMessage('visible-keys', -1)
        nodecg.sendMessage('visible-matchup-slate', false)
        nodecg.sendMessage('visible-replay', false)

        nodecg.sendMessage('visible-anchors', true)
    })
}

if (document.querySelector('.button-show-interview')) {
    document.querySelector('.button-show-interview').addEventListener('click', () => {
        nodecg.sendMessage('visible-score', false)
        nodecg.sendMessage('visible-matchup', false)
        nodecg.sendMessage('visible-anchors', false)
        nodecg.sendMessage('visible-keys', -1)
        nodecg.sendMessage('visible-matchup-slate', false)
        nodecg.sendMessage('visible-replay', false)

        nodecg.sendMessage('visible-interview', true)
    })
}

if (document.querySelector('.button-show-slate')) {
    document.querySelector('.button-show-slate').addEventListener('click', () => {
        nodecg.sendMessage('visible-score', false)
        nodecg.sendMessage('visible-anchors', false)
        nodecg.sendMessage('visible-interview', false)
        nodecg.sendMessage('visible-keys', -1)
        nodecg.sendMessage('visible-replay', false)

        nodecg.sendMessage('visible-matchup-slate', true)
        nodecg.sendMessage('visible-matchup', true)
    })
}

if (document.querySelector('.button-show-keys-0')) {
    document.querySelector('.button-show-keys-0').addEventListener('click', () => {
        nodecg.sendMessage('visible-keys', 0)
        
        nodecg.sendMessage('visible-score', false)
        nodecg.sendMessage('visible-anchors', false)
        nodecg.sendMessage('visible-interview', false)
        nodecg.sendMessage('visible-matchup-slate', false)
        nodecg.sendMessage('visible-matchup', false)
        nodecg.sendMessage('visible-replay', false)
    })

    document.querySelector('.button-show-keys-1').addEventListener('click', () => {
        nodecg.sendMessage('visible-keys', 1)
        
        nodecg.sendMessage('visible-score', false)
        nodecg.sendMessage('visible-anchors', false)
        nodecg.sendMessage('visible-interview', false)
        nodecg.sendMessage('visible-matchup-slate', false)
        nodecg.sendMessage('visible-matchup', false)
        nodecg.sendMessage('visible-replay', false)
    })

    document.querySelector('.button-show-keys-2').addEventListener('click', () => {
        nodecg.sendMessage('visible-keys', 2)

        nodecg.sendMessage('visible-score', false)
        nodecg.sendMessage('visible-anchors', false)
        nodecg.sendMessage('visible-interview', false)
        nodecg.sendMessage('visible-matchup-slate', false)
        nodecg.sendMessage('visible-matchup', false)
        nodecg.sendMessage('visible-replay', false)
    })

    document.querySelector('.button-show-keys-3').addEventListener('click', () => {
        nodecg.sendMessage('visible-keys', 3)

        nodecg.sendMessage('visible-score', false)
        nodecg.sendMessage('visible-anchors', false)
        nodecg.sendMessage('visible-interview', false)
        nodecg.sendMessage('visible-matchup-slate', false)
        nodecg.sendMessage('visible-matchup', false)
        nodecg.sendMessage('visible-replay', false)
    })

    document.querySelector('.button-show-keys-4').addEventListener('click', () => {
        nodecg.sendMessage('visible-keys', 4)

        nodecg.sendMessage('visible-score', false)
        nodecg.sendMessage('visible-anchors', false)
        nodecg.sendMessage('visible-interview', false)
        nodecg.sendMessage('visible-matchup-slate', false)
        nodecg.sendMessage('visible-matchup', false)
        nodecg.sendMessage('visible-replay', false)
    })

    document.querySelector('.button-show-keys-5').addEventListener('click', () => {
        nodecg.sendMessage('visible-keys', 5)

        nodecg.sendMessage('visible-score', false)
        nodecg.sendMessage('visible-anchors', false)
        nodecg.sendMessage('visible-interview', false)
        nodecg.sendMessage('visible-matchup-slate', false)
        nodecg.sendMessage('visible-matchup', false)
        nodecg.sendMessage('visible-replay', false)
    })

    document.querySelector('.button-show-keys-6').addEventListener('click', () => {
        nodecg.sendMessage('visible-keys', 6)

        nodecg.sendMessage('visible-score', false)
        nodecg.sendMessage('visible-anchors', false)
        nodecg.sendMessage('visible-interview', false)
        nodecg.sendMessage('visible-matchup-slate', false)
        nodecg.sendMessage('visible-matchup', false)
        nodecg.sendMessage('visible-replay', false)
    })

    document.querySelector('.button-show-keys-7').addEventListener('click', () => {
        nodecg.sendMessage('visible-keys', 7)

        nodecg.sendMessage('visible-score', false)
        nodecg.sendMessage('visible-anchors', false)
        nodecg.sendMessage('visible-interview', false)
        nodecg.sendMessage('visible-matchup-slate', false)
        nodecg.sendMessage('visible-matchup', false)
        nodecg.sendMessage('visible-replay', false)
    })
}

const awayScore = nodecg.Replicant('away-score', {
    defaultValue: 0
})

const homeScore = nodecg.Replicant('home-score', {
    defaultValue: 0
})

const qtrRef = nodecg.Replicant('qtr', {
    defaultValue: "QX"
})

if (document.querySelector('.button-qt-x')) {
    document.querySelector('.button-qt-x').addEventListener('click', () => { qtrRef.value = "QX" })
    document.querySelector('.button-qt-1').addEventListener('click', () => { qtrRef.value = "Q1" })
    document.querySelector('.button-qt-2').addEventListener('click', () => { qtrRef.value = "Q2" })
    document.querySelector('.button-qt-3').addEventListener('click', () => { qtrRef.value = "Q3" })
    document.querySelector('.button-qt-4').addEventListener('click', () => { qtrRef.value = "Q4" })

    document.querySelector('.button-p-1').addEventListener('click', () => { qtrRef.value = "P1" })
    document.querySelector('.button-p-2').addEventListener('click', () => { qtrRef.value = "P2" })
    document.querySelector('.button-p-ot').addEventListener('click', () => { qtrRef.value = "OT" })

    document.querySelector('#away-score').addEventListener('change', () => {
        awayScore.value = document.querySelector('#away-score').value
    })

    document.querySelector('.button-away-p1').addEventListener('click', () => {
        let score = Number(awayScore.value)
        score += 1
        awayScore.value = Number(awayScore.value) + 1
        document.querySelector('#away-score').value = score
    })
    
    document.querySelector('.button-away-p2').addEventListener('click', () => {
        let score = Number(awayScore.value)
        score += 2
        awayScore.value = Number(awayScore.value) + 2
        document.querySelector('#away-score').value = score
    })

    document.querySelector('.button-away-p3').addEventListener('click', () => {
        let score = Number(awayScore.value)
        score += 3
        awayScore.value = Number(awayScore.value) + 3
        document.querySelector('#away-score').value = score
    })

    document.querySelector('#home-score').addEventListener('change', () => {
        homeScore.value = document.querySelector('#home-score').value
    })

    document.querySelector('.button-home-p1').addEventListener('click', () => {
        let score = Number(homeScore.value)
        score += 1
        homeScore.value = Number(homeScore.value) + 1
        document.querySelector('#home-score').value = score
    })

    document.querySelector('.button-home-p2').addEventListener('click', () => {
        let score = Number(homeScore.value)
        score += 2
        homeScore.value = Number(homeScore.value) + 2
        document.querySelector('#home-score').value = score
    })

    document.querySelector('.button-home-p3').addEventListener('click', () => {
        let score = Number(homeScore.value)
        score += 3
        homeScore.value = Number(homeScore.value) + 3
        document.querySelector('#home-score').value = score
    })

}