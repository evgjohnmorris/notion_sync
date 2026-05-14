/**
 * Generated Tool: workspacesTool_0251
 * Domain: Workspaces
 * ID: 0251
 */
exports.workspacesTool_0251 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0251:', error);
    throw error;
  }
};
