const eslintrc = {
    "extends": ["eslint-config-airbnb"],
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jquery": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "react",
        "import",
        "jsx-a11y"
    ],
    "rules": {
        //default
        "no-console": 0,
        "no-alert": 0,
        "no-debugger": 0,
        "jsx-quotes": [2, "prefer-single"],
        /**const object = {
           abc: () => {},
           aaaa: a,
           abv: "123",
           barBaz() {},
           qux
       };**/
        "no-restricted-syntax": 0, // 去掉for...in/of限制
        "eqeqeq": 0,// 关闭强制使用===
        "no-extra-boolean-cast": 0, // 关闭不能使用!!
        "no-plusplus": [0, { "allowForLoopAfterthoughts": true }],
        "arrow-body-style": 0,
        "no-trailing-spaces": 0,
        "object-shorthand": [2, "always", { "avoidQuotes": true }],
        "no-use-before-define": 0,
        "prefer-arrow-callback": 0,
        "space-before-function-paren": 0,
        "no-unneeded-ternary": 0,
        "indent": [1, 4],
        "no-underscore-dangle": 0,
        "no-unused-expressions": [1, { "allowShortCircuit": true, "allowTernary": true }],
        "space-in-parens": [1, "always"],
        "comma-dangle": [2, {
            "arrays": "never",
            "objects": "never",
            "imports": "never",
            "exports": "never",
            "functions": "never"
        }],
        "class-methods-use-this": 0,
        "func-names": 0,
        "no-param-reassign": 0,
        "no-return-assign": 0,
        "max-len": 0,
        "array-callback-return": 0,
        "prefer-destructuring": 0,
        "object-curly-newline": 0,
        "eol-last": 0,
        "guard-for-in": 0,
        //react
        "react/jsx-closing-tag-location": 0,
        "react/boolean-prop-naming": 1,
        "react/no-string-refs": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/no-array-index-key": 0,
        "react/no-find-dom-node": 0,
        "react/sort-comp": 0,
        "react/prop-types": 0,
        "react/jsx-first-prop-new-line": 0,
        "react/no-multi-comp": 0,
        "react/require-extension": 0,
        "react/jsx-no-comment-textnodes": 0,
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/no-danger": 0,
        //import
        "import/no-unresolved": 0,
        "import/extensions": 0,
        "import/no-extraneous-dependencies": 0,
        "import/prefer-default-export": 0,
        //jsx-a11y
        "jsx-a11y/img-has-alt": 0,
        "jsx-a11y/anchor-has-content": 0,
        "jsx-a11y/href-no-hash": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/anchor-is-valid": 0,
    }
}

const CHECK_ENV = process.env.CHECK_ENV;
if ( CHECK_ENV === 'production' ) {
    eslintrc.rules['no-console'] = 2;
    eslintrc.rules['no-alert'] = 2;
    eslintrc.rules['no-debugger'] = 2;
}

module.exports = eslintrc;