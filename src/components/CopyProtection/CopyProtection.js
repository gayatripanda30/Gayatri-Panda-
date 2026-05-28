import { useEffect } from "react";

const blockedKeys = new Set(["c", "x", "u", "s", "p"]);

const isEditableElement = (element) => {
  if (!element) {
    return false;
  }

  const tagName = element.tagName?.toLowerCase();
  return (
    tagName === "input" ||
    tagName === "textarea" ||
    tagName === "select" ||
    element.isContentEditable
  );
};

const CopyProtection = () => {
  useEffect(() => {
    const preventDefault = (event) => {
      if (!isEditableElement(event.target)) {
        event.preventDefault();
      }
    };

    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      const isCtrlShortcut = event.ctrlKey || event.metaKey;
      const isDevToolsShortcut =
        event.key === "F12" ||
        (isCtrlShortcut && event.shiftKey && ["i", "j", "c"].includes(key));

      if ((isCtrlShortcut && blockedKeys.has(key)) || isDevToolsShortcut) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", preventDefault);
    document.addEventListener("copy", preventDefault);
    document.addEventListener("cut", preventDefault);
    document.addEventListener("paste", preventDefault);
    document.addEventListener("selectstart", preventDefault);
    document.addEventListener("dragstart", preventDefault);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", preventDefault);
      document.removeEventListener("copy", preventDefault);
      document.removeEventListener("cut", preventDefault);
      document.removeEventListener("paste", preventDefault);
      document.removeEventListener("selectstart", preventDefault);
      document.removeEventListener("dragstart", preventDefault);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
};

export default CopyProtection;
