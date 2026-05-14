/**
 * Generated Tool: workspacesTool_0731
 * Domain: Workspaces
 * ID: 0731
 */
exports.workspacesTool_0731 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0731:', error);
    throw error;
  }
};
