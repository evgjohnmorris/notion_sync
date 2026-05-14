/**
 * Generated Tool: workspacesTool_0900
 * Domain: Workspaces
 * ID: 0900
 */
exports.workspacesTool_0900 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0900:', error);
    throw error;
  }
};
