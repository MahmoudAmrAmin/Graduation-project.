# 🛍️ AI-Driven Fashion Demand Forecasting

![Python](https://img.shields.io/badge/Python-3.10%2B-blue?logo=python&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-2.0%2B-ee4c2c?logo=pytorch&logoColor=white)
![NeuralForecast](https://img.shields.io/badge/Model-PatchTST-yellow)
![Status](https://img.shields.io/badge/Status-Production%20Ready-success)

## 📖 Executive Summary
This project implements an end-to-end **Time-Series Forecasting Pipeline** to predict daily sales for fashion retail products. 

The goal is to optimize inventory planning by accurately forecasting demand for the next **7 days**. We utilize the State-of-the-Art (SOTA) **PatchTST (Patch Time Series Transformer)** architecture, which outperforms traditional statistical models and earlier Deep Learning methods (like LSTM) by learning long-term dependencies through patch-wise attention mechanisms.

The pipeline is fully modular, covering data ingestion, extensive Exploratory Data Analysis (EDA), rigorous Feature Engineering, Model Training, and Business Evaluation.

---

## 🛠️ Tech Stack & Tools

The project is built using a modern Data Science stack, leveraging the efficiency of PyTorch and the `NeuralForecast` library.

| Category | Technology | Usage |
| :--- | :--- | :--- |
| **Core** | ![Python](https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white) | Primary programming language. |
| **Deep Learning** | ![PyTorch](https://img.shields.io/badge/-PyTorch-EE4C2C?logo=pytorch&logoColor=white) | Backend for tensor computations and model training. |
| **Forecasting** | **NeuralForecast (Nixtla)** | Framework implementing the PatchTST architecture. |
| **Data Manipulation** | ![Pandas](https://img.shields.io/badge/-Pandas-150458?logo=pandas&logoColor=white) ![NumPy](https://img.shields.io/badge/-NumPy-013243?logo=numpy&logoColor=white) | Dataframes handling, time-series slicing, and matrix operations. |
| **Preprocessing** | ![Scikit-Learn](https://img.shields.io/badge/-Scikit--Learn-F7931E?logo=scikit-learn&logoColor=white) | `StandardScaler` for normalization and `LabelEncoder`. |
| **Visualization** | ![Matplotlib](https://img.shields.io/badge/-Matplotlib-003B57?logo=python&logoColor=white) ![Seaborn](https://img.shields.io/badge/-Seaborn-44A833?logo=python&logoColor=white) | Heatmaps, time-series plots, and error distribution charts. |
| **Deployment** | **Joblib** | Serialization of Scalers and artifacts. |

---

## 📂 Repository Structure

The project is organized into a clean directory structure, isolating source code, data, and artifacts:

```text
├── Notebooks/
│   ├── EDA.ipynb                         # 🔍 Step 1: Exploratory Data Analysis
│   ├── Feature_Engineering.ipynb         # ⚙️ Step 2: Preprocessing & Transformation
│   ├── Training_PatchTST.ipynb           # 🤖 Step 3: Model Training (PatchTST)
│   └── Inference_and_Evaluation.ipynb    # 📊 Step 4: Inference, Benchmarking & Reporting
├── processed_data/
│   └── modelled_dataset.csv              # 💾 The final preprocessed dataset used for modeling
├── artifacts/
│   ├── scalers.pkl                       # ⚖️ Scaler objects for data normalization
│   └── Production_model/                 # 🏭 Directory containing the trained PatchTST model
│       ├── alias_to_model.pkl
│       ├── configuration.pkl
│       ├── dataset.pkl
│       └── PatchTST_0.ckpt               # 🧠 The trained model checkpoints (weights)
└── README.md                             # 📄 Project Documentation
