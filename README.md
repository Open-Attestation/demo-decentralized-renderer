# Demo decentralised renderer

Read more about OpenAttestation's `Decentralised Renderer` Architectural Decision Records (ADR) [here](https://github.com/Open-Attestation/adr/blob/master/decentralised_rendering.md).

## Introduction

This repository is a bare minimal demostration of how an OpenAttestation `Decentralised Renderer` + Viewer works.

## How to run

Concurrently run both applications.

For Renderer:

```
cd renderer
npm i
npm run start
```

For Viewer:

```
cd viewer
npm run start
```

Then head to `http://127.0.0.1:8080/` to see a rendered OpenAttestation document.

## Overview

```mermaid
flowchart TB
  DocumentRenderer-->DocumentViewer
    subgraph Viewer
      Website2-->DocumentViewer
    end
    DocumentViewer-->DocumentRenderer
    subgraph Decentralised Renderer
      Website1-->DocumentRenderer
        DocumentRenderer-->Layout1
          Layout1-->View1
          Layout1-->View2
          Layout1-->View3
        DocumentRenderer-->Layout2
          Layout2-->View4
          Layout2-->View5
    end
    subgraph You
      OpenAttestationDocument-->DocumentViewer
    end
```
