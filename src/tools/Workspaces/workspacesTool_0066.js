/**
 * Generated Tool: workspacesTool_0066
 * Domain: Workspaces
 * ID: 0066
 */
exports.workspacesTool_0066 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0066:', error);
    throw error;
  }
};
