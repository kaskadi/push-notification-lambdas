![](https://img.shields.io/github/package-json/v/kaskadi/push-notification-lambdas)
![](https://img.shields.io/badge/code--style-standard-blue)
![](https://img.shields.io/github/license/kaskadi/push-notification-lambdas?color=blue)

**GitHub Actions workflows status**

[![](https://img.shields.io/github/workflow/status/kaskadi/push-notification-lambdas/deploy?label=deployed&logo=Amazon%20AWS)](https://github.com/kaskadi/push-notification-lambdas/actions?query=workflow%3Adeploy)
[![](https://img.shields.io/github/workflow/status/kaskadi/push-notification-lambdas/build?label=build&logo=mocha)](https://github.com/kaskadi/push-notification-lambdas/actions?query=workflow%3Abuild)
[![](https://img.shields.io/github/workflow/status/kaskadi/push-notification-lambdas/syntax-check?label=syntax-check&logo=serverless)](https://github.com/kaskadi/push-notification-lambdas/actions?query=workflow%3Asyntax-check)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/push-notification-lambdas?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/push-notification-lambdas)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/push-notification-lambdas?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/push-notification-lambdas)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/push-notification-lambdas?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/push-notification-lambdas)

**LGTM**

[![](https://img.shields.io/lgtm/grade/javascript/github/kaskadi/push-notification-lambdas?label=code%20quality&logo=LGTM)](https://lgtm.com/projects/g/kaskadi/push-notification-lambdas/?mode=list&logo=LGTM)

<!-- You can add badges inside of this section if you'd like -->

****

<!-- automatically generated documentation will be placed in here -->
# Resources documentation

The following lambda functions are defined in this repository:
- [stocks-notif](#stocks-notif)

The following layers are defined in this repository:
- [push-notification-lambdas-layer](#push-notification-lambdas-layer)

## stocks-notif <a name="stocks-notif"></a>

|     Name     | Sources           | Timeout |                      Handler                      | Layers                                                                                | Destinations                                                                             |
| :----------: | :---------------- | :-----: | :-----------------------------------------------: | :------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------- |
| stocks-notif | No source defined | default | [handler](./lambdas/stocks-notif/stocks-notif.js) | <ul><li>[push-notification-lambdas-layer](#push-notification-lambdas-layer)</li></ul> | <ul><li>On success: push-notif-results _(type: Event Bridge, defined via ARN)_</li></ul> |

See [configuration file](./serverless.yml) for more details.

## push-notification-lambdas-layer <a name="push-notification-lambdas-layer"></a>

### Description

Layer for push-notification-lambdas

### Dependencies

- `aws-es-client`, version: `^1.0.2` ([see on NPM](https://www.npmjs.com/package/aws-es-client))
- `web-push`, version: `^3.4.4` ([see on NPM](https://www.npmjs.com/package/web-push))
- `push-notif-utils` (local utility)

See [configuration file](./serverless.yml) for more details.

# Stack tags

You can use any tags (and their respective values) visible below to find ressources related to this stack on AWS. See [here](https://docs.amazonaws.cn/en_us/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) for more details.

| Tag          | Value                     |
| :----------- | :------------------------ |
| app          | kaskadi                   |
| service      | push-notification-lambdas |
| logical-unit | push                      |
| type         | eventBridge               |
<!-- automatically generated documentation will be placed in here -->

<!-- You can customize this template as you'd like! -->