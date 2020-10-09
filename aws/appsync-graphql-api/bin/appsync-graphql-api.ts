#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { AppsyncGraphqlApiStack } from '../lib/appsync-graphql-api-stack';

const app = new cdk.App();
new AppsyncGraphqlApiStack(app, 'AppsyncGraphqlApiStack');
