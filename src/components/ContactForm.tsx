import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", data);
    toast.success("Mensagem enviada com sucesso!", {
      description: "Entraremos em contato em breve.",
    });
    reset();
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Entre em <span className="text-primary">Contato</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Preencha o formulário e nossa equipe entrará em contato para agendar sua consulta
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome completo *</Label>
                <Input
                  id="name"
                  {...register("name", {
                    required: "Nome é obrigatório",
                    minLength: { value: 3, message: "Nome deve ter ao menos 3 caracteres" },
                  })}
                  placeholder="Seu nome"
                  aria-invalid={errors.name ? "true" : "false"}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p role="alert" className="text-sm text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone", {
                    required: "Telefone é obrigatório",
                    pattern: {
                      value: /^[\d\s()+-]+$/,
                      message: "Telefone inválido",
                    },
                  })}
                  placeholder="(11) 00000-0000"
                  aria-invalid={errors.phone ? "true" : "false"}
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && (
                  <p role="alert" className="text-sm text-destructive">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                type="email"
                {...register("email", {
                  required: "E-mail é obrigatório",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "E-mail inválido",
                  },
                })}
                placeholder="seu@email.com"
                aria-invalid={errors.email ? "true" : "false"}
                className={errors.email ? "border-destructive" : ""}
              />
              {errors.email && (
                <p role="alert" className="text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Mensagem *</Label>
              <Textarea
                id="message"
                {...register("message", {
                  required: "Mensagem é obrigatória",
                  minLength: { value: 10, message: "Mensagem deve ter ao menos 10 caracteres" },
                })}
                placeholder="Conte-nos sobre seu caso ou dúvida..."
                rows={5}
                aria-invalid={errors.message ? "true" : "false"}
                className={errors.message ? "border-destructive" : ""}
              />
              {errors.message && (
                <p role="alert" className="text-sm text-destructive">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary to-primary-light hover:shadow-lg text-lg"
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              <Send className="ml-2" size={20} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
