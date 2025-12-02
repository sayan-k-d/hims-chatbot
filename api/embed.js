export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");

  res.send(`
    <div id="hims-chatbot"></div>

    <script src="/chatbot-widget.js"></script>
    <script>
      const el = document.getElementById("hims-chatbot");
      customElements.whenDefined("hims-chatbot").then(() => {
        const widget = document.createElement("hims-chatbot");
        el.appendChild(widget);
      });
    </script>
  `);
}
