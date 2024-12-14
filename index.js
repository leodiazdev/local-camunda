const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3005;

app.use(bodyParser.json());

// Endpoint para fetchProcessInstances
app.post('/history/process-instance', (req, res) => {
  console.log('Received request for process instances', req.body);

  // Simulación de respuesta desde Camunda usando datos conocidos
  const mockedResponse = [
    {
        "id": "be865dd4-ab68-11ef-9aae-f6ffd26eaaa3",
        "businessKey": "moneyout_Case_1410202403",
        "processDefinitionId": "moneyout:7:9f512103-9214-11ef-b6f5-6e4a0ae546ba",
        "processDefinitionKey": "moneyout",
        "processDefinitionName": "Money Out",
        "processDefinitionVersion": 7,
        "startTime": "2024-11-25T20:06:23.320+0000",
        "endTime": null,
        "removalTime": null,
        "durationInMillis": null,
        "startUserId": "svc-DEV-MGIWFA-APP",
        "startActivityId": "StartEvent_1",
        "deleteReason": null,
        "rootProcessInstanceId": "be865dd4-ab68-11ef-9aae-f6ffd26eaaa3",
        "superProcessInstanceId": null,
        "superCaseInstanceId": null,
        "caseInstanceId": null,
        "tenantId": null,
        "state": "ACTIVE"
    }
]; 
  res.json(mockedResponse);
});

// Endpoint para fetchProcessInstanceCount
app.post('/process-instance/count', (req, res) => {
  console.log('Received request for process instance count', req.body);

  // Simulación de respuesta de la cuenta de procesos
  const mockedResponse = { count: 1 };
  
  res.json(mockedResponse);
});

// Endpoint para fetchProcessInstanceVariables
app.get('/process-instance/:id/variables', (req, res) => {
  console.log('Received request for process instance variables', req.params.id);

  // Simulación de respuesta de variables para una instancia específica
  const variablesByInstance = {
    "be865dd4-ab68-11ef-9aae-f6ffd26eaaa3": {
    "priorityAdjustment": {
        "type": "String",
        "value": "Adjustment",
        "valueInfo": {}
    },
    "clientName": {
        "type": "String",
        "value": "Client XYZ",
        "valueInfo": {}
    },
    "planName": {
        "type": "String",
        "value": "planName 1",
        "valueInfo": {}
    },
     "planAccount": {
        "type": "String",
        "value": "7778888",
        "valueInfo": {}
    },
    "liquidity": {
        "type": "Boolean",
        "value": false,
        "valueInfo": {}
    },
    "caseType": {
        "type": "String",
        "value": "Transaction Request",
        "valueInfo": {}
    },
    "igo": {
        "type": "String",
        "value": "yes",
        "valueInfo": {}
    },
    "caseId": {
        "type": "String",
        "value": "MO-0077",
        "valueInfo": {}
    },
    "priorityHighDollarAmt": {
        "type": "String",
        "value": "High Dollar Amt",
        "valueInfo": {}
    },
    "transactionCategory": {
        "type": "String",
        "value": "withdrawal",
        "valueInfo": {}
    },
    "priorityWhiteGlove": {
        "type": "String",
        "value": "White Glove",
        "valueInfo": {}
    },
    "planId": {
        "type": "String",
        "value": "p 1",
        "valueInfo": {}
    },
    "currency": {
        "type": "String",
        "value": "usd",
        "valueInfo": {}
    },
    "initiateFileName": {
        "type": "String",
        "value": "document.pdf",
        "valueInfo": {}
    },
    "amount": {
        "type": "Integer",
        "value": 32000,
        "valueInfo": {}
    },
    "bankABANumber": {
        "type": "Integer",
        "value": 987654321,
        "valueInfo": {}
    },
    "clientId": {
        "type": "String",
        "value": "C123456",
        "valueInfo": {}
    },
    "priorityQARequired": {
        "type": "String",
        "value": "QA Required",
        "valueInfo": {}
    },
    "bankAccNumber": {
        "type": "Integer",
        "value": 123456789,
        "valueInfo": {}
    },
    "commentsIniciateTrxDetail": {
        "type": "String",
        "value": "transaction for withdrawal",
        "valueInfo": {}
    },
    "priority": {
        "type": "String",
        "value": "Other",
        "valueInfo": {}
    },
    "priorityOther": {
        "type": "String",
        "value": "Sprint 9",
        "valueInfo": {}
    },
    "transactionType": {
        "type": "String",
        "value": "money out",
        "valueInfo": {}
    },
    "igovVariables": {
        "type": "Json",
        "value": "[{\"key\":\"bankingWireInstructionCompleted\",\"label\":\"Banking/Wire instruction is completed\",\"appliesNa\":false,\"value\":\"no\"},{\"key\":\"authenticationSignaturePerformed\",\"label\":\"Authentication of authorized signature performed\",\"appliesNa\":true,\"value\":\"na\",\"reason\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"},{\"key\":\"documentsPresentAttached\",\"label\":\"All documents are present/attached\",\"appliesNa\":true,\"value\":\"yes\",\"children\":[{\"key\":\"accountNumberMatchesName\",\"label\":\"Account number matches name\",\"appliesNa\":false,\"value\":\"yes\"},{\"key\":\"dollarAmountAccurate\",\"label\":\"Dollar amount is accurate\",\"appliesNa\":false,\"value\":\"yes\"},{\"key\":\"signaturePresent\",\"label\":\"Signature is present\",\"appliesNa\":false,\"value\":\"no\"},{\"key\":\"dateOnForm\",\"label\":\"Date on form\",\"appliesNa\":false,\"value\":\"no\"}]}]",
        "valueInfo": {}
    },
    "createdBy": {
        "type": "String",
        "value": "clientPortal",
        "valueInfo": {}
    },
    "crimsId": {
        "type": "Integer",
        "value": 123456,
        "valueInfo": {}
    },
    "transferType": {
        "type": "String",
        "value": "wire",
        "valueInfo": {}
    },
    "region": {
        "type": "String",
        "value": "US",
        "valueInfo": {}
    },
    "initiateFileUrl": {
        "type": "String",
        "value": "http://example.com/document.pdf",
        "valueInfo": {}
    },
    "priority": {
        "type": "String",
        "value": "Other",
        "valueInfo": {}
    },
     "comments": {
        "type": 'String',
        "value": 'Hi all, this is a comment',
},
}
  };

  res.json(variablesByInstance[req.params.id] || {});
});

