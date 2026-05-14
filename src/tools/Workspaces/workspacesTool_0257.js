/**
 * Generated Tool: workspacesTool_0257
 * Domain: Workspaces
 * ID: 0257
 */
exports.workspacesTool_0257 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0257:', error);
    throw error;
  }
};
