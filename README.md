# uplifiting-quote-action
Comments an uplifting quote every time you comment on a PR or an issue.

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
