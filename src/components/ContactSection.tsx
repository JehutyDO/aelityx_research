import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, Mail, Phone, MapPin, Send, Shield, Clock } from "lucide-react";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    message: "",
    honeypot: "" // Campo honeypot para protección anti-spam
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Error de validación",
        description: "El nombre es requerido",
        variant: "destructive"
      });
      return false;
    }
    
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast({
        title: "Error de validación", 
        description: "Por favor ingresa un email válido",
        variant: "destructive"
      });
      return false;
    }
    
    if (!formData.serviceType) {
      toast({
        title: "Error de validación",
        description: "Por favor selecciona un tipo de servicio",
        variant: "destructive"
      });
      return false;
    }
    
    if (!formData.message.trim()) {
      toast({
        title: "Error de validación",
        description: "El mensaje es requerido",
        variant: "destructive"
      });
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Protección anti-spam - si el campo honeypot está lleno, es spam
    if (formData.honeypot) {
      console.log("Spam detectado");
      return;
    }
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Preparar datos para EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || "No proporcionado",
        company: formData.company || "No proporcionado", 
        service_type: formData.serviceType,
        message: formData.message,
        to_email: "info@aelityx.com"
      };
      
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      // Mostrar estado de éxito
      setIsSubmitted(true);
      
      toast({
        title: "¡Mensaje enviado exitosamente!",
        description: "Te responderemos pronto a tu email.",
        duration: 3000
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceType: "",
        message: "",
        honeypot: ""
      });
      
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error al enviar mensaje",
        description: "Hubo un problema al enviar tu mensaje. Por favor intenta de nuevo o contáctanos directamente.",
        variant: "destructive",
        duration: 6000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Colaborar</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            ¿Interesado en colaboración académica, proyectos de investigación o servicios de Aelityx? 
            Ponte en contacto para explorar oportunidades de trabajo conjunto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Información de Contacto */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 h-full">
              <h3 className="text-xl font-bold mb-6 text-aelityx-dark dark:text-white">
                Información de Contacto
              </h3>
              
              <div className="space-y-5">
                {/* Email */}
                <div className="p-4 rounded-lg bg-aelityx-blue/5 dark:bg-aelityx-blue/10 border border-aelityx-blue/10 hover:border-aelityx-blue/30 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-aelityx-blue/20 flex items-center justify-center">
                      <Mail className="h-4 w-4 text-aelityx-blue" />
                    </div>
                    <p className="font-semibold text-sm text-aelityx-dark dark:text-white">Email</p>
                  </div>
                  <a 
                    href="mailto:mrosales@aelityx.com" 
                    className="text-sm text-aelityx-gray hover:text-aelityx-blue dark:text-gray-300 dark:hover:text-aelityx-blue/90 transition-colors break-all block"
                  >
                    mrosales@aelityx.com
                  </a>
                </div>
                
                {/* Teléfono */}
                <div className="p-4 rounded-lg bg-aelityx-green/5 dark:bg-aelityx-green/10 border border-aelityx-green/10 hover:border-aelityx-green/30 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-aelityx-green/20 flex items-center justify-center">
                      <Phone className="h-4 w-4 text-aelityx-green" />
                    </div>
                    <p className="font-semibold text-sm text-aelityx-dark dark:text-white">Teléfono</p>
                  </div>
                  <a 
                    href="tel:+523350184329" 
                    className="text-sm text-aelityx-gray hover:text-aelityx-green dark:text-gray-300 dark:hover:text-aelityx-green/90 transition-colors block"
                  >
                    +52 33 5018 4329
                  </a>
                </div>
                
                {/* Dirección */}
                <div className="p-4 rounded-lg bg-aelityx-orange/5 dark:bg-aelityx-orange/10 border border-aelityx-orange/10 hover:border-aelityx-orange/30 transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-aelityx-orange/20 flex items-center justify-center">
                      <MapPin className="h-4 w-4 text-aelityx-orange" />
                    </div>
                    <p className="font-semibold text-sm text-aelityx-dark dark:text-white">Oficina</p>
                  </div>
                  <address className="text-xs text-aelityx-gray dark:text-gray-300 not-italic leading-relaxed">
                    Lic. Francisco Primo Verdad 128<br />
                    Piso 2, Int. 4, Zona Centro<br />
                    20000 Aguascalientes, Ags.
                  </address>
                </div>
                
                {/* Elementos de confianza */}
                <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap gap-3 text-xs text-aelityx-gray dark:text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Shield className="h-3.5 w-3.5 text-aelityx-green" />
                      <span>Seguro SSL</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-aelityx-blue" />
                      <span>Respuesta &lt; 24h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold mb-2 text-aelityx-dark dark:text-white flex items-center gap-2">
                    <Send className="h-6 w-6 text-aelityx-blue" />
                    Envíanos un mensaje
                  </h3>
                  <p className="text-aelityx-gray dark:text-gray-300 mb-8">
                    Cuéntanos sobre tu proyecto de investigación, colaboración académica o necesidad empresarial. 
                    Nos pondremos en contacto contigo pronto.
                  </p>
                  
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Campo honeypot oculto para anti-spam */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-aelityx-dark dark:text-gray-200 mb-2">
                      Nombre completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      required
                      className="h-12 text-base focus:ring-aelityx-blue focus:border-aelityx-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-aelityx-dark dark:text-gray-200 mb-2">
                      Correo electrónico *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      className="h-12 text-base focus:ring-aelityx-blue focus:border-aelityx-blue"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-aelityx-dark dark:text-gray-200 mb-2">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="xxx xxx xxxx"
                      className="h-12 text-base focus:ring-aelityx-blue focus:border-aelityx-blue"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-aelityx-dark dark:text-gray-200 mb-2">
                      Empresa/Organización
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Tu empresa"
                      className="h-12 text-base focus:ring-aelityx-blue focus:border-aelityx-blue"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-aelityx-dark dark:text-gray-200 mb-2">
                    ¿Qué servicio necesitas? *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                    className="w-full h-12 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aelityx-blue focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="ciencia-datos">Ciencia de Datos y Modelado Predictivo</option>
                    <option value="consultoria">Consultoría en Data Science</option>
                    <option value="dashboard">Dashboards y Visualización</option>
                    <option value="ai">Soluciones de IA y Machine Learning</option>
                    <option value="curso">Cursos y Capacitación</option>
                    <option value="desarrollo">Desarrollo Web y Apps</option>
                    <option value="otro">Otro (especificar en mensaje)</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-aelityx-dark dark:text-gray-200 mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto, objetivos y cómo podemos ayudarte..."
                    required
                    rows={5}
                    className="text-base focus:ring-aelityx-blue focus:border-aelityx-blue resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-14 bg-gradient-to-r from-aelityx-blue to-aelityx-green hover:from-aelityx-blue/90 hover:to-aelityx-green/90 text-white font-semibold text-lg flex items-center justify-center gap-3 group transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensaje
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
                  <div className="mb-6 animate-fade-in">
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-aelityx-blue/20 to-aelityx-green/20 rounded-full blur-xl animate-pulse"></div>
                      <img 
                        src="/aelityx_blue.svg" 
                        alt="Aelityx Logo" 
                        className="relative w-24 h-24 dark:hidden animate-fade-in"
                      />
                      <img 
                        src="/aelityx_white.svg" 
                        alt="Aelityx Logo" 
                        className="relative w-24 h-24 hidden dark:block animate-fade-in"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 text-aelityx-dark dark:text-white animate-fade-in" style={{ animationDelay: "0.2s" }}>
                    ¡Gracias por contactarnos!
                  </h3>
                  
                  <p className="text-lg text-aelityx-gray dark:text-gray-300 mb-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                    Hemos recibido tu mensaje correctamente.
                  </p>
                  
                  <p className="text-base text-aelityx-gray dark:text-gray-400 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                    Te responderemos lo antes posible. Será un privilegio trabajar contigo.
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-aelityx-gray dark:text-gray-400 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                    <Clock className="h-4 w-4 text-aelityx-green" />
                    <span>Respuesta en menos de 24 horas</span>
                  </div>
                  
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mt-8 border-aelityx-blue text-aelityx-blue hover:bg-aelityx-blue hover:text-white dark:border-aelityx-blue/80 dark:text-aelityx-blue/80 dark:hover:bg-aelityx-blue/80 dark:hover:text-white transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: "0.6s" }}
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-aelityx-blue to-aelityx-green rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para transformar tus datos en sabiduría accionable?
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Únete a empresas líderes que ya están aprovechando el poder de sus datos con nuestras soluciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-aelityx-blue hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
                onClick={() => document.getElementById('serviceType')?.focus()}
              >
                Comenzar proyecto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;