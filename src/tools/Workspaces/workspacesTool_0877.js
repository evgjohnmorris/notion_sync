/**
 * Generated Tool: workspacesTool_0877
 * Domain: Workspaces
 * ID: 0877
 */
exports.workspacesTool_0877 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0877:', error);
    throw error;
  }
};
