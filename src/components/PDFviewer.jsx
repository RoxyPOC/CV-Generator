import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: "Helvetica",
    lineHeight: 1.4,
    width: "100%",
    height: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
    paddingBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  contactInfo: {
    fontSize: 10,
    textAlign: "right",
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    borderBottomStyle: "solid",
    paddingBottom: 3,
  },
  skillCategory: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    marginBottom: 10,
  },
  skillItem: {
    padding: "3px 8px",
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 3,
    fontSize: 10,
  },
  experienceItem: {
    marginBottom: 10,
  },
  experienceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  position: {
    fontWeight: "bold",
    fontSize: 12,
  },
  company: {
    fontStyle: "italic",
    fontSize: 12,
  },
  date: {
    fontSize: 10,
    color: "#555",
  },
  bulletPoint: {
    flexDirection: "row",
    marginBottom: 3,
  },
  bullet: {
    width: 10,
    fontSize: 10,
  },
  bulletText: {
    fontSize: 10,
  },
  projectItem: {
    marginBottom: 10,
  },
  projectTitle: {
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 3,
  },
});

export default function MyDocument({ formData }) {
  // Helper function to render bullet points
  const renderBulletPoints = (text) => {
    if (!text) return null;
    return text
      .split("\n")
      .filter((point) => point.trim() !== "")
      .map((point, i) => (
        <View style={styles.bulletPoint} key={i}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.bulletText}>{point.trim()}</Text>
        </View>
      ));
  };

  // Group skills by type
  const groupSkillsByType = (skills) => {
    return skills.reduce((groups, skill) => {
      if (!skill.type || !skill.skill) return groups;
      if (!groups[skill.type]) groups[skill.type] = [];
      groups[skill.type].push(skill.skill);
      return groups;
    }, {});
  };

  return (
    <Document>
      <Page size="A4" style={styles.page} wrap>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.name}>{formData.fullname || "Your Name"}</Text>
          <Text style={styles.title}>
            {formData.title || "Your Professional Title"}
          </Text>
          <View style={styles.contactInfo}>
            <Text>{formData.email || "email@example.com"}</Text>
            <Text>{formData.phone || "(123) 456-7890"}</Text>
            <Text>{formData.city || "City, Country"}</Text>
          </View>
        </View>

        {/* Summary Section */}
        {formData.summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>PROFESSIONAL SUMMARY</Text>
            <Text style={styles.bulletText}>{formData.summary}</Text>
          </View>
        )}

        {/* Technical Skills Section */}
        {formData.skills && formData.skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>TECHNICAL SKILLS</Text>
            {Object.entries(groupSkillsByType(formData.skills)).map(
              ([type, skills]) => (
                <View key={type}>
                  <Text style={styles.skillCategory}>{type}</Text>
                  <View style={styles.skillsContainer}>
                    {skills.map((skill, i) => (
                      <Text key={i} style={styles.skillItem}>
                        {skill}
                      </Text>
                    ))}
                  </View>
                </View>
              )
            )}
          </View>
        )}

        {/* Experience Section */}
        {formData.experience && formData.experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>
            {formData.experience.map((exp, i) => (
              <View key={i} style={styles.experienceItem}>
                <View style={styles.experienceHeader}>
                  <Text style={styles.position}>
                    {exp.position || "Position"}
                  </Text>
                  <Text style={styles.date}>{exp.date || "Date"}</Text>
                </View>
                <Text style={styles.company}>
                  {exp.company || "Company"}
                  {exp.location ? ` | ${exp.location}` : ""}
                </Text>
                {exp.description && renderBulletPoints(exp.description)}
              </View>
            ))}
          </View>
        )}

        {/* Projects Section */}
        {formData.projects && formData.projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>PROJECTS</Text>
            {formData.projects.map((project, i) => (
              <View key={i} style={styles.projectItem}>
                <Text style={styles.projectTitle}>
                  {project.project || "Project Name"}
                </Text>
                {project.description && renderBulletPoints(project.description)}
              </View>
            ))}
          </View>
        )}

        {/* Education Section */}
        {(formData.university || formData.date) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EDUCATION</Text>
            <View style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <Text style={styles.position}>
                  {formData.university || "University"}
                </Text>
                <Text style={styles.date}>{formData.date || "Date"}</Text>
              </View>
              {formData.location && (
                <Text style={styles.company}>{formData.location}</Text>
              )}
              {formData.description && renderBulletPoints(formData.description)}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
}
