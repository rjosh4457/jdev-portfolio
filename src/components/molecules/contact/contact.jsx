import AppSectionDivider from "@/components/app-section-divider";
import { contactSchema } from "@/schema/contactSchema";
import { ScaleUp } from "@/utils/animation-configs";
import { motion } from "motion/react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AppInput from "../app-input";
import AppButton from "@/components/app-button";
import { useEffect, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState(null);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = () => {
    console.log(formData);
  };

  useEffect(() => {
    const watcher = watch((data) => {
      setFormData(data);
    });

    return () => watcher.unsubscribe();
  }, [watch]);
  return (
    <motion.div id="contact-me" className="flex flex-col gap-10 pt-10 mb-20">
      <AppSectionDivider {...ScaleUp} label="Contact" />
      <motion.h1 className="text-4xl">
        Let's Work <span className="text-highlight">Together</span>
      </motion.h1>
      <motion.div className="flex flex-col md:flex-row gap-4">
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, value } }) => (
            <AppInput
              label="Name"
              placeholder="Enter Your Name"
              value={value}
              onChange={onChange}
              error={errors.name}
              required
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <AppInput
              label="Email"
              type="email"
              placeholder="e.g juan@gmail.com"
              value={value}
              onChange={onChange}
              error={errors.email}
              required
            />
          )}
        />
      </motion.div>
      <motion.div className="flex flex-col md:flex-row gap-4">
        <Controller
          name="phone"
          control={control}
          render={({ field: { onChange, value } }) => (
            <AppInput
              label="Contact Number"
              placeholder="Enter Your Number"
              value={value}
              onChange={onChange}
              error={errors.phone}
            />
          )}
        />
        <Controller
          name="subject"
          control={control}
          render={({ field: { onChange, value } }) => (
            <AppInput
              label="Subject"
              placeholder="Subject"
              value={value}
              onChange={onChange}
              error={errors.subject}
              required
            />
          )}
        />
      </motion.div>
      <Controller
        name="message"
        control={control}
        render={({ field: { onChange, value } }) => (
          <AppInput
            label="Message"
            placeholder="Enter Your Message"
            value={value}
            onChange={onChange}
            error={errors.subject}
            required
            rows={4}
          />
        )}
      />
      <motion.div className="mx-auto xl:ml-0">
        <AppButton>Send Message</AppButton>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
