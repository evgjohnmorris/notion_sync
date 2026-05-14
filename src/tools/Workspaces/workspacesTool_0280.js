/**
 * Generated Tool: workspacesTool_0280
 * Domain: Workspaces
 * ID: 0280
 */
exports.workspacesTool_0280 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0280:', error);
    throw error;
  }
};
