/**
 * Generated Tool: workspacesTool_0159
 * Domain: Workspaces
 * ID: 0159
 */
exports.workspacesTool_0159 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0159:', error);
    throw error;
  }
};
