/**
 * Generated Tool: workspacesTool_0928
 * Domain: Workspaces
 * ID: 0928
 */
exports.workspacesTool_0928 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0928:', error);
    throw error;
  }
};
