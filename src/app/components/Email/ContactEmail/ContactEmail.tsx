// emails/ContactMail.tsx
type ContactMailProps = {
  name: string;
  email: string;
  message: string;
};

export default function ContactMail({
  name,
  email,
  message,
}: ContactMailProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "24px",
        color: "#2d4059",
      }}
    >
      <h2 style={{ color: "#bc6c25" }}>
        📩 Nouveau message via le site Popette
      </h2>

      <p>
        <strong>Nom :</strong> {name}
      </p>
      <p>
        <strong>Email :</strong> {email}
      </p>

      <div style={{ marginTop: "16px" }}>
        <p>
          <strong>Message :</strong>
        </p>
        <blockquote
          style={{
            backgroundColor: "#f9efe3",
            borderLeft: "4px solid #e4c27a",
            padding: "12px",
            marginTop: "8px",
            whiteSpace: "pre-line",
          }}
        >
          {message}
        </blockquote>
      </div>

      <footer style={{ marginTop: "32px", fontSize: "12px", color: "#999" }}>
        <p>
          Ce message a été envoyé depuis le site brunch de Popette à Arcachon.
        </p>
      </footer>
    </div>
  );
}
