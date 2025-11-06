// src/theme/typography.ts
export class AppTypography {
  // Homepage headline
  static homepageTitle = {
    fontFamily: `'Inter', 'Plus Jakarta Sans', 'Helvetica Neue', Arial, sans-serif`,
    fontWeight: 400,
    fontSize: "2.5rem", // 40px
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
    color: "#FFFFFF",
    m: "2vh",
  };

  static homepageSubTitle = {
    fontFamily: `'Inter', 'Plus Jakarta Sans', 'Helvetica Neue', Arial, sans-serif`,
    fontWeight: 600,
    fontSize: "4vw", // 40px
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
    color: "#FFFFFF",
    mx: "2vh",
    my: "5vh",
  };

  // Dashboard greeting — "Hi, Alex! Ready to land your next role?"
  static dashboardTitle = {
    fontFamily: `'Inter', 'Plus Jakarta Sans', 'Helvetica Neue', Arial, sans-serif`,
    fontWeight: 600,
    fontSize: "1.75rem", // 28px
    lineHeight: 1.3,
    letterSpacing: "-0.01em",
    color: "#FFFFFF",
  };

  // Section titles — "Skill Progress", "Quick Actions"
  static sectionTitle = {
    fontFamily: `'Inter', 'Plus Jakarta Sans', 'Helvetica Neue', Arial, sans-serif`,
    fontWeight: 500,
    fontSize: "1.125rem", // 18px
    lineHeight: 1.4,
    color: "#E5E7EB",
  };

  // Body / descriptive text — e.g., “Let’s check your progress…”
  static bodyText = {
    fontFamily: `'Inter', 'Plus Jakarta Sans', 'Helvetica Neue', Arial, sans-serif`,
    fontWeight: 400,
    fontSize: "1rem", // 16px
    lineHeight: 1.6,
    color: "#9CA3AF",
  };

  // Small UI labels — “Remember me”, “Analyze New Job”, etc.
  static label = {
    fontFamily: `'Inter', 'Plus Jakarta Sans', 'Helvetica Neue', Arial, sans-serif`,
    fontWeight: 500,
    fontSize: "0.875rem", // 14px
    lineHeight: 1.4,
    color: "#9CA3AF",
  };

  // Button text
  static button = {
    fontFamily: `'Inter', 'Plus Jakarta Sans', 'Helvetica Neue', Arial, sans-serif`,
    fontWeight: 600,
    fontSize: "0.9375rem", // 15px
    lineHeight: 1.4,
    letterSpacing: "0.02em",
    color: "#FFFFFF",
  };
}
