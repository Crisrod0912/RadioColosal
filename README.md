# 📻 Radio Colosal

This project is based on the development of a web application that enables a more organized, efficient, and centralized management of a Costa Rican radio station. Through this platform, administrators, announcers, and content editors can manage programming, news, advertising, events, and audience interaction in real time. The system allows users to access structured information, interact with content, and improve communication between the radio station and its audience. Its main objective is to enhance operational efficiency, optimize content distribution, and strengthen listener engagement through a modern and accessible digital solution.

## ✨ Features

- 🏠 **Dashboard Section**: Displays a general overview of the platform with quick access to all system modules and relevant information.
- 🎤 **Announcers Section**: Allows the registration and management of radio hosts and presenters.
- 🗓️ **Programming Section**: Enables the creation, organization, and real-time updating of radio schedules and program content.
- 📺 **Advertising Section**: Manages advertising campaigns, client information, and broadcast scheduling.
- 📰 **News Section**: Provides tools to publish, edit, and manage news content efficiently.
- 🎉 **Events Section**: Displays and manages upcoming and ongoing events such as concerts and community activities.
- 👂 **Listeners Section**: Stores and manages listener data to improve engagement and interaction.
- 💬 **Comments Section**: Allows audience interaction through comments, feedback, and participation.
- 🎞️ **Multimedia Section**: Handles multimedia content such as audio, video, and other resources used in programming.
- 🧾 **Clients Section**: Manages advertisers and business clients associated with the radio station.
- 💰 **Rates Section**: Defines and controls advertising rates and pricing structures.
- 🛠️ **CRUD Management**:
    - Administrators can Create, Read, Update, and Delete records across all modules.
    - Users can visualize structured information in an organized format.
- ⚡ **Real-Time Updates**: Ensures updated and consistent data across the platform.
- 📱 **Responsive Interface**: Provides a clean and accessible user experience across different devices.

## 🖥️ Technologies Used

- 🎨 **Frontend**: CSS, HTML, Javascript, SCSS
- 🧩 **Template Engine**: EJS
- 💻 **Backend**: Node.js
- 🚀 **Web Framework**: Express.js
- 🗄️ **Database**: MongoDB
- 🔗 **ODM**: Mongoose
- 📊 **Libraries**: ApexCharts, JQuery
- 🧱 **UI Framework**: Bootstrap
- 📝 **Middleware**: Method-Override
- 🔁 **Development Tool**: Nodemon
- 🧪 **Version Control**: Git

## ⚙️ Installation

### 🧰 Prerequisites

To run this project locally, you'll need:

- 🌍 A web browser (e.g., Google Chrome, Firefox, Microsoft Edge)
- 🟢 [Node.js](https://nodejs.org/en) (v22.x LTS or compatible)
- 🍃 [MongoDB Compass](https://www.mongodb.com/products/tools/compass) (v8.0.6 current)
- 🐚 [MongoDB Shell](https://www.mongodb.com/try/download/shell) (optional)
- 💻 [VSCode](https://code.visualstudio.com/) (open source code editor)

### 🔧 Setup

1. 📥 Clone the repository:

  ```bash
  git clone https://github.com/Crisrod0912/RadioColosal.git
  ```

2. 🗃️ Set up the MongoDB database:

  ```bash
  use ColosalBD
  ```

3. 📂 Create the collections:

  ```bash
  db.createCollection("Locutores");
  db.createCollection("Programacion");
  db.createCollection("Publicidad");
  db.createCollection("Noticias");
  db.createCollection("Eventos");
  db.createCollection("Oyentes");
  db.createCollection("Comentarios");
  db.createCollection("Multimedios");
  db.createCollection("Clientes");
  db.createCollection("Tarifas");
  ```

4. 📁 Open the project folder in VS Code:

  ```bash
  cd RadioColosal
  ```

5. ⚙️ Install dependencies:

  ```bash
  npm install
  ```

6. ▶️ Run the application:

  ```bash
  npm run dev
  ```

7. 🌐 Access the platform:

  ```bash
  http://localhost:3000
  ```

> [!NOTE]
> **Project Owner / Developer** 👨🏻‍💻  
>- Cristopher Rodríguez Fernández 
***
