"use client";
import { useState, useCallback } from "react";

export const useNotification = () => {
  const [notification, setNotification] = useState({
    isVisible: false,
    message: "",
    type: "success",
    duration: 5000,
  });

  const showNotification = useCallback(
    (message, type = "success", duration = 5000) => {
      setNotification({
        isVisible: true,
        message,
        type,
        duration,
      });
    },
    []
  );

  const hideNotification = useCallback(() => {
    setNotification((prev) => ({
      ...prev,
      isVisible: false,
    }));
  }, []);

  // Convenience methods
  const showSuccess = useCallback(
    (message, duration) => {
      showNotification(message, "success", duration);
    },
    [showNotification]
  );

  const showError = useCallback(
    (message, duration) => {
      showNotification(message, "error", duration);
    },
    [showNotification]
  );

  const showWarning = useCallback(
    (message, duration) => {
      showNotification(message, "warning", duration);
    },
    [showNotification]
  );

  const showInfo = useCallback(
    (message, duration) => {
      showNotification(message, "info", duration);
    },
    [showNotification]
  );

  return {
    notification,
    showNotification,
    hideNotification,
    showSuccess,
    showError,
    showWarning,
    showInfo,
  };
};

export default useNotification;
