/**
 * Generated Tool: workspacesTool_0026
 * Domain: Workspaces
 * ID: 0026
 */
exports.workspacesTool_0026 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0026:', error);
    throw error;
  }
};
