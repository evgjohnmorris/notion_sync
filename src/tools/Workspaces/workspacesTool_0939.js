/**
 * Generated Tool: workspacesTool_0939
 * Domain: Workspaces
 * ID: 0939
 */
exports.workspacesTool_0939 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0939:', error);
    throw error;
  }
};
