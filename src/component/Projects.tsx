import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  figmaLink?: string;
  liveLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Real-Time Chat Application",
    description:
      "Designed and prototyped a chat application in Figma and developed it using React, TypeScript, Material-UI, Redux, and WebSocket for seamless real-time messaging. Implemented responsive design and state management to improve usability.",
    image: "/ayush-portfolio/image/chatroom.png",
    technologies: [
      "React",
      "TypeScript",
      "Material-UI",
      "Redux",
      "WebSocket",
      "Figma",
    ],
    figmaLink:
      "https://www.figma.com/design/2Ysh8nPueTIArqpFnaXjM7/ChatRoom?t=iPpCXlZ5VxuWhXeL-1",
  },
  {
    id: 2,
    title: "Profile Interface Design",
    description:
      "Designed and prototyped a user-friendly profile interface in Figma and built the web-application using HTML, CSS, and JavaScript.",
    image: "/ayush-portfolio/image/profile.png",
    technologies: ["HTML", "CSS", "JavaScript", "Figma"],
    figmaLink:
      "https://www.figma.com/design/VGyqrrR3OAjr8x56nYLgh4/ProfileDesign?node-id=0-1&t=iPpCXlZ5VxuWhXeL-1",
    liveLink: "https://www.ashikrajbhandari.com.np/",
  },
  {
    id: 3,
    title: "Memory Card Game",
    description:
      "Developed an interactive memory card game using HTML, CSS, and JavaScript. Players test their memory by matching pairs of cards, featuring smooth animations, score tracking, and responsive design for both desktop and mobile play.",
    image: "/ayush-portfolio/image/memorycard.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://yush627.github.io/memory-card-game/",
  },
];
const Projects: React.FC = () => {
  return (
    <Box id="projects" sx={{ py: 10, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" textAlign="center">
          Projects
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 5 }}>
          A selection of my recent work and academic projects
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            justifyContent: "center",
          }}>
          {projects.map((project) => (
            <Card
              key={project.id}
              sx={{
                flex: "1 1 300px",
                maxWidth: "400px",
                minWidth: "280px",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}>
              <CardMedia
                component="img"
                height="160"
                image={project.image}
                alt={project.title}
                sx={{ backgroundColor: "#e0e0e0" }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  fontWeight="bold"
                  component="h3">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  flexWrap="wrap"
                  useFlexGap
                  sx={{ mt: 2 }}>
                  {project.technologies.slice(0, 5).map((tech, index) => (
                    <Chip
                      key={index}
                      label={tech}
                      size="small"
                      variant="outlined"
                      sx={{
                        m: 0.5,
                      }}
                    />
                  ))}
                  {/* {project.technologies.length > 3 && (
                    <Chip
                      label={`+${project.technologies.length - 3}`}
                      size="small"
                      variant="outlined"
                      sx={{ mb: 1 }}
                    />
                  )} */}
                </Stack>
              </CardContent>
              <CardActions>
                {project.figmaLink && (
                  <Button
                    size="small"
                    startIcon={<DesignServicesIcon />}
                    href={project.figmaLink}
                    target="_blank">
                    Figma
                  </Button>
                )}
                {project.liveLink && (
                  <Button
                    size="small"
                    startIcon={<LinkIcon />}
                    href={project.liveLink}
                    target="_blank">
                    Live
                  </Button>
                )}
                {project.githubLink && (
                  <Button
                    size="small"
                    startIcon={<GitHubIcon />}
                    href={project.githubLink}
                    target="_blank">
                    Code
                  </Button>
                )}
              </CardActions>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
