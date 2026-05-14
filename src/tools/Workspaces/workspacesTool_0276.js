/**
 * Generated Tool: workspacesTool_0276
 * Domain: Workspaces
 * ID: 0276
 */
exports.workspacesTool_0276 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0276:', error);
    throw error;
  }
};
