/**
 * Generated Tool: workspacesTool_0098
 * Domain: Workspaces
 * ID: 0098
 */
exports.workspacesTool_0098 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0098:', error);
    throw error;
  }
};
