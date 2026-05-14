/**
 * Generated Tool: workspacesTool_0703
 * Domain: Workspaces
 * ID: 0703
 */
exports.workspacesTool_0703 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0703:', error);
    throw error;
  }
};
