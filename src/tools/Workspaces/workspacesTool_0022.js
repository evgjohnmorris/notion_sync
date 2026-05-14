/**
 * Generated Tool: workspacesTool_0022
 * Domain: Workspaces
 * ID: 0022
 */
exports.workspacesTool_0022 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0022:', error);
    throw error;
  }
};
