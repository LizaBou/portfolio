import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Route racine pour tester le serveur
app.get("/", (req, res) => {
  res.send("Backend fonctionne !");
});

// Endpoint pour le formulaire
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Vérification des champs
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }

  // Création du transporteur Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,  // ton email Gmail
      pass: process.env.EMAIL_PASS,  // mot de passe d'application Gmail
    },
  });

  try {
    // Envoi de l'email avec replyTo
    await transporter.sendMail({
      from: process.env.EMAIL_USER,   // Gmail exige que ce soit ton email
      to: process.env.EMAIL_USER,     // tu reçois l'email
      subject: `Nouveau message de ${name}`,
      text: message,
      replyTo: email,                 // l'email saisi par l'utilisateur
    });

    res.status(200).json({ message: "Email envoyé !" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur lors de l'envoi du mail." });
  }
});

// Démarrage du serveur
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
