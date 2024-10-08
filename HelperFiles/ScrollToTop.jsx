import { useEffect } from "react";
import { useNavigation } from "react-router-dom";

export default function ScrollToTop() {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      window.scrollTo(0, 0);
    }
  }, [navigation]);

  return null;
}

/**
 * import { useNavigation } from "react-router-dom";
 * 
 *   const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === "idle") {
      window.scrollTo(0, 0);
    }
  }, [navigation]);

  return null;
 * 
 */
