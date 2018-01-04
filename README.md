# cybertooth-ember-addon-components

Some simple components used to build the demo and documentation websites for cybertooth.io.

**I don't recommend using these as they won't do much for you.**

## Components

* `a-ember-observer` - create a link to the ember observer package.
* `addon-badges` - a paragraph full of all the badges for user/organization and repository.
* `img-embadge` - an img tag; thanks to https://embadge.io/
* `twbs-navbar` - a demo website navbar that can be used in all cybertooth.io demo sites.

# Collaboration Information

This README outlines the details of collaborating on this Ember add-on.

## Installation

* `git clone git@github.com:cybertoothca/cybertooth-ember-addon-components.git`
* `cd cybertooth-ember-addon-components`


### With NPM

```
npm install
```

### With Yarn

```
yarn
```

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your add-on against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com](https://ember-cli.com).

# Linking This Add-on For Local Testing

## Linking

1. From the command line at the root of __this__ project run the
`npm link` command to _link_ this add-on within your local
node repository.
1. From the _other_ Ember project that you wish to test this add-on
in, execute the following command:
`npm link cybertooth-ember-addon-components`.
1. Now in that same _other_ Ember project, you should go into the
`package.json` and add the ember add-on with the version _*_.  It will
look something like this: `"cybertooth-ember-addon-components": "*"`.  Now
when/if you execute `npm install` on this _other_ project it
will know to look for the linked add-on rather than fetch it from
the central repository.

## Unlinking

1. Remove the add-on from your local node repository with the following
command (that can be run anywhere):
`npm uninstall -g cybertooth-ember-addon-components`
1. Remove the reference to the `cybertooth-ember-addon-components`
in your _other_ project's `package.json`.
1. Run an `npm prune` and `bower prune` from the root of your _other_ project's command line.
