/**
 * Generated Tool: workspacesTool_0951
 * Domain: Workspaces
 * ID: 0951
 */
exports.workspacesTool_0951 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0951:', error);
    throw error;
  }
};
