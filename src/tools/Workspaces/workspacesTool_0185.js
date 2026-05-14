/**
 * Generated Tool: workspacesTool_0185
 * Domain: Workspaces
 * ID: 0185
 */
exports.workspacesTool_0185 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0185:', error);
    throw error;
  }
};
