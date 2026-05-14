/**
 * Generated Tool: workspacesTool_0846
 * Domain: Workspaces
 * ID: 0846
 */
exports.workspacesTool_0846 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0846:', error);
    throw error;
  }
};
