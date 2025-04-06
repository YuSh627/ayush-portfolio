import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  Chip,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`about-tabpanel-${index}`}
      aria-labelledby={`about-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `about-tab-${index}`,
    "aria-controls": `about-tabpanel-${index}`,
  };
}

// Skill interface
interface SkillCategory {
  category: string;
  skills: {
    name: string;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Python" },
      { name: "C/C++" },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "React.js" },
      { name: "Django" },
      { name: "WordPress" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [{ name: "Material-UI" }, { name: "Redux" }],
  },
  {
    category: "Tools & Platforms",
    skills: [{ name: "GitHub" }, { name: "Figma" }],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Data preprocessing" },
      { name: "Model training" },
      { name: "Evaluation" },
    ],
  },
];

const About: React.FC = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box id="about" sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 8 },
            alignItems: "center",
          }}>
          {/* Content First (will appear above image on mobile) */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "0 1 100%" },
              display: "flex",
              flexDirection: "column",

              order: { xs: 1, md: 2 },
            }}>
            {/* About Me Title */}
            <Typography
              variant="h2"
              component="h2"
              sx={{
                textAlign: { xs: "center", md: "left" },
                mb: 5,
              }}>
              About Me
            </Typography>

            {/* Photo between title and text */}
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                mb: 3,
              }}>
              <Avatar
                src="/ayush-portfolio/image/ayush.jpg"
                sx={{
                  width: { xs: 200, sm: 250 },
                  height: { xs: 200, sm: 250 },
                  boxShadow: 3,
                  border: "4px solid #f0f0f0",
                }}
              />
            </Box>

            {/* About Text */}
            <Paper elevation={0} sx={{ p: 0 }}>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  textAlign: "justify",
                }}>
                I specialize in creating responsive web applications with modern
                JavaScript frameworks. My expertise includes front-end
                development with React, user interface design with Figma, and
                implementing responsive layouts with CSS and Material-UI.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{
                  textAlign: "justify",
                }}>
                I'm passionate about creating intuitive user experiences and
                continuously improving my skills to stay current with industry
                trends.
              </Typography>
            </Paper>
          </Box>

          {/* Desktop Image (hidden on mobile) */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "0 1 50%" },
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              order: { md: 1 },
            }}>
            <Avatar
              src="/ayush-portfolio/image/ayush.jpg"
              sx={{
                width: 300,
                height: 300,
                boxShadow: 3,
                border: "4px solid #f0f0f0",
              }}
            />
          </Box>
        </Box>

        <Box sx={{ width: "100%", mt: 6 }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="about tabs"
              variant="fullWidth"
              scrollButtons={isMobile ? "auto" : false}
              allowScrollButtonsMobile
              centered>
              <Tab icon={<WorkIcon />} label="Experience" {...a11yProps(0)} />
              <Tab icon={<SchoolIcon />} label="Education" {...a11yProps(1)} />
              <Tab icon={<CodeIcon />} label="Skills" {...a11yProps(2)} />
            </Tabs>
          </Box>

          <TabPanel value={value} index={0}>
            <Timeline position={isMobile ? "right" : "alternate"}>
              <TimelineItem>
                <TimelineOppositeContent
                  color="text.secondary"
                  sx={{ display: { xs: "none", md: "block" } }}>
                  March 2024 - December 2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <WorkIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={3}
                    sx={{ p: { xs: 2, md: 3 }, borderRadius: 2 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      fontWeight="bold"
                      mb="0">
                      Front-End Developer Intern
                    </Typography>
                    <Typography variant="subtitle2" mt="0" fontWeight="medium">
                      Sciever Inc. Pvt. Ltd., Kathmandu, Nepal
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ display: { xs: "block", md: "none" }, mb: 1 }}>
                      March 2024 - December 2024
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                      <Typography variant="body2" paragraph>
                        Front-end developer intern at Sciever Inc., where I
                        designed UI components in Figma and developed
                        interactive web applications using React, TypeScript,
                        and Material-UI. Implemented real-time features with
                        WebSocket and collaborated in an Agile team environment.
                      </Typography>
                    </Box>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Timeline position={isMobile ? "right" : "alternate"}>
              <TimelineItem>
                <TimelineOppositeContent
                  color="text.secondary"
                  sx={{ display: { xs: "none", md: "block" } }}>
                  2024
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <SchoolIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={3}
                    sx={{ p: { xs: 2, md: 3 }, borderRadius: 2 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      fontWeight="bold">
                      B.Sc.C.S.I.T.
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      National College of Computer Studies
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ display: { xs: "block", md: "none" } }}>
                      2024
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent
                  color="text.secondary"
                  sx={{ display: { xs: "none", md: "block" } }}>
                  2019
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="secondary">
                    <SchoolIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={3}
                    sx={{ p: { xs: 2, md: 3 }, borderRadius: 2 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      fontWeight="bold">
                      +2 H.S.E.B.
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      Everest Innovative College
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ display: { xs: "block", md: "none" } }}>
                      2019
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent
                  color="text.secondary"
                  sx={{ display: { xs: "none", md: "block" } }}>
                  2017
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="secondary">
                    <SchoolIcon />
                  </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                  <Paper
                    elevation={3}
                    sx={{ p: { xs: 2, md: 3 }, borderRadius: 2 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      fontWeight="bold">
                      S.E.E.
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      Greenfield National Higher Secondary School
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ display: { xs: "block", md: "none" } }}>
                      2017
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 3,
                justifyContent: "center",
              }}>
              {skillCategories.map((category, index) => (
                <Paper
                  key={index}
                  elevation={2}
                  sx={{
                    p: { xs: 2, md: 3 },
                    borderRadius: 2,
                    flex: "1 1 300px",
                    maxWidth: "400px",
                    minWidth: "280px",
                  }}>
                  <Typography variant="h6" gutterBottom fontWeight="bold">
                    {category.category}
                  </Typography>
                  <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                    }}>
                    {category.skills.map((skill, skillIndex) => (
                      <Chip
                        key={skillIndex}
                        label={skill.name}
                        variant="outlined"
                        sx={{ m: 0.5 }}
                      />
                    ))}
                  </Box>
                </Paper>
              ))}
            </Box>
          </TabPanel>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
