/**
 * Generated Tool: workspacesTool_0366
 * Domain: Workspaces
 * ID: 0366
 */
exports.workspacesTool_0366 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0366:', error);
    throw error;
  }
};
