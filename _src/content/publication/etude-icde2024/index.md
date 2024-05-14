---
title: "ETUDE - Evaluating the Inference Latency of Session-Based Models at Scale"
authors:
- admin
- Olivier Sprangers
- Frank Kootte
- Shubha Guha
- Maarten de Rijke
- Sebastian Schelter
date: "2024-05-14T11:00:00Z"
doi: "10.1109/ICDE51399.2021.00277"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-02-16T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "(ICDE, Industry and Application Papers)"
publication_short: "(ICDE, Industry and Application Papers)"

abstract: Session-based recommendation (SBR) targets a core scenario in e-Commerce. Given a sequence of interactions of a visitor with a selection of items, we want to recommend the next item(s) of interest to interact with. Unfortunately, SBR models are difficult to deploy in practice, as (i) session-based recommendations cannot be precomputed offline, but must be inferred online for ongoing user sessions with low latency, and (ii) there is a huge variety of SBR models available, whose inference performance and deployment cost is unclear. As a result, data scientists must typically prototype and evaluate different deployment options in collaboration with devops teams - a tedious and costly process, which does not scale to multiple use cases. Therefore, we present ETUDE, an end-to-end benchmarking framework, which enables data scientists to automatically evaluate the inference performance of SBR models under different deployment options. They can declaratively specify workload statistics, hardware options, as well as latency and throughput constraints. Based on these, ETUDE automatically deploys and runs an inference benchmark in Kubernetes with a synthetically generated click workload, and provides measurements on the achieved throughput and latency, as a basis for feasible and cost-efficient deployment options. We detail the design of ETUDE and present an experimental study for ten different SBR models in challenging settings resembling real-world workloads encountered at the large European e-Commerce platform bol.com. We determine performant and cost-efficient deployment options in terms of models and cloud instance types for a variety of online shopping use cases. Moreover, we identify severe performance bottlenecks in the open source TorchServe inference server from the PyTorch ecosystem and in the implementation of four SBR models from the open source RecBole library. We make the source code of our framework and experimental results publicly available.




links:
url_pdf: 'https://github.com/bkersbergen/etudelib/blob/main/_ICDE_24____Etude.pdf'
#url_code: '#'
#url_dataset: '#'
#url_poster: '#'
url_project: 'https://icde2024.github.io/program.html'
#url_slides: ''
#url_source: '#'
#url_video: 'https://www.youtube.com/watch?v=0o4VwF0YqUg'


# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.


---



