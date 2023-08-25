import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import React from "react";

// Aviso de Privacidad y Términos de Uso

// Bienvenido a Smartie (en adelante, "nosotros", "nuestro", "nuestra"). Antes de continuar con el registro, por favor, tómate un momento para leer y entender nuestra Política de Privacidad y nuestros Términos de Uso. Al registrarte en nuestro sitio web y utilizar nuestros servicios, aceptas plenamente las siguientes condiciones:

// 1. Política de Privacidad:

// Reconoces y aceptas que recopilamos y procesamos tus datos personales de acuerdo con nuestra Política de Privacidad. Tus datos serán utilizados para mejorar tu experiencia en nuestro sitio web, proporcionarte los servicios que solicitas y comunicarte información relevante sobre nuestros productos y servicios. Puedes revisar nuestra Política de Privacidad [enlace a la Política de Privacidad] para obtener información detallada sobre cómo manejamos tus datos.

// 2. Consentimiento Informado:

// Entiendes que al registrarte y proporcionar tus datos personales, estás dando tu consentimiento explícito para que los procesemos de acuerdo con los términos de nuestra Política de Privacidad y los requisitos legales aplicables.

// 3. Derechos del Titular de Datos:

// Reconoces tus derechos como titular de datos, incluido el derecho a acceder, rectificar, actualizar y eliminar tus datos personales. Puedes ejercer estos derechos enviando una solicitud a [correo electrónico de contacto].

// 4. Términos de Uso:

// Además de nuestra Política de Privacidad, también aceptas cumplir con nuestros Términos de Uso [enlace a los Términos de Uso]. Estos términos establecen las reglas y condiciones para el uso de nuestro sitio web y servicios.

// 5. Seguridad:

// Entiendes que tomamos medidas para proteger tus datos personales y mantener su confidencialidad. Sin embargo, no podemos garantizar la seguridad absoluta de la información transmitida a través de Internet.

// 6. Cambios en las Políticas:

// Reconoces que nuestras políticas y términos pueden cambiar con el tiempo. Te recomendamos revisar periódicamente nuestra Política de Privacidad y nuestros Términos de Uso para estar al tanto de cualquier actualización.

// Al hacer clic en "Registrarse" o continuar con el proceso de registro, confirmas que has leído, entendido y aceptado nuestra Política de Privacidad y nuestros Términos de Uso.

// Si tienes alguna pregunta o inquietud acerca de nuestra Política de Privacidad, nuestros Términos de Uso o el procesamiento de tus datos personales, no dudes en ponerte en contacto con nosotros en [correo electrónico de contacto].

const InformacionDialog = ({ visible, onHide }) => {
  const correo = "";
  return (
    <Dialog modal visible={visible} onHide={onHide} className="w-1/2">
      <article>
        <h1 className="my-2 text-center font-bold text-xl">
          Aviso de Privacidad y Términos de Uso
        </h1>
        <p className="my-2">
          Bienvenido a Smartie (en adelante, &quot;nosotros&quot;,
          &quot;nuestro&quot;, &quot;nuestra&quot;). Antes de continuar con el
          registro, por favor, tómate un momento para leer y entender nuestra
          Política de Privacidad y nuestros Términos de Uso. Al registrarte en
          nuestro sitio web y utilizar nuestros servicios, aceptas plenamente
          las siguientes condiciones:
        </p>

        <h2>1. Política de Privacidad:</h2>
        <p className="my-2">
          Entiendes que al registrarte y proporcionar tus datos personales,
          estás dando tu consentimiento explícito para que los procesemos de
          acuerdo con los términos de nuestra Política de Privacidad y los
          requisitos legales aplicables.
        </p>
        <h2>2. Consentimiento Informado:</h2>
        <p className="my-2">
          Entiendes que al registrarte y proporcionar tus datos personales,
          estás dando tu consentimiento explícito para que los procesemos de
          acuerdo con los términos de nuestra Política de Privacidad y los
          requisitos legales aplicables.
        </p>
        <h2>3. Derechos del Titular de Datos:</h2>
        <p className="my-2">
          Reconoces tus derechos como titular de datos, incluido el derecho a
          acceder, rectificar, actualizar y eliminar tus datos personales.
          Puedes ejercer estos derechos enviando una solicitud a {correo}.
        </p>
        <h2>4. Seguridad:</h2>
        <p className="my-2">
          Entiendes que tomamos medidas para proteger tus datos personales y
          mantener su confidencialidad. Sin embargo, no podemos garantizar la
          seguridad absoluta de la información transmitida a través de Internet.
        </p>
        <h2>5. Cambios en las Políticas:</h2>
        <p className="my-2">
          Reconoces que nuestras políticas y términos pueden cambiar con el
          tiempo. Te recomendamos revisar periódicamente nuestra Política de
          Privacidad y nuestros Términos de Uso para estar al tanto de cualquier
          actualización.
        </p>
        <p>
          Al hacer clic en &quot;Registrarse&quot; o continuar con el proceso de
          registro, confirmas que has leído, entendido y aceptado nuestra
          Política de Privacidad y nuestros Términos de Uso.
        </p>
        <p>
          Si tienes alguna pregunta o inquietud acerca de nuestra Política de
          Privacidad, nuestros Términos de Uso o el procesamiento de tus datos
          personales, no dudes en ponerte en contacto con nosotros en {correo}
        </p>
        <div className="flex justify-end">
          <Button
            label="Aceptar y cerrar"
            onClick={onHide}
            text
            rounded
            raised
            severity="help"
            className="my-2"
          />
        </div>
      </article>
    </Dialog>
  );
};

export default InformacionDialog;
