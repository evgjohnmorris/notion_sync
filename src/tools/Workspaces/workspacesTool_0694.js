/**
 * Generated Tool: workspacesTool_0694
 * Domain: Workspaces
 * ID: 0694
 */
exports.workspacesTool_0694 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0694:', error);
    throw error;
  }
};
