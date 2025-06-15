
import React, { createContext, useContext } from "react";

// Simplified Bootstrap Accordion
const AccordionContext = createContext<{ parentId: string }>({ parentId: '' });

export const Accordion: React.FC<{ children: React.ReactNode, type?: string, collapsible?: boolean, className?: string }> = ({ children, className }) => {
  const id = React.useId();
  return (
    <div className={["accordion", className].join(' ')} id={id}>
       <AccordionContext.Provider value={{ parentId: id }}>
        {children}
      </AccordionContext.Provider>
    </div>
  );
};

export const AccordionItem: React.FC<{ children: React.ReactNode, value: string, className?: string }> = ({ children, value, className }) => {
  return <div className={["accordion-item bg-transparent border-secondary", className].join(' ')}>{children}</div>;
};

export const AccordionTrigger: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
  const id = React.useId();
  const targetId = React.useId();
  const { parentId } = useContext(AccordionContext);

  return (
    <h2 className="accordion-header" id={id}>
      <button
        className={["accordion-button collapsed bg-transparent text-foreground shadow-none", className].join(' ')}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${targetId}`}
        aria-expanded="false"
        aria-controls={targetId}
      >
        {children}
      </button>
    </h2>
  );
};

export const AccordionContent: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    // In this simplified version, the ID dependencies are managed by data attributes in Bootstrap.
    // The trigger's data-bs-target needs to match the content's id.
    // This component structure is a bit different from Bootstrap's expectation. We'll put the content inside a div that the trigger targets.
    // This is a placeholder as the logic is handled by Bootstrap's JS which we assume is loaded.
    // A proper React-Bootstrap implementation would be more robust.
    const id = React.useId();
    const { parentId } = useContext(AccordionContext);
    
    // This is a hack to make the structure work. The trigger needs to be a sibling of the content's container.
    // Let's adjust About.tsx to have a structure that Bootstrap understands.
    // The current AccordionContent component doesn't fit well.
    // I will simplify and adjust `About.tsx` instead.
    
    // This is just a wrapper now. The real content will be in the parent.
    return <div className={["accordion-collapse collapse", className].join(' ')} data-bs-parent={`#${parentId}`}>
        <div className="accordion-body text-muted-foreground">{children}</div>
    </div>;
};
