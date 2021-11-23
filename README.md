# uplifiting-quote-action
Comments an uplifting quote every time you comment on a PR or an issue.
![GithubQuoteComment](https://user-images.githubusercontent.com/49329642/143082662-e8fc29ef-54a2-4edf-a7b2-19f53632b4b0.png)

## Inputs

### `github_token`
**Required** A github token

### `comment_starter`
**Optional** A custom beginning statement for a comment

## Outputs
None

## Example Usage
```
name: quote_comment
on: issue_comment
jobs:
  pr_commented:
    name: PR Comment
    if: ${{ github.event.issue.pull_request }}
    runs-on: ubuntu-latest
    steps:
      - uses: infinity-intellect/uplifiting-quote-action@v1.0.0
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          comment_starter: 'Thanks for commenting on this PR.'
  issue_commented:
    name: Issue Comment
    if: ${{ !github.event.issue.pull_request }}
    runs-on: ubuntu-latest
    steps:
      - uses: infinity-intellect/uplifiting-quote-action@v1.0.0
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          comment_starter: 'We appreciate you taking your time to comment on this issue.'
```
