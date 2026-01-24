<div align="center">

# 🔗🌐 Optichain (AI Supply Chain Optimizer for SMEs )


<div align="center">

<p align="center">
  <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" />
  <img src="https://img.shields.io/badge/HuggingFace-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black" />
  <img src="https://img.shields.io/badge/Stable_Baselines3-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/OpenAI_Gym-0081C8?style=for-the-badge&logo=openai&logoColor=white" />
  <img src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" />
  <img src="https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white" />
  <img src="https://img.shields.io/badge/Scikit_Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" />
  <br>
  <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" />
  <img src="https://img.shields.io/badge/Django_REST-A30000?style=for-the-badge&logo=django&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" />
  <img src="https://img.shields.io/badge/Celery-37814A?style=for-the-badge&logo=celery&logoColor=white" />
  <br>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
  <br>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/Apache_Airflow-017CEE?style=for-the-badge&logo=apache-airflow&logoColor=white" />
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" />
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" />
</p>

</div>




</div>

---

## 📖 Project Overview

Optichain is an AI-driven SaaS platform acting as an autonomous "Digital Supply Chain Manager" for SMEs in the Middle East, filling the gap between basic spreadsheets and costly enterprise systems.
It leverages a Deep Reinforcement Learning (DRL) engine for optimal inventory decisions and PatchTST models for state-of-the-art demand forecasting. Optichain goes beyond management by offering a Proactive Risk Radar to mitigate volatility, a B2B Collaborative Network for dead stock redistribution, and an Interactive 'What-If' Dashboard for scenario planning in a digital twin environment.
## 🏗️ The Problem vs. The Solution

| The Challenge (SMEs) 📉 | The Optichain Solution 🚀 |
| :--- | :--- |
| **Guesswork:** Relying on intuition for ordering stock. | **Data-Driven:** DRL agents learn optimal policies based on historical data. |
| **Stockouts:** Losing sales due to poor planning. | **Proactive Forecasting:** **PatchTST** models predict long-term demand with SOTA accuracy. |
| **Dead Stock:** Capital tied up in unsold inventory. | **Smart Redistribution:** A collaborative B2B network to sell excess stock. |
| **Static Planning:** Inability to adapt to market shocks. | **Dynamic Simulation:** A digital twin environment that adapts to volatility. |

---

## ✨ Key Features

### 🧠 1. DRL Optimization Engine (The Core)
The heart of Optichain is a **Deep Reinforcement Learning Agent** (using **PPO** - Proximal Policy Optimization).
* **Dynamic Decision Making:** The agent observes the current state (inventory, cash flow, pending orders) and takes actions (order quantities, supplier choice) to maximize long-term reward.
* **Continuous Learning:** The model improves over time, learning from simulated environments and real-world feedback.

### 📈 2. Next-Gen Demand Forecasting (PatchTST)
Instead of traditional LSTMs, we utilize **PatchTST (Patch Time Series Transformer)**.
* **Why PatchTST?**
    * **Channel Independence:** Treats multivariate time series as independent channels, preserving unique patterns per product.
    * **Patching Mechanism:** Segments time series into patches (like Vision Transformers), allowing the model to capture significantly longer history dependencies than LSTMs/RNNs.
    * **Result:** Higher accuracy in long-term forecasting, crucial for supply chain lead times.

### 📊 3. Interactive 'What-If' Dashboard
* Allows business owners to simulate scenarios (e.g., "What if supplier lead time doubles?" or "What if demand spikes by 50%?").
* Visualizes the AI's predicted response to build trust and transparency.

### 🤝 4. Collaborative Supply Chain Network
* A unique marketplace feature allowing SMEs within the Optichain network to sell excess inventory to one another.
* Turns potential "Dead Stock" losses into recovered capital.

### 🛡️ 5. Proactive Risk Radar
* Anomaly detection systems monitor supplier reliability and shipping delays.
* Alerts users to potential disruptions before they impact operations.

---

## ⚙️ Technical Architecture

The project is built upon a robust interaction between a **Simulated Environment** and the **DRL Agent**, served via a **Django** backend and a **React** frontend.

### The Simulation (Digital Twin)
We created a custom Gym-compatible environment that mimics real-world supply chain dynamics:
* **Stochastic Demand:** Modeled using real-world retail datasets.
* **Supplier Logic:** Simulates variable lead times and reliability scores.

### The Agent (Brain)
* **Algorithm:** Proximal Policy Optimization (PPO).
* **Observation Space:** Stock levels, incoming shipments, demand forecast (from PatchTST), current capital.
* **Reward Function:** `(Revenue - Holding Cost - Stockout Penalty - Procurement Cost)`.

---

## 🛠️ Tech Stack

<div align="center">

### **Artificial Intelligence & Data Science**
<img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" />
<img src="https://img.shields.io/badge/HuggingFace-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black" />
<img src="https://img.shields.io/badge/Stable_Baselines3-3776AB?style=for-the-badge&logo=python&logoColor=white" />
<img src="https://img.shields.io/badge/OpenAI_Gym-0081C8?style=for-the-badge&logo=openai&logoColor=white" />
<img src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" />
<img src="https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white" />
<img src="https://img.shields.io/badge/Scikit_Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" />

### **Backend & Database**
<img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" />
<img src="https://img.shields.io/badge/Django_REST-A30000?style=for-the-badge&logo=django&logoColor=white" />
<img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" />
<img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" />
<img src="https://img.shields.io/badge/Celery-37814A?style=for-the-badge&logo=celery&logoColor=white" />

### **Frontend & UI**
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
<img src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white" />
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />

### **DevOps & Infrastructure**
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
<img src="https://img.shields.io/badge/Apache_Airflow-017CEE?style=for-the-badge&logo=apache-airflow&logoColor=white" />
<img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" />
<img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" />

</div>

---

## 🚀 Getting Started

To run the simulation and train the agent locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/optichain.git](https://github.com/yourusername/optichain.git)
    cd optichain
    ```

2.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

3.  **Run PatchTST Forecasting:**
    ```bash
    python forecasting/patchtst_train.py
    ```

4.  **Train the DRL Agent:**
    ```bash
    python agents/train_agent.py --algo ppo
    ```

5.  **Start Django Server:**
    ```bash
    python backend/manage.py runserver
    ```

---

## 👥 Meet the Team

<div align="center">

| Name | Role | Focus Area |
| :--- | :--- | :--- |
| **Mahmoud Amr** | AI Engineer | 🧠 Machine Learning & DRL |
| **Mazen Islam** | AI Engineer | 🧠 Machine Learning & DRL |
| **Mohamed Hamdy** | AI Engineer | 🧠 Machine Learning & DRL |
| **Abdelrahman Yousry** | Data Engineer | 🗄️ Data Pipelines & Processing |
| **Mostafa Abdelhamid**| Back End Developer | ⚙️ Django & Server Architecture |
| **Habiba Elrahman** | Front End Developer | 🎨 **React.js** & Dashboard UI |

</div>

---

<div align="center">

<br>
**Graduation Project - Class of 2026**
<br>
*Banha University*

</div>
