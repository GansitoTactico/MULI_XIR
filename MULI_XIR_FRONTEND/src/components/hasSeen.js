import { useAuth } from '../context/AuthContext';

export function usePageVisit(IntroductionPage) {
  const { user } = useAuth();

  const hasVisitedPage = () => {
    return localStorage.getItem(`${IntroductionPage}_visited_${user.id}`);
  };

  const markPageAsVisited = () => {
    localStorage.setItem(`${IntroductionPage}_visited_${user.id}`, 'true');
  };

  return { hasVisitedPage, markPageAsVisited };
}