// Endpoint para fetchActiveTask
app.get('/task', (req, res) => {
  console.log('Received request for tasks with processInstanceId', req.query.processInstanceId);

  // Simulación de tarea activa, usando las tareas conocidas
  const tasksByInstance = {
    'be865dd4-ab68-11ef-9aae-f6ffd26eaaa3': [
    {
        "id": "be8aa3d3-ab68-11ef-9aae-f6ffd26eaaa3",
        "name": "Task Review with Client (CSA)",
        "assignee": null,
        "created": "2024-11-25T20:06:23.348+0000",
        "due": null,
        "followUp": null,
        "lastUpdated": null,
        "delegationState": null,
        "description": null,
        "executionId": "be865dd4-ab68-11ef-9aae-f6ffd26eaaa3",
        "owner": null,
        "parentTaskId": null,
        "priority": 50,
        "processDefinitionId": "moneyout:7:9f512103-9214-11ef-b6f5-6e4a0ae546ba",
        "processInstanceId": "be865dd4-ab68-11ef-9aae-f6ffd26eaaa3",
        "taskDefinitionKey": "Activity_085j0os",
        "caseExecutionId": null,
        "caseInstanceId": null,
        "caseDefinitionId": null,
        "suspended": false,
        "formKey": null,
        "camundaFormRef": null,
        "tenantId": null
    }
]
  };

  res.json(tasksByInstance[req.query.processInstanceId] || []);
});

// Endpoint para claimTask
app.post('/task/:id/claim', (req, res) => {
  console.log(`Task with ID ${req.params.id} claimed by user ${req.body.userId}`);
  res.json({ message: `Task ${req.params.id} successfully claimed by ${req.body.userId}.` });
});

// Endpoint para completeTask
app.post('/task/:id/complete', (req, res) => {
  console.log(`Task with ID ${req.params.id} completed with variables`, req.body.variables);
  res.json({ message: `Task ${req.params.id} successfully completed.` });
});

app.listen(port, () => {
  console.log(`Mock Camunda API listening at http://localhost:${port}`);
});
