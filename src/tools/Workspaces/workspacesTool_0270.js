/**
 * Generated Tool: workspacesTool_0270
 * Domain: Workspaces
 * ID: 0270
 */
exports.workspacesTool_0270 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0270:', error);
    throw error;
  }
};
