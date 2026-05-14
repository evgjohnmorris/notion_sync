/**
 * Generated Tool: workspacesTool_0228
 * Domain: Workspaces
 * ID: 0228
 */
exports.workspacesTool_0228 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0228:', error);
    throw error;
  }
};
