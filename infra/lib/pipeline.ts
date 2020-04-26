import * as cdk from '@aws-cdk/core'
import * as codeBuild from '@aws-cdk/aws-codebuild'
import * as codePipeline from '@aws-cdk/aws-codepipeline'
import * as codePipelineActions from '@aws-cdk/aws-codepipeline-actions'

const appName = 'BibleVerseGenerator'

class PipelineStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const pipeline = new codePipeline.Pipeline(this, 'Pipeline', {
      pipelineName: `${appName}Pipeline`,
      restartExecutionOnUpdate: true,
      stages: [
        {
          stageName: 'Source',
          actions: [
            this.getSource()
          ]
        }
      ]
    })
  }

  getSource () {
    return new codePipelineActions.GitHubSourceAction({
      actionName: 'Github_Source',
      owner: 'David-Raucci' ,
      repo: 'bible-verse-generator',
      oauthToken: cdk.SecretValue.secretsManager('BibleVerseGeneratorRepoAuthToken'/*Need admin priv*/),
      output: new codePipeline.Artifact()
    })
  }
}

export default PipelineStack