import { render, screen, fireEvent } from "@testing-library/react";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Deve permitir inserir dois comentários e exibi-los", () => {
    render(<PostComment />);

    const input = screen.getByTestId("comment-input");
    const button = screen.getByTestId("comment-button");

    // Primeiro comentário
    fireEvent.change(input, { target: { value: "Comentário 1" } });
    fireEvent.click(button);

    // Segundo comentário
    fireEvent.change(input, { target: { value: "Comentário 2" } });
    fireEvent.click(button);

    // Verificações
    expect(screen.getByTestId("comment-0")).toHaveTextContent("Comentário 1");
    expect(screen.getByTestId("comment-1")).toHaveTextContent("Comentário 2");
  });
});
