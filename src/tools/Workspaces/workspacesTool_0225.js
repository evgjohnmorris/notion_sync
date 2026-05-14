/**
 * Generated Tool: workspacesTool_0225
 * Domain: Workspaces
 * ID: 0225
 */
exports.workspacesTool_0225 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0225:', error);
    throw error;
  }
};
