/**
 * Generated Tool: workspacesTool_0099
 * Domain: Workspaces
 * ID: 0099
 */
exports.workspacesTool_0099 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0099:', error);
    throw error;
  }
};
