/**
 * Generated Tool: workspacesTool_0144
 * Domain: Workspaces
 * ID: 0144
 */
exports.workspacesTool_0144 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0144:', error);
    throw error;
  }
};
