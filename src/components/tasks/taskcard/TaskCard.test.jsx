// src/components/task/taskcard/TaskCard.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TaskCard from "./TaskCard";

describe("TaskCard Component", () => {
  it("renders the correct content", () => {
    render(<TaskCard title="Test Task" description="This is a test task." dueDate="2024-10-28" progress={50} />);

    // Verifica que el título, la descripción y la fecha de vencimiento se renderizan correctamente
    expect(screen.getByText("Test Task")).toBeInTheDocument();
    expect(screen.getByText("This is a test task.")).toBeInTheDocument();
    // Check Due Date
    expect(
      screen.getByText(
        (content) => content.includes("28/10/2024") // o content.includes('27/10/2024') dependiendo de qué fecha esperas
      )
    ).toBeInTheDocument();

    // Verifica que el progreso se renderiza correctamente
    expect(screen.getByText("Progress: 50%")).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toHaveValue(50);
  });

  it("marks the task as completed when the button is clicked", () => {
    render(<TaskCard title="Test Task" description="This is a test task." progress={50} />);

    // Verifica que el botón "Mark as Completed" está presente
    expect(screen.getByText("Mark as Completed")).toBeInTheDocument();

    // Simula un clic en el botón
    fireEvent.click(screen.getByText("Mark as Completed"));

    // Verifica que el texto "Task Completed!" aparece después de hacer clic
    expect(screen.getByText("Task Completed!")).toBeInTheDocument();

    // Verifica que el botón ya no se muestra después de completar la tarea
    expect(screen.queryByText("Mark as Completed")).not.toBeInTheDocument();
  });

  it("does not render the due date if it is not provided", () => {
    render(<TaskCard title="Test Task" description="This is a test task." progress={50} />);

    // Verifica que no aparece la fecha de vencimiento
    expect(screen.queryByText(/Due Date:/)).not.toBeInTheDocument();
  });

  it("renders without crashing when optional props are not provided", () => {
    render(<TaskCard title="Test Task" description="This is a test task." />);

    // Verifica que el título y la descripción se renderizan correctamente
    expect(screen.getByText("Test Task")).toBeInTheDocument();
    expect(screen.getByText("This is a test task.")).toBeInTheDocument();
  });
});
