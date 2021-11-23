const core = require('@actions/core')
const github = require('@actions/github')

var https = require('https')



const main = async() => {
    const githubToken = core.getInput('github_token', { required: true})
    const octokit = github.getOctokit(githubToken)
    const context = github.context
    const actor = github.context.actor
    const commentStarter = core.getInput('comment_starter')

    var requestOptions = {
        host: 'zenquotes.io',
        path: '/api/random',
        method: 'GET'
    }
    var req = https.get(requestOptions, (res) => {
        res.on('data', async (quoteData) => {
            var quoteObject = JSON.parse(quoteData)
            var formattedQuote = quoteObject[0].h
            console.log(formattedQuote)

            try {
                const commentMessage = `@${actor} ${commentStarter}\n**Here's an uplifting quote from us:** \n${formattedQuote}`
                const createCommentResponse = await octokit.rest.issues.createComment({
                    ...context.repo,
                    issue_number: context.issue.number,
                    body: commentMessage
                })
            } catch (error) {
                core.setFailed(error.message)
            }
        })
    })
    req.on('error', (error) => {
        console.error(error)
    })
    req.end()
}
(async() => {
    main();
})();