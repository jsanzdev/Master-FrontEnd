import * as apiModel from "./api/project.api-model";
import * as viewModel from "./project.vm";
import { mapProjectFromApiToVm } from "./project.mapper";

describe("project.mapper specs", () => {
  describe("mapProjectFromApiToVm", () => {
    it("should return empty project when feeding null project", () => {
      // Arrange
      const project = null;

      // Act
      const result = mapProjectFromApiToVm(project);

      // Assert
      const expectedResult = viewModel.createEmptyProject();
      expect(result).toEqual(expectedResult);
    });

    it("should map project from api to vm when feeding project with data", () => {
      // Arrange
      const project: apiModel.Project = {
        id: "1",
        name: "Test Project",
        isActive: true,
        employees: [
          {
            id: "1",
            isAssigned: true,
            employeeName: "John Doe",
          },
          {
            id: "2",
            isAssigned: false,
            employeeName: "Jane Smith",
          },
        ],
      };

      // Act
      const result = mapProjectFromApiToVm(project);

      // Assert
      expect(result).toEqual({
        id: "1",
        name: "Test Project",
        isActive: true,
        employees: [
          {
            id: "1",
            isAssigned: true,
            employeeName: "John Doe",
          },
          {
            id: "2",
            isAssigned: false,
            employeeName: "Jane Smith",
          },
        ],
      });
    });

    it("should map project from api to vm when feeding project with empty employees", () => {
      // Arrange
      const project: apiModel.Project = {
        id: "1",
        name: "Test Project",
        isActive: true,
        employees: [],
      };

      // Act
      const result = mapProjectFromApiToVm(project);

      // Assert
      expect(result).toEqual({
        id: "1",
        name: "Test Project",
        isActive: true,
        employees: [],
      });
    });
  });
});
