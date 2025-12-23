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
      
      toast({
        title: "¡Mensaje enviado exitosamente!",
        description: "Gracias por contactarnos. Te responderemos pronto a tu email.",
        duration: 6000
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
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            ¿Listo para transformar tus datos en sabiduría accionable? Ponte en contacto con nosotros y descubre cómo podemos ayudarte a alcanzar tus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Información de Contacto */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 h-full">
              <h3 className="text-2xl font-bold mb-8 text-aelityx-dark dark:text-white flex items-center gap-2">
                <Mail className="h-6 w-6 text-aelityx-blue" />
                Información de Contacto
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-aelityx-blue/10 flex items-center justify-center mr-4 group-hover:bg-aelityx-blue/20 transition-colors">
                    <Mail className="h-6 w-6 text-aelityx-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-aelityx-dark dark:text-white mb-1">Email</p>
                    <a 
                      href="mailto:info@aelityx.com" 
                      className="text-aelityx-gray hover:text-aelityx-blue transition-colors text-lg"
                    >
                      info@aelityx.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-aelityx-green/10 flex items-center justify-center mr-4 group-hover:bg-aelityx-green/20 transition-colors">
                    <Phone className="h-6 w-6 text-aelityx-green" />
                  </div>
                  <div>
                    <p className="font-semibold text-aelityx-dark dark:text-white mb-1">Teléfono</p>
                    <a 
                      href="tel:+52 33 5018 4329" 
                      className="text-aelityx-gray hover:text-aelityx-green transition-colors text-lg"
                    >
                      +52 33 5018 4329
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-aelityx-orange/10 flex items-center justify-center mr-4 group-hover:bg-aelityx-orange/20 transition-colors">
                    <MapPin className="h-6 w-6 text-aelityx-orange" />
                  </div>
                  <div>
                    <p className="font-semibold text-aelityx-dark dark:text-white mb-2">Oficina Principal</p>
                    <address className="text-aelityx-gray not-italic dark:text-gray-300 leading-relaxed">
                      <span className="font-medium">Lic. Francisco Primo Verdad 128</span><br />
                      <span className="text-sm">Piso 2, Int. 4</span><br />
                      <span className="text-sm">Zona Centro</span><br />
                      <span className="font-medium">20000 Aguascalientes, Ags.</span>
                    </address>
                  </div>
                </div>
                
                {/* Elementos de confianza */}
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4 text-sm text-aelityx-gray">
                    <div className="flex items-center gap-1">
                      <Shield className="h-4 w-4 text-aelityx-green" />
                      <span>Seguro SSL</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-aelityx-blue" />
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
              <h3 className="text-2xl font-bold mb-2 text-aelityx-dark dark:text-white flex items-center gap-2">
                <Send className="h-6 w-6 text-aelityx-blue" />
                Envíanos un mensaje
              </h3>
              <p className="text-aelityx-gray dark:text-gray-300 mb-8">
                Cuéntanos sobre tu proyecto y nos pondremos en contacto contigo pronto
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