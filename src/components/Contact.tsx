import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="pb-20 py-20">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Get In <span className="text-gradient">Touch</span>
        </h2>

        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          I'm currently looking for new opportunities and exciting projects.
          Whether you have a question or just want to say hi, feel free to reach
          out!
        </p>

        <Card className="p-8 bg-card border-border card-glow">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-4 rounded-full bg-primary/10">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Email</h3>
              <a
                href="mailto:shanbel@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                shambel5110@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-4 rounded-full bg-primary/10">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Phone</h3>
              <a
                href="tel:+251912345678"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +251 962 585 655
              </a>
            </div>

            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-4 rounded-full bg-primary/10">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-muted-foreground">Debre Berhan, Ethiopia</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" className="gap-2">
              <Mail className="w-5 h-5" />
              Send Message
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
