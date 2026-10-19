# Garritas Mías: web y panel

- `index.html`: la web.
- `panel.html`: el panel de Stefy (garritasmias.netlify.app/panel).
- `config.js`: conexión pública a Supabase. La clave es pública a propósito; la seguridad la ponen las reglas de la base.
- `_headers`: encabezados de seguridad.
- `netlify/edge-functions/`: límite de envíos por IP (4 por minuto y 10 cada 3 minutos).
- `.github/workflows/mantener-supabase.yml`: cron diario que mantiene activa la base.
- `.github/workflows/mantener-github.yml`: cron mensual que evita que GitHub apague el cron diario.

Cada cambio que se sube a este repositorio se publica solo en Netlify.
